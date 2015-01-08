(function($) {


    var options = {};

    var OnSubmit = function(form, url) {

        var ui = {
            name : form.find('.fb-name'),
            email: form.find('.fb-email'),
            text: form.find('.fb-text'),
            msg: {
                inputError: form.find('.fb-input-error'),
                connectionError: form.find('.fb-connection-error'),
                success: form.find('.fb-success')
            }
        };

        var name = ui.name.val();
        var email = ui.email.val();
        var text = ui.text.val();

        hideMessages(ui.msg);

        if(text=='') {
            ui.msg.inputError.show();
            return;
        }

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            timeout: 5000,
            data: {
                name: name,
                email : email,
                text: text
            }
        })
            .done(function(status) {
                ui.msg.success.show();
                ui.name.val('');
                ui.email.val('');
                ui.text.val('');
            })
            .fail(function() {
                ui.msg.connectionError.show();
            });
    };

    var hideMessages = function(msg) {
        for(var key in msg) {
            if(msg.hasOwnProperty(key) && msg[key]) {
                msg[key].hide();
            }
        }
    };



    $.fn.feedback = function(url) {

        this.each(function() {
            var form = $(this);
            form.find('.fb-submit').click(function(el) {
                el.preventDefault();
                OnSubmit(form, url);
            });
        });

        return this;
    };



})(jQuery);