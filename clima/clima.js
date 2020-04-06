//requires
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b0b760d1f55297d37fbb00c683bb67b8&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}