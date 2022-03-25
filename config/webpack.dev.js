const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  mode: "development",
  // development mode recommand source-map or cheap-module-source-map
  // product mode recommand false
  devtool: "source-map",
  devServer: {
    hot: false,
    // devServer Enable gzip compression for everything served
    compress: true,
  },
  plugins:[
        // react HMR
        new ReactRefreshWebpackPlugin(),
        // html HMR
        new webpack.HotModuleReplacementPlugin(),
  ]
};
