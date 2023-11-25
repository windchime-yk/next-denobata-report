import { PageProps } from "$fresh/server.ts";
import { extractHeading, markdownDataList } from "@/core/getData.ts";
import { Layout } from "@/components/Layout.tsx";
import { Heading } from "@/components/Heading.tsx";
import { TextLink } from "@/components/Link.tsx";

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
          {markdownDataList.map((data, index) => {
            const count = index + 1;
            return (
              <section
                class="rounded border(gray-500 2)"
                key={data?.meta.date}
              >
                <a
                  class="block px-3 py-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                  href={data?.path}
                >
                  <Heading level={3}>{`第${count}回`}</Heading>
                  <p>{`第${count}回`}の内訳は以下の通りです。</p>
                  <ul class="mt-3 flex flex-wrap gap-3">
                    {extractHeading(data?.content)?.map((item) => {
                      if (item.level === 1) return;
                      return (
                        <li class="bg-gray-200 dark:bg-gray-600 rounded px-3 py-1">
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
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
