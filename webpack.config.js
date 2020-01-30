const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./profiles/webpack.${env.mode}.js`)(env);

module.exports = ({ mode }) =>
  webpackMerge(
    {
      mode,
      entry: {
        main: './src/app.js',
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/blockbuster/',
      },
      plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: 'Blockbuster',
          filename: 'index.html',
          template: './src/index.html',
        }),
        new CopyWebpackPlugin([
          { from: 'src/images', to: 'images/' },
          'src/manifest.json',
          'data',
        ]),
      ],
    },
    modeConfig({ mode })
  );
