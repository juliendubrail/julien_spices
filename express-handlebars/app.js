var express = require('express');

var app = express();

var fs = require('fs');

var hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

var routes = require('./routes');

var path = require('path');

app.use(express.static(path.join(__dirname,'public')));

//home

app.get('/', function (req, res) {
    res.render('home', {
        showTitle: true
    });
});



app.get('/projects', routes.projects);


//project_single

app.get('/projects/:projectname', routes.project_single);


app.listen(8080, function(){
    console.log("the portfolio is running on localhost 8080");
});
