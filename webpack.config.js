const { dirname } = require("path");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "static/[hash][ext][query]",
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
          { loader: "postcss-loader" },
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
      {
        test: /\.(png|jpg|gif|png|jpeg|svg)$/i,
        // webpack 4.x url-loader file-loader
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       limit: 8192,
        //     },
        //   },
        // ],

        // webpack 5.x asset module
        type: "asset",
        dependency: { not: ["url"] },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "image/[name]-[contenthash:6][ext]",
        },
      },
    ],
  },
};
