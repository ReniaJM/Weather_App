var path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "js/out.js",
        path: path.resolve(__dirname, ".")
    },
    watch: true,
    mode : 'production',
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, '.'),
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: [
                                    '> 1%', 'last 2 versions'
                                ]
                            }
                        }]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }
}