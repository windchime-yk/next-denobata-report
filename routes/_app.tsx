import { AppProps } from "$fresh/server.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f4dd.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <div
          class="min-h-screen dark:bg-gray-800 dark:text-white"
          style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
          }}
        >
          <Header />
          <main class="px-4 mx-auto w-full max-w-screen-md">
            <Component />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
