/**
 * Port of https://github.com/theabbie/memedroid (MIT)
 * Unofficial Memedroid app API — appv2.memedroid.com
 *
 * The original module only implemented login_by_username. This client keeps
 * that contract and adds the public HTML galleries as a fallback feed.
 */

const APP_ROOT = "https://appv2.memedroid.com";
const WEB_ROOT = "https://www.memedroid.com";
const VERSION_CODE = "114145610";
const DEVICE_ID = "0000000000000000000000000000000000000000000000000000000000000000";

export type LoginResult = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1";

async function postForm(url: string, body: string): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json,text/plain,*/*",
      "user-agent": UA,
    },
    body,
    signal: AbortSignal.timeout(8000),
  });
}

export async function loginByUsername(
  username: string,
  password: string,
): Promise<LoginResult> {
  const body = [
    `password=${encodeURIComponent(password)}`,
    "OS=1",
    `device_id=${DEVICE_ID}`,
    `username=${encodeURIComponent(username)}`,
    `version_code=${VERSION_CODE}`,
  ].join("&");
  const res = await postForm(`${APP_ROOT}/secure/user/login_by_username`, body);
  if (!res.ok) {
    throw new Error(`Memedroid login failed (${res.status})`);
  }
  const data = (await res.json()) as {
    login_info?: {
      access_token?: string;
      refresh_token?: string;
      user_id?: string | number;
    };
  };
  const info = data.login_info;
  if (!info?.access_token) {
    throw new Error("Memedroid login returned no access token");
  }
  return {
    accessToken: info.access_token,
    refreshToken: info.refresh_token ?? "",
    userId: String(info.user_id ?? ""),
  };
}

export type ScrapedMeme = {
  id: string;
  title: string;
  image: string;
  score: number;
  votes: number;
  hoursAgo: number;
};

function parseHours(raw: string): number {
  const t = raw.trim().toLowerCase();
  const n = parseInt(t, 10);
  if (Number.isNaN(n)) return 12;
  if (t.endsWith("m")) return Math.max(1, n / 60);
  if (t.endsWith("h")) return n;
  if (t.endsWith("d")) return n * 24;
  return n;
}

export async function scrapeGallery(
  path: string,
): Promise<ScrapedMeme[]> {
  const url = path.startsWith("http") ? path : `${WEB_ROOT}${path}`;
  const res = await fetch(url, {
    headers: {
      accept: "text/html",
      "user-agent": UA,
    },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) return [];
  const html = await res.text();
  if (html.includes("Attention Required") || html.includes("cf-error")) {
    return [];
  }
  return parseMemedroidHtml(html);
}

export function parseMemedroidHtml(html: string): ScrapedMeme[] {
  const memes: ScrapedMeme[] = [];
  const seen = new Set<string>();
  const detail = /\/memes\/detail\/(\d+)\/([^"'?\s<]+)/g;
  let match: RegExpExecArray | null;
  while ((match = detail.exec(html))) {
    const id = match[1]!;
    if (seen.has(id)) continue;
    seen.add(id);
    const slug = decodeURIComponent(match[2]!.replace(/-/g, " "));
    const windowHtml = html.slice(Math.max(0, match.index - 200), match.index + 1800);
    const img =
      windowHtml.match(
        /https:\/\/memes\.memedroid\.com\/(?:images|videos)\/[0-9-]+\/[a-z0-9]+\.(?:webp|jpg|jpeg|png|gif)/i,
      )?.[0] ?? "";
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
      hoursAgo: parseHours(ageRaw),
    });
  }
  return memes;
}

export const WEB_GALLERY_PATHS: Record<string, string> = {
  trending: "/",
  latest: "/memes/latest",
  top: "/memes/top/day",
};
