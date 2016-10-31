
var app = app || {};

$(function() {
    var books = [
        { title: 'JavaScript: The Good Parts', user_name: 'Douglas Crockford',  description: 'JavaScript Programming' },
        { title: 'The Little Book on CoffeeScript', user_name: 'Alex MacCaw',  description: 'CoffeeScript Programming' },
        { title: 'Scala for the Impatient', user_name: 'Cay S. Horstmann',  description: 'Scala Programming' },
        { title: 'American Psycho', user_name: 'Bret Easton Ellis',  description: 'Novel Splatter' },
        { title: 'Eloquent JavaScript', user_name: 'Marijn Haverbeke',  description: 'JavaScript Programming' }
    ];

    new app.GalleryView( books );

    // $('#add').on('click',function(e){
    //     e.preventDefault();
    //     var newImage = new app.Image({
    //         url: $('#url').val(),
    //         title: $('#title').val(),
    //         user_name: $('#user_name').val(),
    //         description: $('#description').val()
    //     });
    //     var newImageJSON = newImage.toJSON();
    //     console.log(newImage.toJSON());
    //     newImage.save(newImageJSON, {wait:true}) ;
    //     // e.stopPropagation();
    // });

});

var templates = document.querySelectorAll('script[type="text/handlebars"]');
Handlebars.templates = Handlebars.templates || {};
Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
