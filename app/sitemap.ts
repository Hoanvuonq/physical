import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.phongkhamtamthinh.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Sau này có thêm trang:
    // { url: `${baseUrl}/gioi-thieu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/dich-vu`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}