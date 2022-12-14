const path = require("node:path/win32");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    mode:'development',
    devtool: "eval-cheap-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                 test: /\.scss$/,
                 use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    }
}