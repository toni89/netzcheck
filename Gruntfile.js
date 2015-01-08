module.exports = function(grunt) {

    grunt.initConfig({

        handlebars: {
            options: {
                namespace: 'App.Templates',
                processName: function(filePath) {
                    return filePath.replace(/^public\/templates\//, '').replace(/\.hbs$/, '');
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'public/themes/default/css/style.css' : 'public/themes/default/sass/style.sass'
                }
            }
        },

        watch: {
            sass: {
                files: [
                    'public/themes/default/sass/*.sass',
                    'public/themes/default/sass/base/*.sass',
                    'public/themes/default/sass/components/*.sass',
                    'public/themes/default/sass/modules/*.sass'
                ],
                tasks: ['sass']
            }
        }

    });



    // Tasks
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    /*
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev',['watch']);
    */
};

