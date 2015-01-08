
module.exports = [

    {
        'packagePath' : './modules/db',
        'database' : 'netzcheck'
    },

    {
        'packagePath' : './modules/geodata'
    },

    {
        'packagePath' : './modules/main'
    },

    {
        'packagePath' : './modules/pagehandler'
    },

    {
        'packagePath' : './modules/resthandler'
    },

    {
        'packagePath' : './modules/server',
        'baseUrl': 'http://192.168.1.101:8000',
        'mailerUrl': 'http://192.168.1.101:8001',
        'http' : {
            'port': '8000'
        }
    }

];