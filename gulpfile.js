const exec = require('child_process').exec;
const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const env = process.env.NODE_ENV || 'development';

gulp.task('html', () => {
    if (env === 'development') {
        return  gulp.src('src/index.html')
                    .pipe(gulp.dest('app/'))
                    .pipe(livereload());
    } else {
        return  gulp.src('src/production/index.html')
                    .pipe(gulp.dest('app/'));
    }
});

gulp.task('css', () => {
    var pipes = gulp.src('src/**/*.css')
                    .pipe(css())
                    .pipe(gulp.dest('app/'));
    if (env === 'development') {
        pipes.pipe(livereload());
    }                    
    return pipes;  
});

gulp.task('js', () => {
    var pipes = gulp.src(['main.js', 'src/**/*.js'])
                    .pipe(babel())
                    .pipe(gulp.dest('app/'));
    if (env === 'development') {
        pipes.pipe(livereload());
    }                    
    return pipes; 
});

gulp.task('images', () => {
    var pipes = gulp.src('src/assets/*')
                    .pipe(gulp.dest('app/assets'));
    if (env === 'development') {
        pipes.pipe(livereload());
    }                    
    return pipes;
})

gulp.task('watch', async function() {
  livereload.listen();
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/**/*.css', gulp.series('css'));
  gulp.watch('src/**/*.js', gulp.series('js'));
  gulp.watch('src/assets/**/*', gulp.series('images'));
});

gulp.task('build', gulp.series('html', 'css', 'js', 'images'));

gulp.task('start', gulp.series('build', () => {
    return exec(
        __dirname+'/node_modules/.bin/electron .'
    ).on('close', () => process.exit());
}));

gulp.task('default', gulp.parallel('start', 'watch'));

gulp.task('release', gulp.series('build', () => {
    return exec(
        __dirname+'/node_modules/.bin/electron-builder .'
    ).on('close', () => process.exit());
}));

gulp.task('make-icon', () => {
    return exec(
         __dirname+'/node_modules/.bin/electron-icon-maker --input='+__dirname+'/assets/logo.png --output=.'
    ).on('close', () => process.exit());
});