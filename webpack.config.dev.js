const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.global\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: { sourceMap: true },
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /^((?!\.global).)*\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|svg|webp|ttf|otf)$/,
        use: { loader: 'url-loader', options: { limit: 25000 } },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      template: './static/template.html',
      favicon: './static/favicon.ico',
      files: {
        js: ['bundle.js'],
        css: ['style.css'],
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    noInfo: true,
    inline: true,
    host: '127.0.0.1',
    port: '3000',
  },
};
