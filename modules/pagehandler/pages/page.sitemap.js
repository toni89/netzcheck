var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res) {

        res.render('sitemap', {
            'baseUrl': modules.server.options.baseUrl,
            'meta': {
                'title': 'Sitemap',
                'description': '',
                'keywords': ''
            }
        });
    }
};