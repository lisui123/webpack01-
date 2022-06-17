const { join } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: join(__dirname, 'lib'),
        filename: "webpack-demo.js",
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
        })
    ],
    devServer: {
        open: true,
        port: 65527
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(gif|png)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'imges/[hash:6][ext]'
                }
                // type:'asset/inline'

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                // [hash]随意生成字符  ， [ext]原文件后缀名
                generator: {
                    filename: 'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.js$/i,
                use: ["babel-loader"]

            }
        ]
    },
    module: {
        rules: [

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}