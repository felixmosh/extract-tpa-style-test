const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ExtractTPAStyles = require('./extract-tpa-style-webpack-plugin/src/index');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['env']
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({filename: '[name].[chunkhash].css'}),
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'https://static.parastorage.com/services/js-sdk/1.95.0/js/wix-private.min.js'
      ],
      append: false,
      publicPath: ''
    }),
    new ExtractTPAStyles()
  ],
  entry: './src/index.js',

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: false,
  mode: 'development'
};
