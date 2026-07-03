import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
        ],
      },
    ],
    sitemap: "https://visittirupati.online/sitemap.xml",
    host: "https://visittirupati.online",
  };
}