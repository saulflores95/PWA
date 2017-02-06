const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcDir = resolve(__dirname, "src");

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  module:{
    rules:[{
      enforce:'pre',
      test:/\.js$/,
      loader:"standard-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
