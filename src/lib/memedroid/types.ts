export type GalleryId =
  | "trending"
  | "latest"
  | "top"
  | "classics"
  | "random"
  | "favorites";

export type MemeComment = {
  user: string;
  text: string;
  hoursAgo: number;
};

export type Meme = {
  id: string;
  title: string;
  image: string;
  thumb: string;
  author: string;
  gallery: string[];
  tags: string[];
  score: number;
  votes: number;
  hoursAgo: number;
  comments: MemeComment[];
  top?: string;
  bottom?: string;
  live?: boolean;
};

export type MemeTemplate = {
  id: string;
  name: string;
  image: string;
  boxes: number;
};

export type Catalog = {
  memes: Meme[];
  templates: MemeTemplate[];
};

export type FeedResponse = {
  source: "archive" | "mixed";
  gallery: string;
  page: number;
  memes: Meme[];
};

export const GALLERIES: { id: GalleryId; label: string }[] = [
  { id: "trending", label: "Trending" },
  { id: "latest", label: "Latest" },
  { id: "top", label: "Top" },
  { id: "classics", label: "Classics" },
  { id: "random", label: "Random" },
  { id: "favorites", label: "Favorites" },
];
