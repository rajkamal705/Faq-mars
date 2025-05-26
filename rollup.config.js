import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-react', {
          runtime: 'automatic'
        }],
        '@babel/preset-env'
      ]
    }),
    postcss({
      modules: true,
      extract: true,
      minimize: true,
      plugins: [
        require('autoprefixer')(),
        require('cssnano')()
      ]
    })
  ]
};