/* Contendeor de nuestras tareas, aqui se realizaran las funciones y se conectara 
al package.json. Entonces gulp en general es para optimizar tareas */

const {src, dest, watch, parallel} = require("gulp"); //require importar o extraer la dependencia de gulp
/* Src --> Identificar un archivo
 dest --> almacenar el archivo */

 //CSS
const sass = require('gulp-sass')(require('sass')); // sass en el const, es la funcion a llamar cuando lo compilemos ya que estamos importando el script del package.json
const plumber = require('gulp-plumber'); //Importamos plumber
const autoprefixer = require('autoprefixer'); //Asegura que funcionara en el navegador que tu le digas
const cssnano = require('cssnano'); //Comprime nuestro codigo CSS
const postcss = require('gulp-postcss'); //Nos permite transformmar los 2 anteriores mediante este medio
/* Este 3 ultimos lineas de codigo nos sirvira para mejorar el redimiento del codigo o la pagina web */
const sourcemaps = require('gulp-sourcemaps');

// Imagenes 
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp'); 
const avif = require('gulp-avif');

//JavaScript
const terser = require('gulp-terser-js');

function versionWebp(done){

  const opciones = {
    quality:50
  };

  src('src/img/**/*.{png,jpg}')
  .pipe(webp(opciones))
  .pipe(dest('build/img'))

  done();
}

function versionAvif(done){

  const opciones = {
    quality:50
  };

  src('src/img/**/*.{png,jpg}')
  .pipe(avif(opciones))
  .pipe(dest('build/img'))

  done();
}

function imagenes(done){

  const opciones = {
    optimizationLevel: 3
  }

  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin()))
    .pipe(dest('build/img')) 
  done();
}

//CSS
function css(done){
  //Indentificar el archivo SASS
  src('src/scss/**/*.scss')
    //Compilar
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write('.'))
    //Almacenarla en el disco duro
    .pipe(dest("build/css"))

  done(); // Callback que avisa a gulp cuando llegamos al final. done() dice que finaliza la funcion de arriba
}


function javascript(done){

  src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))

  done();
}


//Compilar con dev en npm
function dev(done){
  watch('src/scss/**/*', css); 
  watch('src/js/**/*', javascript); /* Mandamos a llamar la funcion javascript */ 

  done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,versionWebp,versionAvif, javascript, dev); //Compilan paralelamente





//**EJEMPLO DE NPM Y NPX PARA EJECUTAR LOS SCRIPTS */

/* function tarea(done){
  console.log("mi primera tarea");

  done();
} */

/* exports.primerTarea = tarea; */ /* CODIGO NODE.JS. Cuando mande llamar "primeraTarea, se ejecuta "tarea"*/
/* exports.tarea = tarea; */