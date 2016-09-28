var http = require('http');
var url = require("url");
var fs = require('fs');

var server = http.createServer(function(request, response){

    request.on('error', function(err) {
        console.error(err);
    });

    var headers = request.headers;
    var method = request.method;
    var page = url.parse(request.url).pathname;
    // var testUrl = request.url;
    // console.log(headers);
    // console.log(method);
    // console.log(page);
    // console.log(testUrl);



    if (request.method === 'GET' || request.method === 'HEAD') {
        response.statusCode = 200;
        // response.writeHead(200, {"Content-Type": "text/html"});

        if (request.method === 'GET' && page === '/requests.txt') {
            console.log("Hola Amigo!!!!");
            response.setHeader ('Content-Type', 'text/plain');
            const readable = fs.createReadStream(__dirname + '/requests.txt');
            readable.pipe(response);
            return;
        }

        if (request.method === 'GET') {
            console.log(headers);
            console.log(method);
            console.log(page);
            console.log("url" + request.url);
            response.write('<!doctype html>');
            response.write('<html>');
            response.write('<title>Hello, World!</title>');
            response.write('<p>Hello World!');
            response.write('</html>');
            response.end();
            fs.appendFile('requests.txt', request.method + '\t' + request.url + '\t' +  Date() + headers['user-agent'] + '\r', (err) => {
                if (err) throw err;
                console.log('The "request" was appended to file!');
            });


        }
        else  {
            console.log(headers);
            console.log(method);
            console.log(page);
            response.end();
            fs.appendFile('requests.txt', request.method + '\t' + request.url + '\t'  +  Date() + headers['user-agent'] + '\r', (err) => {
                if (err) throw err;
                console.log('The "request" was appended to file!');
            });
        }

    }

    else if (request.method ==='POST') {
        console.log(headers);
        console.log(method);
        console.log(page);

        response.writeHead(302, { 'Location':'/'});


        // response.setHeader('Location', '/');
        // response.statusCode = 302;
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            console.log("the body" + body); //logs the entire request body
        });
        response.end();
        fs.appendFile('requests.txt', request.method + '\t' + request.url + '\t' +  Date() + '\t' + headers['user-agent'] + '\r', (err) => {
            if (err) throw err;
            console.log('The "request" was appended to file!');
        });
    }

    else {
        response.statusCode = 403;
        response.end();
        fs.appendFile('requests.txt', request.method + '\t' + request.url + '\t' +  Date() + '\t' + headers['user-agent'] + '\r', (err) => {
            if (err) throw err;
            console.log('The "request" was appended to file!');
        });
    }


    // response.setHeader('Content-Type', 'text/html');
    // response.write('Hola Amigo');
    // response.end('Salut tout le monde!');
});
server.listen(8080);
