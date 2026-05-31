/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages requires unoptimized images if you are using the Next.js <Image> component
  images: {
    unoptimized: true,
  },

  basePath: '/modern-buttons-sliders',
};

export default nextConfig;