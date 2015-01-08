(function($) {

    $.fn.autocomplete= function() {

        this.each(function() {
            new window.google.maps.places.Autocomplete(this ,{ types: ['geocode'] });
        });

        return this;
    };


    $.fn.checkGeodata = function(success, error) {


        this.each(function() {
            var form = $(this);

            var addressInput = form.find('.cg-address');

            form.submit(function(el) {
                el.preventDefault();

                var address = addressInput.val();

                if(address != '') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': address}, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            success(results[0].formatted_address);
                        }else {
                            error();
                        }
                    });
                }
            });
        });

        return this
    };
})(jQuery);