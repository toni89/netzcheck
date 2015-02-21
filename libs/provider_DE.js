module.exports = [

    /*
    type = [dsl, mobile, hotspot]
    subtype = [adsl, vdsl, satellite, lte, umts]
    // lte ab 16.000
    options = ['phoneflat','smsflat']
     */


    /* Muster
    {
        "slug": "",
        "name": "",
        "type": "",
        "country": "DE",
        "affiliateUrl": "",
        "availabilityUrl": "",
        "plans": [
            {
                "slug": "",
                "name": "",
                "speed": 0,
                "affiliateUrl": "",
                "availabilityUrl": ""
            }
        ],
        "business": {
            name: "",
            location: "",
            employees: 0,
            salesVolume: "",
            founded: 1988,
            url: {
                text: "",
                goto: ""
            }
        }
    }
    */




    {
        "slug": "1und1-dsl-de",
        "name": "1&1",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://dsl.1und1.de/dsl-mit-vertragslaufzeit",
        "availabilityUrl": "http://dsl.1und1.de/dsl-verfuegbarkeit",
        "plans": [
            {
                "slug": "surf-phone-flat-special",
                "name": "Surf & Phone-Flat Special",
                "speed": 16000
            },
            {
                "slug": "surf-flat-6000",
                "name": "Surf Flat 6.000",
                "speed": 6000
            },
            {
                "slug": "doppel-flat-16000",
                "name": "Doppel-Flat 16.000",
                "speed": 16000
            },
            {
                "slug":"doppel-flat-vdsl-50000",
                "name":"Doppel-Flat V-DSL 50.000",
                "speed": 50000
            },
            {
                "slug":"doppel-flat-vdsl-100000",
                "name":"Doppel-Flat V-DSL 100.000",
                "speed": 100000
            }
        ],
        "business": {
            name: "1&1 Internet AG",
            logo: "1und1.png",
            location: "Montabaur, Deutschland",
            employees: 2000,
            salesVolume: "629,7 Mio. EUR (2013)",
            founded: 1988,
            url: {
                text: "1und1.de",
                goto: "http://www.1und1.de"
            }
        }
    },
    {
        "slug": "1und1-mobile-de",
        "name": "1&1 (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://mobile.1und1.de/",
        "plans": [
            {
                "slug": "special",
                "name": "Special",
                "speed": 14400,
                "dataVolume": 250
            },
            {
                "slug": "basic",
                "name": "Basic",
                "speed": 21600,
                "dataVolume": 1000
            },
            {
                "slug": "plus",
                "name": "Plus",
                "speed": 21600,
                "dataVolume": 2000
            },
            {
                "slug": "pro",
                "name": "Pro",
                "speed": 42200,
                "dataVolume": 4000
            },

            // Notebooks
            {
                "slug": "notebook-flat-special",
                "name": "Notebook-Flat Special",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 14400
            },
            {
                "slug": "notebook-flat-l",
                "name": "Notebook-Flat L",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 21600
            },
            {
                "slug": "notebook-flat-xl",
                "name": "Notebook-Flat XL",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 21600
            },
            {
                "slug": "notebook-flat-xxl",
                "name": "Notebook-Flat XXL",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 42200
            },

            // Tablets
            {
                "slug": "tablet-flat-special",
                "name": "Tablet-Flat Special",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 14400
            },
            {
                "slug": "tablet-flat-l",
                "name": "Tablet-Flat L",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 21600
            },
            {
                "slug": "tablet-flat-xl",
                "name": "Tablet-Flat XL",
                "affiliateUrl": "http://mobile.1und1.de/notebook-flat#notebook-flat",
                "speed": 42200
            }
        ],
        "business": {
            name: "1&1 Internet AG",
            logo: "1und1.png",
            location: "Montabaur, Deutschland",
            employees: 2000,
            salesVolume: "629,7 Mio. EUR (2013)",
            founded: 1988,
            url: {
                text: "1und1.de",
                goto: "http://www.1und1.de/"
            }
        }
    },


    {
        "slug": "1click2dsl-dsl-de",
        "name": "1click2DSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.1click2dsl.de/",
        "availabilityUrl": "http://www.1click2dsl.de/",
        "plans": [
            {
                "slug": "flat-smart",
                "name": "FLAT Smart",
                "speed": 0
            },
            {
                "slug": "flat-power",
                "name": "FLAT Power",
                "speed": 0
            }
        ],
        "business": {
            name: "1click2 Internet Services GmbH",
            logo: "1click2.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "1click2dsl.de",
                goto: "http://1click2dsl.de/"
            }
        }
    },



    {
        "slug": "4dsl-dsl-de",
        "name": "4DSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.4dsl.de",
        "availabilityUrl": "http://www.4dsl.de",
        "plans": [
            {
                "slug": "einsteiger",
                "name": "Einsteiger",
                "speed": 16000
            },
            {
                "slug": "normal",
                "name": "Normal",
                "speed": 6000
            },
            {
                "slug": "power",
                "name": "Power",
                "speed": 6000
            },
            {
                "slug": "business-0",
                "name": "Business 0",
                "speed": 16000
            },
            {
                "slug": "business-2",
                "name": "Business 2",
                "speed": 16000
            },
            {
                "slug": "business-25",
                "name": "Business 25",
                "speed": 0
            }
        ],
        "business": {
            name: "Oberberg Online Informationssysteme GmbH",
            logo: "4dsl.png",
            location: "Gummersbach, Deutschland",
            founded: 1996,
            url: {
                text: "4dsl.de",
                goto: "http://www.4dsl.de"
            }
        }
    },



    {
        "slug": "aalencitydsl-dsl-de",
        "name": "AalenCityDSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://dsl.aalencity.com/detail/",
        "availabilityUrl": "http://dsl.aalencity.com/verfuegbarkeit/",
        "plans": [
            {
                "slug": "phone-flatrate-1000",
                "name": "Phone Flatrate 1.000",
                "speed": 1000
            },
            {
                "slug": "phone-surf-flatrate-2000",
                "name": "Phone & Surf Flatrate 2.000",
                "speed": 2000
            },
            {
                "slug": "phone-surf-flatrate-6000",
                "name": "Phone & Surf Flatrate 6.000",
                "speed": 6000
            },
            {
                "slug": "fairtime-1000-s",
                "name": "FairTime 1000 S",
                "speed": 1000
            },
            {
                "slug": "flatrate-1000-s",
                "name": "Flatrate 1000 S",
                "speed": 1000
            }
        ],
        "business": {
            name: "dynamitec GbR",
            logo: "aalencitydsl.png",
            logobg: "006bbd",
            location: "Aalen, Deutschland",
            founded: 1999,
            url: {
                text: "dsl.aalencity.com",
                goto: "http://dsl.aalencity.com"
            }
        }
    },



    {
        "slug": "acn-dsl-de",
        "name": "a c n",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.acn.de",
        "availabilityUrl": "http://www.acn.de",
        "plans": [
            {
                "slug": "flatrate-paket-1000",
                "name": "FLATRATE-Paket 1.000",
                "speed": 1000
            },
            {
                "slug": "flatrate-paket-2000",
                "name": "FLATRATE-Paket 2.000",
                "speed": 2000
            },
            {
                "slug": "flatrate-paket-6000",
                "name": "FLATRATE-Paket 6.000",
                "speed": 6000
            }
        ],
        "business": {
            name: "a c n GmbH",
            logo: "acn.png",
            location: "Obertshausen, Deutschland",
            founded: 1994,
            url: {
                text: "acn.de",
                goto: "http://www.acn.de/"
            }
        }
    },



    {
        "slug": "aco-connect-dsl-de",
        "name": "ACO-connect",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.aco-connect.de/produkte/aco-connect.html",
        "availabilityUrl": "http://www.aco-connect.de/bestellung/versorgte-gebiete.html",
        "plans": [
            {
                "slug": "aco-connect-3000",
                "name": "ACO-connect 3.000",
                "speed": 3000
            },
            {
                "slug": "aco-connect-6000",
                "name": "ACO-connect 6.000",
                "speed": 6000
            },
            {
                "slug": "aco-connect-16000",
                "name": "ACO-connect 16.000",
                "speed": 16000
            },
            {
                "slug": "aco-connect-plus-3000",
                "name": "ACO-connect Plus 3.000",
                "speed": 3000
            },
            {
                "slug": "aco-connect-plus-6000",
                "name": "ACO-connect Plus 6.000",
                "speed": 6000
            },
            {
                "slug": "aco-connect-plus-16000",
                "name": "ACO-connect Plus 16.000",
                "speed": 160000
            },
            {
                "slug": "aco-connect-plus-vdsl-50",
                "name": "ACO-connect Plus VDSL 50",
                "speed": 50000
            },
            {
                "slug": "aco-connect-v-plus",
                "name": "ACO-connect V-PLUS",
                "speed": 16000
            }

        ],
        "business": {
            name: "ACO Computerservice GmbH",
            logo: "acoconnect.png",
            location: "Kassel, Deutschland",
            founded: 2000,
            url: {
                text: "aco-connect.de",
                goto: "http://www.aco-connect.de/"
            }
        }
    },



    {
        "slug": "acs-hartmann-hotspot-de",
        "name": "ACS Hartmann",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.as-hartmann.de/produkte",
        "availabilityUrl": "http://www.as-hartmann.de/leistungen/netzabdeckungen",
        "plans": [
            {
                "slug": "wdsl-4000",
                "name": "WDSL 4.000",
                "speed": 4000,
                "affiliateUrl": "http://www.as-hartmann.de/produkte/wdsl-2000"
            },
            {
                "slug": "wdsl-8000",
                "name": "WDSL 8.000",
                "speed": 8000,
                "affiliateUrl": "http://www.as-hartmann.de/produkte/wdsl-4000"
            },
            {
                "slug": "wdsl-12000",
                "name": "WDSL 12.000",
                "speed": 12000,
                "affiliateUrl": "http://www.as-hartmann.de/produkte/wdsl-6000"
            },
            {
                "slug": "wdsl-16000",
                "name": "WDSL 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.as-hartmann.de/produkte/wdsl-8000"
            }
        ],
        "business": {
            name: "Antennen- und Computerservice Dieter Hartmann",
            logo: "acshartmann.png",
            logobg: "f1f5f6",
            location: "Neustadt an der Orla, Deutschland",
            employees: 7,
            founded: 1990,
            url: {
                text: "as-hartmann.de",
                goto: "http://www.as-hartmann.de"
            }
        }
    },



    {
        "slug": "aep-plueckhahn-dsl-de",
        "name": "AEP Plückhahn",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.aepnet.de/index.php/Internet-Telefonie/375/0/",
        "availabilityUrl": "http://www.aepnet.de/index.php/Internet-Telefonie/375/0/",
        "plans": [
            {
                "slug": "ic-standard",
                "name": "IC Standard",
                "speed": 10000
            },
            {
                "slug": "ic-komfort",
                "name": "IC Komfort",
                "speed": 28000
            },
            {
                "slug": "ic-profi",
                "name": "IC Profi",
                "speed": 52000
            },
            {
                "slug": "infocity-6000",
                "name": "Infocity 6.000",
                "speed": 6000
            },
            {
                "slug": "infocity-20000",
                "name": "Infocity 20.000",
                "speed": 20000
            }
        ],
        "business": {
            name: "AEP Plückhahn Service GmbH",
            logo: "aep-plueckhahn.png",
            location: "Wolgast, Deutschland",
            employees: 50,
            founded: 1978,
            url: {
                text: "www.aepnet.de",
                goto: "http://www.aepnet.de/"
            }
        }
    },



    {
        "slug": "airdsl-hotspot-de",
        "name": "AirDSL",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.air-dsl.net/tarife_1.htm",
        "availabilityUrl": "http://www.air-dsl.net/versorgung_1.htm",
        "plans": [
            {
                "slug": "airdsl-1000",
                "name": "AirDSL 1000",
                "speed": 1000,
                "affiliateUrl": "http://www.air-dsl.net/tarife_2.htm"
            },
            {
                "slug": "airdsl-2000",
                "name": "AirDSL 2000",
                "speed": 2000,
                "affiliateUrl": "http://www.air-dsl.net/tarife_2.htm"
            },
            {
                "slug": "airdsl-3000",
                "name": "AirDSL 3000",
                "speed": 3000,
                "affiliateUrl": "http://www.air-dsl.net/tarife_2.htm"
            },
            {
                "slug": "airdsl-2000-city",
                "name": "AirDSL 2000 City",
                "speed": 2000,
                "affiliateUrl": "http://www.air-dsl.net/tarife_3.htm"
            },
            {
                "slug": "airdsl-3000-city",
                "name": "AirDSL 3000 City",
                "speed": 3000,
                "affiliateUrl": "http://www.air-dsl.net/tarife_3.htm"
            },
        ],
        "business": {
            name: "EFN eifel-net Internet-Provider GmbH",
            logo: "airdsl.png",
            location: "Euskirchen, Deutschland",
            url: {
                text: "air-dsl.net",
                goto: "http://www.air-dsl.net"
            }
        }
    },



    {
        "slug": "aldi-talk-mobile-de",
        "name": "ALDI Talk",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://www.alditalk.de/sued/Surfen/index.php?Z_highmain=2&Z_highsub=0&Z_highsubsub=0",
        "plans": [
            {
                "slug": "basistarif",
                "name": "Basistarif",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/basistarif.php?Z_highmain=2&Z_highsub=1&Z_highsubsub=0"
            },
            {
                "slug": "24-stunden-internet-flatrate",
                "name": "24 Stunden Internet-Flatrate",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/24_stunden_internet-flatrate.php?Z_highmain=2&Z_highsub=3&Z_highsubsub=0"
            },
            {
                "slug": "internet-flatrate-s",
                "name": "Internet-Flatrate S",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/internet-flatrate_s.php?Z_highmain=2&Z_highsub=4&Z_highsubsub=0"
            },
            {
                "slug": "internet-flatrate-m",
                "name": "Internet-Flatrate M",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/internet-flatrate_m.php?Z_highmain=2&Z_highsub=5&Z_highsubsub=0"
            },
            {
                "slug": "internet-flatrate-l",
                "name": "Internet-Flatrate L",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/internet-flatrate_l.php?Z_highmain=2&Z_highsub=6&Z_highsubsub=0"
            },
            {
                "slug": "internet-flatrate-xl",
                "name": "Internet-Flatrate XL",
                "speed": 0,
                "affiliateUrl": "https://www.alditalk.de/sued/Surfen/internet-flatrate_xl.php?Z_highmain=2&Z_highsub=7&Z_highsubsub=0"
            }
        ],
        "business": {
            name: "E-Plus Service GmbH & Co. KG",
            logo: "alditalk.png",
            location: "Potsdam, Deutschland",
            employees: 4500,
            salesVolume: "3,2 Milliarden EUR (2013)",
            founded: 1993,
            url: {
                text: "alditalk.de",
                goto: "https://www.alditalk.de"
            }
        }
    },



    {
        "slug": "allgaeudsl-dsl-de",
        "name": "allgäuDSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://www.allgaeudsl.de/start.html",
        "availabilityUrl": "https://www.allgaeudsl.de/verfuegbarkeit.html",
        "plans": [
            {
                "slug": "3000-basis",
                "name": "3.000 Basis",
                "speed": 3000
            },
            {
                "slug": "7000-standard",
                "name": "7.000 Standard",
                "speed": 7000
            },
            {
                "slug": "12000-komfort",
                "name": "12.000 Komfort",
                "speed": 12000
            },
            {
                "slug": "2000-flat-sdsl",
                "name": "2.000/flat SDSL",
                "speed": 2000
            },
            {
                "slug": "4000-flat-sdsl",
                "name": "4.000/flat SDSL",
                "speed": 4000
            },
            {
                "slug": "10000-flat-sdsl",
                "name": "10.000/flat SDSL",
                "speed": 10000
            },
            {
                "slug": "20000-flat-sdsl",
                "name": "20.000/flat SDSL",
                "speed": 20000
            }
        ],
        "business": {
            name: "amisol GmbH",
            logo: "allgaeudsl.png",
            location: "Wertach, Deutschland",
            founded: 2012,
            url: {
                text: "allgaeudsl.de",
                goto: "https://www.allgaeudsl.de/"
            }
        }
    },



    {
        "slug": "amplus-dsl-de",
        "name": "amplus",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.amplus.ag/",
        "plans": [
            {
                "slug": "amplus-internet-24m",
                "name": "amplusINTERNET.24M",
                "speed": 24000,
                "affiliateUrl": "http://www.amplus.ag/privatkunden/amplusinternet24m/",
                "availabilityUrl": "http://www.amplus.ag/privatkunden/amplusinternet24m/"
            },
            {
                "slug": "amplus-internet-50m",
                "name": "amplusINTERNET.50M",
                "speed": 50000,
                "affiliateUrl": "http://www.amplus.ag/privatkunden/amplusinternet50m/",
                "availabilityUrl": "http://www.amplus.ag/privatkunden/amplusinternet50m/"
            },
            {
                "slug": "amplus-internet-100m",
                "name": "amplusINTERNET.100M",
                "speed": 100000,
                "affiliateUrl": "http://www.amplus.ag/privatkunden/amplusinternet100m/",
                "availabilityUrl": "http://www.amplus.ag/privatkunden/amplusinternet100m/"
            },
            {
                "slug": "amplus-internet-200m",
                "name": "amplusINTERNET.200M",
                "speed": 200000,
                "affiliateUrl": "http://www.amplus.ag/privatkunden/amplusinternet200m/",
                "availabilityUrl": "http://www.amplus.ag/privatkunden/amplusinternet200m/"
            },
            {
                "slug": "amplus-business",
                "name": "amplusBUSINESS",
                "speed": 20000,
                "affiliateUrl": "http://www.amplus.ag/firmenkunden/amplusbusiness/",
                "availabilityUrl": "http://www.amplus.ag/firmenkunden/amplusbusiness/"
            },
            {
                "slug": "amplus-connect",
                "name": "amplusCONNECT",
                "speed": 10000000,
                "affiliateUrl": "http://www.amplus.ag/firmenkunden/amplusconnect/",
                "availabilityUrl": "http://www.amplus.ag/firmenkunden/amplusconnect/"
            },
            {
                "slug": "amplus-ethernet",
                "name": "amplusETHERNET",
                "speed": 100000,
                "affiliateUrl": "http://www.amplus.ag/firmenkunden/amplusethernet/",
                "availabilityUrl": "http://www.amplus.ag/firmenkunden/amplusethernet/"
            }
        ],
        "business": {
            name: "amplus AG",
            logo: "amplus.png",
            location: "Teisnach, Deutschland",
            founded: 2009,
            url: {
                text: "amplus.ag",
                goto: "http://www.amplus.ag/"
            }
        }
    },



    {
        "slug": "andreas-muth-antennenbau-dsl-de",
        "name": "Andreas Muth Antennenbau",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.regiospeed.net/",
        "availabilityUrl": "http://www.regiospeed.net/verfuegbarkeit.htm",
        "plans": [
            {
                "slug": "cable-4",
                "name": "Cable 4",
                "speed": 4000
            },
            {
                "slug": "cable-4t",
                "name": "Cable 4T",
                "speed": 4000
            },
            {
                "slug": "cable-4t-plus",
                "name": "Cable 4T+",
                "speed": 4000
            },
            {
                "slug": "cable-16",
                "name": "Cable 16",
                "speed": 16000
            },
            {
                "slug": "cable-16t",
                "name": "Cable 16T",
                "speed": 16000
            },
            {
                "slug": "cable-16t-plus",
                "name": "Cable 16T+",
                "speed": 16000
            },
            {
                "slug": "cable-50",
                "name": "Cable 50",
                "speed": 50000
            },
            {
                "slug": "cable-50t",
                "name": "Cable 50T",
                "speed": 50000
            },
            {
                "slug": "cable-50t-plus",
                "name": "Cable 50T+",
                "speed": 50000
            },
            {
                "slug": "cable-100",
                "name": "Cable 100",
                "speed": 100000
            },
            {
                "slug": "cable-100-t",
                "name": "Cable 100T",
                "speed": 100000
            },
            {
                "slug": "cable-100t-plus",
                "name": "Cable 100T+",
                "speed": 100000
            },
            {
                "slug": "vdsl-4",
                "name": "VDSL 4",
                "speed": 4000
            },
            {
                "slug": "vdsl-4t",
                "name": "VDSL 4T",
                "speed": 4000
            },
            {
                "slug": "vdsl-4t-plus",
                "name": "VDSL 4T+",
                "speed": 4000
            },
            {
                "slug": "vdsl-16",
                "name": "VDSL 16",
                "speed": 16000
            },
            {
                "slug": "vdsl-16t",
                "name": "VDSL 16T",
                "speed": 16000
            },
            {
                "slug": "vdsl-16t-plus",
                "name": "VDSL 16T+",
                "speed": 16000
            },
            {
                "slug": "vdsl-50",
                "name": "VDSL 50",
                "speed": 50000
            },
            {
                "slug": "vdsl-50t",
                "name": "VDSL 50T",
                "speed": 50000
            },
            {
                "slug": "vdsl-50t-plus",
                "name": "VDSL 50T+",
                "speed": 50000
            },
            {
                "slug": "vdsl-100",
                "name": "VDSL 100",
                "speed": 100000
            },
            {
                "slug": "vdsl-100t",
                "name": "VDSL 100T",
                "speed": 100000
            },
            {
                "slug": "vdsl-100t-plus",
                "name": "VDSL 100T+",
                "speed": 100000
            }
        ],
        "business": {
            name: "Andreas Muth Antennenbaubetrieb",
            logo: "antennenbau-muth.png",
            location: "Halle, Deutschland",
            url: {
                text: "regiospeed.net",
                goto: "http://www.regiospeed.net/"
            }
        }
    },



    {
        "slug": "an-dsl-de",
        "name": "an!",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.an.de/",
        "availabilityUrl": "http://www.an.de/verfuegbarkeitscheck/",
        "plans": [
            {
                "slug": "an-dsl-25000",
                "name": "an! DSL 25.000",
                "speed": 25000,
                "affiliateUrl": "http://www.an.de/an-dsl-25000/"
            },
            {
                "slug": "standard-anschluss",
                "name": "Standard an!schluss",
                "speed": 50000,
                "affiliateUrl": "http://www.an.de/standard-anschluss/"
            },
            {
                "slug": "universal-anschluss",
                "name": "Universal an!schluss",
                "speed": 50000,
                "affiliateUrl": "http://www.an.de/universal-anschluss/"
            },
            {
                "slug": "komfort-anschluss",
                "name": "Komfort an!schluss",
                "speed": 100000,
                "affiliateUrl": "http://www.an.de/komfort-anschluss/"
            },
            {
                "slug": "premium-anschluss",
                "name": "Premium an!schluss",
                "speed": 100000,
                "affiliateUrl": "http://www.an.de/premium-anschluss/"
            }
        ],
        "business": {
            name: "HL komm Telekommunikations GmbH",
            logo: "an.png",
            location: "Leipzig, Deutschland",
            founded: 1997,
            url: {
                text: "an.de",
                goto: "http://www.an.de/"
            }
        }
    },



    {
        "slug": "arche-net-dsl-de",
        "name": "Arche.Net",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://www.arche.net/pages/produkte_/kabelnetze/index.html",
        "plans": [
            {
                "slug": "dsl-6",
                "name": "DSL 6",
                "speed": 6000
            },
            {
                "slug": "dsl-16",
                "name": "DSL 16",
                "speed": 16000
            },
            {
                "slug": "vdsl-25",
                "name": "VDSL 25",
                "speed": 25000
            },
            {
                "slug": "vdsl-50",
                "name": "VDSL 50",
                "speed": 50000
            }
        ],
        "business": {
            name: "ARCHE NetVision GmbH",
            logo: "archenet.png",
            location: "Wilhelmshaven, Deutschland",
            employees: 25,
            founded: 2009,
            url: {
                text: "arche.net",
                goto: "https://www.arche.net/"
            }
        }
    },



    {
        "slug": "arche-net-hotspot-de",
        "name": "Arche.Net (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "https://www.arche.net/pages/produkte_/funknetze/index.html",
        "plans": [
            {
                "slug": "wdsl-6",
                "name": "W-DSL 6",
                "speed": 6000
            },
            {
                "slug": "wdsl-6-internet-pur",
                "name": "W-DSL 6 Internet Pur",
                "speed": 6000
            },
            {
                "slug": "wdsl-10",
                "name": "W-DSL 10",
                "speed": 10000
            }
        ],
        "business": {
            name: "ARCHE NetVision GmbH",
            logo: "archenet.png",
            location: "Wilhelmshaven, Deutschland",
            employees: 25,
            founded: 2009,
            url: {
                text: "arche.net",
                goto: "https://www.arche.net/"
            }
        }
    },



    {
        "slug": "ateo-dsl-de",
        "name": "AteO",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.ateo.de/dsl.html",
        "availabilityUrl": "http://www.ateo.de/dsl.html",
        "plans": [
            {
                "slug": "ateo-dsl-5000",
                "name": "ATeO-DSL.Profi 5.000",
                "speed": 16000
            },
            {
                "slug": "ateo-dsl-10000",
                "name": "ATeO-DSL.Profi 10.000",
                "speed": 16000
            },
            {
                "slug": "ateo-dsl-15000",
                "name": "ATeO-DSL.Profi 15.000",
                "speed": 16000
            },
            {
                "slug": "ateo-dsl-premium",
                "name": "ATeO-DSL.Profi Premium",
                "speed": 16000
            },
            {
                "slug": "ateo-dsl-thueringen",
                "name": "ATeO-DSL.Thüringen.Flat ",
                "speed": 3000
            },
            {
                "slug": "ateo-dsl-flat",
                "name": "ATeO-DSL.Flat ",
                "speed": 3000
            },
            {
                "slug": "ateo-dsl-flat-premium",
                "name": "ATeO-DSL.Flat Premium",
                "speed": 16000
            }

        ],
        "business": {
            name: "ATeO-Service Mario Pohle",
            logo: "ateo.png",
            location: "Erfurt, Deutschland",
            founded: 1987,
            url: {
                text: "ateo.de",
                goto: "http://www.ateo.de"
            }
        }
    },



    {
        "slug": "avego-dsl-de",
        "name": "Avego",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.avego.de",
        "availabilityUrl": "http://www.avego.de/verfuegbarkeit.php",
        "plans": [
            {
                "slug": "surf-n-phone-classic",
                "name": "surf-n-phone classic",
                "speed": 16000,
                "affiliateUrl": "http://www.avego.de/classic.php"
            },
            {
                "slug": "surf-n-phone-classic-plus",
                "name": "surf-n-phone classic plus",
                "speed": 16000,
                "affiliateUrl": "http://www.avego.de/classic.php"
            },
            {
                "slug": "surf-n-phone-double",
                "name": "surf-n-phone double",
                "speed": 16000,
                "affiliateUrl": "http://www.avego.de/double.php"
            }
        ],
        "business": {
            name: "endesha GmbH",
            logo: "avego.png",
            location: "Butsbach, Deutschland",
            url: {
                text: "avego.de",
                goto: "http://www.avego.de"
            }
        }
    },



    {
        "slug": "base-mobile-de",
        "name": "Base",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://base.de",
        "plans": [
        // TODO: Handy tarife dazu
            {
                "slug": "internet-m-plus",
                "name": "Internet M Plus",
                "speed": 42000,
                "affiliateUrl": "http://www.base.de/base/tarife/datentarife/music-all-in/internet-m-plus/p/servicePlan_b_internet_m_plus"
            },
            {
                "slug": "internet-l-plus",
                "name": "internet L Plus",
                "speed": 42000,
                "affiliateUrl": "http://www.base.de/base/tarife/datentarife/music-all-in/internet-l-plus/p/servicePlan_b_internet_l_plus"
            },
            {
                "slug": "internet-xl-plus",
                "name": "Internet XL Plus",
                "speed": 42000,
                "affiliateUrl": "http://www.base.de/base/tarife/datentarife/music-all-in/internet-xl-plus/p/servicePlan_b_internet_xl_plus"
            },
            {
                "slug": "internet-xxl-plus",
                "name": "Internet XXL Plus",
                "speed": 42000,
                "affiliateUrl": "http://www.base.de/base/tarife/datentarife/music-all-in/internet-xxl-plus/p/servicePlan_b_internet_xxl_plus"
            }

        ],
        "business": {
            name: "E-Plus Service GmbH & Co. KG",
            logo: "base.png",
            location: "Potsdam, Deutschland",
            employees: 4500,
            salesVolume: "3,2 Milliarden EUR (2013)",
            founded: 1993,
            url: {
                text: "base.de",
                goto: "https://base.de"
            }
        }
    },



    {
        "slug": "bayerndsl-dsl-de",
        "name": "BayernDSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.bayerndsl.de",
        "availabilityUrl": "http://www.bayerndsl.de/privat/verfuegbarkeit",
        "plans": [
            {
                "slug": "home-6000",
                "name": "Home 6.000",
                "speed": 6000
            },
            {
                "slug": "home-16000",
                "name": "Home 16.000",
                "speed": 16000
            },
            {
                "slug": "kombi-50000",
                "name": "Kombi 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "inexio Informationstechnologie und Telekommunikation KGaA",
            logo: "bayerndsl.png",
            location: "Saarlouis",
            employees: 21,
            founded: 2012,
            url: {
                text: "bayerndsl.de",
                goto: "http://www.bayerndsl.de"
            }
        }
    },



    {
        "slug": "bigsim-mobile-de",
        "name": "BigSIM",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.bigsim.de/data.html",
        "plans": [
            {
                "slug": "data-500",
                "name": "Data 500",
                "speed": 7200,
                "affiliateUrl": "http://www.bigsim.de/data-detail.html#pid-1"
            },
            {
                "slug": "data-1000",
                "name": "Data 1.000",
                "speed": 7200,
                "affiliateUrl": "http://www.bigsim.de/data-detail.html#pid-2"
            }
        ],
        "business": {
            name: "FlexiShop GmbH",
            logo: "bigsim.png",
            location: "Frankfurt am Main, Deutschland",
            url: {
                text: "bigsim.de",
                goto: "http://bigsim.de"
            }
        }
    },



    {
        "slug": "bildmobil-mobile-de",
        "name": "BILDmobil",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://www.bildmobil.de/datentarif-fuer-tablets-und-laptops.html",
        "plans": [
            {
                "slug": "90-minuten",
                "name": "90 Minuten",
                "speed": 7200
            },
            {
                "slug": "30-tage-s",
                "name": "30 Tage S",
                "speed": 7200
            },
            {
                "slug": "30-tage-m",
                "name": "30 Tage M",
                "speed": 7200
            },
            {
                "slug": "30-tage-l",
                "name": "30 Tage L",
                "speed": 7200
            },
            {
                "slug": "90-tage",
                "name": "90 Tage",
                "speed": 7200
            }
        ],
        "business": {
            name: "BILDmobil",
            logo: "bildmobil.png",
            location: "Saarbrücken, Deutschland",
            url: {
                text: "bildmobil.de",
                goto: "http://bildmobil.de"
            }
        }
    },



    {
        "slug": "bitel-dsl-de",
        "name": "BITel",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.bitel.de/privat-tarife.html",
        "availabilityUrl": "http://www.bitel.de/privat-anschlusscheck.php",
        "plans": [
            {
                "slug": "bitel-surf",
                "name": "BITel Surf",
                "speed": 16000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-surf.html"
            },
            {
                "slug": "bitel-treuetarif",
                "name": "BITel Treuetarif",
                "speed": 16000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-treuetarif.html"
            },
            {
                "slug": "bitel-komplett",
                "name": "BITel Komplett",
                "speed": 6000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-komplett.html"
            },
            {
                "slug": "bitel-exlusiv",
                "name": "BITel Exklusiv",
                "speed": 16000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-exklusiv.html"
            },
            {
                "slug": "bitel-vdsl",
                "name": "BITel VDSL",
                "speed": 50000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-vdsl.html"
            },
            {
                "slug": "bitel-solo",
                "name": "BITel Solo",
                "speed": 16000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-solo.html"
            },
            {
                "slug": "bitel-vdsl-solo",
                "name": "BITel VDSL Solo",
                "speed": 50000,
                "affiliateUrl": "http://www.bitel.de/privat-tarife-bitel-vdsl-solo.html"
            }
        ],
        "business": {
            name: "BITel Gesellschaft für Telekommunikation mbH",
            logo: "bitel.png",
            location: "Gütersloh, Deutschland",
            employees: 63,
            founded: 1997,
            url: {
                text: "bitel.de",
                goto: "http://bitel.de"
            }
        }
    },


    {
        "slug": "bornet-dsl-de",
        "name": "BORnet",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.bornet.de",
        "availabilityUrl": "http://www.bornet.de",
        "plans": [
            {
                "slug": "glasfaser-1-100mbit",
                "name": "Glasfaser 1.0 (100 MBit/s)",
                "speed": 100000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-10-internet/"
            },
            {
                "slug": "glasfaser-1-200mbit",
                "name": "Glasfaser 1.0 (200 MBit/s)",
                "speed": 200000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-10-internet/"
            },
            {
                "slug": "glasfaser-2-100mbit",
                "name": "Glasfaser 2.0 (100 MBit/s)",
                "speed": 100000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-20-internet-und-festnetz/"
            },
            {
                "slug": "glasfaser-2-200mbit",
                "name": "Glasfaser 2.0 (200 MBit/s)",
                "speed": 200000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-20-internet-und-festnetz/"
            },
            {
                "slug": "glasfaser-3-100mbit",
                "name": "Glasfaser 3.0 (100 MBit/s)",
                "speed": 100000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-30-internet-festnetz-und-hd-tv/"
            },
            {
                "slug": "glasfaser-3-200mbit",
                "name": "Glasfaser 3.0 (200 MBit/s)",
                "speed": 200000,
                "affiliateUrl": "http://www.bornet.de/produkte/glasfaser-ftth/glasfaser-30-internet-festnetz-und-hd-tv/"
            },
            {
                "slug": "doppel-flat-classic",
                "name": "Doppel-Flat Classic",
                "speed": 128,
                "affiliateUrl": "http://www.bornet.de/produkte/dsl-isdn/classic/"
            },
            {
                "slug": "doppel-flat-basic",
                "name": "Doppel-Flat Basic",
                "speed": 6000,
                "affiliateUrl": "http://www.bornet.de/produkte/dsl-isdn/basic/"
            },
            {
                "slug": "doppel-flat-select",
                "name": "Doppel-Flat Select",
                "speed": 16000,
                "affiliateUrl": "http://www.bornet.de/produkte/dsl-isdn/select/"
            }

        ],
        "business": {
            name: "BORnet GmbH",
            logo: "bornet.png",
            location: "Borken, Deutschland",
            founded: 1998,
            url: {
                text: "bornet.de",
                goto: "http://www.bornet.de/"
            }
        }
    },



    {
        "slug": "breitbandnord-dsl-de",
        "name": "Breitband Innovationen Nord",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://www.breitband-nord.de/tarife",
        "availabilityUrl": "https://www.breitband-nord.de/verfuegbarkeit",
        "plans": [
            {
                "slug": "bin-starter",
                "name": "BIN Starter",
                "speed": 5000
            },
            {
                "slug": "bin-standard",
                "name": "BIN Standard",
                "speed": 25000
            },
            {
                "slug": "bin-premium",
                "name": "BIN Premium",
                "speed": 50000
            },
            {
                "slug": "bin-internet-5000",
                "name": "BIN Internet 5.000",
                "speed": 5000
            },
            {
                "slug": "bin-internet-25000",
                "name": "BIN Internet 25.000",
                "speed": 25000
            },
            {
                "slug": "bin-internet-50000",
                "name": "BIN Internet 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "Breitband Innovationen Nord GmbH",
            logo: "breitband-nord.png",
            location: "Ottersberg, Deutschland",
            url: {
                text: "breitband-nord.de",
                goto: "https://www.breitband-nord.de/"
            }
        }
    },



    {
        "slug": "cable-4-dsl-de",
        "name": "Cable4",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.cable4.de/internet-und-telefonie/",
        "availabilityUrl": "http://www.cable4.de/verfuegbarkeits-check/",
        "plans": [
            {
                "slug": "starter-paket",
                "name": "Starter Paket",
                "speed": 8000
            },
            {
                "slug": "classic-paket",
                "name": "Classic Paket",
                "speed": 16000
            },
            {
                "slug": "power-paket",
                "name": "Power Paket",
                "speed": 32000
            }
        ],
        "business": {
            name: "Cable 4 GmbH",
            logo: "cable4.png",
            location: "Karlsruhe, Deutschland",
            founded: 2007,
            url: {
                text: "cable4.de",
                goto: "http://www.cable4.de"
            }
        }
    },



    {
        "slug": "cablesurf-dsl-de",
        "name": "cablesurf",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.cablesurf.de/produkt.php",
        "availabilityUrl": "http://www.cablesurf.de/produkt.php",
        "plans": [
            {
                "slug": "cablesurf-2000",
                "name": "cablesurf 2.000",
                "speed": 2000
            },
            {
                "slug": "cablesurf-6000",
                "name": "cablesurf 6.000",
                "speed": 6000
            },
            {
                "slug": "cablesurf-16000",
                "name": "cablesurf 16.000",
                "speed": 16000
            },
            {
                "slug": "cablesurf-20000",
                "name": "cablesurf 20.000",
                "speed": 20000
            },
            {
                "slug": "cablesurf-25000",
                "name": "cablesurf 25.000",
                "speed": 25000
            },
            {
                "slug": "cablesurf-50000",
                "name": "cablesurf 50.000",
                "speed": 50000
            },
            {
                "slug": "cablesurf-80000",
                "name": "cablesurf 80.000",
                "speed": 80000
            },
            {
                "slug": "cablesurf-100000",
                "name": "cablesurf 100.000",
                "speed": 100000
            },
            {
                "slug": "cablesurf-120000",
                "name": "cablesurf 120.000",
                "speed": 120000
            }
        ],
        "business": {
            name: "Kabelfernsehen München ServiCenter GmbH & Co.KG",
            logo: "cablesurf.png",
            location: "Unterföhring, Deutschland",
            founded: 1997,
            url: {
                text: "cablesurf.de",
                goto: "http://www.cablesurf.de/"
            }
        }
    },



    {
        "slug": "chiemgau-dsl-de",
        "name": "Chiemgau-DSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://chiemgau-dsl.info/produkte/produkte.html",
        "availabilityUrl": "http://chiemgau-dsl.info/gebiete/adresscheck.html",
        "plans": [
            {
                "slug": "chiemgau-6000",
                "name": "Chiemgau-DSL 6.000",
                "speed": 6000
            },
            {
                "slug": "chiemgau-6000-16000",
                "name": "6.000 + Upgrade auf 16.000",
                "speed": 16000
            },
            {
                "slug": "chiemgau-6000-25000",
                "name": "6.000 + Upgrade auf 25.000",
                "speed": 25000
            },
            {
                "slug": "chiemgau-6000-50000",
                "name": "6.000 + Upgrade auf 50.000",
                "speed": 50000
            },
            {
                "slug": "chiemgau-kombi-6000",
                "name": "Kombi 6.000",
                "speed": 6000
            },
            {
                "slug": "chiemgau-kombi-6000-16000",
                "name": "Kombi 6.000 + Upgrade auf 16.000",
                "speed": 16000
            },
            {
                "slug": "chiemgau-kombi-6000-25000",
                "name": "Kombi 6.000 + Upgrade auf 25.000",
                "speed": 25000
            },
            {
                "slug": "chiemgau-kombi-6000-50000",
                "name": "Kombi 6.000 + Upgrade auf 50.000",
                "speed": 50000
            }

        ],
        "business": {
            name: "ip-fabric GmbH",
            logo: "chiemgaudsl.png",
            location: "München, Deutschland",
            url: {
                text: "chiemgau-dsl.info",
                goto: "http://chiemgau-dsl.info"
            }
        }
    },



    {
        "slug": "congstar-dsl-de",
        "name": "Congstar",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.congstar.de/dsl-festnetz/",
        "plans": [
            {
                "slug": "komplett-1",
                "name": "komplett 1",
                "speed": 16000,
                "affiliateUrl": "http://www.congstar.de/komplett-1/",
                "availabilityUrl": "http://www.congstar.de/komplett-1/"
            },
            {
                "slug": "komplett-2",
                "name": "komplett 2",
                "speed": 16000,
                "affiliateUrl": "http://www.congstar.de/komplett-2/",
                "availabilityUrl": "http://www.congstar.de/komplett-2/"
            },
            {
                "slug": "komplett-2-vdsl",
                "name": "komplett 2 VDSL",
                "speed": 50000,
                "affiliateUrl": "http://www.congstar.de/komplett-2-vdsl/",
                "availabilityUrl": "http://www.congstar.de/komplett-2-vdsl/"
            },
            {
                "slug": "komplett-2-glasfaser",
                "name": "komplett 2 Glasfaser",
                "speed": 100000,
                "affiliateUrl": "http://www.congstar.de/komplett-2-glasfaser/",
                "availabilityUrl": "http://www.congstar.de/komplett-2-glasfaser/"
            }
        ],
        "business": {
            name: "congstar GmbH",
            logo: "congstar.png",
            logobg: "000000",
            location: "Köln, Deutschland",
            founded: 2007,
            url: {
                text: "congstar.de",
                goto: "http://www.congstar.de/"
            }
        }
    },



    {
        "slug": "congstart-mobile-de",
        "name": "Congstar (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.congstar.de/handytarife/",
        "plans": [
            {
                "slug": "smart-s",
                "name": "Smart S",
                "speed": 7200,
                "dataVolume": 100,
                "affiliateUrl": "http://www.congstar.de/smart-tarife/"
            },
            {
                "slug": "smart-m",
                "name": "Smart M",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "http://www.congstar.de/smart-tarife/"
            },
            {
                "slug": "smart-l",
                "name": "Smart L",
                "speed": 7200,
                "dataVolume": 250,
                "affiliateUrl": "http://www.congstar.de/smart-tarife/"
            },

            {
                "slug": "allnet-flat-s",
                "name": "Allnet Flat S",
                "speed": 7200,
                "dataVolume": 250,
                "affiliateUrl": "http://www.congstar.de/allnet-flat-tarife/"
            },
            {
                "slug": "allnet-flat-m",
                "name": "Allnet Flat M",
                "speed": 14400,
                "dataVolume": 500,
                "affiliateUrl": "http://www.congstar.de/allnet-flat-tarife/"
            },
            {
                "slug": "allnet-flat-l",
                "name": "Allnet Flat L",
                "speed": 14400,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.congstar.de/allnet-flat-tarife/"
            },

            {
                "slug": "prepaid-internet-stick",
                "name": "Prepaid Internet Stick",
                "speed": 7200,
                "affiliateUrl": "http://www.congstar.de/prepaid/prepaid-internet-stick/"
            }
        ],
        "business": {
            name: "congstar GmbH",
            logo: "congstar.png",
            logobg: "000000",
            location: "Köln, Deutschland",
            founded: 2007,
            url: {
                text: "congstar.de",
                goto: "http://www.congstar.de/"
            }
        }
    },



    {
        "slug": "crash-mobile-de",
        "name": "crash",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.crash-tarife.de",
        "plans": [
            {
                "slug": "5gb-datenflat",
                "name": "5GB Datenflat",
                "speed": 7200,
                "affiliateUrl": "http://www.crash-tarife.de/surf-flat-5000.html"
            }
        ],
        "business": {
            name: "mobilcom-debitel GmbH",
            logo: "crash.png",
            logobg: "000000",
            location: "Büdelsdorf, Deutschland",
            url: {
                text: "crash.de",
                goto: "http://crash.de/"
            }
        }
    },



    {
        "slug": "cstelekom-dsl-de",
        "name": "CS-Telekom",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.cs-telecom.de/index.php/festnetz",
        "plans": [
            {
                "slug": "cs-surf-and-phone-1",
                "name": "CS-Surf and Phone 1",
                "speed": 16000
            },
            {
                "slug": "cs-surf-and-phone-2",
                "name": "CS-Surf and Phone 2",
                "speed": 50000
            },
            {
                "slug": "cs-surf-and-phone-3",
                "name": "CS-Surf and Phone 3",
                "speed": 100000
            }
        ],
        "business": {
            name: "CS-Telecom Deutschland GmbH",
            logo: "cs-telekom.png",
            location: "München, Deutschland",
            url: {
                text: "cs-telecom.de",
                goto: "http://www.cs-telecom.de/"
            }
        }
    },



    {
        "slug": "cstelekom-mobile-de",
        "name": "CS-Telekom (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.cs-telecom.de/index.php/lte",
        "plans": [
            {
                "slug": "cs-surf-and-phone-lte",
                "name": "CS-Surf and Phone LTE",
                "speed": 16000
            },
            {
                "slug": "cs-surf-and-phone-lte-500000",
                "name": "CS-Surf and Phone LTE + Upgrade auf 50 MBit/s",
                "speed": 50000
            },
            {
                "slug": "cs-surf-and-phone-lte-1000000",
                "name": "CS-Surf and Phone LTE + Upgrade auf 100 Mbit/s",
                "speed": 100000
            },
            {
                "slug": "cs-airnet-lte-privat-7",
                "name": "CS-Airnet LTE Privat 7 MBit/s",
                "speed": 7000
            },
            {
                "slug": "cs-airnet-lte-privat-20",
                "name": "CS-Airnet LTE Privat 20 MBit/s",
                "speed": 20000
            },
            {
                "slug": "cs-airnet-lte-business-7",
                "name": "CS-Airnet LTE Business 7 MBit/s",
                "speed": 7000
            },
            {
                "slug": "cs-airnet-lte-business-20",
                "name": "CS-Airnet LTE Business 20 MBit/s",
                "speed": 20000
            }
        ],
        "business": {
            name: "CS-Telecom Deutschland GmbH",
            logo: "cs-telekom.png",
            location: "München, Deutschland",
            url: {
                text: "cs-telecom.de",
                goto: "http://www.cs-telecom.de/"
            }
        }
    },



    {
        "slug": "cudsl-dsl-de",
        "name": "CuDSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.cudsl.net/tarife.htm",
        "availabilityUrl": "http://www.cudsl.net/verfuegbarkeit.htm",
        "plans": [
            {
                "slug": "cudsl-1000",
                "name": "CuDSL 1.000",
                "speed": 1000
            },
            {
                "slug": "cudsl-2000",
                "name": "CuDSL 2.000",
                "speed": 2000
            },
            {
                "slug": "cudsl-4000",
                "name": "CuDSL 4.000",
                "speed": 4000
            },
            {
                "slug": "cudsl-8000",
                "name": "CuDSL 8.000",
                "speed": 8000
            },
            {
                "slug": "cudsl-16000",
                "name": "CuDSL 16.000",
                "speed": 16000
            },
            {
                "slug": "complete-4000",
                "name": "Complete 4.000",
                "speed": 4000
            },

            {
                "slug": "complete-16000-s",
                "name": "Complete 16.000 S",
                "speed": 16000
            },
            {
                "slug": "complete-16000-m",
                "name": "Complete 16.000 M",
                "speed": 16000
            },
            {
                "slug": "complete-16000-l",
                "name": "Complete 16.000 L",
                "speed": 16000
            },
            {
                "slug": "vdsl-30000",
                "name": "VDSL 30.000",
                "speed": 30000
            },
            {
                "slug": "sym-2300",
                "name": "SYM 2.300",
                "speed": 2300
            },
            {
                "slug": "sym-4000",
                "name": "SYM 4.000",
                "speed": 4000
            },
            {
                "slug": "sym-10000",
                "name": "SYM 10.000",
                "speed": 10000
            }
        ],
        "business": {
            name: "EFN eifel-net Internet-Provider GmbH",
            logo: "cudsl.png",
            location: "Euskirchen, Deutschland",
            url: {
                text: "cudsl.net",
                goto: "http://www.cudsl.net"
            }
        }
    },



    {
        "slug": "dachaucitycom-dsl-de",
        "name": "dachau-citycom",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.dachau-citycom.de/dcc-tarife-privatkunden-2014.htm",
        "availabilityUrl": "http://www.dachau-citycom.de/dcc-versorgungsgebiet.htm",
        "plans": [
            {
                "slug": "dachaunet-flat-10",
                "name": "DachauNet-Flat 10",
                "speed": 10000
            },
            {
                "slug": "dachaunet-flat-20",
                "name": "DachauNet-Flat 20",
                "speed": 20000
            },
            {
                "slug": "dachaunet-flat-50",
                "name": "DachauNet-Flat 50",
                "speed": 50000
            },
            {
                "slug": "dachaunet-flat-100",
                "name": "DachauNet-Flat 100",
                "speed": 100000
            },
            {
                "slug": "vdslnet-flat-10",
                "name": "VDSLNet-Flat 10",
                "speed": 10000
            },
            {
                "slug": "vdslnet-flat-50",
                "name": "VDSLNet-Flat 50",
                "speed": 50000
            },
            {
                "slug": "fiber-bundle-10",
                "name": "Fiber Bundle 10",
                "speed": 10000
            },
            {
                "slug": "fiber-bundle-20",
                "name": "Fiber Bundle 20",
                "speed": 20000
            },
            {
                "slug": "fiber-bundle-50",
                "name": "Fiber Bundle 50",
                "speed": 50000
            },
            {
                "slug": "fiber-bundle-100",
                "name": "Fiber Bundle 100",
                "speed": 100000
            },
            {
                "slug": "vdsl-bundle-10",
                "name": "VDSL Bundle 10",
                "speed": 10000
            },
            {
                "slug": "vdsl-bundle-50",
                "name": "VDSL Bundle 50",
                "speed": 50000
            },
            {
                "slug": "fiber-triple-10",
                "name": "Fiber Triple 10",
                "speed": 10000
            },
            {
                "slug": "fiber-triple-20",
                "name": "Fiber Triple 20",
                "speed": 20000
            },
            {
                "slug": "fiber-triple-50",
                "name": "Fiber Triple 50",
                "speed": 50000
            },
            {
                "slug": "fiber-triple-100",
                "name": "Fiber Triple 100",
                "speed": 100000
            }

        ],
        "business": {
            name: "DCC GmbH",
            logo: "dachaucitycom.png",
            location: "Dachau, Deutschland",
            url: {
                text: "dachau-citycom.de",
                goto: "http://www.dachau-citycom.de"
            }
        }
    },



    {
        "slug": "dateldessau-dsl-de",
        "name": "DATEL Dessau",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/telefoninternet/",
        "availabilityUrl": "http://www.datel-dessau.de/cms/service/verfugbarkeitscheck/",
        "plans": [
            {
                "slug": "doppelflat-start",
                "name": "Doppelflat Start",
                "speed": 6000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/telefoninternet/doppelflat-start/"
            },
            {
                "slug": "doppelflat-classic",
                "name": "Doppelflat Classic",
                "speed": 16000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/telefoninternet/doppelflat-classic/"
            },
            {
                "slug": "doppelflat-comfort",
                "name": "Doppelflat Comfort",
                "speed": 25000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/telefoninternet/doppelflat-comfort/"
            },
            {
                "slug": "doppelflat-premium",
                "name": "Doppelflat 50",
                "speed": 50000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/telefoninternet/doppelflat-premium/"
            },
            {
                "slug": "inet-easy",
                "name": "Inet easy",
                "speed": 8000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/triple-play/datel-inet-easy/"
            },
            {
                "slug": "inet-power",
                "name": "Inet power",
                "speed": 20000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/triple-play/datel-inet-power/"
            },
            {
                "slug": "inet-high",
                "name": "Inet high",
                "speed": 55000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/triple-play/datel-inet-high/"
            },
            {
                "slug": "inet-premium",
                "name": "Inet premium",
                "speed": 100000,
                "affiliateUrl": "http://www.datel-dessau.de/cms/privatkunden/triple-play/datel-inet-premium/"
            }
        ],
        "business": {
            name: "Daten- und Telekommunikations-GmbH Dessau",
            logo: "dateldessau.png",
            location: "Dessau-Roßlau, Deutschland",
            founded: 1998,
            url: {
                text: "datel-dessau.de",
                goto: "http://www.datel-dessau.de/"
            }
        }
    },



    {
        "slug": "degnet-mobile-de",
        "name": "DegNet (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://degnet-wireless-dsl.de/?site=64",
        "availabilityUrl": "https://degnet-wireless-dsl.de/?site=verfuegbarkeit2",
        "plans": [
            {
                "slug": "4g-nga-light",
                "name": "4G NGA light",
                "speed": 32000
            },
            {
                "slug": "4g-3xl",
                "name": "4G 3XL",
                "speed": 25000
            },
            {
                "slug": "4g-xxl",
                "name": "4G XXL",
                "speed": 16000
            }
        ],
        "business": {
            name: "DegNet GmbH",
            logo: "degnet.png",
            location: "Deggendorf, Deutschland",
            url: {
                text: "degnet-wireless-dsl.de",
                goto: "https://degnet-wireless-dsl.de"
            }
        }
    },



    {
        "slug": "degnet-hotspot-de",
        "name": "DegNet (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "https://degnet-wireless-dsl.de/?site=58",
        "availabilityUrl": "https://degnet-wireless-dsl.de/?site=verfuegbarkeit2",
        "plans": [
            {
                "slug": "premium-nga-light",
                "name": "Premium NGA light",
                "speed": 32000
            },
            {
                "slug": "premium-3xl",
                "name": "Premium 3XL",
                "speed": 25000
            },
            {
                "slug": "premium-xxl",
                "name": "Premium XXL",
                "speed": 16000
            }
        ],
        "business": {
            name: "DegNet GmbH",
            logo: "degnet.png",
            location: "Deggendorf, Deutschland",
            url: {
                text: "degnet-wireless-dsl.de",
                goto: "https://degnet-wireless-dsl.de"
            }
        }
    },



    {
        "slug": "deutschlandsim-mobile-de",
        "name": "DeutschlandSIM",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.deutschlandsim.de/",
        "plans": [
            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21000,
                "affiliateUrl": "http://www.deutschlandsim.de/tariffs/ltes"
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "affiliateUrl": "http://www.deutschlandsim.de/tariffs/ltem"
            },
            {
                "slug": "lte-l",
                "name": "LTE L",
                "speed": 50000,
                "affiliateUrl": "http://www.deutschlandsim.de/tariffs/ltel"
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "deutschlandsim.png",
            location: "München, Deutschland",
            url: {
                text: "deutschlandsim.de",
                goto: "http://www.deutschlandsim.de"
            }
        }
    },



    {
        "slug": "discosurf-mobile-de",
        "name": "discoSURF",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.discosurf.de/tariffs",
        "plans": [
            {
                "slug": "internet-flat-500mb-dnetz",
                "name": "Internet Flat 500 MB (D-Netz)",
                "speed": 7200
            },
            {
                "slug": "internet-flat-500mb-o2netz",
                "name": "Internet Flat 500 MB (o2-Netz)",
                "speed": 7200
            },
            {
                "slug": "internet-flat-1gb-dnetz",
                "name": "Internet Flat 1 GB (D-Netz)",
                "speed": 7200
            },
            {
                "slug": "internet-flat-1gb-o2netz",
                "name": "Internet Flat 1 GB (o2-Netz)",
                "speed": 7200
            },
            {
                "slug": "internet-flat-3gb-dnetz",
                "name": "Internet Flat 3GB (D-Netz)",
                "speed": 7200
            },
            {
                "slug": "internet-flat-3gb-o2netz",
                "name": "Internet Flat 3 GB (o2-Netz)",
                "speed": 7200
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "discosurf.png",
            location: "München, Deutschland",
            url: {
                text: "deutschlandsim.de",
                goto: "http://www.deutschlandsim.de"
            }
        }
    },




    {
        "slug": "dnsnet-dsl-de",
        "name": "DNS:NET",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.dsl-fuer-brandenburg.de/Produkt.html",
        "availabilityUrl": "https://intern.dns-net.de/vdslorder/index.php",
        "plans": [
            {
                "slug": "6mbits-paket",
                "name": "6 MBit/s Paket",
                "speed": 6000
            },
            {
                "slug": "30mbits-paket",
                "name": "30 MBit/s Paket",
                "speed": 30000
            },
            {
                "slug": "100mbits-paket",
                "name": "100 MBit/s Paket",
                "speed": 100000
            }
        ],
        "business": {
            name: "DNS:NET Internet Service GmbH",
            logo: "dsnnet.png",
            location: "Berlin, Deutschland",
            url: {
                text: "dsl-fuer-brandenburg.de",
                goto: "http://www.dsl-fuer-brandenburg.de/Produkt.html"
            }
        }
    },



    {
        "slug": "dokom21-dsl-de",
        "name": "DOKOM21",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet.htm",
        "availabilityUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet.htm",
        "plans": [
            {
                "slug": "unser-spartarif",
                "name": "Unser Spartarif",
                "speed": 16000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Unser-Spartarif.htm"
            },
            {
                "slug": "multimedia",
                "name": "Multimedia",
                "speed": 20000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "multimedia-20-5",
                "name": "Multimedia + 20/5 Option",
                "speed": 20000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "multimedia-50-5",
                "name": "Multimedia + 50/5 Option",
                "speed": 50000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "multimedia-50-10",
                "name": "Multimedia + 50/10 Option",
                "speed": 50000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "multimedia-100-5",
                "name": "Multimedia + 100/5 Option",
                "speed": 100000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "multimedia-100-10",
                "name": "Multimedia + 100/10 Option",
                "speed": 100000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Multimedia-Tarif.htm"
            },
            {
                "slug": "vdsl",
                "name": "VDSL",
                "speed": 50000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/VDSL-Tarif.htm"
            },
            {
                "slug": "vdsl-50-10",
                "name": "VDSL + 50/10 Option",
                "speed": 50000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/VDSL-Tarif.htm"
            },
            {
                "slug": "internet-pur",
                "name": "Internet pur",
                "speed": 6000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Internet-pur-Tarif.htm"
            },
            {
                "slug": "internet-pur-16-1",
                "name": "Internet pur + 16/1 Option",
                "speed": 16000,
                "affiliateUrl": "http://www.dokom21.de/de/Privatkunden/Produkte--Tarife/Telefon--Internet/Internet-pur-Tarif.htm"
            }
        ],
        "business": {
            name: "DOKOM Gesellschaft für Telekommunikation mbH",
            logo: "dokom21.png",
            location: "Dortmund, Deutschland",
            url: {
                text: "dokom21.de",
                goto: "http://www.dokom21.dem"
            }
        }
    },



    {
        "slug": "drahtlosdsl-dsl-de",
        "name": "drahtlos-dsl.de",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.drahtlos-dsl.de/index.php?option=com_content&view=article&id=70&Itemid=2",
        "availabilityUrl": "http://www.drahtlos-dsl.de/index.php?option=com_content&view=article&id=52&Itemid=55",
        "plans": [
            {
                "slug": "v-connect-6000",
                "name": "v-connect 6000",
                "speed": 6000
            },
            {
                "slug": "v-connect-16000",
                "name": "c-connect 16000",
                "speed": 16000
            },
            {
                "slug": "v-connect-25000",
                "name": "v-connect 25000",
                "speed": 25000
            }
        ],
        "business": {
            name: "Drahtlos-DSL GmbH Mittelsachsen",
            logo: "drahtlosdsl.png",
            location: "Grimma, Deutschland",
            url: {
                text: "drahtlos-dsl.de",
                goto: "http://www.drahtlos-dsl.de"
            }
        }
    },



    {
        "slug": "drahtlosdsl-hotspot-de",
        "name": "drahtlos-dsl.de (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.drahtlos-dsl.de/index.php?option=com_content&view=article&id=53&Itemid=62",
        "availabilityUrl": "http://www.drahtlos-dsl.de/index.php?option=com_content&view=article&id=52&Itemid=55",
        "plans": [
            {
                "slug": "dsl-1000",
                "name": "DSL 1000",
                "speed": 1000
            },
            {
                "slug": "dsl-2000",
                "name": "DSL 2000",
                "speed": 2000
            },
            {
                "slug": "dsl-4000",
                "name": "DSL 4000",
                "speed": 4000
            },
            {
                "slug": "dsl-6000",
                "name": "DSL 6000",
                "speed": 6000
            }
        ],
        "business": {
            name: "Drahtlos-DSL GmbH Mittelsachsen",
            logo: "drahtlosdsl.png",
            location: "Grimma, Deutschland",
            url: {
                text: "drahtlos-dsl.de",
                goto: "http://www.drahtlos-dsl.de"
            }
        }
    },



    {
        "slug": "phonex-mobile-de",
        "name": "Phonex",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.phonex.de",
        "plans": [
            {
                "slug": "mobile-data-1000",
                "name": "Mobile Data 1000",
                "speed": 7200,
                "affiliateUrl": "http://www.phonex.de/mobile-data1000?phonex=5ghdbcegk2el49i3t7qup7ki21"
            }
        ],
        "business": {
            name: "Drillisch Telecom GmbH",
            logo: "phonex.png",
            location: "Maintal, Deutschland",
            url: {
                text: "phonex.de",
                goto: "http://www.phonex.de"
            }
        }
    },



    {
        "slug": "dslmobil-dsl-de",
        "name": "DSLmobil",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.dslmobil.de/",
        "availabilityUrl": "http://www.dslmobil.de/index.php/verfuegbarkeitscheck/verfuegbarkeitscheck-dslmobil-via-festnetz-glasfaser",
        "plans": [
            {
                "slug": "surf-phone-2000",
                "name": "Surf + Phone 2.000",
                "speed": 2000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-6000",
                "name": "Surf + Phone 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-16000",
                "name": "Surf + Phone 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-50000",
                "name": "Surf + Phone 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-100000",
                "name": "Surf + Phone 100.000",
                "speed": 100000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "office-16000",
                "name": "Office 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            },
            {
                "slug": "office-25000",
                "name": "Office 25.000",
                "speed": 25000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            },
            {
                "slug": "office-50000",
                "name": "Office 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            },

            {
                "slug": "surf-phone-2000-glasfaser",
                "name": "Surf + Phone 2.000 (Glasfaser)",
                "speed": 2000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-6000-glasfaser",
                "name": "Surf + Phone 6.000 (Glasfaser)",
                "speed": 6000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-16000-glasfaser",
                "name": "Surf + Phone 16.000 (Glasfaser)",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-50000-glasfaser",
                "name": "Surf + Phone 50.000 (Glasfaser)",
                "speed": 50000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "surf-phone-100000-glasfaser",
                "name": "Surf + Phone 100.000 (Glasfaser)",
                "speed": 100000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-festnetz"
            },
            {
                "slug": "office-16000-glasfaser",
                "name": "Office 16.000 (Glasfaser)",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            },
            {
                "slug": "office-25000-glasfaser",
                "name": "Office 25.000 (Glasfaser)",
                "speed": 25000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            },
            {
                "slug": "office-50000-glasfaser",
                "name": "Office 50.000 (Glasfaser)",
                "speed": 50000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-festnetz"
            }

        ],
        "business": {
            name: "DSLmobil GmbH",
            logo: "dslmobil.png",
            location: "Oberndorf, Deutschland",
            founded: 2006,
            url: {
                text: "dslmobil.de",
                goto: "http://www.dslmobil.de"
            }
        }
    },



    {
        "slug": "dslmobil-hotspot-de",
        "name": "DSLmobil (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk",
        "availabilityUrl": "http://www.dslmobil.de/index.php/verfuegbarkeitscheck/verfuegbarkeitscheck-dslmobil-via-funk",
        "plans": [
            {
                "slug": "data-2000",
                "name": "Data 2.000",
                "speed": 2000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "data-6000",
                "name": "Data 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "data-16000",
                "name": "Data 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "surf-phone-2000-wdsl",
                "name": "Surf + Phone 2.000",
                "speed": 2000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "surf-phone-6000-wdsl",
                "name": "Surf + Phone 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "surf-phone-16000-wdsl",
                "name": "Surf + Phone 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/privatkunden/tarife-funk"
            },
            {
                "slug": "business-data-6000",
                "name": "Business Data 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-funk"
            },
            {
                "slug": "business-data-16000",
                "name": "Business Data 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-funk"
            },
            {
                "slug": "business-data-16000-plus",
                "name": "Business Data 16.000 plus",
                "speed": 16000,
                "affiliateUrl": "http://www.dslmobil.de/index.php/geschaeftskunden/tarife-funk"
            }
        ],
        "business": {
            name: "DSLmobil GmbH",
            logo: "dslmobil.png",
            location: "Oberndorf, Deutschland",
            founded: 2006,
            url: {
                text: "dslmobil.de",
                goto: "http://www.dslmobil.de"
            }
        }
    },



    {
        "slug": "dslonair-hotspot-de",
        "name": "DSLonair",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.dslonair.de/tarife.html",
        "availabilityUrl": "http://www.dslonair.de/kontakt.html",
        "plans": [
            {
                "slug": "home",
                "name": "Home",
                "speed": 1500
            }
        ],
        "business": {
            name: "DBD Deutsche Breitband Dienste GmbH",
            logo: "dslonair.png",
            location: "Heidelberg, Deutschland",
            url: {
                text: "dslonair.de",
                goto: "http://www.dslonair.de"
            }
        }
    },



    {
        "slug": "disquom-hotspot-de",
        "name": "disquom",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://disquom.de",
        "availabilityUrl": "http://disquom.de",
        "plans": [
            {
                "slug": "internet-flat-16000",
                "name": "Internet-Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "http://disquom.de/Privatkunden/"
            },
            {
                "slug": "doppel-flat-16000",
                "name": "Doppel-Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "http://disquom.de/Privatkunden/"
            },
            {
                "slug": "doppel-flat-25000",
                "name": "Doppel-Flat 25.000",
                "speed": 25000,
                "affiliateUrl": "http://disquom.de/Privatkunden/"
            },
            {
                "slug": "doppel-flat-25000",
                "name": "Doppel-Flat 25.000",
                "speed": 25000,
                "affiliateUrl": "http://disquom.de/Geschaeftskunden/"
            }
        ],
        "business": {
            name: "Disquom Funktechnik GmbH",
            logo: "disquom.png",
            location: "Königswinter, Deutschland",
            url: {
                text: "disquom.de",
                goto: "http://disquom.de/"
            }
        }
    },



    {
        "slug": "easybell-dsl-de",
        "name": "easybell",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.easybell.de/komplettanschluss.html",
        "plans": [
            {
                "slug": "komplett-basic",
                "name": "Komplett basic",
                "speed": 16000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-basic.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-basic.html"
            },
            {
                "slug": "komplett-easy-16000",
                "name": "Komplett easy 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-easy.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-easy.html"
            },
            {
                "slug": "komplett-easy-50000",
                "name": "Komplett easy 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-easy.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-easy.html"
            },
            {
                "slug": "komplett-allnet",
                "name": "Komplett allnet",
                "speed": 16000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-allnet.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-allnet.html"
            },
            {
                "slug": "komplett-allnet-50000",
                "name": "Komplett allnet 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-allnet.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-allnet.html"
            },
            {
                "slug": "komplett-time",
                "name": "Komplett time",
                "speed": 16000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-time.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-time.html"
            },
            {
                "slug": "komplett-speed",
                "name": "Komplett speed",
                "speed": 50000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/komplett-speed.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/komplett-speed.html"
            },
            {
                "slug": "komplett-glasfaser-20000",
                "name": "Komplett glasfaser",
                "speed": 20000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html"
            },
            {
                "slug": "komplett-glasfaser-50000",
                "name": "Komplett glasfaser + Option 50",
                "speed": 50000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html"
            },
            {
                "slug": "komplett-glasfaser-100000",
                "name": "Komplett glasfaser + Option 100",
                "speed": 100000,
                "affiliateUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html",
                "availabilityUrl": "http://www.easybell.de/komplettanschluss/glasfaser/komplett-glasfaser.html"
            }
        ],
        "business": {
            name: "easybell GmbH",
            logo: "easybell.png",
            location: "Berlin, Deutschland",
            employees: 0,
            founded: 1988,
            url: {
                text: "easybell.de",
                goto: "http://www.easybell.de/home.html"
            }
        }
    },



    {
        "slug": "edeka-mobil-mobile-de",
        "name": "EDEKA mobil",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://www.edeka-mobil.de/mobiles-internet.html",
        "availabilityUrl": "http://www.vodafone.de/privat/hilfe-support/netzabdeckung.html",
        "plans": [
            {
                "slug": "mobile-150",
                "name": "mobile Internet-Flat 150 MB",
                "speed": 7200
            },
            {
                "slug": "mobile-500",
                "name": "mobile Internet-Flat 500 MB",
                "speed": 7200
            },
            {
                "slug": "mobile-3000",
                "name": "mobile Internet-Flat 3 GB",
                "speed": 7200
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "edekamobil.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },



    {
        "slug": "encoline-dsl-de",
        "name": "encoLine",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://www.encoline.de/",
        "availabilityUrl": "https://www.encoline.de/www/encoline/anschlussgebiete/karte/",
        "plans": [
            {
                "slug": "dsl-6000",
                "name": "DSL 6.000",
                "speed": 6000,
                "affiliateUrl": "https://www.encoline.de/www/encoline/produkte/dsl6000/"
            },
            {
                "slug": "dsl-16000",
                "name": "DSL 16.000",
                "speed": 16000,
                "affiliateUrl": "https://www.encoline.de/www/encoline/produkte/dsl16000/"
            },
            {
                "slug": "dsl-25000",
                "name": "DSL 25.000",
                "speed": 25000,
                "affiliateUrl": "https://www.encoline.de/www/encoline/produkte/dsl25000/"
            },
            {
                "slug": "dsl-50000",
                "name": "DSL 50.000",
                "speed": 50000,
                "affiliateUrl": "https://www.encoline.de/www/encoline/produkte/dsl50000/"
            }
        ],
        "business": {
            name: "encoLine GmbH",
            logo: "encoline.png",
            location: "Gera, Deutschland",
            url: {
                text: "encoline.de",
                goto: "https://www.encoline.de"
            }
        }
    },



    {
        "slug": "encoline-mobile-de",
        "name": "encoLine (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://www.encoline.de/",
        "plans": [
            {
                "slug": "enco-surf",
                "name": "enco Surf",
                "speed": 3600,
                "affiliateUrl": "https://www.encoline.de/www/encoline/mobilfunk/enco-surf/"
            },
            {
                "slug": "enco-surf-plus",
                "name": "enco Surf+",
                "speed": 7200,
                "affiliateUrl": "https://www.encoline.de/www/encoline/mobilfunk/enco-surf-plus/"
            }
        ],
        "business": {
            name: "encoLine GmbH",
            logo: "encoline.png",
            location: "Gera, Deutschland",
            url: {
                text: "encoline.de",
                goto: "https://www.encoline.de"
            }
        }
    },



    {
        "slug": "ewacom-dsl-de",
        "name": "ewacom",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.ewacom.de/internet",
        "availabilityUrl": "http://www.ewacom.de/store/configurator",
        "plans": [
            {
                "slug": "biberplus",
                "name": "BiberPlus",
                "speed": 50000
            },
            {
                "slug": "biberspeed",
                "name": "BiberSpeed",
                "speed": 100000
            },
            {
                "slug": "bibermaxx",
                "name": "BiberMaxx",
                "speed": 150000
            }
        ],
        "business": {
            name: "e.wa riss Netze GmbH",
            logo: "ewacom.png",
            location: "Biberach, Deutschland",
            url: {
                text: "ewacom.de",
                goto: "http://www.ewacom.de/"
            }
        }
    },



    {
        "slug": "ewe-dsl-de",
        "name": "EWE",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-vdsl-vergleich.php",
        "availabilityUrl": "https://secure.ewe.de/orderapp/onlinebeauftragung/package.html",
        "plans": [
            {
                "slug": "dsl-16-komfort",
                "name": "DSL 16 komfort",
                "speed": 16000,
                "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-16000-dsl-telefon-flatrate.php"
            },
            {
                "slug": "dsl-16-premium",
                "name": "DSL 16 premium",
                "speed": 16000,
                "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-16000-dsl-telefon-flatrate-zwei-leitungen.php"
            },
            {
                "slug": "dsl-50-komfort",
                "name": "DSL 50 komfort",
                "speed": 50000,
                "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-50000-vdsl-telefon-flatrate.php"
            },
            {
                "slug": "dsl-50-premium",
                "name": "DSL 50 premium",
                "speed": 50000,
                "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-50000-vdsl-telefon-flatrate-zwei-leitungen.php"
            },
            {
                "slug": "dsl-solo",
                "name": "DSL solo",
                "speed": 16000,
                "affiliateUrl": "http://www.ewe.de/privatkunden/festnetz-internet/dsl-16000-flatrate-nur-dsl.php"
            }

        ],
        "business": {
            name: "EWE Aktiengesellschaft",
            logo: "ewe.png",
            location: "Oldenburg, Deutschland",
            employees: 9000,
            salesVolume: "8 Mrd. Euro (2013)",
            url: {
                text: "ewe.com",
                goto: "http://www.ewe.com/de/"
            }
        }
    },



    {
        "slug": "fastsim-mobile-de",
        "name": "fastSIM",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.fastsim.de/tariffs",
        "plans": [
            {
                "slug": "fastsim-o2-S",
                "name": "o2 S",
                "speed": 7200
            },
            {
                "slug": "fastsim-o2-M",
                "name": "o2 M",
                "speed": 7200
            },
            {
                "slug": "fastsim-o2-L",
                "name": "o2 L",
                "speed": 7200
            },
            {
                "slug": "fastsim-vodafone-S",
                "name": "Vodafone S",
                "speed": 7200
            },
            {
                "slug": "fastsim-vodafone-M",
                "name": "Vodafone M",
                "speed": 7200
            },
            {
                "slug": "fastsim-vodafone-L",
                "name": "Vodafone L",
                "speed": 7200
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "fastsim.png",
            location: "München, Deutschland",
            url: {
                text: "fastsim.de",
                goto: "http://www.fastsim.de/"
            }
        }
    },



    {
        "slug": "fietenet-dsl-de",
        "name": "Fiete.Net",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://www.fiete.net/produkte/",
        "availabilityUrl": "http://check.fiete.net",
        "plans": [
            {
                "slug": "soerf-2",
                "name": "Sörf 2",
                "speed": 2000,
                "subtype:": "adsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-2-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-2-details/"
            },
            {
                "slug": "soerf-8",
                "name": "Sörf 8",
                "speed": 8000,
                "subtype:": "adsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-8-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-8-details//"
            },
            {
                "slug": "soerf-16",
                "name": "Sörf 16",
                "speed": 16000,
                "subtype:": "adsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-16-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-16-details/"
            },
            {
                "slug": "soerf-25",
                "name": "Sörf 25",
                "speed": 25000,
                "subtype:": "vdsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-25-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-25-details/"
            },
            {
                "slug": "soerf-50",
                "name": "Sörf 50",
                "speed": 50000,
                "subtype:": "vdsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-50-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-50-details/"
            },
            {
                "slug": "soerf-50-plus",
                "name": "Sörf 50 Plus",
                "speed": 50000,
                "subtype:": "vdsl",
                "affiliateUrl": "https://www.fiete.net/produkte/soerf-50-plus-details/",
                "availabilityUrl": "https://www.fiete.net/produkte/soerf-50-plus-details/"
            }
        ],
        "business": {
            name: "mr. net services GmbH & Co. KG",
            logo: "fietenet.png",
            location: "Flensburg, Deutschland",
            url: {
                text: "fiete.net",
                goto: "https://www.fiete.net/"
            }
        }
    },



    {
        "slug": "filiago-dsl-de",
        "name": "Filiago",
        "type": "dsl",
        "subtype": "vdsl",
        "country": "DE",
        "affiliateUrl": "http://www.filiago.de/produkte/glasfaser_uebersicht_privat.aspx",
        "availabilityUrl": "http://www.filiago.de/produkte/glasfaser_uebersicht_privat.aspx",
        "plans": [
            {
                "slug": "vdsl-25000",
                "name": "VDSL 25.000",
                "speed": 25000
            },
            {
                "slug": "vdsl-50000",
                "name": "VDSL 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "Filiago GmbH & Co KG",
            logo: "filiago.png",
            location: "Bad Segeberg, Deutschland",
            url: {
                text: "filiago.de",
                goto: "http://www.filiago.de/"
            }
        }
    },



    {
        "slug": "filiago-dsl-de",
        "name": "Filiago (Satellit)",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.filiago.de/produkte/privatkunden.aspx",
        "plans": [
            {
                "slug": "sat-10000-speed",
                "name": "SAT 10.000 SPEED",
                "speed": 10000
            },
            {
                "slug": "sat-10000-plus",
                "name": "SAT 10.000 PLUS",
                "speed": 10000
            },
            {
                "slug": "sat-16000-speed",
                "name": "SAT 16.000 SPEED",
                "speed": 16000
            }
        ],
        "business": {
            name: "Filiago GmbH & Co KG",
            logo: "filiago.png",
            location: "Bad Segeberg, Deutschland",
            url: {
                text: "filiago.de",
                goto: "http://www.filiago.de/"
            }
        }
    },



    {
        "slug": "fitflat-dsl-de",
        "name": "fitflat",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.fitflat.de/Internet",
        "plans": [
            {
                "slug": "fitflat-5",
                "name": "5",
                "speed": 5000,
                "subtype": "adsl",
                "affiliateUrl": "http://www.fitflat.de/Internet/fitflat-5"
            },
            {
                "slug": "fitflat-25",
                "name": "25",
                "speed": 25000,
                "subtype": "vdsl",
                "affiliateUrl": "http://www.fitflat.de/Internet/fitflat-25"
            },
            {
                "slug": "fitflat-50",
                "name": "50",
                "speed": 50000,
                "subtype": "vdsl",
                "affiliateUrl": "http://www.fitflat.de/Internet/fitflat-50"
            },
            {
                "slug": "fitflat-100",
                "name": "100",
                "speed": 100000,
                "subtype": "vdsl",
                "affiliateUrl": "http://www.fitflat.de/Internet/fitflat-100"
            }
        ],
        "business": {
            name: "neu-medianet GmbH",
            logo: "fitflat.png",
            location: "Neubrandenburg, Deutschland",
            url: {
                text: "fitflat.de",
                goto: "http://www.fitflat.de/"
            }
        }
    },

/* TODO: Schema geupdatet */

    {
        "slug": "fonic-mobile-de",
        "name": "FONIC",
        "type": "mobile",
        "subtype": "umts",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.fonic.de",
        "availabilityUrl": "http://www.o2online.de/microsite/o2-netz/netzabdeckung/",
        "plans": [
            {
                "slug": "surf-card",
                "name": "Surf-Card",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.fonic.de/fonic-surf-card-internet-tagesflatrate-fuer-surf-sticks",
                "options": ['noterm'],
                "pricePerDay": 1.99
            }
        ],
        "business": {
            name: "FONIC GmbH",
            logo: "fonic.png",
            location: "München, Deutschland",
            url: {
                text: "fonic.de",
                goto: "https://www.fonic.de/"
            }
        }
    },



    {
        "slug": "simde-mobile-de",
        "name": "sim.de",
        "type": "mobile",
        "subtype": "lte",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.sim.de/tariffs?sim=ai2gvcdt69irhitsmqf03jqiq7",
        "plans": [
            {
                "slug": "lte-eins",
                "name": "LTE Eins",
                "speed": 21100,
                "dataVolume" : 1000,
                "options": ['phoneflat','smsflat','noterm'],
                "optional": ['multicard', 'term'],
                "pricePerMonth": 14.95
            },
            {
                "slug": "lte-zwei",
                "name": "LTE Zwei",
                "speed": 50000,
                "dataVolume" : 2000,
                "options": ['phoneflat','smsflat','noterm'],
                "optional": ['multicard', 'term'],
                "pricePerMonth": 19.95
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "simde.png",
            location: "München, Deutschland",
            url: {
                text: "sim.de",
                goto: "http://sim.de"
            }
        }
    },



    {
        "slug": "freikom-dsl-de",
        "name": "Freikom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.freikom.net/freikom/50-vorwahlgebiet-1.html",
        "availabilityUrl": "http://www.freikom.net/verfuegbarkeitscheck.html",
        "plans": [
            {
                "slug": "eco",
                "name": "eco",
                "speed": 2000,
                "subtype": "adsl",
                "options": ['term', 'phoneflat'],
                "pricePerMonth" : 29.50
            },
            {
                "slug": "smart",
                "name": "smart",
                "speed": 6000,
                "subtype": "adsl",
                "options": ['term','phoneflat'],
                "pricePerMonth" : 34.50
            },
            {
                "slug": "standard",
                "name": "standard",
                "speed": 16000,
                "subtype": "adsl",
                "options": ['term'],
                "pricePerMonth" : 39.50
            },
            {
                "slug": "plus",
                "name": "plus",
                "speed": 25000,
                "subtype": "vdsl",
                "options": ['term'],
                "pricePerMonth" : 49.50
            },
            {
                "slug": "premium",
                "name": "premium",
                "speed": 50000,
                "subtype": "vdsl",
                "options": ['term'],
                "pricePerMonth" : 55.50
            },
            {
                "slug": "premium-plus",
                "name": "premium plus",
                "speed": 50000,
                "subtype": "adsl",
                "options": ['term'],
                "pricePerMonth" : 59.50
            },

            {
                "slug": "standard-ftth",
                "name": "standard (FTTH)",
                "speed": 16000,
                "subtype": "ftth",
                "options": ['term', 'phoneflat'],
                "pricePerMonth" : 39.50
            },
            {
                "slug": "plus-ftth",
                "name": "plus (FTTH)",
                "speed": 25000,
                "subtype": "ftth",
                "options": ['term'],
                "pricePerMonth" : 44.50
            },
            {
                "slug": "premium-ftth",
                "name": "premium (FTTH)",
                "speed": 50000,
                "subtype": "ftth",
                "options": ['term'],
                "pricePerMonth" : 49.50
            },
            {
                "slug": "premium-plus-ftth",
                "name": "premium plus",
                "speed": 50000,
                "subtype": "ftth",
                "options": ['term'],
                "pricePerMonth" : 59.50
            }
        ],
        "business": {
            name: "FREIKom | immer online",
            logo: "freikom.png",
            location: "Schwesing, Deutschland",
            founded: 2008,
            url: {
                text: "freikom.net",
                goto: "http://www.freikom.net/"
            }
        }
    },

    {
        "slug": "frieslandnet-dsl-de",
        "name": "Friesland-Net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://frieslandnet.de/sdsl/fconnect",
        "availabilityUrl": "http://frieslandnet.de/sdsl/fconnect",
        "plans": [
            {
                "slug": "fconnect-2",
                "name": "F-Connect 2",
                "speed": 2000
            },
            {
                "slug": "fconnect-6",
                "name": "F-Connect 6",
                "speed": 6000
            },
            {
                "slug": "fconnect-8",
                "name": "F-Connect 8",
                "speed": 8000
            },
            {
                "slug": "fconnect-10",
                "name": "F-Connect 10",
                "speed": 10000
            }
        ],
        "business": {
            name: "Internet & Go GmbH",
            logo: "frieslandnet.png",
            location: "Högsdorf / Flehm, Deutschland",
            url: {
                text: "frieslandnet.de",
                goto: "http://www.frieslandnet.de/"
            }
        }
    },



    {
        "slug": "frischfunk-mobile-de",
        "name": "FrischFunk",
        "type": "mobile",
        "subtype": "umts",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.frischfunk.de/tarife/uebersicht",
        "plans": [
            {
                "slug": "start-250",
                "name": "Start 250",
                "speed": 7200,
                "dataVolume" : 250,
                "options": ['term'],
                "pricePerMonth" : 9.99,
                "affiliateUrl": "http://www.frischfunk.de/tarife/start250"
            },
            {
                "slug": "plus-flat",
                "name": "Plus Flat",
                "speed": 7200,
                "dataVolume" : 500,
                "options": ['phoneflat',  'term'],
                "optional": ['smsflat', 'dataupgrade'],
                "pricePerMonth" : 24.99,
                "affiliateUrl": "http://www.frischfunk.de/tarife/topflat"
            },
            {
                "slug": "top-flat",
                "name": "Top Flat",
                "speed": 7200,
                "dataVolume" : 500,
                "options": ['phoneflat', 'smsflat', 'term'],
                "optional": ['dataupgrade'],
                "pricePerMonth" : 29.99,
                "affiliateUrl": "http://www.frischfunk.de/tarife/plusflat"
            },
            {
                "slug": "pro-flat",
                "name": "Pro Flat",
                "speed": 7200,
                "dataVolume" : 1000,
                "options": ['phoneflat', 'smsflat', 'term'],
                "optional": ['dataupgrade'],
                "pricePerMonth" : 34.99,
                "affiliateUrl": "http://www.frischfunk.de/tarife/proflat"
            },
            {
                "slug": "max-flat",
                "name": "Max Flat",
                "speed": 7200,
                "dataVolume" : 5000,
                "options": ['phoneflat', 'smsflat', 'term'],
                "optional": ['dataupgrade'],
                "pricePerMonth" : 49.99,
                "affiliateUrl": "http://www.frischfunk.de/tarife/maxflat"
            }
        ],
        "business": {
            name: "FrischFunk GmbH",
            logo: "frischfunk.png",
            location: "Hamburg, Deutschland",
            founded: 2014,
            url: {
                text: "frischfunk.de",
                goto: "http://www.frischfunk.de/"
            }
        }
    },



    {
        "slug": "funknetz-hg-hotspot-de",
        "name": "FUNKNETZ-HG",
        "type": "hotspot",
        "subtype": "wdsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.richtfunk-hg.de/tarife.html",
        "availabilityUrl": "http://www.richtfunk-hg.de/verfuegbarkeit.html",
        "plans": [
            {
                "slug": "wdsl-low-surf-tarif-2000",
                "name": "Low-Surf Tarif 2000",
                "speed": 2000,
                "dataVolume" : 5000,
                "options": ['term'],
                "pricePerMonth" : 17.90
            },
            {
                "slug": "wdsl-einfach-flat-4000",
                "name": "W-DSL Einfach-Flat 4000",
                "speed": 4000,
                "options": ['term'],
                "pricePerMonth" : 23.90
            },
            {
                "slug": "wdsl-einfach-flat-4000",
                "name": "W-DSL Einfach-Flat 4000",
                "speed": 4000,
                "options": ['term'],
                "pricePerMonth" : 23.90
            },
            {
                "slug": "wdsl-low-surf-doppel-flat-4000",
                "name": "W-DSL Low-Surf Doppel-Flat 4000",
                "speed": 4000,
                "options": ['term'],
                "optional": ['phoneflat'],
                "pricePerMonth" : 29.90
            },
            {
                "slug": "wdsl-low-surf-doppel-flat-4000",
                "name": "W-DSL Low-Surf Doppel-Flat 4000",
                "speed": 4000,
                "options": ['term'],
                "pricePerMonth" : 29.90
            },
            {
                "slug": "wdsl-fairflat-10000",
                "name": "W-DSL Fairflat 10.000",
                "speed": 10000,
                "options": ['term'],
                "pricePerMonth" : 28.90
            },
            {
                "slug": "wdsl-doppel-fairflat-10000",
                "name": "W-DSL Doppel-Fairflat 10000",
                "speed": 10000,
                "options": ['term'],
                "optional": ['phoneflat'],
                "pricePerMonth" : 34.90
            },
            {
                "slug": "wdsl-low-speed-8000",
                "name": "W-DSL Low-Speed 8000",
                "speed": 18000,
                "options": ['term'],
                "pricePerMonth" : 45.90
            }
        ],
        "business": {
            name: "Funknetz HG",
            logo: "funknetzhg.png",
            location: "Oberursel, Deutschland",
            url: {
                text: "richtfunk-hg.de",
                goto: "http://www.richtfunk-hg.de/"
            }
        }
    },



    {
        "slug": "funk-und-technik-cottbus-dsl-de",
        "name": "Funk & Technik (Cottbus)",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.kabel-net.de/cottbus/",
        "availabilityUrl": "http://www.kabel-net.de/cottbus/kundenservice/verfugbarkeitsabfrage/",
        "plans": [
            {
                "slug": "basis-internet",
                "name": "Basis Internet",
                "speed": 10000,
                "subtype": ["adsl","vdsl"],
                "options": ['term'],
                "optional": ['phone','tv','addnumber','addsmartcard','addnumber','hdtv'],
                "pricePerMonth" : 14.95,
                "affiliateUrl": "http://www.kabel-net.de/cottbus/internet-uebersicht/basis/"
            },
            {
                "slug": "komfort-internet",
                "name": "Komfort Internet",
                "speed": 20000,
                "subtype": ["adsl","vdsl"],
                "options": ['term'],
                "optional": ['phone','phoneflat','addnumber','addsmartcard','tv','hdtv'],
                "pricePerMonth" : 19.95,
                "affiliateUrl": "http://www.kabel-net.de/cottbus/internet-uebersicht/komfort/"
            },
            {
                "slug": "exklusiv-internet",
                "name": "Exklusiv Internet",
                "speed": 64000,
                "subtype": ["vdsl"],
                "options": ['term'],
                "optional": ['phone','phoneflat','addnumber','addsmartcard','tv','hdtv'],
                "pricePerMonth" : 29.95,
                "affiliateUrl": "http://www.kabel-net.de/cottbus/internet-uebersicht/exklusiv/"
            },
            {
                "slug": "exklusiv-turbo-internet",
                "name": "Exklusiv Turbo Internet",
                "speed": 128000,
                "subtype": ["vdsl"],
                "options": ['term'],
                "optional": ['phone','phoneflat','addnumber','addsmartcard','tv','upstreamupdate','hdtv'],
                "pricePerMonth" : 39.95,
                "affiliateUrl": "http://www.kabel-net.de/cottbus/internet-uebersicht/exklusiv-turbo/"
            }
        ],
        "business": {
            name: "Funk und Technik GmbH Forst",
            logo: "funktechnik.png",
            logobg: "396aa5",
            location: "Forst, Deutschland",
            founded: 1960,
            url: {
                text: "kabel-net.de/cottbus/",
                goto: "http://www.kabel-net.de/cottbus/"
            }
        }
    },



    {
        "slug": "funk-und-technik-cottbus-dsl-de",
        "name": "Funk & Technik (Forst)",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.kabel-net.de/start/produkte/",
        "availabilityUrl": "http://www.kabel-net.de/cottbus/kundenservice/verfugbarkeitsabfrage/",
        "plans": [
            {
                "slug": "internetflat-6000-telefon",
                "name": "Internetflat 6.000 + Telefon",
                "speed": 6000,
                "subtype": ["adsl","vdsl"],
                "options": ['phone','term'],
                "optional": ['phoneflat','tv','speedupgrade','addnumber'],
                "pricePerMonth" : 19.95,
                "affiliateUrl": "http://www.kabel-net.de/start/produkte/internetflat-6-000-telefon/"
            },
            {
                "slug": "internetflat-6000-tv",
                "name": "Internetflat 6.000 + TV",
                "speed": 6000,
                "subtype": ["adsl","vdsl"],
                "options": ['tv','term'],
                "optional": ['speedupgrade','hdtv'],
                "pricePerMonth" : 24.95,
                "affiliateUrl": "http://www.kabel-net.de/start/produkte/fernsehen-analog-und-digital-internetflat-6-000/"
            },
            {
                "slug": "internetflat-6000-telefon-tv",
                "name": "Internetflat 6.000 + Telefon + TV",
                "speed": 6000,
                "subtype": ["adsl","vdsl"],
                "options": ['tv','phone','term'],
                "optional": ['phoneflat','speedupgrade','addnumber','hdtv'],
                "pricePerMonth" : 29.95,
                "affiliateUrl": "http://www.kabel-net.de/start/produkte/fernsehen-analog-und-digital-internetflat-6-000-telefon/"
            },
            {
                "slug": "internetflat-20000-telefon-tv",
                "name": "Internetflat 20.000 + Telefonflat + TV",
                "speed": 6000,
                "subtype": ["adsl","vdsl"],
                "options": ['tv','phone','phoneflat','term'],
                "optional": ['addnumber','hdtv'],
                "pricePerMonth" : 39.95,
                "affiliateUrl": "http://www.kabel-net.de/start/produkte/fernsehen-analog-und-digital-internet-20-000-telefonflat/"
            }
        ],
        "business": {
            name: "Funk und Technik GmbH Forst",
            logo: "funktechnik.png",
            logobg: "396aa5",
            location: "Forst, Deutschland",
            founded: 1960,
            url: {
                text: "kabel-net.de/cottbus/",
                goto: "http://www.kabel-net.de/cottbus/"
            }
        }
    },



    {
        "slug": "fyve-mobile-de",
        "name": "FYVE",
        "type": "mobile",
        "subtype": "umts",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.fyve.de/pages/tarife",
        "availabilityUrl": "http://www.vodafone.de/privat/hilfe-support/netzabdeckung.html",
        "plans": [
            {
                "slug": "surf-flatrate-m",
                "name": "Surf-Flatrate M",
                "speed": 3600,
                "dataVolume" : 150,
                "options": ['noterm'],
                "optional": ['phone','phoneflat','sms','smsflat','multicard','dataupgrade'],
                "pricePerMonth" : 5,
                "affiliateUrl": "http://www.fyve.de/pages/tarife/surf/surf-flatrate-m"
            },
            {
                "slug": "surf-flatrate-l",
                "name": "Surf-Flatrate L",
                "speed": 7200,
                "dataVolume" : 500,
                "options": ['noterm'],
                "optional": ['phone','phoneflat','sms','smsflat','multicard','dataupgrade'],
                "pricePerMonth" : 10,
                "affiliateUrl": "http://www.fyve.de/pages/tarife/surf/surf-flatrate-l"
            },
            {
                "slug": "surf-flatrate-xl",
                "name": "Surf-Flatrate XL",
                "speed": 7200,
                "dataVolume" : 1000,
                "options": ['noterm'],
                "optional": ['phone','phoneflat','sms','smsflat','multicard','dataupgrade'],
                "pricePerMonth" : 15,
                "affiliateUrl": "http://www.fyve.de/pages/tarife/surf/surf-flatrate-xl"
            },
            {
                "slug": "surf-flatrate-xxl",
                "name": "Surf-Flatrate XXL",
                "speed": 7200,
                "dataVolume" : 3000,
                "options": ['noterm'],
                "optional": ['phone','phoneflat','sms','smsflat','multicard','dataupgrade'],
                "pricePerMonth" : 20,
                "affiliateUrl": "http://www.fyve.de/pages/tarife/surf/surf-flatrate-xxl"
            },
            // TODO: eu-data tarif nicht drin
            {
                "slug": "kombipaket-m",
                "name": "Kombi-Paket M",
                "speed": 7200,
                "dataVolume" : 200,
                "options": ['noterm','phone','sms'],
                "pricePerMonth" : 9.95,
                "affiliateUrl": "http://www.fyve.de/pages/kombi-pakete"
            },
            {
                "slug": "kombipaket-l",
                "name": "Kombi-Paket L",
                "speed": 7200,
                "dataVolume" : 500,
                "options": ['noterm','phone','sms'],
                "pricePerMonth" : 9.95,
                "affiliateUrl": "http://www.fyve.de/pages/kombi-pakete"
            },
            {
                "slug": "kombipaket-xl",
                "name": "Kombi-Paket XL",
                "speed": 7200,
                "dataVolume" : 1000,
                "options": ['noterm','phone','sms'],
                "pricePerMonth" : 19.95,
                "affiliateUrl": "http://www.fyve.de/pages/kombi-pakete"
            },
            {
                "slug": "kombipaket-xxl",
                "name": "Kombi-Paket XXL",
                "speed": 7200,
                "dataVolume" : 3000,
                "options": ['noterm','phone','sms'],
                "pricePerMonth" : 29.95,
                "affiliateUrl": "http://www.fyve.de/pages/kombi-pakete"
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "fyve.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },



    {
        "slug": "gelsennet-dsl-de",
        "name": "GELSEN-NET",
        "type": "dsl",
        "subtype": "adsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.gelsen-net.de/index.php/isdn-und-dsl.html",
        "availabilityUrl": "http://www.gelsen-net.de/index.php/kontakt-173.html",
        "plans": [
            {
                "slug": "doppel-flat-basic",
                "name": "Doppel-Flat basic",
                "speed": 6000,
                "subtype": "adsl",
                "options": ['term','phone','phoneflat'],
                "pricePerMonth" : 29.90,
                "affiliateUrl": "http://www.gelsen-net.de/index.php/isdn-und-dsl.html"
            },
            {
                "slug": "doppel-flat-select",
                "name": "Doppel-Flat select",
                "speed": 16000,
                "subtype": ["adsl","vdsl"],
                "options": ['term','phone','phoneflat'],
                "pricePerMonth" : 39.90,
                "affiliateUrl": "http://www.gelsen-net.de/index.php/isdn-und-dsl.html"
            },
            {
                "slug": "highspeed-16000-tv",
                "name": "Highspeed 16.000 TV",
                "speed": 16000,
                "subtype": "ftth",
                "options": ['term','phone','phoneflat','tv'],
                "optional": ['hdtv'],
                "pricePerMonth" : 44.95,
                "affiliateUrl": "http://www.gelsen-net.de/index.php/internet-telefon-tv.html"
            },
            {
                "slug": "highspeed-50000-tv",
                "name": "Highspeed 50.000 TV",
                "speed": 50000,
                "subtype": "ftth",
                "options": ['term','phone','phoneflat','tv'],
                "optional": ['hdtv'],
                "pricePerMonth" : 41.90,
                "affiliateUrl": "http://www.gelsen-net.de/index.php/internet-telefon-tv.html"
            },
            {
                "slug": "highspeed-100000-tv",
                "name": "Highspeed 100.000 TV",
                "speed": 100000,
                "subtype": "ftth",
                "options": ['term','phone','phoneflat','tv'],
                "optional": ['hdtv'],
                "pricePerMonth" : 49.90,
                "affiliateUrl": "http://www.gelsen-net.de/index.php/internet-telefon-tv.html"
            }
        ],
        "business": {
            name: "GELSEN-NET Kommunikationsgesellschaft mbH",
            logo: "gelsennet.png",
            location: "Gelsenkirchen, Deutschland",
            url: {
                text: "gelsen-net.de",
                goto: "http://www.gelsen-net.de/"
            }
        }
    },


    {
        "slug": "gelsennet-mobile-de",
        "name": "GELSEN-NET (Mobil)",
        "type": "mobile",
        "subtype": "umts",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.gelsen-net.de/index.php/handy-flatrate.html",
        "plans": [
            {
                "slug": "allnet-flatrate",
                "name": "Allnet-Flatrate",
                "speed": 7200,
                "dataVolume" : 500,
                "options": ['term', 'phone', 'phoneflat'],
                "optional": ['addnumber'],
                "pricePerMonth": 19.90
            },
            {
                "slug": "allnet-flatrate",
                "name": "Laptop-Flatrate",
                "speed": 7200,
                "dataVolume" : 5000,
                "options": ['term'],
                "pricePerMonth": 19.90
            }
        ],
        "business": {
            name: "GELSEN-NET Kommunikationsgesellschaft mbH",
            logo: "gelsennet.png",
            location: "Gelsenkirchen, Deutschland",
            url: {
                text: "gelsen-net.de",
                goto: "http://www.gelsen-net.de/"
            }
        }
    },



    {
        "slug": "getinternet-dsl-de",
        "name": "getInternet",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.getinternet.de/high-speed-www.html",
        "plans": [
            {
                "slug": "tooway-2",
                "name": "tooway 2",
                "speed": 5000,
                "dataVolume" : 2000,
                "options": ['term'],
                "optional": ['tv','noterm'],
                "pricePerMonth" : 19.90,
                "affiliateUrl": "https://www.getinternet.de/tooway-2gb.html"
            },
            {
                "slug": "tooway-10",
                "name": "tooway 10",
                "speed": 22000,
                "dataVolume" : 10000,
                "options": ['term'],
                "optional": ['tv','noterm'],
                "pricePerMonth" : 29.90,
                "affiliateUrl": "https://www.getinternet.de/tooway-10.html"
            },
            {
                "slug": "tooway-25",
                "name": "tooway 25",
                "speed": 22000,
                "dataVolume" : 25000,
                "options": ['term'],
                "optional": ['tv','noterm'],
                "pricePerMonth" : 44.90,
                "affiliateUrl": "https://www.getinternet.de/tooway-25gb.html"
            },
            {
                "slug": "tooway-40",
                "name": "tooway 40",
                "speed": 22000,
                "dataVolume" : 40000,
                "options": ['term'],
                "optional": ['tv','noterm'],
                "pricePerMonth" : 64.90,
                "affiliateUrl": "https://www.getinternet.de/tooway-40.html"
            },
            {
                "slug": "tooway-extra",
                "name": "tooway Extra",
                "speed": 22000,
                "dataVolume" : 100000,
                "options": ['term'],
                "optional": ['tv','noterm'],
                "pricePerMonth" : 89.90,
                "affiliateUrl": "https://www.getinternet.de/tooway-extra.html"
            }
        ],
        "business": {
            name: "getinternet GmbH",
            logo: "getinternet.png",
            location: "Trier, Deutschland",
            url: {
                text: "getinternet.de",
                goto: "https://www.getinternet.de/"
            }
        }
    },


    {
        "slug": "glasfaser-ostbayern-dsl-de",
        "name": "Glasfaser Ostbayern",
        "type": "dsl",
        "subtype": "ftth",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.glasfaser-ostbayern.de/gfo-produkte.php",
        "availabilityUrl": "https://kundenportal.r-kom.de/gfo-webshop/verfuegbarkeitspruefung.jsf",
        "plans": [
            {
                "slug": "telefon-internet-10",
                "name": "Telefon & Internet 10 Mbit/s",
                "speed": 10000,
                "options": ['term','phone', 'phoneflat'],
                "optional": ['euphoneflat','mobilephoneflat'],
                "pricePerMonth" : 24.95,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/glasfaserinternet.php?speed=10"
            },
            {
                "slug": "telefon-internet-25",
                "name": "Telefon & Internet 25 Mbit/s",
                "speed": 25000,
                "options": ['term', 'phone', 'phoneflat'],
                "optional": ['euphoneflat', 'mobilephoneflat'],
                "pricePerMonth": 29.95,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/glasfaserinternet.php?speed=25"
            },
            {
                "slug": "telefon-internet-50",
                "name": "Telefon & Internet 50 Mbit/s",
                "speed": 50000,
                "options": ['term','phone', 'phoneflat'],
                "optional": ['euphoneflat','mobilephoneflat'],
                "pricePerMonth" : 43.48,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/glasfaserinternet.php?speed=50"
            },
            {
                "slug": "telefon-internet-100",
                "name": "Telefon & Internet 100 Mbit/s",
                "speed": 100000,
                "options": ['term','phone', 'phoneflat'],
                "optional": ['euphoneflat','mobilephoneflat'],
                "pricePerMonth" : 39.95,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/glasfaserinternet.php?speed=100"
            },
            {
                "slug": "telefon-internet-250",
                "name": "Telefon & Internet 250 Mbit/s",
                "speed": 250000,
                "options": ['term','phone', 'phoneflat'],
                "optional": ['euphoneflat','mobilephoneflat'],
                "pricePerMonth" : 59.95,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/glasfaserinternet.php?speed=250"
            },

            {
                "slug": "komplett-10",
                "name": "Komplett 10 MBit/s + Telefon + TV",
                "speed": 10000,
                "options": ['term','phone','phoneflat','hdtv'],
                "pricePerMonth" : 34.85,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/komplettpaket.php?speed=10"
            },
            {
                "slug": "komplett-25",
                "name": "Komplett 25 MBit/s + Telefon + TV",
                "speed": 25000,
                "options": ['term','phone','phoneflat','hdtv'],
                "pricePerMonth" : 39.85,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/komplettpaket.php?speed=25"
            },
            {
                "slug": "komplett-100",
                "name": "Komplett 100 MBit/s + Telefon + TV",
                "speed": 100000,
                "options": ['term','phone','phoneflat','hdtv'],
                "pricePerMonth" : 48.85,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/komplettpaket.php?speed=100"
            },
            {
                "slug": "komplett-250",
                "name": "Komplett 250 MBit/s + Telefon + TV",
                "speed": 250000,
                "options": ['term','phone','phoneflat','hdtv'],
                "pricePerMonth" : 69.85,
                "affiliateUrl": "http://www.glasfaser-ostbayern.de/komplettpaket.php?speed=250"
            }
        ],
        "business": {
            name: "R-KOM GmbH & Co. KG",
            logo: "glasfaser-ostbayern.png",
            location: "Regensburg, Deutschland",
            url: {
                text: "glasfaser-ostbayern.de",
                goto: "http://www.glasfaser-ostbayern.de/"
            }
        }
    },



    {
        "slug": "goetel-dsl-de",
        "name": "GöTel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://goetel.net/privatkunden/",
        "availabilityUrl": "http://goetel.net/kontakt/",
        "plans": [
            {
                "slug": "dsl-2000",
                "name": "DSL 2.000 + Telefon",
                "speed": 2000
            },
            {
                "slug": "dsl-6000",
                "name": "DSL 6.000 + Telefon",
                "speed": 6000
            },
            {
                "slug": "dsl-16000",
                "name": "DSL 16.000 + Telefon",
                "speed": 16000
            }
        ],
        "business": {
            name: "GöTel GmbH",
            logo: "goetel.png",
            location: "Göttingen, Deutschland",
            url: {
                text: "goetel.net",
                goto: "http://goetel.net/"
            }
        }
    },



    {
        "slug": "gwhtel-dsl-de",
        "name": "GWHtel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://halstenbek.gwhtel.de/tarife.html",
        "availabilityUrl": "http://halstenbek.gwhtel.de/tarife.html",
        "plans": [
            {
                "slug": "halstenbek-premium-dual",
                "name": "Halstenbek Premium Dual 30",
                "speed": 30000,
                "affiliateUrl": "http://halstenbek.gwhtel.de/premium-duo.html",
                "availabilityUrl": "http://halstenbek.gwhtel.de/premium-duo.html"
            },
            {
                "slug": "halstenbek-premium-dual-100000",
                "name": "Halstenbek Premium Dual 100",
                "speed": 100000,
                "affiliateUrl": "http://halstenbek.gwhtel.de/premium-duo.html",
                "availabilityUrl": "http://halstenbek.gwhtel.de/premium-duo.html"
            },
            {
                "slug": "halstenbek-premium-trio",
                "name": "Halstenbek Premium Trio 30",
                "speed": 30000,
                "affiliateUrl": "http://halstenbek.gwhtel.de/premium-trio.html",
                "availabilityUrl": "http://halstenbek.gwhtel.de/premium-trio.html"
            },
            {
                "slug": "halstenbek-premium-trio",
                "name": "Halstenbek Premium Trio 100",
                "speed": 100000,
                "affiliateUrl": "http://halstenbek.gwhtel.de/premium-trio.html",
                "availabilityUrl": "http://halstenbek.gwhtel.de/premium-trio.html"
            },

            {
                "slug": "rellingen-duo-100",
                "name": "Rellingen Duo 100",
                "speed": 100000,
                "affiliateUrl": "http://rellingen.gwhtel.de/rellingen-duo-100.html",
                "availabilityUrl": "http://rellingen.gwhtel.de/rellingen-duo-100.html"
            },
            {
                "slug": "rellingen-trio-100",
                "name": "Rellingen Trio 100",
                "speed": 100000,
                "affiliateUrl": "http://rellingen.gwhtel.de/rellingen-trio-100.html",
                "availabilityUrl": "http://rellingen.gwhtel.de/rellingen-trio-100.html"
            }
        ],
        "business": {
            name: "GWHtel GmbH & Co. KG",
            logo: "gwhtel.png",
            location: "Halstenbek, Deutschland",
            url: {
                text: "gwhtel.de",
                goto: "http://www.gwhtel.de"
            }
        }
    },



    {
        "slug": "helinet-dsl-de",
        "name": "HeLi Net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.helinet.de/tarifuebersicht-festnetz-internet.html",
        "availabilityUrl": "http://www.helinet.de/verfuegbarkeitscheck-336.html",
        "plans": [
            {
                "slug": "dsl-flat",
                "name": "DSL-Flat 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.helinet.de/heli-net-dsl-flat.html"
            },
            {
                "slug": "dsl-flat",
                "name": "Doppel-Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.helinet.de/heli-net-doppelflat.html"
            }
        ],
        "business": {
            name: "HeLi NET Telekommunikation GmbH & Co. KG",
            logo: "helinet.png",
            location: "Hamm, Deutschland",
            url: {
                text: "helinet.de",
                goto: "http://www.helinet.de/"
            }
        }
    },



    {
        "slug": "hellomobil-mobile-de",
        "name": "hellomobil",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht#PaketTarife",
        "availabilityUrl": "https://www.hellomobil.de/netz-check",
        "plans": [
            {
                "slug": "all-in-200-plus",
                "name": "All-in 200 plus",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/allin200"
            },
            {
                "slug": "all-in-300-plus",
                "name": "All-in 300 plus",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/allin300"
            },
            {
                "slug": "all-in-500-plus",
                "name": "All-in 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/allin500"
            },
            {
                "slug": "all-in-1000-plus",
                "name": "All-in 1000 plus",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/allin1000"
            },


            {
                "slug": "flat-xs-smart",
                "name": "Flat XS smart",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/FlatXSsmart"
            },
            {
                "slug": "flat-xs-500-plus",
                "name": "Flat XS 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/flatxs500"
            },
            {
                "slug": "flat-xs-500s-plus",
                "name": "Flat XS 500s plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/flatxs500s"
            },
            {
                "slug": "flat-xm-smart",
                "name": "Flat XM smart",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/FlatXMsmart"
            },
            {
                "slug": "flat-xm-1000-plus",
                "name": "Flat XM 1000 plus",
                "speed": 14400,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/flatxm1000"
            },
            {
                "slug": "flat-xm-2000-plus",
                "name": "Flat XM 2000 plus",
                "speed": 14400,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/flatxm2000"
            },

            {
                "slug": "lte-s-plus",
                "name": "LTE S plus",
                "speed": 21100,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/lte-s"
            },
            {
                "slug": "lte-m-plus",
                "name": "LTE M plus",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/lte-m"
            },
            {
                "slug": "lte-l-plus",
                "name": "LTE L plus",
                "speed": 50000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.hellomobil.de/tarifuebersicht/tarifdetails/lte-l"
            }
        ],
        "business": {
            name: "Drillisch Telecom GmbH",
            logo: "hellomobil.png",
            location: "Maintal, Deutschland",
            url: {
                text: "phonex.de",
                goto: "http://www.phonex.de"
            }
        }
    },



    {
        "slug": "hallotel-dsl-de",
        "name": "h@allo.tel",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.hellotel.de/index.html",
        "availabilityUrl": "http://www.hellotel.de/de/kontakt.htm",
        "plans": [
            {
                "slug": "basis",
                "name": "Basis Anschluss",
                "speed": 16000
            }
        ],
        "business": {
            name: "h@llo.tel Deutschland GmbH",
            logo: "hallotel.png",
            location: "Langen, Deutschland",
            url: {
                text: "hellotel.de",
                goto: "http://www.hellotel.de/de/"
            }
        }
    },



    {
        "slug": "herzomedia-dsl-de",
        "name": "Herzo Media",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.herzomedia.de/hm-de/internet/herzovision/preise-leistungen.html",
        "availabilityUrl": "http://www.herzomedia.de/hm-de/hilfe-service/kontakt/kontaktformular.html",
        "plans": [
            {
                "slug": "herzovision-smart",
                "name": "HERZOvision SMART",
                "speed": 256
            },
            {
                "slug": "herzovision-1m",
                "name": "HERZOvision 1M",
                "speed": 1000
            },
            {
                "slug": "herzovision-3m",
                "name": "HERZOvision 3M",
                "speed": 3000
            },
            {
                "slug": "herzovision-6m",
                "name": "HERZOvision 6M",
                "speed": 6000
            },
            {
                "slug": "herzovision-18m",
                "name": "HERZOvision 18M",
                "speed": 18000
            },
            {
                "slug": "herzovision-25m",
                "name": "HERZOvision 25M",
                "speed": 25000
            },
            {
                "slug": "herzovision-50m",
                "name": "HERZOvision 50M",
                "speed": 50000
            },

            {
                "slug": "herzoquattro-3000",
                "name": "HERZOquattro 3.000",
                "speed": 3000
            },
            {
                "slug": "herzoquattro-6000",
                "name": "HERZOquattro 6.000",
                "speed": 6000
            },
            {
                "slug": "herzoquattro-18000",
                "name": "HERZOquattro 18.000",
                "speed": 18000
            },
            {
                "slug": "herzoquattro-25000",
                "name": "HERZOquattro 25.000",
                "speed": 25000
            },
            {
                "slug": "herzoquattro-50000",
                "name": "HERZOquattro 50.000",
                "speed": 50000
            },

            {
                "slug": "herzoquattro-plus-3000",
                "name": "HERZOquattroPLUS 3.000",
                "speed": 3000
            },
            {
                "slug": "herzoquattro-plus-6000",
                "name": "HERZOquattroPLUS 6.000",
                "speed": 6000
            },
            {
                "slug": "herzoquattro-plus-18000",
                "name": "HERZOquattroPLUS 18.000",
                "speed": 18000
            },
            {
                "slug": "herzoquattro-plus-25000",
                "name": "HERZOquattroPLUS 25.000",
                "speed": 25000
            },
            {
                "slug": "herzoquattro-plus-50000",
                "name": "HERZOquattroPLUS 50.000",
                "speed": 50000
            },

            {
                "slug": "herzoquattro-plus-kabel-3000",
                "name": "HERZOquattroPLUS 3.000 (Kabel)",
                "speed": 3000
            },
            {
                "slug": "herzoquattro-plus-kabel-6000",
                "name": "HERZOquattroPLUS 6.000 (Kabel)",
                "speed": 6000
            },
            {
                "slug": "herzoquattro-plus-kabel-18000",
                "name": "HERZOquattroPLUS 18.000 (Kabel)",
                "speed": 18000
            },
            {
                "slug": "herzoquattro-plus-kabel-25000",
                "name": "HERZOquattroPLUS 25.000 (Kabel)",
                "speed": 25000
            },
            {
                "slug": "herzoquattro-plus-kabel-50000",
                "name": "HERZOquattroPLUS 50.000 (Kabel)",
                "speed": 50000
            }

        ],
        "business": {
            name: "Herzo Media GmbH & Co. KG ",
            logo: "herzomedia.png",
            location: "Herzogenaurach, Deutschland",
            url: {
                text: "herzomedia.de",
                goto: "http://www.herzomedia.de/"
            }
        }
    },



    {
        "slug": "hfo-telecom-dsl-de",
        "name": "HFO Telecom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.hfo-telecom.de/produkte/privatkunden",
        "availabilityUrl": "http://www.hfo-telecom.de/kontakt",
        "plans": [
            {
                "slug": "home-plus",
                "name": "Home+",
                "speed": 16000
            },
            {
                "slug": "home-basic",
                "name": "Home Basic",
                "speed": 16000
            },
            {
                "slug": "home-comfort",
                "name": "Home Comfort",
                "speed": 16000
            }
        ],
        "business": {
            name: "HFO Telecom AG",
            logo: "hfotelecom.png",
            location: "Hof/Saale, Deutschland",
            employees: 16,
            founded: 1997,
            url: {
                text: "hfo-telecom.de",
                goto: "http://www.hfo-telecom.de"
            }
        }
    },



    {
        "slug": "hse-medianet-dsl-de",
        "name": "HSE Medianet",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.hse-medianet.de/privatkunden-angebote/",
        "availabilityUrl": "https://www.hse-medianet.de/privatkunden-angebote/",
        "plans": [
            {
                "slug": "home-internet-vdsl-25000",
                "name": "Home Internet VDSL 25.000",
                "speed": 25000
            },
            {
                "slug": "home-internet-vdsl-50000",
                "name": "Home Internet VDSL 50.000",
                "speed": 50000
            },
            {
                "slug": "home-kombi-vdsl-25000",
                "name": "Home Kombi VDSL 25.000",
                "speed": 25000
            },
            {
                "slug": "home-kombi-vdsl-50000",
                "name": "Home Kombi VDSL 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "HSE Medianet GmbH",
            logo: "hsemedianet.png",
            location: "Darmstadt, Deutschland",
            url: {
                text: "hse-medianet.de",
                goto: "https://www.hse-medianet.de/"
            }
        }
    },



    {
        "slug": "htp-dsl-de",
        "name": "htp",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.htp.net/tariftabelle/",
        "plans": [
            {
                "slug": "surf-8000",
                "name": "Surf 8.000",
                "speed": 8000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=4&htpc=ik_pk_surf"
            },
            {
                "slug": "surf-16000",
                "name": "Surf 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=4&htpc=ik_pk_surf"
            },
            {
                "slug": "surf-50000",
                "name": "Surf 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=4&htpc=ik_pk_surf"
            },
            {
                "slug": "surf-100000",
                "name": "Surf 100.000",
                "speed": 100000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=4&htpc=ik_pk_surf"
            },

            {
                "slug": "surf-phone-8000",
                "name": "Surf & Phone 8.000",
                "speed": 8000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf-fon/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=3&htpc=ik_pk_surffon"
            },
            {
                "slug": "surf-phone-16000",
                "name": "Surf & Phone 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf-fon/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=3&htpc=ik_pk_surffon"
            },
            {
                "slug": "surf-phone-50000",
                "name": "Surf & Phone 50.000",
                "speed": 50000,
                "affiliateUrl": "hhttp://www.htp.net/dsl-telefonie/surf-fon/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=3&htpc=ik_pk_surffon"
            },
            {
                "slug": "surf-phone-100000",
                "name": "Surf & Phone 100.000",
                "speed": 100000,
                "affiliateUrl": "http://www.htp.net/dsl-telefonie/surf-fon/",
                "availabilityUrl": "http://www.htp.net/dsl-verfuegbarkeit-pruefen/?tx_auwhtp_availabilitycheck[prod]=3&htpc=ik_pk_surffon"
            }
        ],
        "business": {
            name: "htp GmbH",
            logo: "htpnet.png",
            location: "Hannover, Deutschland",
            employees: 206,
            founded: 1996,
            url: {
                text: "htp.net",
                goto: "http://www.htp.net/"
            }
        }
    },


    {
        "slug": "htp-mobile-de",
        "name": "htp (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.htp.net/mobil/",
        "availabilityUrl": "http://www.htp.net/telefonica/netzqualitaet/",
        "plans": [
            {
                "slug": "mobil-smart-100",
                "name": "Mobil Smart 100",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.htp.net/mobil/produktdetailseiten/htp-mobil-smart-100/"
            },
            {
                "slug": "mobil-allnet-flat",
                "name": "Mobil All Net Flat",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.htp.net/mobil/produktdetailseiten/htp-mobil-all-net-flat/"
            },
            {
                "slug": "mobil-data-surfsim",
                "name": "Mobil Data SurfSIM",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.htp.net/mobil/produktdetailseiten/htp-mobil-data-surfsim/"
            }
        ],
        "business": {
            name: "htp GmbH",
            logo: "htpnet.png",
            location: "Hannover, Deutschland",
            employees: 206,
            founded: 1996,
            url: {
                text: "htp.net",
                goto: "http://www.htp.net/"
            }
        }
    },



    {
        "slug": "kabelbw-dsl-de",
        "name": "Kabel BW",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.kabelbw.de/privatkunden/internet/",
        "availabilityUrl": "http://www.kabelbw.de/privatkunden/beratung/verfuegbarkeit/",
        "plans": [
            {
                "slug": "internet-10",
                "name": "Internet 10",
                "speed": 10000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/internet/basis-internetzugang/"
            },
            {
                "slug": "internet-50",
                "name": "Internet 50",
                "speed": 50000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/internet/basis-internetzugang/"
            },
            {
                "slug": "internet-100",
                "name": "Internet 100",
                "speed": 100000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/internet/basis-internetzugang/"
            },

            {
                "slug": "2play-smart",
                "name": "2play SMART",
                "speed": 10000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/2play-kombipakete/"
            },
            {
                "slug": "2play-plus-120",
                "name": "2play PLUS 120",
                "speed": 120000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/2play-kombipakete/"
            },
            {
                "slug": "2play-premium-200",
                "name": "2play PREMIUM 200",
                "speed": 200000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/2play-kombipakete/"
            },

            {
                "slug": "3play-smart-50",
                "name": "3play SMART 50",
                "speed": 10000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/3play-kombipakete/"
            },
            {
                "slug": "3play-plus-120",
                "name": "3play PLUS 120",
                "speed": 120000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/3play-kombipakete/"
            },
            {
                "slug": "3play-premium-200",
                "name": "3play PREMIUM 200",
                "speed": 200000,
                "affiliateUrl": "http://www.kabelbw.de/privatkunden/kombipakete/3play-kombipakete/"
            }
        ],
        "business": {
            name: "Unitymedia KabelBW GmbH",
            logo: "kabelbw.png",
            location: "Köln, Deutschland",
            employees: 2500,
            salesVolume: "1.3 Mrd EURO (2013)",
            founded: 2009,
            url: {
                text: "umkbw.de",
                goto: "http://www.umkbw.de/"
            }
        }
    },



    {
        "slug": "kabelbw-mobile-de",
        "name": "Kabel BW (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.kabelbw.de/privatkunden/mobil/basis-mobilvertrag/",
        "availabilityUrl": "ttp://www.kabelbw.de/privatkunden/mobil/basis-mobilvertrag/",
        "plans": [
            {
                "slug": "family-friends-surf",
                "name": "Family & Friends + Surf",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "allnet-surf",
                "name": "All Net + Surf",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "Unitymedia KabelBW GmbH",
            logo: "kabelbw.png",
            location: "Köln, Deutschland",
            employees: 2500,
            salesVolume: "1.3 Mrd EURO (2013)",
            founded: 2009,
            url: {
                text: "umkbw.de",
                goto: "http://www.umkbw.de/"
            }
        }
    },


    {
        "slug": "kabel-deutschland-dsl-de",
        "name": "Kabel Deutschland",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "availabilityUrl": "https://www.kabeldeutschland.de/shop/verfuegbarkeit/adresse/",
        "plans": [
            {
                "slug": "internet-telefon-10",
                "name": "Internet & Telefon 10",
                "speed": 10000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-10.html"
            },
            {
                "slug": "internet-telefon-25",
                "name": "Internet & Telefon 25",
                "speed": 25000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-25.html"
            },
            {
                "slug": "internet-telefon-50",
                "name": "Internet & Telefon 50",
                "speed": 50000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-50.html"
            },
            {
                "slug": "internet-telefon-100",
                "name": "Internet & Telefon 100",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-100.html"
            },
            {
                "slug": "internet-telefon-200",
                "name": "Internet & Telefon 200",
                "speed": 200000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-200.html"
            },

            {
                "slug": "internet-business-50",
                "name": "Internet Business 50",
                "speed": 50000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internetanschluss-business-50.html"
            },
            {
                "slug": "internet-business-100",
                "name": "Internet Business 100",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internetanschluss-business-100.html"
            },
            {
                "slug": "internet-telefon-business-50",
                "name": "Internet & Telefon Business 50",
                "speed": 50000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-business-50.html"
            },
            {
                "slug": "internet-telefon-business-100",
                "name": "Internet & Telefon Business 100",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/internet-telefon/internet-und-telefon-business-100.html"
            },

            {
                "slug": "kombi-basis-25",
                "name": "Basis 25",
                "speed": 25000,
                "affiliateUrl": "https://www.kabeldeutschland.de/kombi-pakete/basis-25/"
            },
            {
                "slug": "kombi-komfort-50",
                "name": "Komfort 50",
                "speed": 50000,
                "affiliateUrl": "https://www.kabeldeutschland.de/kombi-pakete/komfort-50/"
            },
            {
                "slug": "kombi-komfort-100",
                "name": "Komfort 100",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/kombi-pakete/komfort-100/"
            },
            {
                "slug": "kombi-premium-100",
                "name": "Premium 100",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/kombi-pakete/premium-100/"
            },
            {
                "slug": "kombi-premium-200",
                "name": "Premium 200",
                "speed": 200000,
                "affiliateUrl": "https://www.kabeldeutschland.de/kombi-pakete/premium-200/"
            }
        ],
        "business": {
            name: "Kabel Deutschland Vertrieb und Service GmbH",
            logo: "kabelde.png",
            location: "Unterföhring, Deutschland",
            employees: 3700,
            salesVolume: "1,9 Mrd. Euro (2013/14)",
            founded: 2003,
            url: {
                text: "kabeldeutschland.de",
                goto: "https://www.kabeldeutschland.de/"
            }
        }
    },



    {
        "slug": "kabel-deutschland-hotspot-de",
        "name": "Kabel Deutschland (WLAN Hotspots)",
        "type": "hotspot",
        "country": "DE",
        "availability": "national",
        "availabilityUrl": "https://www.kabeldeutschland.de/wlan-hotspots/hotspots-finden.html",
        "plans": [
            {
                "slug": "wlan-homespot",
                "name": "Homespot Service",
                "affiliateUrl": "https://www.kabeldeutschland.de/wlan-hotspots/homespot-service.html"
            },
            {
                "slug": "wlan-hotspot-flat",
                "name": "WLAN-Hotspot-Flat",
                "affiliateUrl": "https://www.kabeldeutschland.de/wlan-hotspots/wlan-hotspot-flat.html"
            },
            {
                "slug": "wlan-hotspot-business",
                "name": "WLAN Hotspot Business",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/wlan-hotspots/hotspot-fuer-ihr-business/produktuebersicht.html"
            },
            {
                "slug": "wlan-hotspot-business-premium",
                "name": "WLAN Hotspot Business Premium",
                "speed": 100000,
                "affiliateUrl": "https://www.kabeldeutschland.de/wlan-hotspots/hotspot-fuer-ihr-business/produktuebersicht.html"
            }
        ],
        "business": {
            name: "Kabel Deutschland Vertrieb und Service GmbH",
            logo: "kabelde.png",
            location: "Unterföhring, Deutschland",
            employees: 3700,
            salesVolume: "1,9 Mrd. Euro (2013/14)",
            founded: 2003,
            url: {
                text: "kabeldeutschland.de",
                goto: "https://www.kabeldeutschland.de/"
            }
        }
    },



    {
        "slug": "kevag-telekom-dsl-de",
        "name": "KEVAG Telekom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.kevag-telekom.de/index.php?id=140",
        "availabilityUrl": "http://www.kevag-telekom.de/Verfuegbarkeits-Check.150.0.html?&no_cache=1",
        "plans": [
            {
                "slug": "comfort",
                "name": "Comfort",
                "speed": 6000,
                "affiliateUrl": "http://www.kevag-telekom.de/Comfort.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=13&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=37d9443157c195af6176a1d9ba959eae"
            },
            {
                "slug": "smart-tv",
                "name": "Smart TV",
                "speed": 10000,
                "affiliateUrl": "http://www.kevag-telekom.de/Smart_TV.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=387&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=a6ac565a50d053c39641300c25169729"
            },
            {
                "slug": "professional",
                "name": "Professional",
                "speed": 32000,
                "affiliateUrl": "http://www.kevag-telekom.de/Professional.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=15&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=afd8f96fe356ed8e38da92f20e5b73b2"
            },
            {
                "slug": "combi-plus",
                "name": "Combi PLUS",
                "speed": 26000,
                "affiliateUrl": "http://www.kevag-telekom.de/Combi_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=17&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=9a0063c154054a8f2558318c7714067f"
            },
            {
                "slug": "professional-plus",
                "name": "Professional PLUS",
                "speed": 32000,
                "affiliateUrl": "http://www.kevag-telekom.de/Professional_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=21&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=fedda2f8fb15f211ef4f31b7550ff86f"
            },
            {
                "slug": "combi-tv-plus",
                "name": "Combi TV PLUS",
                "speed": 26000,
                "affiliateUrl": "http://www.kevag-telekom.de/Combi_TV_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=367&tx_ktkproductdbextern_pi1%5BbackPid%5D=145&tx_ktkproductdbextern_pi1%5BparentPid%5D=145&cHash=8e9eb271a78ccdcc5c774d042f268317"
            },

            {
                "slug": "vdsl-combi-plus",
                "name": "VDSL Combi PLUS",
                "speed": 16000,
                "affiliateUrl": "http://www.kevag-telekom.de/VDSL_Combi_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=423&tx_ktkproductdbextern_pi1%5BbackPid%5D=153&tx_ktkproductdbextern_pi1%5BparentPid%5D=153&cHash=f8651675d2502d37630d1a7f1070497a"
            },
            {
                "slug": "vdsl-comfort-plus",
                "name": "VDSL Comfort PLUS",
                "speed": 25000,
                "affiliateUrl": "http://www.kevag-telekom.de/VDSL_Comfort_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=425&tx_ktkproductdbextern_pi1%5BbackPid%5D=153&tx_ktkproductdbextern_pi1%5BparentPid%5D=153&cHash=a6c064491096b2889b0eea7d1d8dcc6a"
            },
            {
                "slug": "vdsl-professional-plus",
                "name": "VDSL Professional PLUS",
                "speed": 50000,
                "affiliateUrl": "http://www.kevag-telekom.de/VDSL_Professional_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=427&tx_ktkproductdbextern_pi1%5BbackPid%5D=153&tx_ktkproductdbextern_pi1%5BparentPid%5D=153&cHash=5d13160b3a863a150b45066e95431a45"
            },
            {
                "slug": "lwl-combi-plus",
                "name": "LWL Combo PLUS",
                "speed": 16000,
                "affiliateUrl": "http://www.kevag-telekom.de/LWL_Combi_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=177&tx_ktkproductdbextern_pi1%5BbackPid%5D=147&tx_ktkproductdbextern_pi1%5BparentPid%5D=147&cHash=90215de27c7db5962fb517247f379b4d"
            },
            {
                "slug": "lwl-comfort-plus",
                "name": "LWL Comfort PLUS",
                "speed": 25000,
                "affiliateUrl": "http://www.kevag-telekom.de/LWL_Comfort_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=307&tx_ktkproductdbextern_pi1%5BbackPid%5D=147&tx_ktkproductdbextern_pi1%5BparentPid%5D=147&cHash=3a8223583644695a09f87f327c97d4ba"
            },
            {
                "slug": "lwl-professional-plus",
                "name": "LWL Professional PLUS",
                "speed": 100000,
                "affiliateUrl": "http://www.kevag-telekom.de/LWL_Professional_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=181&tx_ktkproductdbextern_pi1%5BbackPid%5D=147&tx_ktkproductdbextern_pi1%5BparentPid%5D=147&cHash=c29d3b3bf280fd685cc8649f7021f807"
            }
        ],
        "business": {
            name: "KEVAG Telekom GmbH",
            logo: "kevagtelekom.png",
            location: "Koblenz, Deutschland",
            employees: 90,
            founded: 1997,
            url: {
                text: "kevag-telekom.de",
                goto: "http://www.kevag-telekom.de/"
            }
        }
    },


    {
        "slug": "kevag-telekom-hotspot-de",
        "name": "KEVAG Telekom (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.kevag-telekom.de/AIR-Produkte.146.0.html",
        "availabilityUrl": "http://www.kevag-telekom.de/AIR-Produkte.146.0.html",
        "plans": [
            {
                "slug": "air-comfort",
                "name": "AIR Comfort",
                "speed": 3000,
                "affiliateUrl": "http://www.kevag-telekom.de/AIR_Comfort.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=289&tx_ktkproductdbextern_pi1%5BbackPid%5D=146&tx_ktkproductdbextern_pi1%5BparentPid%5D=146&cHash=b057d6a2da2e53640ae54ad8f4b135e8"
            },
            {
                "slug": "air-professional",
                "name": "AIR Professional",
                "speed": 6000,
                "affiliateUrl": "http://www.kevag-telekom.de/AIR_Professional.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=291&tx_ktkproductdbextern_pi1%5BbackPid%5D=146&tx_ktkproductdbextern_pi1%5BparentPid%5D=146&cHash=05fd9480b21366c949a17c200fbe1588"
            },
            {
                "slug": "air-comfort-plus",
                "name": "AIR Comfort PLUS",
                "speed": 3000,
                "affiliateUrl": "http://www.kevag-telekom.de/AIR_Comfort_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=295&tx_ktkproductdbextern_pi1%5BbackPid%5D=146&tx_ktkproductdbextern_pi1%5BparentPid%5D=146&cHash=19299ffe02a6e7191dd0093c11c3fe9c"
            },
            {
                "slug": "air-professional-plus",
                "name": "AIR Professional PLUS",
                "speed": 6000,
                "affiliateUrl": "http://www.kevag-telekom.de/AIR_Professional_PLUS.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=297&tx_ktkproductdbextern_pi1%5BbackPid%5D=146&tx_ktkproductdbextern_pi1%5BparentPid%5D=146&cHash=a67483e3ca9aac0913e8b63e0f0a1af2"
            }
        ],
        "business": {
            name: "KEVAG Telekom GmbH",
            logo: "kevagtelekom.png",
            location: "Koblenz, Deutschland",
            employees: 90,
            founded: 1997,
            url: {
                text: "kevag-telekom.de",
                goto: "http://www.kevag-telekom.de/"
            }
        }
    },



    {
        "slug": "kevag-telekom-mobile-de",
        "name": "KEVAG Telekom (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.kevag-telekom.de/AIR-Produkte.146.0.html",
        "availabilityUrl": "http://www.kevag-telekom.de/AIR-Produkte.146.0.html",
        "plans": [
            {
                "slug": "basic",
                "name": "Basic",
                "speed": 7200,
                "dataVolume": 0,
                "affiliateUrl": "http://www.kevag-telekom.de/Basic.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=323&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=5b8e1f58c20a79e5a37f7c6fe2d485f5"
            },
            {
                "slug": "basic-data-300",
                "name": "Basic Data 300",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.kevag-telekom.de/Basic_Data_300.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=433&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=19b98c5c8dba183ecdab1bdddbe8c390"
            },
            {
                "slug": "smart-500",
                "name": "Smart 500",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "http://www.kevag-telekom.de/Smart_500.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=327&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=8b3466b61d2b44af43953ab2dd4e6cba"
            },
            {
                "slug": "allnet-flat",
                "name": "Allnet Flat",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.kevag-telekom.de/Allnet_Flat.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=329&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=0be7129660ac9b421d6883d6c11933bb"
            },
            {
                "slug": "data-1gb",
                "name": "Data 1GB",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.kevag-telekom.de/Data_1_GB.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=337&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=2d0dee8c16eba5f56f98965681ae69dc"
            },
            {
                "slug": "data-5gb",
                "name": "Data 5GB",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "http://www.kevag-telekom.de/Data_5_GB.124.0.html?&tx_ktkproductdbextern_pi1%5BshowUid%5D=339&tx_ktkproductdbextern_pi1%5BbackPid%5D=199&tx_ktkproductdbextern_pi1%5BparentPid%5D=199&cHash=36ed7bf3c0651735d3458f7262d4dd9b"
            }
        ],
        "business": {
            name: "KEVAG Telekom GmbH",
            logo: "kevagtelekom.png",
            location: "Koblenz, Deutschland",
            employees: 90,
            founded: 1997,
            url: {
                text: "kevag-telekom.de",
                goto: "http://www.kevag-telekom.de/"
            }
        }
    },



    {
        "slug": "kielnet-dsl-de",
        "name": "KielNET",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "availabilityUrl": "https://shop.kielnet.de/?WDpreform=60383C10612MZ",
        "plans": [
            {
                "slug": "aktiv-flat",
                "name": "KielNETaktiv FLAT",
                "speed": 128,
                "affiliateUrl": "http://kielnet.de/privatkunden/produktuebersicht/produkt-tarifinformationen/surfen-ohne-dsl.html"
            },
            {
                "slug": "komplett-start",
                "name": "KielNETkomplett START",
                "speed": 6000,
                "affiliateUrl": "http://kielnet.de/privatkunden/produktuebersicht/produkt-tarifinformationen/telefonie-und-internet-von-kielnet.html"
            },
            {
                "slug": "komplett-plus",
                "name": "KielNETkomplett PLUS",
                "speed": 16000,
                "affiliateUrl": "http://kielnet.de/privatkunden/produktuebersicht/produkt-tarifinformationen/telefonie-und-internet-von-kielnet.html"

            },
            {
                "slug": "komplett-vdsl",
                "name": "KielNETkomplett VDSL",
                "speed": 50000,
                "affiliateUrl": "http://kielnet.de/privatkunden/produktuebersicht/produkt-tarifinformationen/telefonie-und-internet-von-kielnet.html"

            },
            {
                "slug": "sh-komplett-50",
                "name": "SHkomplett 50",
                "speed": 50000,
                "affiliateUrl": "http://kielnet.de/glasfaserprojekte/produkte/kielnet-shkomplett/"
            },
            {
                "slug": "sh-komplett-100",
                "name": "SHkomplett 100",
                "speed": 100000,
                "affiliateUrl": "http://kielnet.de/glasfaserprojekte/produkte/kielnet-shkomplett/"
            },
            {
                "slug": "sh-komplett-50tv",
                "name": "SHkomplett 50 TV",
                "speed": 50000,
                "affiliateUrl": "http://kielnet.de/glasfaserprojekte/produkte/kielnet-shkomplett/"
            },
            {
                "slug": "sh-komplett-100tv",
                "name": "SHkomplett 100 TV",
                "speed": 100000,
                "affiliateUrl": "http://kielnet.de/glasfaserprojekte/produkte/kielnet-shkomplett/"
            }
        ],
        "business": {
            name: "Versatel GmbH",
            logo: "kielnet.png",
            location: "Berlin, Deutschland",
            founded: 1996,
            url: {
                text: "kielnet.de",
                goto: "http://kielnet.de/unternehmen/"
            }
        }
    },



    {
        "slug": "klarmobil-mobile-de",
        "name": "klarmobil.de",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "plans": [
            {
                "slug": "handy-spar-tarif",
                "name": "Handy Spar-Tarif",
                "speed": 7200,
                "dataVolume": 0,
                "affiliateUrl": "https://www.klarmobil.de/tarife/handy-spar-tarif"
            },
            {
                "slug": "surf-spar-tarif",
                "name": "Surf Spar-Flat",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.klarmobil.de/tarife/surf-spar-tarif"
            },

            {
                "slug": "allnet-starter-o2",
                "name": "AllNet Starter (o2-Netz)",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "https://www.klarmobil.de/tarife/allnet-starter"
            },
            {
                "slug": "allnet-spar-flat-o2",
                "name": "AllNet Spar-Flat (o2-Netz)",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.klarmobil.de/tarife/allnet-spar-flat"
            },

            {
                "slug": "allnet-starter-d",
                "name": "AllNet Starter (D-Netz)",
                "speed": 7200,
                "dataVolume": 400,
                "affiliateUrl": "https://www.klarmobil.de/tarife/allnet-starter"
            },
            {
                "slug": "allnet-spar-flat-d",
                "name": "AllNet Spar-Flat (D-Netz)",
                "speed": 7200,
                "dataVolume": 250,
                "affiliateUrl": "https://www.klarmobil.de/tarife/allnet-spar-flat"
            }



        ],
        "business": {
            name: "klarmobil GmbH",
            logo: "klarmobil.png",
            location: "Rendsburg, Deutschland",
            url: {
                text: "klarmobil.de",
                goto: "https://www.klarmobil.de/"
            }
        }
    },


    {
        "slug": "komro-dsl-de",
        "name": "komro",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.komro.net/themen/index.php?id=26",
        "availabilityUrl": "https://www.komro.net/themen/index.php?id=10",
        "plans": [
            {
                "slug": "cablenet-2000",
                "name": "CableNet 2.000",
                "speed": 2000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=49&tx_ttnews%5Btt_news%5D=1&cHash=8cc68cf6b56323960a978ad1cced8ecc"
            },
            {
                "slug": "cablenet-20000",
                "name": "CableNet 20.000",
                "speed": 20000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=49&tx_ttnews%5Btt_news%5D=88&cHash=a72c1d0aa5a2c74833a3b9656207abae"
            },
            {
                "slug": "cablenet-50000",
                "name": "CableNet 50.000",
                "speed": 50000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=49&tx_ttnews%5Btt_news%5D=3&cHash=06ac600c7be8e0609cf60d49e397c598"
            },
            {
                "slug": "cablenet-120000",
                "name": "CableNet 120.000",
                "speed": 120000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=49&tx_ttnews%5Btt_news%5D=9&cHash=830af9905f50ffcccd24df756be73896"
            },


            {
                "slug": "cablenet-tel-10000",
                "name": "CableNet 10.000 + CableTel",
                "speed": 10000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=17&cHash=24966782957eafce73aa720c4da42a9c"
            },
            {
                "slug": "cablenet-tel-20000",
                "name": "CableNet 20.000 + CableTel",
                "speed": 20000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=87&cHash=847f67d3da56ae912d745c72f2a24add"
            },
            {
                "slug": "cablenet-tel-50000",
                "name": "CableNet 50.000 + CableTel",
                "speed": 50000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=8&cHash=f417e8af39b3765f0028dd9228f6dc92"
            },
            {
                "slug": "cablenet-tel-120000",
                "name": "CableNet 120.000 + CableTel + BasisHD",
                "speed": 120000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=25&cHash=1cb51ee7f18987cd6eacbe35dad98bc0"
            },
            {
                "slug": "vdsl-cablenet-tel-20000",
                "name": "VDSL CableNet 20.000 + CableTel",
                "speed": 20000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=26&cHash=da8ed91357b97b4eeac5c3e0f43d3a91"
            },
            {
                "slug": "vdsl-cablenet-tel-50000",
                "name": "VDSL CableNet 50.000 + CableTel",
                "speed": 50000,
                "affiliateUrl": "https://www.komro.net/themen/index.php?id=50&tx_ttnews%5Btt_news%5D=27&cHash=bf0811dbb38bb6c0812f1a64ef3fa06a"
            }

        ],
        "business": {
            name: "komro GmbH",
            logo: "komro.png",
            location: "Rosenheim, Deutschland",
            employees: 35,
            founded: 1998,
            url: {
                text: "komro.net",
                goto: "https://www.komro.net/"
            }
        }
    },



    {
        "slug": "lidl-mobile-de",
        "name": "Lidl Mobile",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.lidl.de/de/tarifvergleich/s4045",
        "plans": [
            {
                "slug": "classic",
                "name": "Classic",
                "speed": 7200,
                "dataVolume": 0,
                "affiliateUrl": "http://www.lidl.de/de/classic/s3600"
            },
            {
                "slug": "smart-xs",
                "name": "Smart XS",
                "speed": 7200,
                "dataVolume": 100,
                "affiliateUrl": "http://www.lidl.de/de/smart-xs/s4626"
            },
            {
                "slug": "smart-s",
                "name": "Smart s",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.lidl.de/de/smart-s/s3601"
            },
            {
                "slug": "smart-l",
                "name": "Smart L",
                "speed": 7200,
                "dataVolume": 400,
                "affiliateUrl": "http://www.lidl.de/de/smart-l/s7372305"
            },
            {
                "slug": "all-net-flat",
                "name": "All-Net-Flat",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "http://www.lidl.de/de/all-net-flat/s4246"
            },
            {
                "slug": "internet-stick",
                "name": "Internet Stick",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "http://www.lidl.de/de/all-net-flat/s4246"
            }
        ],
        "business": {
            name: "Lidl E-Commerce Int. GmbH & Co. KG",
            logo: "lidl-mobile.png",
            location: "Neckarsulm, Deutschland",
            url: {
                text: "lidl.de",
                goto: "http://www.lidl.de/"
            }
        }
    },


    {
        "slug": "ligado-dsl-de",
        "name": "ligado",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.ligado.de/index.php/ligado-dsl-flat/78-produkte/110-ligado-flatrate-2",
        "availabilityUrl": "http://www.ligado.de/index.php/onlinehilfe/dsl-verfuegbarkeit",
        "plans": [
            {
                "slug": "dsl-flat",
                "name": "DSL-flat",
                "speed": 16000,
                "affiliateUrl": "http://www.ligado.de/index.php/ligado-dsl-flat"
            },
            {
                "slug": "dsl-384",
                "name": "DSL-384",
                "speed": 384,
                "affiliateUrl": "http://www.ligado.de/index.php/ligado-dsl-384"
            }
        ],
        "business": {
            name: "Inter.net Germany GmbH",
            logo: "ligado.png",
            logobg: "000000",
            location: "Berlin, Deutschland",
            url: {
                text: "ligado.de",
                goto: "http://www.ligado.de/"
            }
        }
    },


    {
        "slug": "luenecom-dsl-de",
        "name": "LüneCom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=49",
        "availabilityUrl": "http://www.luenecom.de/index.asp?tree_id=49",
        "plans": [
            {
                "slug": "lueneburg-hafen",
                "name": "Lüneburg / Hafen",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=79"
            },
            {
                "slug": "bardowick",
                "name": "Bardowick Wittorfer Heide",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=93"
            },
            {
                "slug": "nordfriesische-inseln",
                "name": "Nordfriesische Inseln",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=89"
            },
            {
                "slug": "soderstorf",
                "name": "Soderstorf",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=77"
            },
            {
                "slug": "oldendorf-luhe",
                "name": "Oldendorf / Luhe",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=90"
            },
            {
                "slug": "rehlingen",
                "name": "Rehlingen",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=91"
            },
            {
                "slug": "amelinghausen",
                "name": "Amelinghausen",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=101"
            },
            {
                "slug": "betzendorf",
                "name": "Betzendorf",
                "affiliateUrl": "http://www.luenecom.de/index.asp?tree_id=100"
            }
        ],
        "business": {
            name: "LüneCom Kommunikationslösungen GmbH",
            logo: "luenecom.png",
            location: "Lüneburg, Deutschland",
            url: {
                text: "luenecom.de",
                goto: "http://www.luenecom.de/"
            }
        }
    },


    {
        "slug": "mancitynet-dsl-de",
        "name": "man CityNet",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.man-citynet.de/zrender/",
        "availabilityUrl": "http://www.man-citynet.de/zrender/index_x4_id__10590___nu.html",
        "plans": [
            {
                "slug": "kombi-2000",
                "name": "Kombi 2.000",
                "speed": 2000
            },
            {
                "slug": "kombi-8000",
                "name": "Kombi 8.000",
                "speed": 8000
            },
            {
                "slug": "kombi-12000",
                "name": "Kombi 12.000",
                "speed": 12000
            },
            {
                "slug": "kombi-20000",
                "name": "Kombi 20.000",
                "speed": 20000
            }
        ],
        "business": {
            name: "NU Informationssysteme GmbH",
            logo: "mancitynet.png",
            location: "Riesa, Deutschland",
            url: {
                text: "man-citynet.de",
                goto: "http://www.man-citynet.de/"
            }
        }
    },



    {
        "slug": "manitu-dsl-de",
        "name": "manitu",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.manitu.de/dsl/dsl-flatrate/",
        "availabilityUrl": "https://www.manitu.de/dsl/vergleich/",
        "plans": [
            {
                "slug": "flatrate-384",
                "name": "DSL-Flatrate 384",
                "speed": 384
            },
            {
                "slug": "flatrate-768",
                "name": "DSL-Flatrate 768",
                "speed": 768
            },
            {
                "slug": "flatrate-1000",
                "name": "DSL-Flatrate 1.000",
                "speed": 1000
            },
            {
                "slug": "flatrate-2000",
                "name": "DSL-Flatrate 2.000",
                "speed": 2000
            },
            {
                "slug": "flatrate-3000",
                "name": "DSL-Flatrate 3.000",
                "speed": 3000
            },
            {
                "slug": "flatrate-6000",
                "name": "DSL-Flatrate 6.000",
                "speed": 6000
            },
            {
                "slug": "flatrate-16000",
                "name": "DSL-Flatrate 16000",
                "speed": 16000
            }
        ],
        "business": {
            name: "manitu GmbH",
            logo: "manitu.png",
            location: "St. Wendel, Deutschland",
            url: {
                text: "manitu.de",
                goto: "https://www.manitu.de/"
            }
        }
    },



    {
        "slug": "marienfeld-multimedia-dsl-de",
        "name": "Marienfeld Multimedia",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.marienfeld-multimedia.de/internet.html",
        "availabilityUrl": "http://www.marienfeld-multimedia.de/kont.html",
        "plans": [
            {
                "slug": "web",
                "name": "Web",
                "speed": 6000
            },
            {
                "slug": "fon-web",
                "name": "Fon & Web",
                "speed": 6000
            },
            {
                "slug": "fon-web-tv",
                "name": "Fon & Web & Digital-TV",
                "speed": 6000
            }
        ],
        "business": {
            name: "Marienfeld Multimedia GmbH",
            logo: "marienfeld-multimedia.png",
            location: "Gelsenkirchen, Deutschland",
            url: {
                text: "marienfeld-multimedia.de",
                goto: "http://www.marienfeld-multimedia.de/"
            }
        }
    },



    {
        "slug": "martens-dsl-de",
        "name": "Martens Deutsche Telekabel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.martens-deutschetelekabel.de/internet/",
        "availabilityUrl": "https://www.primacom.de/webshop/",
        "plans": [
            {
                "slug": "internet-6000",
                "name": "Internet 6.000",
                "speed": 6000
            },
            {
                "slug": "internet-16000",
                "name": "Internet 16.000",
                "speed": 16000
            },
            {
                "slug": "internet-32000",
                "name": "Internet 32.000",
                "speed": 32000
            },
            {
                "slug": "internet-60000",
                "name": "Internet 60.000",
                "speed": 60000
            },

            {
                "slug": "comfort-6000",
                "name": "Comfort 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/internet-telefon/"
            },
            {
                "slug": "premium-32000",
                "name": "Premium 32.000",
                "speed": 32000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/internet-telefon/"
            },
            {
                "slug": "premium-60000",
                "name": "Premium 60.000",
                "speed": 60000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/internet-telefon/"
            },
            {
                "slug": "highspeed-12000",
                "name": "Highspeed 120.000",
                "speed": 120000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/internet-telefon/"
            },
            {
                "slug": "maxi-25000",
                "name": "Maxi 25.000",
                "speed": 25000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/kombipakete/"
            },
            {
                "slug": "maxi-50000",
                "name": "Maxi 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.martens-deutschetelekabel.de/kombipakete/"
            }
        ],
        "business": {
            name: "Martens Deutsche Telekabel GmbH",
            logo: "martens.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "martens-deutschetelekabel.de",
                goto: "http://www.martens-deutschetelekabel.de/"
            }
        }
    },



    {
        "slug": "maxxim-mobile-de",
        "name": "maXXim",
        "type": "mobile",
        "country": "DE",
        "availability": "mobile",
        "affiliateUrl": "https://www.maxxim.de",
        "availabilityUrl": "https://www.maxxim.de",
        "plans": [
            {
                "slug": "all-in-200-plus",
                "name": "All-in 200 plus",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "https://www.maxxim.de/allin200"
            },
            {
                "slug": "all-in-300-plus",
                "name": "All-in 300 plus",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "https://www.maxxim.de/allin300"
            },
            {
                "slug": "all-in-500-plus",
                "name": "All-in 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.maxxim.de/allin500"
            },
            {
                "slug": "all-in-1000-plus",
                "name": "All-in 1000 plus",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.maxxim.de/allin1000"
            },

            {
                "slug": "flat-xs-500-plus",
                "name": "Flat XS 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.maxxim.de/flatxs500"
            },
            {
                "slug": "flat-xs-500s-plus",
                "name": "Flat XS 500S plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.maxxim.de/flatxs500s"
            },
            {
                "slug": "flat-xm-1000-plus",
                "name": "Flat XM 1000 plus",
                "speed": 14400,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.maxxim.de/flatxm1000"
            },
            {
                "slug": "flat-xm-2000-plus",
                "name": "Flat XM 2000 plus",
                "speed": 14400,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.maxxim.de/flatxm2000"
            },

            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21100,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.maxxim.de/lteS"
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "http://partners.webmasterplan.com/click.asp?ref=504876&site=5727&type=b300&bnb=300"
            },
            {
                "slug": "lte-l",
                "name": "LTE L",
                "speed": 50000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.maxxim.de/lteL"
            },

            {
                "slug": "data-500mb",
                "name": "Data 500 MB",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.maxximdata.de/tarifpdf/22/tarifuebersicht"
            },
            {
                "slug": "data-1000mb",
                "name": "Data 1000 MB",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.maxximdata.de/tarifpdf/22/tarifuebersicht"
            },
            {
                "slug": "data-5000mb",
                "name": "Data 5000 MB",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.maxximdata.de/tarifpdf/22/tarifuebersicht"
            }
        ],
        "business": {
            name: "MS Mobile Services GmbH ",
            logo: "maxxim.png",
            location: "Maintal, Deutschland",
            url: {
                text: "maxxim.de",
                goto: "https://www.maxxim.de/"
            }
        }
    },



    {
        "slug": "mdcc-dsl-de",
        "name": "MDCC",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.mdcc.de/mdcc-hit/",
        "availabilityUrl": "https://partner.mdcc-net.de/apex/f?p=100:2:0:::::",
        "plans": [
            {
                "slug": "hit-6",
                "name": "Hit 6",
                "speed": 6000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-6/"
            },
            {
                "slug": "hit-16",
                "name": "Hit 16",
                "speed": 16000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-16/"
            },
            {
                "slug": "hit-32",
                "name": "Hit 32",
                "speed": 32000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-32/"
            },
            {
                "slug": "hit-64",
                "name": "Hit 64",
                "speed": 64000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-64/"
            },
            {
                "slug": "hit-128",
                "name": "Hit 128",
                "speed": 128000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-128/"
            },
            {
                "slug": "hit-128",
                "name": "Hit 128",
                "speed": 128000,
                "affiliateUrl": "http://www.mdcc.de/mdcc-hit/mdcc-hit-128/"
            },
            {
                "slug": "studifun",
                "name": "Studifun",
                "speed": 16000,
                "affiliateUrl": "http://www.mdcc.de/studifun/"
            }
        ],
        "business": {
            name: "MDCC Magdeburg-City-Com GmbH",
            logo: "mdcc.png",
            location: "Magdeburg, Deutschland",
            url: {
                text: "mdcc.de",
                goto: "http://www.mdcc.de/"
            }
        }
    },



    {
        "slug": "mdsl-dsl-de",
        "name": "MDSL",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://mddsl.eu/",
        "availabilityUrl": "http://mddsl.eu/index.php?option=com_wrapper&view=wrapper&Itemid=209",
        "plans": [
            {
                "slug": "breitbandflat",
                "name": "Breitbandflat",
                "speed": 50000,
                "affiliateUrl": "http://mddsl.eu/index.php?option=com_content&view=category&layout=blog&id=56&Itemid=29"
            },
            {
                "slug": "doppel-flatrate",
                "name": "Doppel-Flatrate",
                "speed": 50000,
                "affiliateUrl": "http://mddsl.eu/index.php?option=com_content&view=category&layout=blog&id=81&Itemid=99"
            },
            {
                "slug": "allnet-flat",
                "name": "All Net Flat",
                "speed": 50000,
                "affiliateUrl": "http://mddsl.eu/index.php?option=com_content&view=category&layout=blog&id=83&Itemid=131"
            },
            {
                "slug": "profi",
                "name": "Profi",
                "speed": 100000,
                "affiliateUrl": "http://mddsl.eu/index.php?option=com_content&view=category&layout=blog&id=84&Itemid=196"
            }
        ],
        "business": {
            name: "MDDSL GmbH",
            logo: "mdsl.png",
            location: "Magdeburg, Deutschland",
            url: {
                text: "mddsl.eu",
                goto: "http://mddsl.eu/"
            }
        }
    },


    {
        "slug": "miex-dsl-de",
        "name": "mieX",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www2.miex.de/internet/dsl-privat/",
        "availabilityUrl": "http://www2.miex.de",
        "plans": [
            {
                "slug": "mini",
                "name": "Mini",
                "speed": 3000
            },
            {
                "slug": "midi",
                "name": "Midi",
                "speed": 8000
            },
            {
                "slug": "maxi",
                "name": "Maxi",
                "speed": 16000
            },
            {
                "slug": "i",
                "name": "I",
                "speed": 4000
            },
            {
                "slug": "ii",
                "name": "II",
                "speed": 8000
            },
            {
                "slug": "iii",
                "name": "III",
                "speed": 16000
            }
        ],
        "business": {
            name: "mieX Deutschland GmbH",
            logo: "miex.png",
            location: "Hauzenberg, Deutschland",
            url: {
                text: "miex.de",
                goto: "http://www2.miex.de/"
            }
        }
    },



    {
        "slug": "miex-hotspot-de",
        "name": "mieX (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www2.miex.de/internet/funk/",
        "availabilityUrl": "http://www2.miex.de",
        "plans": [
            {
                "slug": "funk-1000",
                "name": "Funk-DSL 1.000",
                "speed": 1000
            },
            {
                "slug": "funk-2000",
                "name": "Funk-DSL 2.000",
                "speed": 2000
            },
            {
                "slug": "funk-3000",
                "name": "Funk-DSL 3.000",
                "speed": 3000
            },
            {
                "slug": "funk-6000",
                "name": "Funk-DSL 6.000",
                "speed": 6000
            }
        ],
        "business": {
            name: "mieX Deutschland GmbH",
            logo: "miex.png",
            location: "Hauzenberg, Deutschland",
            url: {
                text: "miex.de",
                goto: "http://www2.miex.de/"
            }
        }
    },



    {
        "slug": "mnet-dsl-de",
        "name": "M-net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000ZpVlITd1;sid=j5yp0mxXHY-i0jiLUcmzu8SX9OhvRhcjSQg=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I",
        "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000ZpVlITd1;sid=j5yp0mxXHY-i0jiLUcmzu8SX9OhvRhcjSQg=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I",
        "plans": [
            {
                "slug": "surf-flat-18",
                "name": "Surf-Flat 18",
                "speed": 18000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD"
            },
            {
                "slug": "surf-flat-25",
                "name": "Surf-Flat 25",
                "speed": 25000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD"
            },
            {
                "slug": "surf-flat-50",
                "name": "Surf-Flat 50",
                "speed": 50000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD"
            },
            {
                "slug": "surf-flat-100",
                "name": "Surf-Flat 100",
                "speed": 100000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD"
            },
            {
                "slug": "surf-flat-300",
                "name": "Surf-Flat 300",
                "speed": 300000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse;pgid=0ZE2gFcJfkVSR0xzuWMc7dXu0000nNmmz0kx;sid=i1OR1irA9nWU1n4TBoOLv4IA8CdXQlG0Tcc=?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=xBl_AAACPK0AAAE7Q68XilJD"
            },
            {
                "slug": "surf-fon-flat-18",
                "name": "Surf&Fon-Flat 18",
                "speed": 18000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD"
            },
            {
                "slug": "surf-fon-flat-25",
                "name": "Surf&Fon-Flat 25",
                "speed": 25000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD"
            },
            {
                "slug": "surf-fon-flat-50",
                "name": "Surf&Fon-Flat 50",
                "speed": 50000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD"
            },
            {
                "slug": "surf-fon-flat-100",
                "name": "Surf&Fon-Flat 100",
                "speed": 100000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD"
            },
            {
                "slug": "surf-fon-flat-300",
                "name": "Surf&Fon-Flat 300",
                "speed": 300000,
                "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD",
                "availabilityUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=rbap_kZZIssAAAE2floF9M8I&SelectedCatalogCategoryID=l2F_AAACzEAAAAE72RIXilJD"
            }
        ],
        "business": {
            name: "M-net Telekommunikations GmbH",
            logo: "mnet.png",
            location: "München, Deutschland",
            employees: 850,
            salesVolume: "195 Mio. Euro (2013)",
            founded: 1996,
            url: {
                text: "m-net.de",
                goto: "http://www.m-net.de/"
            }
        }
    },



    {
        "slug": "mnet-mobile-de",
        "name": "M-net (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.m-net.de/is-bin/INTERSHOP.enfinity/WFS/MNET-PK-Site/de_DE/-/EUR/ViewStandardCatalog-Browse?CatalogCategoryID=3wjAqOKLCbcAAAE_GdlSkzhD&SelectedCatalogCategoryID=3wjAqOKLCbcAAAE_GdlSkzhD",
        "plans": [
            {
                "slug": "mnet-flat",
                "name": "M-net-Flat",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "surf-mnet-flat",
                "name": "Surf&M-net-Flat",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "allnet-flat",
                "name": "Allnet-Flat",
                "speed": 7200,
                "dataVolume": 300
            }
        ],
        "business": {
            name: "M-net Telekommunikations GmbH",
            logo: "mnet.png",
            location: "München, Deutschland",
            employees: 850,
            salesVolume: "195 Mio. Euro (2013)",
            founded: 1996,
            url: {
                text: "m-net.de",
                goto: "http://www.m-net.de/"
            }
        }
    },



    {
        "slug": "mvox-dsl-de",
        "name": "mvox",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.mvox.de/de/mvoxDSL/tarife/",
        "availabilityUrl": "https://www.mvox.de/de/mvoxDSL/tarife/",
        "plans": [
            {
                "slug": "adsl-6000-flat",
                "name": "Festnetz ADSL 6.000 flat",
                "speed": 6000
            },
            {
                "slug": "adsl-16000-flat",
                "name": "Festnetz ADSL 16.000 flat",
                "speed": 16000
            },
            {
                "slug": "vdsl-25000-flat",
                "name": "Festnetz VDSL 25.000 flat",
                "speed": 25000
            },
            {
                "slug": "vdsl-50000-flat",
                "name": "Festnetz VDSL 50.000 flat",
                "speed": 50000
            },
            {
                "slug": "sdsl-1000-flat",
                "name": "Festnetz SDSL 1.000 flat",
                "speed": 1000
            },
            {
                "slug": "sdsl-2000-flat",
                "name": "Festnetz SDSL 2.000 flat",
                "speed": 2000
            },
            {
                "slug": "sdsl-6000-flat",
                "name": "Festnetz SDSL 6.000 flat",
                "speed": 6000
            }
        ],
        "business": {
            name: "mvox AG",
            logo: "mvox.png",
            location: "Mettenheim/Hart, Deutschland",
            url: {
                text: "mvox.de",
                goto: "https://www.mvox.de/"
            }
        }
    },



    {
        "slug": "mvox-hotspot-de",
        "name": "mvox (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.mvox.de/de/mvoxDSL/tarife/",
        "availabilityUrl": "https://www.mvox.de/de/mvoxDSL/tarife/",
        "plans": [
            {
                "slug": "wimax-adsl-6000-flat",
                "name": "WiMAX ADSL 6.000 flat",
                "speed": 6000
            },
            {
                "slug": "wimax-adsl-16000-flat",
                "name": "WiMAX ADSL 16.000 flat",
                "speed": 16000
            },
            {
                "slug": "wimax-vdsl-25000-flat",
                "name": "WiMAX VDSL 25.000 flat",
                "speed": 25000
            },
            {
                "slug": "wimax-sdsl-1000-flat",
                "name": "WiMAX SDSL 1.000 flat",
                "speed": 1000
            },
            {
                "slug": "wimax-sdsl-2000-flat",
                "name": "WiMAX SDSL 2.000 flat",
                "speed": 2000
            },
            {
                "slug": "wimax-sdsl-10000-flat",
                "name": "WiMAX SDSL 10.000 flat",
                "speed": 6000
            }
        ],
        "business": {
            name: "mvox AG",
            logo: "mvox.png",
            location: "Mettenheim/Hart, Deutschland",
            url: {
                text: "mvox.de",
                goto: "https://www.mvox.de/"
            }
        }
    },



    {
        "slug": "neckarcom-dsl-de",
        "name": "NeckarCom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.neckarcom.de/privatkunden/",
        "availabilityUrl": "https://neckarcom.metaminded.com",
        "plans": [
            {
                "slug": "web-phone-6000",
                "name": "Web&Phone 6.000",
                "speed": 6000,
                "affiliateUrl": "http://www.neckarcom.de/privatkunden/DSL_web_phone_06000/index.jsp"
            },
            {
                "slug": "web-phone-16000",
                "name": "Web&Phone 16.000",
                "speed": 16000,
                "affiliateUrl": "http://www.neckarcom.de/privatkunden/DSL_web_phone_16000/index.jsp"
            },
            {
                "slug": "web-phone-35000",
                "name": "Web&Phone 35.000",
                "speed": 35000,
                "affiliateUrl": "http://www.neckarcom.de/privatkunden/DSL_web_phone_35000/index.jsp"
            },
            {
                "slug": "web-phone-50000",
                "name": "Web&Phone 50.000",
                "speed": 50000,
                "affiliateUrl": "http://www.neckarcom.de/privatkunden/DSL_web_phone_50000/index.jsp"
            }
        ],
        "business": {
            name: "NeckarCom Telekommunikation GmbH",
            logo: "neckarcom.png",
            location: "Stuttgart, Deutschland",
            founded: 1998,
            url: {
                text: "neckarcom.de",
                goto: "http://www.neckarcom.de/"
            }
        }
    },



    {
        "slug": "netaachen-dsl-de",
        "name": "NetAachen",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.netaachen.de/privatkunden/telefon-internet",
        "availabilityUrl": "https://www.netaachen.de/privatkunden/telefon-internet",
        "plans": [
            {
                "slug": "internet-flat",
                "name": "Internet-Flat",
                "speed": 25000
            },
            {
                "slug": "internet-flat-50",
                "name": "Internet-Flat 50",
                "speed": 50000
            },
            {
                "slug": "internet-flat-100",
                "name": "Internet-Flat 100",
                "speed": 100000
            },
            {
                "slug": "doppel-flat",
                "name": "Doppel-Flat",
                "speed": 25000
            },
            {
                "slug": "doppel-flat-premium",
                "name": "Doppel-Flat Premium",
                "speed": 25000
            },
            {
                "slug": "doppel-flat-premium-50",
                "name": "Doppel-Flat Premium 50",
                "speed": 50000
            },
            {
                "slug": "doppel-flat-premium-100",
                "name": "Doppel-Flat Premium 100",
                "speed": 100000
            }

        ],
        "business": {
            name: "NetAachen GmbH",
            logo: "netaachen.png",
            location: "Aachen, Deutschland",
            url: {
                text: "netaachen.de",
                goto: "https://www.netaachen.de/"
            }
        }
    },



    {
        "slug": "netaachen-mobile-de",
        "name": "NetAachen (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.netaachen.de/privatkunden/mobilfunk",
        "plans": [
            {
                "slug": "netmobil-smartflat",
                "name": "NetMobil-SmartFlat",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "netmobile-allflat",
                "name": "NetMobil-AllFlat",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "NetAachen GmbH",
            logo: "netaachen.png",
            location: "Aachen, Deutschland",
            url: {
                text: "netaachen.de",
                goto: "https://www.netaachen.de/"
            }
        }
    },




    {
        "slug": "netcologne-dsl-de",
        "name": "NetCologne",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.netcologne.de/privatkunden/telefon-internet",
        "availabilityUrl": "https://www.netcologne.de/privatkunden/telefon-internet",
        "plans": [
            {
                "slug": "internet-flat",
                "name": "Internet-Flat",
                "speed": 25000
            },
            {
                "slug": "internet-flat-50",
                "name": "Internet-Flat 50",
                "speed": 50000
            },
            {
                "slug": "internet-flat-100",
                "name": "Internet-Flat 100",
                "speed": 100000
            },
            {
                "slug": "doppel-flat",
                "name": "Doppel-Flat",
                "speed": 25000
            },
            {
                "slug": "doppel-flat-premium",
                "name": "Doppel-Flat Premium",
                "speed": 25000
            },
            {
                "slug": "doppel-flat-premium-50",
                "name": "Doppel-Flat Premium 50",
                "speed": 50000
            },
            {
                "slug": "doppel-flat-premium-100",
                "name": "Doppel-Flat Premium 100",
                "speed": 100000
            }

        ],
        "business": {
            name: "NetCologne GmbH",
            logo: "netcologne.png",
            location: "Köln, Deutschland",
            url: {
                text: "netcologne.de",
                goto: "https://www.netcologne.de/"
            }
        }
    },



    {
        "slug": "netcologne-mobile-de",
        "name": "NetCologne (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.netcologne.de/privatkunden/mobilfunk",
        "plans": [
            {
                "slug": "netmobil-smartflat",
                "name": "NetMobil-SmartFlat",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "netmobile-allflat",
                "name": "NetMobil-AllFlat",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "NetCologne GmbH",
            logo: "netcologne.png",
            location: "Köln, Deutschland",
            url: {
                text: "netcologne.de",
                goto: "https://www.netcologne.de/"
            }
        }
    },



    {
        "slug": "netcombw-dsl-de",
        "name": "NetCom BW",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://netcom-bw.de/index.php/privatkunden/powersurf-speak",
        "availabilityUrl": "https://netcom-bw.de/index.php/privatkunden/powersurf-speak",
        "plans": [
            {
                "slug": "powersurf-dsl-2000",
                "name": "PowerSurf DSL 2.000",
                "speed": 2000
            },
            {
                "slug": "powersurf-dsl-2000-plus",
                "name": "PowerSurf DSL 2.000+",
                "speed": 2000
            },
            {
                "slug": "powersurf-speak-16000",
                "name": "PowerSurf & Speak 16.000",
                "speed": 16000
            },
            {
                "slug": "powersurf-speak-25000",
                "name": "PowerSurf & Speak 25.000",
                "speed": 25000
            },
            {
                "slug": "powersurf-speak-50000",
                "name": "PowerSurf & Speak 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "NetCom BW GmbH",
            logo: "netcom-bw.png",
            location: "Ellwangen, Deutschland",
            url: {
                text: "netcom-bw.de",
                goto: "https://netcom-bw.de/"
            }
        }
    },




    {
        "slug": "netart-dsl-de",
        "name": "net.art",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.net-art.de/Internet/Tarife/?dsl=kabel",
        "availabilityUrl": "http://www.net-art.de/Internet/Standorte/",
        "plans": [
            {
                "slug": "vario-maxx",
                "name": "VARIO-Maxx",
                "speed": 20000
            },
            {
                "slug": "dsl-2000",
                "name": "DSL 2.000",
                "speed": 2000
            },
            {
                "slug": "dsl-6000",
                "name": "DSL 6.000",
                "speed": 6000
            },
            {
                "slug": "dsl-16000",
                "name": "DSL 16.000",
                "speed": 16000
            },

            {
                "slug": "opendsl-10000",
                "name": "OpenDSL 10.000",
                "speed": 10000
            },
            {
                "slug": "opendsl-20000",
                "name": "OpenDSL 20.000",
                "speed": 20000
            },

            {
                "slug": "tal-dsl-6000",
                "name": "TAL-DSL 6.000",
                "speed": 6000
            },
            {
                "slug": "tal-dsl-16000",
                "name": "TAL-DSL 16.000",
                "speed": 16000
            },
            {
                "slug": "tal-dsl-25000",
                "name": "TAL-DSL 25.000",
                "speed": 25000
            }
        ],
        "business": {
            name: "net.art communications GmbH",
            logo: "netart.png",
            location: "Bad Kreuznach, Deutschland",
            url: {
                text: "net-art.de",
                goto: "http://www.net-art.de/"
            }
        }
    },



    {
        "slug": "netart-hotspot-de",
        "name": "net.art (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.net-art.de/Internet/Tarife/?dsl=funk",
        "availabilityUrl": "http://www.net-art.de/Internet/Standorte/",
        "plans": [
            {
                "slug": "vario-maxx",
                "name": "VARIO-Maxx",
                "speed": 20000
            },
            {
                "slug": "dsl-2000",
                "name": "DSL 2.000",
                "speed": 2000
            },
            {
                "slug": "dsl-6000",
                "name": "DSL 6.000",
                "speed": 6000
            },
            {
                "slug": "dsl-16000",
                "name": "DSL 16.000",
                "speed": 16000
            },

            {
                "slug": "opendsl-10000",
                "name": "OpenDSL 10.000",
                "speed": 10000
            },
            {
                "slug": "opendsl-20000",
                "name": "OpenDSL 20.000",
                "speed": 20000
            },

            {
                "slug": "tal-dsl-6000",
                "name": "TAL-DSL 6.000",
                "speed": 6000
            },
            {
                "slug": "tal-dsl-16000",
                "name": "TAL-DSL 16.000",
                "speed": 16000
            },
            {
                "slug": "tal-dsl-25000",
                "name": "TAL-DSL 25.000",
                "speed": 25000
            }
        ],
        "business": {
            name: "net.art communications GmbH",
            logo: "netart.png",
            location: "Bad Kreuznach, Deutschland",
            url: {
                text: "net-art.de",
                goto: "http://www.net-art.de/"
            }
        }
    },



    {
        "slug": "o2-dsl-de",
        "name": "o2",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://dsl.o2online.de/provider/content/segment/anbieter/produkte/dsl-home/",
        "availabilityUrl": "http://dsl.o2online.de/provider/content/segment/anbieter/produkte/dsl-home/dsl-verfuegbarkeit",
        "plans": [
            {
                "slug": "dsl-allin-s",
                "name": "DSL All-in S",
                "speed": 8000
            },
            {
                "slug": "dsl-allin-m",
                "name": "DSL All-in M",
                "speed": 16000
            },
            {
                "slug": "dsl-allin-l",
                "name": "DSL All-in L",
                "speed": 50000
            },
            {
                "slug": "dsl-allin-xl",
                "name": "DSL All-in XL",
                "speed": 100000
            },
            {
                "slug": "dsl-young",
                "name": "DSL Young",
                "speed": 50000
            }
        ],
        "business": {
            name: "Telefónica Germany GmbH & Co. OHG",
            logo: "o2.png",
            location: "München, Deutschland",
            employees: 272.598,
            salesVolume: "62 Mrd. Euro (2012)",
            founded: 1924,
            url: {
                text: "o2online.de",
                goto: "http://www.o2online.de/"
            }
        }
    },



    {
        "slug": "o2-mobile-de",
        "name": "o2 (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.o2online.de/tarife/smartphone-tarife/?exclusivId=epo2p_epo2p_9x3-b_tarife-bss-angebote-consumer",
        "availabilityUrl": "http://www.o2online.de/tarife/lte/verfuegbarkeit-alt/?exclusivId=epo2p_3x3-w_fragen-zu-lte",
        "plans": [
            {
                "slug": "basic",
                "name": "Basic",
                "speed": 3600,
                "dataVolume": 200
            },
            {
                "slug": "select",
                "name": "Select",
                "speed": 21100,
                "dataVolume": 500
            },
            {
                "slug": "allin-s",
                "name": "All-in S",
                "speed": 21100,
                "dataVolume": 200
            },
            {
                "slug": "allin-m",
                "name": "All-in M",
                "speed": 21100,
                "dataVolume": 1000
            },
            {
                "slug": "allin-l",
                "name": "All-in L",
                "speed": 50000,
                "dataVolume": 3000
            },
            {
                "slug": "allin-xl",
                "name": "All-in XL",
                "speed": 50000,
                "dataVolume": 5000
            },
            {
                "slug": "allin-premium",
                "name": "All-in Premium",
                "speed": 50000,
                "dataVolume": 10000
            },

            {
                "slug": "go-prepaid-tagesflat",
                "name": "Go Prepaid Tages-Flat",
                "speed": 7200,
                "dataVolume": 1000
            },
            {
                "slug": "go-prepaid-s",
                "name": "Go Prepaid S",
                "speed": 3600,
                "dataVolume": 200
            },
            {
                "slug": "go-prepaid-m",
                "name": "Go Prepaid M",
                "speed": 3600,
                "dataVolume": 1000
            },
            {
                "slug": "go-prepaid-l",
                "name": "Go Prepaid L",
                "speed": 7200,
                "dataVolume": 5000
            },
            {
                "slug": "go-prepaid-xl",
                "name": "Go Prepaid XL",
                "speed": 14400,
                "dataVolume": 7500
            },
            {
                "slug": "go-surf-flat-m",
                "name": "Go Surf Flat M",
                "speed": 7200,
                "dataVolume": 1000
            },
            {
                "slug": "go-surf-flat-l",
                "name": "Go Surf Flat L",
                "speed": 7200,
                "dataVolume": 5000
            },
            {
                "slug": "go-surf-flat-xl",
                "name": "Go Surf Flat XL",
                "speed": 21100,
                "dataVolume": 7500
            },
            {
                "slug": "go-surf-flat-xxl",
                "name": "Go Surf Flat XXL",
                "speed": 50000,
                "dataVolume": 10000
            }
        ],
        "business": {
            name: "Telefónica Germany GmbH & Co. OHG",
            logo: "o2.png",
            location: "München, Deutschland",
            employees: 272.598,
            salesVolume: "62 Mrd. Euro (2012)",
            founded: 1924,
            url: {
                text: "o2online.de",
                goto: "http://www.o2online.de/"
            }
        }
    },




    {
        "slug": "oechernetz-dsl-de",
        "name": "Öcher-Netz",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.oecher-netz.de/index.php?page=int_dsl",
        "availabilityUrl": "http://www.oecher-netz.de/index.php?page=ser_hotline",
        "plans": [
            {
                "slug": "dsl-light",
                "name": "DSL Light",
                "speed": 20000,
                "affiliateUrl": "http://www.oecher-netz.de/index.php?page=int_dsl"
            },
            {
                "slug": "dsl-premium",
                "name": "DSL Premium",
                "speed": 20000,
                "affiliateUrl": "http://www.oecher-netz.de/index.php?page=int_dsl_premium"
            }
        ],
        "business": {
            name: "RelAix Networks GmbH",
            logo: "oechernetz.png",
            location: "Aachen, Deutschland",
            url: {
                text: "oecher-netz.de",
                goto: "http://www.oecher-netz.de/"
            }
        }
    },



    {
        "slug": "oecher-netz-hotspot-de",
        "name": "Öcher-Netz (Hotspot)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "plans": [
            {
                "slug": "oecherwlan",
                "name": "ÖcherWLAN",
                "affiliateUrl": "http://www.oecher-netz.de/index.php?page=int_wlan",
                "availabilityUrl": "http://www.oecher-netz.de/index.php?page=int_wlan"
            }
        ],
        "business": {
            name: "RelAix Networks GmbH",
            logo: "oechernetz.png",
            location: "Aachen, Deutschland",
            url: {
                text: "oecher-netz.de",
                goto: "http://www.oecher-netz.de/"
            }
        }
    },



    {
        "slug": "operator-dsl-de",
        "name": "operator",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://operator.de/produkte/privatkunden/internet-flat",
        "availabilityUrl": "http://operator.de/kontakt",
        "plans": [
            {
                "slug": "internet-flat-6",
                "name": "Internet-Flat 6.000",
                "speed": 6000,
                "affiliateUrl": "http://operator.de/produkte/privatkunden/internet-flat"
            },
            {
                "slug": "internet-flat-16",
                "name": "Internet-Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "http://operator.de/produkte/privatkunden/internet-flat"
            },

            {
                "slug": "sorglostarif-6",
                "name": "Sorglostarif 6.000",
                "speed": 6000,
                "affiliateUrl": "http://operator.de/produkte/privatkunden/sorglostarif"
            },
            {
                "slug": "sorglostarif-6",
                "name": "Sorglostarif 16.000",
                "speed": 16000,
                "affiliateUrl": "http://operator.de/produkte/privatkunden/sorglostarif"
            },

            {
                "slug": "business-adsl",
                "name": "Business ADSL",
                "speed": 16000,
                "affiliateUrl": "http://operator.de/produkte/internet"
            },
            {
                "slug": "business-sdsl",
                "name": "Business SDSL",
                "speed": 100000,
                "affiliateUrl": "http://operator.de/produkte/internet"
            }
        ],
        "business": {
            name: "operator AG",
            logo: "operator.png",
            location: "Ratingen, Deutschland",
            url: {
                text: "operator.de",
                goto: "http://operator.de/"
            }
        }
    },



    {
        "slug": "osnatel-dsl-de",
        "name": "osnatel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.osnatel.de/privatkunden/dsl-handy/dsl-vdsl-vergleich.php",
        "availabilityUrl": "https://www.osnatel.de/privatkunden/dsl-handy/dsl-vdsl-vergleich.php",
        "plans": [
            {
                "slug": "dsl-solo",
                "name": "DSL solo",
                "speed": 16000
            },
            {
                "slug": "dsl-16-komfort",
                "name": "DSL 16 komfort",
                "speed": 16000
            },
            {
                "slug": "dsl-16-premium",
                "name": "DSL 16 premium",
                "speed": 16000
            },
            {
                "slug": "dsl-50-komfort",
                "name": "DSL 50 komfort",
                "speed": 50000
            },
            {
                "slug": "dsl-50-premium",
                "name": "DSL 50 premium",
                "speed": 50000
            }
        ],
        "business": {
            name: "EWE TEL GmbH",
            logo: "osnatel.png",
            location: "Osnabrück, Deutschland",
            url: {
                text: "osnatel.de",
                goto: "https://www.osnatel.de/"
            }
        }
    },



    {
        "slug": "osnatel-mobile-de",
        "name": "osnatel (Mobil)",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.osnatel.de/privatkunden/dsl-handy/mobilfunk-tarifvergleich.php",
        "plans": [
            {
                "slug": "einfach-mobil-start",
                "name": "Einfach Mobil start",
                "speed": 7200,
                "dataVolume": 100
            },
            {
                "slug": "einfach-mobil-smart",
                "name": "Einfach Mobil smart300",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "einfach-mobil-flat",
                "name": "Einfach Mobil flat",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "EWE TEL GmbH",
            logo: "osnatel.png",
            location: "Osnabrück, Deutschland",
            url: {
                text: "osnatel.de",
                goto: "https://www.osnatel.de/"
            }
        }
    },




    {
        "slug": "otelo-mobile-de",
        "name": "Otelo",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.otelo.de/vertragstarife.html",
        "plans": [

            {
                "slug": "allnet-basic-xs",
                "name": "AllNet Basic XS",
                "speed": 250,
                "dataVolume": 14400
            },
            {
                "slug": "allnet-basic-s",
                "name": "AllNet Basic S",
                "speed": 14400,
                "dataVolume": 250
            },
            {
                "slug": "allnet-flat-m",
                "name": "AllNet Flat M",
                "speed": 21600,
                "dataVolume": 250
            },
            {
                "slug": "allnet-flat-l",
                "name": "AllNet Flat L",
                "speed": 21600,
                "dataVolume": 500
            },
            {
                "slug": "allnet-flat-xl",
                "name": "AllNet Flat XL",
                "speed": 21600,
                "dataVolume": 1000
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "otelo.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },


    {
        "slug": "pennymobile-mobile-de",
        "name": "Penny Mobil",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.pennymobil.de/mobilfunk.html",
        "plans": [
            {
                "slug": "smart-s",
                "name": "Smart S",
                "speed": 7200,
                "dataVolume": 100
            },
            {
                "slug": "smart-m",
                "name": "Smart M",
                "speed": 7200,
                "dataVolume": 200
            },
            {
                "slug": "mobil-data",
                "name": "Mobil Data",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "mobil-internet-stick",
                "name": "Mobil Internet-Stick",
                "speed": 7200
            }
        ],
        "business": {
            name: "congstar GmbH",
            logo: "pennymobil.png",
            location: "Köln, Deutschland",
            founded: 2007,
            url: {
                text: "congstar.de",
                goto: "http://www.congstar.de/"
            }
        }
    },



    {
        "slug": "perlnet-hotspot-de",
        "name": "PerlNet",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.perl-net.com/tarife/",
        "availabilityUrl": "http://www.perl-net.com/tarife/",
        "plans": [
            {
                "slug": "dsl-start-flat",
                "name": "DSL Start Flat",
                "speed": 1000
            },
            {
                "slug": "dsl-standard-flat",
                "name": "DSL Standard Flat",
                "speed": 2000
            },
            {
                "slug": "dsl-profi-flat",
                "name": "DSL Profi Flat",
                "speed": 6000
            },
            {
                "slug": "dsl-business-flat",
                "name": "DSL Business Flat",
                "speed": 10000
            }
        ],
        "business": {
            name: "PerlNet",
            logo: "perlnet.png",
            location: "Bitterfeld-Wolfen, Deutschland",
            url: {
                text: "perl-net.com",
                goto: "http://www.perl-net.com/"
            }
        }
    },



    {
        "slug": "pfalzconnect-dsl-de",
        "name": "PFALZconnect",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.pfalzconnect.de/privat.html",
        "availabilityUrl": "http://www.pfalzconnect.de/kontakt.html",
        "plans": [
            {
                "slug": "connect-3000",
                "name": "Connect.3000",
                "speed": 3000
            },
            {
                "slug": "connect-6000",
                "name": "Connect.6000",
                "speed": 6000
            },
            {
                "slug": "connect-16000",
                "name": "Connect.16000",
                "speed": 16000
            }
        ],
        "business": {
            name: "PfalzConnect GmbH",
            logo: "pfalzconnect.png",
            location: "Löllbach, Deutschland",
            url: {
                text: "pfalzconnect.de",
                goto: "http://www.pfalzconnect.de/"
            }
        }
    },



    {
        "slug": "pfalzconnect-hotspot-de",
        "name": "PFALZconnect (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.pfalzconnect.de/privat.html",
        "availabilityUrl": "http://www.pfalzconnect.de/kontakt.html",
        "plans": [
            {
                "slug": "connect-3000",
                "name": "Connect.3000",
                "speed": 3000
            },
            {
                "slug": "connect-6000",
                "name": "Connect.6000",
                "speed": 6000
            },
            {
                "slug": "connect-16000",
                "name": "Connect.16000",
                "speed": 16000
            }
        ],
        "business": {
            name: "PfalzConnect GmbH",
            logo: "pfalzconnect.png",
            location: "Löllbach, Deutschland",
            url: {
                text: "pfalzconnect.de",
                goto: "http://www.pfalzconnect.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-hameln-dsl-de",
        "name": "Stadtwerke Hameln",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.stadtwerke-hameln.de/produkte/telekommunikation/internet/pipernet/start.html",
        "availabilityUrl": "https://www.stadtwerke-hameln.de/produkte/telekommunikation/internet/pipernet/start.html",
        "plans": [
            {
                "slug": "pipernet-flat-500",
                "name": "piper:net Flat 500"
            },
            {
                "slug": "pipernet-flat-2000",
                "name": "piper:net Flat 2000"
            },
            {
                "slug": "pipernet-flat-grenzenlos",
                "name": "piper:net Grenzenlos"
            }
        ],
        "business": {
            name: "GWS Stadtwerke Hameln GmbH",
            logo: "stw-hameln.png",
            location: "Hameln, Deutschland",
            salesVolume: "102,7 Mio. Euro (2013)",
            url: {
                text: "stadtwerke-hameln.de",
                goto: "https://www.stadtwerke-hameln.de/"
            }
        }
    },



    {
        "slug": "planetdsl-dsl-de",
        "name": "PlanetDSL",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.planetdsl.de/pdsl_tarife.html",
        "availabilityUrl": "http://www.planetdsl.de/pdsl_tarife.html",
        "plans": [
            {
                "slug": "dsl-2000",
                "name": "DSL 2.000",
                "dataVolume": 2048
            },
            {
                "slug": "dsl-3000",
                "name": "DSL 3.000",
                "dataVolume": 3072
            },
            {
                "slug": "dsl-5000",
                "name": "DSL 5.000",
                "dataVolume": 5120
            },
            {
                "slug": "dsl-7000",
                "name": "DSL 7.000",
                "dataVolume": 7168
            },
            {
                "slug": "dsl-15000",
                "name": "DSL 15.000",
                "dataVolume": 15.360
            }
        ],
        "business": {
            name: "1click2 Internet Services GmbH",
            logo: "planetdsl.png",
            logobg: "245e83",
            location: "Hamburg, Deutschland",
            url: {
                text: "planetdsl.de",
                goto: "http://www.planetdsl.de/"
            }
        }
    },



    {
        "slug": "portunity-dsl-de",
        "name": "Portunity",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.portunity.de/access/produkte/dsl-anschluesse/dsl-zugaenge.html",
        "availabilityUrl": "http://www.portunity.de/access/produkte/dsl-anschluesse/dsl-zugaenge.html",
        "plans": [
            {
                "slug": "starter-access",
                "name": "Starter-Access",
                "dataVolume": 10000
            },
            {
                "slug": "flat-budget",
                "name": "Flat-Budget"
            },
            {
                "slug": "flat-budget-plus",
                "name": "Flat Budget Plus"
            }
        ],
        "business": {
            name: "Portunity GmbH",
            logo: "portunity.png",
            logobg: "528ac5",
            location: "Radevormwald, Deutschland",
            founded: 1996,
            url: {
                text: "portunity.de",
                goto: "http://www.portunity.de/"
            }
        }
    },



    {
        "slug": "primacall-dsl-de",
        "name": "primacall",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.primacall.de/dsl.html",
        "availabilityUrl": "http://www.primacall.de/dsl.html",
        "plans": [
            {
                "slug": "dsl-star-s",
                "name": "DSL Star S",
                "speed": 16000
            },
            {
                "slug": "dsl-star-m",
                "name": "DSL Star M",
                "speed": 16000
            },
            {
                "slug": "dsl-star-flat-xl",
                "name": "DSL Star Flat XL",
                "speed": 16000
            },
            {
                "slug": "dsl-star-speed",
                "name": "DSL Star Speed",
                "speed": 50000
            }
        ],
        "business": {
            name: "primacall GmbH",
            logo: "primacall.png",
            location: "Berlin, Deutschland",
            url: {
                text: "primacall.de",
                goto: "http://www.primacall.de/"
            }
        }
    },



    {
        "slug": "primacall-mobile-de",
        "name": "primacall (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.primacall.de/mobilfunk.html",
        "plans": [
            {
                "slug": "allnet-200",
                "name": "AllNet 200",
                "speed": 7200,
                "dataVolume": 200
            },
            {
                "slug": "allnet-300",
                "name": "AllNet 300",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "allnet-flat",
                "name": "AllNet Flat",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "allnet-flat-xl",
                "name": "AllNet Flat XL",
                "speed": 7200,
                "dataVolume": 1000
            }
        ],
        "business": {
            name: "primacall GmbH",
            logo: "primacall.png",
            location: "Berlin, Deutschland",
            url: {
                text: "primacall.de",
                goto: "http://www.primacall.de/"
            }
        }
    },



    {
        "slug": "primacom-dsl-de",
        "name": "primacom",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.primacom.de/internetanschluss/",
        "availabilityUrl": "https://www.primacom.de/verfuegbarkeit",
        "plans": [
            {
                "slug": "internet-50",
                "name": "Internet 50",
                "speed": 50000,
                "affiliateUrl": "https://www.primacom.de/internetanschluss/"
            },
            {
                "slug": "internet-100",
                "name": "Internet 100",
                "speed": 100000,
                "affiliateUrl": "https://www.primacom.de/internetanschluss/"
            },
            {
                "slug": "internet-150",
                "name": "Internet 150",
                "speed": 150000,
                "affiliateUrl": "https://www.primacom.de/internetanschluss/"
            },

            {
                "slug": "2er-paket-10",
                "name": "2er Paket 10",
                "speed": 10000,
                "affiliateUrl": "https://www.primacom.de/internet-telefon/"
            },
            {
                "slug": "2er-paket-50",
                "name": "2er Paket 50",
                "speed": 50000,
                "affiliateUrl": "https://www.primacom.de/internet-telefon/"
            },
            {
                "slug": "2er-paket-100",
                "name": "2er Paket 100",
                "speed": 100000,
                "affiliateUrl": "https://www.primacom.de/internet-telefon/"
            },
            {
                "slug": "2er-paket-150",
                "name": "2er Paket 150",
                "speed": 150000,
                "affiliateUrl": "https://www.primacom.de/internet-telefon/"
            },

            {
                "slug": "3er-paket-50",
                "name": "3er Paket 50",
                "speed": 50000,
                "affiliateUrl": "https://www.primacom.de/kombipakete/"
            },
            {
                "slug": "3er-paket-100",
                "name": "3er Paket 100",
                "speed": 100000,
                "affiliateUrl": "https://www.primacom.de/kombipakete/"
            },
            {
                "slug": "3er-paket-150",
                "name": "3er Paket 150",
                "speed": 150000,
                "affiliateUrl": "https://www.primacom.de/kombipakete/"
            }
        ],
        "business": {
            name: "PrimaCom Berlin GmbH",
            logo: "primacom.png",
            location: "Leipzig, Deutschland",
            founded: 1998,
            url: {
                text: "primacom.de",
                goto: "https://www.primacom.de/"
            }
        }
    },



    {
        "slug": "quix-dsl-de",
        "name": "QUiX",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.myquix.de/tarife/",
        "availabilityUrl": "https://www.myquix.de/tarife/",
        "plans": [
            {
                "slug": "dsl-xs",
                "name": "DSL XS",
                "speed": 3000
            },
            {
                "slug": "dsl-s",
                "name": "DSL S",
                "speed": 16000
            },
            {
                "slug": "dsl-25",
                "name": "DSL 25.000",
                "speed": 25000
            },
            {
                "slug": "dsl-50",
                "name": "DSL 50.000",
                "speed": 50000
            },
            {
                "slug": "dsl-100",
                "name": "DSL 100.000",
                "speed": 100000
            }
        ],
        "business": {
            name: "inexio KGaA",
            logo: "quix.png",
            location: "Saarlouis, Deutschland",
            url: {
                text: "https://www.myquix.de/",
                goto: "https://www.myquix.de/"
            }
        }
    },


    {
        "slug": "rapeedo-dsl-de",
        "name": "rapeedo",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.rapeedo.de/index.php?id=36",
        "availabilityUrl": "http://www.rapeedo.de/index.php?id=38",
        "plans": [
            {
                "slug": "glasfaser-25",
                "name": "Glasfaser 25",
                "speed": 25000
            },
            {
                "slug": "glasfaser-50",
                "name": "Glasfaser 50",
                "speed": 50000
            },
            {
                "slug": "glasfaser-100",
                "name": "Glasfaser 100",
                "speed": 100000
            },
            {
                "slug": "glasfaser-200",
                "name": "Glasfaser 200",
                "speed": 200000
            }
        ],
        "business": {
            name: "KomMITT-Ratingen GmbH",
            logo: "rapeedo.png",
            logobg: "01415d",
            location: "Ratingen, Deutschland",
            url: {
                text: "rapeedo.de",
                goto: "http://www.rapeedo.de/"
            }
        }
    },


    {
        "slug": "rftkabel-dsl-de",
        "name": "RFT kabel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.rftkabel.de/index.php?id=367",
        "availabilityUrl": "http://www.rftkabel.de/index.php?id=367",
        "plans": [
            {
                "slug": "internet-2000",
                "name": "Internet 2.000",
                "speed": 2000
            },
            {
                "slug": "internet-6000",
                "name": "Internet 6.000",
                "speed": 6000
            },
            {
                "slug": "internet-14000",
                "name": "Internet 14.000",
                "speed": 14000
            },
            {
                "slug": "internet-28000",
                "name": "Internet 28.000",
                "speed": 28000
            },
            {
                "slug": "internet-50000",
                "name": "Internet 50.000",
                "speed": 50000
            },
            {
                "slug": "internet-120000",
                "name": "Internet 120.000",
                "speed": 120000
            },
            {
                "slug": "internet-160000",
                "name": "Internet 160.000",
                "speed": 160000
            }
        ],
        "business": {
            name: "RFT kabel Brandenburg GmbH",
            logo: "rftkabel.png",
            location: "Brandenburg an der Havel, Deutschland",
            url: {
                text: "rftkabel.de",
                goto: "http://www.rftkabel.de/"
            }
        }
    },



    {
        "slug": "rkom-dsl-de",
        "name": "R KOM",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.r-kom.de/produkte/internet-telefon/komplettpakete-privatkunden/",
        "availabilityUrl": "http://www.r-kom.de/support/service-beratung/",
        "plans": [
            {
                "slug": "rkomplete-1",
                "name": "R-Komplete 1",
                "speed": 6000
            },
            {
                "slug": "rkomplete-3",
                "name": "R-Komplete 3",
                "speed": 6000
            }
        ],
        "business": {
            name: "R-KOM GmbH & Co. KG",
            logo: "rkom.png",
            location: "Regensburg, Deutschland",
            url: {
                text: "r-kom.de",
                goto: "http://www.r-kom.de/"
            }
        }
    },


    {
        "slug": "rtlsurfstick-mobile-de",
        "name": "RTL",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.rtlsurfstick.de",
        "plans": [
            {
                "slug": "surfstick",
                "name": "Surfstick",
                "speed": 7200
            },
            {
                "slug": "wlan-router",
                "name": "Mobile W-LAN Router",
                "speed": 7200
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "rtlsurfstick.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },



    {
        "slug": "satconnect-dsl-de",
        "name": "satConnect",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://de.satconnect.com/index.php?c=tariff&s=overview",
        "plans": [
            {
                "slug": "private-750",
                "name": "Private 750",
                "speed": 750
            },
            {
                "slug": "private-1500",
                "name": "Private 1.500",
                "speed": 1500
            },
            {
                "slug": "private-2000",
                "name": "Private 2.000",
                "speed": 2000
            },
            {
                "slug": "private-3000",
                "name": "Private 3.000",
                "speed": 3000
            },
            {
                "slug": "private-6000",
                "name": "Private 6.000",
                "speed": 6000
            },
            {
                "slug": "private-10000",
                "name": "Private 10.000",
                "speed": 10000
            },

            {
                "slug": "soho-750",
                "name": "SOHO 750",
                "speed": 750
            },
            {
                "slug": "soho-1500",
                "name": "SOHO 1.500",
                "speed": 1500
            },
            {
                "slug": "soho-3000",
                "name": "SOHO 3.000",
                "speed": 3000
            },

            {
                "slug": "enterprise-750",
                "name": "Enterprise 750",
                "speed": 750
            },
            {
                "slug": "enterprise-1500",
                "name": "Enterprise 1.500",
                "speed": 1500
            },
            {
                "slug": "enterprise-3000",
                "name": "Enterprise 3.000",
                "speed": 3000
            },


            {
                "slug": "village-750",
                "name": "Village 750",
                "speed": 750
            },
            {
                "slug": "village-1500",
                "name": "Village 1.500",
                "speed": 1500
            },
            {
                "slug": "village-3000",
                "name": "Village 3.000",
                "speed": 3000
            }
        ],
        "business": {
            name: "skyDSL Deutschland GmbH",
            logo: "satconnect.png",
            location: "Berlin, Deutschland",
            url: {
                text: "satconnect.com",
                goto: "http://de.satconnect.com/"
            }
        }
    },


    {
        "slug": "schlaucom-dsl-de",
        "name": "schlau.com",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://schlau.com/ProdukteDslUndTelefon.aspx",
        "availabilityUrl": "https://schlau.com/Verfuegbarkeit.aspx",
        "plans": [
            {
                "slug": "dsl-16",
                "name": "DSL 16.000",
                "speed": 16000
            },
            {
                "slug": "komplett-paket-plus",
                "name": "Komplett-Paket PLUS",
                "speed": 25000
            },
            {
                "slug": "komplett-paket-plus-50",
                "name": "Komplett-Paket PLUS + 50 MBit/s Option",
                "speed": 50000
            },
            {
                "slug": "komplett-paket-fit",
                "name": "Komplett-Paket FIT",
                "speed": 50000
            },
            {
                "slug": "komplett-paket-fit-300",
                "name": "Komplett-Paket FIT + 300 MBit/s Option",
                "speed": 300000
            }
        ],
        "business": {
            name: "energis GmbH",
            logo: "schlaucom.png",
            location: "Saarbrücken, Deutschland",
            url: {
                text: "schlau.com",
                goto: "https://schlau.com/"
            }
        }
    },


    {
        "slug": "suedkuriertel-dsl-de",
        "name": "SÜDKURIERtel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.suedkuriertel.de/index.php?id=340",
        "availabilityUrl": "https://www.suedkuriertel.de/index.php?id=340",
        "plans": [
            {
                "slug": "dsl-1000",
                "name": "DSL 1000",
                "speed": 1000
            },
            {
                "slug": "dsl-2000",
                "name": "DSL 2000",
                "speed": 2000
            }
        ],
        "business": {
            name: "SÜDKURIER GmbH",
            logo: "suedkuriertel.png",
            logobg: "f29500",
            location: "Konstanz, Deutschland",
            url: {
                text: "suedkuriertel.de",
                goto: "https://www.suedkuriertel.de/"
            }
        }
    },


    {
        "slug": "sdtnet-dsl-de",
        "name": "sdt.net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.sdt.net/index.php?id=198",
        "availabilityUrl": "http://www.sdt.net/index.php?id=192",
        "plans": [
            {
                "slug": "dsl-plus",
                "name": "sdt.dsl plus",
                "speed": 1000
            },
            {
                "slug": "dsl-plus-flatrate",
                "name": "std.dsl plus flatrate",
                "speed": 1000
            },
            {
                "slug": "dsl-plus-komplett",
                "name": "sdt.dsl plus komplett",
                "speed": 1000
            },
            {
                "slug": "dsl-kombiflat",
                "name": "sdt.kombiflat 8000",
                "speed": 8000
            }
        ],
        "business": {
            name: "sdt.net AG",
            logo: "sdtnet.png",
            location: "Aalen, Deutschland",
            url: {
                text: "sdt.net",
                goto: "http://www.sdt.net/"
            }
        }
    },


    {
        "slug": "sdtnet-mobile-de",
        "name": "sdt.net (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.sdt.net/index.php?id=408",
        "availability": "national",
        "plans": [
            {
                "slug": "greencard-surf-1000",
                "name": "GREENCARD surf 1000",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.sdt.net/index.php?id=408"
            },
            {
                "slug": "greencard-surf-5000",
                "name": "GREENCARD 5000",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "http://www.sdt.net/index.php?id=408"
            },
            {
                "slug": "greencard-smart",
                "name": "GREENCARD smart",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.sdt.net/index.php?id=409"
            },
            {
                "slug": "greencard-smart-flat",
                "name": "GREENCARD smart flat",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.sdt.net/index.php?id=409"
            },
            {
                "slug": "greencard-smart-allnet",
                "name": "GREENCARD smart allnet",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.sdt.net/index.php?id=409"
            }
        ],
        "business": {
            name: "sdt.net AG",
            logo: "sdtnet.png",
            location: "Aalen, Deutschland",
            url: {
                text: "sdt.net",
                goto: "http://www.sdt.net/"
            }
        }
    },


    {
        "slug": "simfinity-mobile-de",
        "name": "simfinity",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.simfinity.de/tarif",
        "plans": [
            {
                "slug": "flat",
                "name": "Flat",
                "speed": 42200,
                "dataVolume": 500
            },
            {
                "slug": "flat-2gb",
                "name": "Flat 2GB",
                "speed": 42200,
                "dataVolume": 2000
            },
            {
                "slug": "2gb-musikflat",
                "name": "2GB + Musik Flat",
                "speed": 42200,
                "dataVolume": 2000
            }
        ],
        "business": {
            name: "E-Plus Service GmbH & Co. KG",
            logo: "simfinty.png",
            location: "Potsdam, Deutschland",
            employees: 4500,
            salesVolume: "3,2 Milliarden EUR (2013)",
            founded: 1993,
            url: {
                text: "simfinity.de",
                goto: "https://www.simfinity.de/"
            }
        }
    },



    {
        "slug": "simply-mobile-de",
        "name": "simply",
        "type": "mobile",
        "country": "DE",
        "availability": "mobile",
        "affiliateUrl": "https://www.simplytel.de",
        "availabilityUrl": "https://www.simplytel.de",
        "plans": [
            {
                "slug": "all-in-200-plus",
                "name": "All-in 200 plus",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "https://www.simplytel.de/allin200"
            },
            {
                "slug": "all-in-300-plus",
                "name": "All-in 300 plus",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "https://www.simplytel.de/allin300"
            },
            {
                "slug": "all-in-500-plus",
                "name": "All-in 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.simplytel.de/allin500"
            },
            {
                "slug": "all-in-1000-plus",
                "name": "All-in 1000 plus",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.simplytel.de/allin1000"
            },

            {
                "slug": "flat-xs-500-plus",
                "name": "Flat XS 500 plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.simplytel.de/flatxs500"
            },
            {
                "slug": "flat-xs-500s-plus",
                "name": "Flat XS 500S plus",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.simplytel.de/flatxs500s"
            },
            {
                "slug": "flat-xm-1000-plus",
                "name": "Flat XM 1000 plus",
                "speed": 14400,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.simplytel.de/flatxm1000"
            },
            {
                "slug": "flat-xm-2000-plus",
                "name": "Flat XM 2000 plus",
                "speed": 14400,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.simplytel.de/flatxm2000"
            },

            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21100,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.simplytel.de/lte-s"
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.simplytel.de/lte-m"
            },
            {
                "slug": "lte-l",
                "name": "LTE L",
                "speed": 50000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.simplytel.de/lte-l"
            },

            {
                "slug": "data-500mb",
                "name": "Data 500 MB",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.simplydata.de/#Flat_500MB"
            },
            {
                "slug": "data-1000mb",
                "name": "Data 1000 MB",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.simplydata.de/#Flat_1GB"
            },
            {
                "slug": "data-5000mb",
                "name": "Data 5000 MB",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.simplydata.de/#Flat_5GB"
            }
        ],
        "business": {
            name: "Drillisch Telecom GmbH",
            logo: "simply.png",
            location: "Maintal, Deutschland",
            url: {
                text: "simplytel.de",
                goto: "https://www.simplytel.de"
            }
        }
    },



    {
        "slug": "simyo-mobile-de",
        "name": "simyo",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.simyo.de/tarife.html",
        "plans": [
            {
                "slug": "starter-9cent",
                "name": "Starter 9 Cent",
                "speed": 42200,
                "dataVolume": 0
            },
            {
                "slug": "starter-s",
                "name": "Starter S",
                "speed": 42200,
                "dataVolume": 200
            },
            {
                "slug": "starter-m",
                "name": "Starter M",
                "speed": 42200,
                "dataVolume": 200
            },

            {
                "slug": "allon-l",
                "name": "All-On L",
                "speed": 42200,
                "dataVolume": 1000
            },
            {
                "slug": "allon-xl",
                "name": "All-On XL",
                "speed": 42200,
                "dataVolume": 1000
            },
            {
                "slug": "allon-flat",
                "name": "All-On Flat",
                "speed": 42200,
                "dataVolume": 1000
            },

            {
                "slug": "data-200",
                "name": "Data 200 MB",
                "speed": 42200,
                "dataVolume": 200
            },
            {
                "slug": "data-1000",
                "name": "Data 1 GB",
                "speed": 42200,
                "dataVolume": 1000
            },
            {
                "slug": "data-3000",
                "name": "Data 3 GB",
                "speed": 42200,
                "dataVolume": 3000
            }
        ],
        "business": {
            name: "simyo GmbH",
            logo: "simyo.png",
            location: "Düsseldorf, Deutschland",
            url: {
                text: "simyo.de",
                goto: "https://www.simyo.de/"
            }
        }
    },


    {
        "slug": "skydsl-dsl-de",
        "name": "skyDSL",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.skydsl.eu/de-DE/Satelliten-Internet/tariff/skydsl2p",
        "availabilityUrl": "http://www.skydsl.eu/de-DE/Satelliten-Internet/DSL-Verfügbarkeit/Internet-ohne-Festnetz-und-ohne-Telefonanschluss",
        "plans": [
            {
                "slug": "flat-s",
                "name": "skyDSL2+ Flat S",
                "speed": 6000
            },
            {
                "slug": "flat-m",
                "name": "skyDSL2+ Flat M",
                "speed": 12000
            },
            {
                "slug": "flat-l",
                "name": "skyDSL2+ Flat L",
                "speed": 20000
            }
        ],
        "business": {
            name: "skyDSL Deutschland GmbH",
            logo: "skydsl.png",
            location: "Berlin, Deutschland",
            founded: 1999,
            url: {
                text: "skydsl.eu",
                goto: "http://www.skydsl.eu/"
            }
        }
    },



    {
        "slug": "smartdsl-dsl-de",
        "name": "smart-DSL",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.smart-dsl.net",
        "availabilityUrl": "https://www.smart-dsl.net/verfuegbar.html",
        "plans": [
            {
                "slug": "dsl-tal-3000",
                "name": "DSL 3.000 TAL",
                "speed": 3000
            },
            {
                "slug": "dsl-tal-6000",
                "name": "DSL 6.000 TAL",
                "speed": 6000
            },
            {
                "slug": "dsl-tal-20000",
                "name": "DSL 20.000 TAL",
                "speed": 20000
            },
            {
                "slug": "dsl-tal-50000",
                "name": "DSL 50.000 TAL",
                "speed": 50000
            },

            {
                "slug": "dsl-hdsl-3000",
                "name": "DSL 3.000 HDSL",
                "speed": 3000
            },
            {
                "slug": "dsl-hdsl-6000",
                "name": "DSL 6.000 HDSL",
                "speed": 6000
            },
            {
                "slug": "dsl-hdsl-20000",
                "name": "DSL 20.000 HDSL",
                "speed": 20000
            },
            {
                "slug": "dsl-hdsl-50000",
                "name": "DSL 50.000 HDSL",
                "speed": 50000
            },
            {
                "slug": "dsl-shdsl-100000",
                "name": "DSL 100.000 S-HDSL",
                "speed": 100000
            }
        ],
        "business": {
            name: "smart-DSL GmbH",
            logo: "smartdsl.png",
            location: "Wiggensbach, Deutschland",
            url: {
                text: "smart-dsl.net",
                goto: "https://www.smart-dsl.net/"
            }
        }
    },



    {
        "slug": "smartmobil-mobile-de",
        "name": "smartmobil.de",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.smartmobil.de/smartphone-tarife?smartmobil=h21jvtf0s3b6phb1h45sh28so0",
        "plans": [
            {
                "slug": "allin-xs",
                "name": "All-in XS",
                "speed": 7200,
                "dataVolume": 100
            },
            {
                "slug": "allin-xm",
                "name": "All-in XM",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "allin-xl",
                "name": "All-in XL",
                "speed": 7200,
                "dataVolume": 500
            },

            {
                "slug": "flat-xs",
                "name": "Flat XS 500S",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "flat-xs-500s",
                "name": "Flat XS 500S",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "flat-xm",
                "name": "Flat XM",
                "speed": 14400,
                "dataVolume": 1000
            },

            {
                "slug": "lte-one",
                "name": "LTE One",
                "speed": 21100,
                "dataVolume": 300
            },
            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21100,
                "dataVolume": 1000
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "dataVolume": 2000
            },
            {
                "slug": "lte-l",
                "name": "LTE L",
                "speed": 50000,
                "dataVolume": 3000
            }
        ],
        "business": {
            name: "MS Mobile Services GmbH ",
            logo: "smartmobil.png",
            location: "Maintal, Deutschland",
            url: {
                text: "smartmobil.de",
                goto: "https://www.smartmobil.de/"
            }
        }
    },


    {
        "slug": "snafu-dsl-de",
        "name": "snafu",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.snafu.de/produkte/dsl/snafuadsl-flat",
        "availabilityUrl": "http://www.snafu.de/produkte/dsl/snafuadsl-flat",
        "plans": [
            {
                "slug": "snafu-adsl-flat",
                "name": "snafu.adsl flat",
                "speed": 16000
            }
        ],
        "business": {
            name: "Inter.net Germany GmbH",
            logo: "snafu.png",
            location: "Berlin, Deutschland",
            url: {
                text: "snafu.de",
                goto: "http://www.snafu.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-einbeck-hotspot-de",
        "name": "Stadtwerke Einbeck",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.stadtwerke-einbeck.de/internet-telefonie/",
        "availabilityUrl": "http://www.stadtwerke-einbeck.de/internet-telefonie/verfuegbarkeit.php",
        "plans": [
            {
                "slug": "internet-einbeck-1000",
                "name": "internet-einbeck 1.000",
                "speed": 1000,
                "dataVolume": 1000
            },
            {
                "slug": "internet-einbeck-2000",
                "name": "internet-einbeck 2.000",
                "speed": 2000,
                "dataVolume": 1000
            },
            {
                "slug": "internet-einbeck-4000",
                "name": "internet-einbeck 4.000",
                "speed": 4000,
                "dataVolume": 1000
            },
            {
                "slug": "internet-einbeck-6000",
                "name": "internet-einbeck 6.000",
                "speed": 6000,
                "dataVolume": 1000
            }
        ],
        "business": {
            name: "Stadtwerke Einbeck GmbH",
            logo: "stw-einbeck.png",
            location: "Einbeck, Deutschland",
            url: {
                text: "stadtwerke-einbeck.de",
                goto: "http://www.stadtwerke-einbeck.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-konstanz-dsl-de",
        "name": "Stadtwerke Konstanz",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.familie-kabel-konstanz.de/privatkunden/produktuebersicht/",
        "plans": [
            {
                "slug": "net-025-1",
                "name": "Net 025/1",
                "speed": 25000,
                "availabilityUrl": "http://www.familie-kabel-konstanz.de/index.php?id=4"
            },
            {
                "slug": "net-050-2",
                "name": "Net 050/2",
                "speed": 50000,
                "availabilityUrl": "http://www.familie-kabel-konstanz.de/index.php?id=4"
            },
            {
                "slug": "net-100-5",
                "name": "Net 100/5",
                "speed": 100,
                "availabilityUrl": "http://www.familie-kabel-konstanz.de/index.php?id=4"
            },
            {
                "slug": "seeconnect-dsl-basis",
                "name": "SeeConnect dsl Basis",
                "speed": 16000,
                "availabilityUrl": "http://www.familie-kabel-hoeri.de/privatkunden/dsl-tarife/"
            },
            {
                "slug": "seeconnect-dsl-plus",
                "name": "SeeConnect dsl Plus",
                "speed": 50000,
                "availabilityUrl": "http://www.familie-kabel-hoeri.de/privatkunden/dsl-tarife/"
            }
        ],
        "business": {
            name: "Stadtwerke Konstanz GmbH",
            logo: "stw-konstanz.png",
            location: "Konstanz, Deutschland",
            url: {
                text: "stadtwerke.konstanz.de",
                goto: "http://stadtwerke.konstanz.de"
            }
        }
    },



    {
        "slug": "stadtwerke-lindau-dsl-de",
        "name": "Stadtwerke Lindau/Wangen/Allgäu",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.familie-kabel-bodensee.de/startseite",
        "availabilityUrl": "http://www.familie-kabel-bodensee.de/startseite",
        "plans": [
            {
                "slug": "standardpaket-50",
                "name": "Standardpaket 50",
                "speed": 50000
            },
            {
                "slug": "standardpaket-50-plus",
                "name": "Standardpaket 50 Plus",
                "speed": 50000
            },
            {
                "slug": "standardpaket-100",
                "name": "Standardpaket 100",
                "speed": 100000
            },
            {
                "slug": "standardpaket-100-plus",
                "name": "Standardpaket 100 Plus",
                "speed": 100000
            },
            {
                "slug": "premiumpaket-50",
                "name": "Premiumpaket 50",
                "speed": 50000
            },
            {
                "slug": "premiumpaket-50-plus",
                "name": "Premiumpaket 50 Plus",
                "speed": 50000
            },
            {
                "slug": "premiumpaket-100",
                "name": "Premiumpaket 100",
                "speed": 100000
            },
            {
                "slug": "premiumpaket-100-plus",
                "name": "Premiumpaket 100 Plus",
                "speed": 100000
            }
        ],
        "business": {
            name: "Stadtwerke Lindau GmbH Co. KG",
            logo: "stw-lindau.png",
            location: "Lindau, Deutschland",
            url: {
                text: "familie-kabel-lindau.de",
                goto: "http://www.familie-kabel-lindau.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-marburg-hotspot-de",
        "name": "Stadtwerke Marburg",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat",
        "availabilityUrl": "http://www.wdsl-mr.de/?go=gebiete",
        "plans": [
            {
                "slug": "wdsl-privat-2000",
                "name": "WDSL Privat 2.000",
                "speed": 2000,
                "dataVolume": 25000,
                "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat"
            },
            {
                "slug": "wdsl-privat-3000",
                "name": "WDSL Privat 3.000",
                "speed": 3000,
                "dataVolume": 25000,
                "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat"
            },
            {
                "slug": "wdsl-privat-4000",
                "name": "WDSL Privat 4.000",
                "speed": 4000,
                "dataVolume": 25000,
                "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat"
            },
            {
                "slug": "wdsl-privat-5000",
                "name": "WDSL Privat 5.000",
                "speed": 5000,
                "dataVolume": 25000,
                "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat"
            },
            {
                "slug": "wdsl-privat-6000",
                "name": "WDSL Privat 6.000",
                "speed": 6000,
                "dataVolume": 25000,
                "affiliateUrl": "http://www.wdsl-mr.de/?go=wdsl_all_preisliste_privat"
            }
        ],
        "business": {
            name: "Stadtwerke Marburg GmbH",
            logo: "stw-marburg.png",
            location: "Marburg, Deutschland",
            url: {
                text: "wdsl-mr.de",
                goto: "http://www.wdsl-mr.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-schwaebisch-gmuend-dsl-de",
        "name": "Stadtwerke Schwäbisch Gmünd",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.stwgd.de/5095.php",
        "availabilityUrl": "https://www.stwgd.de/5095.php",
        "plans": [
            {
                "slug": "com-16000",
                "name": "Com 16.000",
                "speed": 16000
            },
            {
                "slug": "com-22000",
                "name": "Com 22.000",
                "speed": 22000
            },

            {
                "slug": "fiber-50",
                "name": "Fiber 50",
                "speed": 50000
            },
            {
                "slug": "fiber-100",
                "name": "Fiber 100",
                "speed": 100000
            },
            {
                "slug": "fiber-150",
                "name": "Fiber 150",
                "speed": 150000
            },
            {
                "slug": "fiber-independent",
                "name": "Fiber Independent",
                "speed": 100000
            }
        ],
        "business": {
            name: "Stadtwerke Schwäbisch Gmünd GmbH",
            logo: "stw-gmuend.png",
            location: "Schwäbisch Gmünd, Deutschland",
            url: {
                text: "stwgd.de",
                goto: "https://www.stwgd.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-schwedt-dsl-de",
        "name": "Stadtwerke Schwedt",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.stadtwerke-schwedt.de/sdt-telecom/telefon-und-internet/",
        "availabilityUrl": "http://www.stadtwerke-schwedt.de/sdt-telecom/telefon-und-internet/",
        "plans": [
            {
                "slug": "speed-flat-6000",
                "name": "SDT Speed Flat 6.000",
                "speed": 6000
            },
            {
                "slug": "speed-flat-20000",
                "name": "SDT Speed Flat 20.000",
                "speed": 20000
            },
            {
                "slug": "speed-flat-64000",
                "name": "SDT Speed Flat 64.000",
                "speed": 64000
            },
            {
                "slug": "speed-flat-100000",
                "name": "SDT Speed Flat 100.000",
                "speed": 100000
            },

            {
                "slug": "life-6000",
                "name": "SDT Life 6.000",
                "speed": 6000
            },
            {
                "slug": "life-20000",
                "name": "SDT Life 20.000",
                "speed": 20000
            },
            {
                "slug": "life-64000",
                "name": "SDT Life 64.000",
                "speed": 64000
            },
            {
                "slug": "life-100000",
                "name": "SDT Life 100.000",
                "speed": 100000
            }
        ],
        "business": {
            name: "Stadtwerke Schwedt GmbH",
            logo: "stw-schwedt.png",
            location: "Schwedt, Deutschland",
            url: {
                text: "stadtwerke-schwedt.de",
                goto: "http://www.stadtwerke-schwedt.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-trostberg-dsl-de",
        "name": "Stadtwerke Trostberg",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.stadtwerke-trostberg.de/bnx65gqciv3zswtrostberg-cms_extract.l26259.html?BUTTON_REC_ID=26259",
        "availabilityUrl": "http://www.stadtwerke-trostberg.de/bnx65gqciv3zswtrostberg-cms_extract.l26259.html?BUTTON_REC_ID=26259",
        "plans": [
            {
                "slug": "internet-flat-1000",
                "name": "Internet-Flat 1.000",
                "speed": 1000
            },
            {
                "slug": "internet-flat-2000",
                "name": "Internet-Flat 2.000",
                "speed": 2000
            },
            {
                "slug": "internet-flat-16000",
                "name": "Internet-Flat 16.000",
                "speed": 16000
            },
            {
                "slug": "internet-flat-32000",
                "name": "Internet-Flat 32.000",
                "speed": 32000
            }

        ],
        "business": {
            name: "Stadtwerke Trostberg GmbH & Co KG",
            logo: "stw-trostberg.png",
            location: "Trostberg, Deutschland",
            url: {
                text: "stadtwerke-trostberg.de",
                goto: "http://www.stadtwerke-trostberg.de/"
            }
        }
    },



    {
        "slug": "stardsl-dsl-de",
        "name": "StarDSL",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.stardsl.net/tarife/privat-tarife/",
        "plans": [
            {
                "slug": "tooway-2gb",
                "name": "Tooway 2GB",
                "speed": 5000,
                "dataVolume": 2000
            },
            {
                "slug": "tooway-10gb",
                "name": "Tooway 10GB",
                "speed": 22000,
                "dataVolume": 10000
            },
            {
                "slug": "tooway-25gb",
                "name": "Tooway 25GB",
                "speed": 22000,
                "dataVolume": 25000
            },
            {
                "slug": "tooway-40gb",
                "name": "Tooway 40GB",
                "speed": 22000,
                "dataVolume": 40000
            },
            {
                "slug": "tooway-extra",
                "name": "Tooway Extra",
                "speed": 22000,
                "dataVolume": 100000
            },
            {
                "slug": "tooway-absolute",
                "name": "Tooway Absolute",
                "speed": 20000
            }
        ],
        "business": {
            name: "StarDSL GmbH",
            logo: "stardsl.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "stardsl.net",
                goto: "https://www.stardsl.net/"
            }
        }
    },



    {
        "slug": "yato-tripleplay-dsl-de",
        "name": "yato tripleplay",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.yato.de/bestell/",
        "plans": [
            {
                "slug": "dsl-256-prepaid",
                "name": "DSL 256 prepaid",
                "speed": 256
            },
            {
                "slug": "dsl-256",
                "name": "DSL 256",
                "speed": 256
            },
            {
                "slug": "dsl-512",
                "name": "DSL 512",
                "speed": 512
            },
            {
                "slug": "dsl-1024",
                "name": "DSL 1.024",
                "speed": 1024
            },
            {
                "slug": "dsl-2048",
                "name": "DSL 2.048",
                "speed": 2048
            }
        ],
        "business": {
            name: "StarDSL GmbH",
            logo: "yato.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "yato.de",
                goto: "http://www.yato.de/"
            }
        }
    },


    {
        "slug": "prepaiddsl-dsl-de",
        "name": "PrePaid DSL",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.pre-paid-dsl.de/tarifuebersicht.html",
        "plans": [
            {
                "slug": "adsl-2mbit",
                "name": "ADSL 2 Mbit",
                "speed": 2000
            },
            {
                "slug": "adsl-6mbit",
                "name": "ADSL 6 Mbit",
                "speed": 6000
            },
            {
                "slug": "adsl-16mbit",
                "name": "ADSL 16 Mbit",
                "speed": 16000
            }
        ],
        "business": {
            name: "StarDSL GmbH",
            logo: "prepaid-dsl.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "pre-paid-dsl.de",
                goto: "http://www.pre-paid-dsl.de/"
            }
        }
    },



    {
        "slug": "stadtwerke-bamberg-dsl-de",
        "name": "Stadtwerke Bamberg",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.stadtwerke-bamberg.de/internet",
        "availabilityUrl": "http://www.stadtwerke-bamberg.de/verfuegbarkeit",
        "plans": [
            {
                "slug": "internet-25-5",
                "name": "Internet 25/5",
                "speed": 25000
            },
            {
                "slug": "internet-50-10",
                "name": "Internet 50/10",
                "speed": 50000
            },
            {
                "slug": "internet-100-25",
                "name": "Internet 100/25",
                "speed": 100000
            },
            {
                "slug": "internet-200-25",
                "name": "Internet 200/25",
                "speed": 100000
            },

            {
                "slug": "telefon-internet-25-5",
                "name": "Telefon & Internet 25/5",
                "speed": 25000
            },
            {
                "slug": "telefon-internet-50-10",
                "name": "Telefon & Internet 50/10",
                "speed": 50000
            },
            {
                "slug": "telefon-internet-100-25",
                "name": "Telefon & Internet 100/25",
                "speed": 100000
            },
            {
                "slug": "telefon-internet-200-25",
                "name": "Telefon & Internet 200/25",
                "speed": 100000
            }
        ],
        "business": {
            name: "STWB Stadtwerke Bamberg GmbH",
            logo: "stw-bamberg.png",
            location: "Bamberg, Deutschland",
            employees: 635,
            salesVolume: "150 Mio. Euro (2012)",
            url: {
                text: "stadtwerke-bamberg.de",
                goto: "http://www.stadtwerke-bamberg.de/"
            }
        }
    },



    {
        "slug": "swb-dsl-de",
        "name": "swb",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.swb-gruppe.de/privatkunden/bremen/produkte/swb-festnetz-internet.php",
        "availabilityUrl": "https://www.swb-gruppe.de/privatkunden/bremen/produkte/breitbandausbau.php",
        "plans": [
            {
                "slug": "dsl-solo",
                "name": "DSL solo",
                "speed": 16000
            },
            {
                "slug": "dsl-16-komfort",
                "name": "DSL 16 komfort",
                "speed": 16000
            },
            {
                "slug": "dsl-16-premium",
                "name": "DSL 16 premium",
                "speed": 16000
            },
            {
                "slug": "dsl-50-komfort",
                "name": "DSL 50 komfort",
                "speed": 50000
            },
            {
                "slug": "dsl-50-premium",
                "name": "DSL 50 premium",
                "speed": 50000
            }
        ],
        "business": {
            name: "swb AG",
            logo: "swb.png",
            location: "Bremen, Deutschland",
            url: {
                text: "swb-gruppe.de",
                goto: "https://www.swb-gruppe.de/"
            }
        }
    },



    {
        "slug": "swu-dsl-de",
        "name": "Stadtwerke Ulm/Neu-Ulm",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html",
        "availabilityUrl": "http://www.swu.de/privatkunden/telekommunikation/verfuegbarkeit.html",
        "plans": [
            {
                "slug": "telenet-7",
                "name": "TeleNet Internet & Telefonie 7",
                "speed": 7000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html"
            },
            {
                "slug": "telenet-17",
                "name": "TeleNet Internet & Telefonie 17",
                "speed": 17000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html"
            },
            {
                "slug": "telenet-32",
                "name": "TeleNet Internet & Telefonie 32",
                "speed": 32000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html"
            },
            {
                "slug": "telenet-50",
                "name": "TeleNet Internet & Telefonie 50",
                "speed": 50000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html"
            },
            {
                "slug": "telenet-100",
                "name": "TeleNet Internet & Telefonie 100",
                "speed": 100000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-telefonie.html"
            },

            {
                "slug": "schwabennet-7",
                "name": "SchwabenNet Internet 7",
                "speed": 7000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/swu-schwabennet-internet.html"
            },
            {
                "slug": "schwabennet-17",
                "name": "SchwabenNet Internet 17",
                "speed": 17000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/swu-schwabennet-internet.html"
            },
            {
                "slug": "schwabennet-32",
                "name": "SchwabenNet Internet 32",
                "speed": 32000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/swu-schwabennet-internet.html"
            }

        ],
        "business": {
            name: "SWU Stadtwerke Ulm/Neu-Ulm GmbH ",
            logo: "stw-ulm.png",
            location: "Ulm, Deutschland",
            url: {
                text: "swu.de",
                goto: "http://www.swu.de/"
            }
        }
    },



    {
        "slug": "swu-hotspot-de",
        "name": "Stadtwerke Ulm/Neu-Ulm (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-ueber-funk.html",
        "availabilityUrl": "http://www.swu.de/privatkunden/telekommunikation/verfuegbarkeit.html",
        "plans": [
            {
                "slug": "telenet-funk-08",
                "name": "TeleNet Internet per Funk 0.8",
                "speed": 800,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-ueber-funk.html"
            },
            {
                "slug": "telenet-funk-17",
                "name": "TeleNet Internet per Funk 1.7",
                "speed": 1700,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-ueber-funk.html"
            },
            {
                "slug": "telenet-funk-35",
                "name": "TeleNet Internet per Funk 3.5",
                "speed": 3500,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-ueber-funk.html"
            },
            {
                "slug": "telenet-funk-6",
                "name": "TeleNet Internet per Funk 6",
                "speed": 6000,
                "affiliateUrl": "http://www.swu.de/privatkunden/telekommunikation/internet-ueber-funk.html"
            }

        ],
        "business": {
            name: "SWU Stadtwerke Ulm/Neu-Ulm GmbH ",
            logo: "stw-ulm.png",
            location: "Ulm, Deutschland",
            url: {
                text: "swu.de",
                goto: "http://www.swu.de/"
            }
        }
    },


    {
        "slug": "symbox-dsl-de",
        "name": "Symbox",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.symbox.de/Produkte",
        "availabilityUrl": "https://www.symbox.de/Produkte",
        "plans": [
            {
                "slug": "dsl-25000-dslonly",
                "name": "DSL 25.000 (DSL only)",
                "speed": 25000
            },
            {
                "slug": "dsl-50000-dslonly",
                "name": "DSL 50.000 (DSL only)",
                "speed": 50000
            },
            {
                "slug": "dsl-10000-tel",
                "name": "DSL 10.000 + Tel",
                "speed": 10000
            },
            {
                "slug": "dsl-25000-tel",
                "name": "DSL 25.000 + Tel",
                "speed": 25000
            },
            {
                "slug": "dsl-50000-tel",
                "name": "DSL 50.000 + Tel",
                "speed": 50000
            },
            {
                "slug": "dsl-100000-tel",
                "name": "DSL 100.000 + Tel",
                "speed": 100000
            },

            {
                "slug": "dsl-10000-tel-tv",
                "name": "DSL 10.000 + Tel + TV",
                "speed": 10000
            },
            {
                "slug": "dsl-25000-tel-tv",
                "name": "DSL 25.000 + Tel + TV",
                "speed": 25000
            },
            {
                "slug": "dsl-50000-tel-tv",
                "name": "DSL 50.000 + Tel + TV",
                "speed": 50000
            },
            {
                "slug": "dsl-100000-tel-tv",
                "name": "DSL 100.000 + Tel + TV",
                "speed": 100000
            }
        ],
        "business": {
            name: "symbox GmbH",
            logo: "symbox.png",
            location: "Saarlouis, Deutschland",
            url: {
                text: "symbox.de",
                goto: "https://www.symbox.de/"
            }
        }
    },



    {
        "slug": "talde-dsl-de",
        "name": "tal.de",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-bundesweit.html",
        "availabilityUrl": "http://www2.tal.de/products/dsl-anschluesse.html",
        "plans": [
            {
                "slug": "taldsl-16e",
                "name": "TALDSL 16E",
                "speed": 16000,
                "dataVolume": 10000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-bundesweit.html"
            },
            {
                "slug": "taldsl-16s",
                "name": "TALDSL 16S",
                "speed": 16000,
                "dataVolume": 10000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-bundesweit.html"
            },
            {
                "slug": "taldsl-50s",
                "name": "TALDSL 50S",
                "speed": 50000,
                "dataVolume": 20000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-bundesweit.html"
            },
            {
                "slug": "taldsl-100s",
                "name": "TALDSL 100S",
                "speed": 100000,
                "dataVolume": 40000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-bundesweit.html"
            },

            {
                "slug": "taldsl-16a",
                "name": "TALDSL 16A",
                "speed": 16000,
                "dataVolume": 20000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-fuer-alfter.html"
            },
            {
                "slug": "taldsl-50a",
                "name": "TALDSL 50A",
                "speed": 50000,
                "dataVolume": 50000,
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/taldsl-fuer-alfter.html"
            },

            {
                "slug": "dsl-basic",
                "name": "DSL-Basic",
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/adsl-zugang.html"
            },
            {
                "slug": "dsl-premium",
                "name": "DSL-Premium",
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/adsl-zugang.html"
            },
            {
                "slug": "dsl-private-flat",
                "name": "DSL-Private-Flat",
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/adsl-zugang.html"
            },
            {
                "slug": "dsl-business-flat",
                "name": "DSL-Business-Flat",
                "affiliateUrl": "http://www2.tal.de/products/dsl-anschluesse/adsl-zugang.html"
            }
        ],
        "business": {
            name: "Klaus Internet Service GmbH",
            logo: "talde.png",
            location: "Wuppertal, Deutschland",
            url: {
                text: "tal.de",
                goto: "http://www2.tal.de/"
            }
        }
    },


    {
        "slug": "tchibo-mobile-de",
        "name": "Tchibo Mobil",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.tchibo.de/smartphone-tarif-fuer-monatlich-9-95-ohne-bindung-p400034798.html",
        "plans": [
            {
                "slug": "smartphone-tarif",
                "name": "Smartphone-Tarif",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "Tchibo Mobilfunk GmbH & Co. KG",
            logo: "tchibo-mobil.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "tchibo.de",
                goto: "https://www.tchibo.de/"
            }
        }
    },


    {
        "slug": "tele2-dsl-de",
        "name": "Tele2",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.tele2.de/Privatkunden/Internet/Internet-via-DSL.aspx",
        "availabilityUrl": "https://www.tele2.de/Privatkunden/Internet/Internet-via-DSL.aspx",
        "plans": [
            {
                "slug": "surf",
                "name": "Surf",
                "speed": 16000
            },
            {
                "slug": "komplett",
                "name": "Komplett",
                "speed": 16000
            }
        ],
        "business": {
            name: "Tele2 GmbH",
            logo: "tele2.png",
            location: "Düsseldorf, Deutschland",
            salesVolume: "3,3 Mrd. Euro (2013)",
            founded: 1993,
            url: {
                text: "tele2.de",
                goto: "https://www.tele2.de/"
            }
        }
    },


    {
        "slug": "tele2-hotspot-de",
        "name": "Tele2 (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.tele2.de/Privatkunden/Internet/Internet-via-Funk.aspx",
        "availabilityUrl": "https://www.tele2.de/Privatkunden/Internet/Internet-via-Funk.aspx",
        "plans": [
            {
                "slug": "komfort",
                "name": "Komfort",
                "speed": 7200,
                "dataVolume": 1000
            },
            {
                "slug": "premium",
                "name": "Premium",
                "speed": 7200,
                "dataVolume": 10000
            },
            {
                "slug": "premium-xl",
                "name": "Premium XL",
                "speed": 7200,
                "dataVolume": 10000
            }
        ],
        "business": {
            name: "Tele2 GmbH",
            logo: "tele2.png",
            location: "Düsseldorf, Deutschland",
            salesVolume: "3,3 Mrd. Euro (2013)",
            founded: 1993,
            url: {
                text: "tele2.de",
                goto: "https://www.tele2.de/"
            }
        }
    },


    {
        "slug": "tele2-mobile-de",
        "name": "Tele2 (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://shop.tele2.de/Tarife?__utma=236287748.2031913460.1423500627.1423500627.1423500627.1&__utmb=236287748.11.10.1423500627&__utmc=236287748&__utmx=-&__utmz=236287748.1423500627.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=17277306",
        "plans": [
            {
                "slug": "allnet-flat-smart",
                "name": "Allnet Flat Smart",
                "speed": 42200,
                "dataVolume": 500
            },
            {
                "slug": "allnet-flat-comfort",
                "name": "Allnet Flat Comfort",
                "speed": 42200,
                "dataVolume": 500
            },
            {
                "slug": "allnet-flat-premium",
                "name": "Allnet Flat Premium",
                "speed": 42200,
                "dataVolume": 1000
            }
        ],
        "business": {
            name: "Tele2 GmbH",
            logo: "tele2.png",
            location: "Düsseldorf, Deutschland",
            salesVolume: "3,3 Mrd. Euro (2013)",
            founded: 1993,
            url: {
                text: "tele2.de",
                goto: "https://www.tele2.de/"
            }
        }
    },



    {
        "slug": "telecolumbus-dsl-de",
        "name": "telecolumbus",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "plans": [
            {
                "slug": "einsteiger",
                "name": "Einsteiger",
                "speed": 16000,
                "affiliateUrl": "http://www.telecolumbus.de/internet/",
                "availabilityUrl": "http://www.telecolumbus.de/internet/"
            },
            {
                "slug": "preisbewusste",
                "name": "Preisbewusste",
                "speed": 50000,
                "affiliateUrl": "http://www.telecolumbus.de/internet/",
                "availabilityUrl": "http://www.telecolumbus.de/internet/"
            },
            {
                "slug": "vielsurfer",
                "name": "Vielsurfer",
                "speed": 100000,
                "affiliateUrl": "http://www.telecolumbus.de/internet/",
                "availabilityUrl": "http://www.telecolumbus.de/internet/"
            },
            {
                "slug": "highspeedsurfer",
                "name": "Highspeed-Surfer",
                "speed": 150000,
                "affiliateUrl": "http://www.telecolumbus.de/internet/",
                "availabilityUrl": "http://www.telecolumbus.de/internet/"
            },

            {
                "slug": "2er-einsteiger",
                "name": "2er Einsteiger",
                "speed": 16000,
                "affiliateUrl": "http://www.telecolumbus.de/2er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/2er-kombis/"
            },
            {
                "slug": "2er-preisbewusste",
                "name": "2er Preisbewusste",
                "speed": 50000,
                "affiliateUrl": "http://www.telecolumbus.de/2er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/2er-kombis/"
            },
            {
                "slug": "2er-vielsurfer",
                "name": "2er Vielsurfer",
                "speed": 100000,
                "affiliateUrl": "http://www.telecolumbus.de/2er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/2er-kombis/"
            },
            {
                "slug": "2er-highspeedsurfer",
                "name": "2er Highspeed-Surfer",
                "speed": 150000,
                "affiliateUrl": "http://www.telecolumbus.de/2er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/2er-kombis/"
            },

            {
                "slug": "3er-kombi-50hd",
                "name": "3er Kombi 50 HD",
                "speed": 50000,
                "affiliateUrl": "http://www.telecolumbus.de/3er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/3er-kombis/"
            },
            {
                "slug": "3er-kombi-50-extra-hd",
                "name": "3er Kombi 50 Extra HD",
                "speed": 50000,
                "affiliateUrl": "http://www.telecolumbus.de/3er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/3er-kombis/"
            },
            {
                "slug": "3er-kombi-50-sky",
                "name": "3er Kombi 50 Sky",
                "speed": 50000,
                "affiliateUrl": "http://www.telecolumbus.de/3er-kombis/",
                "availabilityUrl": "http://www.telecolumbus.de/3er-kombis/"
            }
        ],
        "business": {
            name: "Tele Columbus AG",
            logo: "telecolumbus.png",
            location: "Berlin, Deutschland",
            url: {
                text: "telecolumbus.de",
                goto: "http://www.telecolumbus.de/"
            }
        }
    },


    {
        "slug": "teledata-dsl-de",
        "name": "TeleData",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.teledata.de/produkte/adsl/",
        "availabilityUrl": "https://www.teledata.de/privatkunden/verfuegbarkeit/verfuegbarkeitscheck/",
        "plans": [
            {
                "slug": "dsl",
                "name": "DSL",
                "speed": 2048,
                "affiliateUrl": "https://www.teledata.de/produkte/adsl/"
            },
            {
                "slug": "dsl-max",
                "name": "DSL Max",
                "affiliateUrl": "https://www.teledata.de/produkte/adsl/"
            },

            {
                "slug": "vdsl-25",
                "name": "VDSL 25",
                "speed": 25000,
                "affiliateUrl": "https://www.teledata.de/produkte/vdsl/"
            },
            {
                "slug": "vdsl-50",
                "name": "VDSL 50",
                "speed": 50000,
                "affiliateUrl": "https://www.teledata.de/produkte/vdsl/"
            },

            {
                "slug": "cable-25",
                "name": "Cable 25",
                "speed": 25000,
                "affiliateUrl": "https://www.teledata.de/produkte/cable/"
            },
            {
                "slug": "cable-50",
                "name": "Cable 50",
                "speed": 50000,
                "affiliateUrl": "https://www.teledata.de/produkte/cable/"
            },

            {
                "slug": "fiber-25",
                "name": "Fiber 25",
                "speed": 25000,
                "affiliateUrl": "https://www.teledata.de/produkte/fiber/"
            },
            {
                "slug": "fiber-50",
                "name": "Fiber 50",
                "speed": 50000,
                "affiliateUrl": "https://www.teledata.de/produkte/fiber/"
            },
            {
                "slug": "fiber-100",
                "name": "Fiber 100",
                "speed": 100000,
                "affiliateUrl": "https://www.teledata.de/produkte/fiber/"
            }
        ],
        "business": {
            name: "TeleData GmbH",
            logo: "teledata.png",
            location: "Friedrichshafen , Deutschland",
            employees: 24,
            founded: 1997,
            url: {
                text: "teledata.de",
                goto: "https://www.teledata.de/"
            }
        }
    },


    {
        "slug": "telekom-dsl-de",
        "name": "Telekom",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
        "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
        "plans": [

            // Privatkunden
            {
                "slug": "magenta-zuhause-s",
                "name": "MagentaZuhause S",
                "speed": 16000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "magenta-zuhause-m",
                "name": "MagentaZuhause M",
                "speed": 50000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "magenta-zuhause-l",
                "name": "MagentaZuhause L",
                "speed": 100000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "magenta-eins-s",
                "name": "MagentaEINS S",
                "speed": 16000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "magenta-eins-m",
                "name": "MagentaEINS M",
                "speed": 50000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "magenta-eins-l",
                "name": "MagentaEINS L",
                "speed": 100000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },

            // Geschäftskunden
            {
                "slug": "deutschlandlan-connect-s",
                "name": "DeutschlandLAN Connect S",
                "speed": 16000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/112308/deutschlandlan-connect.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/112308/deutschlandlan-connect.html"
            },
            {
                "slug": "deutschlandlan-connect-m",
                "name": "DeutschlandLAN Connect M",
                "speed": 50000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/112308/deutschlandlan-connect.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/112308/deutschlandlan-connect.html"
            },

            {
                "slug": "business-basic-complete",
                "name": "BusinessBasic Complete",
                "speed": 6000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html"
            },
            {
                "slug": "business-basic-complete-premium",
                "name": "BusinessBasic Complete Premium",
                "speed": 16000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html"
            },
            {
                "slug": "business-basic-complete-premium-vdsl",
                "name": "BusinessBasic Complete Premium VDSL",
                "speed": 50000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/116246/businessbasic-complete-telekom.html"
            }

        ],
        "business": {
            name: "Deutsche Telekom AG",
            logo: "telekom.png",
            location: "Bonn, Deutschland",
            employees: 230000,
            salesVolume: "60 Mrd. Euro (2013)",
            founded: 1995,
            url: {
                text: "telekom.de",
                goto: "http://www.telekom.de/"
            }
        }
    },


    {
        "slug": "telekom-hotspot-de",
        "name": "Telekom (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
        "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
        "availability": "national",
        "plans": [

            // Privatkunden

            {
                "slug": "call-and-surf-funk-s",
                "name": "Call & Surf via Funk S",
                "speed": 16000,
                "dataVolume": 10000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "call-and-surf-funk-m",
                "name": "Call & Surf via Funk M",
                "speed": 50000,
                "dataVolume": 15000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },
            {
                "slug": "call-and-surf-funk-l",
                "name": "Call & Surf via Funk L",
                "speed": 100000,
                "dataVolume": 30000,
                "affiliateUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen",
                "availabilityUrl": "http://www.telekom.de/privatkunden/zuhause/internet-und-fernsehen"
            },

            // Geschäftskunden

            {
                "slug": "call-surf-comfort-funk-s",
                "name": "Call & Surf Comfort via Funk S",
                "speed": 16000,
                "dataVolume": 10000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html"
            },
            {
                "slug": "call-surf-comfort-funk-m",
                "name": "Call & Surf Comfort via Funk M",
                "speed": 50000,
                "dataVolume": 15000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html"
            },
            {
                "slug": "call-surf-comfort-funk-l",
                "name": "Call & Surf Comfort via Funk L",
                "speed": 100000,
                "dataVolume": 30000,
                "affiliateUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html",
                "availabilityUrl": "https://geschaeftskunden.telekom.de/startseite/festnetz/internet/internet-telefonie/113428/internet-telefon-via-funk.html"
            }
        ],
        "business": {
            name: "Deutsche Telekom AG",
            logo: "telekom.png",
            location: "Bonn, Deutschland",
            employees: 230000,
            salesVolume: "60 Mrd. Euro (2013)",
            founded: 1995,
            url: {
                text: "telekom.de",
                goto: "http://www.telekom.de/"
            }
        }
    },



    {
        "slug": "telekom-mobile-de",
        "name": "Telekom (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.t-mobile.de/telefonieren-und-surfen/0,21919,25250-_,00.html",
        "plans": [
            // Privatkunden

            {
                "slug": "magenta-mobil-s",
                "name": "MagentaMobil S",
                "speed": 16000,
                "dataVolume": 500,
                "affiliateUrl": "https://www.t-mobile.de/telefonieren-und-surfen/0,21919,25250-_,00.html"
            },
            {
                "slug": "magenta-mobil-m",
                "name": "MagentaMobil M",
                "speed": 50000,
                "dataVolume": 1500,
                "affiliateUrl": "https://www.t-mobile.de/telefonieren-und-surfen/0,21919,25250-_,00.html"
            },
            {
                "slug": "magenta-mobil-l",
                "name": "MagentaMobil L",
                "speed": 100000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.t-mobile.de/telefonieren-und-surfen/0,21919,25250-_,00.html"
            },
            {
                "slug": "magenta-mobil-l-plus",
                "name": "MagentaMobil L Plus",
                "speed": 300000,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.t-mobile.de/telefonieren-und-surfen/0,21919,25250-_,00.html"
            },

            {
                "slug": "magenta-mobil-l-premium",
                "name": "MagentaMobil L Premium",
                "speed": 100000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.t-mobile.de/premium-tarife/0,26755,28775-_,00.html"
            },
            {
                "slug": "magenta-mobil-l-plus-premium",
                "name": "MagentaMobil L Plus Premium",
                "speed": 300000,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.t-mobile.de/premium-tarife/0,26755,28775-_,00.html"
            },
            {
                "slug": "complete-premium",
                "name": "Complete Premium ",
                "speed": 300000,
                "dataVolume": 20000,
                "affiliateUrl": "https://www.t-mobile.de/premium-tarife/0,26755,28775-_,00.html"
            },

            {
                "slug": "data-comfort-s-eco",
                "name": "Data Comfort S Eco",
                "speed": 16000,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.t-mobile.de/datentarife/0,17526,18519-_,00.html"
            },
            {
                "slug": "data-comfort-m-eco",
                "name": "Data Comfort M Eco",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.t-mobile.de/datentarife/0,17526,18519-_,00.html"
            },
            {
                "slug": "data-comfort-l-eco",
                "name": "Data Comfort L Eco",
                "speed": 30000,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.t-mobile.de/datentarife/0,17526,18519-_,00.html"
            },
            {
                "slug": "xtra-triple",
                "name": "Xtra Triple",
                "speed": 8000,
                "dataVolume": 250,
                "affiliateUrl": "https://www.t-mobile.de/xtra-telefonieren-und-surfen/0,27492,29071-_,00.html?WT.svl=100"
            },
            {
                "slug": "xtra-call",
                "name": "Xtra Call",
                "speed": 8000,
                "affiliateUrl": "https://www.t-mobile.de/xtra-telefonieren-und-surfen/0,27492,29071-_,00.html?WT.svl=100"
            },
            {
                "slug": "xtra-card",
                "name": "Xtra Card",
                "speed": 8000,
                "affiliateUrl": "https://www.t-mobile.de/xtra-telefonieren-und-surfen/0,27492,29071-_,00.html?WT.svl=100"
            },
            {
                "slug": "xtra-data-flat-s",
                "name": "Xtra Data Flat S",
                "speed": 8000,
                "affiliateUrl": "https://www.t-mobile.de/xtra-datentarife/0,27493,29072-_,00.html?WT.svl=100"
            },
            {
                "slug": "xtra-data-flat-m",
                "name": "Xtra Data Flat M",
                "speed": 8000,
                "affiliateUrl": "https://www.t-mobile.de/xtra-datentarife/0,27493,29072-_,00.html?WT.svl=100"
            },
            {
                "slug": "xtra-data-flat-l",
                "name": "Xtra Data Flat L",
                "speed": 8000,
                "affiliateUrl": "https://www.t-mobile.de/xtra-datentarife/0,27493,29072-_,00.html?WT.svl=100"
            },

            // Geschäftskunden

            {
                "slug": "magenta-mobil-business-xs",
                "name": "MagentaMobil Business XS",
                "speed": 16000,
                "dataVolume": 200,
                "affiliateUrl": "https://www.t-mobile.de/business/telefonieren-und-surfen/0,22119,25453-_,00.html"
            },
            {
                "slug": "magenta-mobil-business-s",
                "name": "MagentaMobil Business S",
                "speed": 16000,
                "dataVolume": 500,
                "affiliateUrl": "https://www.t-mobile.de/business/telefonieren-und-surfen/0,22119,25453-_,00.html"
            },
            {
                "slug": "magenta-mobil-business-m",
                "name": "MagentaMobil Business M",
                "speed": 50000,
                "dataVolume": 1500,
                "affiliateUrl": "https://www.t-mobile.de/business/telefonieren-und-surfen/0,22119,25453-_,00.html"
            },
            {
                "slug": "magenta-mobil-business-l",
                "name": "MagentaMobil Business L",
                "speed": 100000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.t-mobile.de/business/telefonieren-und-surfen/0,22119,25453-_,00.html"
            },
            {
                "slug": "magenta-mobil-business-l-plus",
                "name": "MagentaMobil Business L Plus",
                "speed": 300000,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.t-mobile.de/business/telefonieren-und-surfen/0,22119,25453-_,00.html"
            },

            {
                "slug": "data-comfort-business-s-basic",
                "name": "Data Comfort Business S Basic",
                "speed": 16000,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.t-mobile.de/business/datentarife/0,22199,14421-_,00.html?WT.svl=100"
            },
            {
                "slug": "data-comfort-business-m-basic",
                "name": "Data Comfort Business M Basic",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.t-mobile.de/business/datentarife/0,22199,14421-_,00.html?WT.svl=100"
            },
            {
                "slug": "data-comfort-business-l-basic",
                "name": "Data Comfort Business L Basic",
                "speed": 300000,
                "dataVolume": 5000,
                "affiliateUrl": "https://www.t-mobile.de/business/datentarife/0,22199,14421-_,00.html?WT.svl=100"
            }
        ],
        "business": {
            name: "Deutsche Telekom AG",
            logo: "telekom.png",
            location: "Bonn, Deutschland",
            employees: 230000,
            salesVolume: "60 Mrd. Euro (2013)",
            founded: 1995,
            url: {
                text: "telekom.de",
                goto: "http://www.telekom.de/"
            }
        }
    },


    {
        "slug": "telenec-dsl-de",
        "name": "Telenec",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "availabilityUrl": "http://www.telenec.de/ueber-uns/versorgungsgebiet.html",
        "affiliateUrl": "http://www.telenec.de/internet-telefonie/internet/",
        "plans": [
            {
                "slug": "tn-sprint-1",
                "name": "TN-Sprint 1",
                "speed": 18000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/internet/"
            },
            {
                "slug": "tn-flat",
                "name": "TN-Flat",
                "speed": 25000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/internet/"
            },
            {
                "slug": "tn-flat-plus",
                "name": "TN-Flat Plus",
                "speed": 50000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/internet/"
            },
            {
                "slug": "tn-future",
                "name": "TN-Future",
                "speed": 100000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/highspeed/"
            },
            {
                "slug": "tn-fon",
                "name": "TN-Fon",
                "speed": 18000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/telefonie/"
            },
            {
                "slug": "tn-premium",
                "name": "TN-Premium",
                "speed": 25000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/telefonie/"
            },
            {
                "slug": "tn-premium-plus",
                "name": "TN-Premium Plus",
                "speed": 50000,
                "affiliateUrl": "http://www.telenec.de/internet-telefonie/telefonie/"
            }
        ],
        "business": {
            name: "Telenec Neustadt GmbH",
            logo: "telenec.png",
            location: "Neustadt bei Coburg, Deutschland",
            employees: 0,
            url: {
                text: "telenec.de",
                goto: "http://www.telenec.de/"
            }
        }
    },



    {
        "slug": "teleson-dsl-de",
        "name": "TeleSon",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.teleson.de/teleson/produkte/index_total.php?navanchor=5010000",
        "availabilityUrl": "http://www.teleson.de/teleson/produkte/verfuegbarkeit.php?navanchor=5010000",
        "plans": [
            {
                "slug": "total",
                "name": "Total",
                "speed": 16000
            },
            {
                "slug": "total-plus",
                "name": "TotalPlus",
                "speed": 16000
            }
        ],
        "business": {
            name: "TeleSon Vertriebs GmbH",
            logo: "teleson.png",
            location: "München, Deutschland",
            founded: 2000,
            url: {
                text: "teleson.de",
                goto: "http://www.teleson.de/"
            }
        }
    },



    {
        "slug": "televersa-dsl-de",
        "name": "televersa",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.televersa.com/index.php?id=136",
        "availabilityUrl": "http://www.televersa.com/service-support.html",
        "plans": [
            {
                "slug": "dsl-6000",
                "name": "DSL via Festnetz 6.000",
                "speed": 6000
            },
            {
                "slug": "dsl-16000",
                "name": "DSL via Festnetz 16.000",
                "speed": 16000
            },
            {
                "slug": "dsl-25000",
                "name": "DSL via Festnetz 25.000",
                "speed": 25000
            },
            {
                "slug": "dsl-50000",
                "name": "DSL via Festnetz 50.000",
                "speed": 50000
            }
        ],
        "business": {
            name: "Televersa Online GmbH",
            logo: "televersa.png",
            location: "Mettenheim, Deutschland",
            founded: 2004,
            url: {
                text: "televersa.com",
                goto: "http://www.televersa.com/"
            }
        }
    },


    {
        "slug": "televersa-hotspot-de",
        "name": "televersa (Funk)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.televersa.com/index.php?id=136",
        "availabilityUrl": "http://www.televersa.com/service-support.html",
        "plans": [
            {
                "slug": "dsl-funk-6000",
                "name": "DSL via Funk 6.000",
                "speed": 6000
            },
            {
                "slug": "dsl-funk-16000",
                "name": "DSL via Funk 16.000",
                "speed": 16000
            },
            {
                "slug": "sdsl-funk-10000",
                "name": "SDSL via Funk 10.000",
                "speed": 10000
            },
            {
                "slug": "sdsl-funk-25000",
                "name": "SDSL via Funk 25.000",
                "speed": 25000
            },
            {
                "slug": "sdsl-funk-50000",
                "name": "SDSL via Funk 50.000",
                "speed": 50000
            },
            {
                "slug": "sdsl-funk-100000",
                "name": "SDSL via Funk 100.000",
                "speed": 100000
            }
        ],
        "business": {
            name: "Televersa Online GmbH",
            logo: "televersa.png",
            location: "Mettenheim, Deutschland",
            founded: 2004,
            url: {
                text: "televersa.com",
                goto: "http://www.televersa.com/"
            }
        }
    },


    {
        "slug": "telta-dsl-de",
        "name": "TELTA Citynetz",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www2.telta.de/content/internet-flatrates",
        "availabilityUrl": "https://www2.telta.de/node/173",
        "plans": [
            {
                "slug": "online-flat-6000",
                "name": "Online Flat 6.000",
                "speed": 6000,
                "affiliateUrl": "https://www2.telta.de/content/internet-flatrates"
            },
            {
                "slug": "online-flat-16000",
                "name": "Online Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "https://www2.telta.de/content/internet-flatrates"
            },
            {
                "slug": "online-flat-40000",
                "name": "Online Flat 40.000",
                "speed": 40000,
                "affiliateUrl": "https://www2.telta.de/content/internet-flatrates"
            },
            {
                "slug": "online-flat-120000",
                "name": "Online Flat 120.000",
                "speed": 120000,
                "affiliateUrl": "https://www2.telta.de/content/internet-flatrates"
            },

            {
                "slug": "komplettpaket-6000",
                "name": "Komplett-Paket 6.000",
                "speed": 6000,
                "affiliateUrl": "https://www2.telta.de/content/komplettpakete"
            },
            {
                "slug": "komplettpaket-16000",
                "name": "Komplett-Paket 16.000",
                "speed": 16000,
                "affiliateUrl": "https://www2.telta.de/content/komplettpakete"
            },
            {
                "slug": "komplettpaket-40000",
                "name": "Komplett-Paket 40.000",
                "speed": 40000,
                "affiliateUrl": "https://www2.telta.de/content/komplettpakete"
            },
            {
                "slug": "komplettpaket-120000",
                "name": "Komplett-Paket 120.000",
                "speed": 120000,
                "affiliateUrl": "https://www2.telta.de/content/komplettpakete"
            },

            {
                "slug": "trio-digital-flat-6000",
                "name": "Trio Digital Flat 6.000",
                "speed": 6000,
                "affiliateUrl": "https://www2.telta.de/node/34/mid/862"
            },
            {
                "slug": "trio-digital-flat-16000",
                "name": "Trio Digital Flat 16.000",
                "speed": 16000,
                "affiliateUrl": "https://www2.telta.de/node/34/mid/862"
            },
            {
                "slug": "trio-digital-flat-40000",
                "name": "Trio Digital Flat 40.000",
                "speed": 40000,
                "affiliateUrl": "https://www2.telta.de/node/34/mid/862"
            },
            {
                "slug": "trio-digital-flat-120000",
                "name": "Trio Digital Flat 120.000",
                "speed": 120000,
                "affiliateUrl": "https://www2.telta.de/node/34/mid/862"
            }
        ],
        "business": {
            name: "TELTA Citynetz GmbH",
            logo: "teltacitynetz.png",
            location: "Eberswalde, Deutschland",
            founded: 1997,
            url: {
                text: "telta.de",
                goto: "https://www2.telta.de/content"
            }
        }
    },


    {
        "slug": "tlink-international-dsl-de",
        "name": "tlink international",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.tlink.de/m_products_dsl.php?page=products",
        "availabilityUrl": "http://www.tlink.de/m_products_dsl.php?page=dsl_availability",
        "plans": [
            {
                "slug": "flex-flat",
                "name": "Flex.Flat"
            },
            {
                "slug": "flex-volumes-3",
                "name": "Flex.Volumes 3",
                "dataVolume": 3000
            },
            {
                "slug": "flex-volumes-6",
                "name": "Flex.Volumes 6",
                "dataVolume": 6000
            },
            {
                "slug": "flex-volumes-9",
                "name": "Flex.Volumes 9",
                "dataVolume": 9000
            },
            {
                "slug": "flex-volumes-20",
                "name": "Flex.Volumes 20",
                "dataVolume": 20000
            }
        ],
        "business": {
            name: "tlink International GmbH",
            logo: "tlink.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "tlink.de",
                goto: "http://www.tlink.de/"
            }
        }
    },



    {
        "slug": "tmnet-dsl-de",
        "name": "T-M-Net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.t-m-net.de/wp/business-dsl/preisubersicht/",
        "availabilityUrl": "http://www.t-m-net.de/wp/business-dsl/verfugbarkeit/",
        "plans": [
            {
                "slug": "dsl-profi",
                "name": "DSL Profi",
                "speed": 6000
            },
            {
                "slug": "dsl-premium",
                "name": "DSL Premium",
                "speed": 16000
            },
            {
                "slug": "dsl-premium-plus",
                "name": "DSL Premium Plus",
                "speed": 25000
            }
        ],
        "business": {
            name: "Marco Bungalski GmbH",
            logo: "tmnet.png",
            location: "Verden, Deutschland",
            url: {
                text: "t-m-net.de",
                goto: "http://www.t-m-net.de/"
            }
        }
    },



    {
        "slug": "tng-dsl-de",
        "name": "TNG",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/",
        "plans": [
            {
                "slug": "breitbandstartpaket-felde",
                "name": "Breitband-Startpaket Felde",
                "speed": 2000,
                "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/felde",
                "availabilityUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/felde"
            },
            {
                "slug": "breitbandpaket-felde",
                "name": "Breitband-Paket Felde",
                "speed": 50000,
                "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/felde",
                "availabilityUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/felde"
            },

            {
                "slug": "breitbandpaket-suedermarsch",
                "name": "Breitband-Paket Südermarsch",
                "speed": 50000,
                "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/suedermarsch",
                "availabilityUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/suedermarsch"
            },

            {
                "slug": "breitbandpaket-nf",
                "name": "Breitband-Paket NF",
                "speed": 50000,
                "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/nf",
                "availabilityUrl": "https://www.tng.de/web/guest/pk/produkte/breitband/nf"
            }
        ],
        "business": {
            name: "TNG Stadtnetz GmbH",
            logo: "tng.png",
            logobg: "010626",
            location: "Kiel, Deutschland",
            employees: 100,
            salesVolume: "14 Mio. Euro (2012)",
            url: {
                text: "tng.de",
                goto: "https://www.tng.de/"
            }
        }
    },



    {
        "slug": "tng-hotspot-de",
        "name": "TNG (Hotspot)",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/hotspot",
        "availabilityUrl": "https://www.tng.de/web/guest/pk/produkte/hotspot",
        "plans": [
            {
                "slug": "hotspot",
                "name": "Hotspot"
            }
        ],
        "business": {
            name: "TNG Stadtnetz GmbH",
            logo: "tng.png",
            logobg: "010626",
            location: "Kiel, Deutschland",
            employees: 100,
            salesVolume: "14 Mio. Euro (2012)",
            url: {
                text: "tng.de",
                goto: "https://www.tng.de/"
            }
        }
    },


    {
        "slug": "tng-mobile-de",
        "name": "TNG (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.tng.de/web/guest/pk/produkte/mobilfunk",
        "plans": [
            {
                "slug": "wunschpaket",
                "name": "Wunschpaket Mobil",
                "speed": 7200
            },
            {
                "slug": "komplettpaket",
                "name": "Komplettpaket Mobil",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "tablet-notebook-paket-1gb",
                "name": "Tablet-/Notebookpaket 1GB",
                "speed": 7200,
                "dataVolume": 1000
            },
            {
                "slug": "tablet-notebook-paket-5gb",
                "name": "Tablet-/Notebookpaket 5GB",
                "speed": 7200,
                "dataVolume": 5000
            }
        ],
        "business": {
            name: "TNG Stadtnetz GmbH",
            logo: "tng.png",
            logobg: "010626",
            location: "Kiel, Deutschland",
            employees: 100,
            salesVolume: "14 Mio. Euro (2012)",
            url: {
                text: "tng.de",
                goto: "https://www.tng.de/"
            }
        }
    },


    {
        "slug": "tooway-dsl-de",
        "name": "tooway",
        "type": "dsl",
        "subtype": "satellite",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.tooway.de/tooway-pakete/alle-pakete/",
        "availabilityUrl": "http://www.tooway.de/tooway-pakete/alle-pakete/",
        "plans": [
            {
                "slug": "tooway-2",
                "name": "tooway 2",
                "speed": 22000,
                "dataVolume": 2000
            },
            {
                "slug": "tooway-10",
                "name": "tooway 10",
                "speed": 22000,
                "dataVolume": 10000
            },
            {
                "slug": "tooway-25",
                "name": "tooway 25",
                "speed": 22000,
                "dataVolume": 25000
            },
            {
                "slug": "tooway-extra",
                "name": "tooway Extra",
                "speed": 22000,
                "dataVolume": 100000
            }
        ],
        "business": {
            name: "Eutelsat Zentrale",
            logo: "tooway.png",
            location: "Paris, Frankreich",
            url: {
                text: "tooway.de",
                goto: "http://www.tooway.de"
            }
        }
    },



    {
        "slug": "stadtwerke-luebeck-dsl-de",
        "name": "Stadtwerke Lübeck",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "https://www.swhl.de/traveflat/",
        "availabilityUrl": "https://www.swhl.de/traveflat/",
        "plans": [
            {
                "slug": "traveflat",
                "name": "TraveFlat",
                "speed": 16000,
                "affiliateUrl": "https://www.swhl.de/traveflat/",
                "availabilityUrl": "https://www.swhl.de/traveflat/"
            },
            {
                "slug": "traveflat-plus",
                "name": "TraveFlat PLUS",
                "speed": 1000000,
                "affiliateUrl": "https://www.swhl.de/traveflat-plus/",
                "availabilityUrl": "https://www.swhl.de/traveflat-plus/"
            }
        ],
        "business": {
            name: "Stadtwerke Lübeck GmbH",
            logo: "stw-luebeck.png",
            location: "Lübeck, Deutschland",
            employees: 608,
            salesVolume: "322 Mio. Euro (2013)",
            url: {
                text: "swhl.de",
                goto: "https://www.swhl.de/"
            }
        }
    },



    {
        "slug": "unitymedia-dsl-de",
        "name": "Unitymedia",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "availabilityUrl": "http://www.unitymedia.de/privatkunden/beratung/verfuegbarkeit/",
        "affiliateUrl": "http://www.unitymedia.de/",
        "plans": [
            {
                "slug": "internet-10",
                "name": "Internet 10",
                "speed": 10000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/internet/basis-internetzugang/"
            },
            {
                "slug": "internet-50",
                "name": "Internet 50",
                "speed": 50000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/internet/basis-internetzugang/"
            },
            {
                "slug": "internet-100",
                "name": "Internet 100",
                "speed": 100000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/internet/basis-internetzugang/"
            },


            {
                "slug": "2play-smart",
                "name": "2play SMART",
                "speed": 10000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/2play-kombipakete/"
            },
            {
                "slug": "2play-plus-120",
                "name": "2play PLUS 120",
                "speed": 120000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/2play-kombipakete/"
            },
            {
                "slug": "2play-premium-200",
                "name": "2play PREMIUM 200",
                "speed": 200000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/2play-kombipakete/"
            },

            {
                "slug": "3play-smart-50",
                "name": "3play SMART 50",
                "speed": 50000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/3play-kombipakete/"
            },
            {
                "slug": "3play-plus-120",
                "name": "3play PLUS 120",
                "speed": 120000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/3play-kombipakete/"
            },
            {
                "slug": "3play-premium-200",
                "name": "3play PREMIUM 200",
                "speed": 200000,
                "affiliateUrl": "http://www.unitymedia.de/privatkunden/kombipakete/3play-kombipakete/"
            }
        ],
        "business": {
            name: "Unitymedia KabelBW GmbH",
            logo: "unitymedia.png",
            location: "Köln, Deutschland",
            employees: 2500,
            salesVolume: "1.3 Mrd EURO (2013)",
            founded: 2009,
            url: {
                text: "umkbw.de",
                goto: "http://www.umkbw.de/"
            }
        }
    },



    {
        "slug": "unitymedia-mobile-de",
        "name": "Unitymedia (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.unitymedia.de/privatkunden/mobil/basis-mobilvertrag/",
        "plans": [
            {
                "slug": "family-friends-surf",
                "name": "Family & Friends + Surf",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "allnet-surf",
                "name": "All Net + Surf",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "Unitymedia KabelBW GmbH",
            logo: "unitymedia.png",
            location: "Köln, Deutschland",
            employees: 2500,
            salesVolume: "1.3 Mrd EURO (2013)",
            founded: 2009,
            url: {
                text: "umkbw.de",
                goto: "http://www.umkbw.de/"
            }
        }
    },


    {
        "slug": "veganet-dsl-de",
        "name": "VEGA-net",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.vega-net.de",
        "availabilityUrl": "http://www.vega-net.de/no_cache/wichtiges-auf-einen-blick/verfuegbarkeitscheck.html",
        "plans": [
            {
                "slug": "mega-16",
                "name": "Mega-16",
                "speed": 16000
            },
            {
                "slug": "mega-25",
                "name": "Mega-25",
                "speed": 25000
            },
            {
                "slug": "mega-50",
                "name": "Mega-50",
                "speed": 50000
            }
        ],
        "business": {
            name: "VEGA-net GmbH",
            logo: "veganet.png",
            location: "Enkenbach-Alsenborn, Deutschland",
            url: {
                text: "vega-net.de",
                goto: "http://www.vega-net.de/"
            }
        }
    },


    {
        "slug": "vendonet-dsl-de",
        "name": "VendoNET",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.vendonet.de/index/Products.VendoDSL-dsl-feste-ip-adresse-dsl-statische-ip-adresse-flatrate.html",
        "availabilityUrl": "https://www.vendonet.de/index/Products.VendoDSL-dsl-feste-ip-adresse-dsl-statische-ip-adresse-flatrate.html",
        "plans": [
            {
                "slug": "vendodsl-1000-flat",
                "name": "VendoDSL 1.000 Flat",
                "speed": 1000
            },
            {
                "slug": "vendodsl-2000-flat",
                "name": "VendoDSL 2.000 Flat",
                "speed": 2000
            },
            {
                "slug": "vendodsl-6000-flat",
                "name": "VendoDSL 6.000 Flat",
                "speed": 6000
            },
            {
                "slug": "vendodsl-16000-flat",
                "name": "VendoDSL 16.000 Flat",
                "speed": 16000
            }
        ],
        "business": {
            name: "Computer & Netzwerk Services Martin Hahne",
            logo: "vendonet.png",
            location: "Gladbeck , Deutschland",
            url: {
                text: "vendonet.de",
                goto: "https://www.vendonet.de/"
            }
        }
    },


    {
        "slug": "vereinigte-stadtwerke-dsl-de",
        "name": "Vereinigte Stadtwerke",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.stadtwerke-media.de/produkte/privatkunden",
        "availabilityUrl": "http://www.stadtwerke-media.de/glasfaserausbau/ausbau/ausbaugebiete",
        "plans": [
            {
                "slug": "medianet-200",
                "name": "MEDIA.NET200",
                "speed": 200000,
                "affiliateUrl": "http://www.stadtwerke-media.de/produkte/privatkunden/medianet"
            },

            {
                "slug": "internet-telefon",
                "name": "Internet & Telefon",
                "speed": 200000,
                "affiliateUrl": "http://www.stadtwerke-media.de/produkte/privatkunden"
            },
            {
                "slug": "internet-tv",
                "name": "Internet & TV",
                "speed": 200000,
                "affiliateUrl": "http://www.stadtwerke-media.de/produkte/privatkunden"
            },
            {
                "slug": "komplett-paket",
                "name": "Komplett-Paket",
                "speed": 200000,
                "affiliateUrl": "http://www.stadtwerke-media.de/produkte/privatkunden"
            }

        ],
        "business": {
            name: "Vereinigte Stadtwerke Media GmbH",
            logo: "vereinigte-stadtwerke.png",
            location: "Mölln, Deutschland",
            founded: 2009,
            url: {
                text: "stadtwerke-media.de",
                goto: "http://www.stadtwerke-media.de/"
            }
        }
    },


    {
        "slug": "versatel-dsl-de",
        "name": "versatel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.versatel.de/privat/telefonie-internet",
        "availabilityUrl": "https://shop.versatel.de/hvts/index/",
        "plans": [
            {
                "slug": "doppelflat-basic",
                "name": "Doppel-Flat basic",
                "speed": 6000
            },
            {
                "slug": "doppelflat-select24",
                "name": "Doppel-Flat select24",
                "speed": 16000
            },
            {
                "slug": "doppelflat-select12",
                "name": "Doppel-Flat select12",
                "speed": 16000
            }
        ],
        "business": {
            name: "Versatel GmbH",
            logo: "versatel.png",
            location: "Berlin, Deutschland",
            founded: 1999,
            url: {
                text: "versatel.de",
                goto: "http://www.versatel.de/"
            }
        }
    },



    {
        "slug": "versatel-mobile-de",
        "name": "versatel (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.versatel.de/privat/mobilfunk",
        "plans": [
            {
                "slug": "allnet-flatrate",
                "name": "Allnet-Flatrate",
                "speed": 7200,
                "dataVolume": 500
            },

            {
                "slug": "laptop-flatrate",
                "name": "Laptop-Flatrate",
                "speed": 7200,
                "dataVolume": 5000
            }
        ],
        "business": {
            name: "Versatel GmbH",
            logo: "versatel.png",
            location: "Berlin, Deutschland",
            founded: 1999,
            url: {
                text: "versatel.de",
                goto: "http://www.versatel.de/"
            }
        }
    },


    {
        "slug": "vodafone-dsl-de",
        "name": "Vodafone",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
        "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
        "availability": "national",
        "plans": [
            {
                "slug": "dsl-zuhause-s",
                "name": "DSL Zuhause S",
                "speed": 16000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },
            {
                "slug": "dsl-zuhause-m",
                "name": "DSL Zuhause M",
                "speed": 16000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },
            {
                "slug": "dsl-zuhause-m-50",
                "name": "DSL Zuhause M 50 MBit/s",
                "speed": 50000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },
            {
                "slug": "dsl-zuhause-m-100",
                "name": "DSL Zuhause M 100 MBit/s",
                "speed": 100000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },
            {
                "slug": "dsl-zuhause-l",
                "name": "DSL Zuhause L",
                "speed": 16000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },
            {
                "slug": "dsl-zuhause-l-50",
                "name": "DSL Zuhause L 50MBit/s",
                "speed": 50000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/dsl/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/dsl/index.html"
            },

            {
                "slug": "internet-phone-10",
                "name": "Internet & Phone 10",
                "speed": 10000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/kabel/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/kabel/index.html"
            },
            {
                "slug": "internet-phone-25",
                "name": "Internet & Phone 25",
                "speed": 25000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/kabel/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/kabel/index.html"
            },
            {
                "slug": "internet-phone-50",
                "name": "Internet & Phone 50",
                "speed": 50000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/kabel/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/kabel/index.html"
            },
            {
                "slug": "internet-phone-100",
                "name": "Internet & Phone 100",
                "speed": 100000,
                "affiliateUrl": "https://zuhauseplus.vodafone.de/kabel/index.html",
                "availabilityUrl": "https://zuhauseplus.vodafone.de/kabel/index.html"
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "vodafone.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },


    {
        "slug": "vodafone-ltezuhause-mobile-de",
        "name": "Vodafone (LTE Zuhause)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://zuhauseplus.vodafone.de/lte-zuhause/",
        "availabilityUrl": "https://zuhauseplus.vodafone.de/lte-zuhause/",
        "plans": [
            {
                "slug": "lte-zuhause-s",
                "name": "LTE Zuhause S",
                "speed": 7200,
                "dataVolume": 10000
            },
            {
                "slug": "lte-zuhause-m",
                "name": "LTE Zuhause M",
                "speed": 21600,
                "dataVolume": 15000
            },
            {
                "slug": "lte-zuhause-l",
                "name": "LTE Zuhause L",
                "speed": 50000,
                "dataVolume": 30000
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "vodafone.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },


    {
        "slug": "vodafone-mobile-de",
        "name": "Vodafone (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html?b_id=1313",
        "availabilityUrl": "http://www.vodafone.de/privat/hilfe-support/netzabdeckung.html",
        "plans": [
            {
                "slug": "red-1.5gb",
                "name": "Red 1.5 GB",
                "speed": 100000,
                "dataVolume": 1500,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html?b_id=1313"
            },
            {
                "slug": "red-3gb",
                "name": "Red 3 GB",
                "speed": 100000,
                "dataVolume": 3000,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html?b_id=1313"
            },
            {
                "slug": "red-8gb",
                "name": "Red 8 GB",
                "speed": 100000,
                "dataVolume": 8000,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html?b_id=1313"
            },
            {
                "slug": "red-20gb",
                "name": "Red 20 GB",
                "speed": 100000,
                "dataVolume": 20000,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html?b_id=1313"
            },

            {
                "slug": "smart-s",
                "name": "Smart S",
                "speed": 21600,
                "dataVolume": 200,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html"
            },
            {
                "slug": "smart-m",
                "name": "Smart M",
                "speed": 21600,
                "dataVolume": 300,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html"
            },
            {
                "slug": "smart-l",
                "name": "Smart L",
                "speed": 21600,
                "dataVolume": 500,
                "affiliateUrl": "http://www.vodafone.de/privat/handys-tablets-tarife/smartphone-tarife.html"
            },

            {
                "slug": "datago-s",
                "name": "DataGo S",
                "speed": 21600,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.vodafone.de/privat/tablets-datentarife/tablets-surfsticks-datentarife.html?b_id=1313"
            },
            {
                "slug": "datago-m",
                "name": "DataGo M",
                "speed": 50000,
                "dataVolume": 3000,
                "affiliateUrl": "http://www.vodafone.de/privat/tablets-datentarife/tablets-surfsticks-datentarife.html?b_id=1313"
            },
            {
                "slug": "datago-l",
                "name": "DataGo L",
                "speed": 150000,
                "dataVolume": 6000,
                "affiliateUrl": "http://www.vodafone.de/privat/tablets-datentarife/tablets-surfsticks-datentarife.html?b_id=1313"
            },


            {
                "slug": "websessions-basic",
                "name": "WebSessions Basic",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "http://www.vodafone.de/privat/callya-prepaid-karte/prepaid-internet-websessions.html"
            },
            {
                "slug": "websessions-s",
                "name": "WebSessions S",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "http://www.vodafone.de/privat/callya-prepaid-karte/prepaid-internet-websessions.html"
            },
            {
                "slug": "websessions-m",
                "name": "WebSessions M",
                "speed": 7200,
                "dataVolume": 3000,
                "affiliateUrl": "http://www.vodafone.de/privat/callya-prepaid-karte/prepaid-internet-websessions.html"
            },
            {
                "slug": "websessions-l",
                "name": "WebSessions L",
                "speed": 7200,
                "dataVolume": 5000,
                "affiliateUrl": "http://www.vodafone.de/privat/callya-prepaid-karte/prepaid-internet-websessions.html"
            }
        ],
        "business": {
            name: "Vodafone GmbH",
            logo: "vodafone.png",
            location: "Düsseldorf, Deutschland",
            employees: 10500,
            salesVolume: "9,817 Mrd. Euro (2013)",
            founded: 1990,
            url: {
                text: "vodafone.de",
                goto: "http://vodafone.de/"
            }
        }
    },


    {
        "slug": "voxacom-dsl-de",
        "name": "Voxacom",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.voxacom.de/index.php?page=privat_anschlusse",
        "availabilityUrl": "http://www.voxacom.de/dsl_verfuegbarkeit.php",
        "plans": [
            {
                "slug": "voxadsl-smart",
                "name": "VoxaDSL Smart",
                "speed": 6000
            },
            {
                "slug": "voxadsl-maxx",
                "name": "VoxaDSL Maxx",
                "speed": 16000
            },
            {
                "slug": "voxavdsl-25",
                "name": "VoxaVDSL 25",
                "speed": 25000
            },
            {
                "slug": "voxavdsl-50",
                "name": "VoxaVDSL 50",
                "speed": 50000
            }
        ],
        "business": {
            name: "Bisping & Bisping GmbH & Co. KG",
            logo: "voxacom.png",
            location: "Lauf, Deutschland",
            url: {
                text: "voxacom.de",
                goto: "http://www.voxacom.de/"
            }
        }
    },



    {
        "slug": "vype-dsl-de",
        "name": "Vype",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.vype.de/vype-hatzenbuehl/index.php?option=com_wrapper&Itemid=47",
        "availabilityUrl": "http://www.vype.de/vype-hatzenbuehl/index.php?option=com_content&task=blogcategory&id=17&Itemid=41",
        "plans": [
            {
                "slug": "dsl-family",
                "name": "DSL Family",
                "dataVolume": 0
            },
            {
                "slug": "dsl-1000",
                "name": "DSL 1000",
                "dataVolume": 1000
            },
            {
                "slug": "dsl-6000",
                "name": "DSL 6000",
                "dataVolume": 6000
            }
        ],
        "business": {
            name: "Coms4Grid GmbH",
            logo: "vype.png",
            logobg: "fdb200",
            location: "Mannheim, Deutschland",
            url: {
                text: "vype.de",
                goto: "http://www.vype.de/"
            }
        }
    },



    {
        "slug": "cityweb-dsl-de",
        "name": "Cityweb",
        "type": "dsl",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.cityweb.de/dsl.html",
        "availabilityUrl": "https://www.cityweb.de/dsl.html",
        "plans": [
            {
                "slug": "dsl-2gb",
                "name": "DSL 2 GB",
                "dataVolume": 2000
            },
            {
                "slug": "dsl-3gb",
                "name": "DSL 3 GB",
                "dataVolume": 3000
            }
        ],
        "business": {
            name: "Cityweb GmbH",
            logo: "cityweb.png",
            logobg: "f7f7f7",
            location: "Hamburg, Deutschland",
            url: {
                text: "cityweb.de",
                goto: "https://www.cityweb.de/"
            }
        }
    },



    {
        "slug": "weboverair-hotspot-de",
        "name": "WEBoverAIR",
        "type": "hotspot",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.weboverair.de/",
        "availabilityUrl": "http://www.weboverair.de/index.php/anschlussgebiet",
        "plans": [
            {
                "slug": "smart-internet-2000",
                "name": "Smart Internet 2.000",
                "speed": 2000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },
            {
                "slug": "smart-internet-zeit-2000",
                "name": "Smart Internet 2.000 Zeit",
                "speed": 2000,
                "dataVolume": 10000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },
            {
                "slug": "smart-internet-4000",
                "name": "Smart Internet 4.000 Zeit",
                "speed": 4000,
                "dataVolume": 20000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },
            {
                "slug": "smart-internet-8000",
                "name": "Smart Internet 8.000",
                "speed": 8000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },
            {
                "slug": "smart-internet-12000",
                "name": "Smart Internet 12.000",
                "speed": 12000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },
            {
                "slug": "smart-internet-25000",
                "name": "Smart Internet 25.000",
                "speed": 25000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/privatkunden"
            },


            {
                "slug": "premium-internet-10A",
                "name": "Premium Internet 10.000-A",
                "speed": 10000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            },
            {
                "slug": "premium-internet-15A",
                "name": "Premium Internet 15.000-A",
                "speed": 15000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            },
            {
                "slug": "premium-internet-30A",
                "name": "Premium Internet 30.000-A",
                "speed": 30000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            },
            {
                "slug": "premium-internet-10S",
                "name": "Premium Internet 10.000-S",
                "speed": 10000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            },
            {
                "slug": "premium-internet-15S",
                "name": "Premium Internet 15.000-S",
                "speed": 15000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            },
            {
                "slug": "premium-internet-30S",
                "name": "Premium Internet 30.000-S",
                "speed": 30000,
                "affiliateUrl": "http://www.weboverair.de/index.php/internet2/geschaeftskunden"
            }
        ],
        "business": {
            name: "Kadsoft Computer GmbH",
            logo: "weboverair.png",
            location: "Freital, Deutschland",
            url: {
                text: "weboverair.de",
                goto: "http://www.weboverair.de/"
            }
        }
    },



    {
        "slug": "welbild-mobile-de",
        "name": "Weltbild Mobil",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "https://www.weltbild-mobil.de/",
        "availability": "national",
        "plans": [
            {
                "slug": "alles-drin-200",
                "name": "Alles-Drin 200",
                "speed": 7200,
                "dataVolume": 200,
                "affiliateUrl": "https://www.weltbild-mobil.de/alles-drin-tarife.html"
            },
            {
                "slug": "alles-drin-300",
                "name": "Alles-Drin 300",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "https://www.weltbild-mobil.de/alles-drin-tarife.html"
            },
            {
                "slug": "alles-drin-500",
                "name": "Alles-Drin 500",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.weltbild-mobil.de/alles-drin-tarife.html"
            },
            {
                "slug": "alles-drin-1000",
                "name": "Alles-Drin 1000",
                "speed": 7200,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.weltbild-mobil.de/alles-drin-tarife.html"
            },

            {
                "slug": "flat-xs-500",
                "name": "Flat XS 500",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "https://www.weltbild-mobil.de/flat-tarife.html"
            },
            {
                "slug": "flat-xm-1000",
                "name": "Flat XM 1000",
                "speed": 14400,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.weltbild-mobil.de/flat-tarife.html"
            },
            {
                "slug": "flat-xm-2000",
                "name": "Flat XM 2000",
                "speed": 14400,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.weltbild-mobil.de/flat-tarife.html"
            },

            {
                "slug": "lte-s",
                "name": "LTE-Tarif S",
                "speed": 21100,
                "dataVolume": 1000,
                "affiliateUrl": "https://www.weltbild-mobil.de/lte-tarife.html"
            },
            {
                "slug": "lte-m",
                "name": "LTE-Tarif M",
                "speed": 50000,
                "dataVolume": 2000,
                "affiliateUrl": "https://www.weltbild-mobil.de/lte-tarife.html"
            },
            {
                "slug": "lte-l",
                "name": "LTE-Tarif L",
                "speed": 50000,
                "dataVolume": 3000,
                "affiliateUrl": "https://www.weltbild-mobil.de/lte-tarife.html"
            },

            {
                "slug": "internet-flat",
                "name": "Internet-Flat",
                "speed": 7200,
                "dataVolume": 100,
                "affiliateUrl": "https://www.weltbild-mobil.de/datentarif-notebook-tablet-detail.html"
            }

        ],
        "business": {
            name: "eteleon AG",
            logo: "welbild-mobil.png",
            location: "München, Deutschland",
            url: {
                text: "weltbild-mobil.de",
                goto: "https://www.weltbild-mobil.de/"
            }
        }
    },


    {
        "slug": "wemacom-dsl-de",
        "name": "Wemacom",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://wemacom.de/",
        "availabilityUrl": "http://wemacom.de/wemacom-loft-versorgungsgebiet/",
        "availability": "regional",
        "plans": [
            {
                "slug": "loft-3000",
                "name": "Loft 3.000",
                "speed": 3000,
                "affiliateUrl": "http://wemacom.de/loft-tarife/",
                "availabilityUrl": "http://wemacom.de/wemacom-loft-versorgungsgebiet/"
            },
            {
                "slug": "loft-6000",
                "name": "Loft 6.000",
                "speed": 6000,
                "affiliateUrl": "http://wemacom.de/loft-tarife/",
                "availabilityUrl": "http://wemacom.de/wemacom-loft-versorgungsgebiet/"
            },
            {
                "slug": "loft-16000",
                "name": "Loft 16.000",
                "speed": 16000,
                "affiliateUrl": "http://wemacom.de/loft-tarife/",
                "availabilityUrl": "http://wemacom.de/wemacom-loft-versorgungsgebiet/"
            },
            {
                "slug": "loft-16000-premium",
                "name": "Loft 16.000 Premium",
                "speed": 16000,
                "affiliateUrl": "http://wemacom.de/loft-tarife/",
                "availabilityUrl": "http://wemacom.de/wemacom-loft-versorgungsgebiet/"
            },

            {
                "slug": "surf-basic",
                "name": "Surf Basic",
                "speed": 30000,
                "affiliateUrl": "http://wemacom.de/ftth-tarife/",
                "availabilityUrl": "http://wemacom.de/ftth/"
            },
            {
                "slug": "surf-komfort",
                "name": "Surf Komfort",
                "speed": 50000,
                "affiliateUrl": "http://wemacom.de/ftth-tarife/",
                "availabilityUrl": "http://wemacom.de/ftth/"
            },
            {
                "slug": "surf-premium",
                "name": "Surf Premium",
                "speed": 100000,
                "affiliateUrl": "http://wemacom.de/ftth-tarife/",
                "availabilityUrl": "http://wemacom.de/ftth/"
            }


        ],
        "business": {
            name: "WEMACOM Telekommunikation GmbH",
            logo: "wemacom.png",
            logobg: "eda011",
            location: "Schwerin, Deutschland",
            url: {
                text: "wemacom.de",
                goto: "http://wemacom.de/"
            }
        }
    },



    {
        "slug": "widsl-dsl-de",
        "name": "wiDSL",
        "type": "dsl",
        "country": "DE",
        "affiliateUrl": "http://www.widsl.de/",
        "availability": "regional",
        "plans": [
            {
                "slug": "silber",
                "name": "Silber",
                "speed": 4000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-kabel",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-kabel"
            },
            {
                "slug": "gold",
                "name": "Gold",
                "speed": 8000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-kabel",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-kabel"
            },
            {
                "slug": "platin",
                "name": "Platin",
                "speed": 16000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-kabel",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-kabel"
            },

            {
                "slug": "select-3",
                "name": "Select 3",
                "speed": 3000,
                "dataVolume": 20000,
                "affiliateUrl": "http://www.widsl.de/privat-select-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-select-tarife"
            },
            {
                "slug": "select-6",
                "name": "Select 6",
                "speed": 6000,
                "dataVolume": 30000,
                "affiliateUrl": "http://www.widsl.de/privat-select-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-select-tarife"
            },
            {
                "slug": "select-12",
                "name": "Select 12",
                "speed": 12000,
                "dataVolume": 40000,
                "affiliateUrl": "http://www.widsl.de/privat-select-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-select-tarife"
            },

            {
                "slug": "power-v8",
                "name": "Power V8",
                "speed": 8000,
                "affiliateUrl": "http://www.widsl.de/privat-power-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-power-tarife"
            },
            {
                "slug": "power-v16",
                "name": "Power V16",
                "speed": 16000,
                "affiliateUrl": "http://www.widsl.de/privat-power-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-power-tarife"
            },
            {
                "slug": "power-v25",
                "name": "Power V25",
                "speed": 25000,
                "affiliateUrl": "http://www.widsl.de/privat-power-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-power-tarife"
            },
            {
                "slug": "power-v50",
                "name": "Power V50",
                "speed": 50000,
                "affiliateUrl": "http://www.widsl.de/privat-power-tarife",
                "availabilityUrl": "http://www.widsl.de/privat-power-tarife"
            }
        ],
        "business": {
            name: "OR Network GmbH",
            logo: "widsl.png",
            location: "Reiskirchen, Deutschland",
            url: {
                text: "widsl.de",
                goto: "http://www.widsl.de/"
            }
        }
    },



    {
        "slug": "widsl-hotspot-de",
        "name": "wiDSL (Funk)",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.widsl.de/privattarife-20-funk",
        "availability": "regional",
        "plans": [
            {
                "slug": "bronze",
                "name": "Bronze",
                "speed": 2000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-funk",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-funk"
            },
            {
                "slug": "silber",
                "name": "Silber",
                "speed": 4000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-funk",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-funk"
            },
            {
                "slug": "gold",
                "name": "Gold",
                "speed": 8000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-funk",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-funk"
            },
            {
                "slug": "platin",
                "name": "Platin",
                "speed": 16000,
                "affiliateUrl": "http://www.widsl.de/privattarife-20-funk",
                "availabilityUrl": "http://www.widsl.de/privattarife-20-funk"
            }
        ],
        "business": {
            name: "OR Network GmbH",
            logo: "widsl.png",
            location: "Reiskirchen, Deutschland",
            url: {
                text: "widsl.de",
                goto: "http://www.widsl.de/"
            }
        }
    },



    {
        "slug": "wilhelmtel-dsl-de",
        "name": "wilhelm.tel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.wilhelm-tel.de/privatkunden/",
        "availabilityUrl": "http://www.wilhelm-tel.de/privatkunden/service/verfuegbarkeitscheck/",
        "plans": [
            {
                "slug": "internet-anschluss",
                "name": "Internet-Anschluss",
                "speed": 10000,
                "affiliateUrl": "http://www.wilhelm-tel.de/privatkunden/telefon-internet/internet/"
            },
            {
                "slug": "komplett-anschluss-komfort",
                "name": "Komplett-Anschluss Komfort 100.000",
                "speed": 100000,
                "affiliateUrl": "http://www.wilhelm-tel.de/privatkunden/telefon-internet/komplettpakete/"
            },
            {
                "slug": "komplett-anschluss-premium",
                "name": "Komplett-Anschluss Premium 100.000",
                "speed": 100000,
                "affiliateUrl": "http://www.wilhelm-tel.de/privatkunden/telefon-internet/komplettpakete/"
            }
        ],
        "business": {
            name: "wilhelm.tel GmbH",
            logo: "wilhelmtel.png",
            location: "Norderstedt, Deutschland",
            founded: 1999,
            url: {
                text: "wilhelm-tel.de",
                goto: "http://www.wilhelm-tel.de/"
            }
        }
    },


    {
        "slug": "wilhelmtel-mobile-de",
        "name": "wilhelm.tel (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.wilhelm-tel.de/privatkunden/mobilfunk/",
        "plans": [
            {
                "slug": "mobil-smart",
                "name": "MobilSMART",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "mobil-allnet-flat",
                "name": "MobilALLNET.flat",
                "speed": 7200,
                "dataVolume": 1000
            }
        ],
        "business": {
            name: "wilhelm.tel GmbH",
            logo: "wilhelmtel.png",
            location: "Norderstedt, Deutschland",
            founded: 1999,
            url: {
                text: "wilhelm-tel.de",
                goto: "http://www.wilhelm-tel.de/"
            }
        }
    },


    {
        "slug": "mobyklick-hotspot-de",
        "name": "MobyKlick",
        "type": "hotspot",
        "country": "DE",
        "affiliateUrl": "http://www.mobyklick.de/index.php?id=1",
        "availability": "regional",
        "plans": [
            {
                "slug": "free-wlan",
                "name": "Freies WLAN",
                "affiliateUrl": "http://www.mobyklick.de/index.php?id=1",
                "availabilityUrl": "http://www.mobyklick.de/index.php?id=availability"
            }
        ],
        "business": {
            name: "wilhelm.tel GmbH",
            logo: "mobyclick.png",
            logobg: "052448",
            location: "Norderstedt, Deutschland",
            founded: 1999,
            url: {
                text: "wilhelm-tel.de",
                goto: "http://www.wilhelm-tel.de/"
            }
        }
    },


    {
        "slug": "willytel-dsl-de",
        "name": "willy.tel",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.willytel.de/telefon-internet/",
        "availabilityUrl": "http://www.willytel.de/kontakt/",
        "plans": [
            {
                "slug": "willygo-10000",
                "name": "willy.go 10.000",
                "speed": 10000,
                "affiliateUrl": "http://www.willytel.de/telefon-internet/internet/"
            },

            {
                "slug": "willykombi",
                "name": "willy.kombi",
                "speed": 100000,
                "affiliateUrl": "http://www.willytel.de/telefon-internet/telefon-internet/"
            },
            {
                "slug": "willyduoflat",
                "name": "willy.duoflat",
                "speed": 100000,
                "affiliateUrl": "http://www.willytel.de/telefon-internet/telefon-internet/"
            }
        ],
        "business": {
            name: "willy.tel GmbH",
            logo: "willytel.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "willytel.de",
                goto: "http://www.willytel.de/"
            }
        }
    },


    {
        "slug": "willytel-mobile-de",
        "name": "willy.tel (Mobil)",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.willytel.de/mobilfunk/",
        "availability": "national",
        "plans": [
            {
                "slug": "mobil-smart",
                "name": "willy.smart",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.willytel.de/mobilfunk/"
            },
            {
                "slug": "mobil-allnetflat",
                "name": "willy.allnetflat",
                "speed": 7200,
                "dataVolume": 300,
                "affiliateUrl": "http://www.willytel.de/mobilfunk/"
            }
        ],
        "business": {
            name: "willy.tel GmbH",
            logo: "willytel.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "willytel.de",
                goto: "http://www.willytel.de/"
            }
        }
    },


    {
        "slug": "winsim-mobile-de",
        "name": "winSIM",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.winsim.de",
        "plans": [
            {
                "slug": "smart-300",
                "name": "Smart 300",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "flat-s-500",
                "name": "Flat S 500",
                "speed": 7200,
                "dataVolume": 500
            },
            {
                "slug": "flat-m-500-eu",
                "name": "Flat M 500 EU",
                "speed": 7200,
                "dataVolume": 500
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "winsim.png",
            location: "München, Deutschland",
            url: {
                text: "winsim.de",
                goto: "http://www.winsim.de/"
            }
        }
    },


    {
        "slug": "premiumsim-mobile-de",
        "name": "PremiumSIM",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "http://www.premiumsim.de/flex",
        "plans": [
            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21100,
                "dataVolume": 1000
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "dataVolume": 2000
            },
            {
                "slug": "lte-L",
                "name": "LTE l",
                "speed": 50000,
                "dataVolume": 3000
            }
        ],
        "business": {
            name: "eteleon AG",
            logo: "premiumsim.png",
            location: "München, Deutschland",
            url: {
                text: "winsim.de",
                goto: "http://www.winsim.de/"
            }
        }
    },


    {
        "slug": "wirmobil-mobile-de",
        "name": "wirmobil",
        "type": "mobile",
        "country": "DE",
        "affiliateUrl": "http://www.wirmobil.de/tarife/",
        "availability": "national",
        "plans": [
            {
                "slug": "allnet-flat",
                "name": "All-Net-Flat",
                "speed": 7200,
                "dataVolume": 500,
                "affiliateUrl": "http://www.wirmobil.de/tarife/"
            }
        ],
        "business": {
            name: "FUNKE MEDIEN NRW GmbH",
            logo: "wirmobil.png",
            location: "Essen, Deutschland",
            url: {
                text: "wirmobil.de",
                goto: "http://www.wirmobil.de/"
            }
        }
    },



    {
        "slug": "wobcom-dsl-de",
        "name": "WOBCOM",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.wobcom.de/telefon-internet/tarifuebersicht.html",
        "availabilityUrl": "http://www.wobcom.de/nc/telefon-internet/anschluss-check.html",
        "plans": [
            {
                "slug": "surfer-tarif",
                "name": "Surfer-Tarif",
                "speed": 3000
            },
            {
                "slug": "familien-tarif",
                "name": "Familien-Tarif",
                "speed": 6000
            },
            {
                "slug": "power-tarif",
                "name": "Power-Tarif",
                "speed": 35000
            },
            {
                "slug": "kabel-tarif",
                "name": "Kabel-Tarif",
                "speed": 8000
            }
        ],
        "business": {
            name: "WOBCOM GmbH",
            logo: "wobcom.png",
            location: "Wolfsburg, Deutschland",
            url: {
                text: "wobcom.de",
                goto: "http://www.wobcom.de/"
            }
        }
    },



    {
        "slug": "wobcom-mobile-de",
        "name": "WOBCOM (Mobil)",
        "type": "mobile",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.wobcom.de/mobilfunk/tarifuebersicht.html",
        "plans": [
            {
                "slug": "data-surf",
                "name": "Data Surf",
                "speed": 7200,
                "dataVolume": 1000
            },
            {
                "slug": "smart-50",
                "name": "Smart 50",
                "speed": 7200,
                "dataVolume": 50
            },
            {
                "slug": "smart-100",
                "name": "Smart 100",
                "speed": 7200,
                "dataVolume": 300
            },
            {
                "slug": "allnet-flat",
                "name": "All Net Flat",
                "speed": 7200,
                "dataVolume": 300
            }
        ],
        "business": {
            name: "WOBCOM GmbH",
            logo: "wobcom.png",
            location: "Wolfsburg, Deutschland",
            url: {
                text: "http://www.wobcom.de/",
                goto: "http://www.wobcom.de/"
            }
        }
    },



    {
        "slug": "xitylight-dsl-de",
        "name": "XityLight",
        "type": "dsl",
        "country": "DE",
        "availability": "regional",
        "affiliateUrl": "http://www.xitylight.de/xl-produkte/",
        "availabilityUrl": "http://www.xitylight.de/hausanschluss/verfuegbarkeitscheck/",
        "plans": [
            {
                "slug": "xl-dsl-16",
                "name": "XL-DSL 16",
                "speed": 16000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-dsl/"
            },

            {
                "slug": "xl-vdsl-16",
                "name": "XL-VDSL 16",
                "speed": 16000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-vdsl/"
            },
            {
                "slug": "xl-vdsl-25",
                "name": "XL-VDSL 25",
                "speed": 25000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-vdsl/"
            },
            {
                "slug": "xl-vdsl-50",
                "name": "XL-VDSL 50",
                "speed": 50000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-vdsl/"
            },

            {
                "slug": "xl-25-25",
                "name": "XL-25/25",
                "speed": 25000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-glasfaser-internet/"
            },
            {
                "slug": "xl-50-50",
                "name": "XL-50/50",
                "speed": 50000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-glasfaser-internet/"
            },
            {
                "slug": "xl-100",
                "name": "XL-100",
                "speed": 100000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-glasfaser-internet/"
            },
            {
                "slug": "xl-professional",
                "name": "XL-Professional",
                "speed": 100000,
                "affiliateUrl": "http://www.xitylight.de/xl-produkte/xl-internet/xl-glasfaser-internet/"
            }
        ],
        "business": {
            name: "Stadtnetze Barmstedt GmbH",
            logo: "xitylight.png",
            location: "Barmstedt, Deutschland",
            url: {
                text: "xitylight.de",
                goto: "http://www.xitylight.de/"
            }
        }
    },



    {
        "slug": "yourfone-mobile-de",
        "name": "yourfone",
        "type": "mobile",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "https://www.yourfone.de/tarife",
        "plans": [
            {
                "slug": "lte-s",
                "name": "LTE S",
                "speed": 21000,
                "dataVolume": 1000
            },
            {
                "slug": "lte-m",
                "name": "LTE M",
                "speed": 50000,
                "dataVolume": 2000
            },
            {
                "slug": "lte-l",
                "name": "LTE L",
                "speed": 50000,
                "dataVolume": 3000
            }
        ],
        "business": {
            name: "yourfone GmbH",
            logo: "yourfone.png",
            location: "Hamburg, Deutschland",
            url: {
                text: "yourfone.de",
                goto: "https://www.yourfone.de/"
            }
        }
    }








/*
    {
        "slug": "",
        "name": "",
        "type": "",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "",
        "availabilityUrl": "",
        "plans": [
            {
                "slug": "",
                "name": "",
                "speed": 0,
                "dataVolume": 0,
                "affiliateUrl": "",
                "availabilityUrl": ""
            }
        ],
        "business": {
            name: "",
            location: ", Deutschland",
            employees: 0,
            salesVolume: "",
            founded: 1988,
            url: {
                text: "",
                goto: ""
            }
        }
    }
**/








    /* Muster *später*
    {
        "slug": "",
        "name": "",
        "type": "",
        "subtype": "",
        "country": "DE",
        "availability": "national",
        "affiliateUrl": "",
        "availabilityUrl": "",
        "plans": [
            {
                "slug": "",
                "name": "",
                "speed": 0,
                "dataVolume" : 0,
                "subtype": "",
                "options": ['term'],
                "optional": ['phone','phoneflat','sms','smsflat','multicard','addnumber','tv','hdtv',
                    'addsmartcard' ,'noterm', 'term', 'dataupgrade','speedupgrade','upstreamupdate','eudata','worldwidedata','euphoneflat','mobilephoneflat'],
                "pricePerDay": 0,
                "pricePerMonth" : 0,
                "affiliateUrl": "",
                "availabilityUrl": ""
            }
        ],
        "business": {
            name: "",
            location: ", Deutschland",
            employees: 0,
            salesVolume: "",
            founded: 1988,
            url: {
                text: "",
                goto: ""
            }
        }
    }
    */

    /*
     type = [dsl, mobile, hotspot]
     subtype = [adsl, vdsl, ftth, satellite, lte, umts, wdsl]
     // lte ab 16.000
     */

];