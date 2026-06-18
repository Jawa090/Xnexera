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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoImg, type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body className="bg-background text-foreground antialiased">
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
