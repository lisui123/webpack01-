const { join } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
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
                test:/\.less$/i,
                use:["style-loader", "css-loader", "less-loader"]
            }
        ]
    }
}