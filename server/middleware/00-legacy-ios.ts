function isLegacyIOS(ua: string): boolean {
  if (!/iPhone|iPad|iPod/i.test(ua)) return false;
  const match = ua.match(/OS (\d+)[_.]/i);
  if (!match) return false;
  const version = Number(match[1]);
  return version >= 4 && version <= 13;
}

export default async function legacyIosMiddleware(
  event: { url: URL; req: { method: string; headers: Headers } },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET") return next();
  const path = event.url.pathname;
  const ua = event.req.headers.get("user-agent") ?? "";
  if (isLegacyIOS(ua) && (path === "/" || path === "")) {
    return new Response(null, {
      status: 302,
      headers: { location: "/legacy/" },
    });
  }
  return next();
}
