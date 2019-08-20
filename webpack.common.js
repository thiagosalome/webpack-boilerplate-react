// Reference: https://itnext.io/front-end-development-with-javascript-using-reactjs-redux-sass-and-webpack-1a2fdd46daba
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const tagBuildCss = require("./package.json")['tag-build-css'];
const tagBuildSprite = require("./package.json")['tag-build-sprite'];

module.exports = {
  entry: [
    path.resolve(__dirname, './src/index.js'),
    path.resolve(__dirname, './src/index.scss'),
  ],
  plugins : [
    new htmlWebpackPlugin({
      title : "React App",
      template: require('html-webpack-template'),
      bodyHtmlSnippet :'<main class="main" id="app"></main>'
    }),
    new miniCssExtractPlugin({
      filename : `./assets/css/[name].${tagBuildSprite}.${tagBuildCss}.min.css`
    })
  ],
  module: {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      },
      {
        test : /\.(sa|sc|c)ss$/,
        use : [
          miniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  }
}