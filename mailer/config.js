module.exports = {
    general: {
        domain: 'http://192.168.1.101:8000',
        adminEmail: 'dslexp@bra1n.de',
        maxDistance: 2000,
        templatesDir: __dirname + '/templates',
        partialsDir: __dirname + '/partials'
    },

    social: {
        facebook: 'http://facebook.de',
        gplus: 'http://google.de',
        twitter: 'http://twitter.de',
        linkedin: 'http://linkedin'
    },

    db: {
        database: 'netzcheck',
        collections: ['ratings', 'newsletter']
    },

    http: {
        port: 8001,
        client: '192.168.1.101'
    },

    redis: {
        server: '127.0.0.1',
        port: 6379
    },

    email: {
        envelope: 'DSL-EXP <hammerschmidt.webservices@gmail.com>',
        from: 'hammerschmidt.webservices@gmail.com',
        host: 'smtp.gmail.com',
        port: 465,
        user: 'hammerschmidt.webservices@gmail.com',
        password: 'a89t]QB4hpTnr',
        debug: false
    }

};