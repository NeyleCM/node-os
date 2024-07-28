function convertMb(bytes) {
    return bytes / 1024 / 1024;
}

function osModule () {
    const os = require('os');
    const name = os.type(); // Obtener el nombre del sistema operativo
    const platform = os.platform(); // Obtener el tipo del sistema operativo
    const release = os.release(); // Obtener la versión del sistema operativo
    const arch = os.arch(); // Obtener la arquitectura del sistema operativo
    const cpus = os.cpus(); // Obtener información de las CPUs
    const totalMem = convertMb(os.totalmem()) // totalmem() devuelve la memoria total en bytes, se usa la función para cocnvertir en MB
    const freeMem = convertMb(os.freemem()) // freemem() devuelve la memoria libre en bytes, se usa la función para cocnvertir en MB
    return { name, platform, release, arch, cpus, totalMem, freeMem }
}

const { name, platform, release, arch, cpus, totalMem, freeMem } = osModule()

const infoCompleta = `
Nombre del SO: ${name}
Tipo del SO: ${platform}
Versión del SO: ${release}
Arquitectura del SO: ${arch}
CPUs: ${cpus.length} CPUs disponibles
Memoria Total: ${totalMem.toFixed(2)} MB
Memoria Libre: ${freeMem.toFixed(2)} MB
`;

// Se usa toFixed(2) para mostrar con dos decimales

console.log(infoCompleta)

