
define(['countable'], function(Countable) {

    var options = {
        baseUrl: '',
        address: {},
        formattedAddress: '',
        typeFilter: '',
        providerFilter: '',
        showFeedback: false,
        showNewsletter: false,
    };

    var globals = {
        selectedProvider: ''
    };
    var ui = {
        global: {
            typePills : {
                all: $('#type-all'),
                dsl: $('#type-dsl'),
                mobile: $('#type-mobile'),
                hotspot: $('#type-hotspot')
            },

            showFeedbackTarget: '#footer'
        }
    };


    var init = function(_options) {
        options = _options;

        globals.selectedProvider = options.providerFilter;

        setTypePills(options.typeFilter);

        handleFeedbackOverlay(options.showFeedback);
        handleNewsletterPopup(options.showNewsletter);

        initRating();
        initGraphs();
        initMaps();
        initNewsletter();
        initSidebar();
        initSocial();
    };


    // *****************************************************************************************************************
    // GRAPHS
    // *****************************************************************************************************************

    var rating = {
        providerList: [],
        leftWords: 5,
        totalWordsToWrite: 5,
        planTimeout: null,
        progressVisible: false,
        totalRatings: 0,
        visibleRatings: 0
    };


    ui.rating = {

        list: {
            counter: $('#rating-counter'),
            container: $('#rating-container'),
            more: $('#rating-more')
        },

        modal : {
            reset: {
                dialog: $('#modalInputReset'),
                delete: $('#modalInputReset-delete')
            },
            submit: {
                dialog: $('#modalRatingSubmit'),
                resend: $('#modalRatingSubmit-resend'),
                missingform: $('#modalRatingSubmit-missingform'),
                geoinput: $('#modalRatingSubmit-geoinput'),
                notification: $('#modalRatingSubmit-notification'),

                missing: $('#modalRatingSubmit-missing'),
                success: $('#modalRatingSubmit-success'),

                alarm: $('#mrs-alarm'),
                forum: $('#mrs-forum')
            }
        },

        newRating : {
            form: $('#newrating'),
            provider: $('#newrating_provider'),
            plan: $('#newrating_plan'),
            text: $('#newrating_text'),
            progress: {
                container: $('#newrating_progress'),
                text: $('#newrating_progresstext'),
                bar: $('#newrating_progressbar')
            },
            error: {
                provider: $('#newrating-provider-error'),
                text: $('#newrating-text-error')
            },
            criteria: {
                container: $('#newrating_criteria'),
                speed: $('#newrating_speed'),
                availability: $('#newrating_availability'),
                service: $('#newrating_service'),
                speechquality: $('#newrating_speechquality'),
                streaming: $('#newrating_streaming'),
                gaming: $('#newrating_gaming')
            },
            check: {
                provider: $('#newrating_check_provider'),
                plan: $('#newrating_check_plan'),
                text: $('#newrating_check_text'),
                criteria: $('#newrating_check_criteria')
            },
            button: {
                submit: $('#newrating_submit'),
                reset: $('#newrating_reset')
            }

        }
    };


    function initRating() {


        // display ratings
        getRatingsCount(options.address.longitude, options.address.latitude, options.typeFilter, options.providerFilter, function(data) {
            rating.totalRatings = data.count;

            if(rating.totalRatings > 0) {

                // set title
                var countText = '<strong>' + rating.totalRatings + ' Bewertung';
                if(rating.totalRatings > 1)
                    countText += 'en';
                countText += ' </strong>gefunden';
                ui.rating.list.counter.html(countText);


                // render ratings
                getRatingsForLocation(options.address.longitude, options.address.latitude, options.typeFilter, options.providerFilter, 0, function(data) {

                    if(data.ratings instanceof Array && data.ratings.length > 0) {

                        renderRatings(data.ratings, false);

                        // hide / display more ratings button
                        if(rating.totalRatings > 0 && rating.totalRatings > rating.visibleRatings)
                            ui.rating.list.more.show();
                        else
                            ui.rating.list.more.hide();
                    }
                });
            } else {
                ui.rating.list.container.hide();
            }
        });


        // load more ratings on demand
        ui.rating.list.more.click(function(el) {
            getRatingsForLocation(options.address.longitude, options.address.latitude, options.typeFilter, options.providerFilter, rating.visibleRatings, function(data) {
                if(data.ratings instanceof Array && data.ratings.length > 0) {

                    renderRatings(data.ratings, true);

                    // hide / display more ratings button
                    if(rating.totalRatings > rating.visibleRatings)
                        ui.rating.list.more.show();
                    else
                        ui.rating.list.more.hide();
                }
            });
            return false;
        });


        // Modals
        ui.rating.modal.reset.delete.click(function() {
            // TODO: ratings zurücksetzen
            resetRatingForm();
            ui.rating.modal.reset.dialog.modal('hide');
            return false;
        });

        // success - alarm-button
        ui.rating.modal.submit.alarm.click(function() {
            ui.rating.modal.submit.dialog.modal('hide');
            showNewsletterModal('', true, true, '', '');
            return false
        });

        // success - forum-button
        ui.rating.modal.submit.forum.click(function() {
            window.open(options.baseUrl + '/forum');
            return false
        });

        // NewRating
        ui.rating.modal.submit.geoinput.val(options.formattedAddress);

        // Reset-Button
        ui.rating.newRating.button.reset.click(function() {
            ui.rating.modal.reset.dialog.modal('show');
            return false;
        });


        // Missing-Send-Button
        var geocomplete = new window.google.maps.places.Autocomplete(ui.rating.modal.submit.geoinput[0] ,{ types: ['geocode'] });
        ui.rating.modal.submit.resend.click(function(el) {
            //el.preventDefault();
            ui.rating.modal.submit.resend.rotate();


            var geocoder = new google.maps.Geocoder();
            var addressInput = ui.rating.modal.submit.geoinput.val();

            geocoder.geocode({'address': addressInput}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var newAddress = convertAddress(results[0]);
                    handleNewRatingDialog(newAddress, true);
                }else {
                    ui.rating.modal.submit.resend.fail();
                    ui.rating.modal.submit.notification.html('<li style="display: list-item">Die eingegebene Adresse ist ungültig</li>');
                }
            });
            return false;
        });


        // Provider & Plans
        ui.rating.newRating.provider.chosen({ disable_search_threshold: 7 });
        ui.rating.newRating.plan.chosen({ disable_search_threshold: 7 });

        ui.rating.newRating.provider.on('change', function(evt, params) {
            if(params.selected){
                setCheckState(ui.rating.newRating.check.provider[0], true);
                clearTimeout(rating.planTimeout);
                getPlansForProvider(params.selected, 'DE');
            }
        });

        ui.rating.newRating.plan.on('change', function(evt, params) {
            if(params.selected)
                setCheckState(ui.rating.newRating.check.plan[0], true);
        });


        // Textarea
        var newratingTextarea = document.getElementById('newrating_text');

        var hideProgress = false;

        Countable.live(newratingTextarea, function(counter) {
            rating.leftWords = rating.totalWordsToWrite - counter.words;
            var wordsInPercent = (counter.words / rating.totalWordsToWrite) * 100;

            if(rating.leftWords > 0) {
                hideProgress = false;
                if (rating.leftWords > 1)
                    ui.rating.newRating.progress.text.html('Noch ' + rating.leftWords + ' Wörter');
                else
                    ui.rating.newRating.progress.text.html('Noch 1 Wort');

                ui.rating.newRating.progress.bar.velocity({ width: wordsInPercent + '%' }, { duration: 100 });
            }else {
                hideProgress = true;
                if(rating.progressVisible) {
                    setCheckState(ui.rating.newRating.check.text[0], true);
                    ui.rating.newRating.progress.bar.velocity({ width: '100%' }, {duration: 100});

                    setTimeout(function() {
                        ui.rating.newRating.progress.container.velocity('slideUp', {display: 'none', duration: 500});
                    },500);
                    rating.progressVisible = false;
                }
            }

            if(counter.characters > 0 &&  !hideProgress) {
                if (!rating.progressVisible) {
                    setCheckState(ui.rating.newRating.check.text[0], false);
                    ui.rating.newRating.progress.container.velocity('slideDown', {display: 'block', duration: 500});
                    rating.progressVisible = true;
                }
            }
        }, {stripTags: true});

        // Ratings
        var criterias = $('.rating');
        criterias.rating({
            showLabel: false,
            inline: true,
            color: '#c9c9c9',
            colorHover: '#22beef'
        });

        criterias.change(function() {
            if(checkCriteriaComplete())
                setCheckState(ui.rating.newRating.check.criteria[0], true);
            else
                setCheckState(ui.rating.newRating.check.criteria[0], false);
        });

        // Tooltips
        ui.rating.newRating.text.LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Was steht in einer guten Bewertung?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li>* Pro und Contra Stickpunkte</li>' +
            '<li>* Welche Probleme sind aufgetretten?</li>' +
            '<li>* Warum habe ich so bewertet? (Kriterien)</li>' +
            '</ul>' +
            '</div>'
        });


        // TODO: hover und/oder click wird nicht richtig auf den Bewertungen ausgeführt
        ui.rating.newRating.criteria.speed.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Verhältnis zwischen der erreichten und der bestellten Bandbreite</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> 0 bis 40%</li>' +
            '<li><strong>2 Sterne:</strong> 40 bis 55%</li>' +
            '<li><strong>3 Sterne:</strong> 55 bis 70%</li>' +
            '<li><strong>4 Sterne:</strong> 70 bis 85%</li>' +
            '<li><strong>5 Sterne:</strong> 85 bis 100%</li>' +
            '</ul>' +
            '</div>'
        });

        ui.rating.newRating.criteria.availability.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Wie oft tretten Verbindungsprobleme auf?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> Ständig</li>' +
            '<li><strong>2 Sterne:</strong> Häufig</li>' +
            '<li><strong>3 Sterne:</strong> Gelegentlich</li>' +
            '<li><strong>4 Sterne:</strong> Selten</li>' +
            '<li><strong>5 Sterne:</strong> Nie</li>' +
            '</ul>' +
            '</div>'
        });

        ui.rating.newRating.criteria.service.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Wie würden Sie den Service benoten?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> Schlecht</li>' +
            '<li><strong>2 Sterne:</strong> Ausreichend</li>' +
            '<li><strong>3 Sterne:</strong> Befriedigend</li>' +
            '<li><strong>4 Sterne:</strong> Gut</li>' +
            '<li><strong>5 Sterne:</strong> Sehr gut</li>' +
            '</ul>' +
            '</div>'
        });

        ui.rating.newRating.criteria.speechquality.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Wie oft tretten Unterbrechungen bei Telefonaten auf?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> Ständig</li>' +
            '<li><strong>2 Sterne:</strong> Häufig</li>' +
            '<li><strong>3 Sterne:</strong> Gelegentlich</li>' +
            '<li><strong>4 Sterne:</strong> Selten</li>' +
            '<li><strong>5 Sterne:</strong> Nie</li>' +
            '</ul>' +
            '</div>'
        });

        ui.rating.newRating.criteria.streaming.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Wie oft und wie lange tretten Unterbrechungen beim Videostreaming auf?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> Ständig</li>' +
            '<li><strong>2 Sterne:</strong> Oft und lang</li>' +
            '<li><strong>3 Sterne:</strong> Oft und kurz</li>' +
            '<li><strong>4 Sterne:</strong> Selten und kurz</li>' +
            '<li><strong>5 Sterne:</strong> Nie</li>' +
            '</ul>' +
            '</div>'
        });

        ui.rating.newRating.criteria.gaming.next().LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: '<div class="tooltip-menu">' +
            '<h5>Welchen durchschnittlichen Ping erreichen Sie bei Online-Spielen?</h5>' +
            '<ul class="tooltip-rating-list">' +
            '<li><strong>1 Stern:</strong> Über 200</li>' +
            '<li><strong>2 Sterne:</strong> 120 bis 200ms</li>' +
            '<li><strong>3 Sterne:</strong> 80 bis 120ms</li>' +
            '<li><strong>4 Sterne:</strong> 50 bis 80ms</li>' +
            '<li><strong>5 Sterne:</strong> Bis 50ms</li>' +
            '</ul>' +
            '</div>'
        });

        // Submit Button
        ui.rating.newRating.form.submit(function(el) {
            el.preventDefault();

            // hide all dialogs
            ui.rating.modal.submit.missing.hide();
            ui.rating.modal.submit.success.hide();

            handleNewRatingDialog(options.address, false, false);
        });

        getProviderList('DE');
    }


    function renderRatings(ratings, anim) {

        var curRating;
        var src = '';

        for(var i=0; i<ratings.length; i++) {
            curRating = ratings[i];

            src =
                "<section class=\"rating-tile\">" +
                "<div class=\"rt-header\">" +
                "<div>" +
                "<ul class=\"rating-tile-info\">" +
                "<li class=\"rti-col1\">" +
                "<h3>Entfernung</h3>" +
                "<p>"+ curRating.distanceReadable +"</p>" +
                "</li>" +
                "<li class=\"rti-col2\">" +
                "<h3>Erstellt vor</h3>" +
                "<p>" + curRating.readableCreated + "</p>" +
                "</li>" +
                "<li class=\"rti-col3\">" +
                "<h3>Verbindung</h3>" +
                "<p>" + curRating.providerType + "</p>" +
                "</li>" +
                "<li class=\"rti-col4\">" +
                "<h3>" + curRating.streetName + " " + curRating.streetNumber + "</h3>" +
                "<p>" + curRating.providerName + " " + curRating.planName + "</p>" +
                "</li>" +
                "</ul>" +
                "</div>" +
                "</div>" +
                "<div class=\"rt-widget\">" +
                "<div class=\"row\">" +
                "<div class=\"col-sm-6 col-md-6\">" +
                "<ul class=\"list-group list-criteria\">" +
                "<li>" + dRating.parse(curRating.criteria_speed) + "Geschwindigkeit</li>" +
                "<li>" + dRating.parse(curRating.criteria_availability) + "Verfügbarkeit</li>" +
                "<li>" + dRating.parse(curRating.criteria_service) + "Service</li>" +
                "</ul>" +
                "</div>" +
                "<div class=\"col-sm-6 col-md-6\">" +
                "<ul class=\"list-group list-criteria\">" +
                "<li>" + dRating.parse(curRating.criteria_speechquality) + "Sprachqualität</li>" +
                "<li>" + dRating.parse(curRating.criteria_streaming) + "Streaming</li>" +
                "<li>" + dRating.parse(curRating.criteria_gaming) + "Gaming</li>" +
                "</ul>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class=\"rt-body\"><p>" + curRating.text + "</p></div>" +
                "</section>";

            var post = $(src);
            if(anim)
                setTimeout(displayPost, i * 200, post);
            else
                post.show();

            rating.visibleRatings++;

            ui.rating.list.container.append(post);
        }
    }


    function handleNewRatingDialog(userAddress, pressSubmit) {

        // check data
        var formStatus = checkRatingInput();
        var missingAddrInfo = checkAddress(userAddress);
        var missingAddrInfoKeys = Object.keys(missingAddrInfo);

        // when form is filled
        if(formStatus === true) {
            ui.rating.modal.submit.dialog.modal('show');

            if(missingAddrInfoKeys.length > 0) {
                // show missing dialog
                ui.rating.modal.submit.missing.show();

                // set notification for missing address info
                var notification = '';
                for(var i=0; i<missingAddrInfoKeys.length; i++) {
                    notification += '<li style="display: list-item">Füge bitte ' + missingAddrInfo[missingAddrInfoKeys[i]] + ' hinzu</li>';
                }
                ui.rating.modal.submit.notification.html(notification);
                if(pressSubmit)
                    ui.rating.modal.submit.resend.fail();
            } else {

                sendRatingForm(userAddress, 2, function(err, res) {
                    if(err == 'connection error') {
                        ui.rating.modal.submit.resend.fail();
                        ui.rating.modal.submit.notification.html('<li style="display: list-item">Verbindungsfehler! Versuchen Sie es später noch einmal.</li>');
                    }else if(res.message == "rating saved"){
                        // show success dialog and reset form
                        ui.rating.modal.submit.resend.done(function() {
                            ui.rating.modal.submit.missing.velocity('slideUp', {display: 'none', duration: 500});
                            ui.rating.modal.submit.success.velocity('slideDown', {display: 'block', duration: 500});
                            resetRatingForm();
                        });

                    }
                });
            }
        }
    }


    function sendRatingForm(userAddress, counter, callback) {
        $.ajax({
            type: 'POST',
            url: options.baseUrl + '/api/rating',
            dataType: 'json',
            timeout: 5000,
            data: {
                'address' : JSON.stringify(userAddress),
                'provider' : ui.rating.newRating.provider.val(),
                'plan' : ui.rating.newRating.plan.val(),
                'text' : ui.rating.newRating.text.val(),
                'criteria' : {
                    speed: ui.rating.newRating.criteria.speed.rating('val'),
                    availability: ui.rating.newRating.criteria.availability.rating('val'),
                    speechquality: ui.rating.newRating.criteria.speechquality.rating('val'),
                    service: ui.rating.newRating.criteria.service.rating('val'),
                    streaming: ui.rating.newRating.criteria.streaming.rating('val'),
                    gaming: ui.rating.newRating.criteria.gaming.rating('val')
                }
            }
        })
            .done(function(data) {
                callback(null, data);
            })
            .fail(function() {

                if(counter > 0)
                    setTimeout(sendRatingForm, 3000, userAddress, --counter, callback);
                else
                    callback('connection error');
            });
    }


    function convertAddress(srcAddress) {
        var newAddress = {
            streetNumber: '',
            streetName: '',
            zipcode: '',
            countryCode: '',

            country: '',
            state: '',
            city: ''
        };

        if(srcAddress) {
            for (var i = 0; i < srcAddress.address_components.length; i++) {
                switch (srcAddress.address_components[i].types[0]) {
                    case 'street_number':
                        newAddress.streetNumber = srcAddress.address_components[i].long_name;
                        break;
                    case 'route':
                        newAddress.streetName = srcAddress.address_components[i].long_name;
                        break;
                    case 'locality':
                        newAddress.city = srcAddress.address_components[i].long_name;
                        break;
                    case 'administrative_area_level_1':
                        newAddress.state = srcAddress.address_components[i].long_name;
                        break;
                    case 'country':
                        newAddress.countryCode = srcAddress.address_components[i].short_name;
                        newAddress.country = srcAddress.address_components[i].long_name;
                        break;
                    case 'postal_code':
                        newAddress.zipcode = srcAddress.address_components[i].long_name;
                        break;
                }
            }
        }
        return newAddress;
    }


    function checkAddress(address) {
        var status = {};

        if(!address.streetNumber)
            status.streetNumber = 'die Hausnummer';

        if(!address.streetName)
            status.streetName = 'die Straße und Hausnummer';

        if(!address.zipcode)
            status.zipcode = 'die Postleitzahl';

        if(!address.countryCode)
            status.countryCode = 'das Land';

        return status;
    }


    function checkRatingInput() {

        // Check required fields
        var inputError = false;

        if(ui.rating.newRating.provider.val())
            ui.rating.newRating.error.provider.hide();
        else {
            ui.rating.newRating.error.provider.show();
            inputError = true;
        }


        if(rating.leftWords < 1)
            ui.rating.newRating.error.text.hide();
        else {
            ui.rating.newRating.error.text.show();
            inputError = true;
        }


        if(inputError)
            return false;

        return true;
    }


    function resetRatingForm() {
        // select's
        ui.rating.newRating.provider.val('').trigger('chosen:updated');
        ui.rating.newRating.plan.val('').attr('data-placeholder', 'Bitte zuerst Provider auswählen').attr('disabled', true).trigger('chosen:updated');

        // text
        ui.rating.newRating.text.val('');
        ui.rating.newRating.text.trigger('input');

        // progress bar + text
        ui.rating.newRating.progress.text.html("Noch " + rating.totalWordsToWrite +  " Wörter");
        ui.rating.newRating.progress.bar.velocity({ width: '0%' }, {duration: 100});

        // criteria
        // TODO: rating reseten -> Envato Anfrage
        //newRating.criteria.voip.val(0).change();
        //$('#newrating_speechquality').val(1).change();

        // statushaken
        setCheckState(ui.rating.newRating.check.provider[0], false);
        setCheckState(ui.rating.newRating.check.plan[0], false);
        setCheckState(ui.rating.newRating.check.text[0], false);
        setCheckState(ui.rating.newRating.check.criteria[0], false);

        // modal
        ui.rating.modal.submit.geoinput.val(options.formattedAddress);
        ui.rating.modal.submit.resend.resetButton();

        // formerror messages
        ui.rating.newRating.error.provider.hide();
        ui.rating.newRating.error.text.hide();
    }


    function setCheckState(el, state) {
        if(el) {
            if(state === true)
                el.style.display = 'inline-block';
            if(state === false)
                el.style.display = 'none';
        }
    }


    function displayPost(post) {
        post.css({ 'display':'block'});
        post.addClass('magictime spaceInLeft');
    }


    function checkCriteriaComplete() {

        if(ui.rating.newRating.criteria.gaming.rating('val') < 1)
            return false;

        if(ui.rating.newRating.criteria.streaming.rating('val') < 1)
            return false;

        if(ui.rating.newRating.criteria.speechquality.rating('val') < 1)
            return false;

        if(ui.rating.newRating.criteria.availability.rating('val') < 1)
            return false;

        if(ui.rating.newRating.criteria.speed.rating('val') < 1)
            return false;

        return true;
    }


    function getRatingsCount(longitude, latitude, typeFilter, providerFilter, callback) {

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/local/count?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter +
            '&provider=' + providerFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(data) {
                callback(data);
            })
            .fail(function() {
                //setTimeout(getRatingsCount, 3000, longitude, latitude, typeFilter, providerFilter, callback);
                callback();
            });
    }


    function getRatingsForLocation(longitude, latitude, typeFilter, providerFilter, skip, callback) {
        skip = skip || 0 ;

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/local?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter +
            '&provider=' + providerFilter + '&skip=' + skip,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(data) {
                callback(data);
            })
            .fail(function() {
                //setTimeout(getRatingsForLocation, 3000, longitude, latitude, typeFilter, providerFilter, skip, callback);
                callback();
            });
    }


    function setProviderSelect(providerData) {
        if(providerData) {
            var length = providerData.length;
            var out = '';

            for(var i=0; i<length; i++) {
                out += '<option value="' + providerData[i].slug + '">' + providerData[i].name + '</option>';
            }

            ui.rating.newRating.provider.html(out).val('').trigger("chosen:updated");
        }
    }


    function setPlanSelect(planData) {
        if(planData) {
            var length = planData.length;
            var out = '';

            for(var i=0; i<length; i++) {
                out += '<option value="' + planData[i].slug + '">' + planData[i].name + '</option>';
            }

            var text = '';
            if(length == 0)
                text = 'Keine Tarife gefunden';
            else if(length == 1)
                text = '1 Tarif gefunden';
            else
                text = length + ' Tarife gefunden';

            ui.rating.newRating.plan.html(out).attr('data-placeholder', text).val('').removeAttr('disabled').trigger("chosen:updated");
        }
    }


    function getProviderList(country) {
        if(country) {
            $.ajax({
                type: 'GET',
                url: options.baseUrl + '/api/provider/list?country=' + country,
                dataType: 'json',
                timeout: 5000
            })
                .done(function(data) {
                    rating.providerList = data;
                    setProviderSelect(data);
                })
                .fail(function() {
                    //setTimeout(getProviderList, 3000, country);
                });
        }
    }


    function getPlansForProvider(slug, country) {
        if(slug && country) {
            rating.planTimeout = $.ajax({
                type: 'GET',
                url: options.baseUrl + '/api/provider/plans?provider=' + slug + '&country=' + country,
                dataType: 'json',
                timeout: 5000
            })
                .done(function(data) {
                    setPlanSelect(data);
                })
                .fail(function() {
                    //setTimeout(getPlansForProvider, 3000, slug, country);
                });
        }
    }




    // *****************************************************************************************************************
    // GRAPHS
    // *****************************************************************************************************************

    var graphs = {
        providerTargetClicked: false,
        topList: [],
        topListVisible: false,
        topListActiveProvider: null
    };


    ui.graphs = {
        toplist: {
            help: $('#toplist-help'),
            helptext: $('#toplist-helptext'),
            body: $('#toplist-body')
        },

        topplans: {
            body: $('#topplans-body')
        },

        provider: {
            container: $('#provider-container'),
            title: $('#provider-title'),
            filter: $('#provider-filter'),
            target: $('#provider-target'),

            criteria: {
                speed: {
                    id: 'provider-speed',
                    info: $('#provider-speed-info'),
                    gauge: null
                },
                availability: {
                    id: 'provider-availability',
                    info: $('#provider-availability-info'),
                    gauge: null
                },
                service: {
                    id: 'provider-service',
                    info: $('#provider-service-info'),
                    gauge: null
                },
                speechquality: {
                    id: 'provider-speechquality',
                    info: $('#provider-speechquality-info'),
                    gauge: null
                },
                streaming: {
                    id: 'provider-streaming',
                    info: $('#provider-streaming-info'),
                    gauge: null
                },
                gaming: {
                    id: 'provider-gaming',
                    info: $('#provider-gaming-info'),
                    gauge: null
                }
            }
        },

        company: {
            container: $('#company-container'),

            fields: {
                name: $('#company-name'),
                founded: $('#company-founded'),
                location: $('#company-location'),
                employees: $('#company-employees'),
                salesvolume: $('#company-salesvolume'),
                url: $('#company-url')
            }
        },

        generic: {
            gauge: {
                speed: {
                    id: 'gauge-speed',
                    info: $('#gauge-speed-info'),
                    el: null
                },
                availability: {
                    id: 'gauge-availability',
                    info: $('#gauge-availability-info'),
                    el: 'null'
                },
                service: {
                    id: 'gauge-service',
                    info: $('#gauge-service-info'),
                    el: null
                },
                speechquality: {
                    id: 'gauge-speechquality',
                    info: $('#gauge-speechquality-info'),
                    el: null
                },
                streaming: {
                    id: 'gauge-streaming',
                    info: $('#gauge-streaming-info'),
                    el: null
                },

                gaming: {
                    id: 'gauge-gaming',
                    info: $('#gauge-gaming-info'),
                    el: null
                }
            }
        }
    };


    function initGraphs() {

        // render generic & provider gauges
        initGenericGages();
        initProviderGages();

        getGeneric(options.address.longitude, options.address.latitude, options.typeFilter, function(result) {
            setGenericGages(result.data);
        });

        // get & render toplist
        getTopList(options.address.longitude, options.address.latitude, options.typeFilter, function(list) {
            graphs.topList = list.data;

            // render toplist table
            addTopListEntries(graphs.topList);

            // add click trigger for details
            $('.btn-details').click(function() {
                var providerSlug = $(this).attr('data-provider');

                if(!graphs.providerTargetClicked) {
                    if(graphs.topListActiveProvider != providerSlug) {
                        triggerProviderDetails(providerSlug);
                    }

                    scrollToProviderDetails();
                    graphs.providerTargetClicked = true;
                } else
                    triggerProviderDetails(providerSlug);


            });

            // add click trigger for homepage
            $('.btn-homepage').click(function() {
                popup($(this).attr('data-url'));
            });


            // preselection via url-param
            if(options.providerFilter) {
                triggerProviderDetails(options.providerFilter);
            } else {
                // select best provider
                var ratingsWithRating = 0;
                for(var i=0; i<graphs.topList.length; i++) {
                    if(graphs.topList[i].avg_total > 0)
                        ratingsWithRating++;
                }


                if(ratingsWithRating)
                    triggerProviderDetails(graphs.topList[0].provider.slug);
                else {
                    // hide table & show help us
                    ui.graphs.toplist.body.hide();
                    ui.graphs.toplist.help.show();

                    setTopListHelpText(options.typeFilter);
                }
            }
        });
    }


    function initGenericGages() {
        var defaultOptions = {
            value: 0,
            min: 0,
            max: 5,
            refreshAnimationTime: 50,
            startAnimationTime: 50,

            relativeGaugeSize: true,
            titleFontColor: '#4d4d4d',
            gaugeWidthScale: 0.5,
            showMinMax: false,
            levelColorsGradient: false,
            levelColors: ['#ff7b76', '#ffc100', '#a2d200']
        };

        ui.graphs.generic.gauge.speed.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.speed.id,
            title: "Geschwindigkeit"
        }, defaultOptions));

        ui.graphs.generic.gauge.availability.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.availability.id,
            title: "Verfügbarkeit"
        }, defaultOptions));

        ui.graphs.generic.gauge.service.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.service.id,
            title: "Service"
        }, defaultOptions));

        ui.graphs.generic.gauge.speechquality.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.speechquality.id,
            title: "Sprachqualität"
        }, defaultOptions));

        ui.graphs.generic.gauge.streaming.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.streaming.id,
            title: "Streaming"
        }, defaultOptions));

        ui.graphs.generic.gauge.gaming.el = new JustGage($.extend({
            id: ui.graphs.generic.gauge.gaming.id,
            title: "Gaming"
        }, defaultOptions));
    }


    function initProviderGages() {
        var defaultOptions = {
            value: 0,
            min: 0,
            max: 5,
            titleFontColor: '#7d7264',
            gaugeWidthScale: 0.5,
            showMinMax: false,
            levelColorsGradient: false,
            levelColors: ['#ff7b76', '#ffc100', '#a2d200'],
            title: ' '
        };

        var criteria;
        for(var key in ui.graphs.provider.criteria) {
            if (ui.graphs.provider.criteria.hasOwnProperty(key)) {
                criteria = ui.graphs.provider.criteria[key];

                criteria.gauge = new JustGage($.extend({
                    id: criteria.id
                }, defaultOptions));
            }
        }
    }


    function setGenericGages(values) {

        if(values) {
            if(values.avg_speed > 0) {
                ui.graphs.generic.gauge.speed.el.refresh(roundTo1(values.avg_speed));
                ui.graphs.generic.gauge.speed.info.html(values.speed_text);
            }

            if(values.avg_availability > 0) {
                ui.graphs.generic.gauge.availability.el.refresh(roundTo1(values.avg_availability));
                ui.graphs.generic.gauge.availability.info.html(values.availability_text);
            }


            if(values.avg_service > 0) {
                ui.graphs.generic.gauge.service.el.refresh(roundTo1(values.avg_service));
                ui.graphs.generic.gauge.service.info.html(values.service_text);
            }


            if(values.avg_speechquality > 0) {
                ui.graphs.generic.gauge.speechquality.el.refresh(roundTo1(values.avg_speechquality));
                ui.graphs.generic.gauge.speechquality.info.html(values.speechquality_text);
            }


            if(values.avg_streaming > 0) {
                ui.graphs.generic.gauge.streaming.el.refresh(roundTo1(values.avg_streaming));
                ui.graphs.generic.gauge.streaming.info.html(values.streaming_text);
            }


            if(values.avg_gaming > 0) {
                ui.graphs.generic.gauge.gaming.el.refresh(roundTo1(values.avg_gaming));
                ui.graphs.generic.gauge.gaming.info.html(values.gaming_text);
            }
        }
    }


    function setProviderDetails(providerEntry) {

        if(providerEntry) {

            globals.selectedProvider  = providerEntry.provider.slug;

            // title
            ui.graphs.provider.title.html(providerEntry.provider.name);

            // company info
            if(Object.keys(providerEntry.provider.business).length) {
                resetCompanyInfo();
                setCompanyInfo(providerEntry.provider.business);
                ui.graphs.company.container.show();
            } else
                ui.graphs.company.container.hide();


            // refresh gages
            ui.graphs.provider.criteria.speed.gauge.refresh(roundTo1(providerEntry.avg_speed));
            ui.graphs.provider.criteria.availability.gauge.refresh(roundTo1(providerEntry.avg_availability));
            ui.graphs.provider.criteria.service.gauge.refresh(roundTo1(providerEntry.avg_service));
            ui.graphs.provider.criteria.speechquality.gauge.refresh(roundTo1(providerEntry.avg_speechquality));
            ui.graphs.provider.criteria.streaming.gauge.refresh(roundTo1(providerEntry.avg_streaming));
            ui.graphs.provider.criteria.gaming.gauge.refresh(roundTo1(providerEntry.avg_gaming));


            // criteria infoboxes
            if(providerEntry.speed_text)
                ui.graphs.provider.criteria.speed.info.html(providerEntry.speed_text);

            if(providerEntry.availability_text)
                ui.graphs.provider.criteria.availability.info.html(providerEntry.availability_text);

            if(providerEntry.service_text)
                ui.graphs.provider.criteria.service.info.html(providerEntry.service_text);

            if(providerEntry.speechquality_text)
                ui.graphs.provider.criteria.speechquality.info.html(providerEntry.speechquality_text);

            if(providerEntry.streaming_text)
                ui.graphs.provider.criteria.streaming.info.html(providerEntry.streaming_text);

            if(providerEntry.gaming_text)
                ui.graphs.provider.criteria.gaming.info.html(providerEntry.gaming_text);

            // get & render top plans
            getTopPlans(options.address.longitude, options.address.latitude, providerEntry.provider.slug, function(result) {

                // clear list
                ui.graphs.topplans.body.children("div:not(.head)").remove();

                addTopPlansEntries(providerEntry, result.data);

                // add button events
                $('.btn-availability').click(function() {
                    popup($(this).attr('data-url'));
                });

                $('.btn-affiliate').click(function() {
                    popup($(this).attr('data-url'));
                });
            });

        }
    }


    function triggerProviderDetails(providerSlug) {

        var providerEntry = filterTopListBySlug(providerSlug);

        // check if provider is available
        if(providerEntry) {

            // toogle provider tile
            if(!graphs.topListVisible) {
                ui.graphs.provider.container.velocity('slideDown',
                    {
                        duration: 150,
                        complete: function() {
                            setProviderDetails(providerEntry)
                        }
                    });
                graphs.topListVisible = true;
                graphs.topListActiveProvider = providerSlug;
            }
            else {
                if(graphs.topListActiveProvider == providerSlug) {
                    ui.graphs.provider.container.velocity('slideUp', { duration: 150});
                    graphs.topListVisible = false;
                    graphs.topListActiveProvider = null;
                    ui.graphs.provider.filter.val('');
                } else {
                    setProviderDetails(providerEntry);
                    graphs.topListActiveProvider = providerSlug;
                }
            }
        }
    }


    function setCompanyInfo(company) {
        if(company.name)
            ui.graphs.company.fields.name.html(company.name);

        if(company.founded)
            ui.graphs.company.fields.founded.html(company.founded);

        if(company.location)
            ui.graphs.company.fields.location.html(company.location);

        if(company.employees)
            ui.graphs.company.fields.employees.html(company.employees);

        if(company.salesVolume)
            ui.graphs.company.fields.salesvolume.html(company.salesVolume);

        if(company.url && company.url.text) {
            var link = company.url.text;

            if(company.url.goto)
                link = '<a href="' + company.url.goto + '">' + company.url.text + '</a>';

            ui.graphs.company.fields.url.html(link);
        }
    }


    function resetCompanyInfo() {

        for(var field in ui.graphs.company.fields) {
            if (ui.graphs.company.fields.hasOwnProperty(field)) {
                ui.graphs.company.fields[field].html('');
            }
        }
    }


    function addTopPlansEntries(topListEntry, planEntries) {

        var entry, plan, out = '';
        var itemCount = planEntries.length;

        for(var i=0; i<itemCount; i++) {
            entry = planEntries[i];
            plan = findPlanBySlug(topListEntry.provider.plans, entry._id.plan);

            if(entry._id.plan && plan && entry.rating > 0) {

                var availabilityButton = '',
                    affiliateButton = '';

                if((plan.hasOwnProperty('availabilityUrl') && plan.availabilityUrl)
                    || (topListEntry.provider.hasOwnProperty('availabilityUrl') && topListEntry.provider.availabilityUrl))
                    availabilityButton = '<button class="btn btn-default btn-availability" ontouchend="this.onclick=touchfix" data-url="' + options.baseUrl
                    + '/redirect/availability/' + topListEntry.provider.slug + '/' + plan.slug + '"><i class="fa fa-plug"></i> Verfügbarkeitscheck</button>';

                if((plan.hasOwnProperty('affiliateUrl') && plan.affiliateUrl)
                    || (topListEntry.provider.hasOwnProperty('affiliateUrl') && topListEntry.provider.affiliateUrl))
                    affiliateButton = '<button class="btn btn-default btn-affiliate" ontouchend="this.onclick=touchfix" data-url="' + options.baseUrl
                    + '/redirect/plan/' + topListEntry.provider.slug + '/' + plan.slug + '"><i class="fa fa-plus-square"></i> Zum Tarif</button>';


                out += '<div>' +
                '<div class="row-hide"><div class="th">#</div><div class="cnt">' + (i+1) + '</div></div>' +
                '<div><div class="th">Platz ' + (i+1) + '</div><div class="cnt">' + plan.name + '</div></div>' +
                '<div class="center"><div class="th">Bewertung</div><div class="cnt">' + roundTo1(entry.rating) + '</div></div>' +
                '<div class="right"><div class="th">Mehr</div><div class="cnt cnt-btn">' + availabilityButton + ' ' + affiliateButton + '</div></div>' +
                '</div>';
            }

        }

        ui.graphs.topplans.body.append(out);
    }


    function addTopListEntries(entries) {
        var out = '';

        var itemCount = entries.length;
        for(var i=0; i<itemCount; i++) {

            if(entries[i].avg_total > 0) {
            var affiliateButton = '';
            if(entries[i].provider.hasOwnProperty('affiliateUrl') && entries[i].provider.affiliateUrl)
                affiliateButton = '<button type="button" class="btn btn-default btn-homepage" ontouchend="this.onclick=touchfix" data-url="' + options.baseUrl
                + '/redirect/provider/' + entries[i].provider.slug + '"><i class=\"fa fa-home\"></i> Homepage</button>';


            out += "<div>" +
            '<div class="row-hide"><div class="th">#</div><div class="cnt">' + (i+1) + '</div></div>' +
            '<div><div class="th">Platz ' + (i+1) + '</div><div class="cnt">' + entries[i].provider.name + '</div></div>' +
            '<div class="center"><div class="th">Bewertung</div><div class="cnt">' + translateType(entries[i].provider.type) + '</div></div>' +
            '<div class="center"><div class="th">Bewertung</div><div class="cnt">' + entries[i].avg_total + '</div></div>' +
            '<div class="right"><div class="th">Mehr</div><div class="cnt cnt-btn">' + affiliateButton +
            " <button type=\"button\" class=\"btn btn-default btn-details\" ontouchend=\"this.onclick=fix\" data-provider=\"" + entries[i]._id.slug + "\"><i class=\"fa fa-line-chart\"></i> Details</button>" + '</div></div>' +
            "</div>";
            }
        }

        ui.graphs.toplist.body.append(out);
    }


    function getGeneric(longitude, latitude, typeFilter, callback) {

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/generic?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(generic) {
                callback(generic);
            })
            .fail(function() {
                callback();
            });

    }


    function getTopList(longitude, latitude, typeFilter, callback) {

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/toplist?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(topList) {
                callback(topList);
            })
            .fail(function() {
                callback([]);
            });
    }


    function getTopPlans(longitude, latitude, providerFilter, callback) {

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/topplans?long=' + longitude + '&lat=' + latitude + '&provider=' + providerFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(topPlans) {
                callback(topPlans);
            })
            .fail(function() {
                callback([]);
            });
    }


    function filterTopListBySlug(providerSlug) {

        var itemCount = graphs.topList.length;
        for(var i=0; i<itemCount; i++) {
            if(graphs.topList[i]._id.slug == providerSlug) {
                return graphs.topList[i];
            }
        }

        return null;
    }


    function findPlanBySlug(plansArr, planSlug) {

        if(plansArr && planSlug) {

            var itemCount = plansArr.length;
            for(var i=0; i<itemCount; i++) {
                if(plansArr[i].slug == planSlug)
                    return plansArr[i];
            }
        }
        return null;
    }


    function setTopListHelpText(typeFilter) {
        var helpText = '';
        if(typeFilter == 'dsl')
            helpText = 'über <strong>DSL-Provider</strong> ';
        else if(typeFilter == 'mobile')
            helpText = 'über <strong>UMTS/LTE-Provider</strong> ';
        else if(typeFilter == 'hotspot')
            helpText = 'über <strong>WLAN-Hotspot-Provider</strong> ';

        ui.graphs.toplist.helptext.html(helpText);

    }

    function scrollToProviderDetails() {
        $.smoothScroll({
            scrollTarget: ui.graphs.provider.target
        });
    }


    function translateType(typeId) {
        if(typeId == 'dsl')
            return 'DSL';
        else if(typeId == 'mobile')
            return 'UMTS/LTE';
        else if(typeId == 'hotspot')
            return 'Hotspot';
    }

    // *****************************************************************************************************************
    // MAPS
    // *****************************************************************************************************************
    // <editor-fold desc="Maps">

    var maps = {
        gMap: {
            id: 'map-canvas',
            map: null
        }
    };

    ui.maps = {
        modal: {
            dialog: $('#modalMapRatings'),
            title: $('#modalMapRatingsTitle'),
            body: $('#modalMapRatingsBody')
        }
    };

    function initMaps() {
        initGoogleMap();

        getMarkers(options.address.latitude, options.address.longitude, options.typeFilter, '', function(markers) {

            var markerCount = markers.length;
            for(var i=0; i<markerCount; i++) {
                setTimeout(dropMarker, i * 200, markers[i]._id.coordinates[1], markers[i]._id.coordinates[0], markers[i].count,
                    markers[i].streetName, markers[i].streetNumber);

            }

            setTimeout(function() {
                var title = options.address.streetName + (options.address.streetNumber ? ' ' + options.address.streetNumber : '');

                new MarkerWithLabel({
                    map: maps.gMap.map,
                    icon: options.baseUrl + '/themes/default/images/maps-marker-10px.png',
                    position: new google.maps.LatLng(options.address.latitude, options.address.longitude),
                    title: title
                });
            }, (markerCount+1) * 200);
        });
    }


    function initGoogleMap() {

        var style = [
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    { visibility: "on" }
                ]
            }
        ];

        var styledMap = new google.maps.StyledMapType(style, { name: "Styled Map" });

        var mapOptions = {
            center: new google.maps.LatLng(options.address.latitude, options.address.longitude),
            zoom: 16,

            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            overviewMapControl: false,

            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }

        };

        maps.gMap.map = new google.maps.Map(document.getElementById(maps.gMap.id), mapOptions);
        maps.gMap.map.mapTypes.set('map_style', styledMap);
        maps.gMap.map.setMapTypeId('map_style');

    }


    function dropMarker(lat, long, count, streetName, streetNumber) {
        if(lat && long) {
            var content = '<i class="fa fa-star-half-o fa-lg"></i>';

            if(count > 1)
                content += ' ' + count;

            var title = streetName + ' ' + streetNumber;

            var marker = new MarkerWithLabel({
                map: maps.gMap.map,
                icon: options.baseUrl + '/themes/default/images/maps-pointer-13px.png',
                position: new google.maps.LatLng(lat, long),
                labelAnchor: new google.maps.Point(7, 41),
                labelContent: content,
                labelInBackground: true,
                labelVisible: true,
                labelClass: "mapMarker",
                title: title
            });

            google.maps.event.addListener(marker, 'click', function() {
                showModal(lat, long, title);
                return false;
            });

        }
    }


    function showModal(lat, long, title) {
        // reset body
        ui.maps.modal.body.html('');
        ui.maps.modal.title.html(title);
        ui.maps.modal.dialog.modal('show');

        getModalRatings(lat, long, options.typeFilter, '', function(ratings) {

            var curRating;
            var newRating = '';
            var ratingsCount = ratings.length;
            for(var i=0; i<ratingsCount; i++) {
                curRating = ratings[i];

                newRating +=
                    "<section class=\"rating-tile\">" +
                    "<div class=\"rt-header\">" +
                    "<div>" +
                    "<ul class=\"rating-tile-info\">" +
                    "<li class=\"rti-col1\">" +
                    "<h3>Erstellt vor</h3>" +
                    "<p>" + curRating.readableCreated + "</p>" +
                    "</li>" +
                    "<li class=\"rti-col3\">" +
                    "<h3>Verbindung</h3>" +
                    "<p>" + curRating.providerType + "</p>" +
                    "</li>" +
                    "<li class=\"rti-col4\">" +
                    "<h3>Provider / Tarif</h3>" +
                    "<p class=\"big\">" + curRating.providerName + " " + curRating.planName + "</p>" +
                    "</li>" +
                    "</ul>" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"rt-widget\">" +
                    "<div class=\"row\">" +
                    "<div class=\"col-md-6\">" +
                    "<ul class=\"list-group list-criteria\">" +
                    "<li>" + dRating.parse(curRating.criteria_speed) + "Geschwindigkeit</li>" +
                    "<li>" + dRating.parse(curRating.criteria_availability) + "Verfügbarkeit</li>" +
                    "<li>" + dRating.parse(curRating.criteria_service) + "Service</li>" +
                    "</ul>" +
                    "</div>" +
                    "<div class=\"col-md-6\">" +
                    "<ul class=\"list-group list-criteria\">" +
                    "<li>" + dRating.parse(curRating.criteria_speechquality) + "Sprachqualität</li>" +
                    "<li>" + dRating.parse(curRating.criteria_streaming) + "Streaming</li>" +
                    "<li>" + dRating.parse(curRating.criteria_gaming) + "Gaming</li>" +
                    "</ul>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"rt-body\"><p>" + curRating.text + "</p></div>" +
                    "</section>";


            }

            ui.maps.modal.body.append(newRating);
        });
    }


    function getModalRatings(latitude, longitude, typeFilter, providerFilter, callback) {
        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/mapratings?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter +
            '&provider=' + providerFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(result) {
                callback(result.data);
            })
    }


    function getMarkers(latitude, longitude, typeFilter, providerFilter, callback) {
        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating/mapmarkers?long=' + longitude + '&lat=' + latitude + '&type=' + typeFilter +
            '&provider=' + providerFilter,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(result) {
                callback(result.data);
            })
    }

    // </editor-fold>
    // *****************************************************************************************************************
    // NEWSLETTER
    // *****************************************************************************************************************
    // <editor-fold desc="Newsletter">

    ui.newsletter = {
        form: $('#newsletter-form'),
        email: $('#newsletter-email'),
        submit: $('#newsletter-submit'),
        options: {
            container: $('#newsletter-options'),
            alarm: $('#nlo-alarm'),
            newsletter: $('#nlo-newsletter')
        },
        modals: {
            success: $('#modal-newsletter-success'),
            input: $('#modal-newsletter-input')
        },
        messages: {
            formatError: $('#mni-formaterror'),
            missingOption: $('#mni-missingoption'),
            connectionError: $('#mni-connectionerror')
        },
        input: {
            email: $('#mni-email'),
            submit: $('#mni-submit'),
            contentSubmit: $('#mni-content-submit'),
            alarm: $('#mni-alarm'),
            newsletter: $('#mni-newsletter')
        }
    };

    function initNewsletter() {
        // content button - only for small devices
        ui.newsletter.input.contentSubmit.click(function(el) {
            el.preventDefault();
            showNewsletterModal('', true, true, '', '');
            return false;
        });

        // modal form
        ui.newsletter.input.submit.click(function (el) {
            el.preventDefault();

            ui.newsletter.input.submit.resetButton();
            ui.newsletter.input.submit.rotate();

            var email = ui.newsletter.input.email.val();
            var alarmChecked = ui.newsletter.input.alarm.prop('checked');
            var newsletterChecked = ui.newsletter.input.newsletter.prop('checked');

            submitNewsletterForm(email, alarmChecked, newsletterChecked, function (error) {
                if (!error) {
                    ui.newsletter.input.submit.done(function() {
                        ui.newsletter.modals.input.modal('hide');
                        ui.newsletter.modals.success.modal('show');
                        resetNewsletterFields();
                    });
                } else if (error == 'connection error') {
                    ui.newsletter.input.submit.fail();
                    displayNewsletterErrors(false, false, true);
                } else {
                    ui.newsletter.input.submit.fail();
                    var emailMessage = false,
                        optionMessage = false;

                    if (error.hasOwnProperty('invalid email'))
                        emailMessage = true;

                    if (error.hasOwnProperty('missing option'))
                        optionMessage = true;

                    displayNewsletterErrors(emailMessage, optionMessage);
                }
            });
            return false;
        });

        // extern form
        ui.newsletter.form.submit(function (el) {
            el.preventDefault();

            var email = ui.newsletter.email.val();
            var alarmChecked = ui.newsletter.options.alarm.prop('checked');
            var newsletterChecked = ui.newsletter.options.newsletter.prop('checked');

            submitNewsletterForm(email, alarmChecked, newsletterChecked, function (error) {
                if (!error) {
                    ui.newsletter.modals.success.modal('show');
                    resetNewsletterFields();
                } else if (error == 'connection error') {
                    showNewsletterModal(email, alarmChecked, newsletterChecked, false, false, true);
                } else {
                    var emailMessage = false,
                        optionMessage = false;

                    if (error.hasOwnProperty('invalid email'))
                        emailMessage = true;

                    if (error.hasOwnProperty('missing option'))
                        optionMessage = true;

                    showNewsletterModal(email, alarmChecked, newsletterChecked, emailMessage, optionMessage, false);
                }
            });
            return false;
        });
    }


    function displayNewsletterErrors(emailMessage, optionMessage, connectionMessage) {

        // check email
        if(emailMessage)
            ui.newsletter.messages.formatError.show();
        else
            ui.newsletter.messages.formatError.hide();

        // check options
        if(optionMessage)
            ui.newsletter.messages.missingOption.show();
        else
            ui.newsletter.messages.missingOption.hide();

        // check connection
        if(connectionMessage)
            ui.newsletter.messages.connectionError.show();
        else
            ui.newsletter.messages.connectionError.hide();
    }


    function showNewsletterModal(email, alarmChecked, newsletterChecked, emailMessage, optionMessage, connectionMessage) {

        // set input values
        ui.newsletter.input.alarm.prop('checked', alarmChecked);
        ui.newsletter.input.newsletter.prop('checked', newsletterChecked);
        ui.newsletter.input.email.val(email);

        // show errors
        displayNewsletterErrors(emailMessage, optionMessage, connectionMessage);

        ui.newsletter.modals.input.modal('show');
    }

    function submitNewsletterForm(email, alarmChecked, newsletterChecked, callback) {

        var validationErrors = checkNewsletterValues(email, alarmChecked, newsletterChecked);
        if(validationErrors.totalErrors > 0) {
            callback(validationErrors);
            return;
        }

        sendNewsletterForm(options.address.longitude, options.address.latitude, options.address.streetName,
            options.address.streetNumber, options.address.zipcode, options.address.city, email, alarmChecked,
            newsletterChecked,
            function(error, status) {

                if(error || !status)
                    callback(error);
                else if(status.message == 'subscription saved') {
                    callback();
                }
            }
        );
    }

    function sendNewsletterForm(longitude, latitude, streetName, streetNumber, zipCode, city, email, alarmActive, newsletterActive, callback) {
        $.ajax({
            type: 'POST',
            url: options.baseUrl + '/api/newsletter/subscribe',
            dataType: 'json',
            timeout: 5000,
            data: {
                long: longitude,
                lat: latitude,
                streetName: streetName,
                streetNumber: streetNumber,
                zipCode: zipCode,
                city: city,

                email: email,
                alarm: alarmActive,
                newsletter: newsletterActive
            }
        })
            .done(function(status) {
                callback(null, status);
            })
            .fail(function() {
                callback('connection error');
            });
    }

    function checkNewsletterValues(email, alarmChecked, newsletterChecked) {
        var errors = {
            totalErrors: 0
        };

        // check email field
        if(!email) {
            errors['missing email'] = true;
            errors.totalErrors++;
        }

        // verify email
        if(!validateEmail(email)) {
            errors['invalid email'] = true;
            errors.totalErrors++;
        }

        // check selection
        if(!alarmChecked && !newsletterChecked) {
            errors['missing option'] = true;
            errors.totalErrors++;
        }

        return errors;
    }


    function resetNewsletterFields() {
        ui.newsletter.email.val('');
    }

    // </editor-fold>
    // *****************************************************************************************************************
    // SIDEBAR
    // *****************************************************************************************************************
    // <editor-fold desc="Sidebar">
    ui.sidebar = {
        id: 'sidebar',

        writeRating: {
            button: $('.write-rating'),
            target: '#write-rating-target'
        }
    };

    function initSidebar() {
        // fixed sidebar
        $('#' + ui.sidebar.id).sticky({topSpacing: 30, bottomSpacing: 237});

        // smooth scrolling for 'bewertung schreiben' button
        ui.sidebar.writeRating.button.click(function(e) {
            e.preventDefault();
            $.smoothScroll({
                scrollTarget: ui.sidebar.writeRating.target
            });
            return false;
        });
    }

    // </editor-fold>
    // *****************************************************************************************************************
    // SOCIAL
    // *****************************************************************************************************************
    // <editor-fold desc="Social">
    ui.social = {
        button : {
            facebook: $('.social-fb '),
            googleplus: $('.social-gplus'),
            twitter: $('.social-twitter '),
            linkedin: $('.social-linkedin'),
            digg: $('.social-digg '),
            xing: $('.social-xing'),
            link: $('.social-link '),
            email: $('.social-email')
        },

        modal : {
            facebook: $('#social-modal-fb'),
            googleplus: $('#social-modal-gplus'),
            twitter: $('#social-modal-twitter'),
            link: {
                modal: $('#social-modal-link'),
                text: $('#social-link-text')
            },
            email: {
                modal: $('#social-modal-email'),
                messages: {
                    container: $('#sme-messages'),
                    formaterror: $('#sme-formaterror'),
                    connectionerror: $('#sme-connectionerror')
                },
                from: $('#sme-from'),
                email: $('#sme-email'),
                submit: $('#sme-submit')
            },
            emailSuccess: {
                modal: $('#social-modal-email-success')
            }
        }
    };

    function initSocial() {
        ui.social.button.facebook.click(function() {
            ui.social.modal.facebook.modal('show');
            return false;
        });

        ui.social.button.googleplus.click(function() {
            ui.social.modal.googleplus.modal('show');
            return false;
        });

        ui.social.button.twitter.click(function() {
            ui.social.modal.twitter.modal('show');
            return false;
        });

        ui.social.button.link.click(function() {
            ui.social.modal.link.text.val(getPageUrl());
            ui.social.modal.link.modal.modal('show');
            return false;
        });

        // email form & send button
        ui.social.button.email.click(function() {
            ui.social.modal.email.modal.modal('show');
            ui.social.modal.email.submit.resetButton();
            return false;
        });

        ui.social.modal.email.submit.click(function(el) {
            el.preventDefault();
            onSocialEmailSubmit();
        });
    }


    function onSocialEmailSubmit() {
        var from = ui.social.modal.email.from.val();
        var email = ui.social.modal.email.email.val();
        var url = getPageUrl();

        ui.social.modal.email.submit.resetButton();
        ui.social.modal.email.submit.rotate();

        // reset messages
        ui.social.modal.email.messages.container.hide();
        ui.social.modal.email.messages.formaterror.hide();
        ui.social.modal.email.messages.connectionerror.hide();


        if(!email || !validateEmail(email)) {
            ui.social.modal.email.messages.container.show();
            ui.social.modal.email.messages.formaterror.show();
            ui.social.modal.email.submit.fail();
            return;
        }

        $.ajax({
            type: 'POST',
            url: options.baseUrl + '/api/social/email',
            dataType: 'json',
            timeout: 5000,
            data: {
                from: from,
                email: email,
                url: url,
                address: options.address
            }
        })
            .done(function(status) {
                ui.social.modal.email.from.val('');
                ui.social.modal.email.email.val('');
                ui.social.modal.email.submit.done();
                ui.social.modal.email.modal.modal('hide');
                ui.social.modal.emailSuccess.modal.modal('show');

            })
            .fail(function() {
                ui.social.modal.email.messages.container.show();
                ui.social.modal.email.messages.connectionerror.show();
                ui.social.modal.email.submit.fail();
            });

    }

    // </editor-fold>
    // *****************************************************************************************************************
    // GLOBAL
    /// *****************************************************************************************************************

    function popup(url) {
        window.open(url,'_blank');
    }


    function roundTo1(value) {
        return Math.round(value * 10) / 10;
    }


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function getPageUrl() {
        var typeFilter = options.typeFilter;
        var providerFilter = globals.selectedProvider;

        return options.baseUrl + '/check/' + encodeURI(options.formattedAddress) + '?' +
            (typeFilter ? 'type=' + typeFilter  : '') +
            (typeFilter && providerFilter ? '&' : '') +
            (providerFilter ? 'provider=' + providerFilter : '');
    }


    function setTypePills(type) {
        if(type == 'dsl' || type == 'mobile' || type == 'hotspot')
            ui.global.typePills[type][0].classList.add('pill-active');
        else
            ui.global.typePills['all'][0].classList.add('pill-active');
    }

    function handleFeedbackOverlay(visible) {
        if(visible) {

            setTimeout( function() {
                $.smoothScroll({
                    scrollTarget: ui.global.showFeedbackTarget,
                    afterScroll: function() {
                        $('.expose').expose();
                    }
                });
            }, 1500);
        }
    }

    function handleNewsletterPopup(visible) {
        if(visible) {
            showNewsletterModal('', true, true, '', '');
        }
    }

    return init;
});