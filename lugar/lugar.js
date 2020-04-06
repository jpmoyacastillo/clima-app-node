//requires
const axios = require('axios');


const getLugarLatlng = async(dir) => {

    //prepacion de la direccion en caso de caracteres especiales como es el " " en por 
    //ejemplo la ciudad New York con la funcion encodeURI
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': 'eb1eeabcccmsh2c9e4b30a9be141p138e7fjsnaf5a1ee19b4f' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatlng
}