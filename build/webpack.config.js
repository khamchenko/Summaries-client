const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
      root: path.resolve(__dirname, '..'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../bin/index.html'),
      inject: false,
    }),
    new webpack.NamedModulesPlugin(),		
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: 'image-webpack-loader',
      },
      {		
         test: /\.js$/,		
         exclude: /node_modules/,		
         use: ['babel-loader', 'eslint-loader'],		
      },
    ],
  },
};
