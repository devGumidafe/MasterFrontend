const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// RULES //
const rulesForJavaScript = {
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
};

const rulesForHtml = {
  test: /\.html$/i,
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: true,
      },
    },
  ],
};

const rulesForImages = {
  test: /\.(png|jpe?g|gif|svg|webp)$/i,
  type: "asset/resource",
};

const rules = [rulesForJavaScript, rulesForImages, rulesForHtml];

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["./index.jsx"],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      scriptLoading: "blocking",
    }),
    new CleanWebpackPlugin(),
  ],
};
