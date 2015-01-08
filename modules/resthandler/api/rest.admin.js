var modules,
    mongojs = require('mongojs');

module.exports = {

    init: function (_modules) {
        modules = _modules;
    },

    editRating: function(req, res) {

    },

    deactivateRating: function(req, res) {
        var ratingId = req.query.id || null;
        var adminOtp = req.query.aotp || null;

        if(ratingId && adminOtp) {

            try {
                modules.db.ratings.findAndModify({
                    query: { _id: mongojs.ObjectId(ratingId) },
                    update: { $set: { active: false } },
                    new: true
                }, function(err, doc, lastErrorObject) {

                    var message = 'Update Error';

                    if(!err && doc && doc.active === false) {
                        message = 'Update Success'
                    }

                    res.render('admin-deactivate', {
                        message: message
                    });
                });

            } catch(err) {
                console.log(err);
                sendError(res);
            }

        } else {
            res.render('admin-deactivate', {
                message: 'ID/OTP Error'
            });
        }
    }
};

function sendError(res) {
    res.writeHead( 400, 'request data is crap', {'content-type' : 'text/plain'});
    res.end();
}