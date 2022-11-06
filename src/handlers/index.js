'use strict'

const fetch = require('node-fetch');

module.exports = function (req, res) {
    console.log('Ping received!');
    res.sendStatus(200);

}
