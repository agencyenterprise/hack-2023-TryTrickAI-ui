"use client";
import { Menu } from "@/components/Menu";
import posthog from "posthog-js";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    posthog.init("phc_rt22ZpqnpUFPaEvoyCkDLEbq2nTeHWVI3M4fLujAIfU", {
      api_host: "https://app.posthog.com",
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Try to Trick AI - Puzzle Game</title>
        <link rel="icon" type="image/png" href="/icon.png" />

        <meta name="title" content="Try to Trick AI - Puzzle Game" />
        <meta
          name="description"
          content="Are you able to trick AI? Play the puzzles and find out!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trytrickai.com/" />
        <meta property="og:title" content="Try to Trick AI - Puzzle Game" />
        <meta
          property="og:description"
          content="Are you able to trick AI? Play the puzzles and find out!"
        />
        <meta property="og:image" content="https://www.trytrickai.com/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.trytrickai.com/" />
        <meta
          property="twitter:title"
          content="Try to Trick AI - Puzzle Game"
        />
        <meta
          property="twitter:description"
          content="Are you able to trick AI? Play the puzzles and find out!"
        />
        <meta
          property="twitter:image"
          content="https://www.trytrickai.com/og.png"
        />
      </head>
      <body
        className="overflow-x-hidden overflow-y-scroll"
        suppressHydrationWarning
      >
        <script src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <span className="fixed inset-0 bg-[url(/background.png)] bg-cover bg-center bg-black -z-[11]" />
        <Menu />
        <main className="grid min-h-screen p-4 pb-5 place-content-center md:p-0">
          {children}
        </main>
        <div class="text-center my-4" aria-label="Made with love by AE Studio">
          Made with ❤️ by{" "}
          <a
            href="https://ae.studio?utm_source=https://trytrickai.com/"
            target="_blank"
            class="ae-studio"
          >
            AE Studio
          </a>
        </div>
      </body>
    </html>
  );
}
