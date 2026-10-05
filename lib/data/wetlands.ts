import { Wetland, WildlifeSpecies, IucnStatusCode } from "@/types/wetland";

export const WETLANDS_DATA: Wetland[] = [
  {
    id: "chilika-lake",
    name: "Chilika Lake",
    state: "Odisha",
    country: "India",
    coordinates: { lat: 19.7183, lng: 85.3211 },
    designation: "Ramsar Site",
    designationYear: 1981,
    ramsarSiteNo: 229,
    areaKm2: 1165,
    elevationMeters: 2,
    biogeographicZone: "East Coast Biogeographical Zone (8B)",
    category: "Brackish Lagoon",
    shortDescription:
      "Asia's largest brackish water coastal lagoon, spanning three districts of Odisha and sustaining the flagship endangered Irrawaddy dolphin population.",
    overview:
      "Chilika Lake is a vast, shallow estuarine lagoon situated along the Bay of Bengal coast in Odisha. Separated from the sea by a 60-kilometer-long dynamic barrier spit, it is fed by over 52 rivers and streams, including distributaries of the Mahanadi river system. It exhibits an estuarine salinity gradient fluctuating seasonally from near-freshwater during monsoon influx to marine salinity during pre-monsoon dry months.",
    importance: {
      ecological:
        "Acts as a major coastal sediment sink and natural nutrient recycling basin, moderating monsoon floodwaters from the Mahanadi delta before discharging into the Bay of Bengal.",
      wildlife:
        "India's largest wintering ground for migratory waterfowl on the Central Asian Flyway, hosting over a million birds annually along with an isolated breeding population of Irrawaddy dolphins (Orcaella brevirostris).",
      local:
        "Directly sustains the traditional fishing livelihoods of over 150,000 fisherfolk across 132 coastal villages and supports eco-tourism centered around Satapada and Mangalajodi.",
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
          "Deforestation in the catchment of feeder rivers leads to heavy sediment deposition, reducing lagoon depth and choking the Magarmukh lead channel.",
        severity: "High",
      },
      {
        title: "Intensive Aquaculture Ponds",
        description:
          "Illegal prawn gherries (enclosures) alter natural hydrodynamic circulation, fragment mudflats, and degrade indigenous seagrass beds.",
        severity: "Moderate",
      },
      {
        title: "Agricultural Runoff",
        description:
          "Fertilizer and pesticide leaching from deltaic farmlands triggers localized algal blooms and eutrophication in shallow northern bays.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Chilika Lake (Site No. 229)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/229",
        accessedAt: "October 2026",
      },
      {
        title: "Ecological Restoration and Hydrological Dynamics of Chilika Lagoon",
        organization: "Chilika Development Authority (CDA) & MoEFCC",
        year: 2018,
        citationType: "Government Gazette",
        url: "https://www.chilika.com",
        accessedAt: "October 2026",
      },
      {
        title: "Status and Distribution of Irrawaddy Dolphins in Chilika Lagoon",
        organization: "Wildlife Institute of India (WII)",
        year: 2021,
        citationType: "Research Paper",
        url: "https://wii.gov.in",
        accessedAt: "October 2026",
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
    ramsarSiteNo: 2370,
    areaKm2: 4230,
    elevationMeters: 3,
    biogeographicZone: "Ganga-Brahmaputra Deltaic Estuary (8B/7B)",
    category: "Mangrove Swamps",
    shortDescription:
      "The Indian expanse of the world's largest contiguous tidal mangrove forest, spanning the deltaic seaward fringes of the Ganga, Brahmaputra, and Meghna rivers.",
    overview:
      "Covering the low-lying coastal plains of southern West Bengal, Sundarbans Wetland encompasses an intricate network of tidal waterways, mudflats, and halophytic mangrove islands. Inundated semi-diurnally by ocean tides, it forms a monumental biological buffer safeguarding millions of inland residents across the Kolkata metropolitan hinterland.",
    importance: {
      ecological:
        "Functions as a paramount bio-shield absorbing cyclonic surges from the Bay of Bengal while storing vast volumes of coastal blue carbon in deep peat and organic sediment soils.",
      wildlife:
        "Global stronghold of the tiger (Panthera tigris tigris) uniquely adapted to swimming saline waterways, as well as critically endangered northern river terrapins and estuarine crocodiles.",
      local:
        "Provides seasonal livelihood security through non-timber forest produce, artisanal honey collection, and sustainable crab harvesting for fringing forest communities.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Dense tidal mangrove creeks and muddy banks of the Sundarbans delta.",
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
          "Accelerated marine erosion and tidal subsidence submerge peripheral mudflats and breach protective earthen embankments on inhabited islands.",
        severity: "Critical",
      },
      {
        title: "Reduced Freshwater Discharge",
        description:
          "Upstream hydrological diversions on the Ganga-Hooghly system increase dry-season salinity, stressing freshwater-loving mangrove species like Sundari (Heritiera fomes).",
        severity: "Severe",
      },
      {
        title: "Frequent Severe Cyclones",
        description:
          "Successive high-intensity cyclonic storms (Amphan, Yaas, Remal) cause physical defoliation of mangrove canopy and catastrophic saline inundation of paddy soils.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Sundarban Wetland (Site No. 2370)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2019,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/2370",
        accessedAt: "October 2026",
      },
      {
        title: "Integrated Management Action Plan for Sundarban Biosphere Reserve",
        organization: "West Bengal State Wetland Authority (WBSWA) & MoEFCC",
        year: 2021,
        citationType: "Government Gazette",
        url: "https://environment.wb.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Faunal Diversity of Sundarban Biosphere Reserve",
        organization: "Zoological Survey of India (ZSI)",
        year: 2020,
        citationType: "Research Paper",
        url: "https://zsi.gov.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Severe",
  },
  {
    id: "loktak-lake",
    name: "Loktak Lake",
    state: "Manipur",
    country: "India",
    coordinates: { lat: 24.55, lng: 93.8 },
    designation: "Ramsar Site",
    designationYear: 1990,
    ramsarSiteNo: 463,
    areaKm2: 266,
    elevationMeters: 768,
    biogeographicZone: "North-East Hills Biogeographical Zone (9B)",
    category: "Freshwater Lake",
    shortDescription:
      "The largest natural freshwater lake in Northeast India, world-renowned for its heterogeneous floating vegetative biomass islands called phumdis.",
    overview:
      "Loktak Lake occupies the lowest depression of the Central Manipur Valley, receiving runoff from over 30 streams and rivers including the Manipur and Nambul rivers. It is distinguished globally by its floating islands composed of decomposing vegetation, soil, and roots (phumdis), the largest contiguous expanse of which constitutes Keibul Lamjao National Park.",
    importance: {
      ecological:
        "Regulates floodwaters across the Imphal Valley, acts as a primary freshwater retention reservoir, and generates microclimatic stability for the surrounding agrarian basin.",
      wildlife:
        "The sole natural refuge on Earth for the critically endangered Sangai brow-antlered deer (Rucervus eldii eldii), adapted exclusively to grazing on the buoyant phumdi turf.",
      local:
        "Central to Manipur's cultural identity and economy, supporting traditional capture fisheries, edible water chestnut harvesting, and hydropower generation.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Circular floating phumdi rings on the tranquil surface of Loktak Lake.",
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
          "The downstream Ithai Barrage maintains permanently high water levels, preventing natural winter grounding of phumdis and starving their roots of nutrient regeneration.",
        severity: "Severe",
      },
      {
        title: "Urban Sewage & Eutrophication",
        description:
          "Untreated municipal wastewater and solid waste from Imphal town flow into the lake via the Nambul River, driving organic oxygen depletion.",
        severity: "High",
      },
      {
        title: "Shrinking Open Water Area",
        description:
          "Uncontrolled proliferation of aquaculture athaphums and catchment siltation chokes open water corridors and compromises boat navigation.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Loktak Lake (Site No. 463)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 1990,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/463",
        accessedAt: "October 2026",
      },
      {
        title: "Conservation and Integrated Management Plan for Loktak Lake",
        organization: "Loktak Development Authority (LDA) Manipur",
        year: 2020,
        citationType: "Government Gazette",
        url: "https://lda.mn.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Ecological Status and Habitat Viability of Keibul Lamjao National Park",
        organization: "Wildlife Institute of India (WII)",
        year: 2022,
        citationType: "Research Paper",
        url: "https://wii.gov.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "High",
  },
  {
    id: "keoladeo-national-park",
    name: "Keoladeo National Park",
    state: "Rajasthan",
    country: "India",
    coordinates: { lat: 27.1594, lng: 77.5231 },
    designation: "Ramsar Site",
    designationYear: 1981,
    ramsarSiteNo: 230,
    areaKm2: 28.73,
    elevationMeters: 174,
    biogeographicZone: "Semi-Arid Biogeographical Zone (4B)",
    category: "Freshwater Lake",
    shortDescription:
      "A renowned UNESCO World Heritage wetland complex in Bharatpur, serving as a historic congregational haven for hundreds of wintering waterfowl species.",
    overview:
      "Formerly known as the Bharatpur Bird Sanctuary, Keoladeo National Park is a composite man-made and managed wetland system situated in the semi-arid plains of eastern Rajasthan. Created over 250 years ago by constructing earthen dykes (dykes and bunds) at the confluence of the Gambhir and Banganga rivers, it features mosaic marshes, savannah grasslands, and acacia woodlands.",
    importance: {
      ecological:
        "Exemplifies artificial wetland engineering sustaining biodiversity, retaining monsoon rainwater, and recharging groundwater aquifers in a semi-arid biome.",
      wildlife:
        "Historic wintering station on the Central Asian Flyway hosting over 370 bird species, including massive breeding colonies of painted storks and the majestic resident Sarus crane.",
      local:
        "Premier international eco-tourism destination providing direct sustainable income for hundreds of licensed local cycle-rickshaw bird guides and naturalists.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Marshy acacia woodlands and colonial nesting birds at Keoladeo National Park.",
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
          "Upstream impoundments at the Panchana Dam and diversions on the Gambhir River restrict crucial seasonal water releases from the Ajan Bandh reservoir.",
        severity: "Severe",
      },
      {
        title: "Invasive Vegetation",
        description:
          "Proliferation of invasive mesquite (Prosopis juliflora) and African grass (Paspalum distichum) chokes aquatic feeding depressions.",
        severity: "High",
      },
      {
        title: "Pesticide Drift",
        description:
          "Intensive chemical pesticide application on adjacent farmland causes chemical runoff into peripheral marshes during monsoon inflows.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Keoladeo National Park (Site No. 230)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 1990,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/230",
        accessedAt: "October 2026",
      },
      {
        title: "Avifaunal Monitoring and Ecological Management Plan for Keoladeo",
        organization: "Bombay Natural History Society (BNHS)",
        year: 2019,
        citationType: "Research Paper",
        url: "https://www.bnhs.org",
        accessedAt: "October 2026",
      },
      {
        title: "Management Plan for Keoladeo National Park World Heritage Site",
        organization: "Rajasthan Forest Department & MoEFCC",
        year: 2021,
        citationType: "Government Gazette",
        url: "https://forest.rajasthan.gov.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "vembanad-kol-wetland",
    name: "Vembanad-Kol Wetland",
    state: "Kerala",
    country: "India",
    coordinates: { lat: 9.61, lng: 76.42 },
    designation: "Ramsar Site",
    designationYear: 2002,
    ramsarSiteNo: 1214,
    areaKm2: 1512.5,
    elevationMeters: 1,
    biogeographicZone: "West Coast Biogeographical Zone (10B)",
    category: "Brackish Lagoon",
    shortDescription:
      "India's longest estuarine lake system, spanning three coastal districts of Kerala and encompassing the below-sea-level agrarian polders of Kuttanad.",
    overview:
      "Extending over 96 kilometers parallel to the Arabian Sea, Vembanad-Kol is an intricate coastal estuarine complex fed by 10 major rivers, including the Pamba, Periyar, and Meenachil. Separated into saline and freshwater compartments by the engineering of the Thanneermukkom barrage, it encompasses extensive mangrove fringes, lagoons, and flood-prone Kol paddy fields.",
    importance: {
      ecological:
        "Acts as a gigantic natural drainage sink buffering central Kerala against tropical monsoon deluges and recharging shallow coastal freshwater aquifers.",
      wildlife:
        "Supports over 20,000 wintering waterbirds annually and serves as an indispensable nursery ground for estuarine fish, penaeid prawns, and benthic clams.",
      local:
        "Anchors Kerala's backwater tourism and sustains traditional Kuttanad Below-Sea-Level farming (recognized as a GIAHS heritage agricultural system by FAO).",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Scenic coconut-lined backwater canals and houseboats on Vembanad Lake.",
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
          "The 1.4-kilometer saltwater barrage blocks seasonal tidal flushing, trapping agro-chemicals and triggering massive aquatic weed decay in the southern lake.",
        severity: "Severe",
      },
      {
        title: "Reclamation for Urban Infrastructure",
        description:
          "Unchecked encroachment and land reclamation for tourism resorts, real estate development, and road networks permanently shrinks water spread area.",
        severity: "High",
      },
      {
        title: "Domestic Sewage & Agro-Chemical Leaching",
        description:
          "High pesticide and fertilizer drainage from intensive Kuttanad paddy fields combined with untreated houseboat sewage causes chronic organic pollution.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Vembanad-Kol Wetland (Site No. 1214)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1214",
        accessedAt: "October 2026",
      },
      {
        title: "Comprehensive Management Action Plan for Vembanad-Kol Wetland System",
        organization: "Kerala State Wetland Authority (KSWA)",
        year: 2020,
        citationType: "Government Gazette",
        url: "https://kswa.kerala.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Ecology and Fisheries Dynamics of the Vembanad Estuarine System",
        organization: "Central Marine Fisheries Research Institute (CMFRI)",
        year: 2021,
        citationType: "Research Paper",
        url: "https://www.cmfri.org.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "High",
  },
  {
    id: "harike-wetland",
    name: "Harike Wetland",
    state: "Punjab",
    country: "India",
    coordinates: { lat: 31.1542, lng: 74.9547 },
    designation: "Ramsar Site",
    designationYear: 1990,
    ramsarSiteNo: 462,
    areaKm2: 41,
    elevationMeters: 210,
    biogeographicZone: "Indo-Gangetic / Semi-Arid Plains (4A)",
    category: "Riverine Floodplain",
    shortDescription:
      "A sprawling shallow reservoir at the confluence of the Beas and Sutlej rivers in Punjab, sheltering rare river dolphins and massive waterfowl flocks.",
    overview:
      "Formed in 1952 by the construction of the Harike Barrage across the confluence of the Sutlej and Beas rivers, Harike Wetland is the largest freshwater wetland in northern India. Covering portions of Tarn Taran, Ferozepur, and Kapurthala districts, it encompasses expansive open water bodies, marshy reed beds, and seasonally shifting silt islands.",
    importance: {
      ecological:
        "Regulates trans-boundary river flows between the Sutlej and Beas, acts as an artificial sediment filter, and feeds the vital Indira Gandhi and Rajasthan feeder irrigation canals.",
      wildlife:
        "Crucial trans-Himalayan flyway refuge hosting over 200,000 wintering migratory waterfowl and harbouring the only documented population of Indus river dolphins (Platanista minor) in India.",
      local:
        "Sustains regional agricultural irrigation across downstream southern Punjab and Rajasthan while supporting commercial inland fisheries.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Serene morning mist over the river confluence channels at Harike Wetland.",
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
          "Untreated industrial and domestic effluents discharged via the East Bein and Buddha Nullah channels introduce heavy metals and synthetic pollutants.",
        severity: "High",
      },
      {
        title: "Dense Infestation of Water Hyacinth",
        description:
          "Invasive water hyacinth (Eichhornia crassipes) carpets vast expanses of open water, depleting dissolved oxygen and impeding boat navigation.",
        severity: "High",
      },
      {
        title: "Encroachment of Silt Islands",
        description:
          "Emergent silt islands inside the reservoir are illegally occupied for unauthorized cultivation and cattle grazing during seasonal low-water drawdowns.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Harike Lake (Site No. 462)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 1990,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/462",
        accessedAt: "October 2026",
      },
      {
        title: "Distribution and Conservation Assessment of Indus River Dolphin in Harike",
        organization: "WWF-India & Department of Forests, Punjab",
        year: 2018,
        citationType: "Research Paper",
        url: "https://www.wwfindia.org",
        accessedAt: "October 2026",
      },
      {
        title: "Comprehensive Management Action Plan for Harike Wetland",
        organization: "Punjab State Council for Science & Technology (PSCST)",
        year: 2021,
        citationType: "Government Gazette",
        url: "https://pscst.punjab.gov.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "tso-moriri",
    name: "Tso Moriri",
    state: "Ladakh",
    country: "India",
    coordinates: { lat: 32.9075, lng: 78.3089 },
    designation: "Ramsar Site",
    designationYear: 2002,
    ramsarSiteNo: 1213,
    areaKm2: 120,
    elevationMeters: 4595,
    biogeographicZone: "Trans-Himalaya Tibetan Plateau (1B)",
    category: "High-Altitude Lake",
    shortDescription:
      "A pristine, high-altitude alpine lake nestled at 4,595 meters in Changthang, Ladakh, providing critical breeding grounds for the endangered black-necked crane.",
    overview:
      "Also known as the Mountain Lake, Tso Moriri is a deep, endorheic oligotrophic lake situated on the Changthang Plateau of southeastern Ladakh. Flanked by glaciated peaks exceeding 6,000 meters, it is fed by snowmelt streams and subterranean springs. It ranges from freshwater at its northern inlet deltas to slightly brackish salinity in its deep central basin.",
    importance: {
      ecological:
        "Represents an exceptional, intact high-altitude endorheic lacustrine wetland system playing an essential role in microclimate regulation and glacial melt storage across the arid plateau.",
      wildlife:
        "The primary breeding ground in India for the globally vulnerable Black-necked crane (Grus nigricollis) and the highest-altitude breeding colony of Bar-headed geese (Anser indicus).",
      local:
        "Sacred to indigenous Changpa pastoral nomads whose traditional pastoral grazing practices are linked with high-altitude pasture stewardship around Korzok village.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Glacial turquoise waters of Tso Moriri ringed by the snowcapped Changthang peaks.",
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
          "Vehicles driving across fragile shoreline meadows damage subterranean burrows and nests of ground-nesting waterbirds while compacting alpine peat turf.",
        severity: "High",
      },
      {
        title: "Solid Waste & Sanitation Pressure",
        description:
          "Seasonal tourist campsites at Korzok village generate substantial plastic waste and sewage with minimal high-altitude biodegradation capacity.",
        severity: "Moderate",
      },
      {
        title: "Glacial Retreat & Altered Hydrology",
        description:
          "Accelerated thermal warming in the Trans-Himalayas accelerates seasonal glacial retreat, threatening long-term inflow water stability.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Tsomoriri (Site No. 1213)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1213",
        accessedAt: "October 2026",
      },
      {
        title: "Conservation Ecology of High-Altitude Wetlands in Ladakh",
        organization: "Department of Wildlife Protection, UT of Ladakh",
        year: 2021,
        citationType: "Government Gazette",
        url: "https://ladakh.nic.in",
        accessedAt: "October 2026",
      },
      {
        title: "Breeding Ecology of Black-necked Crane at Changthang Wetlands",
        organization: "Nature Conservation Foundation (NCF)",
        year: 2023,
        citationType: "Research Paper",
        url: "https://www.ncf-india.org",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "deepor-beel",
    name: "Deepor Beel",
    state: "Assam",
    country: "India",
    coordinates: { lat: 26.1264, lng: 91.6592 },
    designation: "Ramsar Site",
    designationYear: 2002,
    ramsarSiteNo: 1207,
    areaKm2: 40,
    elevationMeters: 53,
    biogeographicZone: "Brahmaputra Valley Biogeographical Zone (9A)",
    category: "Riverine Floodplain",
    shortDescription:
      "A permanent riverine oxbow lake in the Brahmaputra floodplain southwest of Guwahati, serving as an irreplaceable corridor for wild Asian elephants.",
    overview:
      "Deepor Beel is a sprawling freshwater wetland situated in an abandoned channel of the Brahmaputra River. It is fed by the Basistha and Kalmani rivers and discharges northward into the Brahmaputra via the Khanajan channel. Acting as the sole natural storm-water drainage reservoir for Guwahati metropolitan area, it is home to rich aquatic macrophytes and foraging avifauna.",
    importance: {
      ecological:
        "Acts as a natural stormwater detention basin mitigating monsoon urban flooding across Guwahati city and providing groundwater replenishment for peripheral settlements.",
      wildlife:
        "Crucial refuge for the endangered Asian elephant (Elephas maximus) and one of the largest congregational sites in Assam for the endangered Greater Adjutant stork (Leptoptilos dubius).",
      local:
        "Provides foundational sustenance through commercial fishing, edible lotus and water lily harvesting, and fodder collection for over a dozen indigenous Karbi and Assamese villages.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Marshy channels and lush water hyacinth beds of Deepor Beel, Assam.",
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
          "The adjacent Boragaon dumping site directly leaches hazardous chemical pollutants, microplastics, and heavy metals straight into the core water body.",
        severity: "Critical",
      },
      {
        title: "Railway Track Bisecting Corridor",
        description:
          "A major broad-gauge railway line cuts directly through the southern boundary, resulting in frequent fatal collisions with crossing elephants.",
        severity: "Critical",
      },
      {
        title: "Encroachment by Warehousing & Industry",
        description:
          "Rapid commercial construction and logistics warehousing shrink peripheral buffer zones and block natural flood spill channels.",
        severity: "High",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Deepor Beel (Site No. 1207)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1207",
        accessedAt: "October 2026",
      },
      {
        title: "Action Plan for Restoration of Polluted Stretches of Deepor Beel",
        organization: "Pollution Control Board Assam (PCBA)",
        year: 2020,
        citationType: "Government Gazette",
        url: "https://pcbassam.org",
        accessedAt: "October 2026",
      },
      {
        title: "Status and Movement Ecology of Elephants in Deepor Beel Sanctuary",
        organization: "Aaranyak Biodiversity Conservation Organization",
        year: 2022,
        citationType: "Research Paper",
        url: "https://www.aaranyak.org",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Severe",
  },
  {
    id: "bhoj-wetland",
    name: "Bhoj Wetland",
    state: "Madhya Pradesh",
    country: "India",
    coordinates: { lat: 23.25, lng: 77.338 },
    designation: "Ramsar Site",
    designationYear: 2002,
    ramsarSiteNo: 1206,
    areaKm2: 32.01,
    elevationMeters: 523,
    biogeographicZone: "Malwa Plateau / Central Highlands (6A)",
    category: "Freshwater Lake",
    shortDescription:
      "A dual man-made lake system created in the 11th century in Bhopal, providing pristine potable water and crucial wintering habitat for resident cranes.",
    overview:
      "Consisting of two contiguous man-made reservoirs—the Upper Lake (Bhojtal, created in the 11th century by Paramara King Raja Bhoj) and the Lower Lake—Bhoj Wetland is located in Bhopal. Fed by the Kolans River and catchment streams, the Upper Lake has a monumental catchment of 361 km², serving as the principal source of drinking water for over 40% of the city's inhabitants.",
    importance: {
      ecological:
        "Sustains the hydrological security of Bhopal city, recharges municipal groundwater aquifers, and buffers regional climate fluctuations.",
      wildlife:
        "Wintering haven on the Central Asian Flyway attracting over 20,000 waterfowl and supporting healthy resident populations of the vulnerable Sarus crane.",
      local:
        "Supplies over 30 million gallons of potable water daily to Bhopal and supports vibrant eco-tourism, sailing academies, and managed inland fisheries.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Expansive waters and green shoreline borders of Upper Lake, Bhoj Wetland.",
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
          "Unauthorized residential and commercial developments continuously encroach upon the full reservoir level (FRL) buffer zone.",
        severity: "High",
      },
      {
        title: "Domestic Sewage & Organic Influx",
        description:
          "Multiple unintercepted urban drains empty into the lake system, elevating biochemical oxygen demand and stimulating invasive weed growth.",
        severity: "Moderate",
      },
      {
        title: "Religious Immersion Residues",
        description:
          "Seasonal idol immersions deposit plaster of Paris, synthetic paints, and toxic heavy metals into the lake sediment bed.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Bhoj Wetland (Site No. 1206)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1206",
        accessedAt: "October 2026",
      },
      {
        title: "Lake Conservation and Eco-Restoration Program Report for Bhoj Wetland",
        organization: "Environmental Planning & Coordination Organisation (EPCO), MP",
        year: 2019,
        citationType: "Government Gazette",
        url: "https://epco.in",
        accessedAt: "October 2026",
      },
      {
        title: "Limnological Assessment and Siltation Dynamics of Bhoj Wetland System",
        organization: "Barkatullah University Bioscience Department",
        year: 2021,
        citationType: "Research Paper",
        url: "https://www.bubhopal.ac.in",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "Moderate",
  },
  {
    id: "point-calimere",
    name: "Point Calimere Sanctuary",
    state: "Tamil Nadu",
    country: "India",
    coordinates: { lat: 10.32, lng: 79.85 },
    designation: "Ramsar Site",
    designationYear: 2002,
    ramsarSiteNo: 1210,
    areaKm2: 385,
    elevationMeters: 1,
    biogeographicZone: "Coromandel Coastal Plain (8A)",
    category: "Wetland Complex",
    shortDescription:
      "A rich mosaic of mangroves, hypersaline lagoons, tidal mudflats, and tropical dry evergreen forests on the Palk Strait coast of Tamil Nadu.",
    overview:
      "Point Calimere Wildlife and Bird Sanctuary is situated on a low promontory of the Coromandel Coast in Nagapattinam district. It encompasses the Muthupet mangrove wetlands, Great Vedaranyam Swamp, and expansive intertidal mudflats. It is bounded to the south by the shallow Palk Strait and to the east by the Bay of Bengal.",
    importance: {
      ecological:
        "The Muthupet mangrove ecosystem acts as a critical coastal bio-shield preventing marine erosion, mitigating storm surge velocity, and stabilizing coastal mudflats.",
      wildlife:
        "A premier staging terminal on the Central Asian Flyway hosting tens of thousands of Greater Flamingos and rare shorebirds like the critically endangered Spoon-billed sandpiper.",
      local:
        "Directly sustains coastal artisanal fisheries and traditional mud crab farming while supporting coastal protection for delta farmers.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1510853675132-58241c941e4f?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Vast tidal mudflats and coastal lagoons teeming with wading shorebirds at Point Calimere.",
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
        severity: "Severe",
      },
      {
        title: "Hyper-salinity in Lagoon Inlets",
        description:
          "Discharge of concentrated brine effluents from commercial salt-pan operations elevates localized salinity beyond tolerance thresholds.",
        severity: "High",
      },
      {
        title: "Illegal Feral Grazing",
        description:
          "Feral cattle and introduced Prosopis juliflora weeds exert high grazing stress on native dry evergreen seedlings and shorebird nesting dunes.",
        severity: "Moderate",
      },
    ],
    sources: [
      {
        title: "Information Sheet on Ramsar Wetlands (RIS) — Point Calimere Wildlife and Bird Sanctuary (Site No. 1210)",
        organization: "Ramsar Sites Information Service (RSIS)",
        year: 2002,
        citationType: "Official Registry",
        url: "https://rsis.ramsar.org/ris/1210",
        accessedAt: "October 2026",
      },
      {
        title: "Management Plan for Point Calimere Wildlife Sanctuary & Muthupet Mangroves",
        organization: "Tamil Nadu Forest Department",
        year: 2018,
        citationType: "Government Gazette",
        url: "https://www.forests.tn.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Shorebird Migration and Flamingo Population Dynamics at Point Calimere",
        organization: "Bombay Natural History Society (BNHS)",
        year: 2022,
        citationType: "Research Paper",
        url: "https://www.bnhs.org",
        accessedAt: "October 2026",
      },
    ],
    threatLevel: "High",
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

// Helper to return all wetlands
export function getAllWetlands(): Wetland[] {
  return WETLANDS_DATA;
}

// Authoritative biological metadata mapping for wetland fauna
export const SPECIES_METADATA_MAP: Record<
  string,
  {
    scientificName: string;
    taxa: "Avifauna" | "Mammal" | "Aquatic & Fish" | "Reptile";
    iucnStatus: IucnStatusCode;
    seasonality: "Resident" | "Winter Migrant" | "Breeding Visitor" | "Endemic Resident";
  }
> = {
  "Irrawaddy Dolphin": {
    scientificName: "Orcaella brevirostris",
    taxa: "Mammal",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
  },
  "Greater Flamingo": {
    scientificName: "Phoenicopterus roseus",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "White-bellied Sea Eagle": {
    scientificName: "Haliaeetus leucogaster",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Fishing Cat": {
    scientificName: "Prionailurus viverrinus",
    taxa: "Mammal",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Green Sea Turtle": {
    scientificName: "Chelonia mydas",
    taxa: "Reptile",
    iucnStatus: "EN",
    seasonality: "Breeding Visitor",
  },
  "Royal Bengal Tiger": {
    scientificName: "Panthera tigris tigris",
    taxa: "Mammal",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
  },
  "Estuarine Crocodile": {
    scientificName: "Crocodylus porosus",
    taxa: "Reptile",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Northern River Terrapin": {
    scientificName: "Batagur baska",
    taxa: "Reptile",
    iucnStatus: "CR",
    seasonality: "Resident",
  },
  "Sangai Brow-antlered Deer": {
    scientificName: "Rucervus eldii eldii",
    taxa: "Mammal",
    iucnStatus: "CR",
    seasonality: "Endemic Resident",
  },
  "Indian Python": {
    scientificName: "Python molurus",
    taxa: "Reptile",
    iucnStatus: "NT",
    seasonality: "Resident",
  },
  "Spot-billed Duck": {
    scientificName: "Anas poecilorhyncha",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Brown Fish Owl": {
    scientificName: "Ketupa zeylonensis",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Common Teal": {
    scientificName: "Anas crecca",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "Sarus Crane": {
    scientificName: "Grus antigone",
    taxa: "Avifauna",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Painted Stork": {
    scientificName: "Mycteria leucocephala",
    taxa: "Avifauna",
    iucnStatus: "NT",
    seasonality: "Breeding Visitor",
  },
  "Bar-headed Goose": {
    scientificName: "Anser indicus",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "Black-necked Stork": {
    scientificName: "Ephippiorhynchus asiaticus",
    taxa: "Avifauna",
    iucnStatus: "NT",
    seasonality: "Resident",
  },
  "Sambar Deer": {
    scientificName: "Rusa unicolor",
    taxa: "Mammal",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Indian Spot-billed Duck": {
    scientificName: "Anas poecilorhyncha",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Malabar Grey Hornbill": {
    scientificName: "Ocyceros griseus",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Endemic Resident",
  },
  "Pearl Spot (Karimeen)": {
    scientificName: "Etroplus suratensis",
    taxa: "Aquatic & Fish",
    iucnStatus: "LC",
    seasonality: "Endemic Resident",
  },
  "Giant Freshwater Prawn": {
    scientificName: "Macrobrachium rosenbergii",
    taxa: "Aquatic & Fish",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Smooth-coated Otter": {
    scientificName: "Lutrogale perspicillata",
    taxa: "Mammal",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Indus River Dolphin": {
    scientificName: "Platanista minor",
    taxa: "Mammal",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
  },
  "Tufted Duck": {
    scientificName: "Aythya fuligula",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "Cotton Pygmy Goose": {
    scientificName: "Nettapus coromandelianus",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Indian Flapshell Turtle": {
    scientificName: "Lissemys punctata",
    taxa: "Reptile",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Black-necked Crane": {
    scientificName: "Grus nigricollis",
    taxa: "Avifauna",
    iucnStatus: "NT",
    seasonality: "Breeding Visitor",
  },
  "Tibetan Wild Ass (Kiang)": {
    scientificName: "Equus kiang",
    taxa: "Mammal",
    iucnStatus: "LC",
    seasonality: "Endemic Resident",
  },
  "Snow Leopard": {
    scientificName: "Panthera uncia",
    taxa: "Mammal",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Brown-headed Gull": {
    scientificName: "Chroicocephalus brunnicephalus",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Breeding Visitor",
  },
  "Asian Elephant": {
    scientificName: "Elephas maximus",
    taxa: "Mammal",
    iucnStatus: "EN",
    seasonality: "Resident",
  },
  "Greater Adjutant Stork": {
    scientificName: "Leptoptilos dubius",
    taxa: "Avifauna",
    iucnStatus: "EN",
    seasonality: "Breeding Visitor",
  },
  "Spot-billed Pelican": {
    scientificName: "Pelecanus philippensis",
    taxa: "Avifauna",
    iucnStatus: "NT",
    seasonality: "Resident",
  },
  "Lesser Adjutant": {
    scientificName: "Leptoptilos javanicus",
    taxa: "Avifauna",
    iucnStatus: "VU",
    seasonality: "Resident",
  },
  "Ganges River Dolphin": {
    scientificName: "Platanista gangetica",
    taxa: "Mammal",
    iucnStatus: "EN",
    seasonality: "Resident",
  },
  "White-rumped Vulture": {
    scientificName: "Gyps bengalensis",
    taxa: "Avifauna",
    iucnStatus: "CR",
    seasonality: "Resident",
  },
  "Eurasian Coot": {
    scientificName: "Fulica atra",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "Red-crested Pochard": {
    scientificName: "Netta rufina",
    taxa: "Avifauna",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
  },
  "Blackbuck": {
    scientificName: "Antilope cervicapra",
    taxa: "Mammal",
    iucnStatus: "LC",
    seasonality: "Resident",
  },
  "Olive Ridley Sea Turtle": {
    scientificName: "Lepidochelys olivacea",
    taxa: "Reptile",
    iucnStatus: "VU",
    seasonality: "Breeding Visitor",
  },
  "Spoon-billed Sandpiper": {
    scientificName: "Calidris pygmaea",
    taxa: "Avifauna",
    iucnStatus: "CR",
    seasonality: "Winter Migrant",
  },
};

export function getWetlandWildlife(wetland: Wetland): WildlifeSpecies[] {
  if (wetland.wildlifeDetails && wetland.wildlifeDetails.length > 0) {
    return wetland.wildlifeDetails;
  }
  return wetland.keyWildlife.map((speciesName) => {
    const meta = SPECIES_METADATA_MAP[speciesName];
    if (meta) {
      return {
        commonName: speciesName,
        scientificName: meta.scientificName,
        taxa: meta.taxa,
        iucnStatus: meta.iucnStatus,
        seasonality: meta.seasonality,
      };
    }
    return {
      commonName: speciesName,
      taxa: "Avifauna",
      iucnStatus: "LC",
      seasonality: "Resident",
    };
  });
}
