//dependencies
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


//SERVER
var express = require('express');
var app = express();
//view engine setup
var hb = require('express-handlebars');
app.engine('handlebars',hb());
app.set('view engine', 'handlebars');


var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3000, function() {
    console.log("the application is running on localhost 3000");
});

// Routes
var routes = require('./routes');
app.get('/', routes.home);
// app.get('/thanks', routes.thanks);


//Form

app.post('/thanks', urlencodedParser, function(req, res){
    console.log(req.body);
    const signatures = req.body;
    res.render('contact-success', {data:req.body});


    //Database
    var pg = require('pg');
    var dbUrl = "pg://postgres:postgres@localhost:5432/petition";
    var client = new pg.Client(dbUrl);

    client.connect();

    client.query("CREATE TABLE IF NOT EXISTS signs(firstname varchar(64), lastname varchar(64))");
    client.query("INSERT INTO signs (firstname, lastname) VALUES ($1, $2)", [signatures.firstname, signatures.lastname]);

    var query = client.query("SELECT firstname, lastname FROM signs ORDER BY lastname, firstname");
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        console.log(JSON.stringify(result.rows, null, "    "));
        client.end();
    });
});
