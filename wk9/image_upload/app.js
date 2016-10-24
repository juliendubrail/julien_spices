//SERVER
var express = require('express');
var app = express();

//uploads
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080);

//view engine setup
var hb = require('express-handlebars');
app.engine('handlebars',hb());
app.set('view engine', 'handlebars');

//Dependency
var fs = require('fs');
var http = require('http');
var https = require('https');

//MULTER
var multer = require('multer');

var diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
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

app.post('/upload', uploader.single('file'), function(req, res) {
    // If nothing went wrong the file is already in the uploads directory
    console.log(req.file.filename);
    console.log(req.file.path);
    if (req.file) {
        res.json({
            success: true,
            file: req.file.filename
        });
    } else {
        res.json({
            success: false
        });
    }
});


app.post('/upload2', uploader.single('url'), function(req,res){

    console.log(req.body.url);
    var options = {url: req.body.url};
    var path = require('path');
    var image_name = path.basename(options.url);
    console.log(image_name);

    function getImage(url){
        var request = require('request');
        request({
            url: url,
            headers: {
                'Content-Type': 'image/png'
            },
            encoding: 'binary'}).pipe(fs.createWriteStream('./uploads/'  + image_name));
    }

    getImage(options.url);

});

// Get Routes
var routes = require('./routes');
app.get('/',routes.home);
