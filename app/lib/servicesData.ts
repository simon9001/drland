import { Sun, HardHat, Droplets, Sprout, Waves, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceStep = { step: string; title: string; desc: string };
export type ServiceScope = string;
export type ServiceApplication = { sector: string; examples: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  overview: string;
  steps: ServiceStep[];
  scope: ServiceScope[];
  applications: ServiceApplication[];
  image: string;
};

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "solar",
    title: "Solar Power Solutions",
    tagline: "Grid-tied, hybrid and off-grid solar — designed, supplied and installed.",
    description:
      "We design and install solar power systems for homes, commercial facilities, farms and industrial sites across Zimbabwe. Every project is sized correctly for your load, your budget, and your site — then commissioned by our own engineers before we hand it over.",
    icon: Sun,
    accentColor: "#FDB913",
    image: "/solar_panels.png",
    overview:
      "Load-shedding, high electricity tariffs and unreliable grid supply have made solar an essential investment for homes, farms and businesses throughout Zimbabwe. HIDRACORE designs, supplies and installs grid-tied, hybrid and fully off-grid solar systems — handling everything from the initial energy audit through to final commissioning and monitoring setup.",
    steps: [
      {
        step: "01",
        title: "Site & Energy Assessment",
        desc: "We survey your site, analyse your electricity bills or generator records, and map your energy consumption profile across the day. Shading, roof orientation and structural load are all considered.",
      },
      {
        step: "02",
        title: "System Sizing & Design",
        desc: "Our engineers calculate the correct array size, inverter capacity, and battery bank — producing a full design with single-line diagrams, equipment schedules and performance projections.",
      },
      {
        step: "03",
        title: "Equipment Supply",
        desc: "We source and supply solar panels, inverters (on-grid, hybrid, or off-grid), battery storage, mounting structures, protection devices and all cabling from trusted manufacturers.",
      },
      {
        step: "04",
        title: "Professional Installation",
        desc: "Our certified technicians mount the array, wire all DC and AC circuits, connect to your distribution board, and install metering and protection equipment to code.",
      },
      {
        step: "05",
        title: "Commissioning & Testing",
        desc: "We verify every parameter: output power, inverter settings, protection relay operation and battery charge cycles. Nothing is signed off until the system performs to specification.",
      },
      {
        step: "06",
        title: "Monitoring & Support",
        desc: "We can configure remote monitoring so you track generation and consumption in real time. Maintenance contracts and periodic system audits are available to keep your investment performing.",
      },
    ],
    scope: [
      "Solar PV panels (monocrystalline and polycrystalline)",
      "Grid-tied, hybrid and off-grid inverters",
      "Lithium-ion and lead-acid battery storage",
      "Mounting structures and racking systems",
      "DC and AC cabling and protection (MCBs, fuses, surge protection)",
      "Smart monitoring and data logging",
      "Grid-tie connection and net metering",
      "Generator integration and changeover switching",
    ],
    applications: [
      { sector: "Residential",   examples: "Homes, residential estates, cluster housing" },
      { sector: "Commercial",    examples: "Offices, retail, warehouses, petrol stations" },
      { sector: "Agricultural",  examples: "Farms, dairy operations, tobacco curing" },
      { sector: "Industrial",    examples: "Factories, processing plants, cold storage" },
      { sector: "Institutional", examples: "Hospitals, schools, churches, lodges" },
      { sector: "Off-grid",      examples: "Remote sites, safari lodges, telecommunications" },
    ],
  },

  {
    slug: "borehole",
    title: "Borehole Drilling & Equipping",
    tagline: "From geological survey to a commissioned, pumping water supply.",
    description:
      "We provide a complete borehole service — from initial site assessment and permit applications through to drilling, testing, pump selection and full equipping. One contractor handles every stage, so there are no handoff problems and one point of accountability.",
    icon: HardHat,
    accentColor: "#0082D6",
    image: "/image.png",
    overview:
      "Access to a reliable, independent water supply is increasingly critical across Zimbabwe. HIDRACORE's borehole service covers the full lifecycle: hydrogeological assessment, drilling, yield testing, water quality analysis, pump selection, rising main installation and control panel commissioning. We supply the pumps, pipes and electrical equipment ourselves — no third parties.",
    steps: [
      {
        step: "01",
        title: "Hydrogeological Assessment",
        desc: "We review available geological data and conduct a site inspection to determine the most suitable drilling location and the expected depth and yield for your area.",
      },
      {
        step: "02",
        title: "Permit & Compliance",
        desc: "We assist with all required drilling permits from the Zimbabwe National Water Authority (ZINWA) and any local authority requirements before drilling begins.",
      },
      {
        step: "03",
        title: "Drilling & Casing",
        desc: "Our drilling rigs sink the borehole to the target depth, casing with the correct diameter steel or uPVC casing and screen to prevent collapse and contamination.",
      },
      {
        step: "04",
        title: "Yield & Quality Testing",
        desc: "A pump test is conducted over the prescribed duration to measure sustainable yield. Water samples are collected and tested for bacteria, minerals and chemical composition.",
      },
      {
        step: "05",
        title: "Pump & System Selection",
        desc: "Based on yield data and your demand requirements, we specify the correct submersible pump, rising main diameter, control panel and storage capacity.",
      },
      {
        step: "06",
        title: "Equipping & Commissioning",
        desc: "The pump, rising main, control panel and storage tank or header are installed and tested. We hand over a complete, operating water supply with full documentation.",
      },
    ],
    scope: [
      "Hydrogeological site assessment",
      "ZINWA permit applications",
      "Rotary and percussion drilling",
      "Steel and uPVC borehole casing and screen",
      "Pump test and yield analysis",
      "Water quality testing and analysis",
      "Submersible pump supply and installation",
      "HDPE rising main pipes and fittings",
      "Control panels, starters and level switches",
      "Pressure tanks and storage systems",
    ],
    applications: [
      { sector: "Domestic",      examples: "Private homes, residential developments" },
      { sector: "Agricultural",  examples: "Farms, irrigation water supply, livestock" },
      { sector: "Commercial",    examples: "Offices, retail, hotels, lodges" },
      { sector: "Industrial",    examples: "Factories, process water, cooling systems" },
      { sector: "Institutional", examples: "Schools, hospitals, government buildings" },
      { sector: "Community",     examples: "Rural water schemes, NGO water projects" },
    ],
  },

  {
    slug: "water-treatment",
    title: "Water Treatment & Design",
    tagline: "Safe, clean water — tested, treated and verified.",
    description:
      "We design, supply and install water treatment systems for any water source and any application — from basic borehole disinfection to full reverse osmosis plants for industrial and commercial use. We also supply the treatment chemicals on an ongoing basis.",
    icon: Droplets,
    accentColor: "#0082D6",
    image: "/water_treatment.png",
    overview:
      "Untreated borehole water, contaminated surface water and ageing municipal supply all create health and operational risks. HIDRACORE's water treatment service starts with a proper water analysis and ends with a commissioned treatment system, trained operator, and a supply agreement for chemicals and consumables. We design the treatment train around your actual water quality — not a generic solution.",
    steps: [
      {
        step: "01",
        title: "Water Sampling & Analysis",
        desc: "We collect and test water samples from your source for bacteria (E. coli, total coliforms), turbidity, pH, hardness, heavy metals and any site-specific contaminants.",
      },
      {
        step: "02",
        title: "Treatment System Design",
        desc: "Based on the analysis results and your required output quality and volume, our engineers specify the correct treatment train — filtration, disinfection, softening, or reverse osmosis.",
      },
      {
        step: "03",
        title: "Equipment Supply",
        desc: "We source and supply all treatment plant components: filter vessels, membranes, UV sterilisers, dosing pumps and chemical storage — as well as the initial chemical stock.",
      },
      {
        step: "04",
        title: "Installation & Pipework",
        desc: "The treatment plant is installed, plumbed into your water supply and connected to your storage or distribution system, with appropriate bypass and isolation valves.",
      },
      {
        step: "05",
        title: "Chemical Dosing Configuration",
        desc: "Where automated dosing is required for chlorination, pH correction or coagulation, we configure and commission the dosing system and set alarm limits.",
      },
      {
        step: "06",
        title: "Training, Handover & Supply",
        desc: "Your operators are trained on system operation, maintenance schedules and chemical handling. We can supply treatment chemicals on an ongoing basis.",
      },
    ],
    scope: [
      "Water quality testing and analysis",
      "Sand and multimedia filtration",
      "Activated carbon adsorption",
      "Reverse osmosis systems",
      "UV disinfection units",
      "Chemical dosing (chlorine, coagulants, pH adjustment)",
      "Ultrafiltration membranes",
      "Water softening systems",
      "Pressure vessels and storage",
      "Ongoing chemical supply",
    ],
    applications: [
      { sector: "Drinking Water",   examples: "Homes, offices, schools, communities" },
      { sector: "Food & Beverage",  examples: "Bottling plants, breweries, food processing" },
      { sector: "Agricultural",     examples: "Irrigation water quality, livestock drinking" },
      { sector: "Industrial",       examples: "Boiler feedwater, cooling towers, process water" },
      { sector: "Swimming Pools",   examples: "Pool water balance and disinfection" },
      { sector: "Medical",          examples: "Clinics, hospitals, pharmaceutical" },
    ],
  },

  {
    slug: "irrigation",
    title: "Irrigation Systems",
    tagline: "Efficient water delivery — designed for your land, your crops, your schedule.",
    description:
      "We design and install drip irrigation, overhead sprinklers and other irrigation systems for commercial farms, smallholders and residential applications. Every system is engineered from a site survey and water availability assessment — then fully installed and programmed by our team.",
    icon: Sprout,
    accentColor: "#2DC653",
    image: "/water_treatment.png",
    overview:
      "Good irrigation is not simply laying pipe — it is engineering water delivery to match crop water demand, soil type, topography and available pressure. HIDRACORE designs irrigation systems from a proper hydraulic analysis, sources and supplies all components, and installs and programmes the system. We also supply pipes, fittings and automation components as standalone supply where needed.",
    steps: [
      {
        step: "01",
        title: "Site Survey & Water Assessment",
        desc: "We map your land, identify your water source and measure the available flow rate and pressure. Soil type, slope, crop rows and distances from the water source are all recorded.",
      },
      {
        step: "02",
        title: "Hydraulic Design",
        desc: "Our engineers calculate the water demand per zone, design the pipe network to deliver the required flow rate and pressure to every emitter, and lay out the control zones.",
      },
      {
        step: "03",
        title: "Equipment Supply",
        desc: "We supply the complete bill of materials: mainline and lateral pipes, drip emitters or sprinkler heads, filters, pressure regulators, solenoid valves, and controllers.",
      },
      {
        step: "04",
        title: "Installation",
        desc: "Our installation teams lay mainlines, install lateral lines, fit emitters or sprinkler heads to design spacing, and connect all valves and control wiring.",
      },
      {
        step: "05",
        title: "System Programming",
        desc: "Controllers are programmed with your irrigation schedule — timing, frequency, zone rotation — and soil moisture sensors or weather stations are integrated where specified.",
      },
      {
        step: "06",
        title: "Testing & Handover",
        desc: "Every zone is flow-tested and pressure-checked. Emitter uniformity is verified and any blocked or damaged components are corrected before final handover.",
      },
    ],
    scope: [
      "Drip irrigation lines and pressure-compensating emitters",
      "Micro-sprinklers and misters",
      "Overhead and pop-up sprinkler heads",
      "HDPE and uPVC mainline and lateral pipes",
      "Screen and disc filters, pressure regulators",
      "Solenoid valves and manual gate valves",
      "Programmable irrigation controllers",
      "Soil moisture sensors and weather-based automation",
      "Fertigation injection systems",
      "Pipes, fittings and accessories (supply only available)",
    ],
    applications: [
      { sector: "Commercial Farming", examples: "Vegetables, tobacco, maize, soya, wheat" },
      { sector: "Horticulture",       examples: "Orchards, vineyards, nurseries, floriculture" },
      { sector: "Greenhouse",         examples: "Hydroponics, drip-fed greenhouse crops" },
      { sector: "Residential",        examples: "Gardens, lawns, sports grounds" },
      { sector: "Golf & Sport",       examples: "Golf courses, football pitches, parks" },
      { sector: "Smallholder",        examples: "Small-scale farmers, community gardens" },
    ],
  },

  {
    slug: "pools",
    title: "Swimming Pool Design & Construction",
    tagline: "From concept to crystal-clear water — every stage handled by our team.",
    description:
      "We design and build swimming pools for residential homes, hotels, lodges and sporting facilities. Our service is genuinely end-to-end: structural engineering, excavation, construction, plumbing and filtration, finishing, and ongoing chemical supply and maintenance.",
    icon: Waves,
    accentColor: "#0082D6",
    image: "/image.png",
    overview:
      "A swimming pool is a significant construction project — not simply a hole in the ground filled with water. HIDRACORE manages the structural engineering, construction, filtration system design, chemical balance, and finishing trades. We supply the filtration equipment, pool chemicals and accessories ourselves, and we can take on the ongoing maintenance to keep the water safe and the equipment running.",
    steps: [
      {
        step: "01",
        title: "Design Consultation",
        desc: "We meet to discuss pool size, shape, depth profile, finishing materials, features (lighting, heating, jets) and budget. We review the site and assess ground conditions.",
      },
      {
        step: "02",
        title: "Structural Engineering",
        desc: "Our engineers design the pool shell based on soil conditions, groundwater levels and loading requirements, producing construction drawings and a bill of quantities.",
      },
      {
        step: "03",
        title: "Excavation & Formwork",
        desc: "The site is excavated to the design profile, sub-base prepared, and formwork set for the pool shell. Drainage and backwash lines are positioned at this stage.",
      },
      {
        step: "04",
        title: "Construction & Waterproofing",
        desc: "The pool shell is constructed to structural design and waterproofed with an appropriate membrane or plaster system to prevent seepage.",
      },
      {
        step: "05",
        title: "Plumbing, Filtration & Equipment",
        desc: "Circulation pipework, return jets, skimmers, main drains, the filtration plant, pump and any heating or dosing equipment are all installed and connected.",
      },
      {
        step: "06",
        title: "Finishing & Commissioning",
        desc: "Tiling, coping, steps, lighting and any water features are completed. The pool is filled, water is chemically balanced, and the filtration system is commissioned before handover.",
      },
    ],
    scope: [
      "Structural design and engineering drawings",
      "Excavation and earthworks",
      "Pool shell construction",
      "Waterproofing and plaster",
      "Circulation pipework and fittings",
      "Pool filtration and pump systems",
      "Pool heating (solar, gas or electric)",
      "Automated chemical dosing",
      "LED and underwater lighting",
      "Tiling, coping and finishing",
      "Pool chemicals and ongoing supply",
      "Maintenance contracts",
    ],
    applications: [
      { sector: "Residential",   examples: "Private homes and family pools" },
      { sector: "Hospitality",   examples: "Hotels, lodges, guesthouses" },
      { sector: "Institutional", examples: "Schools, clubs, government facilities" },
      { sector: "Sporting",      examples: "Training pools, Olympic-spec facilities" },
      { sector: "Commercial",    examples: "Apartment complexes, wellness centres" },
      { sector: "Luxury",        examples: "Infinity pools, vanishing-edge designs" },
    ],
  },

  {
    slug: "consultancy",
    title: "Engineering Consultancy",
    tagline: "Independent technical expertise for water and energy infrastructure projects.",
    description:
      "Our engineering consultancy service provides independent technical assessment, feasibility studies, detailed design, and project management for water and energy infrastructure. We work for clients who need engineering expertise without a full-time in-house team — from project concept through to compliance and handover.",
    icon: ClipboardList,
    accentColor: "#003D6A",
    image: "/solar_panels.png",
    overview:
      "Not every infrastructure challenge requires a full installation contract. Sometimes you need an independent engineering assessment, a second opinion, a detailed design for tender, or someone to manage an existing contractor. HIDRACORE's consultancy service gives you access to qualified, experienced engineers on a project basis — providing the technical rigour your project needs without the overhead of a permanent team.",
    steps: [
      {
        step: "01",
        title: "Initial Consultation",
        desc: "We meet to understand your project objectives, constraints, site conditions and timeline. We clarify what deliverables you need and agree on the scope of the consultancy engagement.",
      },
      {
        step: "02",
        title: "Feasibility Study",
        desc: "We assess the technical and financial feasibility of your project, reviewing available technologies, site-specific constraints, regulatory requirements and indicative costs.",
      },
      {
        step: "03",
        title: "Conceptual Design",
        desc: "We develop concept-level design options for your review, with enough detail to compare approaches and make informed decisions before committing to detailed design.",
      },
      {
        step: "04",
        title: "Detailed Engineering Design",
        desc: "Full engineering drawings, technical specifications, and a detailed bill of quantities are produced to a standard suitable for construction or procurement tender.",
      },
      {
        step: "05",
        title: "Tender & Procurement Support",
        desc: "We can prepare tender documentation, evaluate contractor submissions, and provide technical recommendations for contract award.",
      },
      {
        step: "06",
        title: "Project Management & Sign-off",
        desc: "We can act as supervising engineer during construction, ensuring compliance with the design, assisting with regulatory submissions and issuing the completion certificate.",
      },
    ],
    scope: [
      "Feasibility and pre-feasibility studies",
      "Conceptual and detailed engineering design",
      "Technical specifications and bills of quantities",
      "Tender documentation and evaluation",
      "Project management and construction supervision",
      "Quality assurance and inspection",
      "Regulatory and environmental submissions",
      "System condition assessments and audits",
      "Commissioning inspection and sign-off",
      "Independent technical review",
    ],
    applications: [
      { sector: "Government & Municipalities", examples: "Water supply schemes, electrification, infrastructure" },
      { sector: "NGO & Development",           examples: "Community water projects, rural electrification" },
      { sector: "Commercial & Industrial",     examples: "Large development infrastructure, utility connections" },
      { sector: "Property Development",        examples: "Estate services design, utility master planning" },
      { sector: "Compliance & Audit",          examples: "Regulatory submissions, system audits, certifications" },
      { sector: "Litigation & Expert",         examples: "Technical expert reports, failure investigations" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
