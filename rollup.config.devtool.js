import { nodeResolve } from "@rollup/plugin-node-resolve"
export default {
  input: "./devtool/editor.js",
  output: {
    file: "./devtool/editor.bundle.js",
    format: "iife"
  },
  plugins: [nodeResolve()]
}
