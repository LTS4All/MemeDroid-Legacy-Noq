import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GALLERIES } from "./router-BIs6u-ML.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteHeader-CtA9g-1o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var extra = [
	{
		to: "/generate",
		label: "Generate"
	},
	{
		to: "/ios",
		label: "iOS app"
	},
	{
		to: "/legacy/",
		label: "iOS 6 site",
		external: true
	}
];
function SiteHeader({ gallery }) {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	function onSearch(e) {
		e.preventDefault();
		navigate({
			to: "/",
			search: {
				g: "trending",
				q: q.trim()
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "bg-header text-brand-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl items-center gap-3 px-3 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				search: {
					g: "trending",
					q: ""
				},
				className: "flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.jpg",
					alt: "",
					width: 40,
					height: 40,
					className: "size-10 rounded-md outline outline-1 -outline-offset-1 outline-black/20"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-lg font-semibold leading-tight tracking-tight",
						children: "memedroid"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[11px] uppercase tracking-[0.16em] text-brand-fg/80",
						children: "Legacy"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onSearch,
				className: "ml-auto flex min-w-0 flex-1 justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "q",
					children: "Search memes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "q",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search memes",
					className: "h-10 w-full max-w-56 rounded-md bg-brand-fg px-3 text-sm text-ink placeholder:text-muted outline-none"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-black/10 bg-brand-dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl gap-0 overflow-x-auto px-1",
				children: [GALLERIES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					search: {
						g: g.id,
						q: ""
					},
					className: `shrink-0 px-3 py-2.5 text-sm font-medium ${gallery === g.id ? "bg-paper text-ink" : "text-brand-fg/90 hover:bg-black/10"}`,
					children: g.label
				}, g.id)), extra.map((item) => "external" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.to,
					className: "shrink-0 px-3 py-2.5 text-sm font-medium text-brand-fg/90 hover:bg-black/10",
					children: item.label
				}, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "shrink-0 px-3 py-2.5 text-sm font-medium text-brand-fg/90 hover:bg-black/10",
					children: item.label
				}, item.to))]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mx-auto max-w-3xl px-4 py-10 text-center text-sm text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Memedroid Legacy — unofficial client for old iPhones and iPads." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1",
			children: [
				"Uses the open",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-brand underline",
					href: "https://github.com/theabbie/memedroid",
					children: "theabbie/memedroid"
				}),
				" ",
				"API. Not affiliated with Memedroid."
			]
		})]
	});
}
function SiteShell({ gallery, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { gallery }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-3xl px-3 py-4",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SiteShell as t };
