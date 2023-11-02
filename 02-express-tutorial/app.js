const express = require('express');
const { products } = require('./data.js');

const app = express();
// =================== Express Server ===============================

// =================== Express Server ===============================
/**
 * Here, I am telling my chef (Express.js) to start serving customers (listening on port 5000) and displaying a message when the kitchen is open.
 */
app.listen(5002, () => {
	console.log(`Server is listening on port 5002`);
});
