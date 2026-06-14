const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// Specify repository name for GitHub Pages subdirectory hosting
const repoName = "legal";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Automatically apply basePath and assetPrefix only when building on GitHub Actions
  basePath: isGithubActions ? `/${repoName}` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
