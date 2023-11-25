import { resolve } from "std/path/mod.ts";
import { extract } from "std/encoding/front_matter/any.ts";
import { getFileList } from "deno-util/file.ts";
import { marked } from "@/core/marked.ts";

export type Meta = {
  date: Date;
  connpass: string;
};

export type MarkdownList = Array<
  | {
    meta: Meta;
    content: string;
    path: string;
  }
  | undefined
>;

export const getMarkdownData = async (path: string) => {
  const decoder = new TextDecoder("utf-8");
  const markdown = decoder.decode(await Deno.readFile(path));
  const { attrs, body } = extract<Meta>(markdown);
  const content = marked.parse(body);

  return {
    meta: attrs,
    content,
  };
};

const reportDataList = await getFileList(resolve(Deno.cwd(), ".", "report"));

export const markdownDataList: MarkdownList = await Promise.all(
  reportDataList.map(async (entry) => {
    if (entry.ext !== ".md") return;

    const { meta, content } = await getMarkdownData(entry.path);

    const path = entry.path
      .match(/(?=\/report\/).*/g)!
      .join("")
      .replace(".md", "");

    return {
      meta: meta as Meta,
      content,
      path,
    };
  }),
);

export const extractHeading = (content: string | undefined) => {
  const titleList = content?.match(/<h.+?>.+?<\/h.+?>/g);
  return titleList?.map((title) => {
    const level = /<h(.+?) id=.+?>/.exec(title);
    const titleName = title
      .replace(/^(<.+?>)+/g, "")
      .replace(/(<[^>]+>)+$/g, "")
      .replace(/\s+|(<[^>]*>)+/g, " ")
      .trim();

    return {
      level: Number(level![1]) - 2,
      title: titleName,
    };
  });
};
