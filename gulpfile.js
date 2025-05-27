import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import { src, dest, watch} from 'gulp'

const sass = gulpSass(dartSass)

// done() : Finaliza la función
// export : permite ejecutar las funciones del gulpfile

export function css( done ){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: true}) )
    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
}