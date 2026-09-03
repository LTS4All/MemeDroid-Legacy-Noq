import { createFileRoute } from "@tanstack/react-router";
import { listTemplates } from "@/lib/memedroid/feed";

export const Route = createFileRoute("/api/templates")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        return Response.json(
          { templates: listTemplates(origin) },
          {
            headers: {
              "cache-control": "public, max-age=300",
              "access-control-allow-origin": "*",
            },
          },
        );
      },
    },
  },
});
