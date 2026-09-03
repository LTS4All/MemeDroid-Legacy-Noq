import { Link } from "@tanstack/react-router";
import { formatAge, scoreColor } from "@/lib/utils";
import type { Meme } from "@/lib/memedroid/types";
import { VoteBar } from "./VoteBar";

export function MemeCard({
  meme,
  vote,
  faved,
  onVote,
  onFav,
}: {
  meme: Meme;
  vote?: 1 | -1;
  faved?: boolean;
  onVote: (dir: 1 | -1) => void;
  onFav: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08),0_1px_2px_rgba(28,20,16,0.06)]">
      <div className="flex items-baseline justify-between gap-3 px-4 pt-3">
        <h2 className="text-balance font-display text-lg font-semibold leading-snug">
          <Link
            to="/meme/$id"
            params={{ id: meme.id }}
            className="text-ink hover:text-brand"
          >
            {meme.title}
          </Link>
        </h2>
        <span className="shrink-0 text-xs text-muted">{formatAge(meme.hoursAgo)}</span>
      </div>
      <p className="px-4 pb-2 text-xs text-muted">
        by <span className="font-medium text-ink/80">{meme.author}</span>
        {meme.live ? " · live" : null}
      </p>
      <Link to="/meme/$id" params={{ id: meme.id }} className="block bg-paper">
        <img
          src={meme.image}
          alt={meme.title}
          className="mx-auto max-h-[540px] w-full object-contain outline outline-1 -outline-offset-1 outline-black/10"
        />
      </Link>
      <div className="flex flex-wrap items-center gap-2 px-3 py-3">
        <span className={`tabular-nums text-lg font-semibold ${scoreColor(meme.score)}`}>
          {meme.score}%
        </span>
        <span className="text-xs text-muted tabular-nums">{meme.votes} votes</span>
        <VoteBar vote={vote} onVote={onVote} />
        <button
          type="button"
          onClick={onFav}
          className={`ml-auto h-11 rounded-md px-3 text-sm font-medium ${
            faved ? "bg-brand text-brand-fg" : "text-muted hover:bg-paper"
          }`}
        >
          {faved ? "Saved" : "Save"}
        </button>
        <Link
          to="/meme/$id"
          params={{ id: meme.id }}
          className="inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted hover:text-ink"
        >
          {meme.comments.length} comments
        </Link>
      </div>
    </article>
  );
}
