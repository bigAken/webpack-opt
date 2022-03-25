const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pathResolve = require("./paths");

const common = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "js/[name].[contenthash:6].bundle.js",
    // build file output dir ,The output directory as an absolute path.
    path: pathResolve("./build"),
    assetModuleFilename: "static/[contenthash][ext][query]",
    chunkFilename: "js/[name].[contenthash:6].chunk.js",
    // <script defer src="publicPath+'/index.bundle.js'"></script>
    // publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.jsx?|tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        // usage 1
        use: [
          {
            loader:
              process.env.NODE_ENV === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // 允许你配置在 css-loader 之前有多少 loader 应用于 @import 资源
              importLoaders: 1,
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]",
              },
            },
          },
          { loader: "postcss-loader" },
        ],
        // usage 2
        // loader: 'style-loader',
        // usage 3
        // loader: ["style-loader", "css-loader"]
        
        // css tree shaking
        sideEffects: true,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:
              process.env.NODE_ENV === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
        // css tree shaking
        sideEffects: true,
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
    // index.html template in prodcut mode will compress html  template
    new HtmlWebpackPlugin({
      title: "webpack",
      env: process.env.NODE_ENV,
      template: pathResolve("./public/index.html"),
      favicon: pathResolve("./public/favicon.ico"),
    }),
    // define global variable
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
  ],
  // These options change how modules are resolved
  resolve: {
    alias: {
      "@": pathResolve("./src"),
      "@asset": pathResolve("./src/asset"),
    },
    // Attempt to resolve these extensions in order
    extensions: [".js", ".json", ".tsx", "ts"],
  },
};

module.exports = (env) => {
  console.log("env", env);
  const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
  return merge(common, config);
};
