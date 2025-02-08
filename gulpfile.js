const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

async function comprimeImagens() {
    const { default: imagemin } = await import('gulp-imagemin');
    console.log('📸 Iniciando compressão de imagens...');
    return gulp.src('./source/images/*.{png,jpg,jpeg,gif,svg}', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
        .on('end', () => console.log('✅ Imagens comprimidas com sucesso!'));
}

function comprimeJavaScript() {
    console.log('📜 Iniciando minificação de JS...');
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
        .on('end', () => console.log('✅ JS minificado e ofuscado!'));
}

function compilaSass() {
    console.log('🎨 Compilando SASS...');
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
        .on('end', () => console.log('✅ SASS compilado com sucesso!'));
}

gulp.task('sass', compilaSass);
gulp.task('js', comprimeJavaScript);
gulp.task('images', comprimeImagens);

gulp.task('watch', function () {
    console.log('👀 Observando arquivos...');
    gulp.watch('./source/styles/*.scss', gulp.series('sass'));
    gulp.watch('./source/scripts/*.js', gulp.series('js'));
    gulp.watch('./source/images/*', gulp.series('images'));
});

gulp.task('default', gulp.series('sass', 'js', 'images', 'watch'));
