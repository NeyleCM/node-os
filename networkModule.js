const os = require('node:os')

function networkModule() {
    const interfaces = os.networkInterfaces(); // Obtener las interfaces del SO
    let networkInfo = '';
    for (const interfaceName in interfaces) { // Iterar sobre cada propiedad en el objeto 'interfaces'. Cada propiedad representa una interfaz.
        networkInfo += `Interfaz: ${interfaceName}:\n`;// Agregar el nombre de la interfaz a 'networkInfo' + salto de línea.
        const details = interfaces[interfaceName];// Obtiene los detalles de la interfaz actual
        details.forEach((detail) => { // Obtener la información y almacenarla en la variable con saltos de línea
            networkInfo += `  
            Familia: ${detail.family}\n 
            Dirección: ${detail.address}\n 
            Interno: ${detail.internal}\n`;
        });
        networkInfo += '\n'; // Aquí se crea un salto de línea adicional entre las interfaces
    }
    return networkInfo;
}

module.exports = networkModule;