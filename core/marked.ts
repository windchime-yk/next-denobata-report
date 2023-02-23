import { Marked, Renderer } from "markdown";

class CustomRenderer extends Renderer {
  heading(text: string, level: number): string {
    const headingLevel = level + 1;
    const id = text
      .replace(/^(<.+?>)+/, "")
      .replace(/(<[^>]+>)+$/, "")
      .replace(/\s+|(<[^>]*>)+/g, "-")
      .trim()
      .toLocaleLowerCase();
    return `<h${headingLevel} id="${id}">${text}</h${headingLevel}>`;
  }
  link(href: string, title: string, text: string): string {
    if (/^https?:\/\//.test(href))
      return `
      <a href="${href}" title="${title}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;">
        ${text}
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
          <path d="M10 14l10 -10"></path>
          <path d="M15 4l5 0l0 5"></path>
        </svg>
      </a>
      `;
    return `<a href="${href}" title="${title}">${text}</a>`;
  }
}

Marked.setOptions({ renderer: new CustomRenderer() });
export { Marked };
