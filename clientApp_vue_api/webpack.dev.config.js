const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const TerserPlugin = require('terser-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//this doesn't work with server side generated html
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader")
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";
module.exports = {
    // Tells Webpack which built-in optimizations to use If you leave this out, Webpack will default to 'production'
    //mode: devMode ? "development" : "production",
    mode: "development",
    devtool: 'inline-source-map',
    // Webpack needs to know where to start the bundling process,
    entry: {
        main: ["./ClientApp/main.js"]
    },
    // This is where we define the path where Webpack will place a bundled JS file. Webpack needs to produce this file,
    output: {
        //specify the output path relative to the webpack config file
        path: path.resolve(__dirname, "./wwwroot"),
        //specify the public path relative to the output path
        publicPath: "wwwroot/",
        // The name of the output bundle. Path is also relative to the output path, so './wwwroot/dist'
        filename: "[name]-bundle.js"
    },
    //optimization: {
    //    splitChunks: {
    //        chunks: 'all',
    //        minSize: 10000,
    //        automaticNameDelimiter: '_'
    //    }
    //},
    resolve: {
        alias: {
            //allows source files to use alias instead of relative path name
            //'components': path.resolve(__dirname, './ClientApp/components'),
            //$ indicates exact match 
            vue$: "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            // Indicates where the images are stored and will use
                            // this path when generating the CSS files.
                            // Example, in site.scss I have
                            // url('../wwwroot/images/pattern.png') and when generating
                            // the CSS file, file-loader will output as
                            // url(../images/pattern.png), which is relative
                            // to '/css/site.css'
                            publicPath: "./",
                            // When this option is 'true', the loader will emit the
                            // image to output.path
                            emitFile: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // let's not minify in dev mode
        //new TerserPlugin(),
        // Configuration options for MiniCssExtractPlugin. Here I'm only
        // indicating what the CSS output file name should be and
        // the location
        new MiniCssExtractPlugin({
            filename: "[name]-style-bundle.css"
        }),
        new RemovePlugin({
            before: {
                root: './wwwroot',
                exclude: [
                    './img'
                ]
            }
        })
        //new CleanWebpackPlugin()
    ]
}