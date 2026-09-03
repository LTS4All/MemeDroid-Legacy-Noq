import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useLocalBoard-Db1qtnoe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatAge(hoursAgo) {
	if (hoursAgo < 1) return "now";
	if (hoursAgo < 24) return `${Math.round(hoursAgo)}h`;
	const days = Math.round(hoursAgo / 24);
	if (days < 14) return `${days}d`;
	return `${Math.round(days / 7)}w`;
}
function scoreColor(score) {
	if (score >= 90) return "text-up";
	if (score >= 70) return "text-brand";
	return "text-down";
}
function VoteBar({ vote, onVote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex overflow-hidden rounded-md shadow-[0_0_0_1px_rgba(28,20,16,0.1)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Upvote",
			onClick: () => onVote(1),
			className: `flex h-11 w-11 items-center justify-center ${vote === 1 ? "bg-up text-white" : "bg-card text-up hover:bg-paper"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 14 14",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M7 2 L13 11 H1 Z",
					fill: "currentColor"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Downvote",
			onClick: () => onVote(-1),
			className: `flex h-11 w-11 items-center justify-center ${vote === -1 ? "bg-down text-white" : "bg-card text-down hover:bg-paper"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "14",
				height: "14",
				viewBox: "0 0 14 14",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M7 12 L13 3 H1 Z",
					fill: "currentColor"
				})
			})
		})]
	});
}
var KEY = "md-legacy-v1";
var empty = {
	votes: {},
	favs: [],
	extraComments: {},
	nick: "guest"
};
function loadState() {
	if (typeof window === "undefined") return empty;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return empty;
		const parsed = JSON.parse(raw);
		return {
			votes: parsed.votes ?? {},
			favs: parsed.favs ?? [],
			extraComments: parsed.extraComments ?? {},
			nick: parsed.nick || "guest"
		};
	} catch {
		return empty;
	}
}
function saveState(state) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(state));
}
var state = loadState();
var listeners = /* @__PURE__ */ new Set();
function emit() {
	saveState(state);
	listeners.forEach((l) => l());
}
function subscribe(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function getSnapshot() {
	return state;
}
function getServerSnapshot() {
	return {
		votes: {},
		favs: [],
		extraComments: {},
		nick: "guest"
	};
}
function useLocalBoard() {
	const snap = (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
	const vote = (0, import_react.useCallback)((id, dir) => {
		const next = {
			...state,
			votes: { ...state.votes }
		};
		if (next.votes[id] === dir) delete next.votes[id];
		else next.votes[id] = dir;
		state = next;
		emit();
	}, []);
	const toggleFav = (0, import_react.useCallback)((id) => {
		const has = state.favs.includes(id);
		state = {
			...state,
			favs: has ? state.favs.filter((x) => x !== id) : [...state.favs, id]
		};
		emit();
	}, []);
	const addComment = (0, import_react.useCallback)((id, text) => {
		const entry = {
			user: state.nick || "guest",
			text,
			hoursAgo: 0
		};
		state = {
			...state,
			extraComments: {
				...state.extraComments,
				[id]: [...state.extraComments[id] ?? [], entry]
			}
		};
		emit();
	}, []);
	const setNick = (0, import_react.useCallback)((nick) => {
		state = {
			...state,
			nick: nick.trim() || "guest"
		};
		emit();
	}, []);
	return {
		...snap,
		vote,
		toggleFav,
		addComment,
		setNick
	};
}
//#endregion
export { useLocalBoard as i, formatAge as n, scoreColor as r, VoteBar as t };
