

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta= 10) => {

    let salida, consola = '';

    try {
        for (let index = 0; index <= hasta; index++) {
            salida = salida += `${base} X ${index} =  ${ base * index}\n`;
            consola = consola += `${colors.green(base)} X ${colors.yellow(index)} =  ${ colors.cyan(base * index)}\n`;
        }
        if(listar){
            console.log(colors.america('========================'));
            console.log(colors.america( 'Tablas del: '), colors.red(base));
            console.log(colors.america('========================'));
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
};
