(function($) {

    $.fn.rotate = function() {

        this.each(function() {
            var el = $(this);

            el.find('.done').removeClass('active');
            el.find('.fail').removeClass('active');
            el.find('.rotator').addClass('active');
            el.find('.spinner').addClass('active');
        });

        return this;
    };


    $.fn.done = function(callback) {

        this.each(function() {
            var el = $(this);
            el.find('.rotator').addClass('active');
            el.find('.spinner').removeClass('active');
            el.find('.fail').removeClass('active');
            setTimeout(function() {
                el.find('.done').addClass('active');
                if(callback)
                    setTimeout(callback, 100);
            }, 250);
        });


        return this
    };

    $.fn.fail = function() {

        this.each(function() {
            var el = $(this);
            el.find('.rotator').addClass('active');
            el.find('.spinner').removeClass('active');
            el.find('.done').removeClass('active');
            setTimeout(function() {
                el.find('.fail').addClass('active');
            }, 250);
        });


        return this
    };

    $.fn.resetButton = function() {

        this.each(function() {
            var el = $(this);
            el.find('.rotator').removeClass('active');
            el.find('.spinner').removeClass('active');
            el.find('.done').removeClass('active');
            el.find('.fail').removeClass('active');
        });
    }

})(jQuery);