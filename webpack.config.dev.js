/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const config = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    noInfo: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
  },
});

module.exports = config;
