import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteHeader";

export const Route = createFileRoute("/ios")({
  component: IosPage,
});

function IosPage() {
  return (
    <SiteShell>
      <h1 className="font-display text-2xl font-semibold tracking-tight">
        Objective-C iOS app
      </h1>
      <p className="mt-2 max-w-prose text-pretty text-sm text-muted">
        Memedroid Legacy for iPhone is a native UIKit app written in Objective-C.
        Deployment target is iOS 6.0, so it is meant for iPhone 3GS through iPhone 4S
        and iOS 9.3.5 devices that Apple left behind.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
        <div className="flex justify-center bg-ink px-6 py-8">
          <div className="w-[220px] rounded-[28px] bg-[#1a1a1a] p-2 shadow-lg">
            <div className="overflow-hidden rounded-[22px] bg-paper">
              <div className="bg-header px-3 py-2 text-center text-[11px] font-semibold text-brand-fg">
                memedroid
              </div>
              <img src="/memes/2001.jpg" alt="" className="h-40 w-full object-cover" />
              <div className="flex items-center justify-between px-2 py-2 text-[10px]">
                <span className="font-semibold text-up">99%</span>
                <span className="text-muted">Trending</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 px-5 py-5 text-sm">
          <p>
            Built like a 2012 App Store client: UINavigationBar, UITableView, JSON over
            NSURLConnection. No Swift, no Auto Layout requirement, no storyboards.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-pretty">
            <li>Target: iOS 6.0 – 9.3.5 (armv7, 32-bit)</li>
            <li>Language: Objective-C, ARC</li>
            <li>Networking: NSURLConnection (no NSURLSession)</li>
            <li>Alerts: UIAlertView (no UIAlertController)</li>
            <li>Layout: springs and struts, 44pt hit targets</li>
            <li>Images: JPEG only (WebP is not in iOS 6 or 9 Safari/UIKit)</li>
          </ul>
          <a
            href="/ios/MemedroidLegacy-src.zip"
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand px-5 font-semibold text-brand-fg"
          >
            Download source (zip)
          </a>
          <p className="text-xs text-muted">
            Open <code className="font-mono">ios/MemedroidLegacy.xcodeproj</code> in Xcode 4.6–7
            to ship to an iPhone 4. Newer Xcode can still read the sources; set the lowest
            deployment target it allows.
          </p>
        </div>
      </div>

      <section className="mt-6 rounded-xl bg-card px-5 py-5 shadow-[0_0_0_1px_rgba(28,20,16,0.08)]">
        <h2 className="font-display text-lg font-semibold">Point it at this site</h2>
        <p className="mt-2 text-pretty text-sm text-muted">
          The app talks JSON to <code className="font-mono">/api/feed</code> and{" "}
          <code className="font-mono">/api/meme/ID</code>. Set{" "}
          <code className="font-mono">kMDAPIBaseURL</code> in{" "}
          <code className="font-mono">MDAPIClient.h</code> to this origin.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md bg-ink p-3 text-xs text-brand-fg">
{`#define kMDAPIBaseURL @"https://YOUR-HOST"
GET /api/feed?g=trending
GET /api/meme/2001
GET /api/templates`}
        </pre>
      </section>
    </SiteShell>
  );
}
