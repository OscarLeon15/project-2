const mongoose = require('mongoose');
const Liga = require('../models/Liga');
const dbName = 'Liga-60';
mongoose.connect(`mongodb://localhost/${dbName}`);
const testing = [
  {
    "id": 77,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Athletic Club",
    "shortName": "Athletic",
    "tla": "ATH",
    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
    "address": "Ibaigane, Alameda Mazarredo, 23 Bilbao 48009",
    "phone": "+34 (944) 240877",
    "website": "http://www.athletic-club.eus",
    "email": "prensa@athletic-club.net",
    "founded": 1898,
    "clubColors": "Red / White / Black",
    "venue": "San Mamés",
    "lastUpdated": "2019-08-29T02:53:05Z"
},
{
    "id": 78,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Club Atlético de Madrid",
    "shortName": "Atleti",
    "tla": "ATM",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg",
    "address": "Paseo Virgen del Puerto, 67 Madrid 28005",
    "phone": "+34 (913) 669048",
    "website": "http://www.clubatleticodemadrid.com",
    "email": "comunicacion@clubatleticodemadrid.com",
    "founded": 1903,
    "clubColors": "Red / White / Blue",
    "venue": "Estadio Wanda Metropolitano",
    "lastUpdated": "2019-08-29T02:53:07Z"
},
{
    "id": 79,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "CA Osasuna",
    "shortName": "Osasuna",
    "tla": "OSA",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/ca/Atletico_Osasuna.svg",
    "address": "Calle del Sadar, s/n Pamplona 31006",
    "phone": "+34 (948) 152636",
    "website": "http://www.osasuna.es",
    "email": "osasuna@osasuna.es",
    "founded": 1920,
    "clubColors": "Red / Navy Blue",
    "venue": "Estadio El Sadar",
    "lastUpdated": "2019-08-29T02:53:09Z"
},
{
    "id": 80,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "RCD Espanyol de Barcelona",
    "shortName": "Espanyol",
    "tla": "ESP",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a7/RCD_Espanyol_De_Barcelona.svg",
    "address": "Avenida Baix Llobregat, 100 Cornellà de Llobregat 08940",
    "phone": "+34 (932) 927700",
    "website": "http://www.rcdespanyol.com",
    "email": "info@rcdespanyol",
    "founded": 1900,
    "clubColors": "Blue / White",
    "venue": "RCDE Stadium",
    "lastUpdated": "2019-08-29T02:53:10Z"
},
{
    "id": 81,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "FC Barcelona",
    "shortName": "Barça",
    "tla": "FCB",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg",
    "address": "Avenida Arístides Maillol s/n Barcelona 08028",
    "phone": "+34 (902) 189900",
    "website": "http://www.fcbarcelona.com",
    "email": "secretaria@fcbarcelona.com",
    "founded": 1899,
    "clubColors": "Red / Navy Blue / Orange",
    "venue": "Camp Nou",
    "lastUpdated": "2019-08-29T02:53:12Z"
},
{
    "id": 82,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Getafe CF",
    "shortName": "Getafe",
    "tla": "GET",
    "crestUrl": "https://upload.wikimedia.org/wikipedia/en/7/7f/Getafe_logo.png",
    "address": "Avenida Teresa de Calcuta, s/n Getafe 28903",
    "phone": "+34 (916) 959643",
    "website": "http://www.getafecf.com",
    "email": "fsantos@getafecf.com",
    "founded": 1946,
    "clubColors": "Blue / White",
    "venue": "Coliseum Alfonso Pérez",
    "lastUpdated": "2019-08-29T02:53:14Z"
},
{
    "id": 83,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Granada CF",
    "shortName": "Granada",
    "tla": "GRA",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d3/Granada_CF.svg",
    "address": "Calle del Pintor Manuel Maldonado, s/n Granada 18007",
    "phone": "+34 (958) 253300",
    "website": "http://www.granadacf.es",
    "email": "secretaria@granadacf.es",
    "founded": 1931,
    "clubColors": "Red / White",
    "venue": "Estadio Nuevo Los Cármenes",
    "lastUpdated": "2019-08-29T02:53:14Z"
},
{
    "id": 86,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Real Madrid CF",
    "shortName": "Real Madrid",
    "tla": "RMA",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg",
    "address": "Avenida Concha Espina, 1 Madrid 28036",
    "phone": "+34 (913) 984300",
    "website": "http://www.realmadrid.com",
    "email": "atencionpublico@corp.realmadrid.com",
    "founded": 1902,
    "clubColors": "White / Purple",
    "venue": "Estadio Santiago Bernabéu",
    "lastUpdated": "2019-08-29T02:53:16Z"
},
{
    "id": 88,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Levante UD",
    "shortName": "Levante",
    "tla": "LEV",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/1/1f/Levante_ud.svg",
    "address": "Calle San Vicente de Paúl, 44 Valencia 46019",
    "phone": "+34 (902) 220304",
    "website": "http://www.levanteud.com",
    "email": "admon@levanteud.es",
    "founded": 1909,
    "clubColors": "Crimson / Blue",
    "venue": "Estadio Ciudad de Valencia",
    "lastUpdated": "2019-08-29T02:53:17Z"
},
{
    "id": 89,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "RCD Mallorca",
    "shortName": "Mallorca",
    "tla": "MAL",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e0/Rcd_mallorca.svg",
    "address": "Son Moix, Calle Camí dels Reis, s/n Palma de Mallorca 07011",
    "phone": "+34 (971) 221221",
    "website": "http://www.rcdmallorca.es",
    "email": "prensa@rcdmallorca.es",
    "founded": 1916,
    "clubColors": "Red / Black",
    "venue": "Iberostar Estadi",
    "lastUpdated": "2019-08-29T02:53:18Z"
},
{
    "id": 90,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Real Betis Balompié",
    "shortName": "Real Betis",
    "tla": "BET",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/4/43/Real_Betis.svg",
    "address": "Avenida de Heliópolis, s/n Sevilla 41012",
    "phone": "+34 (902) 191907",
    "website": "http://www.realbetisbalompie.es",
    "email": "info@realbetisbalompie.es",
    "founded": 1907,
    "clubColors": "Green / White",
    "venue": "Estadio Benito Villamarín",
    "lastUpdated": "2019-08-29T02:53:20Z"
},
{
    "id": 92,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Real Sociedad de Fútbol",
    "shortName": "Real Sociedad",
    "tla": "RSO",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/55/Real_Sociedad_San_Sebasti%C3%A1n.svg",
    "address": "Anoeta Pasalekua, 1 San Sebastián 20014",
    "phone": "+34 (943) 462833",
    "website": "http://www.realsociedad.com",
    "email": "realsoc@realsociedad.com",
    "founded": 1903,
    "clubColors": "Blue / White",
    "venue": "Estadio Municipal de Anoeta",
    "lastUpdated": "2019-08-29T02:53:21Z"
},
{
    "id": 94,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Villarreal CF",
    "shortName": "Villarreal",
    "tla": "VIL",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/7/70/Villarreal_CF_logo.svg",
    "address": "Camino Miralcamp, s/n Villarreal 12540",
    "phone": "+34 (964) 500250",
    "website": "http://www.villarrealcf.es",
    "email": "villarrealcf@villarrealcf.es",
    "founded": 1923,
    "clubColors": "Yellow / Blue",
    "venue": "Estadio de la Cerámica",
    "lastUpdated": "2019-08-29T02:53:23Z"
},
{
    "id": 95,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Valencia CF",
    "shortName": "Valencia",
    "tla": "VAL",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/7/75/FC_Valencia.svg",
    "address": "Plaza del Valencia Club de Fútbol, 2 Valencia 46010",
    "phone": "+34 (902) 011919",
    "website": "http://www.valenciacf.com",
    "email": "informacion@valenciacf.es",
    "founded": 1919,
    "clubColors": "White / Orange / Black",
    "venue": "Estadio de Mestalla",
    "lastUpdated": "2019-08-29T02:53:24Z"
},
{
    "id": 250,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Real Valladolid CF",
    "shortName": "Valladolid",
    "tla": "VLD",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/6/6e/Real_Valladolid_Logo.svg",
    "address": "Avenida del Mundial, 82 Valladolid 47014",
    "phone": "+34 (983) 360342",
    "website": "http://www.realvalladolid.es",
    "email": "realvalladolid@realvalladolid.es",
    "founded": 1928,
    "clubColors": "Violet / White",
    "venue": "Estadio Municipal José Zorrilla",
    "lastUpdated": "2019-08-29T02:53:26Z"
},
{
    "id": 263,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Deportivo Alavés",
    "shortName": "Alavés",
    "tla": "ALA",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alaves_logo.svg",
    "address": "Mendizorroza, Paseo Cervantes, s/n Vitoria 01007",
    "phone": "+34 (945) 131018",
    "website": "http://www.alaves.com",
    "email": "deportivoalavessad@alaves.com",
    "founded": 1921,
    "clubColors": "Blue / White",
    "venue": "Estadio de Mendizorroza",
    "lastUpdated": "2019-08-29T02:53:28Z"
},
{
    "id": 278,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "SD Eibar",
    "shortName": "Eibar",
    "tla": "EIB",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/en/7/75/SD_Eibar_logo.svg",
    "address": "Ipurua Kalea, 2 Eibar 20600",
    "phone": "+34 (943) 201831",
    "website": "http://www.sdeibar.com",
    "email": "sdeibar@sdeibar.com",
    "founded": 1940,
    "clubColors": "Red / Blue",
    "venue": "Estadio Municipal de Ipurúa",
    "lastUpdated": "2019-08-29T02:53:29Z"
},
{
    "id": 558,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "RC Celta de Vigo",
    "shortName": "Celta",
    "tla": "CEL",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0c/Celta_Vigo.svg",
    "address": "Calle del Conde de Gondomar, 1 Vigo 36203",
    "phone": "+34 (986) 110900",
    "website": "http://www.celtavigo.net",
    "email": "comunicacion@celtavigo.net",
    "founded": 1923,
    "clubColors": "Sky Blue / White",
    "venue": "Estadio de Balaídos",
    "lastUpdated": "2019-08-29T02:53:31Z"
},
{
    "id": 559,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "Sevilla FC",
    "shortName": "Sevilla FC",
    "tla": "SEV",
    "crestUrl": "https://upload.wikimedia.org/wikipedia/de/c/c0/FC_Sevilla.svg",
    "address": "Calle Sevilla Fútbol Club, s/n Sevilla 41005",
    "phone": "+34 (902) 510011",
    "website": "http://www.sevillafc.es",
    "email": "sevillafc@sevillafc.es",
    "founded": 1905,
    "clubColors": "White / Red",
    "venue": "Estadio Ramón Sánchez Pizjuán",
    "lastUpdated": "2019-08-29T02:53:33Z"
},
{
    "id": 745,
    "area": {
        "id": 2224,
        "name": "Spain"
    },
    "name": "CD Leganés",
    "shortName": "Leganés",
    "tla": "LEG",
    "crestUrl": "http://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Legan%C3%A9s.png/180px-Club_Deportivo_Legan%C3%A9s.png",
    "address": "Calle Arquitectura, s/n Leganés 28914",
    "phone": "+34 (916) 888629",
    "website": "http://www.deportivoleganes.com",
    "email": "comunicacion@deportivoleganes.com",
    "founded": 1928,
    "clubColors": "Blue / White",
    "venue": "Estadio Municipal de Butarque",
    "lastUpdated": "2019-08-29T02:53:34Z"
},

{
  "id": 98,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "AC Milan",
  "shortName": "Milan",
  "tla": "MIL",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9e/AC_Mailand_Logo.svg",
  "address": "Via Filippo Turati 3 Milano 20121",
  "phone": "+39 (02) 62281",
  "website": "http://www.acmilan.com",
  "email": null,
  "founded": 1899,
  "clubColors": "Red / Black",
  "venue": "Stadio Giuseppe Meazza",
  "lastUpdated": "2019-08-29T02:58:11Z"
},
{
  "id": 99,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "ACF Fiorentina",
  "shortName": "Fiorentina",
  "tla": "FIO",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/ACF_Fiorentina.svg",
  "address": "Viale Manfredo Fanti 4 Firenze 50137",
  "phone": "+39 (055) 5030190",
  "website": "http://www.acffiorentina.it",
  "email": "segreteria@acffiorentina.it",
  "founded": 1926,
  "clubColors": "Purple / White",
  "venue": "Stadio Artemio Franchi",
  "lastUpdated": "2019-09-01T11:16:46Z"
},
{
  "id": 100,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "AS Roma",
  "shortName": "Roma",
  "tla": "ROM",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/32/AS_Rom.svg",
  "address": "Via di Trigoria km. 3,600 Roma 00128",
  "phone": "+39 (06) 501911",
  "website": "http://www.asroma.it",
  "email": "info@asromaweb.com",
  "founded": 1927,
  "clubColors": "Maroon / Orange / White",
  "venue": "Stadio Olimpico",
  "lastUpdated": "2019-08-29T02:58:13Z"
},
{
  "id": 102,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Atalanta BC",
  "shortName": "Atalanta",
  "tla": "ATA",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/28/Atalanta_BC.svg",
  "address": "Corso Europa, 46, Zingonia Ciserano 24040",
  "phone": "+39 (035) 4186211",
  "website": "http://www.atalanta.it",
  "email": "info@atalanta.it",
  "founded": 1904,
  "clubColors": "Black / Blue",
  "venue": "Stadio Atleti Azzurri d'Italia",
  "lastUpdated": "2019-08-29T02:58:15Z"
},
{
  "id": 103,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Bologna FC 1909",
  "shortName": "Bologna",
  "tla": "BOL",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/92/FC_Bologna.svg",
  "address": "Via Casteldebole 10 Bologna 40132",
  "phone": "+39 (051) 6111111",
  "website": "http://www.bolognafc.it",
  "email": "comunicazione@bolognafc.it",
  "founded": 1909,
  "clubColors": "Red / Blue / White",
  "venue": "Stadio Renato Dall'Ara",
  "lastUpdated": "2019-08-29T03:10:03Z"
},
{
  "id": 104,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Cagliari Calcio",
  "shortName": "Cagliari",
  "tla": "CAG",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/3/3d/Cagliari_Calcio.svg",
  "address": "Viale la Plaia 15 Cagliari 09123",
  "phone": "+39 (070) 604 201",
  "website": "http://www.cagliaricalcio.net",
  "email": "info@cagliaricalcio.net",
  "founded": 1920,
  "clubColors": "Red / Navy Blue / White",
  "venue": "Sardegna Arena",
  "lastUpdated": "2019-08-29T03:10:04Z"
},
{
  "id": 107,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Genoa CFC",
  "shortName": "Genoa",
  "tla": "GEN",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/7/76/Genoa_CFC.svg",
  "address": "Via Ronchi, 67 Genova 16155",
  "phone": "+39 (010) 612831",
  "website": "http://www.genoacfc.it",
  "email": "genoa@lega-calcio.it",
  "founded": 1893,
  "clubColors": "Red / Navy Blue",
  "venue": "Stadio Comunale Luigi Ferraris",
  "lastUpdated": "2019-08-29T03:10:09Z"
},
{
  "id": 108,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "FC Internazionale Milano",
  "shortName": "Inter",
  "tla": "INT",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/48/Internazionale_Milano_2014.svg",
  "address": "Corso Vittorio Emanuele II 9 Milano 20122",
  "phone": "+39 (02) 77151",
  "website": "http://www.inter.it",
  "email": "segreteriaccic@inter.it",
  "founded": 1908,
  "clubColors": "Blue / Black",
  "venue": "Stadio Giuseppe Meazza",
  "lastUpdated": "2019-09-01T11:14:12Z"
},
{
  "id": 109,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Juventus FC",
  "shortName": "Juve",
  "tla": "JUV",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg",
  "address": "Corso Galileo Ferraris, 32 Torino 10128",
  "phone": "+39 (011) 65631",
  "website": "http://www.juventus.com",
  "email": "francesco.gianello@juventus.com",
  "founded": 1897,
  "clubColors": "White / Black",
  "venue": "Allianz Stadium",
  "lastUpdated": "2019-08-29T02:58:22Z"
},
{
  "id": 110,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "SS Lazio",
  "shortName": "Lazio",
  "tla": "LAZ",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/thumb/4/47/Lazio_Rom.svg/500px-Lazio_Rom.svg.png",
  "address": "Via di Santa Cornelia, 1000 Formello 00060",
  "phone": "+39 (06) 976071",
  "website": "http://www.sslazio.it",
  "email": "segreteria.lazio@sslazio.it",
  "founded": 1900,
  "clubColors": "White / Sky Blue",
  "venue": "Stadio Olimpico",
  "lastUpdated": "2019-08-29T02:58:23Z"
},
{
  "id": 112,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Parma Calcio 1913",
  "shortName": "Parma",
  "tla": "PAR",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e2/FC_Parma.svg",
  "address": "Strada Carlo Pisacane, 4 Parma 43121",
  "phone": "+39 (521) 170591",
  "website": "http://www.parmacalcio1913.com",
  "email": "info@parmacalcio1913.com",
  "founded": 1913,
  "clubColors": "White / Black",
  "venue": "Stadio Ennio Tardini",
  "lastUpdated": "2019-08-29T03:10:10Z"
},
{
  "id": 113,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "SSC Napoli",
  "shortName": "Napoli",
  "tla": "NAP",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg",
  "address": "Centro Tecnico di Castel Volturno, Via S.S. Domitana, Km 35 Castel Volturno 81030",
  "phone": "+39 (081) 5095344",
  "website": "http://www.sscnapoli.it",
  "email": "infocalcio@sscn.it",
  "founded": 1904,
  "clubColors": "Sky Blue / White",
  "venue": "Stadio San Paolo",
  "lastUpdated": "2019-08-29T02:58:26Z"
},
{
  "id": 115,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Udinese Calcio",
  "shortName": "Udinese",
  "tla": "UDI",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b1/Udinese_Calcio.svg",
  "address": "Via Agostino e Angelo Candolini 2 Udine 33100",
  "phone": "+39 (0432) 544911",
  "website": "http://www.udinese.it",
  "email": "udinese@udinese.it",
  "founded": 1896,
  "clubColors": "White / Black",
  "venue": "Dacia Arena",
  "lastUpdated": "2019-08-29T03:10:12Z"
},
{
  "id": 449,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Brescia Calcio",
  "shortName": "Brescia",
  "tla": "BRE",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/23/Brescia_Calcio.svg",
  "address": "Via Novagani, 8 Brescia 25127",
  "phone": "+39 (030) 2410751",
  "website": "http://www.bresciacalcio.it",
  "email": "info@bresciacalcio.it",
  "founded": 1907,
  "clubColors": "Blue / White",
  "venue": "Stadio Mario Rigamonti",
  "lastUpdated": "2019-08-29T03:10:19Z"
},
{
  "id": 450,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Hellas Verona FC",
  "shortName": "Verona",
  "tla": "VER",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a2/Hellas_Verona_1903_FC.svg",
  "address": "Via Evangelista Torricelli, 37 Verona 37136",
  "phone": "+39 (045) 8186111",
  "website": "http://www.hellasverona.it",
  "email": "ufficiostampa@hellasverona.it",
  "founded": 1903,
  "clubColors": "Yellow / Blue",
  "venue": "Stadio Marc'Antonio Bentegodi",
  "lastUpdated": "2019-08-29T03:10:20Z"
},
{
  "id": 471,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "US Sassuolo Calcio",
  "shortName": "Sassuolo",
  "tla": "SAS",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a3/US_Sassuolo_Calcio.svg",
  "address": "Piazza Risorgimento, 47 Sassuolo 41049",
  "phone": "+39 (0536) 882645",
  "website": "http://www.sassuolocalcio.it",
  "email": "info@sassuolocalcio.it",
  "founded": 1922,
  "clubColors": "Green / Black",
  "venue": "Stadio Città del Tricolore",
  "lastUpdated": "2019-08-29T03:10:37Z"
},
{
  "id": 584,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "UC Sampdoria",
  "shortName": "Sampdoria",
  "tla": "SAM",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/de/9/9f/Sampdoria_Logo.png",
  "address": "Piazza Borgo Pila, 39 Genova 16129",
  "phone": "+39 (010) 5316711",
  "website": "http://www.sampdoria.it",
  "email": "info@sampdoria.it",
  "founded": 1946,
  "clubColors": "Blue / White / Red",
  "venue": "Stadio Comunale Luigi Ferraris",
  "lastUpdated": "2019-09-01T11:17:52Z"
},
{
  "id": 586,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "Torino FC",
  "shortName": "Torino",
  "tla": "TOR",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/2/2e/Torino_FC_Logo.svg",
  "address": "Via Arcivescovado 1 Torino 10122",
  "phone": "+39 (01) 11970034",
  "website": "http://www.torinofc.it",
  "email": "info@toro.it",
  "founded": 1894,
  "clubColors": "Brown / White",
  "venue": "Stadio Olimpico di Torino",
  "lastUpdated": "2019-08-29T02:58:33Z"
},
{
  "id": 1107,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "SPAL 2013",
  "shortName": "SPAL 2013",
  "tla": "SPA",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/de/e/e7/SPAL_Ferrara.svg",
  "address": "Corso Piave 28 Ferrara 44100",
  "phone": "+39 (0532) 52752",
  "website": "http://www.spal2013.it",
  "email": "info@spal1907.net",
  "founded": 1907,
  "clubColors": null,
  "venue": "Stadio Paolo Mazza",
  "lastUpdated": "2019-09-01T11:16:00Z"
},
{
  "id": 5890,
  "area": {
      "id": 2114,
      "name": "Italy"
  },
  "name": "US Lecce",
  "shortName": "Lecce",
  "tla": "LEC",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/de/c/c7/US_Lecce.svg",
  "address": "Via Templari 11 Lecce 73100",
  "phone": "+39 (0832) 240211",
  "website": "http://www.uslecce.it",
  "email": "info@uslecce.it",
  "founded": 1908,
  "clubColors": "Yellow / Red / Navy Blue",
  "venue": "Stadio Comunale Via Del Mare",
  "lastUpdated": "2019-09-01T11:14:40Z"
},
{
  "id": 57,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Arsenal FC",
  "shortName": "Arsenal",
  "tla": "ARS",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
  "address": "75 Drayton Park London N5 1BU",
  "phone": "+44 (020) 76195003",
  "website": "http://www.arsenal.com",
  "email": "info@arsenal.co.uk",
  "founded": 1886,
  "clubColors": "Red / White",
  "venue": "Emirates Stadium",
  "lastUpdated": "2019-08-29T02:42:28Z"
},
{
  "id": 58,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Aston Villa FC",
  "shortName": "Aston Villa",
  "tla": "AST",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
  "address": "Villa Park Birmingham B6 6HE",
  "phone": "+44 (0121) 3272299",
  "website": "http://www.avfc.co.uk",
  "email": null,
  "founded": 1872,
  "clubColors": "Claret / Sky Blue",
  "venue": "Villa Park",
  "lastUpdated": "2019-08-29T02:40:23Z"
},
{
  "id": 61,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Chelsea FC",
  "shortName": "Chelsea",
  "tla": "CHE",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg",
  "address": "Fulham Road London SW6 1HS",
  "phone": "+44 (0871) 9841955",
  "website": "http://www.chelseafc.com",
  "email": null,
  "founded": 1905,
  "clubColors": "Royal Blue / White",
  "venue": "Stamford Bridge",
  "lastUpdated": "2019-08-29T02:32:26Z"
},
{
  "id": 62,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Everton FC",
  "shortName": "Everton",
  "tla": "EVE",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
  "address": "Goodison Park Liverpool L4 4EL",
  "phone": "+44 (0871) 6631878",
  "website": "http://www.evertonfc.com",
  "email": "everton@evertonfc.com",
  "founded": 1878,
  "clubColors": "Blue / White",
  "venue": "Goodison Park",
  "lastUpdated": "2019-08-29T02:40:28Z"
},
{
  "id": 64,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Liverpool FC",
  "shortName": "Liverpool",
  "tla": "LIV",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
  "address": "Anfield Road Liverpool L4 OTH",
  "phone": "+44 (0844) 4993000",
  "website": "http://www.liverpoolfc.tv",
  "email": "customercontact@liverpoolfc.tv",
  "founded": 1892,
  "clubColors": "Red / White",
  "venue": "Anfield",
  "lastUpdated": "2019-08-29T02:32:28Z"
},
{
  "id": 65,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Manchester City FC",
  "shortName": "Man City",
  "tla": "MCI",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  "address": "SportCity Manchester M11 3FF",
  "phone": "+44 (0870) 0621894",
  "website": "https://www.mancity.com",
  "email": "mancity@mancity.com",
  "founded": 1880,
  "clubColors": "Sky Blue / White",
  "venue": "Etihad Stadium",
  "lastUpdated": "2019-08-29T02:32:29Z"
},
{
  "id": 66,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Manchester United FC",
  "shortName": "Man United",
  "tla": "MUN",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
  "address": "Sir Matt Busby Way Manchester M16 0RA",
  "phone": "+44 (0161) 8688000",
  "website": "http://www.manutd.com",
  "email": "enquiries@manutd.co.uk",
  "founded": 1878,
  "clubColors": "Red / White",
  "venue": "Old Trafford",
  "lastUpdated": "2019-08-29T02:42:30Z"
},
{
  "id": 67,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Newcastle United FC",
  "shortName": "Newcastle",
  "tla": "NEW",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg",
  "address": "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
  "phone": null,
  "website": "http://www.nufc.co.uk",
  "email": "admin@nufc.co.uk",
  "founded": 1881,
  "clubColors": "Black / White",
  "venue": "St. James' Park",
  "lastUpdated": "2019-08-29T02:40:30Z"
},
{
  "id": 68,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Norwich City FC",
  "shortName": "Norwich",
  "tla": "NOR",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/8/8c/Norwich_City.svg",
  "address": "Carrow Road Norwich NR1 1JE",
  "phone": null,
  "website": "http://www.canaries.co.uk",
  "email": "reception@ncfc-canaries.co.uk",
  "founded": 1902,
  "clubColors": "Yellow / Green",
  "venue": "Carrow Road",
  "lastUpdated": "2019-08-29T02:40:31Z"
},
{
  "id": 73,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Tottenham Hotspur FC",
  "shortName": "Tottenham",
  "tla": "TOT",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
  "address": "Bill Nicholson Way, 748 High Road London N17 OAP",
  "phone": "+44 (0844) 4995000",
  "website": "http://www.tottenhamhotspur.com",
  "email": "customer.care@tottenhamhotspur.com",
  "founded": 1882,
  "clubColors": "Navy Blue / White",
  "venue": "Tottenham Hotspur Stadium",
  "lastUpdated": "2019-08-29T02:32:31Z"
},
{
  "id": 76,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Wolverhampton Wanderers FC",
  "shortName": "Wolverhampton",
  "tla": "WOL",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
  "address": "Waterloo Road Wolverhampton WV1 4QR",
  "phone": "+44 (0871) 2222220",
  "website": "http://www.wolves.co.uk",
  "email": "info@wolves.co.uk",
  "founded": 1877,
  "clubColors": "Black / Gold",
  "venue": "Molineux Stadium",
  "lastUpdated": "2019-08-29T02:42:31Z"
},
{
  "id": 328,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Burnley FC",
  "shortName": "Burnley",
  "tla": "BUR",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png",
  "address": "Harry Potts Way Burnley BB10 4BX",
  "phone": "+44 (0871) 2211882",
  "website": "http://www.burnleyfootballclub.com",
  "email": "info@burnleyfc.com",
  "founded": 1881,
  "clubColors": "Claret / Sky Blue",
  "venue": "Turf Moor",
  "lastUpdated": "2019-08-29T02:40:44Z"
},
{
  "id": 338,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Leicester City FC",
  "shortName": "Leicester City",
  "tla": "LEI",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
  "address": "The Walkers Stadium, Filbert Way Leicester LE2 7FL",
  "phone": "+44 (0844) 8156000",
  "website": "http://www.lcfc.com",
  "email": null,
  "founded": 1884,
  "clubColors": "Royal Blue / White",
  "venue": "King Power Stadium",
  "lastUpdated": "2019-08-29T02:40:49Z"
},
{
  "id": 340,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Southampton FC",
  "shortName": "Southampton",
  "tla": "SOU",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg",
  "address": "Britannia Road Southampton SO14 5FP",
  "phone": null,
  "website": "http://www.saintsfc.co.uk",
  "email": "sfc@saintsfc.co.uk",
  "founded": 1885,
  "clubColors": "Red / White / Black",
  "venue": "St. Mary's Stadium",
  "lastUpdated": "2019-08-29T02:40:51Z"
},
{
  "id": 346,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Watford FC",
  "shortName": "Watford",
  "tla": "WAT",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
  "address": "Vicarage Road Watford WD18 0ER",
  "phone": null,
  "website": "http://www.watfordfc.com",
  "email": "yourvoice@watfordfc.com",
  "founded": 1881,
  "clubColors": "Yellow / Black",
  "venue": "Vicarage Road Stadium",
  "lastUpdated": "2019-08-29T02:40:59Z"
},
{
  "id": 354,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Crystal Palace FC",
  "shortName": "Crystal Palace",
  "tla": "CRY",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png",
  "address": "Whitehorse Lane London SE25 6PU",
  "phone": "+44 (020) 87686000",
  "website": "http://www.cpfc.co.uk",
  "email": "info@cpfc.co.uk",
  "founded": 1905,
  "clubColors": "Red / Blue",
  "venue": "Selhurst Park",
  "lastUpdated": "2019-08-29T02:41:06Z"
},
{
  "id": 356,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Sheffield United FC",
  "shortName": "Sheffield Utd",
  "tla": "SHE",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg",
  "address": "Bramall Lane Sheffield, Yorkshire S2 4SU",
  "phone": "+44 (0871) 9951899",
  "website": "http://www.sufc.co.uk",
  "email": "info@sufc.co.uk",
  "founded": null,
  "clubColors": "Red / White / Black",
  "venue": "Bramall Lane",
  "lastUpdated": "2019-08-29T02:41:09Z"
},
{
  "id": 397,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "Brighton & Hove Albion FC",
  "shortName": "Brighton Hove",
  "tla": "BHA",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
  "address": "44 North Road Brighton & Hove BN1 1YR",
  "phone": "+44 (01273) 878288",
  "website": "http://www.seagulls.co.uk",
  "email": "seagulls@bhafc.co.uk",
  "founded": 1898,
  "clubColors": "Blue / White",
  "venue": "The American Express Community Stadium",
  "lastUpdated": "2019-08-29T02:41:24Z"
},
{
  "id": 563,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "West Ham United FC",
  "shortName": "West Ham",
  "tla": "WHU",
  "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
  "address": "Green Street, Upton Park London E13 9AZ",
  "phone": "+44 (020) 85482794",
  "website": "http://www.whufc.com",
  "email": "yourcomments@westhamunited.co.uk",
  "founded": 1895,
  "clubColors": "Claret / Sky Blue",
  "venue": "London Stadium",
  "lastUpdated": "2019-08-29T02:41:33Z"
},
{
  "id": 1044,
  "area": {
      "id": 2072,
      "name": "England"
  },
  "name": "AFC Bournemouth",
  "shortName": "Bournemouth",
  "tla": "BOU",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg",
  "address": "Dean Court, Kings Park Bournemouth BH7 7AF",
  "phone": "+44 (01202) 726300",
  "website": "http://www.afcb.co.uk",
  "email": "admin@afcb.co.uk",
  "founded": 1890,
  "clubColors": "Red / Black",
  "venue": "Vitality Stadium",
  "lastUpdated": "2019-08-29T02:41:35Z"
}

]

// if there are some spelling mistakes make sure to ether delete the first objects in the
//database then (ctrl c) the go to the folder that has the seed.js in this case cd bin
// then type again "$node seed.js"
Liga.create(testing, (err) =>{
  if(err) { throw(err) }
  console.log(`Created ${testing.length} testing`)
  mongoose.connection.close();
})