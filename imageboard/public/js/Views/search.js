ImageApp.Views.Search = Backbone.View.extend({

    initialize: function(options) {},

    template: "<input type='text' placeholder='search'> \
               <button>Search movie</button> \
               <ul id='movie-list'></ul>",


    render: function()
    {
        this.$el.html("This is my search page!!");
        return this;
    }
});
