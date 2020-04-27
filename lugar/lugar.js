const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '2d6ecda939mshc0cf0c178492a58p182086jsn26f32376c533' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!!', err);
    //     });
    return {
        direccion,
        lat,
        lng
    };
}

module.exports = {
    getLugarLatLng
}