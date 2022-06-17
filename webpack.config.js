const {join} =require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    mode:'development',
    output:{
        path:join(__dirname, 'lib'),
        filename: "main.js" // 出口文件名
    },
    plugins:[
        new HTMLWebpackPlugin ({
            template:join(__dirname, 'public/index.html'),
            filename: "webpack-demo.js",

        clean: true

        })
    ],
    devServer:{
        open:true,
        port:65527
    }
}