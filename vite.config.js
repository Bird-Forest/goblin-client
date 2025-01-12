import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
// import glob from "fast-glob";
import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "/goblin-client/",
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 86,
      },
      jpeg: {
        quality: 86,
      },
      jpg: {
        quality: 86,
      },
    }),
    {
      ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
        destination: "./src/img/webp/",
        plugins: [imageminWebp({ quality: 86 })],
      }),
      apply: "serve",
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve("/src"),
    },
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "/src/*/**"),
  //   },
  // },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },

  build: {
    assetsInlineLimit: 0,
    outDir: "dist",
  },

  // build: {
  //   minify: false, // disable minification
  //   rollupOptions: {
  //     input: Object.fromEntries(
  //       glob
  //         .sync(["./*.html", "./pages/**/*.html"])
  //         .map((file) => [
  //           path.relative(
  //             '__dirname',
  //             file.slice(0, file.length - path.extname(file).length)
  //           ),
  //           fileURLToPath(new URL(file, import.meta.url)),
  //         ])
  //     ),
  //     // output unminified CSS file
  //     output: {
  //       assetFileNames: "assets/[name].[ext]",
  //     },
  //   },
  // },
});
