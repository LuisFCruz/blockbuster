const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      BASE_URL: '"https://luisfcruz.github.io"',
      PATH: '"blockbuster"',
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '80-100',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Blockbuster',
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
});
