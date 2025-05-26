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
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-react', {
          runtime: 'automatic'
        }],
        '@babel/preset-env'
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', {
          corejs: 3,
          version: "^7.24.5"
        }]
      ]
    }),
    postcss({
      modules: false,
      extract: 'Faq.css', // Changed from true to false
      minimize: true,
      // inject: true,
      plugins: [
        require('autoprefixer')(),
        require('cssnano')()
      ]
    })
  ]
};