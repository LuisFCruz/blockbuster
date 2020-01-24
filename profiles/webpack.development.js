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
  plugins: [new CopyWebpackPlugin(['src/service-worker.js'])],
  devtool: 'source-map',
});
