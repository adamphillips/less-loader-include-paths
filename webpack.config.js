var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

const extractLess = new ExtractTextPlugin({
    filename: "webpack-bundle.css"
});

console.log(path.resolve('./app/assets/stylesheets'));

module.exports = {
  entry: './app/assets/stylesheets/main.js',
  output: {
    path: __dirname + '/output/',
    filename: "webpack-bundle.js"
  },
  resolve: {
    modules: [
      path.resolve('./app/assets/stylesheets'),
      path.resolve('./vendor/assets/stylesheets')
    ]
  },
  module: {
      rules: [{
          test: /\.less$/,
          use: extractLess.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader", options: {
                    paths: [
                      'app/assets/stylesheets',
                      'vendor/assets/stylesheets'
                    ]
                }
            }]
          })
      }]
  },
  plugins: [
      extractLess
  ]
};