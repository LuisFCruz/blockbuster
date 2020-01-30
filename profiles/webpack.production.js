const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
  entry: {
    'service-worker': './src/service-worker.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
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
      excludeChunks: ['service-worker'],
    }),
  ],
});
