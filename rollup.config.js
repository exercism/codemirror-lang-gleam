import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
  input: "./src/index.js",
  external: [
    '@codemirror/language',
    '@codemirror/highlight',
    '@codemirror/autocomplete',
    '@lezer/lr',
    '@lezer/common'
  ],

  output: [{
    format: "cjs",
    file: "./dist/index.cjs"
  }, {
    format: "es",
    file: "./dist/index.es.js"
  }],
  plugins: [
    nodeResolve(),
  ]
}
