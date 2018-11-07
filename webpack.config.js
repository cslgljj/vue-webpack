const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(png|jpeg|jpg|gif)/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024
                }
            }
        }, {
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    mode: 'development',
    devServer: {
        open: true,
        port: 9999,
        hot: true
    }
}