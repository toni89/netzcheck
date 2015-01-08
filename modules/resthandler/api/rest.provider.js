var modules,
    provider_DE = require('../../../libs/provider_DE.js');

module.exports = {
    providerList_DE: [],


    init: function(_modules) {
        modules = _modules;
        // TODO: providerliste von main holen
        this.providerList_DE = generateProviderList(provider_DE);
    },


    list: function(req, res) {
        var country = req.query.country;

        if(country == 'DE') {
            res.send(this.providerList_DE);
        }
    },

    getPlansForProvider: function(req, res) {

        var country = req.query.country;
        var provider = req.query.provider;

        if(provider && country) {
            if(country == 'DE') {
                res.send(filterPlans(provider_DE,  provider));
            }
        }
    }

};

function generateProviderList(list) {
    var sortedList = sortByName(list);
    var length = sortedList.length;
    var out = new Array(length);

    for(var i=0; i<length; i++) {
        var listObj = {};
        listObj.slug = sortedList[i].slug;
        listObj.name = sortedList[i].name;
        out[i] = listObj;
    }

    return out;
}

function sortByName(items) {
    return items.slice().sort(function(a, b) {
        if(a.name > b.name)
            return 1;
        if(a.name < b.name)
            return -1;
        return 0;
    });
}

function filterPlans(list, slug) {
    var listLength = list.length;
    var plans = null;

    for(var i=0; i<listLength; i++) {
        if(list[i].slug == slug) {
            plans = list[i].plans;
            break;
        }
    }

    if(plans instanceof Array && plans.length > 0) {
        //plans = sortByName(plans);

        var planLength = plans.length;
        var out = new Array(planLength);

        for(var i=0; i<planLength; i++) {
            var listObj = {};
            listObj.slug = plans[i].slug;
            listObj.name = plans[i].name;
            out[i] = listObj;
        }

        return out;
    }

    return [];
}