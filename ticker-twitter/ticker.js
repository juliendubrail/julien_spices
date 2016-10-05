const https = require('https');
var fs = require('fs');



//server
var express = require('express');


var app = express();

app.use('/ticker-twitter', express.static('ticker-twitter'));


app.listen(3000, function () {
    console.log('Ticker app listening on port 3000!');
});


app.get('/tweets', function(request,response){

    //Twitter API CODE

    //  Encode consumer key and secret
    var passwords = fs.readFileSync(__dirname + '/passwords.json');
    var parsedAccessData = JSON.parse(passwords);
    var token = parsedAccessData.consumerKey + ":" + parsedAccessData.consumerSecret;

    var encodedToken = new Buffer(token).toString('base64');
    // console.log(encodedToken);

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

    var accessToken;

    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (body) {
            accessToken = body;
            // console.log('Body: ' + body);
        });

    });
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write('grant_type=client_credentials');
    req.end();


    // Request to Authenticate API requests with the bearer token

    var options2 = {
        host: 'api.twitter.com',
        path: '/1.1/statuses/user_timeline.json?user_id=14075928&count=5&exclude_replies=true',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + 'AAAAAAAAAAAAAAAAAAAAAOtRwgAAAAAAl12EvpH0yHfsewZLFx2cVZevGjc%3D1N6gfa6mL6MtLfX6hRFCxxNOuu2VbQllph2BEmCcP47WCLUv4d',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    var tweets = '';
    var req2 = https.request(options2, function(res) {
        res.on('data', function (body) {
            tweets +=body;
        });
        res.on('end',function(){
            tweets = JSON.parse(tweets);
            // var map = tweets.map(function(item){
            //     var rObj = {};
            //     rObj.text = item['text'];
            //     return rObj;
            // }).filter(function(item){
            //     if (item['text'].indexOf('https')!== -1 && item['text'].match(/https/g).length === 1){
            //         var str = item['text'].slice(0, item['text'].indexOf('https'));
            //         return str;
            //     }
            // });
            // console.log(map);

            var tweetsFiltered = tweets.filter(function(item){
                if(item.entities.urls.length === 1){
                    return item;
                }
            }).map(function(item){
                var obj = {};
                obj.text= item.text;
                obj.url= item.entities.urls[0].url;
                var index = item.entities.urls[0].indices[0];
                obj.text = obj.text.slice(0, index -1);
                return obj;
            });

            var jsonTweets = JSON.stringify(tweetsFiltered);
            console.log(jsonTweets);
            response.send(jsonTweets);
        });
    });
    req2.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    req2.end();

});
