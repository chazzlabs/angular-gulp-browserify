var ngHtml2Js = require('browserify-ng-html2js');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'browserify'],

        reporters: ['mocha'],

        files: [
            'app/main.js',

            'node_modules/angular-mocks/angular-mocks.js',

            'test/**/*.spec.js'
        ],

        preprocessors: {
            'app/**/*.js': ['browserify'],
            'test/**/*.spec.js': ['browserify']
        },

        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: [
                ['babelify', { presets: ['es2015'] }],
                ngHtml2Js({ module: 'templates' })
            ]
        },
        
        browsers: ['PhantomJS']
    });
};
