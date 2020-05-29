import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    external: ['styled-components'],
    plugins: [
      peerDepsExternal(),
      typescript({ useTsconfigDeclarationDir: true }),
      // transpile esnext to es5 (IE support)
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      }),
    ],
  },

  // SSR build.
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    external: ['styled-components'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      // transpile esnext to node 12 compatible build.
      getBabelOutputPlugin({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: '12',
              },
            },
          ],
        ],
      }),
    ],
  },
];
