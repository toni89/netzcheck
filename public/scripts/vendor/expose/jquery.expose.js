(function($) {



    $.fn.expose = function() {

        this.each(function() {
            var div = $(this);

            div.css('z-index','99999');
            div.addClass('expose-active');
            $('#expose-overlay').fadeIn(300);
        });
    };

    $('#expose-overlay').click(function(e){
        $('#expose-overlay').fadeOut(300, function(){
            var div = $('.expose');
            div.css('z-index','1');
            div.removeClass('expose-active');
        });
    });


})(jQuery);