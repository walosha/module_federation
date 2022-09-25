const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": `./src/bootstrap`,
      },
      shared: PackageJSON.dependencies,
    }),
  ],
  devtool: "inline-source-map",
};

module.exports = merge(commonConfig, prodConfig);
