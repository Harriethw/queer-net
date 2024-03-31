module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    cfg.module.rules.push({
      test: /\.test\.tsx?$/,
      use: "ignore-loader",
    });
    cfg.resolve.fallback = { fs: false };
    return cfg;
  },
  output: "export",
  trailingSlash: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", ".scss"],
};
