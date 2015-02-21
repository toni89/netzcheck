(function(va) {
    /*"use strict";*/


    // Selectors

    va.byId = function(id) {
        return document.getElementById(id);
    };

    va.byClass = function(className) {
        return document.getElementsByClassName(className);
    };

    va.byTag = function(tagName) {
        return document.getElementsByTagName(tagName);
    };

    va.next = function(el) {
      return el.nextSibling;
    };

    va.findChildren = function(el, selector) {
        if(el.children) {
            return el.querySelectorAll(selector);
        }
    };

    // Getters

    va.getInner = function(el) {
        return el.innerHTML;
    };

    va.getVal = function(el) {
        return el.value;
    };

    va.getAttr = function(el, attributeName) {
        return el.getAttribute(attributeName);
    };

    va.getProp = function(el, propertyName) {
        return el.getAttribute(propertyName);
    };


    // DOM-Manipulators

    va.append = function(el, child) {
        el.appendChild(child);
    };

    va.setProp = function(el, propertyName, value) {
        el.setProperty(propertyName, value, null);
    };

    va.removeNodes = function(el) {
        if(el) {
            var len = el.length;
            for(var i=0; i<len; i++) {
                el[i].remove();
            }
        }
    };

    va.addClass = function(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    };

    va.removeClass = function(el, className) {
        if(el.classList && (el.classList.contains(className))) {
            el.classList.remove(className);
        } else {
            if(el.className.indexOf(className)) {
                el.className = el.className.replace(className, '');
            }
        }
    };

    va.appendInner = function(el, appendHtml) {
        el.innerHTML = el.innerHTML + appendHtml;
    };

    va.setInner = function(el, innerHtml) {
        if(el != null)
        el.innerHTML = innerHtml;
    };

    va.setVal = function(el, value) {
        el.value = value;
    };

    va.setAttr = function(el, attributeName, value) {
        el.setAttribute(attributeName, value);
    };

    va.removeAttr = function(el, attributeName) {
        el.removeAttribute(attributeName);
    };

    /*

    va.showModal = function(el) {
        va.addClass(el, 'modal-visible');
    };

    va.hideModal = function(el) {
        va.removeClass(el, 'modal-visible');
    };

    */


    // Event-Handler

    va.sendEvent = function(el, eventName) {
        el.dispatchEvent(new Event(eventName));
    };

    va.onClick = function(el, callback) {
        addEvent(el, 'click', callback);
    };

    va.onChange = function(el, callback) {
        addEvent(el, 'change', callback);
    };

    va.onSubmit = function(el, callback) {
        addEvent(el, 'submit', callback);
    };

    va.ready = function(callback) {
        document.addEventListener('DOMContentLoaded', callback);
    };


    // Style-Manipulators

    va.show = function(el) {
        //el.style.display = 'block';
        va.css(el, 'display', 'block');
    };

    va.hide = function(el) {
        //el.style.display = 'none';
        va.css(el, 'display', 'none');
    };

    va.css = function(el, property, value) {
        el.style[property] = value;
    };

    va.touchfix = function(className) {

        var el = va.byClass(className);

        for(var i=0; i<el.length; i++) {

            addEvent(el[i], 'touchend', function() {
                addEvent(this,  'click', function() {
                });
            });
        }
    };


    // Private

    function addEvent(el, eventName, callback) {

        if(el && callback) {

            if(el == '[object NodeList]') {
                var len = el.length;

                for(var i=0; i<len; i++) {
                    addEventHandler(el[i], eventName, callback);
                }
            } else {
                addEventHandler(el, eventName, callback);
            }
        }
    }

    function addEventHandler(elem, eventType, handler) {
        if (elem.addEventListener)
            elem.addEventListener (eventType, handler, false);
        else if (elem.attachEvent)
            elem.attachEvent ('on' + eventType, handler);
    }

    function isElement(obj) {
        try {
            //Using W3 DOM2 (works for FF, Opera and Chrom)
            return obj instanceof HTMLElement;
        }
        catch(e){
            //Browsers not supporting W3 DOM2 don't have HTMLElement and
            //an exception is thrown and we end up here. Testing some
            //properties that all elements have. (works on IE7)
            return (typeof obj==="object") &&
                (obj.nodeType===1) && (typeof obj.style === "object") &&
                (typeof obj.ownerDocument ==="object");
        }
    }

    function isArray(object)
    {
        if (object.constructor === Array) return true;
        else return false;
    }

})(this.vanilla = this.vanilla || {});