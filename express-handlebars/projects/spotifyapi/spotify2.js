$( document ).ready(function() {
    var inputValue;
    var selectType;
    var urlInput;


    function request(url){
        $('.resultFor').empty();
        $('.more').empty();
        $.ajax({
            url: url,
            method: 'GET',
            dataType:'json',
            success: function(data) {
                if ($('select').val() == 'Artist'){
                    $('.resultFor').append("<p> Result For " + data.artists.items[0].name  +"</p>");
                    for (var i = 0; i < data.artists.items.length; i++){
                        $('.resultContainer').append("<a><p>" + data.artists.items[i].name + "</p></a>");

                        if (data.artists.items[i].images.length > 0){
                            $('.resultContainer').append("<img src=" + data.artists.items[i].images[0].url + "></img>");
                        }
                    }
                    if (data.artists.next){
                        $('.more').append("<button id='button'>" + 'More' + "</button>");
                        $('.more').click(function(){request(data.artists.next);});
                    }
                }
                else{
                    console.log("hi");
                    // $('.resultContainer').empty();
                    // $('.resultFor').empty();
                    $('.resultFor').append("<p> Result For " + inputValue  +"</p>");
                    for (var j = 0; j < data.albums.items.length; j++){
                        console.log(j);
                        $('.resultContainer').append("<a href="+ data.albums.items[j].uri +"><p>" + data.albums.items[j].name + "</p></a>");
                        if (data.albums.items[j].images.length > 0){
                            $('.resultContainer').append("<a href="+ data.albums.items[j].uri +"><img src=" + data.albums.items[j].images[0].url + "></img></a>");
                        }
                    }
                    if (data.albums.next){
                        $('.more').append("<button id='button'>" + 'More' + "</button>");

                    }
                    $('.more').click(function(){
                        request(data.albums.next);
                    });
                }
            }
        });
    }

    $("#go").click(function(){
        $('.more').empty();
        inputValue = $('input').val();
        selectType = $('select').val();
        urlInput = 'https://api.spotify.com/v1/search?q=' + $('input').val() +'&type=' + $('select').val();
        $('.resultContainer').empty();
        request(urlInput);
    }





);


});
