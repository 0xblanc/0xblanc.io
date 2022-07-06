/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://0xblanc.io' : '',
  reactStrictMode: false,
  jsconfigPaths: true,
  tsconfigPath: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['res.cloudinary.com'],
    // unoptimized: true,
  },
}

module.exports = nextConfig
