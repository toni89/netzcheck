var assert = require('assert'),
    gc = require('node-geocoder');


var geodata = {
        geocoder: null,

        init : function() {
            this.geocoder = gc.getGeocoder('google', 'http', { language: 'DE'});
        },

        lookup : function(address, callback) {
            if(address != '') {
                this.geocoder.geocode(address, function(error, result) {
                    if(error)
                        callback('connection error');
                    else {
                        if(result) {
                            callback(null, result);
                        } else
                            callback('no data received');
                    }
                });
            } else {
                callback('address is empty');
            }
        }
};



module.exports = function(options, imports, register) {

    geodata.init();

    register(null, {
        "geodata": geodata
    });
};