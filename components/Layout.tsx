import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { SITE_NAME } from "../config.ts";

type Props = {
  children: (JSX.Element | string)[];
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <link
          rel="shortcut icon"
          href="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f4dd.png"
          type="image/x-icon"
        />
      </Head>
      <div
        class="min-h-screen dark:bg-gray-800 dark:text-white"
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Header />
        <main class="px-4 mx-auto w-full max-w-screen-md">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
