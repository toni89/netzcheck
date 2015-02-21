var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res) {
        var showFeedback = req.query.feedback == '1' || '';
        var showNewsletter = req.query.newsletter == '1' || '';

        res.render('welcome', {
            'baseUrl': modules.server.options.baseUrl,
            'showFeedback' : showFeedback,
            'showNewsletter' : showNewsletter,

            'meta': {
                'title': 'netzcheck.org: Finde den besten Internetanschluss in deiner Umgebung',
                'description': 'Schon mal einen Vertrag  mit dem falschen Internet-Anbieter abgeschlossen? Vergleiche und bewerte LTE / Funk  sowie DSL-Anbieter für deine Umgebung.',
                'keywords': 'netcheck, dsl-check, lte-check, umts-check, funk-check',
                'robots': 'index, follow'
            }
        });
    }
};