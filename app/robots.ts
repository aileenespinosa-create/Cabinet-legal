import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/guia-inversion/descarga", "/en/guia-inversion/descarga", "/fr/guia-inversion/descarga"],
    },
    sitemap: "https://cabinetlegal.com.do/sitemap.xml",
  };
}