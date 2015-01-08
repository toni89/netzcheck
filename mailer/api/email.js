var modules,
    config,
    queues;

module.exports = {

    init: function (_config, _modules, _queues) {
        config = _config;
        modules = _modules;
        queues = _queues;
    },


    actions: {

        sendMail: function(job, done) {
            try {

                modules.mailer.sendMail(job.data.options, function(err, info) {
                    if (err || !info)
                        return done([Error('email/sendMail: E-Mail options are bad'), err ]);
                    else
                        return done();
                });
            } catch(e) {
                done([Error('email/sendMail: Fatal send error'), e ]);
            }
        }


    }

};