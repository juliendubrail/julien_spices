var app = app || {};

app.Comment = Backbone.Model.extend({
    url: "/api/comment",
    defaults:{
        // img_id: "",
        // user_name:"" ,
        comment:"None"
        // id: "img_id"
    }
});
