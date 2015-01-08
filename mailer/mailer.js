var assert = require('assert'),
    api = require('require-all')(__dirname + '/api') || {},
    bodyparser = require('body-parser'),
    base = require('./base.js'),
    config = require('./config.js'),
    express = require('express'),
    emailTemplates = require('email-templates'),
    mongojs = require('mongojs'),
    BQueue = require('bull'),
    nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    request = require('request'),
    modules = {};

// check config
assert(config.db.database,      "Option 'db.database' is required");
assert(config.db.collections,   "Option 'db.collections' is required");
assert(config.email.host,       "Option 'email.host' is required");
assert(config.email.port,       "Option 'email.port' is required");
assert(config.email.user,       "Option 'email.user' is required");
assert(config.email.password,   "Option 'email.password' is required");
assert(config.http.port,        "Option 'http.port' is required");
assert(config.http.client,      "Option 'http.client' is required");
assert(config.redis.server,     "Option 'redis.server' is required");
assert(config.redis.port,       "Option 'redis.port' is required");


// connect database
modules.base = base;
modules.db = mongojs(config.db.database, config.db.collections);
modules.mongojs = mongojs;

// define mailer
modules.mailer = nodemailer.createTransport(smtpTransport({
    host: config.email.host,
    port: config.email.port,
    secure: true,
    auth: {
        user: config.email.user,
        pass: config.email.password
    }
}));


// create queue's
var queues = {
    confirmation: BQueue('Confirmation Queue', config.redis.port, config.redis.server),
    newsletter: BQueue('Newsletter Queue', config.redis.port, config.redis.server),
    alarm: BQueue('Alarm Queue', config.redis.port, config.redis.server),
    admin: BQueue('Admin Queue', config.redis.port, config.redis.server),
    email: BQueue('Email Send Queue', config.redis.port, config.redis.server),
    social: BQueue('Social Queue', config.redis.port, config.redis.server)
};


// initiate server
modules.rest = express();

// enable get-values parsing
modules.rest.use(bodyparser.urlencoded({ extended: true}));

// restrict access to client ip
modules.rest.use(function(req, res, next) {
    if (req.ip == config.http.client)
        next();
    else
        res.end(403, 'forbidden');
});


// Cache E-Mail Templates
emailTemplates(config.general.templatesDir,function(err, template) {

    if(err) {
        console.log([ Error('mailer: cant cache email templates'), err]);
        process.exit(0);
    }
    modules.template = template;


    // start server
    modules.rest.listen(config.http.port, function () {
        console.log('express: http listening on port ' + config.http.port);
    });


    // init queue-apis
    for(var key in api) {
        if(api.hasOwnProperty(key)) {
            api[key].init(config, modules, queues);
        }
    }


    // routes
    modules.rest.post('/confirmation/alarm', function(req, res) {
        api['confirmation'].rest.OnAlarmConfirmation(req, res);
    });

    modules.rest.post('/confirmation/newsletter', function(req, res) {
        api['confirmation'].rest.OnNewsletterConfirmation(req, res);
    });

    modules.rest.get('/confirmation/feedback', function(req, res) {
        api['confirmation'].rest.OnFeedbackConfirmation(req, res);
    });

    modules.rest.get('/newrating', function(req, res) {
        //api['admin'].rest.OnNewRating(req, res);
        api['alarm'].rest.OnNewRating(req, res);
    });

    modules.rest.post('/social/email', function(req, res) {
        api['social'].rest.OnSocialEmail(req, res);
    });

    modules.rest.post('/social/feedback', function(req, res) {
        api['social'].rest.OnFeedback(req, res);
    });


    // process jobs
    Object.keys(queues).forEach(function(key) {
        if(queues.hasOwnProperty(key)) {

            // define queue action
            queues[key].process(function(job, done) {
                if(job.data.action && api[key].actions.hasOwnProperty(job.data.action))
                    api[key].actions[job.data.action](job, done);
            });

            // error handling
            queues[key].on('completed', function(job) {
                console.log(key + '/' + job.data.action + ': job complete');
            }).on('failed', function(job, error) {
                console.log(error);
                // TODO: Fehler und Parameter in die Datenbank schreiben
            });
        }
    });


    // send test data
/*
    request('http://192.168.1.101:8001/newrating?id=548f3c705fe86fc407c53c62', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('testdata sent');
        }
    });
*/

/*
    var from ='Anton Hammerschmidt';
    var email = 'toschk@gmx.de';
    var url = 'http://192.168.1.101:8000/check/Josef-Priller-Straße,%2086159%20Augsburg,%20Deutschland?type=&provider=1und1-dsl-de';
    var address = 'Josef-Priller-Str. 21, Deutschland';

    request.post('http://192.168.1.101:8001/social/email',{ form: {
        from: from,
        email: email,
        url: url,
        streetName: 'Josef-Priller-Straße',
        streetNumber: '21',
        city: 'Augsburg'
    }}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('testdata sent');
        }
    });

*/
});


// close db connection on exit
process.on('SIGINT', function() {
    modules.db.close();
    process.exit(0);
});

