var app = app || {};

app.Image = Backbone.Model.extend({
    url: "http://localhost:8080/api/image",
    defaults: {
        title: 'No title',
        user_name: 'Unknown',
        description: 'None',
        image: 'https://placehold.it/300x300'
    }
});
