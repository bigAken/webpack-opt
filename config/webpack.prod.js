const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeWebpackCSSPlugin = require("purgecss-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const path = require("path");
const glob = require("glob");
const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  mode: "production",
  plugins: [
    // clean build dir
    new CleanWebpackPlugin(),
    // css 抽离
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:6].css",
    }),
    // css tree shaking
    new PurgeWebpackCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      safelist: function () {
        return ["body", "html"];
      },
    }),
    // http gzip压缩
    new CompressionWebpackPlugin({
      test: /\.(css|js)/,
      algorithm: "gzip",
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
          priority: 10,
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
        return `runtime.${entrypoint.name}`;
      },
    },
  },
};
