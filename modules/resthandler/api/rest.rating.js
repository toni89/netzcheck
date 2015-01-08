var modules,
    providerList = {},
    maxDistance = 2000,
    moment = require('moment'),
    extend = require('util')._extend,
    clone = require('clone'),
    crypto = require('crypto'),
    ratingSchema = require('../../../libs/schema.rating.js'),
    qualityFeatures = require('../../../libs/qualityfeatures.js');

providerList.DE = require('../../../libs/provider_DE.js');

module.exports = {

    'init' : function(_modules) {
        modules = _modules;
    },

    'getGeneric' : function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';

        var query = {};
        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        query.active = true;

        modules.db.ratings.aggregate(
        [
            {
                '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 200,
                    distanceField: 'distance',
                    maxDistance: parseFloat(maxDistance),
                    spherical : true,
                    query: query
                }
            },
            {
                '$group': {
                    _id: null,

                    avg_speed: {
                        '$avg': '$criteria_speed'
                    },

                    avg_availability: {
                        '$avg': '$criteria_availability'
                    },

                    avg_speechquality: {
                        '$avg': '$criteria_speechquality'
                    },

                    avg_service: {
                        '$avg': '$criteria_service'
                    },

                    avg_streaming: {
                        '$avg': '$criteria_streaming'
                    },

                    avg_gaming: {
                        '$avg': '$criteria_gaming'
                    }
                }
            }
        ]
        , function(error, result) {
            if(error)
                sendError(res);
            else {
                var avgValues = result[0];

                if(avgValues) {
                    avgValues.speed_text = qualityFeatures.getText('speed', avgValues.avg_speed);
                    avgValues.availability_text = qualityFeatures.getText('availability', avgValues.avg_availability);
                    avgValues.service_text = qualityFeatures.getText('service', avgValues.avg_service);
                    avgValues.speechquality_text = qualityFeatures.getText('speechquality', avgValues.avg_speechquality);
                    avgValues.streaming_text = qualityFeatures.getText('streaming', avgValues.avg_streaming);
                    avgValues.gaming_text = qualityFeatures.getText('gaming', avgValues.avg_gaming);
                }

                res.send({ data : avgValues});
            }
        });
    },

    'getTopList' : function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';

        var query = {};
        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        query.active = true;

        modules.db.ratings.aggregate(
        [
            {
                '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 200,
                    distanceField: 'distance',
                    maxDistance: parseFloat(maxDistance),
                    spherical : true,
                    query: query
                }
            },
            {
                '$group': {
                    _id: {
                        slug: '$providerSlug'
                    },

                    count: {
                        '$sum': 1
                    },

                    avg_speed: {
                        '$avg': '$criteria_speed'
                    },

                    total_speed: {
                        '$sum': { '$cond': [ { $ne: ['$criteria_speed', null] }, 1, 0] }
                    },

                    avg_availability: {
                        '$avg': '$criteria_availability'
                    },

                    total_availability: {
                        '$sum': { '$cond': [ { $ne: ['$criteria_availability', null] }, 1, 0] }
                    },

                    avg_speechquality: {
                        '$avg': '$criteria_speechquality'
                    },

                    avg_service: {
                        '$avg': '$criteria_service'
                    },

                    avg_streaming: {
                        '$avg': '$criteria_streaming'
                    },

                    avg_gaming: {
                        '$avg': '$criteria_gaming'
                    }
                }
            }


        ], function(error, result) {
            if(error)
                sendError(res);
            else {
                var itemCount = result.length;

                for(var i=0; i<itemCount; i++) {
                    var listItem = result[i];

                    // calc total average
                    // TODO: better algorithm
                    listItem.avg_total = Math.round(((listItem.avg_speed + listItem.avg_availability + listItem.avg_speechquality +
                        listItem.avg_service + listItem.avg_streaming + listItem.avg_gaming) / 6) * 10) /10;

                    // get provider details
                    listItem.provider = modules.main.getProvider('DE', result[i]._id.slug);

                    // add rating text
                    listItem.speed_text = qualityFeatures.getText('speed', listItem.avg_speed);
                    listItem.availability_text = qualityFeatures.getText('availability', listItem.avg_availability);
                    listItem.service_text = qualityFeatures.getText('service', listItem.avg_service);
                    listItem.speechquality_text = qualityFeatures.getText('speechquality', listItem.avg_speechquality);
                    listItem.streaming_text = qualityFeatures.getText('streaming', listItem.avg_streaming);
                    listItem.gaming_text = qualityFeatures.getText('gaming', listItem.avg_gaming);
                }

                // sort asc avg_total
                result.sort(function(obj1, obj2) {
                    return obj2.avg_total - obj1.avg_total;
                });



                res.send({ data : result});
            }

        });
    },

    getTopPlans: function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var provider = req.query.provider || '';

        var query = {};
        if(provider)
            query.providerSlug = provider;

        query.active = true;

        modules.db.ratings.aggregate(
        [
            {
                '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 200,
                    distanceField: 'distance',
                    maxDistance: parseFloat(maxDistance),
                    spherical : true,
                    query: query
                }
            },
            {
                '$group': {
                    '_id': {
                        'plan': '$planSlug'
                    },

                    count: {
                        '$sum': 1
                    },

                    rating: {
                        '$avg': '$criteria_avg'
                    }
                }

            },
            {
                '$sort': {
                    'rating': -1
                }
            }

        ], function(error, result) {
            if(error)
                sendError(res);
            else {
                console.log(result);
                res.send({ data : result });
            }
        });

    },

    'getLocalRatingsCount' : function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';
        var provider = req.query.provider || '';


        modules.main.getRatingsInRadiusCount(longitude, latitude, type, provider, maxDistance,
            function(error, result) {
                if(error)
                    sendError(res);
                else
                    res.send({ count : result});
            }
        );
    },

    'getLocalRatings' : function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';
        var provider = req.query.provider || '';
        var skip = req.query.skip || 0;

        modules.main.getRatingsInRadius(longitude, latitude, type, provider, maxDistance, skip, 2,
            function(error, result) {
                if(error)
                    sendError(res);
                else
                    res.send({ ratings : addProperInfo(result)});
            }
        );
    },

    getMapRatings: function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';
        var provider = req.query.provider || '';

        var query = {};
        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        query.active = true;

        modules.db.ratings.aggregate(
        [
            {
                '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 200,
                    distanceField: 'distance',
                    maxDistance: 1,
                    spherical : true,
                    query: query
                }
            }
        ],  function(error, result) {

                if(error)
                    sendError(res);
                else {
                    res.send({ data : addProperInfo(result)});
                }

        });

    },

    getMapMarkers : function(req, res) {
        var longitude = req.query.long;
        var latitude = req.query.lat;
        var type = req.query.type || '';
        var provider = req.query.provider || '';

        var query = {};
        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        query.active = true;

        modules.db.ratings.aggregate(
        [
            {
                '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 200,
                    distanceField: 'distance',
                    maxDistance: parseFloat(maxDistance),
                    spherical : true,
                    query: query
                }
            },
            {
                '$group': {
                    _id: "$location",

                    streetName: {
                        "$first" : "$streetName"
                    },

                    streetNumber: {
                        "$first" : "$streetNumber"
                    },

                    count: {
                        '$sum': 1
                    }
                }
            }

        ]
        , function(error, result) {

                if(error)
                    sendError(res);
                else {
                    res.send({ data : result});
                }

            });

    },

    'addRating' : function(req, res) {
        console.log("addRating!");

        var data = {
            address: JSON.parse(req.body.address),
            provider: req.body.provider,
            plan: req.body.plan,
            text: req.body.text,
            criteria: req.body.criteria,
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        };

        checkRating(data, function(error, result) {
            if(error){
                console.log(error);
                sendError(res);
            }else {
                saveRating(data, function(err, rating) {
                    if(err)
                        sendError(res);
                    else {

                        if(rating._id) {
                            modules.server.request.get(modules.server.options.mailerUrl + '/newrating?id=' + rating._id, function (error, response, body) {
                                if (!error && response.statusCode == 200) {
                                    console.log('rest.rating/addRating: Admin mail sent');
                                } else {
                                    console.log('rest.rating/addRating: Cant send admin mail');
                                }
                            });
                        }

                        res.send({ error: null, message: 'rating saved'});
                        console.log("rating saved");
                    }
                });
            }
        });
    }
};

function sendError(res) {
    res.writeHead( 400, 'request data is crap', {'content-type' : 'text/plain'});
    res.end();
}

function addProperInfo(ratings) {

    for(var i=0; i<ratings.length; i++) {

        // distance
        var distance = Math.floor(ratings[i].distance);
        ratings[i].distanceReadable =  (distance < 1000) ? distance + ' Meter' : distance + ' km';

        // time
        var elapsed = moment.duration(Math.ceil((Date.now() - ratings[i].created.getTime()) / 1000), 'seconds');
        var readableTime = '';

        if(elapsed.years() > 0) {
            var rYears = elapsed.asYears().toFixed(1);
            var rest = rYears % 1;

            if(rYears == 1)
                readableTime = '1 Jahr';
            else {
                if(rest == 0)
                    readableTime = elapsed.years() + ' Jahren';
                else
                    readableTime = rYears + ' Jahren'
            }
        }else if(elapsed.months() > 0) {
            if(elapsed.months() == 1)
                readableTime = '1 Monat';
            else
                readableTime = elapsed.months() + ' Monaten';
        }else if(elapsed.days() > 0) {
            if(elapsed.days() == 1)
                readableTime = '1 Tag';
            else
                readableTime = elapsed.days() + ' Tagen';
        }else if(elapsed.hours() > 0) {
            if(elapsed.hours() == 1)
                readableTime = '1 Stunde';
            else
                readableTime = elapsed.hours() + ' Stunden';
        } else {
            if(elapsed.minutes() <= 1)
                readableTime = '1 Minute';
            else
                readableTime = elapsed.minutes() + ' Minuten';
        }
        ratings[i].readableCreated = readableTime;



        // provider & plan
        var provider = modules.main.getProvider(ratings[i].countryCode, ratings[i].providerSlug);
        if(provider) {
            ratings[i].providerName = provider.name;

            if(ratings[i].planSlug) {
                var plan = modules.main.getPlan(provider, ratings[i].planSlug);
                if(plan)
                    ratings[i].planName = plan.name;
            } else
                ratings[i].planName = '';
        }

        // Type
        if(provider) {
            if(provider.type == 'dsl')
                ratings[i].providerType = "DSL";
            else if(provider.type == 'mobile')
                ratings[i].providerType = "LTE/UMTS";
            else if(provider.type == 'hotspot')
                ratings[i].providerType = "Hotspot";
            else
                ratings[i].providerType = "Unbekannt";
        }

    }

    return ratings;
}

function saveRating(data, callback) {

    var provider = modules.main.getProvider(data.address.countryCode, data.provider);

    if(!provider)
        return callback(Error('provider is empty'));

    var criteria = {
        'speed': (data.criteria.speed > 0 ) ? parseInt(data.criteria.speed) : null,
        'availability': (data.criteria.availability > 0 ) ? parseInt(data.criteria.availability) : null,
        'service': (data.criteria.service > 0 ) ? parseInt(data.criteria.service) : null,
        'speechquality': (data.criteria.speechquality > 0 ) ? parseInt(data.criteria.speechquality) : null,
        'streaming': (data.criteria.streaming > 0 ) ? parseInt(data.criteria.streaming) : null,
        'gaming': (data.criteria.gaming > 0 ) ? parseInt(data.criteria.gaming) : null
    };

    // calculate average rating
    var criteria_total = 0,
        criteria_average = 0;

        for(var item in criteria) {
            if (criteria.hasOwnProperty(item)) {
                if(criteria[item] !== null) {
                    criteria_average += criteria[item];
                    criteria_total++;
                }
            }
        }
        if(criteria_total > 0)
            criteria_average = criteria_average / criteria_total;
        else
            criteria_average = null;

    try {

        var rating = extend(clone(ratingSchema), {
            location : { type: 'Point', coordinates: [ data.address.longitude, data.address.latitude ]},

            'countryCode' : data.address.countryCode,
            'stateCode' : data.address.stateCode,
            'zipCode' : data.address.zipcode,
            'streetName' : data.address.streetName,
            'streetNumber' : data.address.streetNumber,

            // non-important geodata
            'country' : data.address.country,
            'state' : data.address.state,
            'city' : data.address.city,

            // rating data
            'providerSlug' : data.provider,
            'providerType' : provider.type,
            'planSlug' : data.plan,
            'created' : new Date(),
            'text' : data.text,

            // criteria
            'criteria_speed' : criteria.speed,
            'criteria_availability' : criteria.availability,
            'criteria_speechquality' : criteria.speechquality,
            'criteria_service' : criteria.service,
            'criteria_streaming' : criteria.streaming,
            'criteria_gaming' : criteria.gaming,
            'criteria_avg': criteria_average,
            'criteria_total': criteria_total,

            ip: data.ip,
            adminOtp: crypto.randomBytes(20).toString('hex'),
            userOtp: crypto.randomBytes(20).toString('hex')
        });

        modules.db.ratings.save(rating, function(error, success) {
            if( error || !success )
                return callback(error);
            else {
                return callback(null, success);
            }
        });
    } catch(saveErr) {
        console.log(saveErr);
    }

}

function checkRating(data, callback) {

    // criteria 0 <= x <= 5
    var criteriaKeys = Object.keys(data.criteria);
    for(var i=0; i<criteriaKeys.length; i++) {
        var value = data.criteria[criteriaKeys[i]];
        if(!(0 <= value && value <=5)) {
            callback('checkNewRating: bad criteria value');
            break;
        }
    }


    // address is correct
    modules.geodata.lookup({
        address: data.address.streetName + data.address.streetNumber,
        country: data.address.country,
        zipcode: data.address.zipcode
    }, function(err, result) {
        if(err)
            return callback('geocode error');
        else {
            // check address and overwrite old one
            var address = result[0];
            if(!modules.main.isValidAddress(address.countryCode, address.zipcode,
                address.streetName, address.streetNumber))
                return callback('missing address info');
            data.address = address;

            // TODO: Prüfung!

            // provider & plan exists

            // Does this post already exists

            // remove illegal characters from text

            callback(null, data);
        }
    });
}
