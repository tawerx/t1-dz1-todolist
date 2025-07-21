import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "t1-dz1-todolist",
  base: "/",
  plugins: [react()],
});
