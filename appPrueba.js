

// Imprimir la tabla del 5 en consola.

console.clear();
console.log('---------------');
console.log('Tablas');
console.log('----------------');

const multiplicar = (cont, callback) =>{
    return new Promise((resolve, reject) => {
        const resultado = 5* cont;
        resolve(resultado);
    });
}


const getTablaCinco = async() => {

    const resultados = [];
    const base = 5;
    for (let index = 1; index <= 10; index++) {
        let resultado = await multiplicar(index);
        resultados.push(`${base} x ${index} = ${resultado}`);
    }
    return resultados;
} 

getTablaCinco().then(msg => console.log(msg));


 