const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  context: paths.src,
  entry: paths.entry,
  output: {
    path: paths.public,
    filename: paths.main,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /.js$/,
        include: paths.src,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.public + "/index.html",
    }),
  ],
};
