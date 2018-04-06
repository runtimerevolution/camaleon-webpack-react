process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const merge = require('webpack-merge')
const environment = require('./environment')

var sourceMapSettings = {
  devtool: 'source-map'
}

environment.plugins.get('UglifyJs').options.uglifyOptions.ecma = 5

module.exports = merge(environment.toWebpackConfig(), sourceMapSettings)
