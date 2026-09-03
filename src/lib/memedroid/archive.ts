import catalogJson from "./catalog.json";
import type { Catalog, GalleryId, Meme, MemeTemplate } from "./types";

const catalog = catalogJson as Catalog;

export function getCatalog(): Catalog {
  return catalog;
}

export function allMemes(): Meme[] {
  return catalog.memes;
}

export function allTemplates(): MemeTemplate[] {
  return catalog.templates;
}

export function findMeme(id: string): Meme | undefined {
  return catalog.memes.find((m) => m.id === id);
}

export function findTemplate(id: string): MemeTemplate | undefined {
  return catalog.templates.find((t) => t.id === id);
}

export function memesForGallery(gallery: GalleryId): Meme[] {
  const list = catalog.memes.slice();
  if (gallery === "random") {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = list[i]!;
      list[i] = list[j]!;
      list[j] = tmp;
    }
    return list;
  }
  if (gallery === "latest") {
    return list.sort((a, b) => a.hoursAgo - b.hoursAgo);
  }
  if (gallery === "top") {
    return list.sort((a, b) => b.score - a.score || b.votes - a.votes);
  }
  if (gallery === "classics") {
    return list.filter((m) => m.gallery.includes("classics"));
  }
  return list
    .filter((m) => m.gallery.includes("trending") || m.gallery.includes("top"))
    .sort((a, b) => b.votes - a.votes);
}

export function searchMemes(query: string): Meme[] {
  const q = query.trim().toLowerCase();
  if (!q) return memesForGallery("trending");
  return catalog.memes.filter((m) => {
    const blob = `${m.title} ${m.author} ${m.tags.join(" ")} ${m.top ?? ""} ${m.bottom ?? ""}`.toLowerCase();
    return blob.includes(q);
  });
}
