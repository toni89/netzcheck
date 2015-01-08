var assert = require('assert'),
    api = require('require-all')(__dirname + '/api');

module.exports = function(options, imports, register) {
    assert(imports.db, "Package 'db' is required");
    assert(imports.geodata, "Package 'geodata' is required");
    assert(imports.main, "Package 'main' is required");
    assert(imports.server, "Package 'server' is required");

    var rest = imports.server.http;
    var db = imports.db;

    api['rest.admin'].init(imports);
    api['rest.newsletter'].init(imports);
    api['rest.provider'].init(imports);
    api['rest.rating'].init(imports);
    api['rest.social'].init(imports);


    // Admin
    rest.get('/jev/rating/edit', function(req, res) {
        //api['rest.admin'].editRating(req, res);
    });

    rest.get('/jev/rating/deactivate', function(req, res) {
        api['rest.admin'].deactivateRating(req, res);
    });

    // Newsletter
    rest.post('/api/newsletter/subscribe', function(req,res) {
        api['rest.newsletter'].subscribe(req, res);
    });


    // Provider
    rest.get('/api/provider/list', function(req,res) {
        api['rest.provider'].list(req, res);
    });

    rest.get('/api/provider/plans', function(req,res) {
        api['rest.provider'].getPlansForProvider(req, res);
    });


    // Rating
    rest.post('/api/rating', function(req, res) {
        api['rest.rating'].addRating(req, res);
    });

    rest.get('/api/rating/generic', function(req, res) {
        api['rest.rating'].getGeneric(req, res);
    });

    rest.get('/api/rating/toplist', function(req, res) {
        api['rest.rating'].getTopList(req, res);
    });

    rest.get('/api/rating/topplans', function(req, res) {
        api['rest.rating'].getTopPlans(req, res);
    });

    rest.get('/api/rating/local', function(req, res) {
        api['rest.rating'].getLocalRatings(req, res);
    });

    rest.get('/api/rating/local/count', function(req, res) {
        api['rest.rating'].getLocalRatingsCount(req, res);
    });

    rest.get('/api/rating/mapmarkers', function(req, res) {
        api['rest.rating'].getMapMarkers(req, res);
    });

    rest.get('/api/rating/mapratings', function(req, res) {
        api['rest.rating'].getMapRatings(req, res);
    });


    // Social
    rest.post('/api/social/email', function(req,res) {
        api['rest.social'].email(req, res);
    });

    rest.post('/api/social/feedback', function(req,res) {
        api['rest.social'].feedback(req, res);
    });

    // Route not found -> 404
    rest.get('*', function(req, res){
     res.render('404');
     });

    register(null);
};