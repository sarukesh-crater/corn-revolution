/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/corn-revolution',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
