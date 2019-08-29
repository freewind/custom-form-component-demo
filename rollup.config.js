import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'

export default [{
  input: './src/MyCustomMultiSelectComponent.tsx',
  plugins: [
    typescript(),
    postcss()
  ],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  external: ['react', 'formik']
}
]
