import type { NextConfig } from "next";

// Налаштування для підтримки SVG як React компонентів
const nextConfig: NextConfig = {
  webpack(config) {
    // Додаємо нове правило для обробки SVG файлів
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Використовуємо @svgr/webpack для перетворення SVG в React компоненти
    });

    return config;
  },
};

export default nextConfig;
