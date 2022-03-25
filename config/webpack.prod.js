const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    // clean build dir
    new CleanWebpackPlugin(),
  ],
};
