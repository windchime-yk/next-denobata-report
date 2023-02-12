import { JSX } from "preact";

type Props = {
  css?: string;
  href: string;
  external?: boolean;
  children: JSX.Element | string | (JSX.Element | string)[];
};

export const TextLink = ({ css, href, external, children }: Props) => {
  return (
    <a
      class={css}
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
