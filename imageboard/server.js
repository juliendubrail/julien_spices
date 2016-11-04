//SERVER
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



var basicAuth = require('basic-auth');
var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != 'discoduck' || creds.pass != 'opensesame') {
        res.setHeader('WWW-Authenticate', 'Basic realm=www');
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use('/admin', auth);


//uploads
app.use(express.static(__dirname + '/public'));
        // app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//view engine setup
var hb = require('express-handlebars');
app.engine('handlebars',hb());
app.set('view engine', 'handlebars');
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});


//DATABASE
var pg = require('pg');

var dbUrl = 'postgres://julienspices2:spicedacademy@localhost:8080/imageboard';
dbUrl = require('url').parse(dbUrl);
//
var dbUser = dbUrl.auth.split(':');
var dbConfig = {
    user: dbUser[0],
    database: dbUrl.pathname.slice(1),
    password: dbUser[1],
    host: dbUrl.hostname,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
//
var pool = new pg.Pool(dbConfig);
//
pool.on('error', function(err) {
    console.log("the" + err);
});
//
// var bcrypt = require('bcrypt');

function queryDatabase (query, params, callback) {
    console.log("query run");
    pool.connect(function(err, client, done) {
        if (err) {
            callback(err);
            return;
        }
        client.query(query, params || [], function(err, results) {
            if (err) {
                callback(err);
            } else {
                console.log("pool resolving");
                callback(null, results);
            }
            done();
        });
    });
}

function insertImage(params, callback) {
    var query = "INSERT INTO images (url, title, description, user_name) VALUES ($1, $2, $3, $4) RETURNING id";
    queryDatabase(query, params, function(err,results){
        if(err){
            callback(err);
        }
        else{
            callback(null, results.rows[0].id);
        }
    });
}

function getImages (params, callback){
    var query = "SELECT * FROM images";
    queryDatabase (query, params, function(err, results){
        if(err){
            callback(err);
        }
        else{
            callback(null, results.rows);
        }
    });
}


function insertComment(params, callback) {
    var query = "INSERT INTO comments (comment, user_name, img_id) VALUES ($1, $2, $3) RETURNING id";
    queryDatabase(query, params, function(err,results){
        if(err){
            callback(err);
        }
        else{
            callback(null, results.rows[0].id);
        }
    });
}

function getComments (params, callback){
    var query = "SELECT * FROM comments";
    queryDatabase (query, params, function(err, results){
        if(err){
            callback(err);
        }
        else{
            callback(null, results.rows);
        }
    });
}

//MULTER
var multer = require('multer');

var diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/public/images');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + Math.floor(Math.random() * 99999999) + '_' + file.originalname);
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        filesize: 2097152
    }
});

app.get('/',  function (req, res) {
    res.sendFile(__dirname + '/index.html');


});

app.get('/gallery', function(req, res){
    getImages({}, function(err, results){
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
        } else {
            console.log("database" + results);
            res.json(results);
        }
    });
});

app.post("/api/image", function (req, res){
    console.log("post request run");
    var inputs = req.body;
    var params = [inputs.url, inputs.title, inputs.description, inputs.user_name];
    insertImage(params, function(err, results){
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
        }
        else {
            console.log("these are the results " + results);
            res.json({
                url : inputs.url,
                title: inputs.title,
                description : inputs.description,
                user_name: inputs.user_name,
                id: results
            });
        }
    });
});

app.get('/comments', function(req, res){
    getComments({}, function(err, results){
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
        } else {
            console.log("comments database" + results);
            res.json(results);
        }
    });
});

app.post("/api/comment", function (req, res){
    console.log("post request run");
    var inputs = req.body;
    console.log(req.body);
    var params = [inputs.comment, inputs.user_name, inputs.img_id];
    insertComment(params, function(err, results){
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
        }
        else {
            console.log("these are the results " + results);
            console.log(inputs.comment);
            res.json({
                comment : inputs.comment
            });
        }
    });
});



var listener = app.listen(process.env.PORT || 8080, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});

// Routes
app.get( '/api', function( request, response ) {
    response.send( 'Gallery API is running' );
});


app.get( '/api/images', function( request, response ) {
    return app.Image.find( function( err, images ) {
        if( !err ) {
            return response.send( images );
        } else {
            return console.log( err );
        }
    });
});
