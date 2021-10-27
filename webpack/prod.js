const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = require("./paths.js");
const common = require("./common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: paths.dist,
    filename: paths.main,
    publicPath: "/",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: paths.root,
          from: "public",
          globOptions: {
            gitignore: true,
            dot: true,
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
});
