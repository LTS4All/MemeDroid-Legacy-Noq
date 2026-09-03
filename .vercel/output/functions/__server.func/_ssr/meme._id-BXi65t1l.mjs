import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$1 } from "./router-BIs6u-ML.mjs";
import { t as SiteShell } from "./SiteHeader-CtA9g-1o.mjs";
import { i as useLocalBoard, n as formatAge, r as scoreColor, t as VoteBar } from "./useLocalBoard-Db1qtnoe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meme._id-BXi65t1l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MemePage() {
	const meme = Route$1.useLoaderData();
	const board = useLocalBoard();
	const [text, setText] = (0, import_react.useState)("");
	const comments = [...meme.comments, ...board.extraComments[meme.id] ?? []];
	function submit(e) {
		e.preventDefault();
		const t = text.trim();
		if (!t) return;
		board.addComment(meme.id, t);
		setText("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			search: {
				g: "trending",
				q: ""
			},
			className: "mb-3 inline-block text-sm text-brand",
			children: "Back to feed"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-balance font-display text-2xl font-semibold leading-tight",
						children: meme.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"by ",
							meme.author,
							" · ",
							formatAge(meme.hoursAgo),
							" · ",
							meme.tags.join(", ")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: meme.image,
					alt: meme.title,
					className: "mt-3 w-full object-contain outline outline-1 -outline-offset-1 outline-black/10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `tabular-nums text-xl font-semibold ${scoreColor(meme.score)}`,
							children: [meme.score, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted tabular-nums",
							children: [meme.votes, " votes"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteBar, {
							vote: board.votes[meme.id],
							onVote: (d) => board.vote(meme.id, d)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => board.toggleFav(meme.id),
							className: `ml-auto h-11 rounded-md px-3 text-sm font-medium ${board.favs.includes(meme.id) ? "bg-brand text-brand-fg" : "text-muted hover:bg-paper"}`,
							children: board.favs.includes(meme.id) ? "Saved" : "Save"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-5 rounded-xl bg-card px-4 py-4 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Comments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-3",
					children: comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: "No comments yet."
					}) : comments.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-3 first:border-0 first:pt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: c.user
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs text-muted",
								children: formatAge(c.hoursAgo)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-pretty text-sm",
							children: c.text
						})]
					}, `${c.user}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-4 flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted",
							htmlFor: "nick",
							children: "Nickname"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "nick",
							value: board.nick,
							onChange: (e) => board.setNick(e.target.value),
							className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted",
							htmlFor: "comment",
							children: "Add a comment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "comment",
							value: text,
							onChange: (e) => setText(e.target.value),
							rows: 3,
							className: "rounded-md bg-paper px-3 py-2 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "h-11 rounded-md bg-brand px-4 text-sm font-semibold text-brand-fg",
							children: "Post comment"
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { MemePage as component };
