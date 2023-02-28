const fs = require('fs');

const createFile = async( base = 5, max, list ) => {
    try {
        const lines = '=================';
        const title = `The ${base} times table`;
        let output =  `${lines}\n${title}\n${lines}\n`
    
        for (let i = 1; i <= max ; i++) {
            output += `${base} x ${i} = ${i * base}\n`;
        }

        if(list) console.log(output);
    
        // El primer parámetro de writeFileSync es el path, si no se especifica el archivo se crea en la carpeta del archivo donde se ejecuta la función
        fs.writeFileSync( `./timeTables/${base}TimesTable.txt`, output)
        return( `${base}TimesTable.txt` );
    } catch (error) {
        return error
    }
    
};

module.exports = {
    createFile
}