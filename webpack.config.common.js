/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const MODULES_DIR = path.resolve(__dirname, './node_modules');

const loaders = require('./webpack.config.loaders');

const config = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['babel-polyfill', path.resolve(APP_DIR, 'index.js')],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [APP_DIR, MODULES_DIR],
  },
  module: { rules: loaders },
  node: { fs: 'empty' },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './static/template.html',
      favicon: './static/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
};

module.exports = config;
