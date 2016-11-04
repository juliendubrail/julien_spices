var app = app || {};
app.ImageView = Backbone.View.extend({
    tagName: 'div',
    className: 'imageContainer',
    template: _.template( $( '#imageTemplate' ).html() ),

    initialize: function(){
        this.render();
    },
    render: function() {
        var imageTemplate = this.template(this.model.toJSON());
        this.$el.html( imageTemplate );
        return this;
    }
});
