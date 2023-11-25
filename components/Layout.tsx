import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { SITE_NAME } from "@/config.ts";

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
        <meta name="description" content={description} />
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
      {children}
    </>
  );
};
