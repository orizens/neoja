import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createFilePathsJSON } from './createJson';
const directoryPath = './public/videos'; // Provide your directory path here
const outputPath = './public/videos.json'; // Provide the output JSON file path here
import mkcert from 'vite-plugin-mkcert';

createFilePathsJSON(directoryPath, outputPath);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mkcert(), react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
  server: {
    host: 'localhost',
    port: 4300,
    https: true,
  }
});
