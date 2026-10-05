import { Species } from "@/types/species";
import { Wetland } from "@/types/wetland";
import { WETLANDS_DATA } from "@/lib/data/wetlands";

export const SPECIES_DATA: Species[] = [
  {
    id: "sangai-deer",
    slug: "sangai-deer",
    name: "Sangai Brow-antlered Deer",
    scientificName: "Rucervus eldii eldii",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "A critically endangered, endemic subspecies of brow-antlered deer uniquely adapted to navigating floating mats of thick vegetative debris, known locally as phumdis.",
    ecologicalRole:
      "Acts as the paramount flagship species for Loktak Lake and Keibul Lamjao National Park. Its survival is completely tied to the buoyancy, thickness, and seasonal water level fluctuations of the floating phumdi ecosystem.",
    image:
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Endemic Sangai deer foraging on floating vegetation mats.",
    photoCredit: "Wildlife Photography / Unsplash",
    iucnStatus: "CR",
    seasonality: "Endemic Resident",
    wetlands: ["loktak-lake"],
    sources: [
      {
        title: "IUCN Red List Assessment: Rucervus eldii",
        organization: "IUCN Red List of Threatened Species",
        year: 2020,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/4265/22166803",
        accessedAt: "October 2026",
      },
      {
        title: "Ecology and Conservation Biology of the Eld's Deer (Sangai) in Keibul Lamjao",
        organization: "Wildlife Institute of India (WII)",
        year: 2021,
        citationType: "Research Paper",
        url: "https://wii.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "irrawaddy-dolphin",
    slug: "irrawaddy-dolphin",
    name: "Irrawaddy Dolphin",
    scientificName: "Orcaella brevirostris",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "A euryhaline oceanic dolphin with a distinctive rounded forehead and blunt snout, inhabiting shallow coastal waters, estuaries, and brackish lagoons.",
    ecologicalRole:
      "Apex aquatic predator serving as a biological barometer for estuarine health. Chilika Lake hosts one of the only two known lagoonal populations globally, requiring open brackish channels and healthy fish nurseries.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Irrawaddy dolphin surfacing in brackish coastal waters.",
    photoCredit: "Coastal Cetacean Survey / Unsplash",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
    wetlands: ["chilika-lake", "sundarbans-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Orcaella brevirostris",
        organization: "IUCN Red List of Threatened Species",
        year: 2017,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/15419/123790805",
        accessedAt: "October 2026",
      },
      {
        title: "Status and Distribution of Irrawaddy Dolphins in Chilika Lagoon",
        organization: "Chilika Development Authority (CDA) & WII",
        year: 2021,
        citationType: "Research Paper",
        url: "https://www.chilika.com",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "indus-river-dolphin",
    slug: "indus-river-dolphin",
    name: "Indus River Dolphin",
    scientificName: "Platanista minor",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "A functionally blind obligate freshwater cetacean that relies exclusively on sophisticated echolocation to navigate turbid river waters and riverine floodplains.",
    ecologicalRole:
      "In India, this critically isolated population is exclusively found in the Beas River and Harike Wetland confluence, signifying the ecological integrity of riverine flow and deep scour pools.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Freshwater river dolphin navigating riverine channels.",
    photoCredit: "Freshwater Biome Archive / Unsplash",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
    wetlands: ["harike-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Platanista minor",
        organization: "IUCN Red List of Threatened Species",
        year: 2022,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/41757/216262804",
        accessedAt: "October 2026",
      },
      {
        title: "Conservation Ecology of the Indus River Dolphin in Punjab",
        organization: "WWF-India & Punjab Forest Department",
        year: 2018,
        citationType: "Research Paper",
        url: "https://www.wwfindia.org",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "ganges-river-dolphin",
    slug: "ganges-river-dolphin",
    name: "Ganges River Dolphin",
    scientificName: "Platanista gangetica",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "India's National Aquatic Animal, an ancient freshwater river dolphin navigating the Ganges-Brahmaputra river basins and associated floodplain beels.",
    ecologicalRole:
      "Top-tier freshwater indicator whose presence reflects clean dissolved oxygen levels and unfragmented river connectivity between Brahmaputra channels and peripheral wetlands like Deepor Beel.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "River dolphin surfacing along major freshwater river systems.",
    photoCredit: "Riverine Conservation / Unsplash",
    iucnStatus: "EN",
    seasonality: "Resident",
    wetlands: ["deepor-beel"],
    sources: [
      {
        title: "IUCN Red List Assessment: Platanista gangetica",
        organization: "IUCN Red List of Threatened Species",
        year: 2022,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/41758/216262916",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "royal-bengal-tiger",
    slug: "royal-bengal-tiger",
    name: "Royal Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "The world's only mangrove-adapted tiger population, exhibiting remarkable swimming capabilities across wide tidal channels and saltwater creeks.",
    ecologicalRole:
      "Keystone terrestrial predator regulating prey densities of spotted deer and wild boar throughout the tidal mudflats and halophytic mangrove islands of the Sundarbans.",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Royal Bengal tiger moving across mangrove wetland terrain.",
    photoCredit: "Wildlife Reserve / Unsplash",
    iucnStatus: "EN",
    seasonality: "Endemic Resident",
    wetlands: ["sundarbans-wetland"],
    sources: [
      {
        title: "Status of Tigers, Co-predators and Prey in India: Sundarbans Landscape",
        organization: "National Tiger Conservation Authority (NTCA) & WII",
        year: 2023,
        citationType: "Government Gazette",
        url: "https://projecttiger.nic.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "fishing-cat",
    slug: "fishing-cat",
    name: "Fishing Cat",
    scientificName: "Prionailurus viverrinus",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "A medium-sized wild cat with semi-webbed paws and water-resistant double-layered fur, expertly adapted for hunting fish, crabs, and amphibians in dense reed beds.",
    ecologicalRole:
      "Flagship species for marshland and mangrove conservation. Highly vulnerable to shoreline reclamation and the destruction of littoral reed banks.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Fishing cat camouflaged in wetland vegetation.",
    photoCredit: "Small Wild Cat Conservation / Unsplash",
    iucnStatus: "VU",
    seasonality: "Resident",
    wetlands: ["chilika-lake", "sundarbans-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Prionailurus viverrinus",
        organization: "IUCN Red List of Threatened Species",
        year: 2016,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/18150/50662615",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "smooth-coated-otter",
    slug: "smooth-coated-otter",
    name: "Smooth-coated Otter",
    scientificName: "Lutrogale perspicillata",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "A gregarious semi-aquatic carnivore characterized by smooth velvety pelage, strong webbed paws, and flattened tail used as a powerful underwater rudder.",
    ecologicalRole:
      "Indicates unpolluted freshwater streams, robust fish stocks, and vegetated riverbanks required for denning across peninsular and northern wetlands.",
    image:
      "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Smooth-coated otter in freshwater aquatic habitat.",
    photoCredit: "River Otter Monitoring / Unsplash",
    iucnStatus: "VU",
    seasonality: "Resident",
    wetlands: ["vembanad-kol-wetland", "harike-wetland", "bhoj-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Lutrogale perspicillata",
        organization: "IUCN Red List of Threatened Species",
        year: 2021,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/12427/164579961",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "asian-elephant",
    slug: "asian-elephant",
    name: "Asian Elephant",
    scientificName: "Elephas maximus",
    taxa: "Mammal",
    category: "Mammals",
    description:
      "The largest terrestrial mammal in Asia, frequenting riparian floodplains and marshy basins for hydration, cooling, and feeding on succulent aquatic plants.",
    ecologicalRole:
      "Landscape engineer whose migratory movements between Rani-Garbhanga forests and Deepor Beel maintain seasonal foraging trails and disperse wetland plant seeds.",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Asian elephant herd at freshwater wetland margin.",
    photoCredit: "Wildlife Conservation / Unsplash",
    iucnStatus: "EN",
    seasonality: "Resident",
    wetlands: ["deepor-beel"],
    sources: [
      {
        title: "Elephant Corridors of India: Deepor Beel Corridor Assessment",
        organization: "Wildlife Trust of India (WTI) & Project Elephant, MoEFCC",
        year: 2017,
        citationType: "Government Gazette",
        url: "https://www.wti.org.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "greater-flamingo",
    slug: "greater-flamingo",
    name: "Greater Flamingo",
    scientificName: "Phoenicopterus roseus",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "A tall, striking wading bird with pink-tinged plumage and downward-bent bill specialized for filter-feeding on microscopic crustaceans and blue-green algae.",
    ecologicalRole:
      "Relies on expansive shallow hypersaline mudflats and coastal lagoons along the Central Asian Flyway to forage in massive wintering aggregations numbering in tens of thousands.",
    image:
      "https://images.unsplash.com/photo-1510853675132-58241c941e4f?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Greater flamingos feeding in coastal lagoon shallows.",
    photoCredit: "Ornithology Archive / Unsplash",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
    wetlands: ["chilika-lake", "point-calimere"],
    sources: [
      {
        title: "IUCN Red List Assessment: Phoenicopterus roseus",
        organization: "BirdLife International & IUCN",
        year: 2019,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22697360/155527405",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "sarus-crane",
    slug: "sarus-crane",
    name: "Sarus Crane",
    scientificName: "Grus antigone",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "The world's tallest flying bird, recognized by its slate-grey plumage, contrasting crimson head, and iconic lifelong pair-bonding behavior.",
    ecologicalRole:
      "Flagship bio-indicator of natural freshwater marshes and flooded agrarian floodplains. Builds extensive floating or emergent mound nests in shallow wetlands.",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Sarus crane pair foraging in shallow marsh waters.",
    photoCredit: "Avian Photography / Unsplash",
    iucnStatus: "VU",
    seasonality: "Resident",
    wetlands: ["keoladeo-national-park", "bhoj-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Antigone antigone",
        organization: "BirdLife International & IUCN",
        year: 2021,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22692064/176043236",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "bar-headed-goose",
    slug: "bar-headed-goose",
    name: "Bar-headed Goose",
    scientificName: "Anser indicus",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "One of the world's highest-flying birds, capable of physiological feats allowing it to migrate over the high Himalayan mountain passes at altitudes exceeding 7,000 meters.",
    ecologicalRole:
      "Connects trans-Himalayan high-altitude breeding lakes like Tso Moriri with lowland wintering grounds like Keoladeo National Park, grazing heavily on wetland grasses and sedges.",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Bar-headed goose grazing on wetland shores.",
    photoCredit: "Himalayan Avifauna / Unsplash",
    iucnStatus: "LC",
    seasonality: "Winter Migrant",
    wetlands: ["keoladeo-national-park", "tso-moriri"],
    sources: [
      {
        title: "Physiological Ecology and High-Altitude Migration of Bar-headed Goose",
        organization: "BNHS & Wildlife Institute of India",
        year: 2020,
        citationType: "Research Paper",
        url: "https://www.bnhs.org",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "black-necked-crane",
    slug: "black-necked-crane",
    name: "Black-necked Crane",
    scientificName: "Grus nigricollis",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "A revered high-altitude alpine crane with a greyish-white body, black neck and tail, and a bright red crown patch on the head.",
    ecologicalRole:
      "The only crane species adapted exclusively to breed in high-altitude alpine bogs and trans-Himalayan saline/brackish lakes like Tso Moriri in Ladakh.",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Black-necked crane on high-altitude alpine wetland meadow.",
    photoCredit: "Changthang Ecology / Unsplash",
    iucnStatus: "NT",
    seasonality: "Breeding Visitor",
    wetlands: ["tso-moriri"],
    sources: [
      {
        title: "IUCN Red List Assessment: Grus nigricollis",
        organization: "BirdLife International & IUCN",
        year: 2020,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22692159/179838031",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "greater-adjutant-stork",
    slug: "greater-adjutant-stork",
    name: "Greater Adjutant Stork",
    scientificName: "Leptoptilos dubius",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "One of the rarest storks on Earth, known locally in Assam as 'Hargila' ('bone-swallower'), possessing a massive wedge-shaped bill and a bare pink pouch.",
    ecologicalRole:
      "Crucial scavenger that consumes carcasses and aquatic waste, mitigating disease propagation in floodplain ecosystems like Deepor Beel.",
    image:
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Greater Adjutant Stork wading through marsh vegetation.",
    photoCredit: "Hargila Army / Aaranyak / Unsplash",
    iucnStatus: "EN",
    seasonality: "Breeding Visitor",
    wetlands: ["deepor-beel"],
    sources: [
      {
        title: "IUCN Red List Assessment: Leptoptilos dubius",
        organization: "BirdLife International & IUCN",
        year: 2020,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22697721/175510691",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "spot-billed-pelican",
    slug: "spot-billed-pelican",
    name: "Spot-billed Pelican",
    scientificName: "Pelecanus philippensis",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "A large colonial waterbird featuring a distinctive greyish plumage, a pinkish pouch with spotted markings on the bill, and expansive wingspan.",
    ecologicalRole:
      "Breeds colonially in tall trees adjacent to large open freshwater lakes and coastal lagoons, feeding on schooling fish and maintaining balanced aquatic populations.",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Spot-billed pelican floating on calm open waters.",
    photoCredit: "Wetland Avifauna / Unsplash",
    iucnStatus: "NT",
    seasonality: "Resident",
    wetlands: ["deepor-beel", "point-calimere"],
    sources: [
      {
        title: "IUCN Red List Assessment: Pelecanus philippensis",
        organization: "BirdLife International & IUCN",
        year: 2017,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22697604/117970266",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "spoon-billed-sandpiper",
    slug: "spoon-billed-sandpiper",
    name: "Spoon-billed Sandpiper",
    scientificName: "Calidris pygmaea",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "A diminutive, critically endangered migratory wader possessing a unique spatula-shaped bill used to probe intertidal mud for benthic worms and larvae.",
    ecologicalRole:
      "Extreme flyway specialist whose global survival depends upon uncompromised intertidal mudflats and coastal salt-marshes such as Point Calimere.",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Shorebird probing soft intertidal sediment mudflats.",
    photoCredit: "Shorebird Ecology / Unsplash",
    iucnStatus: "CR",
    seasonality: "Winter Migrant",
    wetlands: ["point-calimere"],
    sources: [
      {
        title: "IUCN Red List Assessment: Calidris pygmaea",
        organization: "BirdLife International & IUCN",
        year: 2018,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22693853/134286232",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "white-rumped-vulture",
    slug: "white-rumped-vulture",
    name: "White-rumped Vulture",
    scientificName: "Gyps bengalensis",
    taxa: "Avifauna",
    category: "Birds",
    description:
      "A critically endangered Old World vulture that roosts in tall riparian trees around large water bodies like Bhopal's Upper Lake (Bhoj Wetland).",
    ecologicalRole:
      "Ecosystem sanitary worker preventing disease transmission by swiftly recycling animal biomass across rural and peri-urban wetland fringes.",
    image:
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Vulture soaring over wetland catchment terrain.",
    photoCredit: "Raptor Conservation / Unsplash",
    iucnStatus: "CR",
    seasonality: "Resident",
    wetlands: ["bhoj-wetland"],
    sources: [
      {
        title: "IUCN Red List Assessment: Gyps bengalensis",
        organization: "BirdLife International & IUCN",
        year: 2021,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/22695194/204595240",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "estuarine-crocodile",
    slug: "estuarine-crocodile",
    name: "Estuarine Crocodile",
    scientificName: "Crocodylus porosus",
    taxa: "Reptile",
    category: "Reptiles",
    description:
      "The largest living reptile on Earth, with adult males reaching up to 6 meters, thriving across mangrove swamps, estuaries, and tidal river stretches.",
    ecologicalRole:
      "Apex predator maintaining ecological balance in estuarine food webs, shaping prey behavior and regulating dominant fish and mammal species in the Sundarbans.",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Estuarine crocodile basking on tidal mangrove mudbank.",
    photoCredit: "Reptile Conservation / Unsplash",
    iucnStatus: "LC",
    seasonality: "Resident",
    wetlands: ["sundarbans-wetland"],
    sources: [
      {
        title: "Status and Ecology of Crocodylus porosus in Sundarban Biosphere Reserve",
        organization: "Zoological Survey of India (ZSI)",
        year: 2019,
        citationType: "Research Paper",
        url: "https://zsi.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "olive-ridley-turtle",
    slug: "olive-ridley-turtle",
    name: "Olive Ridley Sea Turtle",
    scientificName: "Lepidochelys olivacea",
    taxa: "Reptile",
    category: "Reptiles",
    description:
      "A medium-sized marine turtle renowned for mass nesting phenomena ('arribada') along the Bay of Bengal shoreline and adjoining shallow coastal lagoons.",
    ecologicalRole:
      "Forages on jellyfish, molluscs, and crustaceans in coastal waters and utilizes protected barrier beaches adjoining Point Calimere and Chilika for seasonal nesting.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Sea turtle swimming in coastal waters.",
    photoCredit: "Marine Biology / Unsplash",
    iucnStatus: "VU",
    seasonality: "Breeding Visitor",
    wetlands: ["point-calimere", "chilika-lake"],
    sources: [
      {
        title: "IUCN Red List Assessment: Lepidochelys olivacea",
        organization: "Marine Turtle Specialist Group & IUCN",
        year: 2008,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/11533/3292351",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "northern-river-terrapin",
    slug: "northern-river-terrapin",
    name: "Northern River Terrapin",
    scientificName: "Batagur baska",
    taxa: "Reptile",
    category: "Reptiles",
    description:
      "One of the world's most critically endangered freshwater and estuarine turtles, historically widespread across Southeast Asia and the Sundarbans delta.",
    ecologicalRole:
      "Herbivorous and omnivorous grazer in tidal waterways whose conservation breeding initiatives are centered in the mangrove sanctuaries of the Sundarbans.",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "River terrapin in estuarine riverine waters.",
    photoCredit: "Turtle Survival Alliance / Unsplash",
    iucnStatus: "CR",
    seasonality: "Resident",
    wetlands: ["sundarbans-wetland"],
    sources: [
      {
        title: "Conservation Breeding and Reintroduction of Batagur baska in Sundarbans",
        organization: "Turtle Survival Alliance (TSA) & West Bengal Forest Dept",
        year: 2022,
        citationType: "Research Paper",
        url: "https://turtlesurvival.org",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "indian-python",
    slug: "indian-python",
    name: "Indian Python",
    scientificName: "Python molurus",
    taxa: "Reptile",
    category: "Reptiles",
    description:
      "A large, non-venomous constrictor snake adept at swimming and hiding in dense marshy vegetation, riverine thickets, and reedbeds.",
    ecologicalRole:
      "Regulates rodent and small mammal populations within wetland floodplains and reed borders across Loktak Lake.",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Python coiled in wetland underbrush.",
    photoCredit: "Herpetology Study / Unsplash",
    iucnStatus: "NT",
    seasonality: "Resident",
    wetlands: ["loktak-lake"],
    sources: [
      {
        title: "IUCN Red List Assessment: Python molurus",
        organization: "IUCN Red List of Threatened Species",
        year: 2021,
        citationType: "Official Registry",
        url: "https://www.iucnredlist.org/species/193451/2237271",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "pearl-spot-fish",
    slug: "pearl-spot-fish",
    name: "Pearl Spot (Karimeen)",
    scientificName: "Etroplus suratensis",
    taxa: "Aquatic & Fish",
    category: "Aquatic & Fish",
    description:
      "An indigenous cichlid fish celebrated as Kerala's official State Fish, inhabiting backwaters, lagoons, and estuarine reaches.",
    ecologicalRole:
      "Herbivorous and detritivorous feeder that plays an essential role in benthic algae management and provides foundational sustenance for traditional backwater fisheries in Vembanad-Kol.",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Indigenous cichlid fish in freshwater aquatic vegetation.",
    photoCredit: "Aquatic Ecosystems / Unsplash",
    iucnStatus: "LC",
    seasonality: "Endemic Resident",
    wetlands: ["vembanad-kol-wetland"],
    sources: [
      {
        title: "Biology, Fishery and Culture of Etroplus suratensis in Kerala Backwaters",
        organization: "Central Marine Fisheries Research Institute (CMFRI)",
        year: 2019,
        citationType: "Research Paper",
        url: "https://www.cmfri.org.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "giant-freshwater-prawn",
    slug: "giant-freshwater-prawn",
    name: "Giant Freshwater Prawn",
    scientificName: "Macrobrachium rosenbergii",
    taxa: "Aquatic & Fish",
    category: "Aquatic & Fish",
    description:
      "A commercially and ecologically vital crustacean that migrates between downstream brackish waters for larval spawning and upstream freshwater lakes for maturation.",
    ecologicalRole:
      "Keystone invertebrate grazer and detritivore in Vembanad-Kol, sensitive to barrier constructions that impede migratory catadromous cycles.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Freshwater crustacean in backwater ecosystem.",
    photoCredit: "Crustacean Biology / Unsplash",
    iucnStatus: "LC",
    seasonality: "Resident",
    wetlands: ["vembanad-kol-wetland"],
    sources: [
      {
        title: "Downstream Migration and Spawning Ecology of Macrobrachium rosenbergii",
        organization: "National Institute of Oceanography (CSIR-NIO)",
        year: 2020,
        citationType: "Research Paper",
        url: "https://www.nio.res.in",
        accessedAt: "October 2026",
      },
    ],
  },
];

/**
 * Returns all species records.
 */
export function getAllSpecies(): Species[] {
  return SPECIES_DATA;
}

/**
 * Returns a specific species record by slug.
 */
export function getSpeciesBySlug(slug: string): Species | undefined {
  return SPECIES_DATA.find((s) => s.slug === slug);
}

/**
 * Returns full Wetland objects associated with a species slug.
 * Zero duplicate records: dynamically resolved from WETLANDS_DATA.
 */
export function getWetlandsForSpecies(speciesSlug: string): Wetland[] {
  const species = getSpeciesBySlug(speciesSlug);
  if (!species) return [];
  const wetlandIds = new Set(species.wetlands);
  return WETLANDS_DATA.filter((w) => wetlandIds.has(w.id));
}

/**
 * Returns all species associated with a specific wetland ID.
 */
export function getSpeciesForWetland(wetlandId: string): Species[] {
  return SPECIES_DATA.filter((s) => s.wetlands.includes(wetlandId));
}

/**
 * Returns other species, optionally filtered by taxa or excluding the current slug.
 */
export function getRelatedSpecies(currentSlug: string, taxa?: string): Species[] {
  return SPECIES_DATA.filter((s) => {
    if (s.slug === currentSlug) return false;
    if (taxa && s.taxa !== taxa) return false;
    return true;
  });
}

/**
 * Maps a common species name to its canonical slug in SPECIES_DATA.
 */
export function matchSpeciesNameToSlug(name: string): string | undefined {
  const direct = SPECIES_DATA.find(
    (s) => s.name.toLowerCase() === name.toLowerCase() || s.id === name.toLowerCase()
  );
  if (direct) return direct.slug;

  // Fuzzy match on partial name
  const lower = name.toLowerCase();
  const partial = SPECIES_DATA.find((s) => {
    const sName = s.name.toLowerCase();
    return sName.includes(lower) || lower.includes(sName);
  });
  return partial?.slug;
}
