const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  mode: "development",


module: {
  rules:  [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
  ],
},
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};


