import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <h1 className="font-display text-2xl font-semibold">About Memedroid Legacy</h1>
      <div className="mt-4 space-y-3 text-pretty text-sm leading-relaxed">
        <p>
          This is an unofficial revival of the Memedroid experience for devices that
          cannot run the modern site: iPhone 4, iPad 2, iOS 6, and iOS 9.3.5.
        </p>
        <p>
          Feed code starts from{" "}
          <a className="text-brand underline" href="https://github.com/theabbie/memedroid">
            theabbie/memedroid
          </a>
          , the unofficial Node client that talks to{" "}
          <code className="font-mono">appv2.memedroid.com</code>. Login uses that
          exact <code className="font-mono">login_by_username</code> contract. Live
          galleries scrape public Memedroid HTML when Cloudflare allows it, then fall
          back to the JPEG archive so old Safari is never stuck on a blank page.
        </p>
        <p>
          Old Safari has no WebP, no fetch(), no flexbox you can trust, and no ES6.
          The <a className="text-brand underline" href="/legacy/">iOS 6 site</a> is
          HTML 4 tables, CSS2, and XMLHttpRequest.
        </p>
      </div>
    </SiteShell>
  );
}
