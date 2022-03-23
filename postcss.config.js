module.exports = (api) => {
  return {
    // not use 'autoprefixer',because'postcss-preset-env' includes 'autoprefixer'
    plugins: ["postcss-preset-env"],
  };
};
