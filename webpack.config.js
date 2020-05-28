const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const config = {
  entry: {
    main: [
      path.join(__dirname + "/public/db.js"),
      path.join(__dirname + "/public/index.js"),
    ],
  },
  output: {
    path: path.join(__dirname + "/public/dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budget App by BS",
      short_name: "Budget Tracker App",
      description: "The app that track your budget",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve("./public/images/895x895.png"),
          sizes: [600], // one sizes
        },
      ],
    }),
  ],
};
module.exports = config;