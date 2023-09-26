var bitcoin = require('bitcoin');

var client = new bitcoin.Client({
    host: '127.0.0.1',
    port: '8332',
    user: 'moonbust',
    pass: 'j3536YzAeJMXRZXLkt94bqmeWYWaKGNjETtDwAN2rhu',
    ssl: false,
    sslStrict: false
});

module.exports = client;