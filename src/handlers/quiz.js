'use strict'
const fetch = require('node-fetch');
require('dotenv').config()

const apiKey = process.env['QUIZ_API_KEY']
//const apiKey = process.env.QUIZ_API_KEY

let questions = '';

async function getData(category, difficulty, limit, tag) {
    let quizApiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${difficulty}&limit=${limit}&tags=${tag}`

    console.log(quizApiUrl)

    await fetch(quizApiUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            questions = json
        })
}

module.exports = async function (req, res) {
    let category = req.params.category;
    let difficulty = req.params.difficulty;
    let limit = req.params.limit;
	let tag = req.params.tag

    await getData(category, difficulty, limit, tag)

    res.json({
        questions
    })
}
