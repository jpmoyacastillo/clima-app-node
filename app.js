//requires
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

//.options para introducir comandos directo desde la raiz en la consola
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatlng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);