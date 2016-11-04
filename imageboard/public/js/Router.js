var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        'image/:id': 'zoomImage',
        '/':'home'

    },

    home: function(){
        // var myGallery = new app.GalleryView( {collection: {} });
        console.log(myGallery);
        console.log("anyting");
    },

    zoomImage : function(id){
        console.log(id);
        var image =  app.imagelist.get(id);
        console.log(image);
        var singleView = new app.ZoomView({model:image});
        // var comment = app.commentlist.get(id);
        // console.log(singleView.collection.length);
        // var comment = singleView.collection.get(7);
        // console.log(comment);
        // var comment_view = new app.CommentsView({el: $('#comments'), model: comment});
        // comment_view.fetch();
    }

});

app.Router.Instance = new app.Router();
Backbone.history.start();
