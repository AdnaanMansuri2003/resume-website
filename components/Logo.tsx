/**
 * The "A" monogram used in the nav and the footer.
 *
 * The same mark is duplicated as a standalone file in app/icon.svg (the browser
 * tab icon) — if you change the geometry here, change it there too, and re-run
 * `npm run icons` to rebuild the touch icon.
 *
 * The glyph is drawn with `currentColor` so the parent controls the colour with
 * a text utility; only the tile fill is fixed.
 */
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="9"
        fill="#0b1220"
        stroke="currentColor"
        strokeOpacity="0.42"
        strokeWidth="1.5"
      />
      <path
        d="M8.6 24 16 8l7.4 16"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7 19h8.6"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
