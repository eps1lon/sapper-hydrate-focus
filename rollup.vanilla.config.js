/* eslint-env node */
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default {
  input: "./src/routes/sapper.svelte",
  output: {
    file: "./__sapper__/export/svelte.mjs",
    format: "esm"
  },
  plugins: [
    svelte({
      dev: true,
      hydratable: true
    }),
    resolve({ moduleExtensions: [".mjs", ".js"] })
  ]
};
