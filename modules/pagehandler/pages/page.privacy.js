var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res) {

        res.render('privacy', {
            'baseUrl': modules.server.options.baseUrl,
            'meta': {
                'title': 'Datenschutzerklärung',
                'description': '',
                'keywords': '',
                'robots': 'noindex,follow'
            }
        });
    }
};