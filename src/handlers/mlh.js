'use strict'

const fetch = require('node-fetch');

let currentYear = new Date().getFullYear();
let currentEventYear = currentYear + 1;

let currentEvents = '';

async function getData() {
    //https://github.com/n3a9/mlh-events
    await fetch('https://mlh-events-olive.vercel.app/' + currentEventYear)
        .then(res => res.json())
        .then(json => {
            currentEvents = json
        })
}

module.exports = async function (req, res) {
    console.log('mlh here');
    await getData();

    if (currentEvents.length != 0)
        res.json({
            currentEvents
        })
}
