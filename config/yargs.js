const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
}).option('l',{
    alias: 'listar',
    type: Boolean,
    default: false,
    describe: 'Muestra la tabla en consola'
}).option('h',{
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Es el limite de la tabla que queremos hacer'
}).check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero';
     }
     return true;
}).check((argv,options) => {
    if(isNaN(argv.h)){
        throw 'la base tiene que ser un numero';
     }
     return true;
}).argv;


module.exports = argv;