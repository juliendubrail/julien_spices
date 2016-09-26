process.argv;

// console.log(process.argv);
const url = require('url');
const querystring = require('querystring');

var urlpath = url.parse(process.argv[2]);
var query = querystring.parse(urlpath.query);

console.log(query);

// url.parse();

// console.log(urlpath);

console.log("The protocol is " + urlpath.protocol);
console.log("The host is " + urlpath.host);
console.log("The hostname is " + urlpath.hostname);
console.log("The port is " + urlpath.port);
console.log("The path is " + urlpath.path);
console.log("The pathname is " + urlpath.pathname);
console.log("The query is " + urlpath.query);
console.log("The value of the a parameter is " + query.a);
console.log("The value of the b parameter is " + query.b);
// console.log("The value of the a parameter is " + query[0]);
