export type SearchItem = {
  id: string;
  title: string;
  description: string;
  type: "Service" | "Industry" | "Project" | "Page";
  href: string;
  tags: string[];
};

export const SEARCH_DATA: SearchItem[] = [
  /* ── SERVICES ────────────────────────────────────────────── */
  {
    id: "solar",
    title: "Solar Power Solutions",
    type: "Service",
    description: "Commercial and residential solar installations, hybrid systems, battery storage and off-grid power.",
    href: "/solutions#solar",
    tags: ["solar", "energy", "power", "photovoltaic", "grid", "battery", "electricity", "panels", "hybrid", "off-grid"],
  },
  {
    id: "borehole",
    title: "Borehole Drilling & Equipping",
    type: "Service",
    description: "Professional borehole drilling, pump installation, and complete water system setup from survey to commissioning.",
    href: "/solutions#borehole",
    tags: ["borehole", "drilling", "water", "well", "pump", "aquifer", "groundwater"],
  },
  {
    id: "water-treatment",
    title: "Water Treatment",
    type: "Service",
    description: "Advanced filtration, reverse osmosis, UV purification systems, and chemical supply for safe, clean water.",
    href: "/solutions#water-treatment",
    tags: ["water", "treatment", "filtration", "purification", "ro", "reverse osmosis", "uv", "chlorination", "clean"],
  },
  {
    id: "irrigation",
    title: "Smart Irrigation Systems",
    type: "Service",
    description: "Drip lines, overhead sprinklers, automated scheduling, and agricultural water management systems.",
    href: "/solutions#irrigation",
    tags: ["irrigation", "drip", "sprinkler", "farm", "agriculture", "water", "automated", "smart"],
  },
  {
    id: "pools",
    title: "Swimming Pools",
    type: "Service",
    description: "Design, construction, and maintenance of premium residential and commercial swimming pools.",
    href: "/solutions#pools",
    tags: ["swimming", "pool", "luxury", "construction", "maintenance", "residential", "commercial"],
  },
  {
    id: "consultancy",
    title: "Engineering Consultancy",
    type: "Service",
    description: "Expert feasibility studies, system design, project management, and compliance certification.",
    href: "/solutions#consultancy",
    tags: ["consultancy", "consulting", "engineering", "feasibility", "design", "planning", "audit", "certification"],
  },

  /* ── SUPPLY & EQUIPMENT ──────────────────────────────────── */
  {
    id: "chemicals",
    title: "Chemical Supply",
    type: "Service",
    description: "Water treatment and swimming pool chemicals sourced and supplied for all HIDRACORE projects.",
    href: "/services#chemicals",
    tags: ["chemicals", "chlorine", "pool chemicals", "water treatment chemicals", "dosing"],
  },
  {
    id: "inverters",
    title: "Inverters",
    type: "Service",
    description: "Solar inverters, hybrid inverters and battery storage units — correctly specified for your system.",
    href: "/services#inverters",
    tags: ["inverter", "solar inverter", "hybrid inverter", "ups", "battery storage"],
  },
  {
    id: "pumping",
    title: "Pumping Systems",
    type: "Service",
    description: "Submersible, surface and booster pumps for borehole, irrigation and water transfer applications.",
    href: "/services#pumping",
    tags: ["pump", "pumping", "submersible", "borehole pump", "water pump", "booster"],
  },
  {
    id: "pipes",
    title: "Pipes & Fittings",
    type: "Service",
    description: "HDPE, uPVC and galvanised pipework and fittings for all water and irrigation applications.",
    href: "/services#pipes",
    tags: ["pipes", "fittings", "hdpe", "upvc", "pipeline", "plumbing"],
  },
  {
    id: "electronics",
    title: "Electronics & Automation",
    type: "Service",
    description: "Sensors, controllers, automation components and monitoring equipment for water and energy systems.",
    href: "/services#electronics",
    tags: ["electronics", "sensors", "controllers", "automation", "monitoring", "plc"],
  },
  {
    id: "breakers",
    title: "Circuit Breakers & Electrical",
    type: "Service",
    description: "MCBs, RCDs, distribution boards and switchgear for solar and electrical installations.",
    href: "/services#breakers",
    tags: ["breakers", "circuit breaker", "mcb", "rcd", "distribution board", "switchgear", "electrical"],
  },

  /* ── INDUSTRIES ──────────────────────────────────────────── */
  {
    id: "residential",
    title: "Residential",
    type: "Industry",
    description: "Home solar systems, private boreholes, and swimming pools tailored for comfortable living.",
    href: "/industries#residential",
    tags: ["residential", "home", "house", "domestic", "private"],
  },
  {
    id: "commercial",
    title: "Commercial",
    type: "Industry",
    description: "Energy and water infrastructure for offices, retail parks, and commercial properties.",
    href: "/industries#commercial",
    tags: ["commercial", "office", "retail", "business", "corporate"],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    type: "Industry",
    description: "Large-scale irrigation, solar pumping, borehole networks, and farm water management.",
    href: "/industries#agriculture",
    tags: ["agriculture", "farm", "farming", "irrigation", "crop", "harvest"],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    type: "Industry",
    description: "Premium pool construction and reliable utility systems for hotels, resorts, and lodges.",
    href: "/industries#hospitality",
    tags: ["hospitality", "hotel", "resort", "lodge", "tourism"],
  },
  {
    id: "industrial",
    title: "Industrial",
    type: "Industry",
    description: "Heavy-duty water treatment and high-capacity solar power for manufacturing plants.",
    href: "/industries#industrial",
    tags: ["industrial", "manufacturing", "factory", "plant", "heavy-duty"],
  },
  {
    id: "government",
    title: "Government & NGO",
    type: "Industry",
    description: "Community water projects, rural electrification, and NGO engineering programmes.",
    href: "/industries#government",
    tags: ["government", "ngo", "community", "rural", "public", "municipality"],
  },
  {
    id: "realestate",
    title: "Real Estate",
    type: "Industry",
    description: "Integrated utility planning and implementation for housing developments and estates.",
    href: "/industries#realestate",
    tags: ["real estate", "property", "development", "housing", "estate"],
  },
  {
    id: "education",
    title: "Education",
    type: "Industry",
    description: "Sustainable water and power systems for schools, colleges, and universities.",
    href: "/industries#education",
    tags: ["education", "school", "university", "college", "campus"],
  },

  /* ── PROJECTS ────────────────────────────────────────────── */
  {
    id: "proj-solar-commercial",
    title: "1.2MW Commercial Solar Array",
    type: "Project",
    description: "45% cost reduction and 3.2 GWh/year generation for AgriCorp Processing Plant.",
    href: "/projects#solar-commercial",
    tags: ["solar", "commercial", "megawatt", "energy", "agricorp"],
  },
  {
    id: "proj-borehole-farm",
    title: "Deep Aquifer Borehole Network",
    type: "Project",
    description: "Sustainable 15,000 L/hr yield borehole network for Highland Estates farm.",
    href: "/projects#borehole-farm",
    tags: ["borehole", "aquifer", "farm", "water", "drilling"],
  },
  {
    id: "proj-irrigation",
    title: "Automated Drip Irrigation",
    type: "Project",
    description: "60% water saving through precision drip irrigation for Valley Produce Farms.",
    href: "/projects#irrigation-smart",
    tags: ["irrigation", "drip", "automation", "farm", "water saving"],
  },
  {
    id: "proj-pool",
    title: "Olympic Training Pool Complex",
    type: "Project",
    description: "A++ energy-rated Olympic-spec pool for National Sports Academy.",
    href: "/projects#pool-luxury",
    tags: ["pool", "olympic", "sports", "construction"],
  },
  {
    id: "proj-ro",
    title: "Industrial Reverse Osmosis Plant",
    type: "Project",
    description: "99.9% filtration for Beverage Bottling Co. using industrial-grade RO systems.",
    href: "/projects#water-treatment",
    tags: ["water treatment", "reverse osmosis", "filtration", "industrial", "purification"],
  },
  {
    id: "proj-offgrid",
    title: "Off-Grid Safari Lodge Hybrid",
    type: "Project",
    description: "100% off-grid solar hybrid system achieving zero emissions for Serengeti Eco-Lodge.",
    href: "/projects#hybrid-solar",
    tags: ["solar", "off-grid", "hybrid", "lodge", "zero emissions"],
  },

  /* ── PAGES ───────────────────────────────────────────────── */
  {
    id: "page-about",
    title: "About HIDRACORE",
    type: "Page",
    description: "Learn about our company, our team, our mission and our values.",
    href: "/about",
    tags: ["about", "company", "team", "mission", "values", "who we are"],
  },
  {
    id: "page-contact",
    title: "Contact Us",
    type: "Page",
    description: "Get in touch with our engineering team. Request a quote or consultation.",
    href: "/contact",
    tags: ["contact", "quote", "consultation", "phone", "email", "enquiry"],
  },
  {
    id: "page-blogs",
    title: "Blogs & Articles",
    type: "Page",
    description: "Engineering insights, project updates, and technical articles.",
    href: "/blogs",
    tags: ["blog", "article", "news", "insights", "engineering"],
  },
  {
    id: "page-insights",
    title: "Insights",
    type: "Page",
    description: "Industry reports, whitepapers, and market insights from our engineering team.",
    href: "/insights",
    tags: ["insights", "report", "whitepaper", "market", "research"],
  },
  {
    id: "page-portal",
    title: "Client Portal",
    type: "Page",
    description: "Access project updates, documents, and support tickets in your client portal.",
    href: "/portal",
    tags: ["portal", "client", "login", "account", "dashboard", "support"],
  },
  {
    id: "page-services",
    title: "Services Overview",
    type: "Page",
    description: "Full overview of HIDRACORE engineering services and capabilities.",
    href: "/services",
    tags: ["services", "capabilities", "overview", "engineering"],
  },
  {
    id: "page-solutions",
    title: "Solutions",
    type: "Page",
    description: "Detailed technical solutions across solar, water, and infrastructure engineering.",
    href: "/solutions",
    tags: ["solutions", "technical", "infrastructure", "solar", "water"],
  },
];

/* Simple relevance-scored search */
export function searchData(query: string): SearchItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return SEARCH_DATA.filter((item) => {
    const haystack = [item.title, item.description, ...item.tags].join(" ").toLowerCase();
    return q.split(" ").every((word) => haystack.includes(word));
  }).sort((a, b) => {
    /* Boost exact title matches */
    const aTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
    const bTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
    return bTitle - aTitle;
  });
}
