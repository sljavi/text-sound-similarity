// Karma configuration
// Generated on Sat Jun 10 2017 15:26:52 GMT-0300 (ART)
// https://cafedev.org/article/2016/12/testing-with-wepack-2-inject-loader-karma-mocha-chai-and-sinon/

module.exports = function(config) {
  let reporters = ['nyan', 'coverage'];
  const coverageReporters = [{
    type: 'text-summary'
  }, {
    type: 'html',
    dir: 'coverage',
    subdir: '.'
  }];
  let browsers = ['Chrome'];

  if (process.env.TRAVIS) {
    console.log('On Travis sending coveralls');
    coverageReporters.push({
      type: 'lcov',
      dir: 'coverage'
    });
    reporters = ['mocha', 'coverage', 'coveralls'];
    browsers = ['Chrome_travis_ci'];
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'tests/**/*.js': ['webpack']
    },
    // webpack configuration
    webpack: {
      module: {
        rules: [{
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
        },
        {
          test: /\.js?$/,
          include: /src/,
          exclude: /(node_modules|bower_components|spec)/,
          loader: 'babel-istanbul-loader',
          query: {
            cacheDirectory: true
          }
        }
      ]}
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: reporters,
    coverageReporter: {
      reporters: coverageReporters
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: browsers,
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      captureConsole: false
    }
  });
};
