var path = require("path");
var webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  entry: {
    main: './app/main.js'
  },
  output: {
    path: path.join(__dirname, "./public/javascripts/"),
    filename: "[name].min.js",
    chunkFilename: "[id].js"
  },
  module: {
    loaders: [
    { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    // { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};