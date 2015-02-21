(function(ge) {

    ge.geocomplete = function(el) {

        new window.google.maps.places.Autocomplete(el ,{ types: ['geocode'] });
    };


    ge.checkGeodata = function(form, success, error) {

            addEvent(form, 'submit', function(el) {
                el.preventDefault();

                var addressInput = this.querySelectorAll('.cg-address')[0];

                if(addressInput && addressInput.value != '') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({'address': addressInput.value}, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            success(results[0].formatted_address);
                        }else {
                            error();
                        }
                    });
                }
            });

    };

    function addEvent(el, eventName, callback) {
        if(el && callback) {
            if(el == '[object NodeList]') {
                var len = el.length;
                for(var i=0; i<len; i++) {
                    addEventHandler(el[i], eventName, callback);
                }
            } else {
                addEventHandler(el, eventName, callback);
            }
        }
    }

    function addEventHandler(elem, eventType, handler) {
        if (elem.addEventListener)
            elem.addEventListener (eventType, handler, false);
        else if (elem.attachEvent)
            elem.attachEvent ('on' + eventType, handler);
    }
})(this.geo = this.geo || {});