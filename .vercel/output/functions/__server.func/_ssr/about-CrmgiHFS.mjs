import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteHeader-CtA9g-1o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CrmgiHFS.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-2xl font-semibold",
		children: "About Memedroid Legacy"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-3 text-pretty text-sm leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is an unofficial revival of the Memedroid experience for devices that cannot run the modern site: iPhone 4, iPad 2, iOS 6, and iOS 9.3.5." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Feed code starts from",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-brand underline",
					href: "https://github.com/theabbie/memedroid",
					children: "theabbie/memedroid"
				}),
				", the unofficial Node client that talks to",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "font-mono",
					children: "appv2.memedroid.com"
				}),
				". Login uses that exact ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "font-mono",
					children: "login_by_username"
				}),
				" contract. Live galleries scrape public Memedroid HTML when Cloudflare allows it, then fall back to the JPEG archive so old Safari is never stuck on a blank page."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Old Safari has no WebP, no fetch(), no flexbox you can trust, and no ES6. The ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-brand underline",
					href: "/legacy/",
					children: "iOS 6 site"
				}),
				" is HTML 4 tables, CSS2, and XMLHttpRequest."
			] })
		]
	})] });
}
//#endregion
export { AboutPage as component };
