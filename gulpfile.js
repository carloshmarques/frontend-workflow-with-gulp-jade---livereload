var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')(require('sass')),
    connect = require('gulp-connect'), 
    gulpif = require('gulp-if'),
    open = require('gulp-open');

var env = process.env.NODE_ENV || 'development';
var outputDir ='builds/development';
var sourceDir = './';

/*
 * by default gulp task are set to a development mode as seen on the line var env = process.env.NODE_ENV || 'development';
 * to run tasks in a production mode, type in terminal NODE_ENV=production and task ex: NODE_ENV=production gulp js
 *
 */


//jade task
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())      
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
});

// js task
gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(browserify({debug: env === 'development' }))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
});

// sass task
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
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());

});


// watch task

gulp.task('watch', function(){            
    var options = {
        uri: 'http://localhost:8080',
        //app : 'chrome' 
    /*
     To use the chrome browser or another browser,
     uncomment the above line and replace the executable name with the browser of your choice,
     for example: chrome.exe('chrome'). 
     If the line above is commented out, gulp will open the default browser.
     */

      }
        connect.server({
            root: outputDir,
            livereload: true
        });
    
        gulp
        .src(outputDir +'/index.html')
        .pipe(open(options))

        gulp.watch('src/templates/**/*.jade', gulp.series('jade')),
        gulp.watch('src/js/**/*.js', gulp.series('js')),
        gulp.watch('src/sass/**/*.scss', gulp.series('sass'))   
});

// WEB SERVER
gulp.task('connect', function(){
    var options = {
        uri: 'http://localhost:8080',
        //app : 'chrome' 
    /*
     To use the chrome browser or another browser,
     uncomment the above line and replace the executable name with the browser of your choice,
     for example: chrome.exe('chrome'). 
     If the line above is commented out, gulp will open the default browser.
     */
        
      }
        connect.server({
            root: outputDir,
            livereload: true
        });
    
        gulp
        .src(outputDir +'/index.html')
        .pipe(open(options))
});

gulp.task('default', gulp.series(['js', 'sass','jade', 'watch' ] ));
