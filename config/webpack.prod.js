const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    // clean build dir
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:6].css",
    }),
  ],
  externals: {
    lodash: "_",
  },
  optimization: {
    // tree shaking production模式下默认开启
    usedExports: true,
    // named: 使用包所在目录作为name(在开发环境推荐)
    // deterministic: 生成id, 针对相同文件生成的id是不变
    chunkIds: "named",
    // [ˈmɪnɪmaɪz]
    minimize: true,
    minimizer: [
      // js 压缩
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          compress: true,
        },
      }),
      // css 压缩
      new CssMinimizerPlugin(),
    ],

    splitChunks: {
      // 自动匹配all， 异步引入async， 同步引入nitial
      chunks: "all",
      // Minimum size, in bytes, for a chunk to be generated.
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        "react-dom": {
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          filename: "js/[name].[contenthash:6].chunk.js",
          priority: 0,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    // 各个模块之间的引用和加载的逻辑相关的代码
    runtimeChunk: {
      name: function (entrypoint) {
        return `inlineSource-${entrypoint.name}`;
      },
    },
  },
};
