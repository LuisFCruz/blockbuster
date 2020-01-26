const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, '../data'),
      path.join(__dirname, '../src/image'),
    ],
  },
  plugins: [new CopyWebpackPlugin(['src/service-worker.js'])],
  devtool: 'source-map',
});
