import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GALLERIES, o as findMeme, r as Route$8 } from "./router-BIs6u-ML.mjs";
import { t as SiteShell } from "./SiteHeader-CtA9g-1o.mjs";
import { i as useLocalBoard, n as formatAge, r as scoreColor, t as VoteBar } from "./useLocalBoard-Db1qtnoe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUlHYoX9.js
var import_jsx_runtime = require_jsx_runtime();
function MemeCard({ meme, vote, faved, onVote, onFav }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08),0_1px_2px_rgba(28,20,16,0.06)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3 px-4 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance font-display text-lg font-semibold leading-snug",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/meme/$id",
						params: { id: meme.id },
						className: "text-ink hover:text-brand",
						children: meme.title
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-xs text-muted",
					children: formatAge(meme.hoursAgo)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-4 pb-2 text-xs text-muted",
				children: [
					"by ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink/80",
						children: meme.author
					}),
					meme.live ? " · live" : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/meme/$id",
				params: { id: meme.id },
				className: "block bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: meme.image,
					alt: meme.title,
					className: "mx-auto max-h-[540px] w-full object-contain outline outline-1 -outline-offset-1 outline-black/10"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `tabular-nums text-lg font-semibold ${scoreColor(meme.score)}`,
						children: [meme.score, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted tabular-nums",
						children: [meme.votes, " votes"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteBar, {
						vote,
						onVote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onFav,
						className: `ml-auto h-11 rounded-md px-3 text-sm font-medium ${faved ? "bg-brand text-brand-fg" : "text-muted hover:bg-paper"}`,
						children: faved ? "Saved" : "Save"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/meme/$id",
						params: { id: meme.id },
						className: "inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted hover:text-ink",
						children: [meme.comments.length, " comments"]
					})
				]
			})
		]
	});
}
function Home() {
	const feed = Route$8.useLoaderData();
	const search = Route$8.useSearch();
	const board = useLocalBoard();
	const gallery = search?.g ?? "trending";
	const query = search?.q ?? "";
	const memes = gallery === "favorites" ? board.favs.map((id) => findMeme(id)).filter((m) => Boolean(m)) : feed.memes;
	const heading = query ? `Search: ${query}` : GALLERIES.find((g) => g.id === gallery)?.label ?? "Trending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		gallery,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 rounded-lg bg-card px-4 py-3 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl font-semibold tracking-tight",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-pretty text-sm text-muted",
				children: "A restored Memedroid for iPhone 4, iPad 2, and iOS 9.3.5. JPEG images, no WebP, no service workers. On a 2012 device, open the iOS 6 site."
			})]
		}), memes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-lg bg-card px-4 py-10 text-center text-sm text-muted",
			children: gallery === "favorites" ? "No saved memes yet. Tap Save on a post." : "No memes matched that search."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-4",
			children: memes.map((meme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemeCard, {
				meme,
				vote: board.votes[meme.id],
				faved: board.favs.includes(meme.id),
				onVote: (dir) => board.vote(meme.id, dir),
				onFav: () => board.toggleFav(meme.id)
			}, meme.id))
		})]
	});
}
//#endregion
export { Home as component };
