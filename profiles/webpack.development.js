const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  output: {
    publicPath: '/blockbuster',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, '../data'),
      path.join(__dirname, '../src/image'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: '"http://localhost:8080"',
      PATH: '"blockbuster"',
    }),
    new CopyWebpackPlugin(['src/service-worker.js']),
  ],
  devtool: 'source-map',
});
