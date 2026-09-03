import type { MemeComment } from "./memedroid/types";

const KEY = "md-legacy-v1";

export type LocalState = {
  votes: Record<string, 1 | -1>;
  favs: string[];
  extraComments: Record<string, MemeComment[]>;
  nick: string;
};

const empty: LocalState = { votes: {}, favs: [], extraComments: {}, nick: "guest" };

export function loadState(): LocalState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<LocalState>;
    return {
      votes: parsed.votes ?? {},
      favs: parsed.favs ?? [],
      extraComments: parsed.extraComments ?? {},
      nick: parsed.nick || "guest",
    };
  } catch {
    return empty;
  }
}

export function saveState(state: LocalState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}
