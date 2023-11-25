import type { Handlers, PageProps } from "$fresh/server.ts";
import { type Meta, ReportMetaData } from "@/core/getData.ts";
import { Heading } from "@/components/Heading.tsx";
import { Layout } from "@/components/Layout.tsx";
import { TextLink } from "@/components/Link.tsx";
import { SITE_NAME } from "@/config.ts";

type HandlerProps = {
  meta: Meta;
  content: string;
  count: string;
};

export const handler: Handlers<HandlerProps> = {
  async GET(req, ctx) {
    try {
      const { count } = ctx.params;
      const res = await fetch(
        `${new URL(req.url).origin}/api/report?count=${count}`,
      );
      const report: ReportMetaData = await res.json();
      return ctx.render({
        meta: report.meta,
        content: report.content,
        count,
      });
    } catch (_) {
      return ctx.renderNotFound();
    }
  },
};

export default function Report({ data, url }: PageProps<HandlerProps>) {
  const { meta, content, count } = data;
  const zeroSuppress = (num: string) => `${Number(num)}`;
  const formatDate = (dateStyle: "full" | "long" | "medium" | "short") =>
    Intl.DateTimeFormat("ja-JP", { dateStyle, timeZone: "Asia/Tokyo" }).format(
      new Date(meta.date),
    );
  const hyphenSeparateDate = formatDate("medium").replaceAll(
    "/",
    "-",
  );

  return (
    <Layout
      title={`第${zeroSuppress(count)}回 | ${SITE_NAME}`}
      description={`Denoばた会議の第1回レポートです`}
      type="article"
      url={url}
    >
      <Heading level={2}>
        Denoばた会議 Monthly 第{zeroSuppress(count)}回
      </Heading>
      <div class="flex gap-3">
        <time dateTime={hyphenSeparateDate}>{formatDate("long")}開催</time>
        <TextLink
          css="underline"
          href={meta.connpass}
          external
        >
          connpassリンク
        </TextLink>
      </div>
      <div
        class="mt-12"
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          title="Denoばた会議 Monthly レポート"
          allow="fullscreen"
          src={`https://uki00a.github.io/slides/denobata-${hyphenSeparateDate}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        class="mt-12 markdown-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}
