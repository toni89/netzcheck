define(function() {

    var options = {
        baseUrl: ''
    };

    var ui = {

        success: $('#modal-footer-newsletter-success'),

        input: {
            modal: $('#modal-footer-newsletter'),

            email: $('#mfn-email'),
            submit: $('#mfn-submit'),

            messages: {
                formatError: $('#mfn-formaterror'),
                connectionError: $('#mfn-connectionerror')
            }
        }
    };


    var init = function(_options) {
        options = _options;

        // Submit button
        ui.input.submit.click(function (el) {
            el.preventDefault();

            ui.input.submit.resetButton();
            ui.input.submit.rotate();

            var email = ui.input.email.val();

            if(!validateEmail(email)) {
                ui.input.submit.fail();
                ui.input.messages.formatError.show();
            } else {
                ui.input.messages.formatError.hide();

                sendForm(email, function(error, status) {

                    if(error || !status || status.message != 'subscription saved') {
                        ui.input.submit.fail();
                        ui.input.messages.connectionError.show();
                    } else {
                        ui.input.messages.connectionError.hide();

                        ui.input.submit.done(function() {
                            ui.input.email.val('');
                            ui.input.modal.modal('hide');
                            ui.success.modal('show');
                        });
                    }
                })
            }


            return false;
        });

    };


    var show = function() {
        ui.input.modal.modal('show');
    };

    function sendForm(email, callback) {
        $.ajax({
            type: 'POST',
            url: options.baseUrl + '/api/newsletter/subscribe',
            dataType: 'json',
            timeout: 5000,
            data: {
                email: email,
                newsletter: true
            }
        })
            .done(function(status) {
                callback(null, status);
            })
            .fail(function() {
                callback('connection error');
            });
    }


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        init: init,
        show: show
    }
});
