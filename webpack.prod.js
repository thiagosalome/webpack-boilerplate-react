const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackShellPlugin = require("webpack-shell-plugin");
// const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const tagBuildCss = require("./package.json")['tag-build-css'];
const tagBuildJS = require("./package.json")['tag-build-sprite'];

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // optimization: {
  //   minimizer: [
  //     new uglifyjsWebpackPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true
  //     }),
  //   ]
  // },
  plugins: [
    new cleanWebpackPlugin(["dist"]),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/images/"),
        to: path.resolve(__dirname, 'dist/assets/images'),
        ignore: ['svgs/*'],
        cache: true
      }
    ]),
    new webpackShellPlugin({
      onBuildEnd: [
        'echo "Generate Sprite..."',
        'node ./utils/svg-sprite/index.js',
        'echo "Replacing URL CSS..."',
        'node ./bin/replace-url',
      ]
    })
  ],
  output: {
    filename : `assets/js/[name].${tagBuildJS}.min.js`,
    path: path.resolve(__dirname, 'dist')
  }
});