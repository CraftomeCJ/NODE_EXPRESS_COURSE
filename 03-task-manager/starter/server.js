const app = require('./app');

const hostname = '127.0.0.1';
const port = 5003;

const server = app.listen(Number(port), hostname, () => {
	const { address } = server.address();
	console.log('App listening at http://%s:%s', address, port);
});

server.on('error', console.error);
