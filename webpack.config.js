const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: "./src/testJsx.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "static/[hash][ext][query]",
  },
  // development mode recommand source-map or cheap-module-source-map
  // product mode recommand false
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        // usage 1
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
        // usage 2
        // loader: 'style-loader',
        // usage 3
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
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb
          },
        },
        generator: {
          filename: "image/[name]-[contenthash:6][ext]",
        },
      },
      {
        test: /\.ttf|eot|gif|woff2?$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name]-[contenthash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    // clean build dir
    new CleanWebpackPlugin(),
    // index.html template in prodcut mode will compress html  template
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    // define global variable
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
  ],
};
