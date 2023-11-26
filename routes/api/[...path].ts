import { type Handler } from "$fresh/server.ts";
import { Hono } from "$hono/mod.ts";
import { cors } from "$hono/middleware.ts";
import { markdownDataList, ReportMetaData } from "@/core/getData.ts";

const app = new Hono().basePath("/api");
const kv = await Deno.openKv();

app.use("*", cors({ origin: "*" }));

app.get("/report", async (ctx) => {
  const { count } = ctx.req.query();

  if (!count) {
    const entries = kv.list<ReportMetaData>({ prefix: ["report"] });
    const reports: ReportMetaData[] = [];
    for await (const entry of entries) {
      reports.push(entry.value);
    }
    return ctx.json<ReportMetaData[]>(reports);
  } else {
    const { value } = await kv.get<ReportMetaData>(["report", count]);
    return ctx.json<ReportMetaData | null>(value);
  }
}).post((ctx) => {
  markdownDataList.map(async (item) => {
    await kv.set(["report", item?.path.split("/").at(-1)!], item);
  });
  return ctx.text("更新完了");
});

export const handler: Handler = (req) => app.fetch(req);
