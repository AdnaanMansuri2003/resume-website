/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // next/image re-encodes on the way out, and its default of 75 visibly
    // softens the hero portrait. 95 is allowed alongside the default so the
    // photos stay sharp without opting every image into a larger payload.
    qualities: [75, 95],
  },
};

export default nextConfig;
