const os = require('node:os');

function convertMb(bytes) { // Función para convertir de bytes a KB y luego a MB.
    return bytes / 1024 / 1024;
}

function osModule() {
    const name = os.hostname(); // Obtener el nombre del sistema operativo
    const type = os.type(); // Obtener el tipo del sistema operativo
    const version = os.version(); // Obtener la versión del sistema operativo
    const arch = os.arch(); // Obtener la arquitectura del sistema operativo
    const cpus = os.cpus(); // Obtener información de las CPUs
    const totalMem = convertMb(os.totalmem()) // totalmem() devuelve la memoria total en bytes, se usa la función para cocnvertir en MB
    const freeMem = convertMb(os.freemem()) // freemem() devuelve la memoria libre en bytes, se usa la función para cocnvertir en MB

const infoCompleta = `
Nombre del SO: ${name}
Tipo del SO: ${type}
Versión del SO: ${version}
Arquitectura del SO: ${arch}
CPUs: ${cpus.length} CPUs disponibles
Memoria Total: ${totalMem.toFixed(2)} MB
Memoria Libre: ${freeMem.toFixed(2)} MB
 `;
 // Se usa toFixed(2) para mostrar con dos decimales
 return infoCompleta
}



module.exports = osModule;

// DATA 

// const osModule = () => {
//     return {
//     Name: os.hostname(), // Obtener el nombre del sistema operativo
//     Type: os.type(),// Obtener el tipo del sistema operativo
//     Version: os.version(), // Obtener la versión del sistema operativo
//     Arch: os.arch(), // Obtener la arquitectura del sistema operativo
//     Cpus: os.cpus().length, // Obtener información de las CPUs
//     TotalMem: `convertMb(os.totalmem()).toFixed(2)  MB`, // totalmem() devuelve la memoria total en bytes, se usa la función para cocnvertir en MB
//     FreeMem: `convertMb(os.freemem()).toFixed(2) MB` // freemem() devuelve la memoria libre en bytes, se usa la función para cocnvertir en MB
// }
// }