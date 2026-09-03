import { createFileRoute } from "@tanstack/react-router";
import { getMemeById } from "@/lib/memedroid/feed";

export const Route = createFileRoute("/api/meme/$id")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const origin = new URL(request.url).origin;
        const meme = getMemeById(params.id, origin);
        if (!meme) {
          return Response.json({ error: "not_found" }, { status: 404 });
        }
        return Response.json(
          { meme },
          {
            headers: {
              "cache-control": "public, max-age=60",
              "access-control-allow-origin": "*",
            },
          },
        );
      },
    },
  },
});
