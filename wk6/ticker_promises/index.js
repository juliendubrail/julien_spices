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

//options to get token
var twitter = {
    host: 'api.twitter.com',
    path: '/oauth2/token',
    method: 'POST',
    datatype:'json',
    headers: {
        'Authorization': 'Basic ' + encodedToken,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};

//retrieve token
function getToken(options){

    return new Promise (function (resolve, reject){
        // console.log("Hol");
        var requests = https.request(options, function(res) {
            var token ='';
            // console.log("Holla");
            res.on('data', function (body) {
                token += body;
                // console.log("the token " + token);
            });
            res.on('end', function(){
                // console.log(token);
                token = JSON.parse(token);
                var bearerToken = token['access_token'];
                resolve(bearerToken);
            });
        });
        requests.on('error', function(e) {
            console.log('problem with request: ' + e.message);
            reject(Error("Network Error"));
        });
        // write data to request body
        requests.write('grant_type=client_credentials');
        requests.end();
    });
}

// getToken(twitter).then(function(response){
//     console.log("Success!", response);
//     // console.log(response);
// }, function(error) {
//     console.error("Failed!", error);
// });

getToken(twitter).then(getTweets(bearerToken).then(function(response){
    console.log("Success!", response);
}, function(error) {
    console.error("Failed!", error);
}));

get('story.json').then(JSON.parse).then(function(response) {
  console.log("Yey JSON!", response);
})


//retrieve Tweets
function getTweets(bearerToken) {

    return new Promise(function (resolve, reject){
        var tweets ='';
        var options2 = {
            host: 'api.twitter.com',
            path: '/1.1/statuses/user_timeline.json?user_id=14075928&count=10&exclude_replies=true',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        };

        var headlines = https.request(options2, function(res) {
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
                console.log(jsonTweets);
                resolve(jsonTweets);
            });
            headlines.on('error', function(e) {
                console.log('problem with request: ' + e.message);
                reject(Error("Network Error"));
            });
            // write data to request body
            headlines.write('grant_type=client_credentials');
            headlines.end();

        });
    });
}


// exports.getTweets = function() {
//     getToken().then(function(){
//         var options2 = {
//             host: 'api.twitter.com',
//             path: '/1.1/statuses/user_timeline.json?user_id=14075928&count=10&exclude_replies=true',
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + getToken
//             }
//         };
//         https.request.get(options2).then(function(data){
//             return data.tweets;
//         });
//     });
// };
