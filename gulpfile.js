var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var order = require("gulp-order");



gulp.task('default', ['cssMinfy', 'uglify']);
gulp.task('watch', ['cssMinfy', 'uglify']);


gulp.task('watch', function(){
	gulp.watch(['./js/app.js', './js/pies.js', './styles/app.css', './dist/index.html'], ['uglify', 'cssMinfy']);
});

gulp.task('cssMinfy', function(){
  return gulp.src('./styles/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('uglify', function() {
	gulp.src('js/**/*.js')
		.pipe(order([
		    "dependecies/jquery.js",
		    "dependecies/angular.js",
		    "dependecies/angular-animate.min.js",
		    "dependecies/bootstrap.js",
		    "dependecies/jquery.fullPage.js",
		    "dependecies/angular-fullpage.js",
		    "dependecies/ui-bootstrap-tpls.js",
		    "dependecies/ScrollMagic.js",
		    "dependecies/chart.min.js",
		    "dependecies/highcharts.js",
		    "dependecies/chartist.min.js",
		    "dependecies/angular.chartist.min.js",
		    "dependecies/r.js",
		    // "js/pies.js",
		    "app.js"
		]))

		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});
