const path = require('path');

module.exports = {
    entry: {
        script: path.resolve(__dirname, './src/index.js')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        pathinfo: true
    },

    resolve: {
        extensions: ['.js'],
        modules: [
            __dirname,
            path.resolve(__dirname, './node_modules')
        ]
    }

};
