
var app = app || {};

$(document).ready(function() {

    var myGallery = new app.GalleryView( {collection: {}});

    $('#add').on('click',function(e){
        e.preventDefault();
        var newImage = new app.Image({
            url: $('#url').val(),
            title: $('#title').val(),
            user_name: $('#user_name').val(),
            description: $('#description').val()
        });
        var newImageJSON = newImage.toJSON();
        console.log(newImage.toJSON());
        newImage.save(newImageJSON, {wait:true}).then(function(data){
            myGallery.collection.add(data);
            console.log(data);
        });
    });



});

// var templates = document.querySelectorAll('script[type="text/handlebars"]');
// Handlebars.templates = Handlebars.templates || {};
// Array.prototype.slice.call(templates).forEach(function(script) {
//     Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
// });
