import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./accrnova.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ACCRNOVA Group — Architecture of Tomorrow</title>
        <meta
          name="description"
          content="ACCRNOVA Group is a technology, legal, and infrastructure conglomerate. Home of Axiom AI, AryaSolon Legal, Zenithustra, and Q Commerce."
        />
        <meta property="og:title" content="ACCRNOVA Group — Architecture of Tomorrow" />
        <meta
          property="og:description"
          content="ACCRNOVA Group is a technology, legal, and infrastructure conglomerate. Home of Axiom AI, AryaSolon Legal, Zenithustra, and Q Commerce."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (error && error instanceof Error) {
    details = error.message;
    stack = import.meta.env.DEV ? error.stack : undefined;
  }

  return (
    <main style={{ padding: "4rem 2rem", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--ac-white)" }}>{message}</h1>
      <p style={{ color: "var(--ac-muted)" }}>{details}</p>
      {stack && (
        <pre style={{ overflowX: "auto", fontSize: 12, color: "var(--ac-muted)" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
