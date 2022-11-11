const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    }
}