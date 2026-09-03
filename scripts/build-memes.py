#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont, ImageEnhance
import os, json

SRC = "/tmp/meme_src"
OUT = "/workspace/public/memes"
LOGO = "/workspace/public"
IOS = "/workspace/ios/MemedroidLegacy/Resources"
FONT = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

os.makedirs(OUT, exist_ok=True)
os.makedirs(IOS, exist_ok=True)


def load(name):
    return Image.open(os.path.join(SRC, name)).convert("RGB")


def fit(im, max_w=900, max_h=900):
    w, h = im.size
    scale = min(max_w / float(w), max_h / float(h), 1.0)
    if scale < 1:
        im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    im = ImageEnhance.Contrast(im).enhance(1.08)
    im = ImageEnhance.Sharpness(im).enhance(1.12)
    return im


def stroke_text(draw, xy, text, font, fill, stroke):
    x, y = xy
    for dx, dy in (
        (-2, 0),
        (2, 0),
        (0, -2),
        (0, 2),
        (-2, -2),
        (2, -2),
        (-2, 2),
        (2, 2),
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1),
    ):
        draw.text((x + dx, y + dy), text, font=font, fill=stroke)
    draw.text((x, y), text, font=font, fill=fill)


def wrap_lines(text, font, max_w, draw):
    words = text.upper().split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [text.upper()]


def caption(im, top, bottom):
    im = fit(im)
    w, h = im.size
    draw = ImageDraw.Draw(im)
    size = max(28, int(w * 0.075))
    pad = int(w * 0.04)
    max_w = w - pad * 2

    def draw_block(text, at_top):
        if not text:
            return
        fsize = size
        font_use = ImageFont.truetype(FONT, 18)
        lines = [text.upper()]
        heights = [18]
        total = 18
        while fsize >= 18:
            f = ImageFont.truetype(FONT, fsize)
            trial = wrap_lines(text, f, max_w, draw)
            hs = [f.getbbox(line)[3] - f.getbbox(line)[1] for line in trial]
            tot = sum(hs) + 6 * (len(trial) - 1)
            widest = max(draw.textlength(line, font=f) for line in trial)
            if widest <= max_w and tot < h * 0.32:
                font_use, lines, heights, total = f, trial, hs, tot
                break
            fsize -= 2
        y = pad if at_top else h - pad - total
        for i, line in enumerate(lines):
            tw = draw.textlength(line, font=font_use)
            x = (w - tw) / 2
            stroke_text(draw, (x, y), line, font_use, (255, 255, 255), (0, 0, 0))
            y += heights[i] + 6

    draw_block(top, True)
    draw_block(bottom, False)
    return im


def save(im, name, quality=84):
    path = os.path.join(OUT, name)
    im.save(path, "JPEG", quality=quality, optimize=True)
    return "/memes/" + name


mascot = load("mascot.jpg")
logo = mascot.resize((256, 256), Image.LANCZOS)
logo.save(os.path.join(LOGO, "logo.jpg"), "JPEG", quality=88)
logo.resize((114, 114), Image.LANCZOS).save(
    os.path.join(LOGO, "logo-114.jpg"), "JPEG", quality=88
)
mascot.resize((180, 180), Image.LANCZOS).save(
    os.path.join(LOGO, "apple-touch-icon.png"), "PNG"
)
mascot.resize((57, 57), Image.LANCZOS).save(
    os.path.join(LOGO, "apple-touch-icon-precomposed.png"), "PNG"
)
for s, n in (
    (57, "Icon.png"),
    (114, "ethan.b@example.com"),
    (120, "Icon-120.png"),
    (180, "Icon-180.png"),
    (1024, "iTunesArtwork.png"),
):
    mascot.resize((s, s), Image.LANCZOS).save(os.path.join(IOS, n), "PNG")

ITEMS = [
    dict(
        id="1001",
        src="iphone_crack.jpg",
        title="Still running strong",
        top="iOS 9.3.5",
        bottom="NEVER SURRENDER",
        author="iPhone4ever",
        gallery=["trending", "top"],
        tags=["ios", "iphone", "legacy"],
        score=96,
        votes=842,
        hoursAgo=3,
        comments=[
            {"user": "oldschool", "text": "My iPad 2 is nodding in respect.", "hoursAgo": 2},
            {"user": "safari6", "text": "WebP who? JPEG forever.", "hoursAgo": 1},
        ],
    ),
    dict(
        id="1002",
        src="old_desktop.jpg",
        title="Peak computing",
        top="WAITING FOR THE PAGE",
        bottom="SINCE 2012",
        author="CRTKid",
        gallery=["trending", "latest"],
        tags=["computer", "nostalgia"],
        score=91,
        votes=512,
        hoursAgo=5,
        comments=[{"user": "dialup", "text": "At least it does not autoplay a video.", "hoursAgo": 4}],
    ),
    dict(
        id="1003",
        src="cat_laptop.jpg",
        title="Quality assurance",
        top="WHEN THE SITE USES REACT 19",
        bottom="ON AN IPHONE 4",
        author="CatQA",
        gallery=["trending", "top"],
        tags=["cats", "webdev"],
        score=98,
        votes=1204,
        hoursAgo=8,
        comments=[
            {"user": "css2", "text": "The cat has the right idea.", "hoursAgo": 6},
            {"user": "tablelayout", "text": "Tables never hurt anyone.", "hoursAgo": 3},
        ],
    ),
    dict(
        id="1004",
        src="two_phones.jpg",
        title="A simple choice",
        top="iOS 18",
        bottom="iOS 6 LEGACY MODE",
        author="SideBySide",
        gallery=["trending", "latest"],
        tags=["iphone", "choice"],
        score=94,
        votes=677,
        hoursAgo=2,
        comments=[{"user": "touchid", "text": "Left one still has a headphone jack in spirit.", "hoursAgo": 1}],
    ),
    dict(
        id="1005",
        src="ipad.jpg",
        title="Portrait mode: couch",
        top="BROWSING MEMES",
        bottom="ON THE ORIGINAL IPAD",
        author="CouchSurfer",
        gallery=["latest", "trending"],
        tags=["ipad", "memes"],
        score=89,
        votes=344,
        hoursAgo=6,
        comments=[{"user": "retina", "text": "1024x768 was a lifestyle.", "hoursAgo": 5}],
    ),
    dict(
        id="1006",
        src="router.jpg",
        title="The real bottleneck",
        top="NOT THE IPHONE 4",
        bottom="IT WAS THE WIFI",
        author="PacketLoss",
        gallery=["latest", "random"],
        tags=["wifi", "home"],
        score=87,
        votes=219,
        hoursAgo=11,
        comments=[{"user": "admin", "text": "Have you tried turning it off and on again?", "hoursAgo": 9}],
    ),
    dict(
        id="2001",
        src="drake.jpg",
        title="Priorities",
        top="REWRITE IT IN SWIFTUI",
        bottom="OBJECTIVE-C FOR iOS 6",
        author="ObjCEnjoyer",
        gallery=["trending", "top", "classics"],
        tags=["objc", "ios", "swift"],
        score=99,
        votes=2103,
        hoursAgo=1,
        comments=[
            {"user": "arc", "text": "retain/release built character.", "hoursAgo": 1},
            {"user": "xcode4", "text": "Ship it.", "hoursAgo": 0},
        ],
    ),
    dict(
        id="2002",
        src="two_buttons.jpg",
        title="The update prompt",
        top="UPDATE TO iOS 18",
        bottom="KEEP 9.3.5 FOREVER",
        author="RedButton",
        gallery=["trending", "classics"],
        tags=["ios", "update"],
        score=97,
        votes=1888,
        hoursAgo=4,
        comments=[{"user": "ota", "text": "There is no right button. Only the orange one.", "hoursAgo": 2}],
    ),
    dict(
        id="2003",
        src="distracted.jpg",
        title="New tab vs old tab",
        top="HIM, LOOKING AT LEGACY MODE",
        bottom="THE MODERN WEB CAN WAIT",
        author="WanderTab",
        gallery=["trending", "classics"],
        tags=["web", "memedroid"],
        score=95,
        votes=1560,
        hoursAgo=7,
        comments=[{"user": "chrome", "text": "We all know how this ends.", "hoursAgo": 3}],
    ),
    dict(
        id="2004",
        src="one_does_not.jpg",
        title="Safari tabs",
        top="ONE DOES NOT SIMPLY",
        bottom="CLOSE ALL SAFARI TABS",
        author="Boromeme",
        gallery=["classics", "top"],
        tags=["safari", "lotr"],
        score=93,
        votes=990,
        hoursAgo=14,
        comments=[{"user": "ram512", "text": "Each tab is a personality.", "hoursAgo": 10}],
    ),
    dict(
        id="2005",
        src="change_mind.jpg",
        title="Unpopular, correct",
        top="",
        bottom="iOS 6 WAS PEAK DESIGN",
        author="SkeuoFan",
        gallery=["classics", "trending", "top"],
        tags=["design", "ios6"],
        score=98,
        votes=2401,
        hoursAgo=9,
        comments=[
            {"user": "linen", "text": "Linen texture was a public good.", "hoursAgo": 8},
            {"user": "gloss", "text": "Those buttons had weight.", "hoursAgo": 4},
        ],
    ),
    dict(
        id="2006",
        src="this_is_fine.jpg",
        title="32-bit in 2026",
        top="RUNNING 32-BIT APPS",
        bottom="IN 2026",
        author="FineDog",
        gallery=["classics", "random"],
        tags=["32bit", "legacy"],
        score=92,
        votes=876,
        hoursAgo=12,
        comments=[{"user": "armv7", "text": "This is, in fact, fine.", "hoursAgo": 7}],
    ),
    dict(
        id="2007",
        src="batman_robin.jpg",
        title="Unsolicited advice",
        top="JUST USE REACT NATIVE",
        bottom="",
        author="SlapAdvisor",
        gallery=["classics", "trending"],
        tags=["react", "native"],
        score=96,
        votes=1333,
        hoursAgo=6,
        comments=[{"user": "uikit", "text": "UITableView never asked for this.", "hoursAgo": 5}],
    ),
    dict(
        id="2008",
        src="skeleton.jpg",
        title="Still waiting",
        top="WAITING FOR iOS 6",
        bottom="TO SUPPORT WEBP",
        author="BoneIdle",
        gallery=["classics", "latest"],
        tags=["webp", "safari"],
        score=90,
        votes=701,
        hoursAgo=16,
        comments=[{"user": "jpeg", "text": "JPEG called. It is not jealous.", "hoursAgo": 12}],
    ),
    dict(
        id="2009",
        src="disaster_girl.jpg",
        title="Deployed it anyway",
        top="PUSHED HTML TABLES",
        bottom="TO PRODUCTION",
        author="ChaosChild",
        gallery=["classics", "top"],
        tags=["html", "tables"],
        score=97,
        votes=1644,
        hoursAgo=10,
        comments=[{"user": "w3c", "text": "Valid HTML 4.01 Transitional, thank you.", "hoursAgo": 8}],
    ),
    dict(
        id="2010",
        src="ancient_aliens.jpg",
        title="The real reason",
        top="OLD IPHONES STILL WORK",
        bottom="BECAUSE OF ALIENS",
        author="Giorgio",
        gallery=["classics", "random"],
        tags=["aliens", "theory"],
        score=88,
        votes=540,
        hoursAgo=20,
        comments=[{"user": "history", "text": "I knew it.", "hoursAgo": 15}],
    ),
    dict(
        id="2011",
        src="spongebob.jpg",
        title="The intern",
        top="ACTUALLY YOU SHOULD",
        bottom="USE FLEXBOX",
        author="MockingIntern",
        gallery=["classics", "latest"],
        tags=["css", "flexbox"],
        score=94,
        votes=1112,
        hoursAgo=13,
        comments=[{"user": "webkitbox", "text": "display:-webkit-box;  /* iOS 6 */", "hoursAgo": 11}],
    ),
    dict(
        id="2012",
        src="pigeon.jpg",
        title="Is this a web app?",
        top="IS THIS A MODERN WEB APP",
        bottom="",
        author="ButterflyBoy",
        gallery=["classics", "trending"],
        tags=["webapp", "html"],
        score=95,
        votes=1288,
        hoursAgo=8,
        comments=[{"user": "spa", "text": "If it loads on iOS 6, it is a web app.", "hoursAgo": 6}],
    ),
    dict(
        id="2013",
        src="woman_cat.jpg",
        title="System requirements",
        top="YOU NEED 8GB OF RAM",
        bottom="512MB IPHONE 4S",
        author="SaladCat",
        gallery=["classics", "top"],
        tags=["ram", "iphone4s"],
        score=99,
        votes=2560,
        hoursAgo=2,
        comments=[{"user": "a5", "text": "The A5 is eating well.", "hoursAgo": 1}],
    ),
    dict(
        id="2014",
        src="exit_ramp.jpg",
        title="Hydration vs HTML",
        top="SPA HYDRATION",
        bottom="HTML THAT ACTUALLY LOADS",
        author="OffRamp",
        gallery=["classics", "trending"],
        tags=["spa", "html"],
        score=96,
        votes=1477,
        hoursAgo=4,
        comments=[{"user": "ssr", "text": "Took the exit. No regrets.", "hoursAgo": 3}],
    ),
    dict(
        id="2015",
        src="uno.jpg",
        title="Support request",
        top="SUPPORT iOS 6",
        bottom="OR DRAW 25",
        author="UnoDev",
        gallery=["classics", "latest"],
        tags=["cards", "support"],
        score=93,
        votes=808,
        hoursAgo=15,
        comments=[{"user": "qa", "text": "Drawing 25.", "hoursAgo": 14}],
    ),
    dict(
        id="2016",
        src="gru.jpg",
        title="The plan",
        top="MAKE A SITE FOR OLD iOS",
        bottom="SHIP TABLE LAYOUT HTML",
        author="GruPlans",
        gallery=["classics", "top"],
        tags=["react", "html"],
        score=98,
        votes=1990,
        hoursAgo=3,
        comments=[{"user": "gru", "text": "The last panel is the product.", "hoursAgo": 2}],
    ),
    dict(
        id="2017",
        src="brain.jpg",
        title="Enlightenment",
        top="PWA WITH SERVICE WORKERS",
        bottom="MEMEDROID LEGACY",
        author="BigBrain",
        gallery=["classics", "trending"],
        tags=["brain", "web"],
        score=97,
        votes=1755,
        hoursAgo=5,
        comments=[{"user": "galaxy", "text": "Panel 4 is the only honest stack.", "hoursAgo": 4}],
    ),
    dict(
        id="2018",
        src="always_has.jpg",
        title="Wait a minute",
        top="WE ARE ON AN IPHONE 4",
        bottom="ALWAYS HAS BEEN",
        author="Astronaut",
        gallery=["classics", "top"],
        tags=["space", "iphone4"],
        score=99,
        votes=2801,
        hoursAgo=1,
        comments=[{"user": "nasa", "text": "Houston, we have a Home button.", "hoursAgo": 0}],
    ),
    dict(
        id="2019",
        src="same_picture.jpg",
        title="They are the same picture",
        top="A GOOD WEBSITE",
        bottom="A WEBSITE THAT LOADS ON iOS 6",
        author="SamePic",
        gallery=["classics", "trending"],
        tags=["design", "a11y"],
        score=94,
        votes=1210,
        hoursAgo=7,
        comments=[{"user": "ux", "text": "Print this in the style guide.", "hoursAgo": 5}],
    ),
    dict(
        id="2020",
        src="oprah.jpg",
        title="You get a vote",
        top="YOU GET A VOTE",
        bottom="AND YOU GET A VOTE",
        author="OprahMemes",
        gallery=["classics", "random"],
        tags=["vote", "community"],
        score=91,
        votes=633,
        hoursAgo=18,
        comments=[{"user": "percent", "text": "94% approval, as the prophecy foretold.", "hoursAgo": 16}],
    ),
    dict(
        id="2021",
        src="everywhere.jpg",
        title="X, X everywhere",
        top="XMLHTTPREQUEST",
        bottom="XHR EVERYWHERE",
        author="Buzz",
        gallery=["classics", "latest"],
        tags=["xhr", "js"],
        score=90,
        votes=455,
        hoursAgo=22,
        comments=[{"user": "fetch", "text": "fetch() is a myth on iOS 9.", "hoursAgo": 19}],
    ),
    dict(
        id="2022",
        src="pablo.jpg",
        title="Waiting on Cloudflare",
        top="WHEN THE UNOFFICIAL API",
        bottom="IS BEHIND CLOUDFLARE",
        author="SadPablo",
        gallery=["latest", "random"],
        tags=["api", "cloudflare"],
        score=86,
        votes=301,
        hoursAgo=9,
        comments=[{"user": "theabbie", "text": "login_by_username still slaps.", "hoursAgo": 7}],
    ),
    dict(
        id="2023",
        src="marked_safe.jpg",
        title="Marked safe",
        top="MARKED SAFE FROM",
        bottom="SERVICE WORKERS",
        author="OfficeSign",
        gallery=["latest", "classics"],
        tags=["pwa", "safe"],
        score=88,
        votes=412,
        hoursAgo=17,
        comments=[{"user": "cache", "text": "My iPhone 4 thanks you.", "hoursAgo": 13}],
    ),
    dict(
        id="2024",
        src="yall_got.jpg",
        title="Got any more of that",
        top="Y'ALL GOT ANY MORE OF THAT",
        bottom="HTML 4.01",
        author="NeedFix",
        gallery=["classics", "random"],
        tags=["html4", "nostalgia"],
        score=92,
        votes=720,
        hoursAgo=21,
        comments=[{"user": "doctype", "text": "Transitional. Always transitional.", "hoursAgo": 18}],
    ),
]

memes = []
for item in ITEMS:
    im = caption(load(item["src"]), item["top"], item["bottom"])
    url = save(im, item["id"] + ".jpg")
    memes.append(
        {
            "id": item["id"],
            "title": item["title"],
            "image": url,
            "thumb": url,
            "author": item["author"],
            "gallery": item["gallery"],
            "tags": item["tags"],
            "score": item["score"],
            "votes": item["votes"],
            "hoursAgo": item["hoursAgo"],
            "comments": item["comments"],
            "top": item["top"],
            "bottom": item["bottom"],
        }
    )

TEMPLATE_MAP = [
    ("t-drake", "drake.jpg", "Drake"),
    ("t-buttons", "two_buttons.jpg", "Two Buttons"),
    ("t-distracted", "distracted.jpg", "Distracted"),
    ("t-onedoes", "one_does_not.jpg", "One Does Not Simply"),
    ("t-mind", "change_mind.jpg", "Change My Mind"),
    ("t-fine", "this_is_fine.jpg", "This Is Fine"),
    ("t-batman", "batman_robin.jpg", "Batman Slapping Robin"),
    ("t-skeleton", "skeleton.jpg", "Waiting Skeleton"),
    ("t-disaster", "disaster_girl.jpg", "Disaster Girl"),
    ("t-aliens", "ancient_aliens.jpg", "Ancient Aliens"),
    ("t-spongebob", "spongebob.jpg", "Mocking Sponge"),
    ("t-pigeon", "pigeon.jpg", "Is This A Pigeon"),
    ("t-cat", "woman_cat.jpg", "Woman Yelling At Cat"),
    ("t-exit", "exit_ramp.jpg", "Left Exit"),
    ("t-uno", "uno.jpg", "UNO Draw 25"),
    ("t-gru", "gru.jpg", "Gru's Plan"),
    ("t-brain", "brain.jpg", "Expanding Brain"),
    ("t-always", "always_has.jpg", "Always Has Been"),
    ("t-same", "same_picture.jpg", "Same Picture"),
    ("t-oprah", "oprah.jpg", "You Get A"),
    ("t-everywhere", "everywhere.jpg", "X Everywhere"),
    ("t-pablo", "pablo.jpg", "Sad Pablo"),
    ("t-safe", "marked_safe.jpg", "Marked Safe"),
    ("t-yall", "yall_got.jpg", "Y'all Got Any More"),
    ("t-iphone", "iphone_crack.jpg", "Cracked iPhone"),
    ("t-desktop", "old_desktop.jpg", "Old Desktop"),
    ("t-catlap", "cat_laptop.jpg", "Cat QA"),
    ("t-phones", "two_phones.jpg", "Two Phones"),
    ("t-ipad", "ipad.jpg", "Original iPad"),
    ("t-router", "router.jpg", "Home Router"),
]

templates = []
for tid, src, name in TEMPLATE_MAP:
    save(fit(load(src), 800, 800), tid + ".jpg", quality=82)
    templates.append({"id": tid, "name": name, "image": "/memes/" + tid + ".jpg", "boxes": 2})

with open(os.path.join(OUT, "catalog.json"), "w") as f:
    json.dump({"memes": memes, "templates": templates}, f)

print("memes", len(memes), "templates", len(templates))
