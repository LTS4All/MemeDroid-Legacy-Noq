import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteHeader";
import { MemeCard } from "@/components/MemeCard";
import { useLocalBoard } from "@/hooks/useLocalBoard";
import { getFeed } from "@/lib/memedroid/feed";
import { findMeme, memesForGallery } from "@/lib/memedroid/archive";
import type { GalleryId } from "@/lib/memedroid/types";
import { GALLERIES } from "@/lib/memedroid/types";

const galleries = new Set(GALLERIES.map((g) => g.id));

function parseGallery(value: unknown): GalleryId {
  if (typeof value === "string" && galleries.has(value as GalleryId)) {
    return value as GalleryId;
  }
  return "trending";
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    g: parseGallery(search.g),
    q: typeof search.q === "string" ? search.q : "",
  }),
  loaderDeps: ({ search }: { search?: { g?: GalleryId; q?: string } }) => ({
    g: parseGallery(search?.g),
    q: typeof search?.q === "string" ? search.q : "",
  }),
  loader: async ({ deps }) => {
    const g = parseGallery(deps.g);
    const q = deps.q ?? "";
    try {
      return await getFeed(g, q, "");
    } catch {
      const gallery = g === "favorites" ? "trending" : g;
      return {
        source: "archive" as const,
        gallery,
        page: 1,
        memes: memesForGallery(gallery),
      };
    }
  },
  component: Home,
});

function Home() {
  const feed = Route.useLoaderData();
  const search = Route.useSearch();
  const board = useLocalBoard();
  const gallery = search?.g ?? "trending";
  const query = search?.q ?? "";

  const memes =
    gallery === "favorites"
      ? board.favs
          .map((id) => findMeme(id))
          .filter((m): m is NonNullable<typeof m> => Boolean(m))
      : feed.memes;

  const heading = query
    ? `Search: ${query}`
    : GALLERIES.find((g) => g.id === gallery)?.label ?? "Trending";

  return (
    <SiteShell gallery={gallery}>
      <div className="mb-4 rounded-lg bg-card px-4 py-3 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
        <h1 className="font-display text-xl font-semibold tracking-tight">{heading}</h1>
        <p className="mt-1 text-pretty text-sm text-muted">
          A restored Memedroid for iPhone 4, iPad 2, and iOS 9.3.5. JPEG images, no WebP,
          no service workers. On a 2012 device, open the iOS 6 site.
        </p>
      </div>
      {memes.length === 0 ? (
        <p className="rounded-lg bg-card px-4 py-10 text-center text-sm text-muted">
          {gallery === "favorites"
            ? "No saved memes yet. Tap Save on a post."
            : "No memes matched that search."}
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {memes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              vote={board.votes[meme.id]}
              faved={board.favs.includes(meme.id)}
              onVote={(dir) => board.vote(meme.id, dir)}
              onFav={() => board.toggleFav(meme.id)}
            />
          ))}
        </div>
      )}
    </SiteShell>
  );
}
