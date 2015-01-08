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
                'title': 'dsl-exp',
                'description': '',
                'keywords': ''
            }
        });
    }
};