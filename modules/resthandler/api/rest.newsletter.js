var modules,
    extend = require('util')._extend,
    clone = require('clone'),
    newsletterSchema = require('../../../libs/schema.newsletter.js');

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    subscribe: function(req, res) {
        var longitude = req.body.long || 0;
        var latitude = req.body.lat || 0;
        var streetName = req.body.streetName || '';
        var streetNumber = req.body.streetNumber || '';
        var zipCode = req.body.zipCode || '';
        var city = req.body.city || '';

        var email = req.body.email || null;
        var alarm = req.body.alarm == 'true' || false;
        var newsletter = req.body.newsletter == 'true' || false;

        // verify email
        if(!email || !validateEmail(email)) {
            sendError(res);
            return;
        }

        if(alarm || newsletter) {

            var newsletterEntry = extend(clone(newsletterSchema), {
                location : { type: 'Point', coordinates: [ parseFloat(longitude), parseFloat(latitude) ]},
                streetName: streetName,
                streetNumber: streetNumber,
                zipCode: zipCode,
                city: city,
                email: email,
                alarm: alarm,
                newsletter: newsletter,
                created: new Date()
            });

            modules.db.newsletter.save(newsletterEntry, function(error, doc) {
                if( error || !doc ){
                    sendError(res);
                } else {
                    console.log('subscription saved');
                    if(alarm ) {
                        // Send alarm confirmation to user
                        modules.server.request.post(modules.server.options.mailerUrl + '/confirmation/alarm',
                            {
                                form: {
                                    alarmId: doc._id+'',
                                    email: email,
                                    streetName: streetName,
                                    streetNumber: streetNumber,
                                    zipCode: zipCode,
                                    city: city
                                }
                            }, function (error, response, body) {
                                if (!error && response.statusCode == 200) {
                                    console.log('confirmation/alarm sent');
                                } else {
                                    console.log('couldnt send confirmation/alarm');

                                }
                            });
                    }

                    if(newsletter) {
                        // Send newsletter confirmation to user
                        modules.server.request.post(modules.server.options.mailerUrl + '/confirmation/newsletter',
                            {
                                form: {
                                    newsletterId: doc._id+'',
                                    email: email
                                }
                            }, function (error, response, body) {
                                if (!error && response.statusCode == 200) {
                                    console.log('confirmation/newsletter sent');
                                } else {
                                    console.log('couldnt send confirmation/newsletter');
                                }
                            });
                    }



                    res.send({ error: null, message: 'subscription saved'});
                }
            });

        } else {
            sendError(res);
        }

    }
};

function sendError(res) {
    res.writeHead( 400, 'request data is crap', {'content-type' : 'text/plain'});
    res.end();
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}