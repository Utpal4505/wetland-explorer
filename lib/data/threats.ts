import { ThreatCategory } from "@/types/threat";
import { Wetland } from "@/types/wetland";
import { WETLANDS_DATA } from "@/lib/data/wetlands";

export const THREATS_DATA: ThreatCategory[] = [
  {
    id: "pollution",
    name: "Pollution & Waste Influx",
    slug: "pollution",
    shortDescription:
      "Contamination from untreated municipal sewage, industrial effluents, agricultural runoff, and solid waste dumps.",
    overview:
      "Wetlands naturally filter and purify surface water, but excessive anthropogenic discharge overwhelms their bio-assimilative capacity. Unregulated sewage outfalls, chemical pesticides from surrounding agricultural belts, toxic industrial effluents, and leaching municipal landfills introduce hazardous pollutants, heavy metals, and hyper-nutrient loads into aquatic ecosystems across India.",
    ecologicalImpact:
      "Nutrient loading triggers massive algal blooms and rapid eutrophication, depleting dissolved oxygen levels required by fish and submerged macrophytes. Chemical toxicity causes bioaccumulation in the food web, directly harming resident piscivorous mammals like the Gangetic dolphin and fishing cat, while degrading drinking water quality for downstream communities.",
    keyDrivers: [
      "Untreated municipal sewage discharge",
      "Industrial chemical and heavy metal effluents",
      "Agricultural fertilizer and pesticide runoff",
      "Leaching from solid waste dumping grounds",
      "Religious immersion residues and festival debris",
    ],
    iconName: "Droplets",
    wetlands: [
      "harike-wetland",
      "deepor-beel",
      "bhoj-wetland",
      "vembanad-kol-wetland",
      "chilika-lake",
      "loktak-lake",
      "keoladeo-national-park",
      "tso-moriri",
    ],
    sources: [
      {
        title: "National Water Quality Monitoring Programme: Status of Water Quality in Indian Water Bodies",
        organization: "Central Pollution Control Board (CPCB) & MoEFCC",
        year: 2022,
        citationType: "Government Gazette",
        url: "https://cpcb.nic.in",
        accessedAt: "October 2026",
      },
      {
        title: "Guidelines for Integrated Management of Wetlands in India",
        organization: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
        year: 2020,
        citationType: "Official Registry",
        url: "https://moef.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "encroachment",
    name: "Encroachment & Land Reclamation",
    slug: "encroachment",
    shortDescription:
      "Unauthorized landfilling, commercial infrastructure expansion, and conversion of wetland margins into built environments.",
    overview:
      "Rapid urbanization and land valuation pressures lead to gradual or aggressive reclamation of wetland margins, floodplains, and peripheral buffer zones. Wetlands are frequently viewed as vacant wastelands, resulting in unauthorized real estate construction, railway alignments, industrial warehouses, and aquaculture conversions that permanently reduce water spread area.",
    ecologicalImpact:
      "Fragmentation of contiguous aquatic habitat eliminates critical littoral breeding grounds for amphibians and waterfowl. Infrastructure corridors bisect ancient wildlife migration pathways—such as the railway line cutting through the Deepor Beel elephant corridor—increasing human-wildlife conflict and obliterating natural flood-spill retention basins.",
    keyDrivers: [
      "Real estate and residential sprawl onto full reservoir levels (FRL)",
      "Commercial warehousing and industrial infrastructure corridors",
      "Unauthorized landfilling and silt island farming",
      "Conversion of natural mudflats into intensive prawn aquaculture gherries",
      "Linear infrastructure bisecting protected wildlife corridors",
    ],
    iconName: "Building",
    wetlands: [
      "deepor-beel",
      "bhoj-wetland",
      "vembanad-kol-wetland",
      "harike-wetland",
      "chilika-lake",
      "tso-moriri",
    ],
    sources: [
      {
        title: "Wetlands (Conservation and Management) Rules: Statutory Directive on Encroachments",
        organization: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
        year: 2017,
        citationType: "Government Gazette",
        url: "https://moef.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Judicial Mandates on Conservation of Wetlands and Prevention of Reclamation",
        organization: "National Green Tribunal (Principal Bench, New Delhi)",
        year: 2021,
        citationType: "Official Registry",
        url: "https://greentribunal.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "hydrological-alteration",
    name: "Hydrological Alteration & Inflow Diversion",
    slug: "hydrological-alteration",
    shortDescription:
      "Upstream damming, regulatory barrages, saltwater barriers, and canal diversions disrupting natural seasonal flow regimes.",
    overview:
      "Wetlands depend on dynamic seasonal hydrological pulses—rhythmic flood and drawdown cycles—to replenish nutrients, maintain salinity gradients, and trigger fish spawning. Large-scale hydrological engineering works such as barrages, upstream reservoir impoundments, and salinity regulators fundamentally alter the timing, volume, and velocity of water entering these water bodies.",
    ecologicalImpact:
      "Artificial permanent inundation prevents the seasonal drying essential for nutrient oxidation and vegetation regeneration, as seen with the floating phumdis of Loktak Lake. Conversely, water abstraction starves downstream marshes of freshwater, collapsing brackish estuarine ecotones and turning thriving freshwater lagoons into stagnant reservoirs.",
    keyDrivers: [
      "Barrages maintaining artificially high, non-fluctuating water levels",
      "Upstream dam impoundments curtailing seasonal freshwater flushes",
      "Saltwater intrusion barriers blocking estuarine tidal ingress",
      "Canal diversions for intensive agricultural irrigation",
      "Depletion of shallow aquifers feeding groundwater-dependent wetlands",
    ],
    iconName: "Dam",
    wetlands: [
      "loktak-lake",
      "vembanad-kol-wetland",
      "point-calimere",
      "keoladeo-national-park",
    ],
    sources: [
      {
        title: "Hydrological Regimes and Environmental Flows in Indian Wetlands",
        organization: "Central Water Commission (CWC)",
        year: 2020,
        citationType: "Government Gazette",
        url: "http://cwc.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "Ecological Consequences of Water Level Regulation at Loktak Lake and Ithai Barrage",
        organization: "Loktak Development Authority & WII",
        year: 2019,
        citationType: "Research Paper",
        url: "https://wii.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "invasive-species",
    name: "Invasive Alien Species",
    slug: "invasive-species",
    shortDescription:
      "Proliferation of aggressive non-native flora and fauna choking open waters and displacing indigenous biodiversity.",
    overview:
      "Invasive exotic species capitalize on elevated nutrient levels and disturbed hydrological regimes to outcompete indigenous species. Floating aquatic weeds such as water hyacinth (Eichhornia crassipes) and terrestrial invaders like mesquite (Prosopis juliflora) form impenetrable, rapid-spreading monocultures across water surfaces and nesting meadows.",
    ecologicalImpact:
      "Dense carpets of invasive weeds block sunlight penetration, shutting down underwater photosynthesis by indigenous phytoplankton and submerged macrophytes. As massive biomass decays, dissolved oxygen plunges to lethal levels for native fish. On shorelines, thorny invasive thickets choke native trees required by colonial nesting waterfowl.",
    keyDrivers: [
      "Water hyacinth (Eichhornia crassipes) unchecked spread",
      "Proliferation of Prosopis juliflora shrubs displacing indigenous flora",
      "Escape and introduction of exotic commercial fish species",
      "Nutrient enrichment providing optimal conditions for weed propagation",
      "Absence of natural biological control agents in introduced ecosystems",
    ],
    iconName: "Sprout",
    wetlands: [
      "harike-wetland",
      "keoladeo-national-park",
      "loktak-lake",
      "point-calimere",
    ],
    sources: [
      {
        title: "Invasive Alien Species of India: National Priority Species and Impact Assessment",
        organization: "National Biodiversity Authority (NBA)",
        year: 2021,
        citationType: "Official Registry",
        url: "http://nbaindia.org",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "siltation",
    name: "Catchment Siltation & Sedimentation",
    slug: "siltation",
    shortDescription:
      "Heavy sediment accumulation from degraded feeder catchments, reducing water storage capacity and altering basin morphology.",
    overview:
      "Catchment deforestation, unsustainable agricultural tilling on steep slopes, and excessive runoff transport millions of tons of topsoil into river systems feeding wetlands. When sediment-laden waters reach slow-moving wetland basins, particles settle rapidly, choking vital inlet channels, transforming open water into marshland, and shifting estuary mouth dynamics.",
    ecologicalImpact:
      "Excessive sedimentation significantly reduces overall water holding capacity, diminishing the wetland's ability to act as a buffer against monsoon flash floods. Silt deposition smothers benthic invertebrate beds and seagrass meadows, reducing foraging availability for migratory wading birds and altering the navigability of natural watercourses.",
    keyDrivers: [
      "Catchment deforestation and devegetation in upstream river basins",
      "Intensive slope farming without adequate soil conservation measures",
      "Choking of natural river inlet channels and tidal exchange mouths",
      "Uncontrolled surface runoff from quarrying and hill construction",
      "Accumulation of sediment islands encroached for seasonal cultivation",
    ],
    iconName: "Layers",
    wetlands: [
      "chilika-lake",
      "harike-wetland",
      "loktak-lake",
    ],
    sources: [
      {
        title: "Sedimentation and Bathymetric Dynamics of Indian Reservoir and Wetland Systems",
        organization: "Central Water Commission (CWC) & MoWR",
        year: 2019,
        citationType: "Government Gazette",
        url: "http://cwc.gov.in",
        accessedAt: "October 2026",
      },
    ],
  },
  {
    id: "climate-impact",
    name: "Climate Extremes & Sea-Level Rise",
    slug: "climate-impact",
    shortDescription:
      "Accelerating thermal warming, sea-level rise, erratic monsoons, and extreme weather events stressing fragile biomes.",
    overview:
      "Global climate breakdown exerts unprecedented pressure on fragile wetland ecosystems across disparate biomes—from coastal mangrove deltas to high-altitude Himalayan lakes. Coastal wetlands experience rising sea levels and intensified cyclone frequencies, while alpine wetlands face accelerated glacial retreat and erratic precipitation patterns.",
    ecologicalImpact:
      "Tidal surges submerge low-lying mangrove islands and saline mudflats, eroding critical tiger and turtle nesting grounds while salinizing freshwater aquifers. In trans-Himalayan biomes, accelerated glacial melt initially alters inflow hydrographs before risking long-term seasonal desiccation of sensitive high-altitude breeding lakes.",
    keyDrivers: [
      "Sea-level rise and accelerated coastal embankment erosion",
      "Increased frequency and severity of tropical cyclonic storms",
      "Accelerated glacial retreat and altered alpine runoff hydrology",
      "Extended summer droughts followed by high-intensity flash precipitation",
      "Hyper-salinization of estuarine and lagoon systems",
    ],
    iconName: "CloudRain",
    wetlands: [
      "sundarbans-wetland",
      "tso-moriri",
      "point-calimere",
    ],
    sources: [
      {
        title: "India: Third National Communication to the United Nations Framework Convention on Climate Change",
        organization: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
        year: 2023,
        citationType: "Government Gazette",
        url: "https://moef.gov.in",
        accessedAt: "October 2026",
      },
      {
        title: "IPCC Sixth Assessment Report: Impacts, Adaptation and Vulnerability (Wetlands & Coastal Deltas)",
        organization: "Intergovernmental Panel on Climate Change (IPCC)",
        year: 2022,
        citationType: "Official Registry",
        url: "https://www.ipcc.ch",
        accessedAt: "October 2026",
      },
    ],
  },
];

/**
 * Direct lookup mapping of documented threat titles to their canonical threat category slug.
 */
export const THREAT_TITLE_TO_SLUG: Record<string, string> = {
  "Siltation & Canal Choking": "siltation",
  "Intensive Aquaculture Ponds": "encroachment",
  "Agricultural Runoff": "pollution",
  "Sea-Level Rise & Coastal Erosion": "climate-impact",
  "Reduced Freshwater Discharge": "climate-impact",
  "Frequent Severe Cyclones": "climate-impact",
  "Hydrological Stagnation from Ithai Barrage": "hydrological-alteration",
  "Urban Sewage & Eutrophication": "pollution",
  "Shrinking Open Water Area": "siltation",
  "Water Scarcity & Intermittent Inflow": "hydrological-alteration",
  "Invasive Vegetation": "invasive-species",
  "Pesticide Drift": "pollution",
  "Thanneermukkom Saltwater Barrier Impact": "hydrological-alteration",
  "Reclamation for Urban Infrastructure": "encroachment",
  "Domestic Sewage & Agro-Chemical Leaching": "pollution",
  "Industrial & Municipal Effluent Inflow": "pollution",
  "Dense Infestation of Water Hyacinth": "invasive-species",
  "Encroachment of Silt Islands": "encroachment",
  "Unregulated Tourist Footfall & Off-Roading": "encroachment",
  "Solid Waste & Sanitation Pressure": "pollution",
  "Glacial Retreat & Altered Hydrology": "climate-impact",
  "Municipal Garbage Dumping": "pollution",
  "Railway Track Bisecting Corridor": "encroachment",
  "Encroachment by Warehousing & Industry": "encroachment",
  "Urban Encroachment & Shoreline Construction": "encroachment",
  "Domestic Sewage & Organic Influx": "pollution",
  "Religious Immersion Residues": "pollution",
  "Freshwater Inflow Reduction": "hydrological-alteration",
  "Hyper-salinity in Lagoon Inlets": "climate-impact",
  "Illegal Feral Grazing": "invasive-species",
};

/**
 * Returns all threat categories.
 */
export function getAllThreats(): ThreatCategory[] {
  return THREATS_DATA;
}

/**
 * Returns a specific threat category by its slug.
 */
export function getThreatBySlug(slug: string): ThreatCategory | undefined {
  return THREATS_DATA.find((t) => t.slug === slug);
}

/**
 * Resolves the full Wetland objects associated with a threat slug.
 * Zero duplicate records: reads directly from WETLANDS_DATA.
 */
export function getWetlandsForThreat(threatSlug: string): Wetland[] {
  const threat = getThreatBySlug(threatSlug);
  if (!threat) return [];
  const wetlandIds = new Set(threat.wetlands);
  return WETLANDS_DATA.filter((w) => wetlandIds.has(w.id));
}

/**
 * Returns all threat categories that affect a given wetland ID.
 */
export function getThreatsForWetland(wetlandId: string): ThreatCategory[] {
  return THREATS_DATA.filter((t) => t.wetlands.includes(wetlandId));
}

/**
 * Returns other threat categories excluding the given slug.
 */
export function getRelatedThreats(currentSlug: string): ThreatCategory[] {
  return THREATS_DATA.filter((t) => t.slug !== currentSlug);
}

/**
 * Matches a specific documented threat title to its threat category slug.
 */
export function matchThreatTitleToSlug(title: string): string | undefined {
  if (THREAT_TITLE_TO_SLUG[title]) {
    return THREAT_TITLE_TO_SLUG[title];
  }
  const lower = title.toLowerCase();
  if (lower.includes("pollut") || lower.includes("sewage") || lower.includes("effluent") || lower.includes("waste") || lower.includes("runoff")) {
    return "pollution";
  }
  if (lower.includes("encroach") || lower.includes("reclamation") || lower.includes("railway") || lower.includes("construction") || lower.includes("aquaculture")) {
    return "encroachment";
  }
  if (lower.includes("hydrolog") || lower.includes("barrage") || lower.includes("dam") || lower.includes("water scarcity") || lower.includes("inflow")) {
    return "hydrological-alteration";
  }
  if (lower.includes("invasive") || lower.includes("hyacinth") || lower.includes("weed") || lower.includes("grazing")) {
    return "invasive-species";
  }
  if (lower.includes("silt") || lower.includes("sediment")) {
    return "siltation";
  }
  if (lower.includes("climate") || lower.includes("cyclone") || lower.includes("sea-level") || lower.includes("glacial") || lower.includes("salinity")) {
    return "climate-impact";
  }
  return undefined;
}
