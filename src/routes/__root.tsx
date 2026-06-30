import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoImg from "../assets/logo-icon.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">Page not found.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nexera — AI Voice Agents That Answer, Qualify & Book Leads 24/7" },
      { name: "description", content: "Deploy AI voice and chat agents for Healthcare and Real Estate. Answer calls, qualify leads, book appointments, and update your CRM automatically." },
      { property: "og:title", content: "Nexera — Never Miss Another Lead Again" },
      { property: "og:description", content: "AI Voice & Chat Agents for Healthcare and Real Estate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800;900&display=swap", as: "style" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoImg, type: "image/png" },
    ],
    scripts: [
      {
        children: `
          (function(){
            var l=document.createElement('link');
            l.rel='stylesheet';
            l.href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800;900&display=swap';
            l.media='print';
            l.onload=function(){this.media='all'};
            document.head.appendChild(l);
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  pendingComponent: PendingComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function PendingComponent() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#000", color: "#f5f5f7" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 40, height: 40, border: "3px solid rgba(255,255,255,0.1)", borderTopColor: "#eb7d02", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto" }} />
        <p style={{ marginTop: 16, fontSize: 14, color: "#8a8a93" }}>Loading…</p>
      </div>
    </div>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        {/* Critical inline CSS — ensures page isn't white/blank while external CSS loads */}
        <style dangerouslySetInnerHTML={{ __html: `
          html,body{background:#000;color:#f5f5f7;margin:0;font-family:Inter,ui-sans-serif,system-ui,sans-serif}
          @keyframes spin{to{transform:rotate(360deg)}}
        ` }} />
      </head>
      <body className="bg-background text-foreground antialiased">
        <noscript>
          <div style={{ padding: "3rem 1.5rem", textAlign: "center", background: "#000", color: "#f5f5f7", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div>
              <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Nexera — AI Voice Agents</h1>
              <p style={{ marginTop: "1rem", color: "#8a8a93" }}>Please enable JavaScript to use this site.</p>
              <a href="mailto:support@xnexera.com" style={{ marginTop: "1.5rem", display: "inline-block", color: "#eb7d02" }}>Contact us: support@xnexera.com</a>
            </div>
          </div>
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function HashScrollHandler() {
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 50; // Try for up to 2.5 seconds
    const checkAndScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Try immediately
    if (checkAndScroll()) return;

    const interval = setInterval(() => {
      if (checkAndScroll()) {
        clearInterval(interval);
      } else {
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [location]);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HashScrollHandler />
      <Outlet />
    </QueryClientProvider>
  );
}
