var assert = require('assert'),
    mongojs = require('mongojs');


module.exports = function(options, imports, register) {
    assert(options.database, "Option 'database' is required");

    var db = mongojs(options.database, ['ratings','newsletter']);

    // ratings collection settings
    db['ratings'].ensureIndex({ location: '2dsphere'});
    db['newsletter'].ensureIndex({ location: '2dsphere'});

    db.on("error", function(error){
        console.log("cant connect to database. ");
        console.log(error);
        console.log("reconnecting ...");
    });

    process.on('SIGINT', function() {
        db.close();
    });

    register(null, {
        "db": db,
        "mongojs": mongojs
    });
};