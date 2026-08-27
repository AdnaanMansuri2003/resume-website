/**
 * Rasterises the "A" monogram into the PNG sizes that SVG favicons don't cover:
 * the iOS touch icon and the two web-manifest icons.
 *
 *   npm run icons
 *
 * Outputs are committed, so this only needs re-running when the mark in
 * components/Logo.tsx and app/icon.svg changes.
 *
 * Uses sharp, which ships with Next.js — there is no separate install.
 */

import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Full-bleed variant of the mark. iOS and Android apply their own mask, so the
 * tile fills the square edge to edge instead of carrying its own rounded corner.
 */
const source = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101c33"/>
      <stop offset="1" stop-color="#070b14"/>
    </linearGradient>
    <!-- userSpaceOnUse: the crossbar is a horizontal line, so its bounding box
         has no height and an objectBoundingBox gradient would not render. -->
    <linearGradient id="glyph" gradientUnits="userSpaceOnUse"
                    x1="9.2" y1="8.6" x2="22.8" y2="23.4">
      <stop offset="0" stop-color="#7dd3fc"/>
      <stop offset="1" stop-color="#0ea5e9"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" fill="url(#tile)"/>
  <g fill="none" stroke="url(#glyph)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.2 23.4 16 8.6l6.8 14.8"/>
    <path d="M12.1 18.8h7.8"/>
  </g>
</svg>`;

const targets = [
  { file: "app/apple-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of targets) {
  const png = await sharp(Buffer.from(source), { density: 384 })
    .resize(size, size)
    .png()
    .toBuffer();

  writeFileSync(resolve(root, file), png);
  console.log(`${file}  ${size}x${size}  ${(png.length / 1024).toFixed(1)} kB`);
}
