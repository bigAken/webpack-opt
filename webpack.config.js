const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 写法一
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        // 写法二
        // loader: 'style-loader',
        // 写法三
        // loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};
