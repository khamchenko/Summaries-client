const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(process.env.NODE_PATH);
module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([ path.resolve(__dirname, '../dist') ], {
      root: process.env.NODE_PATH,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../bin/index.html'),
      inject: false,
    }),
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
        use: 'babel-loader',
      },
    ],
  },
};
