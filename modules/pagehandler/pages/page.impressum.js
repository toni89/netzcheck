var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res) {

        res.render('impressum', {
            'baseUrl': modules.server.options.baseUrl,
            'meta': {
                'title': 'Impressum',
                'description': '',
                'keywords': ''
            }
        });
    }
};