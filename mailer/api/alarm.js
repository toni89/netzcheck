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

            queues.alarm.add({
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
                return done(Error('alarm/newRating: No ratingId provided'));

            modules.db.ratings.find({ _id: modules.mongojs.ObjectId(ratingId) }, function(err, result) {

                if (err || !result)
                    return done([Error('alarm/newRating: Ratings query error'), err]);
                else {
                    if(result.length < 1)
                        return done(Error('alarm/newRating: Cant find rating with id ' + ratingId));

                    // find all newsletters in near
                    var rating = result[0];
                    var longitude = rating.location.coordinates[0];
                    var latitude = rating.location.coordinates[1];

                    // get newsletter in area
                    if(!latitude || !longitude)
                        return done(Error('alarm/newRating: latitude and/or longitude is bad'));

                    modules.db.newsletter.aggregate(
                        [
                            {
                                '$geoNear': {
                                    near: { type:    "Point" ,
                                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                                    },
                                    limit: 1000,
                                    distanceField: 'distance',
                                    maxDistance: config.general.maxDistance,
                                    spherical : true,
                                    query: {
                                        alarm: true
                                    }
                                }
                            }
                        ],  function(error, receiverList) {

                            if(error || !receiverList)
                                done([Error('alarm/newRating: Newsletter query error'), err]);
                            else {
                                if(receiverList.length < 1)
                                    done(Error('alarm/newRating: No receiver found'));
                                else {
                                    // Add to send queue
                                    for(var i=0; i<receiverList.length; i++) {

                                        var receiver = receiverList[i];

                                        modules.base.testData({
                                            alarmId: receiver._id+'',
                                            ratingId: ratingId,
                                            email: receiver.email,
                                            streetName: receiver.streetName,
                                            zipCode: receiver.zipCode,
                                            city: receiver.city
                                        }, {
                                            streetName: receiver.streetName
                                        }, function(error, data) {

                                            if(error) {
                                                done([Error('alarm/newRating: bad input data'), error]);
                                            } else {

                                                if (!modules.base.validateEmail(data.email)) {
                                                    done([Error('alarm/newRating: email invalid'), data]);
                                                }else{

                                                    var street = data.streetName + (data.streetNumber ? ' ' + data.streetNumber : '');
                                                    var url = config.general.domain + '/check/' + encodeURI(street + ',' + data.zipCode + ' ' + data.city);


                                                    var locals = {
                                                        baseUrl: config.general.domain,

                                                        alarmId: data.alarmId,
                                                        ratingId: data.ratingId,
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

                                                    modules.template('alarm-newrating', locals, function (templateError, html, text) {

                                                        if (templateError)
                                                            done([Error('alarm/newRating: template error'), templateError]);
                                                        else {
                                                            var options = {
                                                                from: config.email.envelope,
                                                                to: data.email,
                                                                subject: 'Eine neue Bewertung für ' + street + ', ' + data.city + ' ist online',
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
                                    }
                                }
                            }
                        }
                    );
                }
            });
        }
    }
};