import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as allTemplates } from "./router-BIs6u-ML.mjs";
import { t as SiteShell } from "./SiteHeader-CtA9g-1o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-DuBJyXjb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GeneratePage() {
	const templates = (0, import_react.useMemo)(() => allTemplates(), []);
	const [tid, setTid] = (0, import_react.useState)(templates[0]?.id ?? "t-drake");
	const [top, setTop] = (0, import_react.useState)("OLD IPHONE");
	const [bottom, setBottom] = (0, import_react.useState)("NEW MEMES");
	const tpl = templates.find((t) => t.id === tid) ?? templates[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold tracking-tight",
			children: "Meme generator"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-prose text-pretty text-sm text-muted",
			children: "Classic top / bottom captions. Works in this browser with CSS overlay, and on iOS 6 through the Legacy site (no canvas required)."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-card p-3 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
				children: tpl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-lg bg-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tpl.image,
							alt: tpl.name,
							className: "block w-full"
						}),
						top ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none absolute inset-x-2 top-3 text-center font-display text-xl font-bold uppercase leading-tight text-white [text-shadow:0_0_4px_#000,0_1px_0_#000,-1px_0_0_#000,1px_0_0_#000]",
							children: top
						}) : null,
						bottom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none absolute inset-x-2 bottom-3 text-center font-display text-xl font-bold uppercase leading-tight text-white [text-shadow:0_0_4px_#000,0_1px_0_#000,-1px_0_0_#000,1px_0_0_#000]",
							children: bottom
						}) : null
					]
				}) : null
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
				onSubmit: (e) => e.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium text-muted",
						htmlFor: "tpl",
						children: "Template"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "tpl",
						value: tid,
						onChange: (e) => setTid(e.target.value),
						className: "h-11 rounded-md bg-paper px-2 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]",
						children: templates.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: t.id,
							children: t.name
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium text-muted",
						htmlFor: "top",
						children: "Top text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "top",
						value: top,
						onChange: (e) => setTop(e.target.value),
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-medium text-muted",
						htmlFor: "bottom",
						children: "Bottom text"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "bottom",
						value: bottom,
						onChange: (e) => setBottom(e.target.value),
						className: "h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"On iPhone 4 / iOS 9, use the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-brand underline",
								href: "/legacy/generate.html",
								children: "Legacy generator"
							}),
							"."
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid grid-cols-3 gap-2 sm:grid-cols-5",
			children: templates.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTid(t.id),
				className: `overflow-hidden rounded-md ${t.id === tid ? "ring-2 ring-brand" : "opacity-90 hover:opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: t.image,
					alt: t.name,
					className: "aspect-square w-full object-cover"
				})
			}) }, t.id))
		})
	] });
}
//#endregion
export { GeneratePage as component };
