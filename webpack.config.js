const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TPAStylesWebpackPlugin = require('tpa-style-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
              sourceMap: true,
              modules: true
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
        'https://static.parastorage.com/services/js-sdk/1.95.0/js/wix-private.min.js',
        'https://static.parastorage.com/unpkg/react@16.3.0/umd/react.production.min.js',
        'https://static.parastorage.com/unpkg/react-dom@16.3.0/umd/react-dom.production.min.js'
      ],
      append: false,
      publicPath: ''
    }),
    new TPAStylesWebpackPlugin()
  ],
  entry: './src/index.jsx',
  externals: {
    'react-dom': 'ReactDOM',
    'react': 'React'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  mode: 'development'
};
