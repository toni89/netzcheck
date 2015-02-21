var assert = require("assert"),
    bodyparser = require('body-parser'),
    express = require('express'),
    exphbs  = require('express-handlebars'),
    request = require('request');

module.exports = function(options, imports, register) {
    //assert(options.http.server, "Option 'http.server' is required");
    assert(options.baseUrl, "Option 'baseUrl' is required");
    assert(options.http.port, "Option 'http.port' is required");

    var http = express();

    http.use('/images',express.static('./public/images'));
    http.use('/scripts',express.static('./public/scripts'));
    http.use('/themes',express.static('./public/themes'));
    http.use(bodyparser.json());
    http.use(bodyparser.urlencoded({
        extended: true
    }));

    http.engine('hbs', exphbs({
        'extname': '.hbs',
        'defaultLayout': 'page.hbs',
        'layoutsDir': './public/templates/',
        'partialsDir': './public/templates/partials/'
    }));
    http.set('view engine', 'hbs');
    http.set('views', './public/templates');

    http.listen(options.http.port, function () {
        console.log('server: http listening on port ' + options.http.port);
    });



    register(null, {
        "server" : {
            "http" : http,
            "request" : request,
            "options" : options
        }
    });
};