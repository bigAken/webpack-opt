const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
