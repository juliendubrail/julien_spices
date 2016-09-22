$( document ).ready(function() {

    var inputValue;
    // var choice;

    $( "input" ).keyup(function() {
        inputValue = $('input').val();
        inputValue = encodeURIComponent(inputValue);
        // console.log(inputValue);
        // $( "p" ).text(inputValue);
    });

    // $("select" ).change(function(){
    //     choice = $( "#select" ).val();
    //     console.log(choice);
    // });

    $("#go").click(function(){
        // console.log(inputValue);
        $.ajax({
            url: 'https://api.spotify.com/v1/search?q=' + inputValue +'&type=' + $('select').val(),
            method: 'GET',
            dataType:'json',
            success: function(data) {
                $('.resultContainer').empty();
                $('.resultFor').empty();
                $('.more').empty();

                if ($('select').val() == 'Artist'){
                    // $('.resultContainer').empty();

                    $('.resultFor').append("<p> Result For " + data.artists.items[0].name  +"</p>");
                    for (var i = 0; i < data.artists.items.length; i++){
                        $('.resultContainer').append("<p>" + data.artists.items[i].name + "</p>");
                        console.log("hi");
                        if (data.artists.items[i].images.length > 0){
                            $('.resultContainer').append("<img src=" + data.artists.items[i].images[0].url + "></img>");
                        }
                    }
                    console.log(data.artists.next);
                    if (data.artists.next){
                        $('.more').append("<button id='button'>" + 'More' + "</button>");

                    }
                    // $('#button').click(function(){
                    //
                    // });


                }
                else{
                    $('.resultContainer').empty();
                    $('.resultFor').empty();
                    $('.resultFor').append("<p> Result For " + inputValue  +"</p>");
                    for (var j = 0; j < data.albums.items.length; j++){
                        console.log(j);
                        $('.resultContainer').append("<a href="+ data.albums.items[j].uri +"><p>" + data.albums.items[j].name + "</p></a>");
                        if (data.albums.items[j].images.length > 0){
                            $('.resultContainer').append("<a href="+ data.albums.items[j].uri +"><img src=" + data.albums.items[j].images[0].url + "></img></a>");
                        }
                    }

                }
            }
        });

    });
});
