import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { Heading } from "../components/Heading.tsx";
import { TextLink } from "../components/Link.tsx";

const mockData: Array<{
  meta: {
    title: string;
  };
  body: string;
}> = [
  {
    meta: {
      title: "第1回",
    },
    body: "テスト / テスト / テスト / テスト",
  },
  {
    meta: {
      title: "第2回",
    },
    body:
      "テストテストテストテスト / テスト / テストテストテスト / テストテストテストテストテストテスト / テストテストテスト",
  },
  {
    meta: {
      title: "第3回",
    },
    body:
      "テスト / テストテストテストテストテストテスト / テストテストテスト / テストテスト",
  },
];

export default function Home({ url }: PageProps) {
  return (
    <Layout
      description="Deno日本ユーザーグループが主催する『Denoばた会議 Monthly』のレポートサイトです"
      type="website"
      url={url}
    >
      <section>
        <Heading level={2}>Denoばた会議 Monthly とは</Heading>
        <p class="mt-3">
          <TextLink
            css="underline"
            href="http://deno-ja.deno.dev"
            external
          >
            Deno日本ユーザーグループ（以降、deno-ja）
          </TextLink>がDiscordで月次開催しているイベントです。Deno最新バージョンの更新内容について社内事情も交えた解説がされたり、LTコーナーや質問共有コーナーがあります。<br />deno-jaには社員の方が数名いるため、Denoについて突っ込んだ質問にも回答をいただけるかもしれません。
        </p>
      </section>
      <section class="mt-12">
        <Heading level={2}>各回の内訳</Heading>

        <div class="mt-3 flex flex-col gap-3">
          {mockData.map((data, index) => {
            return (
              <section
                class="rounded border(gray-500 2)"
                key={data.meta.title}
              >
                <a
                  class="block px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                  href={`/report/0${index + 1}`}
                >
                  <Heading level={3}>{data.meta.title}</Heading>
                  <p>{data.meta.title}の内訳は以下の通りです。</p>
                  <div
                    class="mt-3"
                    dangerouslySetInnerHTML={{ __html: data.body }}
                  />
                </a>
              </section>
            );
          })}
        </div>
      </section>
      <section class="mt-12">
        <Heading level={2}>免責事項</Heading>
        <p class="mt-3">
          このレポートはDiscord上の通話を聞きながら記録したものですが、通話内容を正しく記録していると保証するものではありません。
        </p>
      </section>
    </Layout>
  );
}
