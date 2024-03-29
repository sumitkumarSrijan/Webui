﻿var country_arr = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

var country_phoneIndex = {
    "countries": [
              {
                  "-code": "af",
                  "-phoneCode": "93",
                  "-name": "Afghanistan"
              },
              {
                  "-code": "al",
                  "-phoneCode": "355",
                  "-name": "Albania"
              },
              {
                  "-code": "dz",
                  "-phoneCode": "213",
                  "-name": "Algeria"
              },
              {
                  "-code": "ad",
                  "-phoneCode": "376",
                  "-name": "Andorra"
              },
              {
                  "-code": "ao",
                  "-phoneCode": "244",
                  "-name": "Angola"
              },
              {
                  "-code": "aq",
                  "-phoneCode": "672",
                  "-name": "Antarctica"
              },
              {
                  "-code": "ar",
                  "-phoneCode": "54",
                  "-name": "Argentina"
              },
              {
                  "-code": "am",
                  "-phoneCode": "374",
                  "-name": "Armenia"
              },
              {
                  "-code": "aw",
                  "-phoneCode": "297",
                  "-name": "Aruba"
              },
              {
                  "-code": "au",
                  "-phoneCode": "61",
                  "-name": "Australia"
              },
              {
                  "-code": "at",
                  "-phoneCode": "43",
                  "-name": "Austria"
              },
              {
                  "-code": "az",
                  "-phoneCode": "994",
                  "-name": "Azerbaijan"
              },
              {
                  "-code": "bh",
                  "-phoneCode": "973",
                  "-name": "Bahrain"
              },
              {
                  "-code": "bd",
                  "-phoneCode": "880",
                  "-name": "Bangladesh"
              },
              {
                  "-code": "by",
                  "-phoneCode": "375",
                  "-name": "Belarus"
              },
              {
                  "-code": "be",
                  "-phoneCode": "32",
                  "-name": "Belgium"
              },
              {
                  "-code": "bz",
                  "-phoneCode": "501",
                  "-name": "Belize"
              },
              {
                  "-code": "bj",
                  "-phoneCode": "229",
                  "-name": "Benin"
              },
              {
                  "-code": "bt",
                  "-phoneCode": "975",
                  "-name": "Bhutan"
              },
              {
                  "-code": "bo",
                  "-phoneCode": "591",
                  "-name": "Bolivia, Plurinational State Of"
              },
              {
                  "-code": "ba",
                  "-phoneCode": "387",
                  "-name": "Bosnia And Herzegovina"
              },
              {
                  "-code": "bw",
                  "-phoneCode": "267",
                  "-name": "Botswana"
              },
              {
                  "-code": "br",
                  "-phoneCode": "55",
                  "-name": "Brazil"
              },
              {
                  "-code": "bn",
                  "-phoneCode": "673",
                  "-name": "Brunei Darussalam"
              },
              {
                  "-code": "bg",
                  "-phoneCode": "359",
                  "-name": "Bulgaria"
              },
              {
                  "-code": "bf",
                  "-phoneCode": "226",
                  "-name": "Burkina Faso"
              },
              {
                  "-code": "mm",
                  "-phoneCode": "95",
                  "-name": "Myanmar"
              },
              {
                  "-code": "bi",
                  "-phoneCode": "257",
                  "-name": "Burundi"
              },
              {
                  "-code": "kh",
                  "-phoneCode": "855",
                  "-name": "Cambodia"
              },
              {
                  "-code": "cm",
                  "-phoneCode": "237",
                  "-name": "Cameroon"
              },
              {
                  "-code": "ca",
                  "-phoneCode": "1",
                  "-name": "Canada"
              },
              {
                  "-code": "cv",
                  "-phoneCode": "238",
                  "-name": "Cape Verde"
              },
              {
                  "-code": "cf",
                  "-phoneCode": "236",
                  "-name": "Central African Republic"
              },
              {
                  "-code": "td",
                  "-phoneCode": "235",
                  "-name": "Chad"
              },
              {
                  "-code": "cl",
                  "-phoneCode": "56",
                  "-name": "Chile"
              },
              {
                  "-code": "cn",
                  "-phoneCode": "86",
                  "-name": "China"
              },
              {
                  "-code": "cx",
                  "-phoneCode": "61",
                  "-name": "Christmas Island"
              },
              {
                  "-code": "cc",
                  "-phoneCode": "61",
                  "-name": "Cocos (keeling) Islands"
              },
              {
                  "-code": "co",
                  "-phoneCode": "57",
                  "-name": "Colombia"
              },
              {
                  "-code": "km",
                  "-phoneCode": "269",
                  "-name": "Comoros"
              },
              {
                  "-code": "cg",
                  "-phoneCode": "242",
                  "-name": "Congo"
              },
              {
                  "-code": "cd",
                  "-phoneCode": "243",
                  "-name": "Congo, The Democratic Republic Of The"
              },
              {
                  "-code": "ck",
                  "-phoneCode": "682",
                  "-name": "Cook Islands"
              },
              {
                  "-code": "cr",
                  "-phoneCode": "506",
                  "-name": "Costa Rica"
              },
              {
                  "-code": "hr",
                  "-phoneCode": "385",
                  "-name": "Croatia"
              },
              {
                  "-code": "cu",
                  "-phoneCode": "53",
                  "-name": "Cuba"
              },
              {
                  "-code": "cy",
                  "-phoneCode": "357",
                  "-name": "Cyprus"
              },
              {
                  "-code": "cz",
                  "-phoneCode": "420",
                  "-name": "Czech Republic"
              },
              {
                  "-code": "dk",
                  "-phoneCode": "45",
                  "-name": "Denmark"
              },
              {
                  "-code": "dj",
                  "-phoneCode": "253",
                  "-name": "Djibouti"
              },
              {
                  "-code": "tl",
                  "-phoneCode": "670",
                  "-name": "Timor-leste"
              },
              {
                  "-code": "ec",
                  "-phoneCode": "593",
                  "-name": "Ecuador"
              },
              {
                  "-code": "eg",
                  "-phoneCode": "20",
                  "-name": "Egypt"
              },
              {
                  "-code": "sv",
                  "-phoneCode": "503",
                  "-name": "El Salvador"
              },
              {
                  "-code": "gq",
                  "-phoneCode": "240",
                  "-name": "Equatorial Guinea"
              },
              {
                  "-code": "er",
                  "-phoneCode": "291",
                  "-name": "Eritrea"
              },
              {
                  "-code": "ee",
                  "-phoneCode": "372",
                  "-name": "Estonia"
              },
              {
                  "-code": "et",
                  "-phoneCode": "251",
                  "-name": "Ethiopia"
              },
              {
                  "-code": "fk",
                  "-phoneCode": "500",
                  "-name": "Falkland Islands (malvinas)"
              },
              {
                  "-code": "fo",
                  "-phoneCode": "298",
                  "-name": "Faroe Islands"
              },
              {
                  "-code": "fj",
                  "-phoneCode": "679",
                  "-name": "Fiji"
              },
              {
                  "-code": "fi",
                  "-phoneCode": "358",
                  "-name": "Finland"
              },
              {
                  "-code": "fr",
                  "-phoneCode": "33",
                  "-name": "France"
              },
              {
                  "-code": "pf",
                  "-phoneCode": "689",
                  "-name": "French Polynesia"
              },
              {
                  "-code": "ga",
                  "-phoneCode": "241",
                  "-name": "Gabon"
              },
              {
                  "-code": "gm",
                  "-phoneCode": "220",
                  "-name": "Gambia"
              },
              {
                  "-code": "ge",
                  "-phoneCode": "995",
                  "-name": "Georgia"
              },
              {
                  "-code": "de",
                  "-phoneCode": "49",
                  "-name": "Germany"
              },
              {
                  "-code": "gh",
                  "-phoneCode": "233",
                  "-name": "Ghana"
              },
              {
                  "-code": "gi",
                  "-phoneCode": "350",
                  "-name": "Gibraltar"
              },
              {
                  "-code": "gr",
                  "-phoneCode": "30",
                  "-name": "Greece"
              },
              {
                  "-code": "gl",
                  "-phoneCode": "299",
                  "-name": "Greenland"
              },
              {
                  "-code": "gt",
                  "-phoneCode": "502",
                  "-name": "Guatemala"
              },
              {
                  "-code": "gn",
                  "-phoneCode": "224",
                  "-name": "Guinea"
              },
              {
                  "-code": "gw",
                  "-phoneCode": "245",
                  "-name": "Guinea-bissau"
              },
              {
                  "-code": "gy",
                  "-phoneCode": "592",
                  "-name": "Guyana"
              },
              {
                  "-code": "ht",
                  "-phoneCode": "509",
                  "-name": "Haiti"
              },
              {
                  "-code": "hn",
                  "-phoneCode": "504",
                  "-name": "Honduras"
              },
              {
                  "-code": "hk",
                  "-phoneCode": "852",
                  "-name": "Hong Kong"
              },
              {
                  "-code": "hu",
                  "-phoneCode": "36",
                  "-name": "Hungary"
              },
              {
                  "-code": "in",
                  "-phoneCode": "91",
                  "-name": "India"
              },
              {
                  "-code": "id",
                  "-phoneCode": "62",
                  "-name": "Indonesia"
              },
              {
                  "-code": "ir",
                  "-phoneCode": "98",
                  "-name": "Iran, Islamic Republic Of"
              },
              {
                  "-code": "iq",
                  "-phoneCode": "964",
                  "-name": "Iraq"
              },
              {
                  "-code": "ie",
                  "-phoneCode": "353",
                  "-name": "Ireland"
              },
              {
                  "-code": "im",
                  "-phoneCode": "44",
                  "-name": "Isle Of Man"
              },
              {
                  "-code": "il",
                  "-phoneCode": "972",
                  "-name": "Israel"
              },
              {
                  "-code": "it",
                  "-phoneCode": "39",
                  "-name": "Italy"
              },
              {
                  "-code": "ci",
                  "-phoneCode": "225",
                  "-name": "Côte D'ivoire"
              },
              {
                  "-code": "jp",
                  "-phoneCode": "81",
                  "-name": "Japan"
              },
              {
                  "-code": "jo",
                  "-phoneCode": "962",
                  "-name": "Jordan"
              },
              {
                  "-code": "kz",
                  "-phoneCode": "7",
                  "-name": "Kazakhstan"
              },
              {
                  "-code": "ke",
                  "-phoneCode": "254",
                  "-name": "Kenya"
              },
              {
                  "-code": "ki",
                  "-phoneCode": "686",
                  "-name": "Kiribati"
              },
              {
                  "-code": "kw",
                  "-phoneCode": "965",
                  "-name": "Kuwait"
              },
              {
                  "-code": "kg",
                  "-phoneCode": "996",
                  "-name": "Kyrgyzstan"
              },
              {
                  "-code": "la",
                  "-phoneCode": "856",
                  "-name": "Lao People's Democratic Republic"
              },
              {
                  "-code": "lv",
                  "-phoneCode": "371",
                  "-name": "Latvia"
              },
              {
                  "-code": "lb",
                  "-phoneCode": "961",
                  "-name": "Lebanon"
              },
              {
                  "-code": "ls",
                  "-phoneCode": "266",
                  "-name": "Lesotho"
              },
              {
                  "-code": "lr",
                  "-phoneCode": "231",
                  "-name": "Liberia"
              },
              {
                  "-code": "ly",
                  "-phoneCode": "218",
                  "-name": "Libya"
              },
              {
                  "-code": "li",
                  "-phoneCode": "423",
                  "-name": "Liechtenstein"
              },
              {
                  "-code": "lt",
                  "-phoneCode": "370",
                  "-name": "Lithuania"
              },
              {
                  "-code": "lu",
                  "-phoneCode": "352",
                  "-name": "Luxembourg"
              },
              {
                  "-code": "mo",
                  "-phoneCode": "853",
                  "-name": "Macao"
              },
              {
                  "-code": "mk",
                  "-phoneCode": "389",
                  "-name": "Macedonia, The Former Yugoslav Republic Of"
              },
              {
                  "-code": "mg",
                  "-phoneCode": "261",
                  "-name": "Madagascar"
              },
              {
                  "-code": "mw",
                  "-phoneCode": "265",
                  "-name": "Malawi"
              },
              {
                  "-code": "my",
                  "-phoneCode": "60",
                  "-name": "Malaysia"
              },
              {
                  "-code": "mv",
                  "-phoneCode": "960",
                  "-name": "Maldives"
              },
              {
                  "-code": "ml",
                  "-phoneCode": "223",
                  "-name": "Mali"
              },
              {
                  "-code": "mt",
                  "-phoneCode": "356",
                  "-name": "Malta"
              },
              {
                  "-code": "mh",
                  "-phoneCode": "692",
                  "-name": "Marshall Islands"
              },
              {
                  "-code": "mr",
                  "-phoneCode": "222",
                  "-name": "Mauritania"
              },
              {
                  "-code": "mu",
                  "-phoneCode": "230",
                  "-name": "Mauritius"
              },
              {
                  "-code": "yt",
                  "-phoneCode": "262",
                  "-name": "Mayotte"
              },
              {
                  "-code": "mx",
                  "-phoneCode": "52",
                  "-name": "Mexico"
              },
              {
                  "-code": "fm",
                  "-phoneCode": "691",
                  "-name": "Micronesia, Federated States Of"
              },
              {
                  "-code": "md",
                  "-phoneCode": "373",
                  "-name": "Moldova, Republic Of"
              },
              {
                  "-code": "mc",
                  "-phoneCode": "377",
                  "-name": "Monaco"
              },
              {
                  "-code": "mn",
                  "-phoneCode": "976",
                  "-name": "Mongolia"
              },
              {
                  "-code": "me",
                  "-phoneCode": "382",
                  "-name": "Montenegro"
              },
              {
                  "-code": "ma",
                  "-phoneCode": "212",
                  "-name": "Morocco"
              },
              {
                  "-code": "mz",
                  "-phoneCode": "258",
                  "-name": "Mozambique"
              },
              {
                  "-code": "na",
                  "-phoneCode": "264",
                  "-name": "Namibia"
              },
              {
                  "-code": "nr",
                  "-phoneCode": "674",
                  "-name": "Nauru"
              },
              {
                  "-code": "np",
                  "-phoneCode": "977",
                  "-name": "Nepal"
              },
              {
                  "-code": "nl",
                  "-phoneCode": "31",
                  "-name": "Netherlands"
              },
              {
                  "-code": "nc",
                  "-phoneCode": "687",
                  "-name": "New Caledonia"
              },
              {
                  "-code": "nz",
                  "-phoneCode": "64",
                  "-name": "New Zealand"
              },
              {
                  "-code": "ni",
                  "-phoneCode": "505",
                  "-name": "Nicaragua"
              },
              {
                  "-code": "ne",
                  "-phoneCode": "227",
                  "-name": "Niger"
              },
              {
                  "-code": "ng",
                  "-phoneCode": "234",
                  "-name": "Nigeria"
              },
              {
                  "-code": "nu",
                  "-phoneCode": "683",
                  "-name": "Niue"
              },
              {
                  "-code": "kp",
                  "-phoneCode": "850",
                  "-name": "Korea, Democratic People's Republic Of"
              },
              {
                  "-code": "no",
                  "-phoneCode": "47",
                  "-name": "Norway"
              },
              {
                  "-code": "om",
                  "-phoneCode": "968",
                  "-name": "Oman"
              },
              {
                  "-code": "pk",
                  "-phoneCode": "92",
                  "-name": "Pakistan"
              },
              {
                  "-code": "pw",
                  "-phoneCode": "680",
                  "-name": "Palau"
              },
              {
                  "-code": "pa",
                  "-phoneCode": "507",
                  "-name": "Panama"
              },
              {
                  "-code": "pg",
                  "-phoneCode": "675",
                  "-name": "Papua New Guinea"
              },
              {
                  "-code": "py",
                  "-phoneCode": "595",
                  "-name": "Paraguay"
              },
              {
                  "-code": "pe",
                  "-phoneCode": "51",
                  "-name": "Peru"
              },
              {
                  "-code": "ph",
                  "-phoneCode": "63",
                  "-name": "Philippines"
              },
              {
                  "-code": "pn",
                  "-phoneCode": "870",
                  "-name": "Pitcairn"
              },
              {
                  "-code": "pl",
                  "-phoneCode": "48",
                  "-name": "Poland"
              },
              {
                  "-code": "pt",
                  "-phoneCode": "351",
                  "-name": "Portugal"
              },
              {
                  "-code": "pr",
                  "-phoneCode": "1",
                  "-name": "Puerto Rico"
              },
              {
                  "-code": "qa",
                  "-phoneCode": "974",
                  "-name": "Qatar"
              },
              {
                  "-code": "ro",
                  "-phoneCode": "40",
                  "-name": "Romania"
              },
              {
                  "-code": "ru",
                  "-phoneCode": "7",
                  "-name": "Russian Federation"
              },
              {
                  "-code": "rw",
                  "-phoneCode": "250",
                  "-name": "Rwanda"
              },
              {
                  "-code": "bl",
                  "-phoneCode": "590",
                  "-name": "Saint Barthélemy"
              },
              {
                  "-code": "ws",
                  "-phoneCode": "685",
                  "-name": "Samoa"
              },
              {
                  "-code": "sm",
                  "-phoneCode": "378",
                  "-name": "San Marino"
              },
              {
                  "-code": "st",
                  "-phoneCode": "239",
                  "-name": "Sao Tome And Principe"
              },
              {
                  "-code": "sa",
                  "-phoneCode": "966",
                  "-name": "Saudi Arabia"
              },
              {
                  "-code": "sn",
                  "-phoneCode": "221",
                  "-name": "Senegal"
              },
              {
                  "-code": "rs",
                  "-phoneCode": "381",
                  "-name": "Serbia"
              },
              {
                  "-code": "sc",
                  "-phoneCode": "248",
                  "-name": "Seychelles"
              },
              {
                  "-code": "sl",
                  "-phoneCode": "232",
                  "-name": "Sierra Leone"
              },
              {
                  "-code": "sg",
                  "-phoneCode": "65",
                  "-name": "Singapore"
              },
              {
                  "-code": "sk",
                  "-phoneCode": "421",
                  "-name": "Slovakia"
              },
              {
                  "-code": "si",
                  "-phoneCode": "386",
                  "-name": "Slovenia"
              },
              {
                  "-code": "sb",
                  "-phoneCode": "677",
                  "-name": "Solomon Islands"
              },
              {
                  "-code": "so",
                  "-phoneCode": "252",
                  "-name": "Somalia"
              },
              {
                  "-code": "za",
                  "-phoneCode": "27",
                  "-name": "South Africa"
              },
              {
                  "-code": "kr",
                  "-phoneCode": "82",
                  "-name": "Korea, Republic Of"
              },
              {
                  "-code": "es",
                  "-phoneCode": "34",
                  "-name": "Spain"
              },
              {
                  "-code": "lk",
                  "-phoneCode": "94",
                  "-name": "Sri Lanka"
              },
              {
                  "-code": "sh",
                  "-phoneCode": "290",
                  "-name": "Saint Helena, Ascension And Tristan Da Cunha"
              },
              {
                  "-code": "pm",
                  "-phoneCode": "508",
                  "-name": "Saint Pierre And Miquelon"
              },
              {
                  "-code": "sd",
                  "-phoneCode": "249",
                  "-name": "Sudan"
              },
              {
                  "-code": "sr",
                  "-phoneCode": "597",
                  "-name": "Suriname"
              },
              {
                  "-code": "sz",
                  "-phoneCode": "268",
                  "-name": "Swaziland"
              },
              {
                  "-code": "se",
                  "-phoneCode": "46",
                  "-name": "Sweden"
              },
              {
                  "-code": "ch",
                  "-phoneCode": "41",
                  "-name": "Switzerland"
              },
              {
                  "-code": "sy",
                  "-phoneCode": "963",
                  "-name": "Syrian Arab Republic"
              },
              {
                  "-code": "tw",
                  "-phoneCode": "886",
                  "-name": "Taiwan, Province Of China"
              },
              {
                  "-code": "tj",
                  "-phoneCode": "992",
                  "-name": "Tajikistan"
              },
              {
                  "-code": "tz",
                  "-phoneCode": "255",
                  "-name": "Tanzania, United Republic Of"
              },
              {
                  "-code": "th",
                  "-phoneCode": "66",
                  "-name": "Thailand"
              },
              {
                  "-code": "tg",
                  "-phoneCode": "228",
                  "-name": "Togo"
              },
              {
                  "-code": "tk",
                  "-phoneCode": "690",
                  "-name": "Tokelau"
              },
              {
                  "-code": "to",
                  "-phoneCode": "676",
                  "-name": "Tonga"
              },
              {
                  "-code": "tn",
                  "-phoneCode": "216",
                  "-name": "Tunisia"
              },
              {
                  "-code": "tr",
                  "-phoneCode": "90",
                  "-name": "Turkey"
              },
              {
                  "-code": "tm",
                  "-phoneCode": "993",
                  "-name": "Turkmenistan"
              },
              {
                  "-code": "tv",
                  "-phoneCode": "688",
                  "-name": "Tuvalu"
              },
              {
                  "-code": "ae",
                  "-phoneCode": "971",
                  "-name": "United Arab Emirates"
              },
              {
                  "-code": "ug",
                  "-phoneCode": "256",
                  "-name": "Uganda"
              },
              {
                  "-code": "gb",
                  "-phoneCode": "44",
                  "-name": "United Kingdom"
              },
              {
                  "-code": "ua",
                  "-phoneCode": "380",
                  "-name": "Ukraine"
              },
              {
                  "-code": "uy",
                  "-phoneCode": "598",
                  "-name": "Uruguay"
              },
              {
                  "-code": "us",
                  "-phoneCode": "1",
                  "-name": "United States"
              },
              {
                  "-code": "uz",
                  "-phoneCode": "998",
                  "-name": "Uzbekistan"
              },
              {
                  "-code": "vu",
                  "-phoneCode": "678",
                  "-name": "Vanuatu"
              },
              {
                  "-code": "va",
                  "-phoneCode": "39",
                  "-name": "Holy See (vatican City State)"
              },
              {
                  "-code": "ve",
                  "-phoneCode": "58",
                  "-name": "Venezuela, Bolivarian Republic Of"
              },
              {
                  "-code": "vn",
                  "-phoneCode": "84",
                  "-name": "Viet Nam"
              },
              {
                  "-code": "wf",
                  "-phoneCode": "681",
                  "-name": "Wallis And Futuna"
              },
              {
                  "-code": "ye",
                  "-phoneCode": "967",
                  "-name": "Yemen"
              },
              {
                  "-code": "zm",
                  "-phoneCode": "260",
                  "-name": "Zambia"
              },
              {
                  "-code": "zw",
                  "-phoneCode": "263",
                  "-name": "Zimbabwe"
              }
    ]
};
function print_country(country_id) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(country_id);
    option_str.length = 0;
    option_str.options[0] = new Option(Resources.SelectCountry, '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        option_str.options[option_str.length] = new Option(country_arr[i], country_arr[i]);
    }
}
function print_state(state_id, state_index) {
    var option_str = document.getElementById(state_id);
    option_str.length = 0;	// Fixed by Julian Woods
    option_str.options[0] = new Option(Resources.SelectState, '');
    option_str.selectedIndex = 0;
    var state_arr = s_a[state_index].split("|");
    for (var i = 0; i < state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
    }
}
function getstates(countryname) {
    try {
        var country = countries_json[countryname];
        return country.states
    } catch (e) {
        console.error("error resolving countries", e);
    }

}