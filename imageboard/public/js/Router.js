ImageApp.Router = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'search': 'search',
        '*path': 'home',
        'image/:id': 'singleImage'
    },

    home: function(){
        var view = new ImageApp.Views.Home();
        $('#main').html(view.render().el);
    },

    search: function(){
        var view = new ImageApp.Views.Search();
        $('#main').html(view.render().el);
    },

    singleImage : function(){

        $('#main').html(view.render().el);
    }
});
