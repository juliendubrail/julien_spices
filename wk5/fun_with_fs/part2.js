var myObject = {};
var fs = require ('fs');
var files;



function readPath(path, obj){
    files = fs.readdirSync(path);

    files.forEach(function(file) {
        // console.log(file, path);
        var stats = fs.statSync(path + "/" + file);
        if(stats.isDirectory()){
            obj[file] = {};
            readPath(path + "/" + file, obj[file]);
        }

        else {
            obj[file] = stats["size"];
        }

        // console.log(myObject);
        return (obj);
    });
}


readPath(__dirname + '/files', myObject);


fs.writeFile('files.json', JSON.stringify(myObject,null,4), (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});
