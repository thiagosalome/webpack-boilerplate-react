const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: 'development',
  devtool : "inline-source-map", // Choose a style of source mapping
  devServer : {
    contentBase : "./src",
    port : 3000,
    https : false,
    open : true,
    hot: true
  }
});