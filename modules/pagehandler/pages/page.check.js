var providerList = require('../../../libs/provider_DE.js'),
    url = require('url');


var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res)  {
        var formattedAddress = decodeURI(req.params.address);
        var providerOptions = '';
        var typeFilter = req.query.type || '';
        var providerFilter = req.query.provider || '';
        var showFeedback = req.query.feedback == '1' || '';
        var showNewsletter = req.query.newsletter == '1' || '';

        var reqUrl = url.parse(req.url);
        var titlePrefix = '';
        var titlePostfix = '';


        if(typeFilter == 'dsl') {
            titlePrefix = 'DSL Check';
        } else if(typeFilter == 'mobile') {
            titlePrefix = 'UMTS & LTE Check'
        } else if(typeFilter == 'hotspot') {
            titlePrefix = 'WLAN & Funk Check'
        } else {
            titlePrefix = 'Netzcheck';
        }

        try {

            modules.geodata.lookup(formattedAddress, function (error, result) {
                if (error) {
                    res.render('address-unknown');
                    console.log("pages/check: Can't get geodata");
                } else if (result[0]) {
                    var geodata = result[0];
                    console.log(geodata);

                    // check country first

                    if(modules.main.isValidCountry(geodata.countryCode)) {
                        // check address level -> min. streetName
                        if(modules.main.getAddressLevel(geodata.countryCode, geodata.city, geodata.zipcode, geodata.streetName, geodata.streetNumber) >= 4 ) {

                            var providerCountry = providerList.filter(function (el) {
                                return el.country == geodata.countryCode;
                            });

                            providerCountry.forEach(function (el) {
                                providerOptions += "<option value=\"" + el.slug + "\">" + el.name + "</option>";
                            });

                            // Get ratings in neighborhood
                            if (modules.main.isValidLookupAddress(geodata.countryCode, geodata.stateCode, geodata.city,
                                    geodata.zipcode, geodata.streetName, geodata.streetNumber)) {

                                modules.main.getRatingsInRadius(geodata.longitude, geodata.latitude, typeFilter, providerFilter, 7000, 0, 10,
                                    function (error, results) {

                                        if (error || !results) {
                                            res.render('error');
                                        } else {
                                            var ratings = [];

                                            if (results.length > 0) {
                                                ratings = results;
                                            }

                                            titlePostfix = geodata.streetName + (geodata.streetNumber ? ' ' + geodata.streetNumber : '') + ', ' + geodata.city;

                                            res.render('check', {
                                                'baseUrl': modules.server.options.baseUrl,
                                                'titlePrefix': titlePrefix,
                                                'titlePostfix': titlePostfix,
                                                'path': reqUrl.pathname,
                                                'addressJSON': JSON.stringify(geodata),
                                                'address': geodata,
                                                'formattedAddress': formattedAddress,
                                                'typeFilter': typeFilter,
                                                'providerFilter': providerFilter,
                                                'providerOptions': providerOptions,
                                                'ratings': ratings,
                                                'ratingsRAW': JSON.stringify(ratings),
                                                'showFeedback' : showFeedback,
                                                'showNewsletter' : showNewsletter,

                                                /* Meta */
                                                'meta': {
                                                    'title': titlePrefix + ': ' + titlePostfix,
                                                    'description': '', // TODO: Insert Description & Keywords
                                                    'keywords': ''
                                                }
                                            });
                                        }
                                    });
                            }
                        } else {
                            res.render('address-invalid');
                        }
                    } else {
                        res.render('address-invalid-country');
                    }


                }
            });

        } catch(error) {
            res.render('500');
        }
    }

};