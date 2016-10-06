//Dependencies
const https = require('https');
var fs = require('fs');

//server
var express = require('express');
var app = express();

//set the content dir
app.use(express.static(__dirname + '/public'));

//start server
app.listen(3000, function () {
    console.log('Ticker app listening on port 3000!');
});

//Twitter API CODES

//  Encode consumer key and secret
var passwords = fs.readFileSync(__dirname + '/passwords.json');
var parsedAccessData = JSON.parse(passwords);
var token = parsedAccessData.consumerKey + ":" + parsedAccessData.consumerSecret;
var encodedToken = new Buffer(token).toString('base64');

// request to Obtain a bearer token https://api.twitter.com/oauth2/token HTTP/1.1

var options = {
    host: 'api.twitter.com',
    path: '/oauth2/token',
    method: 'POST',
    datatype:'json',
    headers: {
        'Authorization': 'Basic ' + encodedToken,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};


// Page Route
app.get('/tweets', function(request,response){

    var req = https.request(options, function(res) {
        var str ='';
        res.on('data', function (body) {
            str += body;
        });
        res.on('end', function(){
            var responseObj = JSON.parse(str);
            var bearerToken = responseObj['access_token'];
            // Request to Authenticate API requests with the bearer token
            var options2 = {
                host: 'api.twitter.com',
                path: '/1.1/statuses/user_timeline.json?user_id=14075928&count=10&exclude_replies=true',
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + bearerToken
                }
            };
            var tweets = '';
            var req2 = https.request(options2, function(res) {
                res.on('data', function (body) {
                    tweets +=body;
                });
                res.on('end',function(){
                    tweets = JSON.parse(tweets);

                    var tweetsFiltered = tweets.filter(function(item){
                        if(item.entities.urls.length === 1){
                            return item;
                        }
                    }).map(function(item){
                        var obj = {};
                        obj.text= item.text;
                        obj.href= item.entities.urls[0].url;
                        var index = item.entities.urls[0].indices[0];
                        obj.text = obj.text.slice(0, index -1);
                        return obj;
                    });

                    var jsonTweets = JSON.stringify(tweetsFiltered);
                    // var jsonTweets = tweetsFiltered;
                    console.log(jsonTweets);
                    response.send(jsonTweets);
                });
            });
            req2.on('error', function(e) {
                console.log('problem with request: ' + e.message);
            });
            req2.write('grant_type=client_credentials');
            req2.end();
        });

    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write('grant_type=client_credentials');
    req.end();

});
