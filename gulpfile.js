const { series, parallel, watch, src, dest} = require('gulp');

const htmlmin = require('gulp-htmlmin');
const del = require('del');
const uglify = require('gulp-uglify');
//const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const ts = require('gulp-typescript');
const gulp = require("gulp");
const tsProject = ts.createProject('tsconfig.json');

gulp.task("default", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

function minifyHtml() {
    return src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true, allowEmpty: true }))
        .pipe(dest('build'));
}

function clean(cb) {
    del('./build/');
    cb();
}

function step() {
    return series(clean, minifyHtml, uglifyJS, cssMin, autoPrefix, cssPurge);
}

function uglifyJS() {
    return src('src/**/.js')
        .pipe(uglify())
        .pipe(dest('build'));
}

function cssMin(){
    return src('src//*.css')
        .pipe(minifyCSS())
        //.pipe(rename({suffix: '.min'}))
        .pipe(dest('build'));
}

function autoPrefix(){
    return src('src//.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('build'));
}

function cssPurge(){
    return src('src/**/.css')
        .pipe(purgecss({
            content: ['src/*/.html']
        }))
        .pipe(dest('build'));
}


exports.step = series(clean, minifyHtml, uglifyJS, cssMin, autoPrefix, cssPurge);