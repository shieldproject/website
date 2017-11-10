var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs');

gulp.task('styles', function () {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(minifycss())
	.pipe(gulp.dest('theme/shield/static/css/'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./src/libs/modernizr/modernizr.js',
		'./src/libs/jquery/jquery.min.js',
		'./src/libs/pace/pace.min.js',
		'./src/libs/slick/slick.min.js',
		'./src/libs/jquery.directional-hover/jquery.directional-hover.min.js',
		'./src/libs/waypoints/waypoints.min.js',
		'./src/libs/animnum/animnum.js',
		'./src/libs/magnific-popup/jquery.magnific-popup.min.js',
		'./src/libs/animate/animate-css.js',
		'./src/libs/parallax/parallax.min.js',
		'./src/libs/imagesloaded/imagesloaded.pkgd.min.js',
		'./src/libs/isotope/isotope.pkgd.min.js',
		'./src/libs/textillate/jquery.fittext.js',
		'./src/libs/textillate/jquery.lettering.js',
		'./src/libs/textillate/jquery.textillate.js',
		'./src/libs/superfish-master/js/superfish.min.js',
		'./src/libs/selectize/dist/js/standalone/selectize.js',
		'./src/libs/ytp-player/jquery.mb.YTPlayer.min.js',
		'./src/libs/jquery-ui-1.12.1.custom/jquery-ui.min.js',
		'./src/libs/countdown/jquery.countdown.min.js',
		'./src/libs/googlemaps/gmap3.min.js',
		'./src/libs/canvas-bg/particles.min.js',
		'./src/libs/canvas-bg/demo-2.js'
		])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./themes/shield/static/js/'));
});

gulp.task('watch', function () {
	gulp.watch('src/sass/**/**/*.sass', ['styles']);
	gulp.watch('src/libs/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
