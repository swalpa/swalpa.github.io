/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'out', 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },

    ],
  },
}

module.exports = nextConfig
