const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      exposes: {
        "./MarketingApp": `./src/bootstrap`,
      },
      shared: PackageJSON.dependencies,
    }),
  ],
  devtool: "inline-source-map",
  optimization: {
    splitChunks: false,
  },
};

module.exports = merge(commonConfig, prodConfig);
