//Dependencies
var fs = require ('fs');


//Promisified fs.readdir & fs.stat
function readdir(path) {
    return new Promise(function(resolve, reject){
        fs.readdir(path, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    }).then(function(val){
        return val;
    });
}


function stat(path){
    return new Promise(function(resolve, reject){
        fs.stat(path, function(err, data){
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

// Call on the promises
var files = readdir(__dirname + '/files');

var directories = files.then(function(item){
    var promise = [];

    item.forEach(function(data){
        var store = stat(__dirname + '/files/' + data);
        store = store.then(function(folder) {
            if(folder.isDirectory()){
                console.log(__dirname + '/files/' + data + ' is a directory');
            }
            else {
                console.log(__dirname + '/files/' + data + ' is not directory');
            }
        });
        promise.push(store);
    });
    
    return Promise.all(promise);
});


// Module
directories.then(function(){
    console.log("done!");
});
