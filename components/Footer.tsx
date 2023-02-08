import { TextLink } from "./Link.tsx";

export const Footer = () => {
  return (
    <footer class="mt-24 text-center">
      <ul class="flex justify-center gap-3">
        <li>
          <TextLink
            css="underline"
            href="https://deno.land"
            target="_blank"
          >
            Deno公式Webサイト
          </TextLink>
        </li>
        <li>
          <TextLink
            css="underline"
            href="https://deno-ja.deno.dev"
            target="_blank"
          >
            deno-ja公式Webサイト
          </TextLink>
        </li>
        <li>
          <TextLink
            css="underline"
            href="https://deno-ja.connpass.com"
            target="_blank"
          >
            deno-ja connpassページ
          </TextLink>
        </li>
      </ul>
      <small class="mt-5">
        &copy; Deno Japan Users Group some rights reserved.
      </small>
    </footer>
  );
};
