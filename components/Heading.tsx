type Props = {
  level: 1 | 2 | 3;
  css?: string;
  children: string | string[];
};

export const Heading = ({ level, css, children }: Props) => {
  if (level === 1) {
    return <h1 class={`text-2xl font-bold ${css}`}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 class={`text-3xl font-bold ${css}`}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 class={`text-2xl font-bold ${css}`}>{children}</h3>;
  }
  return <span class={css}>{children}</span>;
};
