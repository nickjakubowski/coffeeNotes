var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './app/App.js',
  output: {
    path: "./public",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}