process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const merge = require('webpack-merge')
const environment = require('./environment')

var devServerConfig = {
  devtool: 'eval-source-map',
  devServer: {
    watchOptions: {
      aggregateTimeout: 100,
      poll: 500
    }
  }
}

module.exports = merge(environment.toWebpackConfig(), devServerConfig)
