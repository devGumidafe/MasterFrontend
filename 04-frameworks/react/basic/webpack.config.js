const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

// RULES //
const rulesForHTML = {
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

const rulesForTSX = {
  test: /\.tsx?$/i,
  exclude: /node_modules/,
  loader: "babel-loader",
};

const rulesForCSS = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};

const rulesForImages = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
};

const rules = [rulesForHTML, rulesForTSX, rulesForCSS, rulesForImages];

module.exports = {
  context: path.join(__dirname, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: ["./index.tsx"],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html",
      hash: true, //Name of template in ./src
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
    // new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    port: 3000,
    open: true,
  },
};
