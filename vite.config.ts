import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@constantes": resolve(__dirname, "./src/constantes"),
      "@context": resolve(__dirname, "./src/context"),
      "@dictionary": resolve(__dirname, "./src/dictionary"),
      "@enums": resolve(__dirname, "./src/enums"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@interfaces": resolve(__dirname, "./src/interfaces"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@svg": resolve(__dirname, "./src/Svg"),
      "@types": resolve(__dirname, "./src/types"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@socket": resolve(__dirname, "./src/Websockets"),
      eventsource:
        "./node_modules/sockjs-client/lib/transport/browser/eventsource.js",
      events: "./node_modules/sockjs-client/lib/event/emitter.js",
      crypto: "./node_modules/sockjs-client/lib/utils/browser-crypto.js",
    },
  },
});
