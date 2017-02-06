const { resolve } = require("path");

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
  }
}
