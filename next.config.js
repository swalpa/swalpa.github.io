/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   turbo: {
  //     rules: {
  //       // Option format
  //       '*.md': [
  //         {
  //           loader: '@mdx-js/loader',
  //           options: {
  //             format: 'md',
  //           },
  //         },
  //       ],
  //       // Option-less format
  //       '*.mdx': ['@mdx-js/loader'],
  //     },
  //   },
  // },
  output: 'export',
  distDir: 'out', 
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