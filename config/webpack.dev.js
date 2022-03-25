const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  mode: "development",
  // development mode recommand source-map or cheap-module-source-map
  // product mode recommand false
  devtool: "source-map",
  devServer: {
    // 如果你使用的是 webpack-dev-server，那么你无需使用 HotModuleReplacementPlugin 插件。 
    // webpack-dev-server 使用 hot 选项来控制启用/禁用 HMR
    hot: true,
    // devServer Enable gzip compression for everything served
    compress: true,
  },
  plugins:[
        // react HMR
        new ReactRefreshWebpackPlugin(),
        // html HMR
        // new webpack.HotModuleReplacementPlugin(),
  ]
};
