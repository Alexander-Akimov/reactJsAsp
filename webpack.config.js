const path = require('path');

const APP_DIR = path.resolve(__dirname, 'ClientApp');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
    mode: 'none',
    entry: APP_DIR + '/Client.js',
    devServer: {
        contentBase: PUBLIC_DIR,
        port: 9000,
        open: true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
        //publicPath: PUBLIC_DIR
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'ClientApp'),
                exclude: /node_modules/,
                options: {
                    "presets": [
                        "react",
                        "stage-2", // features wich include promises
                        //"react-hmre",
                        ["env", { targets: { browsers : ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};
module.exports = config;