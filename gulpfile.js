var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var ngHtml2Js = require('browserify-ng-html2js');
var eslint = require('gulp-eslint');
var KarmaServer = require('karma').Server;

var config = {
    scripts: './app/**/*.js',
    main: './app/main.js',
    watch: './app/**/*',
    dest: {
        dir: './public/js/',
        main: 'main.js'
    },
    ngHtml2Js: { module: 'templates' },
    babelify: { presets: ['es2015'] },
    connect: {
        root: 'public',
        port: 4000
    },
    karma: {
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }
};

gulp.task('lint', function() {
    return gulp.src([config.scripts])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('browserify', ['lint'], function() {
    return browserify(config.main)
        .transform(ngHtml2Js(config.ngHtml2Js))
        .transform('babelify', config.babelify)
        .bundle()
        .pipe(source(config.dest.main))
        .pipe(gulp.dest(config.dest.dir));
});

gulp.task('connect', ['browserify'], function() {
    connect.server(config.connect);

    gulp.watch(config.watch, ['browserify']);
});

gulp.task('test', function(done) {
    new KarmaServer(config.karma, done).start();
});
