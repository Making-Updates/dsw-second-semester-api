const axios = require('axios');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const index = require('./handlers/index')
const twitter = require('./handlers/twitter')
const youtube = require('./handlers/youtube')
const mlh = require('./handlers/mlh')
const quiz = require('./handlers/quiz')

app.get('/', (request, response) => {
	console.log('Ping received!');
	response.sendStatus(200);
});
app.get('/twitter', twitter);
	app.get('/youtube', youtube);
	app.get('/mlh', mlh);
	app.get('/quiz/:category/:difficulty/:limit/:tag', quiz);
function start() {
	let server = app.listen(0, () => {
		console.log('Listening on localhost:' + server.address().port);
	});

	setInterval(() => {
		axios.get('https://private-server-bots.waaiez.repl.co')
			.then(response => {

			})
			.catch(error => {
				console.log(error);
			});
	}, 60000);
}

start()