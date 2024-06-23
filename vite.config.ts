import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@vkontakte\/vkui$/, replacement: "@vkontakte/vkui/dist/cssm" },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
