/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
const merge = require('webpack-merge')
const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module.rule('scss').oneOf('normal').use('sass-loader')
      .tap(options =>
        merge(options, {
          includePaths: [path.resolve(__dirname, 'node_modules')],
          data: '@import "~bootstrap/scss/_variables";'
        }))
  }
}
