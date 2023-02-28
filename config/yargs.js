// ==========> Manejar los argumentos recibidos a través de la consola <==========

const argv = require('yargs')
  // Configuración de los argumentos recibidos por consola
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number of the time table'
  })
  .option('m', {
    alias: 'max',
    type: 'number',
    default: 10,
    describe: 'Set the maximum number to multiply'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Display time table in the console'
  })
  // Validación de los argumentos recibidos por consola
  .check( (argv, options) => {
    if( isNaN( argv.b ) || argv.b <= 0 ){
      throw 'The base must be a number greater than zero'
    }
    if( isNaN( argv.m ) || argv.m <= 0 ){
      throw 'The maximum number must be a number greater than zero'
    }
    return true
  })
  .argv;

module.exports = argv;