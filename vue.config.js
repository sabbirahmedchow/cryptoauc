const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const port = process.env.PORT || 5000;
module.exports = defineConfig({
  transpileDependencies: ["vue"],
  devServer: {
    
    proxy: `http://localhost:${port}`,
   
  },
  lintOnSave: false,
  configureWebpack: {
    module: {
      exprContextCritical: false
    },
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
});



