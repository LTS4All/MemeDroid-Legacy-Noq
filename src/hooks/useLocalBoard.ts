import { useCallback, useSyncExternalStore } from "react";
import { loadState, saveState, type LocalState } from "@/lib/storage";

let state = loadState();
const listeners = new Set<() => void>();

function emit() {
  saveState(state);
  listeners.forEach((l) => l());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnapshot(): LocalState {
  return state;
}

function getServerSnapshot(): LocalState {
  return { votes: {}, favs: [], extraComments: {}, nick: "guest" };
}

export function useLocalBoard() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const vote = useCallback((id: string, dir: 1 | -1) => {
    const next = { ...state, votes: { ...state.votes } };
    if (next.votes[id] === dir) delete next.votes[id];
    else next.votes[id] = dir;
    state = next;
    emit();
  }, []);

  const toggleFav = useCallback((id: string) => {
    const has = state.favs.includes(id);
    state = {
      ...state,
      favs: has ? state.favs.filter((x) => x !== id) : [...state.favs, id],
    };
    emit();
  }, []);

  const addComment = useCallback((id: string, text: string) => {
    const nick = state.nick || "guest";
    const entry = { user: nick, text, hoursAgo: 0 };
    state = {
      ...state,
      extraComments: {
        ...state.extraComments,
        [id]: [...(state.extraComments[id] ?? []), entry],
      },
    };
    emit();
  }, []);

  const setNick = useCallback((nick: string) => {
    state = { ...state, nick: nick.trim() || "guest" };
    emit();
  }, []);

  return { ...snap, vote, toggleFav, addComment, setNick };
}
