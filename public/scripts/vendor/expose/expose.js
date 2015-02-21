(function(ex) {
    ex.expose = function(el) {

        for(var i=0; i<el.length; i++) {
            el[i].style['z-index'] = '99999';

            addClass(el[i], 'expose-active');
        }

        var overlay = document.getElementById('expose-overlay');
        overlay.style['opacity'] = '1';

        setTimeout(function() {
            overlay.style['display'] = 'block';
        }, 300);

        addEventHandler(overlay, 'click', function() {
            ex.escape(el);
        });
    };

    ex.escape = function(el) {

        for(var i=0; i<el.length; i++) {
            el[i].style['z-index'] = '1';
            removeClass(el[i], 'expose-active');
        }

        var overlay = document.getElementById('expose-overlay');
        overlay.style['opacity'] = '0';

        setTimeout(function() {
            overlay.style['display'] = 'none';
        }, 300);


    };

    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    }

    function removeClass(el, className) {
        if(el.classList && (el.classList.contains(className))) {
            el.classList.remove(className);
        } else {
            if(el.className.indexOf(className)) {
                el.className = el.className.replace(className, '');
            }
        }
    }


    function addEventHandler(elem, eventType, handler) {
        if (elem.addEventListener)
            elem.addEventListener (eventType, handler, false);
        else if (elem.attachEvent)
            elem.attachEvent ('on' + eventType, handler);
    }

})(this.expose = this.expose || {});