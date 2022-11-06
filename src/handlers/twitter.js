'use strict'

const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;
const https = require('https');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

let dataAsXml = '';
let dataAsJson = {};


async function getData() {
    await fetch('https://nitter.net/freeCodeCamp/rss', {
        method: 'GET',
        agent: httpsAgent
    })
        .then(response => response.text())
        .then(str => {
            dataAsXml = str
        })
        .then(() => {
            parseString(dataAsXml, function (err, result) {
                dataAsJson = result.rss.channel[0];
            });
        });
}

module.exports = async function (req, res) {
    console.log('twitter here');

    await getData();

    if (dataAsJson.length != 0)
        res.json({
            dataAsJson
        })
}
