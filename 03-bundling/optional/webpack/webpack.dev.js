const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const common = require("./webpack.common.js");

const rulesForCSS = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
    },
  ],
};

rules = [rulesForCSS];

module.exports = merge(common, {
  mode: "development",
  module: {
    rules,
  },
  devtool: "eval-source-map",
  devServer: {
    port: "8000",
  },
  stats: "errors-only",
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
