var modules;

module.exports = {

    init: function (_modules) {
        modules = _modules;
    },

    showAlarm: function(req, res)  {
        var subscriptionId = req.params.subscriptionId || '';

        updateSubscription(subscriptionId, { alarm: false }, function(error) {
            if(error)
                renderPage(res, { message: 'Bei der Abmeldung ist ein Fehler aufgetretten.<br>Versuche es später noch einmal oder kontaktiere uns über das Feedbackformular.' });
            else
                renderPage(res, { message: 'Du wurdest erfolgreich vom Bewertungsalarm ausgetragen.' });
        });

    },

    showNewsletter: function(req, res)  {
        var subscriptionId = req.params.subscriptionId || '';

        updateSubscription(subscriptionId, { newsletter: false }, function(error) {
            if(error)
                renderPage(res, { message: 'Bei der Abmeldung ist ein Fehler aufgetretten.<br>Versuche es später noch einmal oder kontaktiere uns über das Feedbackformular.' });
            else
                renderPage(res, { message: 'Du wurdest erfolgreich vom Newsletter ausgetragen.' });
        });
    }
};

function renderPage(res, pageData) {
    res.render('unsubscribe', pageData);
}


function updateSubscription(subscriptionId, setParam, callback) {

    if(subscriptionId) {
        try {

            modules.db.newsletter.findAndModify({
                query: { _id: modules.mongojs.ObjectId(subscriptionId) },
                update: { $set: setParam },
                new: true
            }, function(error, subscription) {

                if(error)
                    callback(Error('db error')); //send500(res);
                else {
                    if(!subscription) {
                        callback(Error('nothing found')); //send404(res);
                    } else
                        callback(null);//renderPage(res);
                }

            });
        } catch(err) {
            callback(Error('fatal db error')); //send500(res);
        }

    } else
        callback(Error('missing subscription id')); //send404(res);

}