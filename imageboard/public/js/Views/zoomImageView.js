var app = app || {};
app.ZoomView = Backbone.View.extend({
    el: '#content',
    className: 'parent',
    template: _.template( $( '#imageZoom' ).html() ),

    initialize: function () {
        var self = this;
        this.collection = new app.Comments();
        this.listenTo( this.collection, 'addComment', this.renderComment);
        this.listenTo( this.collection, 'reset', this.render);
        this.collection.on('change', this.render, this);
        this.comments = [];
        app.commentlist = this.collection;
        this.collection.fetch({
            success: function(res){
                _.each(res.toJSON(), function(item){
                    // var commentid = item.id;
                    // self.comments[commentid] = item.comment;
                    self.comments.push(item);
                    console.log('successfully GOT comment  ' + item.id);
                });
            },
            error: function (err){
                console.log(err);
                console.log("something went wrong");
            }
        }).done(function(){
            self.render();
        });

    },
    render: function () {
        $(this.el).empty();
        var data = this.model.toJSON();
        console.log(" this ?", this.comments);
        data.comments = this.comments;
        console.log(data.comments);
        $(this.el).html(this.template(data));
        return this;
    },
    events: {
        'click #addComment': 'addComment'
    },
    addComment: function(e){
        var self = this;
        e.preventDefault();
        var newComment = new app.Comment({
            comment: $('#commentsInput').val(),
            user_name: $('#user').val(),
            img_id : this.model.get('id')
        });
        var newCommentJSON = newComment.toJSON();
        newComment.save(newCommentJSON, {wait:true}).then(function(data){
            app.commentlist.add(data);
            self.comments.push(data);
            self.render();
        });
        // var ZoomView = new app.ZoomView({
        //     model: this.model,
        //     el:'#comments'
        // });
    }
    // renderComment: function(comment) {
    //     var commentView = new app.CommentView({
    //         model: comment
    //     });
    //     this.$el.append(commentView.render().el);
    // }
});
