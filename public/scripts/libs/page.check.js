
define(['countable'], function(Countable) {

    var options = {
        baseUrl: '',
        address: {},
        formattedAddress: '',
        typeFilter: '',
        providerFilter: '',
        showNewsletter: false,
        showRating: ''
    };

    var globals = {
        selectedProvider: ''
    };
    var ui = {
        global: {
            typePills : {
                all: vanilla.byId('type-all'),
                dsl: vanilla.byId('type-dsl'),
                mobile: vanilla.byId('type-mobile'),
                hotspot: vanilla.byId('type-hotspot')
            },

            showFeedbackTarget: '#footer'
        }
    };


    var init = function(_options) {
        options = _options;

        globals.selectedProvider = options.providerFilter;

        setTypePills(options.typeFilter);

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
        leftWords: 10,
        totalWordsToWrite: 10,
        planTimeout: null,
        progressVisible: false,
        totalRatings: 0,
        visibleRatings: 0
    };


    ui.rating = {

        list: {
            counter: vanilla.byId('rating-counter'),
            container: vanilla.byId('rating-container'),
            more: vanilla.byId('rating-more')
        },

        modal : {
            reset: {
                dialog: vanilla.byId('modalInputReset'),
                delete: vanilla.byId('modalInputReset-delete')
            },
            submit: {
                dialog: vanilla.byId('modalRatingSubmit'),
                resend: vanilla.byId('modalRatingSubmit-resend'),
                missingform: vanilla.byId('modalRatingSubmit-missingform'), // TODO; unbenuzt?
                geoinput: vanilla.byId('modalRatingSubmit-geoinput'),
                notification: vanilla.byId('modalRatingSubmit-notification'),

                missing: vanilla.byId('modalRatingSubmit-missing'),
                success: vanilla.byId('modalRatingSubmit-success'),

                alarm: vanilla.byId('mrs-alarm'),
                forum: vanilla.byId('mrs-forum'),
                close: vanilla.byClass('mrs-close')
            }
        },

        newRating : {
            form: vanilla.byId('newrating'),
            provider: vanilla.byId('newrating_provider'),
            plan: vanilla.byId('newrating_plan'),
            text: vanilla.byId('newrating_text'),
            tos: vanilla.byId('newrating-tos'),
            progress: {
                container: vanilla.byId('newrating_progress'),
                text: vanilla.byId('newrating_progresstext'),
                bar: vanilla.byId('newrating_progressbar')
            },
            error: {
                provider: vanilla.byId('newrating-provider-error'),
                text: vanilla.byId('newrating-text-error'),
                tos: vanilla.byId('newrating-tos-error')
            },
            criteria: {
                container: vanilla.byId('newrating_criteria'),
                speed: vanilla.byId('newrating_speed'),
                availability: vanilla.byId('newrating_availability'),
                service: vanilla.byId('newrating_service'),
                speechquality: vanilla.byId('newrating_speechquality'),
                streaming: vanilla.byId('newrating_streaming'),
                gaming: vanilla.byId('newrating_gaming')
            },
            tooltip: {
                rating: vanilla.byId('tooltip-rating'),
                speed: vanilla.byId('tooltip-speed'),
                availability: vanilla.byId('tooltip-availability'),
                service: vanilla.byId('tooltip-service'),
                speechquality: vanilla.byId('tooltip-speechquality'),
                streaming: vanilla.byId('tooltip-streaming'),
                gaming: vanilla.byId('tooltip-gaming')
            },
            check: {
                provider: vanilla.byId('newrating_check_provider'),
                plan: vanilla.byId('newrating_check_plan'),
                text: vanilla.byId('newrating_check_text'),
                criteria: vanilla.byId('newrating_check_criteria')
            },
            button: {
                submit: vanilla.byId('newrating_submit'),
                reset: vanilla.byId('newrating_reset')
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
                vanilla.setInner(ui.rating.list.counter, countText);

                if(options.showRating != '') {
                    getRatingById(options.address.longitude, options.address.latitude, options.showRating, function(data) {
                        if(data.rating) {
                            renderRatings(data.rating, false, '', options.showRating);

                            setTimeout(function() {
                                $.smoothScroll({
                                    scrollTarget: ui.rating.list.container
                                });
                            }, 1000);
                        }
                    })
                }


                // render ratings
                getRatingsForLocation(options.address.longitude, options.address.latitude, options.typeFilter, options.providerFilter, 0, function(data) {

                    if(data.ratings instanceof Array && data.ratings.length > 0) {

                        renderRatings(data.ratings, false, options.showRating);

                        // hide / display more ratings button
                        if(rating.totalRatings > 0 && rating.totalRatings > rating.visibleRatings)
                            vanilla.show(ui.rating.list.more);
                        else
                            vanilla.hide(ui.rating.list.more);
                    }
                });
            } else {
                vanilla.hide(ui.rating.list.container);
            }
        });


        // load more ratings on demand
        vanilla.onClick(ui.rating.list.more, function(el) {
            getRatingsForLocation(options.address.longitude, options.address.latitude, options.typeFilter, options.providerFilter, rating.visibleRatings, function(data) {
                if(data.ratings instanceof Array && data.ratings.length > 0) {

                    renderRatings(data.ratings, true);

                    // hide / display more ratings button
                    if(rating.totalRatings > rating.visibleRatings)
                        vanilla.show(ui.rating.list.more);
                    else
                        vanilla.hide(ui.rating.list.more);
                }
            });
            return false;
        });


        // Modals
        vanilla.onClick(ui.rating.modal.reset.delete, function() {
            // TODO: ratings zurücksetzen
            resetRatingForm();
            $(ui.rating.modal.reset.dialog).modal('hide');
            return false;
        });

        // success - alarm-button
        vanilla.onClick(ui.rating.modal.submit.alarm, function() {
            $(ui.rating.modal.submit.dialog).modal('hide');
            showNewsletterModal('', true, true, '', '');
            return false;
        });

        // success - forum-button
        vanilla.onClick(ui.rating.modal.submit.forum, function() {
            window.open(options.baseUrl + '/forum'); // TODO: Link testen
            return false;
        });

        // success - close & reload page
        vanilla.onClick(ui.rating.modal.submit.close, function() {
            window.location.reload();
            return false;
        });

        // NewRating
        vanilla.setVal(ui.rating.modal.submit.geoinput, options.formattedAddress);

        // Reset-Button
        vanilla.onClick(ui.rating.newRating.button.reset, function() {
            $(ui.rating.modal.reset.dialog).modal('show');
            return false;
        });


        // Missing-Send-Button
        var geocomplete = new window.google.maps.places.Autocomplete(ui.rating.modal.submit.geoinput ,{ types: ['geocode'] });
        vanilla.onClick(ui.rating.modal.submit.resend, function(ev) {
            //ev.preventDefault();
            rotator.rotate(ui.rating.modal.submit.resend);


            var geocoder = new google.maps.Geocoder();
            var addressInput = vanilla.getVal(ui.rating.modal.submit.geoinput);

            geocoder.geocode({'address': addressInput}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var newAddress = convertAddress(results[0]);
                    handleNewRatingDialog(newAddress, true);
                }else {
                    rotator.fail(ui.rating.modal.submit.resend);
                    vanilla.setInner(ui.rating.modal.submit.notification, '<li style="display: list-item">Die eingegebene Adresse ist ungültig</li>');
                }
            });
            return false;
        });


        // Provider & Plans
        $(ui.rating.newRating.provider).chosen({ disable_search_threshold: 7 });
        $(ui.rating.newRating.plan).chosen({ disable_search_threshold: 7 });

        $(ui.rating.newRating.provider).on('change', function(evt, params) {

            var selected = ui.rating.newRating.provider.value;

            if(selected && selected !=''){
                setCheckState(ui.rating.newRating.check.provider, true);
                clearTimeout(rating.planTimeout);
                getPlansForProvider(selected, 'DE');
            }
        });

        $(ui.rating.newRating.plan).on('change', function(evt, params) {

            var selected = ui.rating.newRating.plan.value;

            if(selected && selected != '')
                setCheckState(ui.rating.newRating.check.plan, true);
        });


        // Textarea
        var hideProgress = false;

        Countable.live(ui.rating.newRating.text, function(counter) {
            rating.leftWords = rating.totalWordsToWrite - counter.words;
            var wordsInPercent = (counter.words / rating.totalWordsToWrite) * 100;

            if(rating.leftWords > 0) {
                hideProgress = false;
                if (rating.leftWords > 1)
                    vanilla.setInner(ui.rating.newRating.progress.text, 'Noch ' + rating.leftWords + ' Wörter');
                else
                    vanilla.setInner(ui.rating.newRating.progress.text, 'Noch 1 Wort');

                $(ui.rating.newRating.progress.bar).velocity({ width: wordsInPercent + '%' }, { duration: 100 });
            }else {
                hideProgress = true;
                if(rating.progressVisible) {
                    setCheckState(ui.rating.newRating.check.text, true);
                    $(ui.rating.newRating.progress.bar).velocity({ width: '100%' }, {duration: 100});

                    setTimeout(function() {
                        $(ui.rating.newRating.progress.container).velocity('slideUp', {display: 'none', duration: 500});
                    },500);
                    rating.progressVisible = false;
                }
            }

            if(counter.characters > 0 &&  !hideProgress) {
                if (!rating.progressVisible) {
                    setCheckState(ui.rating.newRating.check.text, false);
                    $(ui.rating.newRating.progress.container).velocity('slideDown', {display: 'block', duration: 500});
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
                setCheckState(ui.rating.newRating.check.criteria, true);
            else
                setCheckState(ui.rating.newRating.check.criteria, false);
        });

        // Tooltips
        $(ui.rating.newRating.text).LiteTooltip({
            trigger: 'click',
            location: 'top',
            margin: 5,
            textalign: 'left',
            backcolor: '#22beef',
            title: vanilla.getInner(ui.rating.newRating.tooltip.rating)
        });


        var key, criterias = ['speed','availability','service','speechquality','streaming','gaming'];
        for(var i=0; i<criterias.length; i++) {
            key = criterias[i];
            if(ui.rating.newRating.criteria.hasOwnProperty(key)
                && ui.rating.newRating.tooltip.hasOwnProperty(key)) {

                $(vanilla.next(ui.rating.newRating.criteria[key])).LiteTooltip({
                    trigger: 'click',
                    isSticky: false,
                    location: 'top',
                    margin: 5,
                    textalign: 'left',
                    backcolor: '#22beef',
                    title: vanilla.getInner(ui.rating.newRating.tooltip[key])
                });
                }
        }

        // Submit Button
        vanilla.onSubmit(ui.rating.newRating.form, function(ev) {
            ev.preventDefault();

            // hide all dialogs
            vanilla.hide(ui.rating.modal.submit.missing);
            vanilla.hide(ui.rating.modal.submit.success);

            handleNewRatingDialog(options.address, false, false);
            return false;
        });

        getProviderList('DE');
    }


    function renderRatings(ratings, anim, exclude, highlight) {

        var curRating;
        var src = '';

        for(var i=0; i<ratings.length; i++) {
            curRating = ratings[i];

            var hl ='';
            if(curRating._id == highlight)
                hl= '<div id="newR">Neu</div> ';

            src =
                "<div class=\"rt-header\">" +
                "<div>" +
                "<ul class=\"rating-tile-info\">" +
                "<li>" +
                "<h3>Entfernung</h3>" +
                "<p>"+ curRating.distanceReadable +"</p>" +
                "</li>" +
                "<li>" +
                "<h3>Erstellt vor</h3>" +
                "<p>" + curRating.readableCreated + "</p>" +
                "</li>" +
                "<li >" +
                "<h3>Verbindung</h3>" +
                "<p>" + curRating.providerType + "</p>" +
                "</li>" +
                "<li class=\"rti-last\">" +
                "<h3>" + hl + curRating.streetName + " " + curRating.streetNumber + "</h3>" +
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
                "<div class=\"rt-body\"><p>" + curRating.text + "</p></div>";

            //var post = $(src);

            console.log(curRating);

            if(curRating._id != exclude) {

                var post = document.createElement('section');
                vanilla.addClass(post, 'rating-tile');
                vanilla.setInner(post, src);

                if (anim)
                    setTimeout(displayPost, i * 200, post);
                else
                    vanilla.show(post);

                rating.visibleRatings++;

                vanilla.append(ui.rating.list.container, post);
            }
        }
    }


    function handleNewRatingDialog(userAddress, pressSubmit) {

        // check data
        var formStatus = checkRatingInput();
        var missingAddrInfo = checkAddress(userAddress);
        var missingAddrInfoKeys = Object.keys(missingAddrInfo);

        // when form is filled
        if(formStatus === true) {
            $(ui.rating.modal.submit.dialog).modal('show');

            if(missingAddrInfoKeys.length > 0) {
                // show missing dialog
                vanilla.show(ui.rating.modal.submit.missing);

                // set notification for missing address info
                var notification = '';
                for(var i=0; i<missingAddrInfoKeys.length; i++) {
                    notification += '<li style="display: list-item">Füge bitte ' + missingAddrInfo[missingAddrInfoKeys[i]] + ' hinzu</li>';
                }
                vanilla.setInner(ui.rating.modal.submit.notification, notification);
                if(pressSubmit)
                    rotator.fail(ui.rating.modal.submit.resend);
            } else {

                sendRatingForm(userAddress, 2, function(err, res) {
                    if(err == 'connection error') {
                        // TODO: vanilla version von rotate erstellen
                        rotator.fail(ui.rating.modal.submit.resend);
                        vanilla.setInner(ui.rating.modal.submit.notification, '<li style="display: list-item">Verbindungsfehler! Versuchen Sie es später noch einmal.</li>');
                    }else if(res.message == "rating saved"){
                        // show success dialog and reset form
                        rotator.done(ui.rating.modal.submit.resend, function() {
                            $(ui.rating.modal.submit.missing).velocity('slideUp', {display: 'none', duration: 500});
                            $(ui.rating.modal.submit.success).velocity('slideDown', {display: 'block', duration: 500});
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
                'provider' : vanilla.getVal(ui.rating.newRating.provider),
                'plan' : vanilla.getVal(ui.rating.newRating.plan),
                'text' : vanilla.getVal(ui.rating.newRating.text),
                'criteria' : {
                    speed: $(ui.rating.newRating.criteria.speed).rating('val'),
                    availability: $(ui.rating.newRating.criteria.availability).rating('val'),
                    speechquality: $(ui.rating.newRating.criteria.speechquality).rating('val'),
                    service: $(ui.rating.newRating.criteria.service).rating('val'),
                    streaming: $(ui.rating.newRating.criteria.streaming).rating('val'),
                    gaming: $(ui.rating.newRating.criteria.gaming).rating('val')
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

        if(vanilla.getVal(ui.rating.newRating.provider))
            vanilla.hide(ui.rating.newRating.error.provider);
        else {
            vanilla.show(ui.rating.newRating.error.provider);
            inputError = true;
        }


        if(rating.leftWords < 1)
            vanilla.hide(ui.rating.newRating.error.text);
        else {
            vanilla.show(ui.rating.newRating.error.text);
            inputError = true;
        }

        if(ui.rating.newRating.tos.checked)
            vanilla.hide(ui.rating.newRating.error.tos);
        else {
            vanilla.show(ui.rating.newRating.error.tos);
            inputError = true;
        }


        if(inputError)
            return false;

        return true;
    }


    function resetRatingForm() {
        // select's
        vanilla.setVal(ui.rating.newRating.provider, '');
        vanilla.sendEvent(ui.rating.newRating.provider, 'chosen:updated');

        vanilla.setVal(ui.rating.newRating.plan, '');
        vanilla.setAttr(ui.rating.newRating.plan, 'data-placeholder', 'Bitte zuerst Provider auswählen');
        vanilla.setAttr(ui.rating.newRating.plan, 'disabled', true);
        vanilla.sendEvent(ui.rating.newRating.plan, 'chosen:updated');


        // text
        vanilla.setVal(ui.rating.newRating.text, '');
        vanilla.sendEvent(ui.rating.newRating.text, 'input');

        // progress bar + text
        vanilla.setInner(ui.rating.newRating.progress.text, 'Noch ' + rating.totalWordsToWrite +  ' Wörter');
        $(ui.rating.newRating.progress.bar).velocity({ width: '0%' }, {duration: 100});

        // criteria
        $(ui.rating.newRating.criteria.speed).val(0).change();
        $(ui.rating.newRating.criteria.availability).val(0).change();
        $(ui.rating.newRating.criteria.service).val(0).change();
        $(ui.rating.newRating.criteria.speechquality).val(0).change();
        $(ui.rating.newRating.criteria.streaming).val(0).change();
        $(ui.rating.newRating.criteria.gaming).val(0).change();

        // statushaken
        setCheckState(ui.rating.newRating.check.provider, false);
        setCheckState(ui.rating.newRating.check.plan, false);
        setCheckState(ui.rating.newRating.check.text, false);
        setCheckState(ui.rating.newRating.check.criteria, false);

        // modal
        vanilla.setVal(ui.rating.modal.submit.geoinput, options.formattedAddress);
        rotator.resetButton(ui.rating.modal.submit.resend);

        // formerror messages
        vanilla.hide(ui.rating.newRating.error.provider);
        vanilla.hide(ui.rating.newRating.error.text);
        vanilla.hide(ui.rating.newRating.error.tos);
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
        vanilla.css(post, 'display', 'block');
        vanilla.addClass(post, 'magictime spaceInLeft');
    }


    function checkCriteriaComplete() {

        if($(ui.rating.newRating.criteria.gaming).rating('val') < 1)
            return false;

        if($(ui.rating.newRating.criteria.streaming).rating('val') < 1)
            return false;

        if($(ui.rating.newRating.criteria.speechquality).rating('val') < 1)
            return false;

        if($(ui.rating.newRating.criteria.availability).rating('val') < 1)
            return false;

        if($(ui.rating.newRating.criteria.speed).rating('val') < 1)
            return false;

        return true;
    }

    function getRatingById(longitude, latitude, ratingId, callback) {

        $.ajax({
            type: 'GET',
            url: options.baseUrl + '/api/rating?long=' + longitude + '&lat=' + latitude + '&id=' + ratingId,
            dataType: 'json',
            timeout: 5000
        })
            .done(function(data) {
                callback(data);
            })
            .fail(function() {
                callback();
            });

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

            vanilla.setInner(ui.rating.newRating.provider, out);
            vanilla.setVal(ui.rating.newRating.provider, '');
            vanilla.sendEvent(ui.rating.newRating.provider, 'chosen:updated');
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

            console.log(out);

            vanilla.setInner(ui.rating.newRating.plan, out);
            vanilla.setAttr(ui.rating.newRating.plan, 'data-placeholder', text);
            vanilla.setVal(ui.rating.newRating.plan, '');
            vanilla.removeAttr(ui.rating.newRating.plan, 'disabled');
            vanilla.sendEvent(ui.rating.newRating.plan, 'chosen:updated');

            //ui.rating.newRating.plan.html(out).attr('data-placeholder', text).val('').removeAttr('disabled').trigger("chosen:updated");
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
            help: vanilla.byId('toplist-help'),
            helptext: vanilla.byId('toplist-helptext'),
            body: vanilla.byId('toplist-body')
        },

        topplans: {
            body: vanilla.byId('topplans-body')
        },

        provider: {
            container: vanilla.byId('provider-container'),
            title: vanilla.byId('provider-title'),
            target: vanilla.byId('provider-target'),

            criteria: {
                speed: {
                    id: 'provider-speed',
                    info: vanilla.byId('provider-speed-info'),
                    gauge: null
                },
                availability: {
                    id: 'provider-availability',
                    info: vanilla.byId('provider-availability-info'),
                    gauge: null
                },
                service: {
                    id: 'provider-service',
                    info: vanilla.byId('provider-service-info'),
                    gauge: null
                },
                speechquality: {
                    id: 'provider-speechquality',
                    info: vanilla.byId('provider-speechquality-info'),
                    gauge: null
                },
                streaming: {
                    id: 'provider-streaming',
                    info: vanilla.byId('provider-streaming-info'),
                    gauge: null
                },
                gaming: {
                    id: 'provider-gaming',
                    info: vanilla.byId('provider-gaming-info'),
                    gauge: null
                }
            }
        },

        company: {
            container: vanilla.byId('company-container'),
            imagecontainer: vanilla.byId('image-container'),

            fields: {
                name: vanilla.byId('company-name'),
                founded: vanilla.byId('company-founded'),
                location: vanilla.byId('company-location'),
                employees: vanilla.byId('company-employees'),
                logo: vanilla.byId('company-logo'),
                url: vanilla.byId('company-url'),
                rating: vanilla.byId('company-rating')
            }
        },

        generic: {
            gauge: {
                speed: {
                    id: 'gauge-speed',
                    info: vanilla.byId('gauge-speed-info'),
                    heading: 'Geschwindigkeit',
                    el: null
                },
                availability: {
                    id: 'gauge-availability',
                    info: vanilla.byId('gauge-availability-info'),
                    heading: 'Verfügbarkeit',
                    el: 'null'
                },
                service: {
                    id: 'gauge-service',
                    info: vanilla.byId('gauge-service-info'),
                    heading: 'Service',
                    el: null
                },
                speechquality: {
                    id: 'gauge-speechquality',
                    info: vanilla.byId('gauge-speechquality-info'),
                    heading: 'Sprachqualität',
                    el: null
                },
                streaming: {
                    id: 'gauge-streaming',
                    info: vanilla.byId('gauge-streaming-info'),
                    heading: 'Streaming',
                    el: null
                },

                gaming: {
                    id: 'gauge-gaming',
                    info: vanilla.byId('gauge-gaming-info'),
                    heading: 'Gaming',
                    el: null
                }
            }
        }
    };


    function initGraphs() {

        // render generic & provider gauges
        //initGenericGages();
        initProviderGages();

        /*
        getGeneric(options.address.longitude, options.address.latitude, options.typeFilter, function(result) {
            setGenericGages(result.data);
        });
        */

        // get & render toplist
        getTopList(options.address.longitude, options.address.latitude, options.typeFilter, function(list) {
            graphs.topList = list.data;

            // render toplist table
            addTopListEntries(graphs.topList);

            // add click trigger for details
            $('.btn-details').click(function() {
                var providerSlug = vanilla.getAttr(this, 'data-provider');

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
                popup(vanilla.getAttr(this, 'data-url'));
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
                    vanilla.hide(ui.graphs.toplist.body);
                    vanilla.show(ui.graphs.toplist.help);

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


        for(var key in ui.graphs.generic.gauge) {
            if(ui.graphs.generic.gauge.hasOwnProperty(key)) {
                ui.graphs.generic.gauge[key].el = new JustGage($.extend({
                    id: ui.graphs.generic.gauge[key].id,
                    title: ui.graphs.generic.gauge[key].heading
                }, defaultOptions));
            }
        }
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
                vanilla.setInner(ui.graphs.generic.gauge.speed.info, values.speed_text);
            }

            if(values.avg_availability > 0) {
                ui.graphs.generic.gauge.availability.el.refresh(roundTo1(values.avg_availability));
                vanilla.setInner(ui.graphs.generic.gauge.availability.info, values.availability_text);
            }


            if(values.avg_service > 0) {
                ui.graphs.generic.gauge.service.el.refresh(roundTo1(values.avg_service));
                vanilla.setInner(ui.graphs.generic.gauge.service.info, values.service_text);
            }


            if(values.avg_speechquality > 0) {
                ui.graphs.generic.gauge.speechquality.el.refresh(roundTo1(values.avg_speechquality));
                vanilla.setInner(ui.graphs.generic.gauge.speechquality.info, values.speechquality_text);
            }


            if(values.avg_streaming > 0) {
                ui.graphs.generic.gauge.streaming.el.refresh(roundTo1(values.avg_streaming));
                vanilla.setInner(ui.graphs.generic.gauge.streaming.info, values.streaming_text);
            }


            if(values.avg_gaming > 0) {
                ui.graphs.generic.gauge.gaming.el.refresh(roundTo1(values.avg_gaming));
                vanilla.setInner(ui.graphs.generic.gauge.gaming.info, values.gaming_text);
            }
        }
    }


    function setProviderDetails(providerEntry) {

        if(providerEntry) {
        console.log(providerEntry);

            globals.selectedProvider  = providerEntry.provider.slug;

            // title
            vanilla.setInner(ui.graphs.provider.title, providerEntry.provider.name);

            // company info
            if(Object.keys(providerEntry.provider.business).length > 0) {
                resetCompanyInfo();
                setCompanyInfo(providerEntry.provider.business, providerEntry.provider.name, providerEntry.avg_total, providerEntry.provider.slug);
                vanilla.show(ui.graphs.company.container);
            } else
                vanilla.show(ui.graphs.company.container);


            // refresh gages
            ui.graphs.provider.criteria.speed.gauge.refresh(roundTo1(providerEntry.avg_speed));
            ui.graphs.provider.criteria.availability.gauge.refresh(roundTo1(providerEntry.avg_availability));
            ui.graphs.provider.criteria.service.gauge.refresh(roundTo1(providerEntry.avg_service));
            ui.graphs.provider.criteria.speechquality.gauge.refresh(roundTo1(providerEntry.avg_speechquality));
            ui.graphs.provider.criteria.streaming.gauge.refresh(roundTo1(providerEntry.avg_streaming));
            ui.graphs.provider.criteria.gaming.gauge.refresh(roundTo1(providerEntry.avg_gaming));


            // criteria infoboxes
            if(providerEntry.speed_text)
                vanilla.setInner(ui.graphs.provider.criteria.speed.info, providerEntry.speed_text);

            if(providerEntry.availability_text)
                vanilla.setInner(ui.graphs.provider.criteria.availability.info, providerEntry.availability_text);

            if(providerEntry.service_text)
                vanilla.setInner(ui.graphs.provider.criteria.service.info, providerEntry.service_text);

            if(providerEntry.speechquality_text)
                vanilla.setInner(ui.graphs.provider.criteria.speechquality.info, providerEntry.speechquality_text);

            if(providerEntry.streaming_text)
                vanilla.setInner(ui.graphs.provider.criteria.streaming.info, providerEntry.streaming_text);

            if(providerEntry.gaming_text)
                vanilla.setInner(ui.graphs.provider.criteria.gaming.info, providerEntry.gaming_text);

            // get & render top plans
            getTopPlans(options.address.longitude, options.address.latitude, providerEntry.provider.slug, function(result) {

                // clear list
                var childrenToRemove = vanilla.findChildren(ui.graphs.topplans.body, ':scope > div:not(.head)');
                vanilla.removeNodes(childrenToRemove);

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
                $(ui.graphs.provider.container).velocity('slideDown',
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
                    $(ui.graphs.provider.container).velocity('slideUp', { duration: 150});
                    graphs.topListVisible = false;
                    graphs.topListActiveProvider = null;
                } else {
                    setProviderDetails(providerEntry);
                    graphs.topListActiveProvider = providerSlug;
                }
            }
        }
    }


    function setCompanyInfo(company, providerName, companyRating, providerSlug) {

        if(companyRating)
            vanilla.setInner(ui.graphs.company.fields.rating, '&#216; ' + roundTo1(companyRating));

        if(company.name)
            vanilla.setInner(ui.graphs.company.fields.name, company.name);

        if(company.founded)
            vanilla.setInner(ui.graphs.company.fields.founded, company.founded);

        if(company.location)
            vanilla.setInner(ui.graphs.company.fields.location, company.location);

        if(company.employees)
            vanilla.setInner(ui.graphs.company.fields.employees, company.employees);

        if(company.logo && company.logo != '') {
            vanilla.setAttr(ui.graphs.company.fields.logo, 'src', '../images/provider/de/' + company.logo);
            vanilla.setAttr(ui.graphs.company.fields.logo, 'alt', providerName + ' Logo');
            vanilla.setAttr(ui.graphs.company.fields.logo, 'title', providerName + ' Logo');
        }

        if(company.logobg && company.logobg != '') {
            vanilla.css(ui.graphs.company.imagecontainer, 'background-color', '#' + company.logobg);
        }

        if(company.url && company.url.text) {
            var link = company.url.text;

            if(company.url.goto)
                link = '<a href="'+ options.baseUrl + '/redirect/homepage/' + providerSlug + '" rel="nofollow" target="_blank">' + company.url.text + '</a>';

            vanilla.setInner(ui.graphs.company.fields.url, link);
        }
    }


    function resetCompanyInfo() {

        vanilla.setInner(ui.graphs.company.fields.name, '');
        vanilla.setInner(ui.graphs.company.fields.founded, '');
        vanilla.setInner(ui.graphs.company.fields.location, '');
        vanilla.setInner(ui.graphs.company.fields.employees, '');
        vanilla.setInner(ui.graphs.company.fields.url, '');

        ui.graphs.company.fields.logo.src = '../images/provider/nologo.png';
        vanilla.setAttr(ui.graphs.company.fields.logo, 'title', 'Kein Logo vorhanden');
        vanilla.setAttr(ui.graphs.company.fields.logo, 'alt', 'Kein Logo vorhanden');
        vanilla.css(ui.graphs.company.imagecontainer, 'background-color', '#fff');
    }


    function addTopPlansEntries(topListEntry, planEntries) {

        var entry, plan, out = '';
        var itemCount = planEntries.length;

        for(var i=0; i<itemCount; i++) {
            entry = planEntries[i];
            plan = findPlanBySlug(topListEntry.provider.plans, entry._id.plan);


            if(entry._id.plan && plan && entry.rating > 0) {

                var availabilityButton = '',
                    affiliateButton = '',
                    speedText = '';

                if((plan.hasOwnProperty('availabilityUrl') && plan.availabilityUrl)
                    || (topListEntry.provider.hasOwnProperty('availabilityUrl') && topListEntry.provider.availabilityUrl))
                    availabilityButton = '<button class="btn btn-default btn-availability" data-url="' + options.baseUrl
                    + '/redirect/availability/' + topListEntry.provider.slug + '/' + plan.slug + '"><i class="fa fa-plug"></i> Verfügbarkeit</button>';

                if((plan.hasOwnProperty('affiliateUrl') && plan.affiliateUrl)
                    || (topListEntry.provider.hasOwnProperty('affiliateUrl') && topListEntry.provider.affiliateUrl))
                    affiliateButton = '<button class="btn btn-default btn-affiliate" data-url="' + options.baseUrl
                    + '/redirect/plan/' + topListEntry.provider.slug + '/' + plan.slug + '"><i class="fa fa-plus-square"></i> Zum Tarif</button>';

                if(plan.hasOwnProperty('speed') && plan.speed > 0) {
                    speedText = roundTo1(plan.speed / 1000) + ' MBit/s';
                } else {
                    speedText = '-';
                }


                out += '<div>' +
                '<div class="row-hide"><div class="th">#</div><div class="cnt">' + (i+1) + '</div></div>' +
                '<div><div class="th">Platz ' + (i+1) + '</div><div class="cnt">' + plan.name + '</div></div>' +


                '<div class="center"><div class="th">Geschwindigkeit</div><div class="cnt">' + speedText + '</div></div>' +


                '<div class="center"><div class="th">Bewertung</div><div class="cnt">&#216; ' + roundTo1(entry.rating) + '</div></div>' +
                '<div class="right"><div class="th">Mehr</div><div class="cnt cnt-btn">' + availabilityButton + ' ' + affiliateButton + '</div></div>' +
                '</div>';
            }

        }

        vanilla.appendInner(ui.graphs.topplans.body, out);
    }


    function addTopListEntries(entries) {
        var out = '';

        var itemCount = entries.length;
        for(var i=0; i<itemCount; i++) {

            if(entries[i].avg_total > 0) {
            var affiliateButton = '';
            if(entries[i].provider.hasOwnProperty('affiliateUrl') && entries[i].provider.affiliateUrl)
                affiliateButton = '<button type="button" class="btn btn-default btn-homepage" data-url="' + options.baseUrl
                + '/redirect/provider/' + entries[i].provider.slug + '"><i class=\"fa fa-home\"></i> Homepage</button>';


            out += "<div>" +
            '<div class="row-hide"><div class="th">#</div><div class="cnt">' + (i+1) + '</div></div>' +
            '<div><div class="th">Platz ' + (i+1) + '</div><div class="cnt">' + entries[i].provider.name + '</div></div>' +
            '<div class="center"><div class="th">Verbindung</div><div class="cnt">' + translateType(entries[i].provider.type) + '</div></div>' +
            '<div class="center"><div class="th">Bewertung</div><div class="cnt">&#216; ' + roundTo1(entries[i].avg_total) + '</div></div>' +
            '<div class="right"><div class="th">Mehr</div><div class="cnt cnt-btn">' + affiliateButton +
            " <button type=\"button\" class=\"btn btn-default btn-details\" data-provider=\"" + entries[i]._id.slug + "\"><i class=\"fa fa-line-chart\"></i> Details</button>" + '</div></div>' +
            "</div>";
            }
        }

        vanilla.appendInner(ui.graphs.toplist.body, out);
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

        vanilla.setInner(ui.graphs.toplist.helptext, helpText);
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
            dialog: vanilla.byId('modalMapRatings'),
            title: vanilla.byId('modalMapRatingsTitle'),
            body: vanilla.byId('modalMapRatingsBody')
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
        vanilla.setInner(ui.maps.modal.body, '');
        vanilla.setInner(ui.maps.modal.title, title);
        $(ui.maps.modal.dialog).modal('show');

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
                    "<li class=\"even\">" +
                    "<h3>Erstellt vor</h3>" +
                    "<p>" + curRating.readableCreated + "</p>" +
                    "</li>" +
                    "<li class=\"even\">" +
                    "<h3>Verbindung</h3>" +
                    "<p>" + curRating.providerType + "</p>" +
                    "</li>" +
                    "<li class=\"rti-last even centered\">" +
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

            vanilla.appendInner(ui.maps.modal.body, newRating);
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
        form: vanilla.byId('newsletter-form'),
        email: vanilla.byId('newsletter-email'),
        options: {
            alarm: vanilla.byId('nlo-alarm'),
            newsletter: vanilla.byId('nlo-newsletter')
        },
        modals: {
            success: vanilla.byId('modal-newsletter-success'),
            input: vanilla.byId('modal-newsletter-input')

        },
        messages: {
            formatError: vanilla.byId('mni-formaterror'),
            missingOption: vanilla.byId('mni-missingoption'),
            connectionError: vanilla.byId('mni-connectionerror')
        },
        input: {
            email: vanilla.byId('mni-email'),
            submit: vanilla.byId('mni-submit'),
            contentSubmit: vanilla.byId('mni-content-submit'),
            alarm: vanilla.byId('mni-alarm'),
            newsletter: vanilla.byId('mni-newsletter')
        }
    };

    function initNewsletter() {
        // content button - only for small devices
        vanilla.onClick(ui.newsletter.input.contentSubmit, function(el) {
            el.preventDefault();
            showNewsletterModal('', true, true, '', '');
            return false;
        });

        // modal form
        vanilla.onClick(ui.newsletter.input.submit, function(el) {
            el.preventDefault();

            rotator.resetButton(ui.newsletter.input.submit);
            rotator.rotate(ui.newsletter.input.submit);

            var email = vanilla.getVal(ui.newsletter.input.email);
            var alarmChecked = ui.newsletter.input.alarm.checked;
            var newsletterChecked = ui.newsletter.input.newsletter.checked;

            submitNewsletterForm(email, alarmChecked, newsletterChecked, function (error) {
                if (!error) {
                    rotator.done(ui.newsletter.input.submit, function() {
                        $(ui.newsletter.modals.input).modal('hide');
                        $(ui.newsletter.modals.success).modal('show');
                        resetNewsletterFields();
                    });
                } else if (error == 'connection error') {
                    rotator.fail(ui.newsletter.input.submit);
                    displayNewsletterErrors(false, false, true);
                } else {
                    rotator.fail(ui.newsletter.input.submit);
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
        vanilla.onSubmit(ui.newsletter.form, function(el) {
            el.preventDefault();

            var email = vanilla.getVal(ui.newsletter.email);
            var alarmChecked = ui.newsletter.options.alarm.checked;
            var newsletterChecked = ui.newsletter.options.newsletter.checked;

            submitNewsletterForm(email, alarmChecked, newsletterChecked, function (error) {
                if (!error) {
                    $(ui.newsletter.modals.success).modal('show');
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
            vanilla.show(ui.newsletter.messages.formatError);
        else
            vanilla.hide(ui.newsletter.messages.formatError);

        // check options
        if(optionMessage)
            vanilla.show(ui.newsletter.messages.missingOption);
        else
            vanilla.hide(ui.newsletter.messages.missingOption);

        // check connection
        if(connectionMessage)
            vanilla.show(ui.newsletter.messages.connectionError);
        else
            vanilla.hide(ui.newsletter.messages.connectionError);
    }


    function showNewsletterModal(email, alarmChecked, newsletterChecked, emailMessage, optionMessage, connectionMessage) {

        // set input values
        ui.newsletter.input.alarm.checked = alarmChecked;
        ui.newsletter.input.newsletter.checked = newsletterChecked;
        vanilla.setVal(ui.newsletter.input.email, email);

        // show errors
        displayNewsletterErrors(emailMessage, optionMessage, connectionMessage);

        $(ui.newsletter.modals.input).modal('show');
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
        vanilla.setVal(ui.newsletter.email, '');
    }

    // </editor-fold>
    // *****************************************************************************************************************
    // SIDEBAR
    // *****************************************************************************************************************
    // <editor-fold desc="Sidebar">
    ui.sidebar = {
        container: vanilla.byId('sidebar'),

        writeRating: {
            button: vanilla.byClass('write-rating'),
            target: '#write-rating-target'
        }
    };

    function initSidebar() {
        // fixed sidebar
        $(ui.sidebar.container).sticky({topSpacing: 30, bottomSpacing: 237});

        // smooth scrolling for 'bewertung schreiben' button
        vanilla.onClick(ui.sidebar.writeRating.button, function(el) {
            el.preventDefault();
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
            /*facebook: vanilla.byClass('social-fb '),
            googleplus: vanilla.byClass('social-gplus'),
            twitter: vanilla.byClass('social-twitter '),
            linkedin: vanilla.byClass('social-linkedin'),
            digg: vanilla.byClass('social-digg '),
            xing: vanilla.byClass('social-xing'),*/
            link: vanilla.byClass('social-link '),
            email: vanilla.byClass('social-email')
        },

        modal : {
            facebook: vanilla.byId('social-modal-fb'),
            googleplus: vanilla.byId('social-modal-gplus'),
            twitter: vanilla.byId('social-modal-twitter'),
            link: {
                modal: vanilla.byId('social-modal-link'),
                text: vanilla.byId('social-link-text')
            },
            email: {
                modal: vanilla.byId('social-modal-email'),
                messages: {
                    container: vanilla.byId('sme-messages'),
                    formaterror: vanilla.byId('sme-formaterror'),
                    connectionerror: vanilla.byId('sme-connectionerror')
                },
                from: vanilla.byId('sme-from'),
                email: vanilla.byId('sme-email'),
                submit: vanilla.byId('sme-submit')
            },
            emailSuccess: {
                modal: vanilla.byId('social-modal-email-success')
            }
        }
    };

    function initSocial() {

        vanilla.onClick(ui.social.button.link , function(){
            vanilla.setVal(ui.social.modal.link.text, getPageUrl());
            $(ui.social.modal.link.modal).modal('show');
            return false;
        });

        // email form & send button
        vanilla.onClick(ui.social.button.email , function(){
            rotator.resetButton(ui.social.modal.email.submit);
            $(ui.social.modal.email.modal).modal('show');
            return false;
        });

        vanilla.onClick(ui.social.modal.email.submit , function(el){
            el.preventDefault();
            onSocialEmailSubmit();
            return false;
        });
    }


    function onSocialEmailSubmit() {
        var from = vanilla.getVal(ui.social.modal.email.from);
        var email = vanilla.getVal(ui.social.modal.email.email);
        var url = getPageUrl();

        rotator.resetButton(ui.social.modal.email.submit);
        rotator.rotate(ui.social.modal.email.submit);

        // reset messages
        vanilla.hide(ui.social.modal.email.messages.container);
        vanilla.hide(ui.social.modal.email.messages.formaterror);
        vanilla.hide(ui.social.modal.email.messages.connectionerror);


        if(!email || !validateEmail(email)) {
            vanilla.show(ui.social.modal.email.messages.container);
            vanilla.show(ui.social.modal.email.messages.formaterror);
            rotator.fail(ui.social.modal.email.submit);
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
                vanilla.setVal(ui.social.modal.email.from, '');
                vanilla.setVal(ui.social.modal.email.email, '');
                rotator.done(ui.social.modal.email.submit);
                $(ui.social.modal.email.modal).modal('hide');
                $(ui.social.modal.emailSuccess.modal).modal('show');

            })
            .fail(function() {
                vanilla.show(ui.social.modal.email.messages.container);
                vanilla.show(ui.social.modal.email.messages.connectionerror);
                rotator.fail(ui.social.modal.email.submit);
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
            vanilla.addClass(ui.global.typePills[type], 'pill-active');
        else
            vanilla.addClass(ui.global.typePills['all'], 'pill-active');
    }

    function handleNewsletterPopup(visible) {
        if(visible) {
            showNewsletterModal('', true, true, '', '');
        }
    }

    return init;
});