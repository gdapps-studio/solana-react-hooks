import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
});
