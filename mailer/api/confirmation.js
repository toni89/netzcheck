var modules,
    config,
    queues;

module.exports = {

    init: function (_config, _modules, _queues) {
        config = _config;
        modules = _modules;
        queues = _queues;
    },

    rest: {

        OnAlarmConfirmation : function(req, res) {

            var alarmId = req.body.alarmId || '';
            var email = req.body.email || '';
            var streetName = req.body.streetName || '';
            var streetNumber = req.body.streetNumber || '';
            var zipCode = req.body.zipCode || '';
            var city = req.body.city || '';

            queues.confirmation.add({
                action: 'sendAlarmConfirmation',
                alarmId: alarmId,
                email: email,
                streetName: streetName,
                streetNumber: streetNumber,
                zipCode: zipCode,
                city: city
            });

            res.status(200).end();
        },

        OnNewsletterConfirmation : function(req, res) {

            var newsletterId = req.body.newsletterId || '';
            var email = req.body.email || '';

            queues.confirmation.add({
                action: 'sendNewsletterConfirmation',
                newsletterId: newsletterId,
                email: email
            });

            res.status(200).end();

        },

        OnFeedbackConfirmation : function(req, res) {
            var email = decodeURI(req.query.email) || '';

            if(email) {
                queues.confirmation.add({
                    action: 'sendFeedbackConfirmation',
                    email: email
                });
            }

            res.status(200).end();
        }



    },

    actions: {

        sendAlarmConfirmation : function(job, done) {

            modules.base.testData({
                alarmId: job.data.alarmId,
                email: job.data.email,
                streetName: job.data.streetName,
                zipCode: job.data.zipCode,
                city: job.data.city
            },{
                streetNumber: job.data.streetNumber
            }, function(error, data) {

                if(error) {
                    done([Error('confirmation/sendAlarmConfirmation: bad input data'), error]);
                } else {

                    if (!modules.base.validateEmail(data.email)) {
                        done([Error('confirmation/sendAlarmConfirmation: email invalid'), data]);
                    }else{

                        var street = data.streetName + (data.streetNumber ? ' ' + data.streetNumber : '');
                        var url = config.general.domain + '/check/' + encodeURI(street +', ' + data.zipCode + ' ' + data.city);


                        var locals = {
                            baseUrl: config.general.domain,

                            alarmId: data.alarmId,
                            url: url,
                            street: street,
                            city: data.city,

                            newsletterUrl: url + '?newsletter=1',
                            forumUrl: config.general.domain + '/forum',
                            feedbackUrl: url + '?feedback=1',

                            facebookUrl: config.social.facebook,
                            gplusUrl: config.social.gplus,
                            twitterUrl: config.social.twitter,
                            linkedinUrl: config.social.linkedin
                        };

                        modules.template('confirmation-alarm', locals, function (templateError, html, text) {

                            if (templateError)
                                done([Error('confirmation/sendAlarmConfirmation: template error'), templateError]);
                            else {
                                var options = {
                                    from: config.email.envelope,
                                    to: data.email,
                                    subject: 'Bewertungsalarm-Anmeldung erfolgreich',
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
            });
        },

        sendNewsletterConfirmation : function(job, done) {

            modules.base.testData({
                newsletterId: job.data.newsletterId,
                email: job.data.email
            },{ }, function(error, data) {

                if(error) {
                    done([Error('confirmation/sendNewsletterConfirmation: bad input data'), error]);
                } else {

                    if (!modules.base.validateEmail(data.email)) {
                        done([Error('confirmation/sendNewsletterConfirmation: email invalid'), data]);
                    }else{

                        var locals = {
                            baseUrl: config.general.domain,

                            newsletterId: data.newsletterId,

                            alarmUrl: config.general.domain,
                            forumUrl: config.general.domain + '/forum',
                            feedbackUrl: config.general.domain + '?feedback=1',

                            facebookUrl: config.social.facebook,
                            gplusUrl: config.social.gplus,
                            twitterUrl: config.social.twitter,
                            linkedinUrl: config.social.linkedin
                        };

                        modules.template('confirmation-newsletter', locals, function (templateError, html, text) {

                            if (templateError)
                                done([Error('confirmation/sendNewsletterConfirmation: template error'), templateError]);
                            else {
                                var options = {
                                    from: config.email.envelope,
                                    to: data.email,
                                    subject: 'Newsletter-Anmeldung erfolgreich',
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
            });
        },


        sendFeedbackConfirmation : function(job, done) {
            var email = job.data.email;

            if (!modules.base.validateEmail(email)) {
                done([Error('confirmation/sendFeedbackConfirmation: email invalid'), job.data]);
                return;
            }


            var locals = {
                baseUrl: config.general.domain,

                newsletterUrl: config.general.domain + '?newsletter=1',
                forumUrl: config.general.domain + '/forum',
                feedbackUrl: config.general.domain + '?feedback=1',

                facebookUrl: config.social.facebook,
                gplusUrl: config.social.gplus,
                twitterUrl: config.social.twitter,
                linkedinUrl: config.social.linkedin
            };

            modules.template('confirmation-feedback', locals, function (templateError, html, text) {

                if (templateError)
                    done([Error('confirmation/sendFeedbackConfirmation: template error'), templateError]);
                else {
                    var options = {
                        from: config.email.envelope,
                        to: email,
                        subject: 'Vielen Dank für dein Feedback',
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

