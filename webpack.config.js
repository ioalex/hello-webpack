const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js", // the starting point for our program
  output: {
    path: path.resolve(__dirname, "public"), // the absolute path for the directory where we want the output to be placed
    filename: "bundle.js", // the name of the file that will contain our output
  },
};
