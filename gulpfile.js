var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')(require('sass')),
    connect = require('gulp-connect'),
  
    gulpif = require('gulp-if');


var env = process.env.NODE_ENV || 'development';
var outputDir ='builds/development';

/*
 * by default gulp task are set to a development mode as seen on the line var env = process.env.NODE_ENV || 'development';
 * to run tasks in a production mode, type in terminal NODE_ENV=production and task ex: NODE_ENV= production gulp js
 *
 */

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir));
});

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(browserify({debug: env === 'development' }))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + '/js'));
});

gulp.task('sass', function() {
    var config = {};
    if (env === 'development'){
        config.sourceComments = 'map';
    }
    if (env === 'production'){
        config.outputStyle = 'compressed';
    }
    return gulp.src('src/sass/main.scss')
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir + '/css'));

});
gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', gulp.series('jade'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});


gulp.task('connect', function() {
    (connect.server)
    livereload: true;
    root: ['outputDir'];
    browser: {'Google Chrome'};
  
}); 

//exports.default = defaultTask

gulp.task('default', gulp.series(['js', 'jade', 'sass', 'watch', 'connect' ] ));
