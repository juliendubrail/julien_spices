$(document).ready(function(){

$("#divider").on('mousedown', function(e){
    var node = $(this);
    var position = node.offset();
    var initial = {
        x : position.left - e.pageX,
    };

    var handlers = {
        mousemove : function(e){
            node.css({
                left : ( initial.x + e.pageX ) + 'px',
            });
            $("#top").css({
                 left: e.pageX +'px',
            });
        },
        mouseup : function(e){
            $(this).off(handlers);
        }
    };
    $(document).on(handlers);
});





});
