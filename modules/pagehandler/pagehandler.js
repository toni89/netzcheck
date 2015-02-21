var assert = require('assert'),
    pages = require('require-all')(__dirname + '/pages');

module.exports = function(options, imports, register) {
    assert(imports.db, "Package 'db' is required");
    assert(imports.geodata, "Package 'geodata' is required");
    assert(imports.main, "Package 'main' is required");
    assert(imports.server, "Package 'server' is required");

    var http = imports.server.http;

    pages['page.welcome'].init(imports);
    pages['page.check'].init(imports);
    pages['page.impressum'].init(imports);
    pages['page.privacy'].init(imports);
    pages['page.termsofuse'].init(imports);
    pages['page.sitemap'].init(imports);
    pages['page.unsubscribe'].init(imports);
    pages['page.redirect'].init(imports);

    // Routes
    http.get('/', function (req, res) {
        pages['page.welcome'].show(req, res);
    });

    http.get('/check/:address', function (req, res) {
        pages['page.check'].show(req, res);
    });

    http.get('/impressum', function (req, res) {
        pages['page.impressum'].show(req, res);
    });

    http.get('/sitemap', function (req, res) {
        pages['page.sitemap'].show(req, res);
    });

    http.get('/datenschutzerklaerung', function (req, res) {
        pages['page.privacy'].show(req, res);
    });

    http.get('/nutzungsbedingungen', function (req, res) {
        pages['page.termsofuse'].show(req, res);
    });

    http.get(['/unsubscribe-alarm/',
              '/unsubscribe-alarm/:subscriptionId'], function (req, res) {
        pages['page.unsubscribe'].showAlarm(req, res);
    });

    http.get(['/unsubscribe-newsletter/',
              '/unsubscribe-newsletter/:subscriptionId'], function (req, res) {
        pages['page.unsubscribe'].showNewsletter(req, res);
    });

    http.get('/redirect/provider/:providerSlug', function (req, res) {
        pages['page.redirect'].redirectProvider(req, res);
    });

    http.get('/redirect/plan/:providerSlug/:planSlug', function (req, res) {
        pages['page.redirect'].redirectPlan(req, res);
    });

    http.get('/redirect/homepage/:providerSlug', function (req, res) {
        pages['page.redirect'].redirectCompanyHomepage(req, res);
    });

    http.get('/redirect/availability/:providerSlug/:planSlug', function (req, res) {
        pages['page.redirect'].redirectAvailability(req, res);
    });





    register(null);
};