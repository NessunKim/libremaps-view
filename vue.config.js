module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ['postcss-loader']
        }
      ]
    }
  }
}