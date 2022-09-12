
// - Instala la dependencia Winston
const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
    });

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = val => {
    if (typeof val === "number"){
    return 2 * val
    }
    // return false;
    throw new Error("El valor debe ser de tipo numero")
    }

const otraFuncion = miFuncion("Hola")

// - Registra el error en un archivo a través de un try...catch
try { 
    console.log("Esta ejecutandose de manera correcta") // Esta ejecutandose de manera correcta
    const doble = miFuncion("Hola")
    console.log(doble)
}
catch(e) { 
    console.log("ERROR!")
}
finally {
    console.log("Esto se va a ejecutar, tanto si se produce algun error, como si no existe ninguno")
}