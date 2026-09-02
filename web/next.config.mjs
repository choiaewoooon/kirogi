/** @type {import('next').NextConfig} */
// Static export: every chain read happens in the browser, so the site needs no server.
// It is published under GitHub Pages at /kirogi/app, hence the basePath.
const pages = process.env.PAGES_EXPORT === "1";
export default {
  reactStrictMode: true,
  ...(pages && {
    output: "export",
    basePath: "/kirogi/app",
    assetPrefix: "/kirogi/app/",
    trailingSlash: true,
    images: { unoptimized: true },
    env: { NEXT_PUBLIC_BASE_PATH: "/kirogi/app" },
  }),
};
