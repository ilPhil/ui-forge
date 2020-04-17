import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: {
    file: "./build/bundle.min.js",
    format: "cjs",
  },
  // All the used libs needs to be here
  external: ["react", "react-proptypes"],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: "inline",
    }),
    babel({
      presets: ["@babel/preset-react", "@babel/preset-env"],
      // plugins: ["@babel/plugin-external-helpers"],
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    commonjs(),
    resolve(),
    uglify(),
  ],
};
