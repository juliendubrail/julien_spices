var chalk = require('chalk');
var querystring = require('querystring');
console.log(chalk.red('this text is red'));
console.log(chalk.green('this text is green'));
var error = chalk.bold.red;
console.log(error('Error!'));




var http = require('http');

var server = http.createServer(function(request,response){

    request.on('error', function(err) {
        console.error(err);
    });

    if (request.method === 'GET') {
        console.log("Hola Amigo!!!!");
        response.setHeader ('Content-Type', 'text/html');
        response.write('<!doctype html>' + '\n' );
        response.write('<html>'  + '\n');
        response.write('<title>Colors</title>'  + '\n');
        response.write('<form method="POST">'  + '\n');
        response.write('<p>Hello World!'  + '\n');
        response.write('<input type="text" name="text">'  + '\n');
        response.write('<select name="color">'  + '\n');
        response.write('<option value="red">red</option>'  + '\n');
        response.write('<option value="blue">blue</option>' + '\n');
        response.write('<option value="green">green</option>' + '\n');
        response.write('<option value="yellow">yellow</option>' + '\n');
        response.write('<option value="gray">gray</option>' + '\n');
        response.write('<option value="magenta">magenta</option>' + '\n');
        response.write('<option value="cyan">cyan</option>' + '\n');
        response.write('</select>' + '\n');
        response.write('<button type="submit">Go</button>' + '\n');
        response.write('</form>' + '\n');
        response.write('</html>' + '\n');
        response.end();
    }

    else if (request.method ==='POST') {
        response.setHeader('Content-Type', 'text/html');
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            console.log(body); //logs the entire request body
            var parsedBody = querystring.parse(body);
            console.log(parsedBody);
            var color = parsedBody.color;
            var text = parsedBody.text;
            console.log(color);
            console.log(text);
            console.log(chalk[color](text));
            response.write('<!doctype html>' + '\n' );
            response.write('<html>'  + '\n');
            response.write('<title>'+ text +'</title>'  + '\n');
            response.write('<a href ="/" style="color:'+ color + '">'+ text+ '</a>'  + '\n');
            response.write('</html>' + '\n');
        });
    }


});
server.listen(8080, function() { console.log("listening on port 8080!"); });
