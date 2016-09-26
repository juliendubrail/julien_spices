$(document).ready(function() {

    var inputValue;
    var urlInput;
    var urlCommit;

    var templates = document.querySelectorAll('script[type="text/handlebars"]');
    Handlebars.templates = Handlebars.templates || {};
    Handlebars.partials = Handlebars.templates;
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });


    $("#go").click(function(){
        inputValue = $('input').val();
        inputValue = encodeURIComponent(inputValue);
        urlInput = 'https://api.github.com/users/' + inputValue +'/repos';
        request(urlInput);
    });

    $("p").click(function(){
        console.log("hi");
        inputValue = $('input').val();
        // inputValue = encodeURIComponent(inputValue);
        urlCommit = 'https://api.github.com/users/repos/' + inputValue +'/repo/commits';
        console.log("urlInput");
        request(urlCommit);
    })

    function request(url){

        $.ajax({
            url: url,
            method: 'GET',
            dataType:'json',
        
            success: function(data) {
                console.log(urlInput);
                // data = JSON.parse(JSON.stringify(data));
                console.log(data);
                // document.body.innerHTML = Handlebars.templates.results({data});
                $("#whatever").append(Handlebars.templates.results({data:data}));
            },
            error: function(xhr, status, errorThrow){
                xhr.status;
                xhr.responseText;
            }

        });

    }


});
