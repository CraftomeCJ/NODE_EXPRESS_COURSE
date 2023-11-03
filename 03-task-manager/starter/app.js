// Express Router Boilerplates
const express = require('express');
const app = express();
// =================================================================

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});
// =================================================================
const port = 5003;
const hostname = '127.0.0.1';
const server = app.listen(Number(port), hostname, () => {
	const { address } = server.address();
	console.log('App listening at http://%s:%s', address, port);
});

server.on('error', console.error);

console.log('Task Manager App');
