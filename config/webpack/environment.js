const { environment } = require('@rails/webpacker')
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

environment.plugins.append('HardSourceWebpackPlugin', new HardSourceWebpackPlugin({}))
environment.loaders.prepend('sass', {
  test: /\.(css|scss|sass)$/,
  use: [{
      loader: 'style-loader'
  }, {
      loader: 'css-loader'
  }, {
      loader: 'sass-loader',
  }]
})

const SASSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'sass-loader')
SASSLoader.loader = 'fast-sass-loader'
SASSLoader.options = { sourceMap: true }

module.exports = environment
