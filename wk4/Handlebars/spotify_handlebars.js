$( document ).ready(function() {

    var inputValue;
    var urlInput;

    var templates = document.querySelectorAll('script[type="text/handlebars"]');
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.partials = Handlebars.templates;
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });


    $("#go").click(function(){
        inputValue = $('input').val();
        inputValue = encodeURIComponent(inputValue);
        urlInput = 'https://api.spotify.com/v1/search?q=' + inputValue +'&type=' + $('select').val();
        request(urlInput);
    });

    function request(url){

        $.ajax({
            url: url,
            method: 'GET',
            dataType:'json',
            success: function(data) {
                console.log(urlInput);
                // data = JSON.parse(JSON.stringify(data));
                console.log(data);
                console.log(data.artists.items[0].name);
                // document.body.innerHTML = Handlebars.templates.results({data});
                $("#whatever").append  (Handlebars.templates.results(data));
                console.log(data.artists.next);
                $("#more").click(function(){request(data.artists.next);});
            }
        });



    }



});
