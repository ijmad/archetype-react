const path = require("path");

const here = __dirname;
const root = path.join(here, "..");

module.exports = {
  root,
  public: path.join(root, "public"),
  src: path.join(root, "src"),
  dist: path.join(root, "dist"),
  entry: "/Root.js",
  main: "static/main.js",
};
