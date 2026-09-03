import { createFileRoute } from "@tanstack/react-router";
import { spawn } from "node:child_process";

const ALLOW = /^https:\/\/(memes\.memedroid\.com|i\.imgflip\.com|www\.memedroid\.com)\//;

function toJpeg(input: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const ff = spawn(
      "ffmpeg",
      ["-loglevel", "error", "-i", "pipe:0", "-frames:v", "1", "-f", "image2", "-c:v", "mjpeg", "pipe:1"],
      { stdio: ["pipe", "pipe", "pipe"] },
    );
    const chunks: Buffer[] = [];
    ff.stdout.on("data", (c: Buffer) => chunks.push(c));
    ff.on("error", reject);
    ff.on("close", (code) => {
      if (code === 0 && chunks.length) resolve(Buffer.concat(chunks));
      else reject(new Error("ffmpeg failed"));
    });
    ff.stdin.write(input);
    ff.stdin.end();
  });
}

export const Route = createFileRoute("/api/img")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const src = new URL(request.url).searchParams.get("u") || "";
        if (!ALLOW.test(src)) {
          return new Response("blocked", { status: 400 });
        }
        const res = await fetch(src, {
          headers: { accept: "image/*,*/*" },
          signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) return new Response("upstream", { status: 502 });
        const bytes = new Uint8Array(await res.arrayBuffer());
        const type = res.headers.get("content-type") || "";
        if (/jpeg|jpg|png|gif/i.test(type) && !/webp/i.test(type)) {
          return new Response(bytes, {
            headers: {
              "content-type": type,
              "cache-control": "public, max-age=86400",
            },
          });
        }
        try {
          const jpeg = await toJpeg(Buffer.from(bytes));
          return new Response(new Uint8Array(jpeg), {
            headers: {
              "content-type": "image/jpeg",
              "cache-control": "public, max-age=86400",
            },
          });
        } catch {
          return new Response(bytes, {
            headers: {
              "content-type": type || "application/octet-stream",
              "cache-control": "public, max-age=3600",
            },
          });
        }
      },
    },
  },
});
