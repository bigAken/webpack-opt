const path = require("path");

const appDir = process.cwd();
const pathResolve = (pathStr) => path.resolve(appDir, pathStr);

module.exports = pathResolve;
