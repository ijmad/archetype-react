const { merge } = require("webpack-merge");

const paths = require("./paths.js");
const common = require("./common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: paths.public,
  },
});
