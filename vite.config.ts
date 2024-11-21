import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // Ścieżka bazowa dla Render
  server: {
    host: "0.0.0.0", // Nasłuchuj na wszystkich interfejsach sieciowych
    port: parseInt(process.env.PORT || "4173", 10), // Dynamiczny port Render
  },
  preview: {
    host: "0.0.0.0", // Nasłuchuj na wszystkich interfejsach podczas preview
    port: parseInt(process.env.PORT || "4173", 10),
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
