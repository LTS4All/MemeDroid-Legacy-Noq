import {
  allMemes,
  allTemplates,
  findMeme,
  findTemplate,
  memesForGallery,
  searchMemes,
} from "./archive";
import { scrapeGallery, WEB_GALLERY_PATHS } from "./unofficial";
import type { FeedResponse, GalleryId, Meme } from "./types";

function absoluteImage(origin: string, src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return origin + src;
}

function withOrigin(origin: string, memes: Meme[]): Meme[] {
  return memes.map((m) => ({
    ...m,
    image: absoluteImage(origin, m.image),
    thumb: absoluteImage(origin, m.thumb),
  }));
}

async function liveGallery(gallery: string): Promise<Meme[]> {
  const path = WEB_GALLERY_PATHS[gallery];
  if (!path) return [];
  try {
    const scraped = await scrapeGallery(path);
    return scraped.map((s) => ({
      id: s.id,
      title: s.title,
      image: `/api/img?u=${encodeURIComponent(s.image)}`,
      thumb: `/api/img?u=${encodeURIComponent(s.image)}`,
      author: "memedroid",
      gallery: [gallery],
      tags: [gallery],
      score: s.score,
      votes: s.votes,
      hoursAgo: s.hoursAgo,
      comments: [],
      live: true,
    }));
  } catch {
    return [];
  }
}

export async function getFeed(
  gallery: string,
  query: string | undefined,
  origin: string,
): Promise<FeedResponse> {
  const q = (query ?? "").trim();
  if (q) {
    return {
      source: "archive",
      gallery: "search",
      page: 1,
      memes: withOrigin(origin, searchMemes(q)),
    };
  }
  const g = (gallery || "trending") as GalleryId;
  if (g === "favorites") {
    return { source: "archive", gallery: g, page: 1, memes: [] };
  }
  const archive = memesForGallery(g);
  const live = await liveGallery(g);
  const merged = [...live, ...archive];
  const seen = new Set<string>();
  const unique = merged.filter((m) => {
    if (seen.has(m.id)) return false;
    seen.add(m.id);
    return true;
  });
  return {
    source: live.length ? "mixed" : "archive",
    gallery: g,
    page: 1,
    memes: withOrigin(origin, unique),
  };
}

export function getMemeById(id: string, origin: string): Meme | null {
  const found = findMeme(id);
  if (!found) return null;
  return withOrigin(origin, [found])[0] ?? null;
}

export function listTemplates(origin: string) {
  return allTemplates().map((t) => ({
    ...t,
    image: absoluteImage(origin, t.image),
  }));
}

export function templateById(id: string, origin: string) {
  const t = findTemplate(id);
  if (!t) return null;
  return { ...t, image: absoluteImage(origin, t.image) };
}

export { allMemes, findMeme, findTemplate };
