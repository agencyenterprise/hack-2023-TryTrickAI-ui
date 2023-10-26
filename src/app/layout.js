import "./globals.css";
import { Menu } from "@/components/Menu";

export const metadata = {
  title: "Try Trick AI",
  description: "Try Trick AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Try Trick AI</title>
        <meta name="title" content="Try Trick AI" />
        <meta
          name="description"
          content="Are you able to trick AI? Find out!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trytrickai.com/" />
        <meta property="og:title" content="Try Trick AI" />
        <meta
          property="og:description"
          content="Are you able to trick AI? Find out!"
        />
        <meta property="twitter:url" content="https://www.trytrickai.com/" />
        <meta property="twitter:title" content="Try Trick AI" />
        <meta
          property="twitter:description"
          content="Are you able to trick AI? Find out!"
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
