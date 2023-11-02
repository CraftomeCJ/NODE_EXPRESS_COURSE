/**
 * these objects are available in all modules.
 * these variables may appear to be global but are not.
 * they exist only in the scope of modules
 * the objects are specific to Node.js
 * these https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects are also part of the javascript language itself which are also globally accessible
 */

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

// setInterval(() => {
// 	console.log('hello world 2');
// }, 5000);
