export type BlogLang = "es" | "en" | "fr";

// Inline links inside text use the form [label](href).
export type Block =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export type Section = { h: string; blocks: Block[] };

export type ArticleText = {
  title: string; // <title> and card title
  description: string; // meta description and card text
  h1: string;
  intro: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; service: string };
};

export type Article = {
  key: string;
  date: string; // ISO date of publication
  slug: Record<BlogLang, string>;
  // Spanish articles published before this module keep their own page files;
  // for those, `text.es` is absent and only the slug is used for hreflang.
  text: Partial<Record<BlogLang, ArticleText>>;
  serviceHref: Record<BlogLang, string>;
};
