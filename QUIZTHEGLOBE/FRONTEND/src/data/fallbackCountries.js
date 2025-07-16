const fallbackCountries = [
  {
    "id": 1,
    "name": "Afghanistan 1",
    "capital": "Kabul",
    "population": 39310736,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 2,
    "name": "New Zealand 2",
    "capital": "Wellington",
    "population": 4868332,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 3,
    "name": "New Zealand 3",
    "capital": "Wellington",
    "population": 4750852,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 4,
    "name": "Afghanistan 4",
    "capital": "Kabul",
    "population": 38769885,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 5,
    "name": "Japan 5",
    "capital": "Tokyo",
    "population": 126408650,
    "currency": "Japanese yen",
    "alpha2Code": "JP",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/jp.png"
    }
  },
  {
    "id": 6,
    "name": "Brazil 6",
    "capital": "Bras\u00edlia",
    "population": 212530223,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 7,
    "name": "Japan 7",
    "capital": "Tokyo",
    "population": 126430534,
    "currency": "Japanese yen",
    "alpha2Code": "JP",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/jp.png"
    }
  },
  {
    "id": 8,
    "name": "Afghanistan 8",
    "capital": "Kabul",
    "population": 38989748,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 9,
    "name": "France 9",
    "capital": "Paris",
    "population": 65016925,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  },
  {
    "id": 10,
    "name": "Germany 10",
    "capital": "Berlin",
    "population": 84260576,
    "currency": "Euro",
    "alpha2Code": "DE",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/de.png"
    }
  },
  {
    "id": 11,
    "name": "India 11",
    "capital": "New Delhi",
    "population": 1380470505,
    "currency": "Indian rupee",
    "alpha2Code": "IN",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/in.png"
    }
  },
  {
    "id": 12,
    "name": "Brazil 12",
    "capital": "Bras\u00edlia",
    "population": 212757098,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 13,
    "name": "India 13",
    "capital": "New Delhi",
    "population": 1379557450,
    "currency": "Indian rupee",
    "alpha2Code": "IN",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/in.png"
    }
  },
  {
    "id": 14,
    "name": "Brazil 14",
    "capital": "Bras\u00edlia",
    "population": 212665684,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 15,
    "name": "Germany 15",
    "capital": "Berlin",
    "population": 83983131,
    "currency": "Euro",
    "alpha2Code": "DE",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/de.png"
    }
  },
  {
    "id": 16,
    "name": "South Africa 16",
    "capital": "Pretoria",
    "population": 59609871,
    "currency": "South African rand",
    "alpha2Code": "ZA",
    "region": "Africa",
    "media": {
      "flag": "https://flagcdn.com/w320/za.png"
    }
  },
  {
    "id": 17,
    "name": "Canada 17",
    "capital": "Ottawa",
    "population": 38196517,
    "currency": "Canadian dollar",
    "alpha2Code": "CA",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/ca.png"
    }
  },
  {
    "id": 18,
    "name": "New Zealand 18",
    "capital": "Wellington",
    "population": 5198473,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 19,
    "name": "India 19",
    "capital": "New Delhi",
    "population": 1380362507,
    "currency": "Indian rupee",
    "alpha2Code": "IN",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/in.png"
    }
  },
  {
    "id": 20,
    "name": "Italy 20",
    "capital": "Rome",
    "population": 60609756,
    "currency": "Euro",
    "alpha2Code": "IT",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/it.png"
    }
  },
  {
    "id": 21,
    "name": "Italy 21",
    "capital": "Rome",
    "population": 60158382,
    "currency": "Euro",
    "alpha2Code": "IT",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/it.png"
    }
  },
  {
    "id": 22,
    "name": "France 22",
    "capital": "Paris",
    "population": 65510740,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  },
  {
    "id": 23,
    "name": "New Zealand 23",
    "capital": "Wellington",
    "population": 4577928,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 24,
    "name": "France 24",
    "capital": "Paris",
    "population": 65233043,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  },
  {
    "id": 25,
    "name": "Italy 25",
    "capital": "Rome",
    "population": 60648485,
    "currency": "Euro",
    "alpha2Code": "IT",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/it.png"
    }
  },
  {
    "id": 26,
    "name": "Brazil 26",
    "capital": "Bras\u00edlia",
    "population": 212445792,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 27,
    "name": "Afghanistan 27",
    "capital": "Kabul",
    "population": 38871312,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 28,
    "name": "Brazil 28",
    "capital": "Bras\u00edlia",
    "population": 213020316,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 29,
    "name": "France 29",
    "capital": "Paris",
    "population": 65534716,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  },
  {
    "id": 30,
    "name": "Japan 30",
    "capital": "Tokyo",
    "population": 126299506,
    "currency": "Japanese yen",
    "alpha2Code": "JP",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/jp.png"
    }
  },
  {
    "id": 31,
    "name": "Japan 31",
    "capital": "Tokyo",
    "population": 126500993,
    "currency": "Japanese yen",
    "alpha2Code": "JP",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/jp.png"
    }
  },
  {
    "id": 32,
    "name": "New Zealand 32",
    "capital": "Wellington",
    "population": 4372195,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 33,
    "name": "New Zealand 33",
    "capital": "Wellington",
    "population": 4584665,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 34,
    "name": "India 34",
    "capital": "New Delhi",
    "population": 1380398220,
    "currency": "Indian rupee",
    "alpha2Code": "IN",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/in.png"
    }
  },
  {
    "id": 35,
    "name": "Canada 35",
    "capital": "Ottawa",
    "population": 38207787,
    "currency": "Canadian dollar",
    "alpha2Code": "CA",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/ca.png"
    }
  },
  {
    "id": 36,
    "name": "Canada 36",
    "capital": "Ottawa",
    "population": 37562993,
    "currency": "Canadian dollar",
    "alpha2Code": "CA",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/ca.png"
    }
  },
  {
    "id": 37,
    "name": "New Zealand 37",
    "capital": "Wellington",
    "population": 5020768,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 38,
    "name": "Afghanistan 38",
    "capital": "Kabul",
    "population": 39197966,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 39,
    "name": "France 39",
    "capital": "Paris",
    "population": 65457050,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  },
  {
    "id": 40,
    "name": "Afghanistan 40",
    "capital": "Kabul",
    "population": 39386939,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 41,
    "name": "Canada 41",
    "capital": "Ottawa",
    "population": 37334551,
    "currency": "Canadian dollar",
    "alpha2Code": "CA",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/ca.png"
    }
  },
  {
    "id": 42,
    "name": "New Zealand 42",
    "capital": "Wellington",
    "population": 5202211,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 43,
    "name": "New Zealand 43",
    "capital": "Wellington",
    "population": 5133826,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 44,
    "name": "Brazil 44",
    "capital": "Bras\u00edlia",
    "population": 212731235,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 45,
    "name": "Afghanistan 45",
    "capital": "Kabul",
    "population": 38667988,
    "currency": "Afghan afghani",
    "alpha2Code": "AF",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/af.png"
    }
  },
  {
    "id": 46,
    "name": "Brazil 46",
    "capital": "Bras\u00edlia",
    "population": 212205566,
    "currency": "Brazilian real",
    "alpha2Code": "BR",
    "region": "Americas",
    "media": {
      "flag": "https://flagcdn.com/w320/br.png"
    }
  },
  {
    "id": 47,
    "name": "India 47",
    "capital": "New Delhi",
    "population": 1379725601,
    "currency": "Indian rupee",
    "alpha2Code": "IN",
    "region": "Asia",
    "media": {
      "flag": "https://flagcdn.com/w320/in.png"
    }
  },
  {
    "id": 48,
    "name": "New Zealand 48",
    "capital": "Wellington",
    "population": 4679678,
    "currency": "New Zealand dollar",
    "alpha2Code": "NZ",
    "region": "Oceania",
    "media": {
      "flag": "https://flagcdn.com/w320/nz.png"
    }
  },
  {
    "id": 49,
    "name": "Germany 49",
    "capital": "Berlin",
    "population": 83760641,
    "currency": "Euro",
    "alpha2Code": "DE",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/de.png"
    }
  },
  {
    "id": 50,
    "name": "France 50",
    "capital": "Paris",
    "population": 65613711,
    "currency": "Euro",
    "alpha2Code": "FR",
    "region": "Europe",
    "media": {
      "flag": "https://flagcdn.com/w320/fr.png"
    }
  }
];

export default fallbackCountries;