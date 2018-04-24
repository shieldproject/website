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
	.pipe(gulp.dest('../theme/shield/assets/css/'))
	.pipe(gulp.dest('../htdocs/css/'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./src/libs/modernizr/modernizr.js',
		'./src/libs/jquery/jquery.min.js',
		'./src/libs/pace/pace.min.js',
		'./src/libs/slick/slick.min.js',
		'./src/libs/jquery.directional-hover/jquery.directional-hover.min.js',
		'./src/libs/animate/animate-css.js',
		'./src/libs/parallax/parallax.min.js',
		'./src/libs/imagesloaded/imagesloaded.pkgd.min.js',
		'./src/libs/superfish-master/js/superfish.min.js',
		'./src/libs/jquery-ui-1.12.1.custom/jquery-ui.min.js'
		])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../theme/shield/assets/js/'))
		.pipe(gulp.dest('../htdocs/js/'));
});

gulp.task('default', ['styles', 'scripts']);
