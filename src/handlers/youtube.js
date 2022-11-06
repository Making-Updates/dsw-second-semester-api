'use strict'

const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;
let dataAsXml = '';
let dataAsJson = {};

async function getData() {
    await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC8butISFwT-Wl7EV0hUK0BQ')
        .then(response => response.text())
        .then(str => {
            dataAsXml = str
        })
        .then(() => {
            parseString(dataAsXml, function (err, result) {
                dataAsJson = result.feed.entry;
            });
        });
}

module.exports = async function (req, res) {
    console.log('youtube here');

    await getData();

    if (dataAsJson.length != 0)
        res.json({
            dataAsJson
        })

}
