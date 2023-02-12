import { CSS } from "gfm";
import { Handlers } from "$fresh/server.ts";

const css = `${CSS}
.markdown-body ul {
  list-style: disc
}
.markdown-body ol {
  list-style: numeric
}
.markdown-body table {
  width: fit-content;
}

@media (prefers-color-scheme: dark) {
  .markdown-body {
    color: white;
    background-color: #1F2937;
  }
  .markdown-body a {
    color: #60A5FA;
  }
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(css, {
      headers: {
        "content-type": "text/css",
      },
    });
  },
};
