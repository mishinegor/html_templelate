var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-cofee');

var jsSources =[
    'components/script/file.js',
    'components/script/file.js',
    'components/script/file.js',
    'components/script/file.js'
];

gulp.task('coffee', function() {
    gulp.src('');
    
});

gulp.task('js', function() {
    gulp.src(jsSources);
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
    
});
