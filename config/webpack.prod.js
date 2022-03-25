const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    // clean build dir
    new CleanWebpackPlugin(),

  ],
  optimization: {
    // named: 使用包所在目录作为name(在开发环境推荐)
    // deterministic: 生成id, 针对相同文件生成的id是不变
    chunkIds: "named",
    minimize: true,
    minimizer: [new TerserPlugin()],

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
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
        },
        "react-dom": {
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
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
    runtimeChunk: {
      name: function (entrypoint) {
        return `inlineSource-${entrypoint.name}`;
      },
    },
  },
};
