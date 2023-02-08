import { JSX } from "preact";

type Props = {
  css?: string;
  href: string;
  target?: "_self" | "_blank";
  children: JSX.Element | string | (JSX.Element | string)[];
};

export const TextLink = ({ css, href, target, children }: Props) => {
  return (
    <a
      class={css}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
