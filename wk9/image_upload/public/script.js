$('#localfile').click(function(e) {
    e.preventDefault();
    var file = $('input[type="file"]').get(0).files[0];

    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
        url: '/upload',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data){
            $('img').attr('src', data.file);
        }
    });
});

$('#linkfile').click(function(e) {
    e.preventDefault();
    var url = $('#url').val();
    var formData = new FormData();
    formData.append('url', url);

    $.ajax({
        url: '/upload2',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (){
            console.log('success');
        }
    });
});
