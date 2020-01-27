const path = require('path');
const webpack = require('webpack');

module.exports = () => ({
  output: {
    publicPath: '/blockbuster/',
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
  ],
  devtool: 'source-map',
});
