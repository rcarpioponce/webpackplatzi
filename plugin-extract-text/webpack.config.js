const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                //test: que tipo de archivo quiero reconocer,
                //use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader'
                    use: "css-loader"
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css")
    ]
}