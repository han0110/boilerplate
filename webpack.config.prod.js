/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.config.common.js');

const config = merge(common, {
  plugins: [
    new UglifyJSPlugin({ parallel: true }),
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = config;
