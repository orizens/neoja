import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { createFilePathsJSON } from './createJson';
const directoryPath = './public/videos'; // Provide your directory path here
const outputPath = './public/videos.json'; // Provide the output JSON file path here

createFilePathsJSON(directoryPath, outputPath);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});
