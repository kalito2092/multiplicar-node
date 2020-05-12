const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base} * ${i} = ${res} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor del limite ${limite} no es un número`);
            return;
        }

        if (limite < 1) {
            reject(`El valor del limite ${limite} no puede ser menor que 1`);
            return;
        }

        console.log(`Tabla de ${base}`.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base} * ${i} = ${res} \n`;
        }

        resolve(data);

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}