"use strict";

var path = require("path");
var webpack = require("webpack");
var srcPath = path.join(__dirname, "src");
var inDevMode = process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development";


module.exports = {
  entry: path.join(srcPath, "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: "shared-components",
    libraryTarget: "var",
  },
  externals: {
    'react': 'react'
  },
  module: {
    loaders: [
      // required for .js and .jsx
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: "babel-loader" },
    ]
  },
  resolve: {
    root: srcPath,
    extensions: ["", ".js", ".jsx", ".styl"],
    modulesDirectories: ["node_modules", "src"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(inDevMode ? "development" : "production")
      },
    })
  ],
  debug: inDevMode
};
