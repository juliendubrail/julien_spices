var app = app || {};
app.CommentsView = Backbone.View.extend({
    el: '#comments',
    // template: _.template( $( '#imageZoom' ).html() ),

    initialize: function() {
        this.collection = new app.Comments();
        this.listenTo( this.collection, 'addComment', this.renderComment);
        this.listenTo( this.collection, 'reset', this.render);
        this.collection.fetch();
        console.log(this.collection);
        app.commentlist = this.collection;
        // this.render();

    },

    render: function() {
        this.collection.each(this.renderComment, this );
        return this;
    },

    renderComment: function(comment) {
        var CommentView = new app.CommentView({
            model: comment
        });
        this.$el.append(CommentView.render().el);
    }

});
