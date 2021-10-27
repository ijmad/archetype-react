const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPath = path.join(__dirname, "..", "public");
const srcPath = path.join(__dirname, "..", "src");

module.exports = {
  context: srcPath,
  entry: "/Root.js",
  output: {
    path: publicPath,
    filename: "static/main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /.js$/,
        include: srcPath,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"),
    }),
  ],
};
