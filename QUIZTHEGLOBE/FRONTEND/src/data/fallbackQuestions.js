const fallbackQuestions = [
  // Easy questions
  {
    id: 1,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of France?',
    choices: ['Paris', 'Lyon', 'Marseille', 'Nice'],
    answer: 'Paris',
    hint: 'It is known as the city of love.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
  },
  {
    id: 2,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Canada?',
    choices: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
    answer: 'Ottawa',
    hint: 'It is located in Ontario but is not the largest city.',
  },
  {
    id: 3,
    type: 'fill',
    difficulty: 'easy',
    prompt: 'Fill in the blank: The capital of Japan is ____. ',
    answer: 'Tokyo',
    hint: 'It hosted the 2020 Olympic Games.',
  },
  {
    id: 4,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'The capital of Australia is Sydney.',
    answer: false,
    hint: 'It starts with a C, not S.',
  },
  {
    id: 5,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'Cairo is the capital of Egypt.',
    answer: true,
    hint: 'It’s located near the Nile River.',
  },
  {
    id: 6,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of New Zealand?',
    choices: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
    answer: 'Wellington',
    hint: 'It’s located at the southern tip of the North Island.',
  },
  {
    id: 7,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Sweden?',
    choices: ['Gothenburg', 'Stockholm', 'Malmo', 'Uppsala'],
    answer: 'Stockholm',
  },
  {
    id: 8,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'Lisbon is the capital of Spain.',
    answer: false,
    hint: 'Lisbon is Portugal’s capital.',
  },
  {
    id: 9,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Portugal?',
    choices: ['Porto', 'Lisbon', 'Coimbra', 'Braga'],
    answer: 'Lisbon',
  },
  {
    id: 10,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'Oslo is the capital of Norway.',
    answer: true,
  },
  {
    id: 11,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Greece?',
    choices: ['Athens', 'Thessaloniki', 'Patras', 'Larissa'],
    answer: 'Athens',
  },
  {
    id: 12,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'The capital of Saudi Arabia is Riyadh.',
    answer: true,
  },
  {
    id: 13,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Egypt?',
    choices: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
    answer: 'Cairo',
  },
  {
    id: 14,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'The capital of Denmark is Copenhagen.',
    answer: true,
  },
  {
    id: 15,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'The capital of Poland is Krakow.',
    answer: false,
    hint: 'The capital is Warsaw.',
  },
  {
    id: 16,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'Kuala Lumpur is the capital of Indonesia.',
    answer: false,
    hint: 'It’s the capital of Malaysia.',
  },
  {
    id: 17,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Malaysia?',
    choices: ['Kuala Lumpur', 'George Town', 'Johor Bahru', 'Malacca'],
    answer: 'Kuala Lumpur',
  },
  {
    id: 18,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Cuba?',
    choices: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín'],
    answer: 'Havana',
  },
  {
    id: 19,
    type: 'trueFalse',
    difficulty: 'easy',
    prompt: 'The capital of Turkey is Istanbul.',
    answer: false,
    hint: 'Ankara is the capital.',
  },
  {
    id: 20,
    type: 'multiple',
    difficulty: 'easy',
    prompt: 'What is the capital of Indonesia?',
    choices: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
    answer: 'Jakarta',
  },

  // Medium questions
  {
    id: 21,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Brazil?',
    choices: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
    answer: 'Brasília',
    hint: 'It was built to be the capital.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Planalto_Palace_2017.jpg',
  },
  {
    id: 22,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of South Korea is ____. ',
    answer: 'Seoul',
    hint: 'It begins with "S".',
  },
  {
    id: 23,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Germany?',
    choices: ['Munich', 'Frankfurt', 'Berlin', 'Hamburg'],
    answer: 'Berlin',
    hint: 'It was divided during the Cold War.',
  },
  {
    id: 24,
    type: 'trueFalse',
    difficulty: 'medium',
    prompt: 'Rome is the capital of Italy.',
    answer: true,
    hint: 'It’s home to the Colosseum.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg',
  },
  {
    id: 25,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of India is ____. ',
    answer: 'New Delhi',
    hint: 'It starts with "New".',
  },
  {
    id: 26,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Russia?',
    choices: ['Moscow', 'Saint Petersburg', 'Kazan', 'Sochi'],
    answer: 'Moscow',
    hint: 'It’s known for Red Square.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Red_Square_-_Moscow_-_Russia_-_panoramio_%283%29.jpg',
  },
  {
    id: 27,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of China is ____. ',
    answer: 'Beijing',
    hint: 'It hosted the 2008 Summer Olympics.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Forbidden_City_Beijing_Shenwumen_Gate_1.jpg',
  },
  {
    id: 28,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Turkey is ____. ',
    answer: 'Ankara',
    hint: 'Not Istanbul, but central Turkey.',
  },
  {
    id: 29,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Argentina?',
    choices: ['Buenos Aires', 'Cordoba', 'Rosario', 'Mendoza'],
    answer: 'Buenos Aires',
  },
  {
    id: 30,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Mexico is ____. ',
    answer: 'Mexico City',
  },
  {
    id: 31,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Nigeria is ____. ',
    answer: 'Abuja',
  },
  {
    id: 32,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Chile is ____. ',
    answer: 'Santiago',
  },
  {
    id: 33,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Iraq is ____. ',
    answer: 'Baghdad',
  },
  {
    id: 34,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Ethiopia is ____. ',
    answer: 'Addis Ababa',
  },
  {
    id: 35,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Ukraine?',
    choices: ['Kyiv', 'Lviv', 'Odessa', 'Kharkiv'],
    answer: 'Kyiv',
  },
  {
    id: 36,
    type: 'multiple',
    difficulty: 'medium',
    prompt: 'What is the capital of Norway?',
    choices: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
    answer: 'Oslo',
  },
  {
    id: 37,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Morocco is ____. ',
    answer: 'Rabat',
  },
  {
    id: 38,
    type: 'trueFalse',
    difficulty: 'medium',
    prompt: 'The capital of South Africa is Johannesburg.',
    answer: false,
    hint: 'South Africa has three capitals; Pretoria is the administrative one.',
  },
  {
    id: 39,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Venezuela is ____. ',
    answer: 'Caracas',
  },
  {
    id: 40,
    type: 'fill',
    difficulty: 'medium',
    prompt: 'Fill in the blank: The capital of Peru is ____. ',
    answer: 'Lima',
  },

  // Hard questions
  {
    id: 41,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Bhutan is ____. ',
    answer: 'Thimphu',
  },
  {
    id: 42,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Kyrgyzstan?',
    choices: ['Bishkek', 'Almaty', 'Tashkent', 'Dushanbe'],
    answer: 'Bishkek',
  },
  {
    id: 43,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Suriname is ____. ',
    answer: 'Paramaribo',
  },
  {
    id: 44,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Eswatini?',
    choices: ['Mbabane', 'Lobamba', 'Manzini', 'Matsapha'],
    answer: 'Mbabane',
  },
  {
    id: 45,
    type: 'trueFalse',
    difficulty: 'hard',
    prompt: 'The capital of Liechtenstein is Vaduz.',
    answer: true,
  },
  {
    id: 46,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Tuvalu is ____. ',
    answer: 'Funafuti',
  },
  {
    id: 47,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Comoros?',
    choices: ['Moroni', 'Mutsamudu', 'Fomboni', 'Domoni'],
    answer: 'Moroni',
  },
  {
    id: 48,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Vanuatu is ____. ',
    answer: 'Port Vila',
  },
  {
    id: 49,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Maldives?',
    choices: ['Malé', 'Addu City', 'Fuvahmulah', 'Hulhumalé'],
    answer: 'Malé',
  },
  {
    id: 50,
    type: 'trueFalse',
    difficulty: 'hard',
    prompt: 'The capital of Seychelles is Victoria.',
    answer: true,
  },
  {
    id: 51,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Guinea-Bissau is ____. ',
    answer: 'Bissau',
  },
  {
    id: 52,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Montenegro?',
    choices: ['Podgorica', 'Cetinje', 'Nikšić', 'Herceg Novi'],
    answer: 'Podgorica',
  },
  {
    id: 53,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Malawi is ____. ',
    answer: 'Lilongwe',
  },
  {
    id: 54,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Central African Republic?',
    choices: ['Bangui', 'Berbérati', 'Bimbo', 'Carnot'],
    answer: 'Bangui',
  },
  {
    id: 55,
    type: 'trueFalse',
    difficulty: 'hard',
    prompt: 'The capital of Burkina Faso is Ouagadougou.',
    answer: true,
  },
  {
    id: 56,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Moldova is ____. ',
    answer: 'Chișinău',
  },
  {
    id: 57,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Bhutan?',
    choices: ['Thimphu', 'Phuntsholing', 'Punakha', 'Wangdue Phodrang'],
    answer: 'Thimphu',
  },
  {
    id: 58,
    type: 'multiple',
    difficulty: 'hard',
    prompt: 'What is the capital of Madagascar?',
    choices: ['Antananarivo', 'Toamasina', 'Fianarantsoa', 'Mahajanga'],
    answer: 'Antananarivo',
  },
  {
    id: 59,
    type: 'trueFalse',
    difficulty: 'hard',
    prompt: 'The capital of Andorra is Andorra la Vella.',
    answer: true,
  },
  {
    id: 60,
    type: 'fill',
    difficulty: 'hard',
    prompt: 'Fill in the blank: The capital of Laos is ____. ',
    answer: 'Vientiane',
  },
];

export default fallbackQuestions;
