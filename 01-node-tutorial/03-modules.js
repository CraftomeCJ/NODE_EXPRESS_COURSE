// require() or module.exports are CommonJS modules
// CommonJS, every file in Node is a module (by default)

// export {...} or import {...} are ES6 modules
// Modules - Encapsulated (Warpped) Code (only share minimum)
// const React = require('./react');

const names = require('./04-names'); //same import with ES6 modules
//import variables (data container) from outside

const sayHi = require('./05-utils'); //can import function modules from outside

const data = require('./06-alternative-flavor');

require('./07-mind-grenade'); //if the module have a function, when it is imported, the function will be executed
console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

console.log(data.singlePerson);
console.log(data);

// React.useEffect();
