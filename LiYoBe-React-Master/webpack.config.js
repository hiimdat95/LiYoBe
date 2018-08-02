var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/main.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, 
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
    ]
}, 
  devServer: {
    contentBase: './client',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html",
      inject: true
    })
  ]
};

module.exports = config;