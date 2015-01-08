define(['jquery'] ,function(jQuery) {

    var defaultOptions = {
        backgroundColor: 'c9c9c9',
        colors: [
            'ff7876', // 1
            'ffc131', // 2
            'ffc131', // 3
            '9ed132', // 4
            '9ed132'  // 5
        ],
        stars: 5,
        size: 20,
        useClasses: true,
        colorClasses: [
            'dR-red',
            'dR-yellow',
            'dR-yellow',
            'dR-green',
            'dR-green'
        ]

    };

    var config = function(options) {
        if(options) {
            jQuery.extend(defaultOptions, options);
        }
    };

    var parse = function(value) {
        var style = '';
        var classes = '';
        var out = '<div class="rating-display-container"><div class="stars">';

        for(var i=0; i<defaultOptions.stars; i++) {
            if(defaultOptions.useClasses) {
                if(i < value && defaultOptions.colors[value-1])
                    classes = defaultOptions.colorClasses[value-1];
                else
                    classes = 'dR-grey';

            } else {
                if(i < value && defaultOptions.colors[value-1])
                    style = 'style="background-color: #' + defaultOptions.colors[value-1] +';"';
                else
                    style = 'style="background-color: #' + defaultOptions.backgroundColor +';"';
            }


            out += '<i class="fa fa-star ' + classes + '" ' + style + '></i>';
        }



        out += '</div></div>';
        return out;
    };

    window.dRating = {
        config: config,
        parse: parse
    };

    return window.dRating;
});