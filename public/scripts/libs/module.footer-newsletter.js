define(['vanilla', 'rotator'],function(vanillaJS, rotatorJs) {

    var options = {
        baseUrl: ''
    };

    var ui = {

        success: vanilla.byId('modal-footer-newsletter-success'),

        input: {
            modal: vanilla.byId('modal-footer-newsletter'),

            email: vanilla.byId('mfn-email'),
            submit: vanilla.byId('mfn-submit'),

            messages: {
                formatError: vanilla.byId('mfn-formaterror'),
                connectionError: vanilla.byId('mfn-connectionerror')
            }
        },

        facebook: vanilla.byClass('social-fb '),
        googleplus: vanilla.byClass('social-gplus'),
        twitter: vanilla.byClass('social-twitter ')
    };


    var init = function(_options) {
        options = _options;


        // Social buttons

        vanilla.onClick(ui.facebook , function() {
            popup('https://www.facebook.com/netzcheck.org');
            return false;
        });


        vanilla.onClick(ui.googleplus , function() {
            popup('https://plus.google.com/116301334318173767639/');
            return false;
        });

        vanilla.onClick(ui.twitter , function() {
            popup('https://twitter.com/netzcheckorg');
            return false;
        });



        // On Newsletter popup submit

        vanilla.onClick(ui.input.submit, function(el) {
            el.preventDefault();

            rotator.resetButton(ui.input.submit);
            rotator.rotate(ui.input.submit);

            var email = vanilla.getVal(ui.input.email);

            if(!validateEmail(email)) {
                rotator.fail(ui.input.submit);
                vanilla.show(ui.input.messages.formatError);
            } else {
                vanilla.hide(ui.input.messages.formatError);

                sendForm(email, function(error, status) {

                    if(error || !status || status.message != 'subscription saved') {
                        vanilla.show(ui.input.messages.connectionError);
                        rotator.fail(ui.input.submit);
                    } else {
                        vanilla.hide(ui.input.messages.connectionError);
                        rotator.done(ui.input.submit, function() {
                            vanilla.setVal(ui.input.email, '');
                            $(ui.input.modal).modal('hide');
                            $(ui.success).modal('show');
                        });

                    }
                })
            }

            return false;
        });
    };


    var show = function() {
        $(ui.input.modal).modal('show');
    };

    function sendForm(email, callback) {
        $.ajax({
            type: 'POST',
            url: options.baseUrl + '/api1/newsletter/subscribe',
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

    function popup(url) {
        window.open(url,'_blank');
    }

    return {
        init: init,
        show: show
    }
});
