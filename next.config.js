/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  jsconfigPaths: true,
  tsconfigPath: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // unoptimized: true,
  },
}

module.exports = nextConfig
