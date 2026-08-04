import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://frostifyservicecenter.com",
      lastModified: new Date(),
    },
    {
      url: "https://frostifyservicecenter.com/ac-repair",
      lastModified: new Date(),
    },
    {
      url: "https://frostifyservicecenter.com/washing-machine-repair",
      lastModified: new Date(),
    },
    {
      url: "https://frostifyservicecenter.com/refrigerator-repair",
      lastModified: new Date(),
    },
  ];
}