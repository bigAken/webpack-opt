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
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              // 允许你配置在 css-loader 之前有多少 loader 应用于 @import 资源
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
        // 写法二
        // loader: 'style-loader',
        // 写法三
        // loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
};
