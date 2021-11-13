const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesForJavaScript = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const rulesForTypeScript = {
  test: /\.tsx?$/i,
  use: "ts-loader",
  exclude: /node_modules/,
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

const rulesForCss = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

const rulesForSass = {
  test: /\.scss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        implementation: require("sass"),
      },
    },
  ],
};

const rulesForImages = {
  test: /\.(png|jpg)$/i,
  type: "asset/resource",
};

const rules = [
  rulesForJavaScript,
  rulesForTypeScript,
  rulesForCss,
  rulesForSass,
  rulesForHtml,
  rulesForImages,
];

module.exports = {
  entry: ["./src/index.js"],
  module: { rules },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      hash: true,
    }),
    new CleanWebpackPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new MiniCssExtractPlugin(),
  ],
};
