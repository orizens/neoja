import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

import { createFilePathsJSON } from './createJson';
const directoryPath = './public/videos'; // Provide your directory path here
const outputPath = './public/videos.json'; // Provide the output JSON file path here

createFilePathsJSON(directoryPath, outputPath);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "../src"),
      lib: resolve(__dirname, "../src/lib"),
      routes: resolve(__dirname, "../src/routes"),
    },
  },
  plugins: [
    react(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ]),
    renderer(),
  ],
})
