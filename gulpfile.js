// @ts-nocheck
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const svgSprite = require('gulp-svg-sprite');
const webp = require('gulp-webp');
const imagecomp = require('compress-images');



gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/icons/**/*.svg").on('all', gulp.parallel('sprite'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('webp'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));

});

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('sprite', function() {
    return gulp.src("src/icons/**/*.svg")
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('webp', function() {
    return gulp.src("src/img/**/*")
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'sprite', 'webp', 'images'));