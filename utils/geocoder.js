const nodeGeocoder = require('node-geocoder');

const options = {
    provider: 'locationiq',
    apiKey: 'pk.b81edc39195b004733b51909f454ab76',
    formatter: null
};

const geocoder = nodeGeocoder(options);

module.exports = geocoder;
