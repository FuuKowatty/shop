const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
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
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                      options: {
                        mozjpeg: {
                          progressive: true,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4
                        },
                        // the webp option will enable WEBP
                        webp: {
                          quality: 75
                        }
                      }
                    },
                  },
                ],
            }
        ]
    }
}