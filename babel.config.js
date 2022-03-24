module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // polyfill usage 1
        // This option configures how @babel/preset-env handles polyfills.
        // "usage" | "entry" | false, defaults to false
        useBuiltIns: "usage",
        // It is recommended to specify the minor version otherwise "3" will be interpreted as "3.0" which may not include polyfills for the latest features.
        corejs: "3.21",
      },
    ],
  ],
  plugins: [
    // polyfill usage 2
    // @babel/plugin-transform-runtime @babel/runtime
    // https://www.babeljs.cn/docs/babel-plugin-transform-runtime
    // [
    //   "@babel/plugin-transform-runtime",
    //   {
    //     corejs: "3",
    //   },
    // ],
  ],
};
