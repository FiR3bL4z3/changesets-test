import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  minify: false,
  dts: true,
  clean: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
