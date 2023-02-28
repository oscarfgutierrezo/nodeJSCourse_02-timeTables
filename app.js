const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs')

// ==========> Limpiar Consola <==========

// Limpiar consola de windows
console.clear();
// Limpiar consola git bash y visual studio code
console.log('\033[2J');


// ==========> Funcionalidad <==========

createFile( argv.b, argv.m, argv.l )
  .then ( fileName => console.log( `${fileName} created` ) )
  .catch ( err => console.log( err ))
