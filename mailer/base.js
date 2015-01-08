module.exports = {

    testData: function(required, optional, callback) {
        var out = {};

        if(optional && optional instanceof Object) {
            for (var key in optional) {
                if (optional.hasOwnProperty(key)) {
                    var value = optional[key];

                    if (value && value == 'undefined')
                        out[key] = '';
                    else
                        out[key] = value;

                }
            }
        }


        if(required && required instanceof Object) {
            for(var key in required) {
                if (required.hasOwnProperty(key)) {
                    var value = required[key];

                    if(value && value != 'undefined') {

                        if ((typeof(value) === 'string' || value instanceof String) && value == '') {
                            callback([Error('testInput: required data is bad'), required, optional]);
                            return;
                        }

                        out[key] = value;

                    } else {
                        callback([Error('testInput: required data is bad'), required, optional]);
                        return;
                    }
                }
            }
        }

        callback(null, out);
    },


    validateEmail: function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

}