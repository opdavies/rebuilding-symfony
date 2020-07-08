let Encore = require("@symfony/webpack-encore");

Encore.disableSingleRuntimeChunk()
  .setOutputPath("web/build/")
  .setPublicPath("/build")
  .addStyleEntry("app", "./assets/css/tailwind.pcss")
  .enablePostCssLoader();

process.env.NODE_ENV =
  process.env.NODE_ENV || Encore.isProduction() ? "production" : "development";

module.exports = Encore.getWebpackConfig();
