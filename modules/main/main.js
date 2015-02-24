var assert = require('assert'),
    mongojs = require('mongojs');

var providerList = {},
    provider_DE = require('../../libs/provider_DE.js'),
    provider_AT = require('../../libs/provider_AT.js');


var db;
var main = {

    init: function() {
        providerList.DE = sortByName(provider_DE);
        providerList.AT = sortByName(provider_AT);
    },

    getProviderList: function() {
        return providerList;
    },

    getAddressLevel: function(countryCode, city, zipCode, streetName, streetNumber) {

        var level = 0;

        if(countryCode && countryCode != '')
            level = 1;

        if(city && city != '')
            level = 2;

        if(zipCode && zipCode != '')
            level = 3;

        if(streetName && streetName != '')
            level = 4;

        if(streetNumber && streetNumber != '')
            level = 5;

        return level;
    },

    isValidCountry: function(countryCode) {
        if(countryCode == 'DE')
            return true;
        return false;
    },

    // are enough geoinformation provided to make a rating?
    isValidAddress: function(countryCode, zipCode, streetName, streetNumber) {
        if(!zipCode || zipCode == '')
            return false;

        if(!streetName || streetName == '')
            return false;

        if(!streetNumber || streetNumber == '')
            return false;

        return true;
    },

    // are enough geoinformation provided to make a request?
    isValidLookupAddress: function(countryCode, stateCode, city, zipCode, streetName, streetNumber) {
        if(!(countryCode == 'DE' || countryCode == 'CH' || countryCode=='AT'))
            return false;

        if(!stateCode || stateCode == '')
            return false;

        if(!city || city == '')
            return false;

        return true;
    },

    getRatingsInRadiusCount: function(longitude, latitude, type, provider, radius,  callback) {
        var query = { };

        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        if(provider)
            query.providerSlug = provider;

        query.active = true;

        db.ratings.aggregate(
            [
                { '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 500,
                    distanceField: 'distance',
                    maxDistance: parseFloat(radius),
                    spherical : true,
                    query: query
                    }
                },
                { '$group' : { _id: null, count: { '$sum': 1 }}}
            ], function(error, result) {
                if(error)
                    callback(error);
                else{
                    if(result.length > 0)
                        callback(null, result[0].count);
                    else
                        callback(null, 0);
                }

            });
    },

    getRatingsInRadius: function(longitude, latitude, type, provider, radius, skip, limit, callback) {
        var query = { };

        if(type && (type=='dsl' || type=='mobile' || type=='hotspot'))
            query.providerType = type;

        if(provider)
            query.providerSlug = provider;

        query.active = true;

        db.ratings.aggregate(
            [
                { '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 500,
                    distanceField: 'distance',
                    maxDistance: radius,
                    spherical : true,
                    query : query
                    }
                },
                { '$skip': parseInt(skip) },
                { '$limit': parseInt(limit) }
            ], function(error, results) {

                if(error)
                    callback(error);
                else
                    callback(null, results);
        });
    },

    getRatingById: function(id, callback) {

        db.ratings.findOne({ _id: mongojs.ObjectId(id) }, function(error, result) {
            if(error) {
                callback(error);
            } else {
                callback(null, result);
            }
        });
    },

    getSingleRating: function(longitude, latitude, id, radius, callback) {

        var limit = 1;

        try {

        db.ratings.aggregate(
            [
                { '$geoNear': {
                    near: { type:    "Point" ,
                        coordinates: [ parseFloat(longitude), parseFloat(latitude) ]
                    },
                    limit: 500,
                    distanceField: 'distance',
                    maxDistance: radius,
                    spherical : true,
                    query : { _id: mongojs.ObjectId(id) }
                }
                },
                /*{ '$match': { _id: mongojs.ObjectId(id) }},*/
                { '$limit': parseInt(limit) }
            ], function(error, results) {
                if(error)
                    callback(error);
                else
                    callback(null, results);
            });

        } catch(err) {
            callback(Error('fatal db error')); //send500(res);
}

    },

    getPlan: function(provider, planSlug) {
        if(provider) {
            var plans = provider.plans;
            if(plans instanceof Array && plans.length >0 ) {
                var plansLength = plans.length;

                for(var i=0; i<plansLength; i++) {
                    if(plans[i].slug == planSlug)
                        return plans[i];
                }
            }
        }

        return null;
    },

    getProvider: function(country, providerSlug) {

        if(!providerList[country])
            return null;

        var list = providerList[country];
        var listLength = list.length;

        for(var i=0; i<listLength; i++) {
            if(list[i].slug == providerSlug) {
                return list[i];
            }
        }
        return null;
    }
};

// ************************************* Private *************************************

function sortByName(items) {
    return items.slice().sort(function(a, b) {
        if(a.name > b.name)
            return 1;
        if(a.name < b.name)
            return -1;
        return 0;
    });
}



module.exports = function(options, imports, register) {
    assert(imports.db, "Package 'db' is required");

    db = imports.db;

    main.init();

    register(null, {
        "main": main
    });
};