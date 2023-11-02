const express = require('express');
const { products } = require('./data.js');

const app = express();
// =================== Express Server ===============================

app.get('/', (req, res) => {
	console.table(JSON.stringify(products));
	// res.json(products);
	res.send(
		`<h1> Home Page </h1><a href='/api/products'>products</a>`,
	);
});

app.get('/api/v1/products', (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

// ====================== route params ============================
app.get('/api/v1/products/:productID', (req, res) => {
	// console.log(res);
	// console.log(req.params);
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID),
	);
	if (!singleProduct) {
		return res.status(404).send(`Product Does Not Exist`);
	}
	console.log(singleProduct);
	res.json(singleProduct); //this response begin with an object
});

app.get(
	'/api/v1/products/:productID/reviews/:reviewID',
	(req, res) => {
		console.log(res.params);
		res.send('Hello World');
	},
);
// ====================== route params ============================

// ====================== route query string =======================
app.get('/api/v1/products/query', (req, res) => {
	console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		//neccessary check for nothing
		// res.status(200).send(`no products matched your search`);
		// or I can use return and setup an object instead of string if I want to explicitly responding that the request is successful
		return res.status(200).json({ success: true, data: [] });
	}
	return res.status(200).json(sortedProducts); //this responses will become an array
});
// ====================== route query string =======================

// =================== Express Server ===============================
/**
 * Here, I am telling my chef (Express.js) to start serving customers (listening on port 5000) and displaying a message when the kitchen is open.
 */
app.listen(5002, () => {
	console.log(`Server is listening on port 5002`);
});
