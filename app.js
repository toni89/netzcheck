var path = require("path"),
    architect = require("architect");

// Load default configuration
config = architect.loadConfig(path.join(__dirname, "config.js"));

// Load plugins and start application
architect.createApp(config, function(err, app) {
    if(err) throw(err);
    console.log("architect: modules loaded");
});


process.on('SIGINT', function() {
    process.exit(0);

});