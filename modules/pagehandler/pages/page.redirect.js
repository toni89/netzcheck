var modules,
    redirectCode = 301,
    redirectList = {};

module.exports = {

    init: function(_modules) {
        modules = _modules;

        redirectList = generateRedirectList(modules.main.getProviderList());
    },

    redirectProvider: function(req, res)  {
        var providerSlug = req.params.providerSlug;

        if(providerSlug) {
            var url = getUrl('provider', providerSlug);

            if(url) {
                res.redirect(redirectCode, url);
            } else {
                res.render('500');
            }

        } else {
            res.render('500');
        }

    },

    redirectPlan: function(req,res) {
        var providerSlug = req.params.providerSlug;
        var planSlug = req.params.planSlug;

        if(providerSlug && planSlug) {
            var url = getUrl('plan', providerSlug+'/'+planSlug);

            if(url) {
                res.redirect(redirectCode, url);
            } else {
                res.render('500');
            }
        } else {
            res.render('500');
        }

    },

    redirectAvailability: function(req,res) {
        var providerSlug = req.params.providerSlug;
        var planSlug = req.params.planSlug;

        console.log('avaRedirect', providerSlug, planSlug);


        if(providerSlug && planSlug) {
            var url = getUrl('availability', providerSlug+'/'+planSlug);

            if(url) {
                res.redirect(redirectCode, url);
            } else {
                res.render('500');
            }
        } else {
            res.render('500');
        }
    }

};


function getUrl(type, key) {

    if(redirectList[type].hasOwnProperty(key)) {
        return redirectList[type][key];
    }

    return null;
}



function generateRedirectList(providerList) {

    var tempRedirectList = {
        provider: {},
        plan: {},
        availability: {}
    };
    var provider, plan;
    var totalPlans, totalProvider;


    var countryKeys = Object.keys(providerList);
    var totalCountries = countryKeys.length;
    var currentCountry;

    for(var countryIndex=0; countryIndex<totalCountries; countryIndex++) {

        currentCountry = countryKeys[countryIndex];
        totalProvider = providerList[currentCountry].length;

        for (var providerIndex = 0; providerIndex < totalProvider; providerIndex++) {

            provider = providerList[currentCountry][providerIndex];

            if (provider.hasOwnProperty('plans')) {

                var availabilityUrl, affiliateUrl;

                totalPlans = provider.plans.length;
                for (var planIndex = 0; planIndex < totalPlans; planIndex++) {
                    plan = provider.plans[planIndex];

                    if (plan.hasOwnProperty('availabilityUrl') && plan.availabilityUrl)
                        availabilityUrl = plan.availabilityUrl;
                    else if (provider.hasOwnProperty('availabilityUrl') && provider.availabilityUrl)
                        availabilityUrl = provider.availabilityUrl;


                    if (plan.hasOwnProperty('affiliateUrl') && plan.affiliateUrl)
                        affiliateUrl = plan.affiliateUrl;
                    else if (provider.hasOwnProperty('affiliateUrl') && provider.affiliateUrl)
                        affiliateUrl = provider.affiliateUrl;

                    tempRedirectList.availability[provider.slug + '/' + plan.slug] = availabilityUrl;
                    tempRedirectList.plan[provider.slug + '/' + plan.slug] = affiliateUrl;
                }
            }

            tempRedirectList.provider[provider.slug] = provider.affiliateUrl;
        }
    }

    return tempRedirectList;
}


