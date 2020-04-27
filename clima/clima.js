const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=712ae44a09bbefb4b0ba728824b8004a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}