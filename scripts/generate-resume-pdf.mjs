/**
 * Renders both résumé variants to public/ using whichever Chromium-based
 * browser is already installed.
 *
 *   npm run dev            # in one terminal
 *   npm run resume:pdf     # in another
 *
 * Pass a different origin as the first argument if the dev server picked a
 * non-default port:  npm run resume:pdf -- http://localhost:3001
 */

import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origin = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const targets = [
  {
    label: "full",
    path: "/resume",
    file: "Mohammad-Adnaan-Mansuri-Resume.pdf",
    expectedPages: 2,
  },
  {
    label: "one-page",
    path: "/resume/one-page",
    file: "Mohammad-Adnaan-Mansuri-Resume-Onepage.pdf",
    expectedPages: 1,
  },
];

/**
 * Chrome drops `tel:` hrefs when printing to PDF, so components/ResumeSheet.tsx
 * renders a same-length mailto placeholder and we restore the real URI here.
 * Equal byte length keeps every xref offset in the file valid.
 */
const TEL_PLACEHOLDER = "mailto:m@mail.co";
const TEL_URI = "tel:+14374308083";

if (TEL_PLACEHOLDER.length !== TEL_URI.length) {
  console.error(
    `Placeholder and tel URI must be the same length ` +
      `(${TEL_PLACEHOLDER.length} vs ${TEL_URI.length}).`,
  );
  process.exit(1);
}

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));

if (!browser) {
  console.error(
    "No Chrome or Edge install found. Set CHROME_PATH to the browser executable.",
  );
  process.exit(1);
}

const countPages = (buffer) =>
  (buffer.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;

const fail = (message, temp) => {
  if (temp) rmSync(temp, { force: true });
  console.error(message);
  process.exit(1);
};

let warnings = 0;

for (const target of targets) {
  // ?pdf=1 swaps the phone href to the placeholder that survives PDF export.
  const url = `${origin}${target.path}?pdf=1`;
  const output = resolve(root, "public", target.file);
  const temp = `${output}.tmp`;

  // Fail early with a clear message rather than producing a blank PDF.
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    fail(
      `Could not reach ${url} — is the dev server running?\n  ${error.message}`,
    );
  }

  mkdirSync(dirname(output), { recursive: true });
  rmSync(temp, { force: true });

  console.log(`Rendering ${url}`);

  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=12000",
      `--print-to-pdf=${temp}`,
      url,
    ],
    { stdio: "ignore" },
  );

  if (!existsSync(temp)) fail("Render finished but no PDF was written.");

  // Patch the phone link, then publish. The existing PDF is left untouched if
  // anything here fails, so a bad run never ships a résumé with a dead link.
  const buffer = readFileSync(temp);
  const marker = buffer.indexOf(TEL_PLACEHOLDER, 0, "latin1");

  if (marker === -1) {
    fail(
      `Could not find the phone placeholder "${TEL_PLACEHOLDER}" in the render.\n` +
        "Check that TEL_PDF_PLACEHOLDER in components/ResumeSheet.tsx still matches.",
      temp,
    );
  }

  buffer.write(TEL_URI, marker, "latin1");

  if (buffer.includes(TEL_PLACEHOLDER, 0, "latin1")) {
    fail("Placeholder still present after patching — aborting.", temp);
  }

  const pages = countPages(buffer);

  writeFileSync(output, buffer);
  rmSync(temp, { force: true });

  console.log(
    `  -> ${target.file} (${pages} page${pages === 1 ? "" : "s"}, ` +
      `${statSync(output).size} bytes)`,
  );

  // A one-pager that quietly grew to two pages defeats the point of having it.
  if (pages !== target.expectedPages) {
    warnings += 1;
    console.warn(
      `  !! expected ${target.expectedPages} page(s). Trim content in ` +
        `lib/data.ts or adjust the density rules in app/resume/print.css.`,
    );
  }
}

console.log(
  warnings
    ? `Done with ${warnings} page-count warning(s).`
    : "Done — both résumés generated at the expected length.",
);
