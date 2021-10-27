const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPath = path.join(__dirname, "public");
const contextPath = path.join(__dirname, "src");

module.exports = {
  mode: "development",
  devtool: "eval",
  context: contextPath,
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
        include: contextPath,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"),
    }),
  ],
  devServer: {
    hot: true,
    watchFiles: ["src/**"],
  },
};
