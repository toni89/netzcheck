var modules;

module.exports = {

    init: function(_modules) {
        modules = _modules;
    },

    show: function(req, res) {

        res.render('termsofuse', {
            'baseUrl': modules.server.options.baseUrl,
            'meta': {
                'title': 'Nutzungsbedingungen',
                'description': '',
                'keywords': ''
            }
        });
    }
};