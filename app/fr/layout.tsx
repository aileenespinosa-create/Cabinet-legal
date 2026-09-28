// Pages under /fr are written in that language: mark the content subtree so
// search engines, screen readers and CSS hyphenation use the right language.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div lang="fr">{children}</div>;
}
