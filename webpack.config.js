//thanks to -> https://webpack.js.org/guides/author-libraries/

const path = require('path');

module.exports = {
  entry: {
    script: path.resolve(__dirname, './src/index.js')
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
    }]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'textSoundSimilarity',
    libraryTarget: 'umd'
  },

  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      __dirname,
      path.resolve(__dirname, './node_modules')
    ]
  }
};
