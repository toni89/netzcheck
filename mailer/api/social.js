var modules,
    config,
    queues;

module.exports = {

    init: function(_config, _modules, _queues) {
        config = _config;
        modules = _modules;
        queues = _queues;
    },

    rest: {
        OnSocialEmail: function(req, res) {
            var from = req.body.from || null;
            var email = req.body.email || null;
            var url = req.body.url || null;
            var streetName = req.body.streetName || null;
            var streetNumber = req.body.streetNumber || null;
            var city = req.body.city || null;

            queues.social.add({
                action: 'sendSocialEmail',
                from: from,
                email: email,
                url: url,
                streetName: streetName,
                streetNumber: streetNumber,
                city: city
            });

            res.status(200).end();
        },

        OnFeedback: function(req, res) {
            var name = req.body.name || '';
            var email = req.body.email || '';
            var text = req.body.text || null;

            queues.social.add({
                action: 'sendFeedback',
                name: name,
                email: email,
                text: text
            });

            res.status(200).end();
        }
    },

    actions: {

        sendSocialEmail: function(job, done) {
            var from = job.data.from;
            var email = job.data.email;
            var url = job.data.url;
            var streetName = job.data.streetName;
            var streetNumber = job.data.streetNumber;
            var city = job.data.city;


            if(!(email && email != 'undefined' &&
                url && url != 'undefined' &&
                city && city != 'undefined') &&
                streetName && streetName != 'undefined') {

                done([Error('social/sendSocialEmail: bad options error'), job.data]);
                return;
            }

            var street = streetName + (streetNumber ? ' ' + streetNumber : '');

            var subject = 'Standortanalyse für ' + street + ', ' + city;

            var locals = {
                baseUrl: config.general.domain,

                street: street,
                city: city,
                from: from,
                url: url,

                newsletterUrl: url + '&newsletter=1',
                forumUrl: config.general.domain + '/forum',
                feedbackUrl: url + '&feedback=1',

                facebookUrl: config.social.facebook,
                gplusUrl: config.social.gplus,
                twitterUrl: config.social.twitter,
                linkedinUrl: config.social.linkedin
            };


            modules.template('social-email', locals, function(templateError, html, text) {

                if(templateError)
                    done([Error('social/sendSocialEmail: template error'), templateError]);
                else {
                    var options = {
                        from: config.email.envelope,
                        to: email,
                        subject: subject,
                        text: text,
                        html: html
                    };

                    queues.email.add({
                        action: 'sendMail',
                        options: options
                    });
                    done();
                }

            });
        },

        sendFeedback: function(job, done) {
            var name = job.data.name;
            var email = job.data.email;
            var message = job.data.text;

            if (!message || message == 'undefined') {
                done([Error('social/sendFeedback: no text'), job.data]);
                return;
            }

            var locals = {
                name: name,
                email: email,
                text: message
            };

            modules.template('social-feedback', locals, function (templateError, html, text) {

                if (templateError)
                    done([Error('social/sendFeedback: template error'), templateError]);
                else {
                    var options = {
                        from: config.email.envelope,
                        to: config.general.adminEmail,
                        subject: 'Feedback: ' + message.substr(0, 40),
                        text: text,
                        html: html
                    };

                    queues.email.add({
                        action: 'sendMail',
                        options: options
                    });
                    done();
                }

            });
        }
    }
};