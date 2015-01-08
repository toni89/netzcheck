var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    email: function(req, res) {
        var from = req.body.from || null;
        var email = req.body.email || null;
        var url = req.body.url || null;
        var address = req.body.address || null;

        // verify email & url
        if(!email || !validateEmail(email) || !url || !address) {
            sendError(res);
        } else if(url.indexOf(modules.server.options.baseUrl) < 0) {
            sendError(res);
        }else {
            modules.server.request.post(modules.server.options.mailerUrl + '/social/email',
            {   form: {
                    from: from,
                    email: email,
                    url: url,
                    streetName: address.streetName,
                    streetNumber: address.streetNumber,
                    city: address.city
            }}, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.send({ error: null, message: 'email sent'});
                } else {
                    sendError(res);
                }
            });

        }
    },

    feedback: function(req, res) {
        var name = req.body.name || '';
        var email = req.body.email || '';
        var text = req.body.text || null;

        if(!text) {
            sendError(res);
        } else {

            modules.server.request.post(modules.server.options.mailerUrl + '/social/feedback',
            {   form: {
                    name: name,
                    email: email,
                    text: text
                }
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.send({ error: null, message: 'feedback sent'});
                } else {
                    sendError(res);
                }
            });

            if(email && validateEmail(email)) {
                modules.server.request.get(modules.server.options.mailerUrl + '/confirmation/feedback?email=' + encodeURI(email), function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log('rest.social/feedback: Confirmation mail sent');
                    } else {
                        console.log('rest.social/feedback: Cant send Confirmation mail');
                    }
                });
            }

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