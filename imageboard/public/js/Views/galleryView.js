var app = app || {};
app.GalleryView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.collection = new app.Gallery();
        this.listenTo( this.collection, 'add', this.renderImage);
        this.listenTo( this.collection, 'reset', this.render);
        this.collection.fetch();
        console.log(this.collection);
        app.imagelist = this.collection;
        this.render();

    },

    render: function() {
        // this.$el.empty();
        this.collection.each(this.renderImage, this );
        return this;
    },

    renderImage: function(image) {
        var ImageView = new app.ImageView({
            model: image
        });
        this.$el.append(ImageView.render().el);
    }

});
