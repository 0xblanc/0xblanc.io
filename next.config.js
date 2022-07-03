/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/0xblanc/0xblanc.io/main/docs/',
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
