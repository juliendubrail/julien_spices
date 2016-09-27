var fs = require ('fs');

var files;
var filelist = [];
var path;

files = fs.readdirSync(__dirname + '/files');

function readPath(path){
    fs.readdir(path, function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i=0; i<data.length; i++) {
            // console.log(data[i]);
            if(fs.statSync(path + "/" + data[i]).isDirectory()){
                readPath(path + "/" + data[i]);
            }
            else {
                console.log(path + "/" + data[i]);
                filelist.push(data[i]);
            }

        }
    });
    // console.log(filelist);

}

files.forEach(function(item){

    if (fs.statSync(__dirname + '/files/' + item).isDirectory()){
        path = __dirname + '/files/' + item;
        // console.log(path + " contains");
        readPath(path);
    }
    else {
        filelist.push(item);
    }

});
