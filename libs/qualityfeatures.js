module.exports = {

    getText: function(key, avgValue) {
        return this[key][Math.round(avgValue)];
    },

    speed : [
        'Keine Daten vorhanden', // 0
        'Es sind <strong>0 bis 40%</strong> der bestellten Geschwindigkeit erreichbar', // 1
        'Es sind <strong>40 bis 55%</strong> der bestellten Geschwindigkeit erreichbar', // 2
        'Es sind <strong>55 bis 70%</strong> der bestellten Geschwindigkeit erreichbar', // 3
        'Es sind <strong>70 bis 85%</strong> der bestellten Geschwindigkeit erreichbar', // 4
        'Es sind <strong>85 bis 100%</strong> der bestellten Geschwindigkeit erreichbar' // 5
    ],

    availability : [
        'Keine Daten vorhanden', // 0
        'Es treten <strong>ständig</strong> Verbindungsprobleme auf', // 1
        'Es treten <strong>häufig</strong> Verbindungsprobleme auf', // 2
        'Es treten <strong>gelegentlich</strong> Verbindungsprobleme auf', // 3
        'Es treten <strong>selten</strong> Verbindungsprobleme auf', // 4
        'Es treten <strong>keine</strong> Verbindungsprobleme auf' // 5
    ],

    service: [
        'Keine Daten vorhanden', // 0
        'Die Servicequalität vor Ort ist <strong>schlecht</strong>', // 1
        'Die Servicequalität vor Ort ist <strong>ausreichend</strong>', // 2
        'Die Servicequalität vor Ort ist <strong>befriedigend</strong>', // 3
        'Die Servicequalität vor Ort ist <strong>gut</strong>', // 4
        'Die Servicequalität vor Ort ist <strong>sehr gut</strong>' // 5
    ],

    speechquality: [
        'Keine Daten vorhanden', // 0
        'Es treten <strong>ständig</strong> Unterbrechungen auf', // 1
        'Es treten <strong>häufig</strong> Unterbrechungen auf', // 2
        'Es treten <strong>gelegentlich</strong> Unterbrechungen auf', // 3
        'Es treten <strong>selten</strong> Unterbrechungen auf ', // 4
        'Es treten <strong>keine</strong> Unterbrechungen auf' // 5
    ],

    streaming: [
        'Keine Daten vorhanden', // 0
        'Videostreams werden <strong>ständig</strong> unterbrochen', // 1
        'Videostreams werden <strong>häufig</strong> unterbrochen', // 2
        'Videostreams werden <strong>gelegentlich</strong> unterbrochen', // 3
        'Videostreams werden <strong>selten</strong> unterbrochen', // 4
        'Videostreams werden <strong>nur zu Stoßzeiten (abends)</strong> unterbrochen' // 5
    ],

    gaming: [
        'Keine Daten vorhanden', // 0
        'Mit einem Ping von <strong>über 200ms</strong> sind Onlinespiele stark verzögert spielbar', // 1
        'Mit einem Ping von <strong>130 - 200ms</strong> sind Onlinespiele eingeschränkt spielbar', // 2
        'Mit einem Ping von <strong>90 bis 130ms</strong> sind Onlinespiele merklich verzögert spielbar', // 3
        'Mit einem Ping von <strong>60 bis 90ms</strong> sind Onlinespiele leicht verzögert spielbar', // 4
        'Mit einem Ping <strong>bis 60ms</strong> sind alle Onlinespiele problemlos spielbar' // 5
    ]


};