const {join} =require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    output:{
        path:join(__dirname, 'lib'),
        filename:"webpack-demo.js",
        clean:true
    },
    plugins:[
        new HTMLWebpackPlugin ({
            template:join(__dirname, 'public/index.html'),
        })
    ]
}