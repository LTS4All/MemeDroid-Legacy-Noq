import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { GALLERIES, type GalleryId } from "@/lib/memedroid/types";

const extra = [
  { to: "/generate", label: "Generate" },
  { to: "/ios", label: "iOS app" },
  { to: "/legacy/", label: "iOS 6 site", external: true },
] as const;

export function SiteHeader({ gallery }: { gallery?: GalleryId }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/", search: { g: "trending", q: q.trim() } });
  }

  return (
    <header className="bg-header text-brand-fg">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-3 py-2.5">
        <Link to="/" search={{ g: "trending", q: "" }} className="flex min-w-0 items-center gap-2">
          <img
            src="/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-md outline outline-1 -outline-offset-1 outline-black/20"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold leading-tight tracking-tight">
              memedroid
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-brand-fg/80">
              Legacy
            </span>
          </span>
        </Link>
        <form onSubmit={onSearch} className="ml-auto flex min-w-0 flex-1 justify-end">
          <label className="sr-only" htmlFor="q">
            Search memes
          </label>
          <input
            id="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search memes"
            className="h-10 w-full max-w-56 rounded-md bg-brand-fg px-3 text-sm text-ink placeholder:text-muted outline-none"
          />
        </form>
      </div>
      <nav className="border-t border-black/10 bg-brand-dark">
        <div className="mx-auto flex max-w-3xl gap-0 overflow-x-auto px-1">
          {GALLERIES.map((g) => (
            <Link
              key={g.id}
              to="/"
              search={{ g: g.id, q: "" }}
              className={`shrink-0 px-3 py-2.5 text-sm font-medium ${
                gallery === g.id
                  ? "bg-paper text-ink"
                  : "text-brand-fg/90 hover:bg-black/10"
              }`}
            >
              {g.label}
            </Link>
          ))}
          {extra.map((item) =>
            "external" in item ? (
              <a
                key={item.to}
                href={item.to}
                className="shrink-0 px-3 py-2.5 text-sm font-medium text-brand-fg/90 hover:bg-black/10"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="shrink-0 px-3 py-2.5 text-sm font-medium text-brand-fg/90 hover:bg-black/10"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-4 py-10 text-center text-sm text-muted">
      <p>Memedroid Legacy — unofficial client for old iPhones and iPads.</p>
      <p className="mt-1">
        Uses the open{" "}
        <a className="text-brand underline" href="https://github.com/theabbie/memedroid">
          theabbie/memedroid
        </a>{" "}
        API. Not affiliated with Memedroid.
      </p>
    </footer>
  );
}

export function SiteShell({
  gallery,
  children,
}: {
  gallery?: GalleryId;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader gallery={gallery} />
      <main className="mx-auto max-w-3xl px-3 py-4">{children}</main>
      <SiteFooter />
    </div>
  );
}
