
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }              
            },{
                test: /\.css/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        })
    ] 
}
