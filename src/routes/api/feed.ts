import { createFileRoute } from "@tanstack/react-router";
import { getFeed } from "@/lib/memedroid/feed";

export const Route = createFileRoute("/api/feed")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const origin = url.origin;
        const gallery = url.searchParams.get("g") || "trending";
        const q = url.searchParams.get("q") || "";
        const feed = await getFeed(gallery, q, origin);
        return Response.json(feed, {
          headers: {
            "cache-control": "public, max-age=30",
            "access-control-allow-origin": "*",
          },
        });
      },
    },
  },
});
