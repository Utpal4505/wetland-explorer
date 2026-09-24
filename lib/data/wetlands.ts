import { Wetland } from "@/types/wetland";

export const WETLANDS_DATA: Wetland[] = [
  {
    id: "chilika-lake",
    name: "Chilika Lake",
    state: "Odisha",
    country: "India",
    coordinates: { lat: 19.7183, lng: 85.3211 },
    designation: "Ramsar Site",
    designationYear: 1981,
    areaKm2: 1165,
    elevationMeters: 2,
    biogeographicZone: "East Coast Biogeographical Zone",
    category: "Brackish Lagoon",
    shortDescription:
      "Asia's largest brackish water lagoon, spanning three coastal districts and providing crucial sanctuary for the rare, endangered Irrawaddy dolphin population.",
    overview:
      "Chilika Lake is a vast shallow brackish water lagoon situated along the east coast of Odisha, separated from the Bay of Bengal by a 60-kilometer-long narrow barrier spit. Fed by more than 52 rivers and streams including the Daya and Bhargabi rivers, it experiences a dynamic seasonal shift between freshwater during the monsoon and marine salinity during dry periods.",
    importance: {
      ecological:
        "Acts as a major coastal sediment sink and natural nutrient recycling zone, mitigating floodwaters from the Mahanadi river basin before discharging into the Bay of Bengal.",
      wildlife:
        "India's largest wintering ground for migratory waterfowl on the Central Asian Flyway, hosting over a million birds annually along with the flagship Irrawaddy dolphin (Orcaella brevirostris).",
      local:
        "Directly sustains the livelihoods of over 150,000 traditional fisherfolk across 132 coastal villages and supports eco-tourism centered around Satapada.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Shallow brackish channels and barrier sandbars of Chilika Lake, Odisha.",
    keyWildlife: [
      "Irrawaddy Dolphin",
      "Greater Flamingo",
      "White-bellied Sea Eagle",
      "Fishing Cat",
      "Green Sea Turtle",
    ],
    threats: [
      {
        title: "Siltation & Canal Choking",
        description:
          "Upstream catchment deforestation leads to heavy sediment deposition, reducing lagoon depth and shifting mouth opening dynamics.",
        severity: "High",
      },
      {
        title: "Intensive Aquaculture Ponds",
        description:
          "Illegal prawn gherries (encroachments) alter localized water circulation and degrade natural seagrass beds.",
        severity: "Moderate",
      },
      {
        title: "Agricultural Runoff",
        description:
          "Chemical fertilizers from neighboring delta farmlands trigger localized algal blooms and eutrophication in shallow bays.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Chilika Lake",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/229",
      },
      {
        title: "Ecological Restoration and Hydrological Dynamics of Chilika Lagoon",
        organization: "Chilika Development Authority (CDA) & MoEFCC",
        year: 2018,
        citationType: "Government Gazette",
      },
      {
        title: "Status and Distribution of Irrawaddy Dolphins in Chilika",
        organization: "Wildlife Institute of India (WII)",
        year: 2021,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "sundarbans-wetland",
    name: "Sundarbans Wetland",
    state: "West Bengal",
    country: "India",
    coordinates: { lat: 21.9497, lng: 88.8999 },
    designation: "Ramsar Site",
    designationYear: 2019,
    areaKm2: 4230,
    elevationMeters: 3,
    biogeographicZone: "Ganga-Brahmaputra Deltaic Estuary",
    category: "Mangrove Swamps",
    shortDescription:
      "The world's largest contiguous tidal halophytic mangrove forest, spanning the delta of the Ganga, Brahmaputra, and Meghna rivers.",
    overview:
      "Covering the low-lying coastal plains of southern West Bengal, the Sundarbans Wetland represents an intricate labyrinth of tidal waterways, mudflats, and halophytic mangrove islands. Shaped by twice-daily tidal inundations and extreme salinity gradients, it forms a vital natural defense barrier protecting the Kolkata metropolitan hinterland.",
    importance: {
      ecological:
        "Functions as a monumental bio-shield dampening the fury of tropical cyclones from the Bay of Bengal while storing immense quantities of blue carbon in dense peat soils.",
      wildlife:
        "The sole mangrove habitat in the world colonized by the Royal Bengal Tiger (Panthera tigris tigris), co-existing with estuarine crocodiles and critically endangered northern river terrapins.",
      local:
        "Provides non-timber forest produce including wild mangrove honey, nypa palm thatch, and estuarine crab fisheries vital to islanders.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Dense tidal mangrove creeks and aerial roots in the Sundarbans Biosphere.",
    keyWildlife: [
      "Royal Bengal Tiger",
      "Estuarine Crocodile",
      "Fishing Cat",
      "Northern River Terrapin",
      "Irrawaddy Dolphin",
    ],
    threats: [
      {
        title: "Sea-Level Rise & Coastal Erosion",
        description:
          "Accelerated marine encroachment submerges fringe islands and salinizes freshwater aquifers across the delta.",
        severity: "Severe",
      },
      {
        title: "Reduced Freshwater Discharge",
        description:
          "Upstream river diversions increase salinity in western channels, degrading sensitive sundari (Heritiera fomes) tree stands.",
        severity: "High",
      },
      {
        title: "Frequent Severe Cyclones",
        description:
          "Intensifying storm frequencies breach mud embankments and inundate inhabited islands with hypersaline waters.",
        severity: "Severe",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Sundarban Wetland (Site No. 2370)",
        organization: "Ramsar Sites Information Service",
        year: 2019,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/2370",
      },
      {
        title: "State of Art Report on Sundarban Biosphere Reserve",
        organization: "Department of Environment, Govt of West Bengal",
        year: 2020,
        citationType: "Government Gazette",
      },
      {
        title: "Vulnerability of Sundarbans Mangrove Ecosystem to Climate Change",
        organization: "School of Oceanographic Studies, Jadavpur University",
        year: 2022,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "High",
  },
  {
    id: "loktak-lake",
    name: "Loktak Lake",
    state: "Manipur",
    country: "India",
    coordinates: { lat: 24.55, lng: 93.7833 },
    designation: "Ramsar Site",
    designationYear: 1990,
    areaKm2: 287,
    elevationMeters: 768,
    biogeographicZone: "Northeast Hills & Indo-Burma Hotspot",
    category: "Freshwater Lake",
    shortDescription:
      "The largest natural freshwater lake in Northeast India, famous worldwide for its circular floating vegetative biomass islands known as 'phumdis'.",
    overview:
      "Loktak Lake occupies the central valley of Manipur and is renowned globally for its phumdis—heterogeneous masses of vegetation, organic debris, and soil in all stages of decomposition that float upon the water. The southern basin encompasses the Keibul Lamjao National Park, the only floating wildlife park in the world.",
    importance: {
      ecological:
        "Plays an indispensable role in maintaining the hydrological regime of the Manipur River basin, buffering monsoon floods and moderating regional microclimates.",
      wildlife:
        "The exclusive, last natural refuge of the critically endangered Sangai (Rucervus eldii eldii), Manipur's endemic dancing deer whose hooves are adapted to the spongy phumdi.",
      local:
        "Central to the cultural ethos and folklore of the Meitei community, providing freshwater fisheries, edible water plants (heikak), and hydroelectric generation.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Circular floating phumdi formations dotting the calm surface of Loktak Lake.",
    keyWildlife: [
      "Sangai Brow-antlered Deer",
      "Indian Python",
      "Spot-billed Duck",
      "Brown Fish Owl",
      "Common Teal",
    ],
    threats: [
      {
        title: "Hydrological Stagnation from Ithai Barrage",
        description:
          "Constant water retention prevents the seasonal grounding and nutrient replenishment of floating phumdis, causing them to thin out.",
        severity: "Severe",
      },
      {
        title: "Urban Sewage & Eutrophication",
        description:
          "Untreated municipal wastewater and agricultural fertilizers carried down the Nambul river lead to weed proliferation and oxygen depletion.",
        severity: "High",
      },
      {
        title: "Shrinking Open Water Area",
        description:
          "Proliferation of commercial fish farming rings (Athaphum) alters natural water flow and fragments bird staging zones.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Montreux Record Registry Profile — Loktak Lake",
        organization: "Ramsar Convention Secretariat",
        year: 1993,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/463",
      },
      {
        title: "Integrated Management Action Plan for Loktak and Associated Wetlands",
        organization: "Loktak Development Authority (LDA) & Wetlands International South Asia",
        year: 2011,
        citationType: "Government Gazette",
      },
      {
        title: "Phumdi Ecology and Habitat Deterioration in Keibul Lamjao",
        organization: "Forest Department of Manipur",
        year: 2021,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "High",
  },
  {
    id: "keoladeo-national-park",
    name: "Keoladeo National Park",
    state: "Rajasthan",
    country: "India",
    coordinates: { lat: 27.16, lng: 77.52 },
    designation: "Ramsar Site",
    designationYear: 1981,
    areaKm2: 29,
    elevationMeters: 174,
    biogeographicZone: "Indo-Gangetic Semi-Arid Plains",
    category: "Wetland Complex",
    shortDescription:
      "A human-managed mosaic of grasslands, woodlands, and shallow freshwater swamps on the Indo-Gangetic Plain, hosting 370+ bird species.",
    overview:
      "Formerly known as Bharatpur Bird Sanctuary, Keoladeo is a man-engineered freshwater wetland system created more than 250 years ago by Maharaja Suraj Mal. Water is channeled via sluices into ten distinct dyked compartments, producing varying water depths that cater precisely to different guilds of waterfowl.",
    importance: {
      ecological:
        "Serves as an engineered biological oasis within an arid agricultural landscape, buffering local groundwater tables and trapping agricultural runoff.",
      wildlife:
        "Historic wintering quarter of the central population of Siberian Cranes (Leucogeranus leucogeranus) and premier Asian heronry with thousands of nesting pairs annually.",
      local:
        "World heritage eco-tourism destination providing direct livelihood to certified local cycle-rickshaw bird guides and local hospitality.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Marshy woodlands and heronries in Keoladeo National Park during winter.",
    keyWildlife: [
      "Sarus Crane",
      "Painted Stork",
      "Bar-headed Goose",
      "Black-necked Stork",
      "Sambar Deer",
    ],
    threats: [
      {
        title: "Water Scarcity & Intermittent Inflow",
        description:
          "Diversion of water from Ajan Dam and upstream barrages during drought years leaves wetlands dry and disrupts breeding seasons.",
        severity: "High",
      },
      {
        title: "Invasive Vegetation",
        description:
          "Proliferation of African catfish and choking species like Prosopis juliflora and Paspalum grass crowds out native wetland flora.",
        severity: "Moderate",
      },
      {
        title: "Pesticide Drift",
        description:
          "Intensive farming on the park periphery carries pesticide residues into drainage canals during monsoon surges.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Keoladeo National Park (Site No. 230)",
        organization: "Ramsar Sites Information Service",
        year: 1992,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/230",
      },
      {
        title: "UNESCO World Heritage Conservation Status Report",
        organization: "UNESCO World Heritage Centre",
        year: 2019,
        citationType: "Official Registry",
      },
      {
        title: "Long-term Monitoring of Avian Dynamics at Bharatpur",
        organization: "Bombay Natural History Society (BNHS)",
        year: 2022,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "vembanad-kol-wetland",
    name: "Vembanad-Kol Wetland",
    state: "Kerala",
    country: "India",
    coordinates: { lat: 9.6, lng: 76.45 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 1512,
    elevationMeters: 1,
    biogeographicZone: "Malabar Coast & Western Ghats Estuary",
    category: "Brackish Lagoon",
    shortDescription:
      "The longest lake in India and the hydrological heart of the Kerala backwaters, famous for its salt-water barrage and below-sea-level farming system.",
    overview:
      "Vembanad-Kol is the largest brackish water lagoon system on the west coast of India, stretching across Alappuzha, Kottayam, and Ernakulam districts. It encompasses the unique Kuttanad agricultural system, recognized by FAO as a Globally Important Agricultural Heritage System (GIAHS) where paddy cultivation occurs up to 2.5 meters below sea level.",
    importance: {
      ecological:
        "Acts as a gigantic retention basin regulating monsoon floods originating in the Western Ghats before waters enter the Arabian Sea through Kochi and Azheekode bars.",
      wildlife:
        "Crucial nursery ground for coastal marine fishes and estuarine prawns, hosting more than 20,000 migratory waterfowl during mid-winter counts.",
      local:
        "Core hub of Kerala's backwater tourism and houseboat industry, providing inland navigation, lime-shell mining, and clam fisheries.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Serene palm-fringed channels of the Vembanad-Kol wetland system.",
    keyWildlife: [
      "Indian Spot-billed Duck",
      "Malabar Grey Hornbill",
      "Pearl Spot (Karimeen)",
      "Giant Freshwater Prawn",
      "Smooth-coated Otter",
    ],
    threats: [
      {
        title: "Thanneermukkom Saltwater Barrier Impact",
        description:
          "The permanent closure of the salinity regulator prevents natural tidal flushing, causing severe water hyacinth weed clogging and pollution buildup.",
        severity: "Severe",
      },
      {
        title: "Reclamation for Urban Infrastructure",
        description:
          "Port expansions, tourism resorts, and urban reclamation have significantly constricted the active water spread area over the past four decades.",
        severity: "High",
      },
      {
        title: "Domestic Sewage & Agro-Chemical Leaching",
        description:
          "Heavy fertilizer applications in Kuttanad paddy fields drain directly into stagnant canals, causing recurrent fish mortality.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands — Vembanad-Kol Wetland (Site No. 1214)",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1214",
      },
      {
        title: "Ecological Degradation and Conservation Strategy for Vembanad Lake",
        organization: "Kerala State Council for Science, Technology and Environment (KSCSTE)",
        year: 2017,
        citationType: "Government Gazette",
      },
      {
        title: "Below Sea Level Farming and Hydrology in Kuttanad",
        organization: "M.S. Swaminathan Research Foundation (MSSRF)",
        year: 2020,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "High",
  },
  {
    id: "harike-wetland",
    name: "Harike Wetland",
    state: "Punjab",
    country: "India",
    coordinates: { lat: 31.15, lng: 74.95 },
    designation: "Ramsar Site",
    designationYear: 1990,
    areaKm2: 41,
    elevationMeters: 210,
    biogeographicZone: "Upper Gangetic / Indus Plains",
    category: "Riverine Floodplain",
    shortDescription:
      "A deep freshwater riverine wetland created at the confluence of the Beas and Sutlej rivers, serving as a vital winter stopover for migratory wildfowl.",
    overview:
      "Harike Wetland, also known locally as 'Hari-ke-Pattan', was formed in 1952 by the construction of a barrage across the confluence of the Sutlej and Beas rivers in Tarn Taran district. The resulting reservoir and surrounding reed marshes represent one of the most critical freshwater wetland complexes in northwestern India.",
    importance: {
      ecological:
        "Regulates flood discharge from Himalayan snowmelt and serves as a vital hydrological recharge zone for the Punjab-Rajasthan canal irrigation network.",
      wildlife:
        "One of the only two sites in India hosting a resident population of the critically endangered Indus River Dolphin (Platanista minor), alongside smooth-coated otters and wintering diving ducks.",
      local:
        "The headworks for the Indira Gandhi Canal, which conveys life-giving irrigation water across hundreds of kilometers into the Thar Desert of western Rajasthan.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Misty morning riverine marsh vegetation at the confluence of Beas and Sutlej, Harike.",
    keyWildlife: [
      "Indus River Dolphin",
      "Smooth-coated Otter",
      "Tufted Duck",
      "Cotton Pygmy Goose",
      "Indian Flapshell Turtle",
    ],
    threats: [
      {
        title: "Industrial & Municipal Effluent Inflow",
        description:
          "Untreated industrial effluents discharged via the East Bein and Buddha Nullah channels introduce heavy metals and pathogens into the reservoir.",
        severity: "Severe",
      },
      {
        title: "Dense Infestation of Water Hyacinth",
        description:
          "Eichhornia crassipes carpets vast swathes of open water, depleting dissolved oxygen and impeding aquatic navigation.",
        severity: "High",
      },
      {
        title: "Encroachment of Silt Islands",
        description:
          "Accumulating silt islands are frequently occupied for unauthorized cultivation and grazing during seasonal drawdowns.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Harike Lake (Site No. 462)",
        organization: "Ramsar Sites Information Service",
        year: 1990,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/462",
      },
      {
        title: "Survey of Indus River Dolphin in Harike Wildlife Sanctuary",
        organization: "WWF-India & Department of Forests, Punjab",
        year: 2018,
        citationType: "Research Paper",
      },
      {
        title: "Comprehensive Management Plan for Harike Wetland",
        organization: "Punjab State Council for Science & Technology",
        year: 2021,
        citationType: "Government Gazette",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "tso-moriri",
    name: "Tso Moriri",
    state: "Ladakh",
    country: "India",
    coordinates: { lat: 32.9, lng: 78.31 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 120,
    elevationMeters: 4522,
    biogeographicZone: "Trans-Himalayan Tibetan Plateau",
    category: "High-Altitude Lake",
    shortDescription:
      "A sacred high-altitude trans-Himalayan brackish lake at 4,522 meters elevation on the Changthang plateau, supporting rare alpine breeding avifauna.",
    overview:
      "Perched high on the Changthang cold desert plateau of eastern Ladakh, Tso Moriri (Mountain Lake) is an endorheic alpine lake flanked by snowcapped Himalayan peaks exceeding 6,000 meters. Fed by melting glaciers and alpine springs, the lake has no surface outlet and exhibits an oligotrophic to slightly brackish chemical profile.",
    importance: {
      ecological:
        "Represents an invaluable trans-Himalayan freshwater reservoir and climate monitoring sentinel, sensitive to high-altitude cryosphere retreats.",
      wildlife:
        "One of the very few breeding sites in India for the globally vulnerable Black-necked Crane (Grus nigricollis) and the highest breeding ground for Bar-headed Geese.",
      local:
        "Held deeply sacred by the nomadic Changpa pastoralist communities, whose pashmina goats graze the surrounding fragile alpine steppe pastures.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Crisp turquoise waters of alpine Tso Moriri backed by snow-clad peaks, Ladakh.",
    keyWildlife: [
      "Black-necked Crane",
      "Bar-headed Goose",
      "Tibetan Wild Ass (Kiang)",
      "Snow Leopard",
      "Brown-headed Gull",
    ],
    threats: [
      {
        title: "Unregulated Tourist Footfall & Off-Roading",
        description:
          "Vehicles driving over fragile shoreline meadows damage breeding nests of ground-nesting cranes and compact sensitive soils.",
        severity: "Moderate",
      },
      {
        title: "Solid Waste & Sanitation Pressure",
        description:
          "Seasonal campsites at Korzok village generate plastic waste and sewage with minimal high-altitude waste processing capacity.",
        severity: "Moderate",
      },
      {
        title: "Glacial Retreat & Altered Hydrology",
        description:
          "Accelerated climate warming accelerates seasonal glacial ablation, threatening future inflow volume stability.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Tso Moriri (Site No. 1213)",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1213",
      },
      {
        title: "Conservation Ecology of High-Altitude Wetlands in Ladakh",
        organization: "Wildlife Protection Department, UT of Ladakh",
        year: 2021,
        citationType: "Government Gazette",
      },
      {
        title: "Breeding Ecology of Black-necked Crane at Changthang Wetlands",
        organization: "Nature Conservation Foundation (NCF)",
        year: 2023,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Low",
  },
  {
    id: "deepor-beel",
    name: "Deepor Beel",
    state: "Assam",
    country: "India",
    coordinates: { lat: 26.1264, lng: 91.6483 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 40,
    elevationMeters: 53,
    biogeographicZone: "Brahmaputra Valley Floodplain",
    category: "Freshwater Lake",
    shortDescription:
      "A permanent, deep freshwater lake situated in a former channel of the Brahmaputra River, acting as an irreplaceable ecological corridor for Asian elephants.",
    overview:
      "Deepor Beel is a permanent freshwater lake and oxbow wetland lying in a former channel of the mighty Brahmaputra River, situated southwest of Guwahati city. Surrounded by the forested Rani and Garbhanga hill ranges, it provides a crucial natural drainage basin storing excess stormwaters during Assam's torrential monsoon season.",
    importance: {
      ecological:
        "Serves as the primary biological sponge protecting Guwahati from urban flooding while purifying hydrological runoff prior to joining the Brahmaputra.",
      wildlife:
        "A recognized elephant corridor where wild Asian Elephant herds (Elephas maximus) migrate to bathe and feed, alongside large concentrations of endangered Greater Adjutant Storks.",
      local:
        "Sustains community-managed subsistence fishing and harvesting of sacred lotus and water chestnuts by indigenous Karbi and Assamese villagers.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Lush wetland reeds and morning fog along the perimeter of Deepor Beel, Assam.",
    keyWildlife: [
      "Asian Elephant",
      "Greater Adjutant Stork",
      "Spot-billed Pelican",
      "Lesser Adjutant",
      "Ganges River Dolphin",
    ],
    threats: [
      {
        title: "Municipal Garbage Dumping",
        description:
          "The adjacent Boragaon dumping site leaches hazardous chemical pollutants and microplastics straight into the core water body.",
        severity: "Severe",
      },
      {
        title: "Railway Track Bisecting Corridor",
        description:
          "A major broad-gauge railway line cuts directly through the southern boundary, resulting in frequent fatal collisions with crossing elephants.",
        severity: "Severe",
      },
      {
        title: "Encroachment by Warehousing & Industry",
        description:
          "Rapid commercial construction shrinks peripheral buffer zones and blocks natural flood spill channels.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Deepor Beel (Site No. 1207)",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1207",
      },
      {
        title: "Action Plan for Restoration of Polluted Stretches of Deepor Beel",
        organization: "Pollution Control Board Assam (PCBA)",
        year: 2020,
        citationType: "Government Gazette",
      },
      {
        title: "Status and Movement Ecology of Elephants in Deepor Beel Sanctuary",
        organization: "Aaranyak Biodiversity Conservation Organization",
        year: 2022,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Critical",
  },
  {
    id: "bhoj-wetland",
    name: "Bhoj Wetland",
    state: "Madhya Pradesh",
    country: "India",
    coordinates: { lat: 23.2392, lng: 77.34 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 32,
    elevationMeters: 523,
    biogeographicZone: "Central Highlands & Malwa Plateau",
    category: "Wetland Complex",
    shortDescription:
      "An artificial wetland system composed of the Upper and Lower Lakes of Bhopal, constructed originally in the 11th century by Paramara King Bhoja.",
    overview:
      "Bhoj Wetland consists of two contiguous urban water bodies: the Upper Lake (Bada Talaab) created in the 11th century by constructing an earthen dam across the Kolans River, and the Lower Lake (Chhota Talaab) built in 1794. It is one of the oldest and largest human-engineered urban wetland ecosystems in peninsular India.",
    importance: {
      ecological:
        "Regulates urban microclimates, recharges the Malwa plateau groundwater aquifers, and traps organic pollutants before river discharge.",
      wildlife:
        "Regular wintering haven for majestic Sarus Cranes (Grus antigone), hosting more than 179 bird species and 43 fish varieties despite close urban proximity.",
      local:
        "Supplies over 40% of the potable municipal water for the population of Bhopal and powers local water sports and recreation.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Gentle shoreline ripples and emergent reeds of the Upper Lake at Bhoj Wetland.",
    keyWildlife: [
      "Sarus Crane",
      "White-rumped Vulture",
      "Eurasian Coot",
      "Red-crested Pochard",
      "Smooth-coated Otter",
    ],
    threats: [
      {
        title: "Urban Encroachment & Shoreline Construction",
        description:
          "Unauthorized residential and commercial developments continuously encroach upon the full reservoir level (FRL) zone.",
        severity: "High",
      },
      {
        title: "Domestic Sewage & Organic Influx",
        description:
          "Multiple unintercepted urban drains empty into the lakes, elevating biochemical oxygen demand and stimulating invasive weed growth.",
        severity: "Moderate",
      },
      {
        title: "Religious Immersion Residues",
        description:
          "Seasonal idol immersions deposit plaster of Paris, synthetic paints, and toxic metals into the lake sediment bed.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Bhoj Wetland (Site No. 1206)",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1206",
      },
      {
        title: "Lake Conservation and Eco-Restoration Program Report",
        organization: "Environmental Planning & Coordination Organisation (EPCO), MP",
        year: 2019,
        citationType: "Government Gazette",
      },
      {
        title: "Limnological Assessment of Bhoj Wetland System",
        organization: "Barkatullah University Bioscience Department",
        year: 2021,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "point-calimere",
    name: "Point Calimere Sanctuary",
    state: "Tamil Nadu",
    country: "India",
    coordinates: { lat: 10.3, lng: 79.8667 },
    designation: "Ramsar Site",
    designationYear: 2002,
    areaKm2: 385,
    elevationMeters: 4,
    biogeographicZone: "Coromandel Coastal Plain",
    category: "Mangrove Swamps",
    shortDescription:
      "A coastal peninsula on the Palk Strait featuring shallow saline mudflats, tropical dry evergreen forest, and salt marshes that attract mass flamingo congregations.",
    overview:
      "Point Calimere is a low-energy coastal promontory jutting into the Palk Strait where the Coromandel coast turns west towards the Gulf of Mannar. The site encompasses the Muthupet mangrove wetland, open marine lagoons, hyper-saline salt pans, and one of the last remaining remnants of pristine tropical dry evergreen forest in peninsular India.",
    importance: {
      ecological:
        "The extensive Muthupet mangroves attenuate tidal surge currents, anchor soft coastal soils, and export vital detrital biomass to inshore fisheries.",
      wildlife:
        "World-renowned for congregation of over 30,000 Greater Flamingos in peak winter, alongside rare mammals like the Indian Blackbuck and nesting Olive Ridley turtles.",
      local:
        "Provides nursery waters sustaining coastal fishing villages of Nagapattinam and Thiruvarur, alongside historic salt manufacturing operations.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Vast tidal mudflats and coastal saline wetlands of Point Calimere.",
    keyWildlife: [
      "Greater Flamingo",
      "Blackbuck",
      "Olive Ridley Sea Turtle",
      "Spot-billed Pelican",
      "Spoon-billed Sandpiper",
    ],
    threats: [
      {
        title: "Freshwater Inflow Reduction",
        description:
          "Upstream damming of the Cauvery distributaries severely curtails seasonal freshwater and sediment flushing into Muthupet mangroves.",
        severity: "High",
      },
      {
        title: "Hyper-salinity in Lagoon Inlets",
        description:
          "Effluents from large-scale commercial salt-pan operations increase localized salinity beyond the tolerance of mangrove propagules.",
        severity: "Moderate",
      },
      {
        title: "Illegal Feral Grazing",
        description:
          "Feral cattle and introduced prosopis weeds exert grazing stress on native dry evergreen seedlings and shorebird nesting zones.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Ramsar Information Sheet — Point Calimere Wildlife and Bird Sanctuary (Site No. 1210)",
        organization: "Ramsar Sites Information Service",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1210",
      },
      {
        title: "Management Plan for Point Calimere Wildlife Sanctuary",
        organization: "Tamil Nadu Forest Department",
        year: 2018,
        citationType: "Government Gazette",
      },
      {
        title: "Shorebird Migration and Flamingo Population Dynamics at Point Calimere",
        organization: "Bombay Natural History Society (BNHS)",
        year: 2022,
        citationType: "Research Paper",
      },
    ],
    threatLevel: "Moderate",
  },
];

// Helper to extract unique states
export const ALL_STATES = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.state))
).sort();

// Helper to extract unique designations
export const ALL_DESIGNATIONS = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.designation))
).sort();

// Helper to extract unique categories
export const ALL_CATEGORIES = Array.from(
  new Set(WETLANDS_DATA.map((w) => w.category))
).sort();

// Helper to find a wetland by slug or common alias
export function getWetlandBySlug(slug: string): Wetland | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();

  return WETLANDS_DATA.find((w) => {
    if (w.id.toLowerCase() === normalized) return true;
    // Check alias: e.g. "harike" matching "harike-wetland"
    const baseSlug = w.id.replace(
      /-(wetland|lake|national-park|sanctuary)$/,
      ""
    );
    return baseSlug === normalized;
  });
}

// Helper to return all slugs for static path generation
export function getAllWetlandSlugs(): string[] {
  return WETLANDS_DATA.map((w) => w.id);
}
