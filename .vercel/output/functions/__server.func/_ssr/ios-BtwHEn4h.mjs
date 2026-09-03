import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteHeader-CtA9g-1o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ios-BtwHEn4h.js
var import_jsx_runtime = require_jsx_runtime();
function IosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold tracking-tight",
			children: "Objective-C iOS app"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-prose text-pretty text-sm text-muted",
			children: "Memedroid Legacy for iPhone is a native UIKit app written in Objective-C. Deployment target is iOS 6.0, so it is meant for iPhone 3GS through iPhone 4S and iOS 9.3.5 devices that Apple left behind."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center bg-ink px-6 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[220px] rounded-[28px] bg-[#1a1a1a] p-2 shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-[22px] bg-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-header px-3 py-2 text-center text-[11px] font-semibold text-brand-fg",
								children: "memedroid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/memes/2001.jpg",
								alt: "",
								className: "h-40 w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-2 py-2 text-[10px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-up",
									children: "99%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Trending"
								})]
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 px-5 py-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Built like a 2012 App Store client: UINavigationBar, UITableView, JSON over NSURLConnection. No Swift, no Auto Layout requirement, no storyboards." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-1 pl-5 text-pretty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Target: iOS 6.0 – 9.3.5 (armv7, 32-bit)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Language: Objective-C, ARC" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Networking: NSURLConnection (no NSURLSession)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Alerts: UIAlertView (no UIAlertController)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Layout: springs and struts, 44pt hit targets" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Images: JPEG only (WebP is not in iOS 6 or 9 Safari/UIKit)" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/ios/MemedroidLegacy-src.zip",
						className: "inline-flex h-12 items-center justify-center rounded-md bg-brand px-5 font-semibold text-brand-fg",
						children: "Download source (zip)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Open ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono",
								children: "ios/MemedroidLegacy.xcodeproj"
							}),
							" in Xcode 4.6–7 to ship to an iPhone 4. Newer Xcode can still read the sources; set the lowest deployment target it allows."
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 rounded-xl bg-card px-5 py-5 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Point it at this site"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-pretty text-sm text-muted",
					children: [
						"The app talks JSON to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "/api/feed"
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "/api/meme/ID"
						}),
						". Set",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "kMDAPIBaseURL"
						}),
						" in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "MDAPIClient.h"
						}),
						" to this origin."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-3 overflow-x-auto rounded-md bg-ink p-3 text-xs text-brand-fg",
					children: `#define kMDAPIBaseURL @"https://YOUR-HOST"
GET /api/feed?g=trending
GET /api/meme/2001
GET /api/templates`
				})
			]
		})
	] });
}
//#endregion
export { IosPage as component };
