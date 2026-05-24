/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects() {
    return [{ source: '/', destination: '/profile', permanent: true }]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // optimizeCss: true,
    // typedRoutes: true,
	}
}

module.exports = nextConfig
