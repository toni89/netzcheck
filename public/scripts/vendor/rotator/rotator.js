(function(rt) {

    rt.rotate = function(btn) {

        var el = getElements(btn);

        removeClass(el.done[0],'active');
        removeClass(el.fail[0], 'active');
        addClass(el.rotator[0], 'active');
        addClass(el.spinner[0], 'active');
    };


    rt.done = function(btn, callback) {

        var el = getElements(btn);

        addClass(el.rotator[0], 'active');
        removeClass(el.spinner[0], 'active');
        removeClass(el.fail[0], 'active');

        setTimeout(function() {
            addClass(el.done[0], 'active');

            if(callback)
                setTimeout(callback, 100);
        }, 250);
    };

    rt.fail = function(btn) {

        var el = getElements(btn);

        addClass(el.rotator[0], 'active');
        removeClass(el.spinner[0], 'active');
        removeClass(el.done[0], 'active');

        setTimeout(function() {
            addClass(el.fail[0], 'active');
        }, 250);
    };

    rt.resetButton = function(btn) {

        var el = getElements(btn);

        removeClass(el.rotator[0], 'active');
        removeClass(el.spinner[0], 'active');
        removeClass(el.done[0], 'active');
        removeClass(el.fail[0], 'active');
    };

    function getElements(el) {
        return {
            done: find(el, '.done'),
            fail: find(el, '.fail'),
            rotator: find(el, '.rotator'),
            spinner: find(el, '.spinner')
        }
    }

    function find(el, selector) {
        if(el.children) {
            return el.querySelectorAll(selector);
        }
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

   function addClass(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    }

})(this.rotator = this.rotator || {});