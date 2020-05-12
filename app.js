const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {

    case 'listar':
        listarTabla(base, limite)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');

}