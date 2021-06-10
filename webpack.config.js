var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
       
    },

    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1234,
        writeToDisk: true,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },

              {
                test: /\.(sa|sc|c)ss$/,
                  use: [
                    {
                      loader: MiniCssExtractPlugin.loader, 
                      options: {
                        publicPath: '../' 
                      }
                    },
                    'css-loader',
                    'sass-loader'
                  ]
              },

              {
                test: /\.(png|jpg|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outpuPath: "images",
                        esModule: false,
                    }
                  },
                ],
              },

              {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outpuPath: "fonts",
                        esModule: false,
                    }
                  },
                ],
              },

              


        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
          filename: "tour-journey.html",
          template: "./src/tour-journey.html",
        }),

        new HtmlWebpackPlugin({
          filename: "login.html",
          template: "./src/login.html",
        }),

        new HtmlWebpackPlugin({
          filename: "egypt-tour.html",
          template: "./src/egypt-tour.html",
        }),

        new HtmlWebpackPlugin({
          filename: "istanbul-tour.html",
          template: "./src/istanbul-tour.html",
        }),

        new HtmlWebpackPlugin({
          filename: "signup.html",
          template: "./src/signup.html",
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new OptimizeCssAssetsPlugin({}),
    ],

};