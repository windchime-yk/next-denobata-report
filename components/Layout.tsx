import { JSX } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { SITE_NAME } from "../config.ts";

type Props = {
  /** レポートのタイトル */
  title?: string;
  /** TOPページやレポートの説明 */
  description: string;
  /** OGPタイプ。ref: https://ogp.me/ */
  type: "website" | "article";
  /** OGPで利用するURLオブジェクト */
  url: URL;
  /** 複数の子要素 */
  children: JSX.Element | string | (JSX.Element | string)[];
};

export const Layout = ({ title, description, type, url, children }: Props) => {
  const reportTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <Head>
        <title>{reportTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link
          rel="shortcut icon"
          href="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f4dd.png"
          type="image/x-icon"
        />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={reportTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={url?.toString()} />
        <meta property="og:image" content={`${url.origin}/ogp.png`} />
        <meta name="twitter:card" content="summary" />
        <link rel="stylesheet" href="/gfm.css" />
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
