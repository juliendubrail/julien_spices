
var app = app || {};
app.GalleryView = Backbone.View.extend({
    el: '#images',
    initialize: function( initialImages ) {
        this.collection = new app.Gallery( initialImages );
        this.render();
        this.listenTo( this.collection, 'add', this.renderImage );
        this.listenTo( this.collection, 'reset', this.render );
    },
    events: {
        'click #add': 'newImage'
    },
    newImage: function(e) {
        e.preventDefault();
        var newImage = new app.Image({
            image: $('#url').val(),
            title: $('#title').val(),
            user_name: $('#user_name').val(),
            description: $('#description').val()
        });
        var newImageJSON = newImage.toJSON();
        console.log(newImage.toJSON());
        newImage.save(newImageJSON, {wait:true}) ;
        this.collection.add(newImage);
    },
    render: function() {
        this.collection.each(function(item) {
            this.renderImage(item);
        }, this );
    },

    renderImage: function(item) {
        var ImageView = new app.ImageView({
            model: item
        });
        this.$el.append(ImageView.render().el);
    }
});
