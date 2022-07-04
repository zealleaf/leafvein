import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
// import gzip from "rollup-plugin-gzip";
import pkg from "./package.json";

export default defineConfig({
  input: "src/vein.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.main,
      format: "umd",
      name: pkg.name,
      globals: {
        "@emotion/react": "emotionReact",
        react: "react",
        "react-dom": "reactDom",
      },
    },
  ],
  external: ["@emotion/react", "react", "react-dom"],
  plugins: [resolve(), commonjs(), typescript(), filesize(), terser()],
});
