var pg = require('pg');

var dbUrl = 'postgres://spicedling:password@localhost:5432/comicbookcharacters';
var client = new pg.Client(dbUrl);

// var client = new pg.Client('postgres://spicedling:password@localhost:5432/superheroes');

var name = 'Batman';

client.connect(function(err){
    if(err){
        console.log(err);
        return;
    }

    client.query('SELECT * FROM superheroes WHERE name =$1 and univers =$2', [name,'DC'], function(err,data){
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        client.end();
    });
});
