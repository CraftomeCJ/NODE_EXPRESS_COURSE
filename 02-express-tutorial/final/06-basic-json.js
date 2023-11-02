// 1. import "express" module from express.js library using js native <require> methods to creare an Express application
const express = require('express');

// 2. then create a new object call app with "express methods"
const app = express();
const { products } = require('./data');

/**
 // 4. Once the Express server boilerplate had setup...
 * I can create specific routes and handle requests, and add more code for that purpose.
 */
app.get('/', (req, res) => {
	res.json(products);
});

// 5. Always setup this way and test the route usability before any behaviour implementation
app.get('/api/v1/content/query', (req, res) => {
	console.log(req.params);
	console.log(req.query); // can i see what i need?
	res.send('Hello World'); //is the response sending?
});

// 3. Now I can use the newly created <app> object and call the abstracted methods from express() and append it with a "DOT notation", and the "listen methods" that listen to connections and it takes in 2 paramenter, the (portNumber, callbackFunction) that print a string to console
// to start the server to handle incoming requests
app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
