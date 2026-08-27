import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

/** Names and icons for when the site is pinned or installed to a home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.shortName,
    description: profile.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#05070d",
    theme_color: "#05070d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
