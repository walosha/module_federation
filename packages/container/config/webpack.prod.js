const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");

const DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "container/latest",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${DOMAIN}/marketing/remoteEntry.js`,
      },
      shared: PackageJSON.dependencies,
    }),
  ],
  devtool: "inline-source-map",
};

module.exports = merge(commonConfig, prodConfig);
