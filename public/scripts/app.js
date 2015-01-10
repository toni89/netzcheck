define('placesapi', ['async!http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false'],
    function(){
        return window.google.maps.places;
    });

require.config({
    paths: {
        'page.check': '../scripts/libs/page.check',
        'module.footer-newsletter': '../scripts/libs/module.footer-newsletter',

        async: '../scripts/vendor/requirejs-plugins/src/async',
        geo: '../scripts/vendor/geo/geo',

        jquery: [
            '../scripts/vendor/jquery/dist/jquery-2.1.1.min',
            '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
        ],

        markerWithLabel: [
            'http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/src/markerwithlabel',
            '../scripts/vendor/maputils/markerwithlabel'
        ],

        justgage: [
            '../scripts/vendor/justgage/justgage.1.0.1'
        ],

        eve: [
            '../scripts/vendor/justgage/eve.0.5.0'
        ],

        raphael: [
            '../scripts/vendor/justgage/raphael.2.1.0.min'
        ],

        icheck: ['../scripts/vendor/icheck/icheck.min'],

        chosen: [
            '../scripts/themes/js/plugins/chosen/chosen.jquery.min'
        ],

        litetooltip: [
            '../scripts/vendor/litetooltip/js/litetooltip.min'
        ],

        'rating.jquery': ['../scripts/vendor/rating.jquery/rating.jquery.min'],

        // Theme - Scripts
        bootstrap: [
            '../themes/default/vendor/bootstrap/js/bootstrap.min',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min'
        ],

        velocityjs: [
            '//cdnjs.cloudflare.com/ajax/libs/velocity/1.0.0/velocity.min',
            '../scripts/vendor/velocityjs/velocity.min'
        ],

        countable: [
            '../scripts/vendor/Countable/Countable'
        ],

        stickyjs: [
            '../scripts/vendor/stickyjs/jquery.sticky'
        ],

        validatejs: [
            '../scripts/vendor/validatejs/jquery.validate.min'
        ],

        dRating: ['../scripts/vendor/display-rating/display-rating'],

        smoothscroll: [
            '../scripts/vendor/smooth-scroll/jquery.smooth-scroll'
        ],

        feedback: [
            '../scripts/vendor/feedback/feedback'
        ],

        rotator: [
            '../scripts/vendor/rotator/jquery.rotator'
        ],

        expose: [
            '../scripts/vendor/expose/jquery.expose'
        ],

        // Theme - CSS
        bootstrapcss: [
            '../themes/default/vendor/bootstrap/css/bootstrap.min',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min'
        ],

        fontawesomecss: [
            '../themes/default/vendor/font-awesome/css/font-awesome.min',
            '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min'
        ],

        chosenmincss: ['../scripts/themes/css/chosen.min'],
        chosenbootstrapcss: ['../scripts/themes/css/chosen-bootstrap'],

        litetooltipcss: ['../scripts/vendor/litetooltip/css/litetooltip.min'],

        ratingcss: ['../scripts/vendor/rating.jquery/rating-min'],

        dratingcss: ['../scripts/vendor/display-rating/display-rating'],

        minoral: ['../scripts/themes/css/minoral'],

        'minoral.custom': ['../scripts/themes/custom/default/default'],

        'defaultcss': ['../themes/default/css/style'],

        // Vendor - CSS
        magiccss: ['../scripts/vendor/magic/magic']

    },

    map: {
        '*': {
            'css': '../scripts/vendor/require-css/css.min'
        }
    },

    shim: {

        'defaultcss': {
            deps: ['bootstrapcss']
        },

        'geo': {
            deps: ['jquery','placesapi']
        },

        'parsley': {
            deps: ['jquery']
        },

        'markerWithLabel' : {
            deps: ['placesapi']
        },

        'dRating': {
            deps: ['jquery']
        },

        'stickyjs': {
            deps: ['jquery']
        },

        'validatejs': {
            deps: ['jquery']
        },

        'chosen': {
            deps: ['jquery']
        },

        'litetooltip': {
            deps: ['jquery']
        },

        'rating.jquery': {
            deps: ['jquery']
        },

        'bootstrap' : {
            deps: ['jquery']
        },

        'justgage' : {
            deps: ['jquery', 'raphael']
        },

        'raphael' : {
            deps: ['eve']
        },

        'velocityjs' : {
            deps: ['jquery']
        },

        'smoothscroll' : {
            deps: ['jquery']
        },

        'feedback' : {
            deps: ['jquery']
        },

        'icheck' : {
            deps: ['jquery']
        },

        'rotator' : {
            deps: ['jquery']
        },

        'expose' : {
            deps: ['jquery']
        },

        'module.footer-newsletter' : {
            deps: ['jquery']
        }
    }
});

/*
define('mapsapi', ['async!http://maps.google.com/maps/api/js?v=3&sensor=false'],
    function(){
        return window.google.maps;
});
*/



