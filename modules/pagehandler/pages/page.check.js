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
        var showRating = req.query.ratingId || '';

        var reqUrl = url.parse(req.url);
        var keywords = '';
        var connection = '';
        var titlePrefix = '';
        var titlePostfix = '';




        try {

            modules.geodata.lookup(formattedAddress, function (error, result) {
                if (error) {
                    res.render('address-unknown', { meta: { title: 'Adresse unbekannt', robots: 'noindex,nofollow' }});
                    console.log("pages/check: Can't get geodata");
                } else if (result[0]) {
                    var geodata = result[0];
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


                                            if(typeFilter == 'dsl') {
                                                titlePrefix = 'DSL Check';
                                                keywords = 'dsl-check, dsl, ' + geodata.city;
                                                connection = 'DSL'
                                            } else if(typeFilter == 'mobile') {
                                                titlePrefix = 'UMTS & LTE Check';
                                                keywords = 'umts-lte-check, umts-check, lte-check, ' + geodata.city;
                                                connection = 'UMTS/LTE';
                                            } else if(typeFilter == 'hotspot') {
                                                titlePrefix = 'WLAN & Funk Check';
                                                keywords = 'wlan-funk-check, wlan-check, funk-check, ' + geodata.city;
                                                connection = 'WLAN/Funk';
                                            } else {
                                                titlePrefix = 'Netzcheck';
                                                keywords = 'netzcheck-'+geodata.city+', '+geodata.city;
                                                connection = 'Internet';
                                            }


                                            titlePostfix = geodata.streetName + (geodata.streetNumber ? ' ' + geodata.streetNumber : '') + ', ' + geodata.city;
                                            var description = '';
                                            if(results.length > 0) {
                                                description = results.length +' Standort-Bewertungen für ' + geodata.streetName + ', ' + geodata.city +' gefunden.'
                                                + ' Vergleichen und wählen Sie den richtigen ' + connection + "-Anbieter für Ihre Umgebung.";
                                            }else{
                                                description = 'Schon mal einen Vertrag  mit dem falschen ' + connection + '-Provider abgeschlossen? Bewerten und vergleichen Sie ihren Internet-Anschluss für '
                                                + geodata.streetName + ', ' + geodata.city+ '.';
                                            }

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
                                                'showNewsletter2' : showNewsletter,
                                                'showRating' : showRating,

                                                /* Meta */
                                                'meta': {
                                                    'title': titlePrefix + ': ' + titlePostfix,
                                                    'description': description,
                                                    'keywords': keywords,
                                                    'robots': 'index, follow'
                                                }
                                            });
                                        }
                                    });
                            }
                        } else {
                            res.render('address-invalid', { meta: { title: 'Adresse ungenau', robots: 'noindex,nofollow' }});
                        }
                    } else {
                        res.render('address-invalid-country', { meta: { title: 'Land nicht verfügbar', robots: 'noindex,nofollow' }});
                    }


                }
            });

        } catch(error) {
            res.render('500',{ meta: { title: 'Fehler 505', robots: 'noindex,nofollow' }});
        }
    }

};