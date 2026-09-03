import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/SiteHeader";
import { VoteBar } from "@/components/VoteBar";
import { useLocalBoard } from "@/hooks/useLocalBoard";
import { findMeme } from "@/lib/memedroid/archive";
import { formatAge, scoreColor } from "@/lib/utils";

export const Route = createFileRoute("/meme/$id")({
  loader: ({ params }) => {
    const meme = findMeme(params.id);
    if (!meme) throw notFound();
    return meme;
  },
  component: MemePage,
  notFoundComponent: () => (
    <SiteShell>
      <p className="py-16 text-center text-muted">That meme is gone.</p>
    </SiteShell>
  ),
});

function MemePage() {
  const meme = Route.useLoaderData();
  const board = useLocalBoard();
  const [text, setText] = useState("");
  const comments = [...meme.comments, ...(board.extraComments[meme.id] ?? [])];

  function submit(e: FormEvent) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    board.addComment(meme.id, t);
    setText("");
  }

  return (
    <SiteShell>
      <Link to="/" search={{ g: "trending", q: "" }} className="mb-3 inline-block text-sm text-brand">
        Back to feed
      </Link>
      <article className="overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
        <div className="px-4 pt-4">
          <h1 className="text-balance font-display text-2xl font-semibold leading-tight">
            {meme.title}
          </h1>
          <p className="mt-1 text-sm text-muted">
            by {meme.author} · {formatAge(meme.hoursAgo)} · {meme.tags.join(", ")}
          </p>
        </div>
        <img
          src={meme.image}
          alt={meme.title}
          className="mt-3 w-full object-contain outline outline-1 -outline-offset-1 outline-black/10"
        />
        <div className="flex flex-wrap items-center gap-3 px-4 py-3">
          <span className={`tabular-nums text-xl font-semibold ${scoreColor(meme.score)}`}>
            {meme.score}%
          </span>
          <span className="text-sm text-muted tabular-nums">{meme.votes} votes</span>
          <VoteBar vote={board.votes[meme.id]} onVote={(d) => board.vote(meme.id, d)} />
          <button
            type="button"
            onClick={() => board.toggleFav(meme.id)}
            className={`ml-auto h-11 rounded-md px-3 text-sm font-medium ${
              board.favs.includes(meme.id)
                ? "bg-brand text-brand-fg"
                : "text-muted hover:bg-paper"
            }`}
          >
            {board.favs.includes(meme.id) ? "Saved" : "Save"}
          </button>
        </div>
      </article>

      <section className="mt-5 rounded-xl bg-card px-4 py-4 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
        <h2 className="font-display text-lg font-semibold">Comments</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {comments.length === 0 ? (
            <li className="text-sm text-muted">No comments yet.</li>
          ) : (
            comments.map((c, i) => (
              <li key={`${c.user}-${i}`} className="border-t border-line pt-3 first:border-0 first:pt-0">
                <p className="text-sm">
                  <span className="font-medium">{c.user}</span>
                  <span className="ml-2 text-xs text-muted">{formatAge(c.hoursAgo)}</span>
                </p>
                <p className="mt-1 text-pretty text-sm">{c.text}</p>
              </li>
            ))
          )}
        </ul>
        <form onSubmit={submit} className="mt-4 flex flex-col gap-2">
          <label className="text-xs font-medium text-muted" htmlFor="nick">
            Nickname
          </label>
          <input
            id="nick"
            value={board.nick}
            onChange={(e) => board.setNick(e.target.value)}
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
          />
          <label className="text-xs font-medium text-muted" htmlFor="comment">
            Add a comment
          </label>
          <textarea
            id="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            className="rounded-md bg-paper px-3 py-2 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-brand px-4 text-sm font-semibold text-brand-fg"
          >
            Post comment
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
