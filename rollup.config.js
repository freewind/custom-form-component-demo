import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/MyCustomComponent.tsx',
  plugins: [typescript()],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  external: ['react', 'formik']
}
