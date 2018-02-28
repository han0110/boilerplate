/*  eslint-disable */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.jsx?$/,
    loaders: ['babel-loader'],
    include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
  },
  {
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'sass-loader',
      }],
    }),
  },
  {
    test: /\.otf/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[hash].[ext]"
  },
  {
    test: /\.jpg/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=image/jpg&name=assets/images/[hash].[ext]"
  },
  {
    test: /\.png/,
    exclude: /node_modules/,
    loader: "url-loader?limit=10000&mimetype=image/png&name=assets/images/[hash].[ext]"
  },
];
