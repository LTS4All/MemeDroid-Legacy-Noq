import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { spawn } from "node:child_process";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-D4Qd1fcl.js
var catalog = {
	memes: [
		{
			"id": "1001",
			"title": "Still running strong",
			"image": "/memes/1001.jpg",
			"thumb": "/memes/1001.jpg",
			"author": "iPhone4ever",
			"gallery": ["trending", "top"],
			"tags": [
				"ios",
				"iphone",
				"legacy"
			],
			"score": 96,
			"votes": 842,
			"hoursAgo": 3,
			"comments": [{
				"user": "oldschool",
				"text": "My iPad 2 is nodding in respect.",
				"hoursAgo": 2
			}, {
				"user": "safari6",
				"text": "WebP who? JPEG forever.",
				"hoursAgo": 1
			}],
			"top": "iOS 9.3.5",
			"bottom": "NEVER SURRENDER"
		},
		{
			"id": "1002",
			"title": "Peak computing",
			"image": "/memes/1002.jpg",
			"thumb": "/memes/1002.jpg",
			"author": "CRTKid",
			"gallery": ["trending", "latest"],
			"tags": ["computer", "nostalgia"],
			"score": 91,
			"votes": 512,
			"hoursAgo": 5,
			"comments": [{
				"user": "dialup",
				"text": "At least it does not autoplay a video.",
				"hoursAgo": 4
			}],
			"top": "WAITING FOR THE PAGE",
			"bottom": "SINCE 2012"
		},
		{
			"id": "1003",
			"title": "Quality assurance",
			"image": "/memes/1003.jpg",
			"thumb": "/memes/1003.jpg",
			"author": "CatQA",
			"gallery": ["trending", "top"],
			"tags": ["cats", "webdev"],
			"score": 98,
			"votes": 1204,
			"hoursAgo": 8,
			"comments": [{
				"user": "css2",
				"text": "The cat has the right idea.",
				"hoursAgo": 6
			}, {
				"user": "tablelayout",
				"text": "Tables never hurt anyone.",
				"hoursAgo": 3
			}],
			"top": "WHEN THE SITE USES REACT 19",
			"bottom": "ON AN IPHONE 4"
		},
		{
			"id": "1004",
			"title": "A simple choice",
			"image": "/memes/1004.jpg",
			"thumb": "/memes/1004.jpg",
			"author": "SideBySide",
			"gallery": ["trending", "latest"],
			"tags": ["iphone", "choice"],
			"score": 94,
			"votes": 677,
			"hoursAgo": 2,
			"comments": [{
				"user": "touchid",
				"text": "Left one still has a headphone jack in spirit.",
				"hoursAgo": 1
			}],
			"top": "iOS 18",
			"bottom": "iOS 6 LEGACY MODE"
		},
		{
			"id": "1005",
			"title": "Portrait mode: couch",
			"image": "/memes/1005.jpg",
			"thumb": "/memes/1005.jpg",
			"author": "CouchSurfer",
			"gallery": ["latest", "trending"],
			"tags": ["ipad", "memes"],
			"score": 89,
			"votes": 344,
			"hoursAgo": 6,
			"comments": [{
				"user": "retina",
				"text": "1024x768 was a lifestyle.",
				"hoursAgo": 5
			}],
			"top": "BROWSING MEMES",
			"bottom": "ON THE ORIGINAL IPAD"
		},
		{
			"id": "1006",
			"title": "The real bottleneck",
			"image": "/memes/1006.jpg",
			"thumb": "/memes/1006.jpg",
			"author": "PacketLoss",
			"gallery": ["latest", "random"],
			"tags": ["wifi", "home"],
			"score": 87,
			"votes": 219,
			"hoursAgo": 11,
			"comments": [{
				"user": "admin",
				"text": "Have you tried turning it off and on again?",
				"hoursAgo": 9
			}],
			"top": "NOT THE IPHONE 4",
			"bottom": "IT WAS THE WIFI"
		},
		{
			"id": "2001",
			"title": "Priorities",
			"image": "/memes/2001.jpg",
			"thumb": "/memes/2001.jpg",
			"author": "ObjCEnjoyer",
			"gallery": [
				"trending",
				"top",
				"classics"
			],
			"tags": [
				"objc",
				"ios",
				"swift"
			],
			"score": 99,
			"votes": 2103,
			"hoursAgo": 1,
			"comments": [{
				"user": "arc",
				"text": "retain/release built character.",
				"hoursAgo": 1
			}, {
				"user": "xcode4",
				"text": "Ship it.",
				"hoursAgo": 0
			}],
			"top": "REWRITE IT IN SWIFTUI",
			"bottom": "OBJECTIVE-C FOR iOS 6"
		},
		{
			"id": "2002",
			"title": "The update prompt",
			"image": "/memes/2002.jpg",
			"thumb": "/memes/2002.jpg",
			"author": "RedButton",
			"gallery": ["trending", "classics"],
			"tags": ["ios", "update"],
			"score": 97,
			"votes": 1888,
			"hoursAgo": 4,
			"comments": [{
				"user": "ota",
				"text": "There is no right button. Only the orange one.",
				"hoursAgo": 2
			}],
			"top": "UPDATE TO iOS 18",
			"bottom": "KEEP 9.3.5 FOREVER"
		},
		{
			"id": "2003",
			"title": "New tab vs old tab",
			"image": "/memes/2003.jpg",
			"thumb": "/memes/2003.jpg",
			"author": "WanderTab",
			"gallery": ["trending", "classics"],
			"tags": ["web", "memedroid"],
			"score": 95,
			"votes": 1560,
			"hoursAgo": 7,
			"comments": [{
				"user": "chrome",
				"text": "We all know how this ends.",
				"hoursAgo": 3
			}],
			"top": "HIM, LOOKING AT LEGACY MODE",
			"bottom": "THE MODERN WEB CAN WAIT"
		},
		{
			"id": "2004",
			"title": "Safari tabs",
			"image": "/memes/2004.jpg",
			"thumb": "/memes/2004.jpg",
			"author": "Boromeme",
			"gallery": ["classics", "top"],
			"tags": ["safari", "lotr"],
			"score": 93,
			"votes": 990,
			"hoursAgo": 14,
			"comments": [{
				"user": "ram512",
				"text": "Each tab is a personality.",
				"hoursAgo": 10
			}],
			"top": "ONE DOES NOT SIMPLY",
			"bottom": "CLOSE ALL SAFARI TABS"
		},
		{
			"id": "2005",
			"title": "Unpopular, correct",
			"image": "/memes/2005.jpg",
			"thumb": "/memes/2005.jpg",
			"author": "SkeuoFan",
			"gallery": [
				"classics",
				"trending",
				"top"
			],
			"tags": ["design", "ios6"],
			"score": 98,
			"votes": 2401,
			"hoursAgo": 9,
			"comments": [{
				"user": "linen",
				"text": "Linen texture was a public good.",
				"hoursAgo": 8
			}, {
				"user": "gloss",
				"text": "Those buttons had weight.",
				"hoursAgo": 4
			}],
			"top": "",
			"bottom": "iOS 6 WAS PEAK DESIGN"
		},
		{
			"id": "2006",
			"title": "32-bit in 2026",
			"image": "/memes/2006.jpg",
			"thumb": "/memes/2006.jpg",
			"author": "FineDog",
			"gallery": ["classics", "random"],
			"tags": ["32bit", "legacy"],
			"score": 92,
			"votes": 876,
			"hoursAgo": 12,
			"comments": [{
				"user": "armv7",
				"text": "This is, in fact, fine.",
				"hoursAgo": 7
			}],
			"top": "RUNNING 32-BIT APPS",
			"bottom": "IN 2026"
		},
		{
			"id": "2007",
			"title": "Unsolicited advice",
			"image": "/memes/2007.jpg",
			"thumb": "/memes/2007.jpg",
			"author": "SlapAdvisor",
			"gallery": ["classics", "trending"],
			"tags": ["react", "native"],
			"score": 96,
			"votes": 1333,
			"hoursAgo": 6,
			"comments": [{
				"user": "uikit",
				"text": "UITableView never asked for this.",
				"hoursAgo": 5
			}],
			"top": "JUST USE REACT NATIVE",
			"bottom": ""
		},
		{
			"id": "2008",
			"title": "Still waiting",
			"image": "/memes/2008.jpg",
			"thumb": "/memes/2008.jpg",
			"author": "BoneIdle",
			"gallery": ["classics", "latest"],
			"tags": ["webp", "safari"],
			"score": 90,
			"votes": 701,
			"hoursAgo": 16,
			"comments": [{
				"user": "jpeg",
				"text": "JPEG called. It is not jealous.",
				"hoursAgo": 12
			}],
			"top": "WAITING FOR iOS 6",
			"bottom": "TO SUPPORT WEBP"
		},
		{
			"id": "2009",
			"title": "Deployed it anyway",
			"image": "/memes/2009.jpg",
			"thumb": "/memes/2009.jpg",
			"author": "ChaosChild",
			"gallery": ["classics", "top"],
			"tags": ["html", "tables"],
			"score": 97,
			"votes": 1644,
			"hoursAgo": 10,
			"comments": [{
				"user": "w3c",
				"text": "Valid HTML 4.01 Transitional, thank you.",
				"hoursAgo": 8
			}],
			"top": "PUSHED HTML TABLES",
			"bottom": "TO PRODUCTION"
		},
		{
			"id": "2010",
			"title": "The real reason",
			"image": "/memes/2010.jpg",
			"thumb": "/memes/2010.jpg",
			"author": "Giorgio",
			"gallery": ["classics", "random"],
			"tags": ["aliens", "theory"],
			"score": 88,
			"votes": 540,
			"hoursAgo": 20,
			"comments": [{
				"user": "history",
				"text": "I knew it.",
				"hoursAgo": 15
			}],
			"top": "OLD IPHONES STILL WORK",
			"bottom": "BECAUSE OF ALIENS"
		},
		{
			"id": "2011",
			"title": "The intern",
			"image": "/memes/2011.jpg",
			"thumb": "/memes/2011.jpg",
			"author": "MockingIntern",
			"gallery": ["classics", "latest"],
			"tags": ["css", "flexbox"],
			"score": 94,
			"votes": 1112,
			"hoursAgo": 13,
			"comments": [{
				"user": "webkitbox",
				"text": "display:-webkit-box;  /* iOS 6 */",
				"hoursAgo": 11
			}],
			"top": "ACTUALLY YOU SHOULD",
			"bottom": "USE FLEXBOX"
		},
		{
			"id": "2012",
			"title": "Is this a web app?",
			"image": "/memes/2012.jpg",
			"thumb": "/memes/2012.jpg",
			"author": "ButterflyBoy",
			"gallery": ["classics", "trending"],
			"tags": ["webapp", "html"],
			"score": 95,
			"votes": 1288,
			"hoursAgo": 8,
			"comments": [{
				"user": "spa",
				"text": "If it loads on iOS 6, it is a web app.",
				"hoursAgo": 6
			}],
			"top": "IS THIS A MODERN WEB APP",
			"bottom": ""
		},
		{
			"id": "2013",
			"title": "System requirements",
			"image": "/memes/2013.jpg",
			"thumb": "/memes/2013.jpg",
			"author": "SaladCat",
			"gallery": ["classics", "top"],
			"tags": ["ram", "iphone4s"],
			"score": 99,
			"votes": 2560,
			"hoursAgo": 2,
			"comments": [{
				"user": "a5",
				"text": "The A5 is eating well.",
				"hoursAgo": 1
			}],
			"top": "YOU NEED 8GB OF RAM",
			"bottom": "512MB IPHONE 4S"
		},
		{
			"id": "2014",
			"title": "Hydration vs HTML",
			"image": "/memes/2014.jpg",
			"thumb": "/memes/2014.jpg",
			"author": "OffRamp",
			"gallery": ["classics", "trending"],
			"tags": ["spa", "html"],
			"score": 96,
			"votes": 1477,
			"hoursAgo": 4,
			"comments": [{
				"user": "ssr",
				"text": "Took the exit. No regrets.",
				"hoursAgo": 3
			}],
			"top": "SPA HYDRATION",
			"bottom": "HTML THAT ACTUALLY LOADS"
		},
		{
			"id": "2015",
			"title": "Support request",
			"image": "/memes/2015.jpg",
			"thumb": "/memes/2015.jpg",
			"author": "UnoDev",
			"gallery": ["classics", "latest"],
			"tags": ["cards", "support"],
			"score": 93,
			"votes": 808,
			"hoursAgo": 15,
			"comments": [{
				"user": "qa",
				"text": "Drawing 25.",
				"hoursAgo": 14
			}],
			"top": "SUPPORT iOS 6",
			"bottom": "OR DRAW 25"
		},
		{
			"id": "2016",
			"title": "The plan",
			"image": "/memes/2016.jpg",
			"thumb": "/memes/2016.jpg",
			"author": "GruPlans",
			"gallery": ["classics", "top"],
			"tags": ["react", "html"],
			"score": 98,
			"votes": 1990,
			"hoursAgo": 3,
			"comments": [{
				"user": "gru",
				"text": "The last panel is the product.",
				"hoursAgo": 2
			}],
			"top": "MAKE A SITE FOR OLD iOS",
			"bottom": "SHIP TABLE LAYOUT HTML"
		},
		{
			"id": "2017",
			"title": "Enlightenment",
			"image": "/memes/2017.jpg",
			"thumb": "/memes/2017.jpg",
			"author": "BigBrain",
			"gallery": ["classics", "trending"],
			"tags": ["brain", "web"],
			"score": 97,
			"votes": 1755,
			"hoursAgo": 5,
			"comments": [{
				"user": "galaxy",
				"text": "Panel 4 is the only honest stack.",
				"hoursAgo": 4
			}],
			"top": "PWA WITH SERVICE WORKERS",
			"bottom": "MEMEDROID LEGACY"
		},
		{
			"id": "2018",
			"title": "Wait a minute",
			"image": "/memes/2018.jpg",
			"thumb": "/memes/2018.jpg",
			"author": "Astronaut",
			"gallery": ["classics", "top"],
			"tags": ["space", "iphone4"],
			"score": 99,
			"votes": 2801,
			"hoursAgo": 1,
			"comments": [{
				"user": "nasa",
				"text": "Houston, we have a Home button.",
				"hoursAgo": 0
			}],
			"top": "WE ARE ON AN IPHONE 4",
			"bottom": "ALWAYS HAS BEEN"
		},
		{
			"id": "2019",
			"title": "They are the same picture",
			"image": "/memes/2019.jpg",
			"thumb": "/memes/2019.jpg",
			"author": "SamePic",
			"gallery": ["classics", "trending"],
			"tags": ["design", "a11y"],
			"score": 94,
			"votes": 1210,
			"hoursAgo": 7,
			"comments": [{
				"user": "ux",
				"text": "Print this in the style guide.",
				"hoursAgo": 5
			}],
			"top": "A GOOD WEBSITE",
			"bottom": "A WEBSITE THAT LOADS ON iOS 6"
		},
		{
			"id": "2020",
			"title": "You get a vote",
			"image": "/memes/2020.jpg",
			"thumb": "/memes/2020.jpg",
			"author": "OprahMemes",
			"gallery": ["classics", "random"],
			"tags": ["vote", "community"],
			"score": 91,
			"votes": 633,
			"hoursAgo": 18,
			"comments": [{
				"user": "percent",
				"text": "94% approval, as the prophecy foretold.",
				"hoursAgo": 16
			}],
			"top": "YOU GET A VOTE",
			"bottom": "AND YOU GET A VOTE"
		},
		{
			"id": "2021",
			"title": "X, X everywhere",
			"image": "/memes/2021.jpg",
			"thumb": "/memes/2021.jpg",
			"author": "Buzz",
			"gallery": ["classics", "latest"],
			"tags": ["xhr", "js"],
			"score": 90,
			"votes": 455,
			"hoursAgo": 22,
			"comments": [{
				"user": "fetch",
				"text": "fetch() is a myth on iOS 9.",
				"hoursAgo": 19
			}],
			"top": "XMLHTTPREQUEST",
			"bottom": "XHR EVERYWHERE"
		},
		{
			"id": "2022",
			"title": "Waiting on Cloudflare",
			"image": "/memes/2022.jpg",
			"thumb": "/memes/2022.jpg",
			"author": "SadPablo",
			"gallery": ["latest", "random"],
			"tags": ["api", "cloudflare"],
			"score": 86,
			"votes": 301,
			"hoursAgo": 9,
			"comments": [{
				"user": "theabbie",
				"text": "login_by_username still slaps.",
				"hoursAgo": 7
			}],
			"top": "WHEN THE UNOFFICIAL API",
			"bottom": "IS BEHIND CLOUDFLARE"
		},
		{
			"id": "2023",
			"title": "Marked safe",
			"image": "/memes/2023.jpg",
			"thumb": "/memes/2023.jpg",
			"author": "OfficeSign",
			"gallery": ["latest", "classics"],
			"tags": ["pwa", "safe"],
			"score": 88,
			"votes": 412,
			"hoursAgo": 17,
			"comments": [{
				"user": "cache",
				"text": "My iPhone 4 thanks you.",
				"hoursAgo": 13
			}],
			"top": "MARKED SAFE FROM",
			"bottom": "SERVICE WORKERS"
		},
		{
			"id": "2024",
			"title": "Got any more of that",
			"image": "/memes/2024.jpg",
			"thumb": "/memes/2024.jpg",
			"author": "NeedFix",
			"gallery": ["classics", "random"],
			"tags": ["html4", "nostalgia"],
			"score": 92,
			"votes": 720,
			"hoursAgo": 21,
			"comments": [{
				"user": "doctype",
				"text": "Transitional. Always transitional.",
				"hoursAgo": 18
			}],
			"top": "Y'ALL GOT ANY MORE OF THAT",
			"bottom": "HTML 4.01"
		}
	],
	templates: [
		{
			"id": "t-drake",
			"name": "Drake",
			"image": "/memes/t-drake.jpg",
			"boxes": 2
		},
		{
			"id": "t-buttons",
			"name": "Two Buttons",
			"image": "/memes/t-buttons.jpg",
			"boxes": 2
		},
		{
			"id": "t-distracted",
			"name": "Distracted",
			"image": "/memes/t-distracted.jpg",
			"boxes": 2
		},
		{
			"id": "t-onedoes",
			"name": "One Does Not Simply",
			"image": "/memes/t-onedoes.jpg",
			"boxes": 2
		},
		{
			"id": "t-mind",
			"name": "Change My Mind",
			"image": "/memes/t-mind.jpg",
			"boxes": 2
		},
		{
			"id": "t-fine",
			"name": "This Is Fine",
			"image": "/memes/t-fine.jpg",
			"boxes": 2
		},
		{
			"id": "t-batman",
			"name": "Batman Slapping Robin",
			"image": "/memes/t-batman.jpg",
			"boxes": 2
		},
		{
			"id": "t-skeleton",
			"name": "Waiting Skeleton",
			"image": "/memes/t-skeleton.jpg",
			"boxes": 2
		},
		{
			"id": "t-disaster",
			"name": "Disaster Girl",
			"image": "/memes/t-disaster.jpg",
			"boxes": 2
		},
		{
			"id": "t-aliens",
			"name": "Ancient Aliens",
			"image": "/memes/t-aliens.jpg",
			"boxes": 2
		},
		{
			"id": "t-spongebob",
			"name": "Mocking Sponge",
			"image": "/memes/t-spongebob.jpg",
			"boxes": 2
		},
		{
			"id": "t-pigeon",
			"name": "Is This A Pigeon",
			"image": "/memes/t-pigeon.jpg",
			"boxes": 2
		},
		{
			"id": "t-cat",
			"name": "Woman Yelling At Cat",
			"image": "/memes/t-cat.jpg",
			"boxes": 2
		},
		{
			"id": "t-exit",
			"name": "Left Exit",
			"image": "/memes/t-exit.jpg",
			"boxes": 2
		},
		{
			"id": "t-uno",
			"name": "UNO Draw 25",
			"image": "/memes/t-uno.jpg",
			"boxes": 2
		},
		{
			"id": "t-gru",
			"name": "Gru's Plan",
			"image": "/memes/t-gru.jpg",
			"boxes": 2
		},
		{
			"id": "t-brain",
			"name": "Expanding Brain",
			"image": "/memes/t-brain.jpg",
			"boxes": 2
		},
		{
			"id": "t-always",
			"name": "Always Has Been",
			"image": "/memes/t-always.jpg",
			"boxes": 2
		},
		{
			"id": "t-same",
			"name": "Same Picture",
			"image": "/memes/t-same.jpg",
			"boxes": 2
		},
		{
			"id": "t-oprah",
			"name": "You Get A",
			"image": "/memes/t-oprah.jpg",
			"boxes": 2
		},
		{
			"id": "t-everywhere",
			"name": "X Everywhere",
			"image": "/memes/t-everywhere.jpg",
			"boxes": 2
		},
		{
			"id": "t-pablo",
			"name": "Sad Pablo",
			"image": "/memes/t-pablo.jpg",
			"boxes": 2
		},
		{
			"id": "t-safe",
			"name": "Marked Safe",
			"image": "/memes/t-safe.jpg",
			"boxes": 2
		},
		{
			"id": "t-yall",
			"name": "Y'all Got Any More",
			"image": "/memes/t-yall.jpg",
			"boxes": 2
		},
		{
			"id": "t-iphone",
			"name": "Cracked iPhone",
			"image": "/memes/t-iphone.jpg",
			"boxes": 2
		},
		{
			"id": "t-desktop",
			"name": "Old Desktop",
			"image": "/memes/t-desktop.jpg",
			"boxes": 2
		},
		{
			"id": "t-catlap",
			"name": "Cat QA",
			"image": "/memes/t-catlap.jpg",
			"boxes": 2
		},
		{
			"id": "t-phones",
			"name": "Two Phones",
			"image": "/memes/t-phones.jpg",
			"boxes": 2
		},
		{
			"id": "t-ipad",
			"name": "Original iPad",
			"image": "/memes/t-ipad.jpg",
			"boxes": 2
		},
		{
			"id": "t-router",
			"name": "Home Router",
			"image": "/memes/t-router.jpg",
			"boxes": 2
		}
	]
};
function allTemplates() {
	return catalog.templates;
}
function findMeme(id) {
	return catalog.memes.find((m) => m.id === id);
}
function memesForGallery(gallery) {
	const list = catalog.memes.slice();
	if (gallery === "random") {
		for (let i = list.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const tmp = list[i];
			list[i] = list[j];
			list[j] = tmp;
		}
		return list;
	}
	if (gallery === "latest") return list.sort((a, b) => a.hoursAgo - b.hoursAgo);
	if (gallery === "top") return list.sort((a, b) => b.score - a.score || b.votes - a.votes);
	if (gallery === "classics") return list.filter((m) => m.gallery.includes("classics"));
	return list.filter((m) => m.gallery.includes("trending") || m.gallery.includes("top")).sort((a, b) => b.votes - a.votes);
}
function searchMemes(query) {
	const q = query.trim().toLowerCase();
	if (!q) return memesForGallery("trending");
	return catalog.memes.filter((m) => {
		return `${m.title} ${m.author} ${m.tags.join(" ")} ${m.top ?? ""} ${m.bottom ?? ""}`.toLowerCase().includes(q);
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BIs6u-ML.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-B2tL1_7p.css";
var APP_NAME = "Memedroid Legacy";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Memedroid Legacy — vote, generate, and browse memes on old iPhones. Built for iOS 6 and iOS 9.3.5, plus a native Objective-C app."
			},
			{
				name: "theme-color",
				content: "#C2410C"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Memedroid"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var WEB_ROOT = "https://www.memedroid.com";
var UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1";
function parseHours(raw) {
	const t = raw.trim().toLowerCase();
	const n = parseInt(t, 10);
	if (Number.isNaN(n)) return 12;
	if (t.endsWith("m")) return Math.max(1, n / 60);
	if (t.endsWith("h")) return n;
	if (t.endsWith("d")) return n * 24;
	return n;
}
async function scrapeGallery(path) {
	const url = path.startsWith("http") ? path : `${WEB_ROOT}${path}`;
	const res = await fetch(url, {
		headers: {
			accept: "text/html",
			"user-agent": UA
		},
		signal: AbortSignal.timeout(8e3)
	});
	if (!res.ok) return [];
	const html = await res.text();
	if (html.includes("Attention Required") || html.includes("cf-error")) return [];
	return parseMemedroidHtml(html);
}
function parseMemedroidHtml(html) {
	const memes = [];
	const seen = /* @__PURE__ */ new Set();
	const detail = /\/memes\/detail\/(\d+)\/([^"'?\s<]+)/g;
	let match;
	while (match = detail.exec(html)) {
		const id = match[1];
		if (seen.has(id)) continue;
		seen.add(id);
		const slug = decodeURIComponent(match[2].replace(/-/g, " "));
		const windowHtml = html.slice(Math.max(0, match.index - 200), match.index + 1800);
		const img = windowHtml.match(/https:\/\/memes\.memedroid\.com\/(?:images|videos)\/[0-9-]+\/[a-z0-9]+\.(?:webp|jpg|jpeg|png|gif)/i)?.[0] ?? "";
		const score = Number(windowHtml.match(/(\d{1,3})\s*%/)?.[1] ?? 80);
		const votes = Number(windowHtml.match(/(\d{1,4})\s*(?:votes|<\/)/i)?.[1] ?? 12);
		const ageRaw = windowHtml.match(/\|\s*(\d+\s*[mhd])/i)?.[1] ?? "6h";
		if (!img) continue;
		memes.push({
			id: `live-${id}`,
			title: slug.replace(/\s+/g, " ").trim() || `Meme ${id}`,
			image: img,
			score: Math.min(100, score),
			votes: Number.isFinite(votes) ? votes : 12,
			hoursAgo: parseHours(ageRaw)
		});
	}
	return memes;
}
var WEB_GALLERY_PATHS = {
	trending: "/",
	latest: "/memes/latest",
	top: "/memes/top/day"
};
function absoluteImage(origin, src) {
	if (src.startsWith("http://") || src.startsWith("https://")) return src;
	return origin + src;
}
function withOrigin(origin, memes) {
	return memes.map((m) => ({
		...m,
		image: absoluteImage(origin, m.image),
		thumb: absoluteImage(origin, m.thumb)
	}));
}
async function liveGallery(gallery) {
	const path = WEB_GALLERY_PATHS[gallery];
	if (!path) return [];
	try {
		return (await scrapeGallery(path)).map((s) => ({
			id: s.id,
			title: s.title,
			image: `/api/img?u=${encodeURIComponent(s.image)}`,
			thumb: `/api/img?u=${encodeURIComponent(s.image)}`,
			author: "memedroid",
			gallery: [gallery],
			tags: [gallery],
			score: s.score,
			votes: s.votes,
			hoursAgo: s.hoursAgo,
			comments: [],
			live: true
		}));
	} catch {
		return [];
	}
}
async function getFeed(gallery, query, origin) {
	const q = (query ?? "").trim();
	if (q) return {
		source: "archive",
		gallery: "search",
		page: 1,
		memes: withOrigin(origin, searchMemes(q))
	};
	const g = gallery || "trending";
	if (g === "favorites") return {
		source: "archive",
		gallery: g,
		page: 1,
		memes: []
	};
	const archive = memesForGallery(g);
	const live = await liveGallery(g);
	const merged = [...live, ...archive];
	const seen = /* @__PURE__ */ new Set();
	const unique = merged.filter((m) => {
		if (seen.has(m.id)) return false;
		seen.add(m.id);
		return true;
	});
	return {
		source: live.length ? "mixed" : "archive",
		gallery: g,
		page: 1,
		memes: withOrigin(origin, unique)
	};
}
function getMemeById(id, origin) {
	const found = findMeme(id);
	if (!found) return null;
	return withOrigin(origin, [found])[0] ?? null;
}
function listTemplates(origin) {
	return allTemplates().map((t) => ({
		...t,
		image: absoluteImage(origin, t.image)
	}));
}
var GALLERIES = [
	{
		id: "trending",
		label: "Trending"
	},
	{
		id: "latest",
		label: "Latest"
	},
	{
		id: "top",
		label: "Top"
	},
	{
		id: "classics",
		label: "Classics"
	},
	{
		id: "random",
		label: "Random"
	},
	{
		id: "favorites",
		label: "Favorites"
	}
];
var $$splitComponentImporter$4 = () => import("./routes-DUlHYoX9.mjs");
var galleries = new Set(GALLERIES.map((g) => g.id));
function parseGallery(value) {
	if (typeof value === "string" && galleries.has(value)) return value;
	return "trending";
}
var Route$8 = createFileRoute("/")({
	validateSearch: (search) => ({
		g: parseGallery(search.g),
		q: typeof search.q === "string" ? search.q : ""
	}),
	loaderDeps: ({ search }) => ({
		g: parseGallery(search?.g),
		q: typeof search?.q === "string" ? search.q : ""
	}),
	loader: async ({ deps }) => {
		const g = parseGallery(deps.g);
		const q = deps.q ?? "";
		try {
			return await getFeed(g, q, "");
		} catch {
			const gallery = g === "favorites" ? "trending" : g;
			return {
				source: "archive",
				gallery,
				page: 1,
				memes: memesForGallery(gallery)
			};
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-CrmgiHFS.mjs");
var Route$7 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./generate-DuBJyXjb.mjs");
var Route$6 = createFileRoute("/generate")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./ios-BtwHEn4h.mjs");
var Route$5 = createFileRoute("/ios")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$4 = createFileRoute("/api/feed")({ server: { handlers: { GET: async ({ request }) => {
	const url = new URL(request.url);
	const origin = url.origin;
	const feed = await getFeed(url.searchParams.get("g") || "trending", url.searchParams.get("q") || "", origin);
	return Response.json(feed, { headers: {
		"cache-control": "public, max-age=30",
		"access-control-allow-origin": "*"
	} });
} } } });
var ALLOW = /^https:\/\/(memes\.memedroid\.com|i\.imgflip\.com|www\.memedroid\.com)\//;
function toJpeg(input) {
	return new Promise((resolve, reject) => {
		const ff = spawn("ffmpeg", [
			"-loglevel",
			"error",
			"-i",
			"pipe:0",
			"-frames:v",
			"1",
			"-f",
			"image2",
			"-c:v",
			"mjpeg",
			"pipe:1"
		], { stdio: [
			"pipe",
			"pipe",
			"pipe"
		] });
		const chunks = [];
		ff.stdout.on("data", (c) => chunks.push(c));
		ff.on("error", reject);
		ff.on("close", (code) => {
			if (code === 0 && chunks.length) resolve(Buffer.concat(chunks));
			else reject(/* @__PURE__ */ new Error("ffmpeg failed"));
		});
		ff.stdin.write(input);
		ff.stdin.end();
	});
}
var Route$3 = createFileRoute("/api/img")({ server: { handlers: { GET: async ({ request }) => {
	const src = new URL(request.url).searchParams.get("u") || "";
	if (!ALLOW.test(src)) return new Response("blocked", { status: 400 });
	const res = await fetch(src, {
		headers: { accept: "image/*,*/*" },
		signal: AbortSignal.timeout(1e4)
	});
	if (!res.ok) return new Response("upstream", { status: 502 });
	const bytes = new Uint8Array(await res.arrayBuffer());
	const type = res.headers.get("content-type") || "";
	if (/jpeg|jpg|png|gif/i.test(type) && !/webp/i.test(type)) return new Response(bytes, { headers: {
		"content-type": type,
		"cache-control": "public, max-age=86400"
	} });
	try {
		const jpeg = await toJpeg(Buffer.from(bytes));
		return new Response(new Uint8Array(jpeg), { headers: {
			"content-type": "image/jpeg",
			"cache-control": "public, max-age=86400"
		} });
	} catch {
		return new Response(bytes, { headers: {
			"content-type": type || "application/octet-stream",
			"cache-control": "public, max-age=3600"
		} });
	}
} } } });
var Route$2 = createFileRoute("/api/templates")({ server: { handlers: { GET: async ({ request }) => {
	const origin = new URL(request.url).origin;
	return Response.json({ templates: listTemplates(origin) }, { headers: {
		"cache-control": "public, max-age=300",
		"access-control-allow-origin": "*"
	} });
} } } });
var $$splitNotFoundComponentImporter = () => import("./meme._id-9gvDR5cK.mjs");
var $$splitComponentImporter = () => import("./meme._id-BXi65t1l.mjs");
var Route$1 = createFileRoute("/meme/$id")({
	loader: ({ params }) => {
		const meme = findMeme(params.id);
		if (!meme) throw notFound();
		return meme;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var Route = createFileRoute("/api/meme/$id")({ server: { handlers: { GET: async ({ request, params }) => {
	const origin = new URL(request.url).origin;
	const meme = getMemeById(params.id, origin);
	if (!meme) return Response.json({ error: "not_found" }, { status: 404 });
	return Response.json({ meme }, { headers: {
		"cache-control": "public, max-age=60",
		"access-control-allow-origin": "*"
	} });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	GenerateRoute: Route$6.update({
		id: "/generate",
		path: "/generate",
		getParentRoute: () => Route$9
	}),
	IosRoute: Route$5.update({
		id: "/ios",
		path: "/ios",
		getParentRoute: () => Route$9
	}),
	ApiFeedRoute: Route$4.update({
		id: "/api/feed",
		path: "/api/feed",
		getParentRoute: () => Route$9
	}),
	ApiImgRoute: Route$3.update({
		id: "/api/img",
		path: "/api/img",
		getParentRoute: () => Route$9
	}),
	ApiTemplatesRoute: Route$2.update({
		id: "/api/templates",
		path: "/api/templates",
		getParentRoute: () => Route$9
	}),
	MemeIdRoute: Route$1.update({
		id: "/meme/$id",
		path: "/meme/$id",
		getParentRoute: () => Route$9
	}),
	ApiMemeIdRoute: Route.update({
		id: "/api/meme/$id",
		path: "/api/meme/$id",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { allTemplates as a, GALLERIES as i, Route$1 as n, findMeme as o, Route$8 as r, router_exports as t };
