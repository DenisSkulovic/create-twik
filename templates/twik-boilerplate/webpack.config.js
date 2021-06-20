const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "final.js",
    path: path.resolve(__dirname, "final"),
  },
};
