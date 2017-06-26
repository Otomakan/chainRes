var gulp    = require('gulp'),
      gutil    = require('gulp-util'),
      uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');

const babel = require('gulp-babel'),
		browserify = require('gulp-browserify');


gulp.task('js', function () {
    gulp.src('./*.js')
	    
	     .pipe(babel({
	            presets: ['es2015']
	        }))

        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build'))
         .pipe(browserify({
	      insertGlobals : true,
	      require : ['./build/all.js'],
	      debug : !gulp.env.production
	    }));
});

gulp.task('default', function(){
    gulp.run('js'); 
});