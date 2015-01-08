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
        OnNewRating: function(req, res) {
            var id = req.query.id;

            queues.admin.add({
                action: 'newRating',
                id: id
            });
            res.status(200).end();
        }
    },

    actions: {

        newRating: function(job, done) {
            var ratingId = job.data.id;

            if(!ratingId)
                return done(Error('admin/newRating: No ratingId provided'));


            modules.db.ratings.find({ _id: modules.mongojs.ObjectId(ratingId) }, function(err, result) {
                if (err || !result)
                    return done([Error('admin/newRating: Ratings query error'), err ]);
                else {
                    if(result.length < 1)
                        return done(Error('admin/newRating: Cant find rating with id ' + ratingId));

                    var rating = result[0];

                    var locals = {
                        domain: config.general.domain,

                        rating: {
                            id: rating._id,
                            ip: rating.ip,
                            created: rating.created,

                            long: rating.location.coordinates[0],
                            lat: rating.location.coordinates[1],
                            street: rating.streetName,
                            streetnumber: rating.streetNumber,
                            city: rating.city,
                            state: rating.state,
                            country: rating.country,

                            type: rating.providerType,
                            provider: rating.providerSlug,
                            plan: rating.planSlug,

                            speed: rating.criteria_speed,
                            availability: rating.criteria_availability,
                            service: rating.criteria_service,
                            speechquality: rating.criteria_speechquality,
                            streaming: rating.criteria_streaming,
                            gaming: rating.criteria_gaming,
                            average: rating.criteria_avg,

                            adminOtp: rating.adminOtp,
                            userOtp: rating.userOtp,

                            text: rating.text
                        }
                    };

                    modules.template('admin-newrating', locals, function(templateError, html, text) {

                        if(templateError)
                            done([Error('admin/newRating: template error'), templateError]);
                        else {
                            var options = {
                                from: config.email.envelope,
                                to: config.general.adminEmail,
                                subject: 'Neue Bewertung online: ' + rating.streetName + ' ' + rating.streetNumber + ', ' + rating.city,
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
            });
        }
    }
};