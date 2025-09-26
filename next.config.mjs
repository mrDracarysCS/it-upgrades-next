// next.config.mjs
const repo = "it-upgrades-next"; // <-- your repo

export default {
  reactStrictMode: true,
  output: "export",               // enables static export
  images: { unoptimized: true },  // GH Pages has no Image Optimization
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};
