import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/SiteHeader";
import { allTemplates } from "@/lib/memedroid/archive";

export const Route = createFileRoute("/generate")({
  component: GeneratePage,
});

function GeneratePage() {
  const templates = useMemo(() => allTemplates(), []);
  const [tid, setTid] = useState(templates[0]?.id ?? "t-drake");
  const [top, setTop] = useState("OLD IPHONE");
  const [bottom, setBottom] = useState("NEW MEMES");
  const tpl = templates.find((t) => t.id === tid) ?? templates[0];

  return (
    <SiteShell>
      <h1 className="font-display text-2xl font-semibold tracking-tight">Meme generator</h1>
      <p className="mt-1 max-w-prose text-pretty text-sm text-muted">
        Classic top / bottom captions. Works in this browser with CSS overlay, and on iOS 6
        through the Legacy site (no canvas required).
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
        <div className="rounded-xl bg-card p-3 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
          {tpl ? (
            <div className="relative overflow-hidden rounded-lg bg-ink">
              <img src={tpl.image} alt={tpl.name} className="block w-full" />
              {top ? (
                <p className="pointer-events-none absolute inset-x-2 top-3 text-center font-display text-xl font-bold uppercase leading-tight text-white [text-shadow:0_0_4px_#000,0_1px_0_#000,-1px_0_0_#000,1px_0_0_#000]">
                  {top}
                </p>
              ) : null}
              {bottom ? (
                <p className="pointer-events-none absolute inset-x-2 bottom-3 text-center font-display text-xl font-bold uppercase leading-tight text-white [text-shadow:0_0_4px_#000,0_1px_0_#000,-1px_0_0_#000,1px_0_0_#000]">
                  {bottom}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
        <form
          className="flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="text-xs font-medium text-muted" htmlFor="tpl">
            Template
          </label>
          <select
            id="tpl"
            value={tid}
            onChange={(e) => setTid(e.target.value)}
            className="h-11 rounded-md bg-paper px-2 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
          >
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
          <label className="text-xs font-medium text-muted" htmlFor="top">
            Top text
          </label>
          <input
            id="top"
            value={top}
            onChange={(e) => setTop(e.target.value)}
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
          />
          <label className="text-xs font-medium text-muted" htmlFor="bottom">
            Bottom text
          </label>
          <input
            id="bottom"
            value={bottom}
            onChange={(e) => setBottom(e.target.value)}
            className="h-11 rounded-md bg-paper px-3 text-sm shadow-[0_0_0_1px_rgba(28,20,16,0.12)]"
          />
          <p className="text-xs text-muted">
            On iPhone 4 / iOS 9, use the{" "}
            <a className="text-brand underline" href="/legacy/generate.html">
              Legacy generator
            </a>
            .
          </p>
        </form>
      </div>

      <ul className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {templates.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => setTid(t.id)}
              className={`overflow-hidden rounded-md ${
                t.id === tid ? "ring-2 ring-brand" : "opacity-90 hover:opacity-100"
              }`}
            >
              <img src={t.image} alt={t.name} className="aspect-square w-full object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
