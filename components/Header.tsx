import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import { Heading } from "@/components/Heading.tsx";
import { TextLink } from "@/components/Link.tsx";
import { SITE_NAME } from "@/config.ts";

export const Header = () => {
  return (
    <header class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img
          class="w-10 h-10"
          src="https://twemoji.maxcdn.com/v/13.1.0/svg/1f4dd.svg"
        />
        <a href="/">
          <Heading level={1} css="ml-1">{SITE_NAME}</Heading>
        </a>
      </div>

      <TextLink
        href="https://github.com/deno-ja/denobata-monthly-report"
        external
      >
        <IconBrandGithub class="w-9 h-9" />
      </TextLink>
    </header>
  );
};
