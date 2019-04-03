const endangeredSpecies = [
  {
  "name": "Snow Leopard",
  "genus": "Panthera",
  "endangeredStatus": "Vulnerable",
  "locations": ["China", "Mongolia", "India"],
  "population": 6000,
  "threats": ["Poaching","Climate Change"],
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Snow_Leopard_in_Ladakh%28_Photo_by_Tashi_Lonchay%29.jpg"
  },
  {
  "name": "Jaguar",
  "genus": "Panthera",
  "endangeredStatus": "Near Threatened",
  "locations": ["Amazonian Brazil", "South America", "Central America", "Mexico" ],
  "population": "Unknown",
  "threats": ["Poaching", "Habitat Loss", "Human Intolerance" ],
  "image": "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  {
  "name": "Sumatran Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra" ],
  "population": 400,
  "threats": ["Poaching", "Habitat Loss", "Human Intolerance" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2090/images/hero_full/Sumatran-Tiger-Hero.jpg?1345559303"
  },
  {
  "name": "Amur Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["China", "Russia"],
  "population": 540,
  "threats": ["Poaching", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1588/images/story_full_width/Amur_Tiger_8.9.2012_Why_They_Matter1_HI_107001.jpg?1406644789"
  },
  {
  "name": "Bengal Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["India"],
  "population": 2500,
  "threats": ["Poaching", "Habitat Loss", "Prey Loss", "Human Intolerance" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/story_full_width/bengal-tiger-why-matter_7341043.jpg?1345548942"
  },
  { 
  "name": "Indochinese Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Endangered",
  "locations": ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam" ],
  "population": 350,
  "threats": ["Poaching", "Habitat Loss" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1624/images/story_full_width/Indochinese_TIger_8.9.2012_Why_They_Matter_MID_243229.jpg?1345549014"
  },
  { 
  "name": "South China Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Extinct in the Wild",
  "locations": ["China"],
  "population": 0,
  "threats": ["Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1640/images/story_full_width/shutterstock_87865615.jpg?1345549455"
  },
  { 
  "name": "Malayan Tiger",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Thailand"],
  "population": 275,
  "threats": ["Poaching", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1642/images/story_full_width/shutterstock_6107263.jpg?1345549509"
  },
  { 
  "name": "Amur Leopard",
  "genus": "Panthera",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Russia"],
  "population": 84,
  "threats": ["Poaching", "Prey Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/866/images/story_full_width/Amur-Leopard-Photo_2.jpg?1345532007"
  },
  { 
  "name": "African Elephant",
  "genus": "Loxodonta",
  "endangeredStatus": "Vulnerable",
  "locations": ["Africa"],
  "population": 415000,
  "threats": ["Poaching", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/882/images/hero_full/African_Elephant_7.27.2012_hero_and_circle_HI_53941.jpg?1345532748"
  },
  { 
  "name": "African Wild Dog",
  "genus": "Lycaon",
  "endangeredStatus": "Endangered",
  "locations": ["Africa"],
  "population": 1409,
  "threats": ["Disease", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/10341/images/hero_full/wild_dogs-web.jpg?1447180370"
  },
  { 
  "name": "Brown Bear",
  "genus": "Ursus",
  "endangeredStatus": "Least Concerned",
  "locations": ["United States", "Canada", "Russia"],
  "population": 110000,
  "threats": ["Hunting", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/16934/images/hero_full/Medium_WW266637.jpg?1551469111"
  },
  { 
  "name": "Giant Panda",
  "genus": "Ailuropoda",
  "endangeredStatus": "Vulnerable",
  "locations": ["China"],
  "population": 1864,
  "threats": ["Hunting", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/11551/images/hero_full/Bernard_de_wetter_wwf_canon_113974.jpg?1462218465"
  },
  { 
  "name": "Red Panda",
  "genus": "Ailurus",
  "endangeredStatus": "Endangered",
  "locations": ["Nepal", "Bhutan", "India", "Tibet", "Myanmar"],
  "population": 9000,
  "threats": ["Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/806/images/hero_full/SCR_47384.jpg?1345530917"
  },
  { 
  "name": "Polar Bear",
  "genus": "Ursus",
  "endangeredStatus": "Vulnerable",
  "locations": ["Arctic"],
  "population": 22000,
  "threats": ["Climate Change", "Human Contact", "Industrial Imapcts", "Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2330/images/hero_full/polar-bear-hero.jpg?1345901694"
  },
  { 
  "name": "Bison",
  "genus": "Bison",
  "endangeredStatus": "Near Threatened",
  "locations": ["United States", "Canada"],
  "population": 20504,
  "threats": ["Habitat Loss", "Genetics", "Political support of Bison Reintroduction"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/10646/images/hero_full/ThomasSzajner_20141004-20141004-KB1A5172.jpg?1452530740"
  },
  { 
  "name": "Hawksbills Turtle",
  "genus": "Eretmochelys",
  "endangeredStatus": "Critically Endangered",
  "locations": [ "Coral Triangle", "Coastal East Africa", "Mesoamerican Reef" ],
  "population": "Unknown",
  "threats": ["Poaching", "ByCatch" ],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1257/images/hero_full/SeaTurtle-1600x600px.jpg?1345590072"
  },
  { 
  "name": "Loggerhead  Turtle",
  "genus": "Caretta",
  "endangeredStatus": "Vulnerable",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle"],
  "population": "Unknown",
  "threats": ["ByCatch"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/297/images/hero_full/MID_110648loggerhead-hero.jpg?1345568357"
  },
  { 
  "name": "Leatherback Turtle",
  "genus": "Dermochelys",
  "endangeredStatus": "Vulnerable",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle", "The Galápagos"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Habitat Loss", "Overharvesting", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/319/images/story_full_width/SCR_105025.jpg?1345568794"
  },
  { 
  "name": "Green Turtle",
  "genus": "Chelonia",
  "endangeredStatus": "Endangered",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle", "The Galápagos"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Habitat Loss", "Overharvesting", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/322/images/hero_full/Green_Turtle_Hero_image_260214.jpg?1345519611"
  },
  { 
  "name": "Olive Ridley Turtle",
  "genus": "Lepidochelys",
  "endangeredStatus": "Endangered",
  "locations": ["Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "Coral Triangle"], 
  "population": "Unknown",
  "threats": ["ByCatch", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/418/images/hero_full/HI_287332Circle.jpg?1345522102"
  },
  { 
  "name": "Sumatran Elephant",
  "genus": "Elephas",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 2800,
  "threats": ["Poaching", "Deforestation", "Habitat Loss", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1683/images/hero_full/MID_247517.jpg?1345600799"
  },
  { 
  "name": "Sumatran Orangutan",
  "genus": "Pongo",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 14613,
  "threats": ["Hunting", "Deforestation", "Habitat Loss"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1365/images/hero_full/sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg?1345592809"
  },
  { 
  "name": "Bornean Orangutan",
  "genus": "Pongo",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Borneo", "Sumatra"], 
  "population": 104700,
  "threats": ["Illegal Wildlife Trade", "Deforestation", "Habitat Loss", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1145/images/hero_full/Bornean_Orangutan_8.1.2012_hero_and_circle_XL_279107.jpg?1345587030"
  },
  { 
  "name": "Saola",
  "genus": "Pseudoryx",
  "endangeredStatus": "Critically Endangered",
  "locations": ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"], 
  "population": "Unknown",
  "threats": ["Habitat Loss", "Hunting"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/156/images/hero_full/LG-Saola_Hero_image_%28c%29_David_Hulse_WWF_Canon.jpg?1345515547"
  },
  { 
  "name": "Black Rhino",
  "genus": "Diceros",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Namibia", "Africa"], 
  "population": 5000,
  "threats": ["Habitat Loss", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1376/images/hero_full/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg?1345543661"
  },
  { 
  "name": "Western Lowland Gorilla",
  "genus": "Gorilla",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Congo Basin", "Africa"],
  "population": "Unknown",
  "threats": ["Habitat Loss", "Deforestation", "Illegal WildLife Trade"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1108/images/hero_full/Western_lowland_gorilla_7.31.2012_hero_and_circle_HI_105208.jpg?1345537656"
  },
  { 
  "name": "Mountain Gorilla",
  "genus": "Gorilla",
  "endangeredStatus": "Endangered",
  "locations": ["Congo Basin", "Africa"],
  "population": 1000,
  "threats": ["Habitat Loss", "Disease", "Human Intolerance", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1719/images/hero_full/Mountain_Gorilla_8.10.2012_New_Hero_Image_HI_45487.jpg?1345601711"
  },
  { 
  "name": "Javan Rhino",
  "genus": "Rhinoceros",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Indonesia"],
  "population": 68,
  "threats": ["Habitat Loss", "Disease", "Human Intolerance", "Poaching"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/9496/images/hero_full/_H9A0249.jpg?1436885827"
  },
  { 
  "name": "Blue Whale",
  "genus": "Balaenoptera",
  "endangeredStatus": "Endangered",
  "locations": ["Southern Chile", "Gulf of California", "Coral Triangle"],
  "population": 25000,
  "threats": ["Habitat Loss", "Ship Strikes", "Fishing Nets", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/386/images/hero_full/MID_257828hero.jpg?1345521182"
  },
  { 
  "name": "Great White Shark",
  "genus": "Carcharodon",
  "endangeredStatus": "Vulnerable",
  "locations": ["Gulf of California", "Southern Chile", "The Galápagos", "Coastal East Africa"],
  "population": "Unknown",
  "threats": ["ByCatch", "Hunting", "Fishing Nets", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/1087/images/hero_full/Species_Great_White_Shark_WWF_Carlos_Aguilera.jpg?1345585501"
  },
  { 
  "name": "Galápagos Penguin",
  "genus": "Spheniscus",
  "endangeredStatus": "Endangered",
  "locations": ["The Galápagos"],
  "population": 2000,
  "threats": ["ByCatch", "Pollution", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/493/images/hero_full/shutterstock_89694280.jpg?1367330837"
  },
  { 
  "name": "Vaquita",
  "genus": "Phocoena",
  "endangeredStatus": "Critically Endangered",
  "locations": ["Gulf of California"],
  "population": 30,
  "threats": ["ByCatch"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/195/images/hero_full/Vaquita_1_Thomas_A_Jefferson_20081019.jpg?1345566367"
  },
  { 
  "name": "Bluefin Tuna",
  "genus": "Thunnus",
  "endangeredStatus": "Endangered",
  "locations": ["Coral Triangle"],
  "population": "Unknown",
  "threats": ["Pirate Fishing", "Overfishing"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2552/images/hero_full/Bluefin_tuna_253467.jpg?1348259069"
  },
  { 
  "name": "Irrawaddy Dolphin",
  "genus": "Orcaella",
  "endangeredStatus": "Endangered",
  "locations": ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"],
  "population": 92,
  "threats": ["ByCatch"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2715/images/hero_full/Mekong_Irrawaddy_Dolphin_breaching_%28c%29_WWF_Greater_Mekong.jpg?1421877230"
  },
  { 
  "name": "Indus River Dolphin",
  "genus": "Platanista",
  "endangeredStatus": "Endangered",
  "locations": ["Freshwaters"],
  "population": "1,816",
  "threats": ["ByCatch", "Hunting", "Polution"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/14861/images/hero_full/Indus_River_Dolphin.jpg?1513270520"
  },
  { 
  "name": "Black Spider Monkey",
  "genus": "Ateles Paniscus",
  "endangeredStatus": "Vulnerable",
  "locations": "Amazonian Brazil", 
  "population": "Unknown",
  "threats": ["Habitat Loss", "Hunting"],
  "image": "http://animalia.bio/uploads/animals/photos/full/1x1/black-spider-monkey-2.jpg"
  },
  { 
  "name": "Beluga Whale",
  "genus": "Delphinapterus Leucas",
  "endangeredStatus": "Near Threatened",
  "locations": "Arctic", 
  "population": 150000,
  "threats": ["Climate Change", "Human Intolerance"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/2942/images/story_full_width/beluga_224991.jpg?1353100459"
  },
  { 
  "name": "Narwhal",
  "genus": "Monodon monocero",
  "endangeredStatus": "Near Threatened",
  "locations": ["Arctic"],
  "population": 80000,
  "threats": ["ByCatch", "Pollution", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/493/images/hero_full/shutterstock_89694280.jpg?1367330837"
  },
  { 
  "name": "Sei Whale",
  "genus": "Balaenoptera borealis",
  "endangeredStatus": "Endangered",
  "locations": ["Southern Chile", "Arctic", "The Galapagos", "Coral Triangle", "Gulf of California", "Coastal East Africa"],
  "population": "Unknown",
  "threats": ["ByCatch", "Pollution", "Climate Change"],
  "image": "https://c402277.ssl.cf1.rackcdn.com/photos/493/images/hero_full/shutterstock_89694280.jpg?1367330837"
  }
]

const countries = [ 
  {
    "name": "China",
    "population": 1418791076,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society China", "link": "https://china.wcs.org"},
      {"name": "Save China's Tigers", "link": "https://savechinastigers.org/"}
    ]   
  },
  {
    "name": "Mongolia",
    "population": 3166244,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society - Mongolia", "link": "https://mongolia.wcs.org/"},
      {"name": "Wildlife Science and Conservation Center of Mongolia", "link": "http://www.wscc.org.mn/"} 
    ] 
  },
  {
    "name": "Amazonian Brazil",
    "population": 212392717,	
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society Brazil - Amazon", "link": "https://brasil.wcs.org/en-us/Wild-Places/Amazon.aspx"},
      {"name": "Protecting the Heart of the Amazon", "link": "https://www.rainforesttrust.org/about-us/"},
      {"name": "World Wildlife Fund Amazon", "link": "https://www.worldwildlife.org/places/amazon"},
      {"name": "Conservation International Amazonia", "link": "https://www.conservation.org/where/Pages/amazonia.aspx"}
    ]
  },
  {
    "name": "South America",
    "population": 431998475,
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Global Wildlife Conservation - South America", "link": "https://www.globalwildlife.org/our-work/regions/south-america/"},
      {"name": "Wildlife Conservation Society The Americas", "link": "https://www.wcs.org/our-work/places/americas"},
      {"name": "Wildlife Without Borders South America", "link":  "https://www.fws.gov/international/wildlife-without-borders/south-america/"}
    ]
  },
  {
    "name": "Central America",
    "population": 47448333,
    "topThreats": ["Deforestation", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Global Wildlife Conservation - Central America", "link": "https://www.globalwildlife.org/our-work/regions/central-america/"},
      {"name": "Wildlife Without Borders Central America", "link": "https://www.fws.gov/international/wildlife-without-borders/central-america/index.html"},
      {"name": "Wildlife Conservation Society The Americas", "link":  "https://www.wcs.org/our-work/places/americas"}
    ]
  },
  {
    "name": "Mexico",
    "population": 132328035,
    "topThreats": ["Climate Change", "Human Intolerance"],
    "conservationGroups": [
      {"name": "Defenders of Wildlife - Mexico", "link": "https://defenders.org/category/tags/mexico"},
      {"name": "Conservation International - Mexico", "link":  "https://www.conservation.org/where/Pages/Mexico.aspx"},
      {"name": "Wildlands Network - Mexico Program", "link": "https://wildlandsnetwork.org/wildways/western/mexico-program/"}
    ]
  },
  {
    "name": "Borneo",
    "population": 21258000,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Borneo Wildlife Conservation", "link": "https://www.gapyear.com/volunteering/borneo-wildlife-conservation"},
      {"name": "Wildlife Conservation in Borneo", "link":  "https://www.intrepidtravel.com/adventures/wildlife-conservation-borneo/"},
      {"name": "Borneo Wildlife Preservation", "link": "http://borneowp.org/"},
      {"name": "Borneo Nature Foundation", "link": "http://www.borneonaturefoundation.org/en/"}
    ]
  },
  {
    "name": "Sumatra",
    "population": 50180000, 
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Rainforest Trust", "link": "https://www.rainforesttrust.org/projects/saving-sumatras-rarest-wildlife/"},
      {"name": "Sumatra Rainforest Institute", "link": "http://sumatranrainforest.org/"},
      {"name": "The Sumatran Orangutan Conservation Programme ", "link": "https://www.sumatranorangutan.org/"}
    ]
  },
  {
    "name": "Russia",
    "population": 143912474,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Phoenix Trust", "link": "https://fundphoenix.org/en/"},
      {"name": "Friends of the Earth Russia", "link": "https://www.foei.org/member-groups/asia-pacific/russia"}
    ]
  },
  {
    "name": "Myanmar",
    "population": 143895551,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society Myanmar", "link": "https://myanmar.wcs.org/"},
      {"name": "Myanmar Biodiversity and Nature Conservation Association", "link": "https://www.birdlife.org/asia/partners/myanmar-biodiversity-and-nature-conservation-association-banca"},
      {"name": "Wildlife Conservation Society", "link": "https://myanmar.wcs.org/"}
    ]
  },
  {
    "name": "Laos",
    "population": 7037709,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Conservation Society Lao PDR", "link": "https://laos.wcs.org/"},
      {"name": "Elephant Conservation Center", "link": "https://www.elephantconservationcenter.com/"}
    ]
  },
  {
    "name": "Thailand",
    "population": 69306160,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Wildlife Friends Foundation Thailand", "link": "https://www.wfft.org/"},
      {"name": "Marine and Wildlife Conservation in Thailand", "link": "https://www.gvi.co.uk/programs/marine-and-wildlife-conservation-in-thailand/"},
      {"name": "Bird Conservation Society of Thailand", "link": "https://www.birdlife.org/asia/partners/thailand-bird-conservation-society-thailand-bcst"}
    ]
  },
  {
    "name": "Cambodia",
    "population": 16482646,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Save Cambodia's Wildlife", "link": "https://www.cambodiaswildlife.org/"},
      {"name": "Wildlife Conservation Society Cambodia", "link": "https://cambodia.wcs.org/"}
    ]
  },
  {
    "name": "Vietnam",
    "population": 97429061,	
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "WildAct", "link": "http://www.wildact-vn.org/#about"},
      {"name": "Save Vietnam’s Wildlife", "link": "https://www.svw.vn/"},
      {"name": "UNDP Vietnam", "link": "http://www.vn.undp.org/content/vietnam/en/home/ourwork/overview.html"}
    ]
  },
  {
    "name": "Africa",
    "population": 1287920518,
    "topThreats": ["Poaching", "Climate Change", "Habitat Loss"],
    "conservationGroups": [
      {"name": "Africa Conservation Society", "link": "https://africanconservation.org/"},
      {"name": "Wildlife Conservation Network", "link": "https://www.aidforafrica.org/member-charities/wildlife-conservation-network/"},
      {"name": "Africa Wildlife Foundation", "link": "https://www.awf.org/"},
      {"name": "The Nature Conservancy", "link": "https://www.nature.org/en-us/about-us/where-we-work/africa/"}
    ]
  },
  {
    "name": "United States",
    "population": 329093110,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"],
    "conservationGroups": [
      {"name": "Conservation International", "link": "https://www.conservation.org/Pages/default.aspx"},
      {"name": "The Nature Conservancy", "link": "https://www.nature.org/en-us/"},
      {"name": "Defenders of Wildlife", "link": "https://defenders.org/?_ga=2.144822388.1777316225.1554237095-876508993.1554060909&_gac=1.90652392.1554237095.Cj0KCQjwkIzlBRDzARIsABgXqV9UIPvnlBBn3V0v_xrl550jgW-DSd-ooi-04XXkVYjjeWy2U-FbiksaArZzEALw_wcB"},
      {"name": "Panthera", "link": "https://www.panthera.org/"},
      {"name": "World Wildlife Foundation", "link": "https://www.worldwildlife.org/"}
    ]
  },
  {
    "name": "Canada",
    "population": 37279811,	
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"],
    "conservationGroups": [
      {"name": "Connect with Nature Canada", "link": "https://naturecanada.ca/"},
      {"name": "Canadian Parks and Wilderness Society", "link": "http://www.cpaws.org/"},
      {"name": "Canadian Wildlife Federaton", "link": "http://www.cwf-fcf.org/en/?src=topleftlogo"}
    ]
  },
  {
    "name": "Nepal",
    "population": 29942018,	
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"],
    "conservationGroups": [ 
      {"name": "Wildlife Conservation Nepal", "link": "http://wcn.org.np/"}, 
      {"name": "World Wildlife Foundaton Nepal", "link": "http://www.wwfnepal.org/what_we_do/wildlife/"},
      {"name": "Governmet of Nepal", "link": "http://dof.gov.np/wildlife_conservation_program"}
    ]
  },
  {
    "name": "Bhutan",
    "population": 826229,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"],
    "conservationGroups": [ 
      {"name": "Bhutan Foundation", "link": "https://bhutanfound.org/projects/conserving-bhutans-mountain-tigers/"},
      {"name": "Royal Society for Protection of Nature", "link": "http://www.rspnbhutan.org/"}
    ]
  },
  {
    "name": "Tibet",
    "population": 3180000,
    "topThreats": ["Climate Change", "Habitat Loss", "Human Intolerance"],
    "conservationGroups": [ 
      {"name": "Tibet Natural Environment Conservation Network", "link": "http://www.tibetnature.net/en/welcome-to-tibet-natural-environment-conservation-network/"}, 
      {"name": "SnowLion Tours", "link": "https://snowliontours.com/welcome"}, 
      {"name": "Wildlife Conservation Society", "link": "https://china.wcs.org/Wild-Places/Chang-Tang-Tibet.aspx"} 
    ]
  },
  {
    "name": "Arctic",
    "population": 4000000,
    "topThreats": ["Climate Change", "Habitat Loss"],
    "conservationGroups": [ 
      {"name": "Alaska Conservation", "link": "https://alaskaconservation.org/protecting-alaska/priorities/protecting-lands-waters/arctic/"}, 
      {"name": "Ocean Conservancy", "link": "https://oceanconservancy.org/protecting-the-arctic/"}, 
      {"name": "World Wildlife Foundation Arctic", "link": "https://arcticwwf.org/"},
      {"name": "Conservation", "link": "https://www.caff.is/"}
    ]

  },
  {
    "name": "Coral Triangle",
    "population": 120000000,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "The Coral Triangle Initiative", "link": "http://www.coraltriangleinitiative.org/"}, 
      {"name": "Conservation International", "link": "https://www.conservation.org/projects/Pages/Coral-Triangle-Initiative-pacific-ocean-islands.aspx"} 
    ]
  },
  {
    "name": "Coastal East Africa",
    "population": "Unknown",
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "The East African Wildlife Society", "link": "https://eawildlife.org/marine/"}, 
      {"name": "African Wildlife Foundation", "link": "https://www.awf.org/"} 
    ]
  },
  {
    "name": "Mesoamerican Reef",
    "population": 2000000,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "MAR Fund", "link": "https://marfund.org/en/"}, 
      {"name": "Global Transboundary Conservation Network", "link": "http://www.tbpa.net/page.php?ndx=66"}
    ]
  },
  {
    "name": "Gulf of California",
    "population": "Unknown",
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "Biodiversity Funders Group", "link": "https://biodiversityfunders.org/programs/gulf-of-california-funders/"}, 
      {"name": "Wildcoast", "link": "http://wildcoast.org/"},
      {"name": "Mission Blue", "link": "https://mission-blue.org/2012/12/saving-the-wonders-of-the-sea-of-cortez/"}
    ]
  },
  {
    "name": "The Galápagos",
    "population": 25124,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "Galapagos Conservancy", "link": "https://www.galapagos.org/"}, 
      {"name": "Galapagos Conservation Trust", "link": "https://galapagosconservation.org.uk/"}
    ]
  },
  {
    "name": "Namibia",
    "population": 2627918,
    "topThreats": ["Climate Change", "Habitat Loss", "ByCatch"],
    "conservationGroups": [ 
      {"name": "Frontier", "link": "https://frontier.ac.uk/projects/263/Namibia-Wildlife-Conservation-&-Sanctuary"}, 
      {"name": "Naankuse", "link": "https://naankuse.com/"},
      {"name": "Namibia Wildlife Sanctuary", "link": "https://www.conservationtravelafrica.org/projects/5/namibia-wildlife-sanctuary"}
    ]
  },
  {
    "name": "Congo Basin",
    "population": 5542197,	
    "topThreats": ["Climate Change", "Habitat Loss", "Deforestation"],
    "conservationGroups": [ 
      {"name": "The Nature Conservancy", "link": "https://www.nature.org/en-us/about-us/where-we-work/africa/gabon/"} 
    ]
  },
  {
    "name": "Indonesia",
    "population": 269536482,
    "topThreats": ["Climate Change", "Habitat Loss", "Deforestation"],
    "conservationGroups": [ 
      {"name": "Conservation International", "link": "https://www.conservation.org/where/Pages/Indonesia.aspx"}, 
      {"name": "Cikananga Wildlife Center", "link": "http://www.cikanangawildlifecenter.com/"} 
    ]
  },
  {
    "name": "Southern Chile",
    "population": 18336653,
    "topThreats": ["Climate Change", "Habitat Loss"],
    "conservationGroups": [ 
      {"name": "The Nature Conservancy", "link": "https://www.nature.org/en-us/about-us/where-we-work/latin-america/chile/"}, 
      {"name": "Vaya Adventures", "link": "https://www.vayaadventures.com/blog/conservation-efforts-in-chile/"} 
    ]
  }
]

module.exports = {
  endangeredSpecies,
  countries
}