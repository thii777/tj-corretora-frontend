module.exports = {
  reactStrictMode: true,

  postcssLoaderOptions: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      atImport,
      postCssCustomProperties({
        preserve: false,
        importFrom: 'src/styles/variables.js',
      }),
      postcssCustomMedia({
        preserve: false,
        importFrom: 'src/styles/breakpoints.js',
      }),
      postCssPresetEnv({
        stage: 0,
        browserslist: 'last 2 versions',
      }),
      postCssColorMod,
    ],
  },
}
