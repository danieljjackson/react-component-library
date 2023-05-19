import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    css({ output: 'dist/bundle.css' }),
  ],
}