const express = require('express');
const app = express();

// Express middlewares are functions that execute during the request to the server
// Each middleware function has access to request and response objects.
// Middleware is everywhere in Express.js
// Express app are nothing but bunch of middleware functions stuffed together to make a nice Express cake

//  req => middleware => res

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	next();
};

app.get('/', logger, (req, res) => {
	res.send('Home');
});
app.get('/about', logger, (req, res) => {
	res.send('About');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
