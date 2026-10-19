# 🌿 Wetland Explorer — Comprehensive Product Dossier
## An Interactive Digital Cartographic Atlas & Ecological Knowledge Graph

* **Live Web Application:** [https://wetland-explorer.vercel.app/](https://wetland-explorer.vercel.app/)
* **Course & Task:** CHE110 — Environmental Studies (Assignment CA1 — Task ID: 26271)
* **Institution:** Lovely Professional University (LPU), Punjab, India
* **Development Group:** Group 21 (**Utpal Kumar** `12612120`, **Divyansh Pathak** `12611966`, **Satyam Jaiswal** `12612463`)

---

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          --- PAGE 1 OF 2: PRODUCT IDENTITY, VISION & CORE CAPABILITIES ---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 1. Executive Summary & Problem Solved
Across India, wetlands face critical threats from rapid urban encroachment, agricultural nutrient runoff, catchment siltation, and solid waste dumping. Despite hosting **98 designated Ramsar Sites of International Importance** (covering > 1.35 million hectares), public awareness remains low because vital conservation data is historically locked in impenetrable government gazettes and academic repositories.

**Wetland Explorer** ([https://wetland-explorer.vercel.app/](https://wetland-explorer.vercel.app/)) is an open-access, production-grade digital cartographic atlas and knowledge graph. It transforms static environmental research into an intuitive, interactive discovery tool that empowers students, researchers, and citizens to visualize ecological boundaries, track endangered indicator species, and inspect documented conservation pressures across the subcontinent.

---

### 2. The Five Core Architectural Modules & Features

#### 🗺️ Module 1: Interactive Geospatial Cartography (`/map`)
* **Dual-Layer Cartography:** Integrates high-resolution **Esri World Imagery** satellite tiles with OpenStreetMap, enabling users to visually examine real-time water perimeters, aquaculture enclosures, and shoreline siltation.
* **Precise WGS84 Geolocation:** Pinned with verified GPS latitude/longitude, surface area, elevation above sea level, and biogeographic classifications.
* **Interactive Telemetry Drawers:** Clicking any map pin opens a dynamic slide-out drawer providing immediate statistics, thumbnail imagery, and direct links to comprehensive dossiers.

#### 📑 Module 2: Verified Wetland Ecological Dossiers (`/wetlands/[slug]`)
* **10 Curated Flagship Ramsar Ecosystems:** Covers diverse biogeographic zones across India:
  * *Harike Wetland* (Punjab, Site #462) — Confluence reservoir & Indus dolphin sanctuary.
  * *Chilika Lake* (Odisha, Site #229) — Asia’s largest brackish lagoon & Irrawaddy dolphin habitat.
  * *Sundarbans Wetland* (West Bengal, Site #2370) — World's largest contiguous mangrove tidal delta.
  * *Loktak Lake* (Manipur, Site #463) — Montreux Record freshwater lake with floating *phumdis*.
  * *Keoladeo National Park* (Rajasthan, Site #230) — Historic Montreux Record waterbird haven.
  * *Vembanad-Kol* (Kerala), *Tso Moriri* (Ladakh), *Deepor Beel* (Assam), *Bhoj Wetland* (MP), *Point Calimere* (TN).
* **Multi-Tab Information Architecture:** Each profile organizes information into structured, factual tabs: *Overview*, *Ecological & Wildlife Importance*, *Local Livelihoods*, *Documented Threats*, and *Cited Sources*.

#### 🐾 Module 3: Biodiversity & Indicator Wildlife Directory (`/wildlife`)
* **22 Monitored Indicator Taxa:** Catalogs flagship mammals, aquatic fauna, reptiles, and migratory waterfowl (e.g., Sangai Brow-antlered Deer, Indus River Dolphin, Irrawaddy Dolphin, Gharial, Sarus Crane).
* **IUCN Red List Classification:** Features official conservation statuses (Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern).
* **Bidirectional Knowledge Graph:** Users can navigate from a species to all its supporting wetlands, or from a wetland to all its dependent species.

#### ⚠️ Module 4: Threat Pressure Explorer (`/threats`)
* **6 Documented Threat Categories:** Cataloged using verified CPCB and Ramsar documentation:
  1. *Siltation & Catchment Erosion* | 2. *Agricultural Runoff & Eutrophication*
  3. *Urban Encroachment & Real Estate* | 4. *Invasive Alien Macrophytes (Water Hyacinth)*
  5. *Hydrological Alteration & Barrages* | 6. *Climate Extremes & Salinity Intrusion*
* **Zero Speculation:** Cross-references real anthropogenic threats directly with all affected wetlands.

#### 📢 Module 5: Societal Awareness & Academic Citation Toolkit (`ShareDossierButton`)
* **1-Click Viral Broadcast:** Pre-formatted sharing cards for **WhatsApp**, **X (Twitter)**, and **LinkedIn**, allowing students to circulate local conservation dossiers to peer networks.
* **Automated APA Academic Citation Generator:** Instantly copies standardized academic citations to the clipboard for student assignments and research papers:
  > *Wetland Explorer Digital Atlas. (2026). Harike Wetland Ecological Dossier (Ramsar Site #462, Punjab, India). Retrieved from https://wetland-explorer.vercel.app/wetlands/harike*

---
\newpage

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   --- PAGE 2 OF 2: ENVIRONMENTAL CHEMISTRY, CASE STUDIES & ENGINEERING ---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3. Environmental Chemistry & Biogeochemical Mechanisms (CHE110 Core)
* **Biological Kidneys (Denitrification Pathway):** In waterlogged, anoxic wetland sediments, facultative anaerobic heterotrophic bacteria reduce hazardous agricultural nitrate ($NO_3^-$) runoff:
  $$\text{NO}_3^- \xrightarrow{\text{reduction}} \text{NO}_2^- \longrightarrow \text{NO} \longrightarrow \text{N}_2\text{O} \longrightarrow \text{N}_2\uparrow$$
  *(Scientific Rigor: Under incomplete denitrification, nitrous oxide ($\text{N}_2\text{O}$)—a potent greenhouse gas—can escape into the atmosphere).*
* **Heavy Metal Attenuation:** Wetland emergent macrophytes (*Phragmites australis*, *Typha latifolia*) take up, chelate, and retain heavy metal ions ($\text{Pb}^{2+}, \text{Cd}^{2+}, \text{As}^{3+}$) in root-rhizome tissues, up to natural phytotoxic saturation limits.
* **Blue Carbon Sequestration:** Waterlogged anaerobic conditions severely inhibit microbial oxidation of organic debris, allowing coastal mangroves and peatlands to sequester organic carbon for centuries.
* **Assimilative Limits:** Wetlands are not infinite chemical filters; severe toxic industrial discharges and sustained nutrient loading overwhelm natural remediation pathways.

---

### 4. Flagship Case Studies Documented in the Platform
1. **Harike Wetland (Punjab — Ramsar Site #462) — Local Relevance for LPU:**
   * Confluence of Beas and Sutlej rivers; vital wintering staging ground on the Central Asian Flyway.
   * Documented threats: Heavy infestation by invasive Water Hyacinth (*Eichhornia crassipes*), catchment siltation, and untreated industrial effluents carried via the Sutlej River from Ludhiana/Jalandhar, threatening the endangered **Indus River Dolphin** (*Platanista gangetica minor*).
2. **Chilika Lake (Odisha — Ramsar Site #229) — Restoration Triumph:**
   * Asia’s largest coastal lagoon (1,165 km²). Placed on the Montreux Record in 1993 due to siltation; successfully restored by the Chilika Development Authority through scientific hydrological mouth intervention and delisted in 2002.
3. **Loktak Lake (Manipur — Ramsar Site #463) — Montreux Record Vulnerability:**
   * Famous for floating vegetative biomass islands (*phumdis*) and the endangered Sangai Deer. Construction of the Ithai Barrage permanently altered water level fluctuations, thinning *phumdis* and keeping the lake on the Montreux Record.

---

### 5. Technical Engineering & Open Access Specifications
* **Architecture:** Next.js 15.5 (React 19 App Router) with 100% strict TypeScript typing.
* **Performance & Speed:** 100% pre-rendered **Static Site Generation (SSG) across 49 static routes**, achieving instant sub-second page loads without server bottleneck delays.
* **Accessibility (a11y):** WCAG 2.1 compliant featuring keyboard skip-links (`#main-content`), screen-reader semantic tags, and high-contrast Light/Dark mode themes.
* **Data Integrity:** Sourced exclusively from official registries: *Ramsar Sites Information Service (RSIS)*, *MoEFCC Wetlands Portal*, and the *IUCN Red List (v2024-2)*.

---

### 6. Societal Impact & Awareness Campaign
* **Compliant Educational Documentary:** Produced a **5-minute 42-second** educational video walkthrough featuring official **Lovely Professional University (LPU)** introductory acknowledgment.
* **Social Media Outreach:** Distributed across YouTube, Instagram Reels, LinkedIn, and WhatsApp study groups, garnering **3,277+ total impressions, 438+ likes, 187+ shares, and 102+ comments**.
* **Pre/Post Knowledge Survey:** Evaluated peer awareness gain across 25 students, demonstrating marked improvement in understanding wetland functions, local Punjab threats, and Ramsar criteria.

---

### 7. Project Metadata & Access Links

| Parameter | Project Details |
|---|---|
| **Live Web Application** | 🔗 **[https://wetland-explorer.vercel.app/](https://wetland-explorer.vercel.app/)** |
| **Open Source Repository** | 💻 **[https://github.com/Utpal4505/wetland-explorer](https://github.com/Utpal4505/wetland-explorer)** |
| **Academic Course** | CHE110 — Environmental Studies (Continuous Assessment CA1) |
| **Institution** | Lovely Professional University (LPU), Punjab, India |
| **Group Number** | Group 21 |
| **Group Members** | Utpal Kumar (`12612120`) • Divyansh Pathak (`12611966`) • Satyam Jaiswal (`12612463`) |
| **National Scope** | 98 Indian Ramsar Sites (Ramsar Convention Secretariat, Jan 2026) |
| **Core Sourced References** | Ramsar RSIS, MoEFCC Wetlands Portal, IUCN Red List, Bassi et al. (2014), WWF-India |
