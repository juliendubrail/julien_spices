var app = app || {};

app.Gallery = Backbone.Collection.extend({
    model: app.Image
});
