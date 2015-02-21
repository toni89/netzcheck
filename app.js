var path = require("path"),
    architect = require("architect"),
    cluster = require("cluster"),
    os = require("os");

if(cluster.isMaster) {
    var cpuCount = os.cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // restarting falling workers
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker %d died (%s). restarting...',
            worker.process.pid, signal || code);
        cluster.fork();
    });

} else {

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

}

