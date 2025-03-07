const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  watch: true,
  devtool: "inline-cheap-source-map",
  watchOptions: {
    ignored: ["node_modules/**"],
  }
});