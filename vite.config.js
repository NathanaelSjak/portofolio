import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build performance
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,

    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          motion: ["framer-motion"],
          observer: ["react-intersection-observer"],
        },
      },
    },

    // Asset optimization
    assetsInlineLimit: 4096,

    // Reduce bundle size
    chunkSizeWarningLimit: 1000,
  },

  // Optimize dev server
  server: {
    hmr: true,
  },
});
