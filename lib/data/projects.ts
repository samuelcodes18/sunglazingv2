export interface Project {
  slug: string;
  name: string;
  location: string;
  client?: string;
  sector: 'Commercial' | 'Hospitality' | 'Infrastructure' | 'Residential';
  systemUsed: string;
  imageUrl: string;
  description: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    slug: "vasavi-sky-city-block-2",
    name: "Vasavi Sky City Block-2",
    location: "Hyderabad, India",
    client: "Vasavi Group",
    sector: "Commercial",
    systemUsed: "Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/vasavi-sky-city-block-2.jpg",
    description: "A monumental IT/commercial complex featuring high-efficiency unitized structural glazing facade, optimized for thermal performance and structural integrity.",
    highlights: ["12-story commercial facade", "Double glazed unitized panels", "Integrated thermal breaks"]
  },
  {
    slug: "mayuri-vishwa-tech-park",
    name: "Mayuri / Vishwa Tech Park",
    location: "Hyderabad, India",
    client: "Mayuri Group",
    sector: "Commercial",
    systemUsed: "Unitized Curtain Walling",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/vtp.jpg",
    description: "An advanced technology park utilizing customized high-span aluminum extrusions and energy-efficient glazing panels to reduce heat gains.",
    highlights: ["Architectural die designs", "High sound insulation performance", "Saint-Gobain Glass integration"]
  },
  {
    slug: "gar-laxmi-infobhan",
    name: "GAR-Laxmi Infobhan",
    location: "Hyderabad, India",
    client: "GAR Corp",
    sector: "Commercial",
    systemUsed: "Semi-Unitized Structural Glazing & ACP Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/GAR-LAXMI-INFOBHAN.jpg",
    description: "An extensive multi-tower IT park complex with glass facade elevation and custom aluminum composite panel claddings.",
    highlights: ["Multi-phase facade execution", "High wind-load wind-tunnel tested design", "Precision Mullion & Transom layouts"]
  },
  {
    slug: "gvk-bio-sciences",
    name: "GVK Bio-Sciences",
    location: "Hyderabad, India",
    client: "GVK Group",
    sector: "Commercial",
    systemUsed: "Curtain Wall Glazing & Metal Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/GVK.jpg",
    description: "A high-precision research facility facade engineered with structural glazing and protective claddings to support laboratory environment controls.",
    highlights: ["Acoustic isolation panels", "Thermal-efficient glazing", "Chemical-resistant aluminum finishes"]
  },
  {
    slug: "one-golden-mile",
    name: "One Golden Mile",
    location: "Hyderabad, India",
    client: "Golden Mile Group",
    sector: "Commercial",
    systemUsed: "Unitized Glazing & Tension Cable Systems",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/OMG.jpg",
    description: "A premium business boutique center featuring a minimalist structural glass facade supported by complex tension cable networks.",
    highlights: ["Point-fixed spider glazing", "High-transmission glass", "Structural steel tension cables"]
  },
  {
    slug: "sai-life-sciences",
    name: "Sai Life Sciences",
    location: "Hyderabad, India",
    client: "Sai Life Sciences Ltd",
    sector: "Commercial",
    systemUsed: "Semi-Unitized Glazing & ACP Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/sai-life-sciences.jpg",
    description: "Corporate headquarters and research laboratory wrapped in a performance-driven glass envelope with high solar screening efficiency.",
    highlights: ["Sunscreening panels", "Custom pressure plates", "High thermal insulation rating"]
  },
  {
    slug: "sas-i-tower-c-block",
    name: "SAS I Tower-C Block",
    location: "Hyderabad, India",
    client: "SAS Infra",
    sector: "Commercial",
    systemUsed: "Unitized Glazing & Metal Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/55.jpg",
    description: "An ultra-modern high-rise commercial tower block utilizing full-height unitized curtain walling to maximize floor space and natural daylight.",
    highlights: ["Seismic-sway resistant anchors", "High wind-pressure capability", "Integrated facade maintenance rails"]
  },
  {
    slug: "hicc",
    name: "Hyderabad International Convention Center",
    location: "Hyderabad, India",
    client: "Emaar MGF / HICC",
    sector: "Infrastructure",
    systemUsed: "Tension Cable Net Systems & Double Glazed Units",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/HICC.jpg",
    description: "A state-of-the-art global convention center facade featuring expansive point-fixed glass walls supported by heavy-duty steel tension members.",
    highlights: ["Massive unobstructed glass lobby", "Acoustic attenuation controls", "Seismic joint engineering"]
  },
  {
    slug: "vajram-cmr-one",
    name: "Vajram CMR One",
    location: "Hyderabad, India",
    client: "Vajram Group",
    sector: "Commercial",
    systemUsed: "Unitized Curtain Walling",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/vajram-1.jpg",
    description: "A premium corporate workspace building featuring high-efficiency unitized glass facade sections, designed and fabricated offsite.",
    highlights: ["Offsite factory assembly", "100% weatherproofing seal", "Optimized structural silicone joints"]
  },
  {
    slug: "heritage-foods",
    name: "Heritage Foods",
    location: "Hyderabad, India",
    client: "Heritage Foods Ltd",
    sector: "Commercial",
    systemUsed: "Stick Glazing & Glass Doors",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/Heritage-Foods-1.jpg",
    description: "Corporate office building upgraded with clear glass structural walls and automatic aluminum sliding entry systems.",
    highlights: ["High-durability automatic doors", "Clean stick system profile", "Reflective facade glass"]
  },
  {
    slug: "trendset-office-building",
    name: "Trendset Office Building",
    location: "Hyderabad, India",
    client: "Trendset Builders",
    sector: "Commercial",
    systemUsed: "Unitized structural glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/Trendset.jpg",
    description: "Corporate office utilizing modern structural glazing to showcase a sleek reflective exterior skin with zero visible framing from the outside.",
    highlights: ["Invisible mullions layout", "Double silver low-E glass", "Integrated ventilation panels"]
  },
  {
    slug: "leela-hotel",
    name: "Leela Hotel",
    location: "Bhavani Island, India",
    client: "The Leela Palaces, Hotels and Resorts",
    sector: "Hospitality",
    systemUsed: "Curtain Walling & Skylights",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/LEELA-HOTEL.jpg",
    description: "A premium luxury resort facade combining high-acoustic control glazing, specialized skylights, and custom aluminum profile accents.",
    highlights: ["Acoustic dampening configurations", "Leaf-skylight glass systems", "Sea-breeze corrosion-resistant finishes"]
  },
  {
    slug: "invecas-aydiv",
    name: "Invecas / Aydiv",
    location: "Hyderabad, India",
    client: "Invecas Technologies",
    sector: "Commercial",
    systemUsed: "Semi-Unitized Facade Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/aydiv.jpg",
    description: "A premium tech campus clad in semi-unitized double-glazed facade sections, presenting a sleek modern tech grid aesthetic.",
    highlights: ["High solar control index", "Glass-to-glass corner joints", "Polyester powder coated frames"]
  },
  {
    slug: "rajapushpa",
    name: "Rajapushpa",
    location: "Hyderabad, India",
    client: "Rajapushpa Properties",
    sector: "Commercial",
    systemUsed: "Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/RAJAPUSHPA.jpg",
    description: "A major commercial IT hub featuring premium curtain wall panels designed in collaboration with Reynaers Belgium system architectures.",
    highlights: ["Reynaers CW50 system integration", "Wind pressure verified anchor systems", "Thermal envelope optimization"]
  },
  {
    slug: "itc-kohinoor",
    name: "ITC Kohinoor",
    location: "Hyderabad, India",
    client: "ITC Limited",
    sector: "Hospitality",
    systemUsed: "High-Acoustic Unitized Curtain Walling & Atrium Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/ITC-KOHINOOR.jpg",
    description: "One of Hyderabad's most iconic luxury hotels, engineered with custom high-acoustic curtain wall panels and an expansive glass atrium to block urban noise.",
    highlights: ["Exceptional sound transmission class (STC) rating", "Custom structural glass atrium", "Solar shading integration"]
  },
  {
    slug: "sri-harsha-icon",
    name: "Sri Harsha Icon",
    location: "Hyderabad, India",
    client: "Sri Harsha Group",
    sector: "Commercial",
    systemUsed: "Unitized Glazing & Canopy Systems",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/Sri-Harsha-Icon.jpg",
    description: "A commercial tower implementing structural glazing and structural glass overhead canopies at the lobby entrances for modern visual continuity.",
    highlights: ["Entrance glass canopy", "Sleek mullion profiles", "Energy-efficient glazing"]
  },
  {
    slug: "royal-orchid",
    name: "Royal Orchid Hotel",
    location: "South India",
    client: "Royal Orchid Hotels",
    sector: "Hospitality",
    systemUsed: "Curtain Walling & Glazed Skylights",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/ROYAL-ORCHID.jpg",
    description: "Premium hospitality facade showcasing dynamic sloped glazing and multi-story curtain walls, bringing in abundant natural light.",
    highlights: ["Slope-glazing systems", "Sun-screening louvers integration", "Highly insulated glazed units"]
  },
  {
    slug: "novotel-hotel",
    name: "Novotel Hotel",
    location: "Hyderabad, India",
    client: "Accor Hotels / Novotel",
    sector: "Hospitality",
    systemUsed: "Unitized Glazing Panels (Turnkey)",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/NOVOTEL-HOTEL.jpg",
    description: "A landmark hospitality project executing factory-glazed unitized panels, representing one of Sun Glazing's earliest high-profile collaborations.",
    highlights: ["Early unitized system implementation", "Fast-track erection timeline", "Accor global quality compliance"]
  },
  {
    slug: "deloitte",
    name: "Deloitte Corporate Campus",
    location: "Hyderabad, India",
    client: "Deloitte",
    sector: "Commercial",
    systemUsed: "Unitized Curtain Walling & Spiders",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/DELLOIT.jpg",
    description: "A sprawling IT campus utilizing unitized structural glazing to construct high-performance thermal building envelopes.",
    highlights: ["High-volume fabrication schedule", "Saint Gobain performance glass", "Integrated facade access channels"]
  },
  {
    slug: "hyderabad-airport",
    name: "Hyderabad Rajiv Gandhi International Airport",
    location: "Shamshabad, India",
    client: "GMR Group",
    sector: "Infrastructure",
    systemUsed: "Unitized Glazing & Heavy-Duty Atrium Walls",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/RAJIV-GANDHI-Airport.jpg",
    description: "Turnkey fabrication partner supplying high-specification unitized structural glazing panels for the main terminal building under global standards.",
    highlights: ["Airport-grade security glazing", "Exceptional wind-load resistance", "Large-span structural panels"]
  },
  {
    slug: "sln-terminus",
    name: "SLN Terminus",
    location: "Hyderabad, India",
    client: "SLN Builders",
    sector: "Commercial",
    systemUsed: "Unitized Structural Glazing & Spiders",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/SLN.jpg",
    description: "A mixed-use commercial space utilizing dynamic curtain walls and point-fixed spider glazing configurations to create an open public visual field.",
    highlights: ["Point-fixed Spider facade system", "316-grade stainless steel fittings", "Energy-efficient low-E glass"]
  },
  {
    slug: "navayuga-incubation",
    name: "Navayuga Incubation Center",
    location: "Hyderabad, India",
    client: "Navayuga Group",
    sector: "Commercial",
    systemUsed: "Semi-Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/NAVAYUGA-INCUBATION.jpg",
    description: "An incubator hub featuring high-acoustic insulating structural glazing panels, creating quiet workspaces amidst a bustling technology district.",
    highlights: ["Double-glazed acoustic panels", "Custom shadow box design", "Integrated facade louvers"]
  },
  {
    slug: "trendset-onyx",
    name: "Trendset Onyx",
    location: "Hyderabad, India",
    client: "Trendset Builders",
    sector: "Commercial",
    systemUsed: "Unitized Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/Trendset-Onyx.jpg",
    description: "Modern commercial complex boasting a sleek glass tower profile wrapped in high-reflection glass to minimize HVAC cooling loads.",
    highlights: ["High-shading coefficient glass", "Offsite unitized production", "Continuous vertical line layout"]
  },
  {
    slug: "gvk-hq",
    name: "GVK HQ",
    location: "Hyderabad, India",
    client: "GVK Group",
    sector: "Commercial",
    systemUsed: "Curtain Walling & Structural Glass Entrances",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/gvk-img.jpg",
    description: "GVK Group Corporate Headquarters designed to symbolize corporate prestige, featuring a frameless glass facade with spider clamps.",
    highlights: ["Frameless architectural facade", "Custom steel mullion supports", "High light transmission percentage"]
  },
  {
    slug: "aig-hospital",
    name: "AIG Hospital",
    location: "Hyderabad, India",
    client: "Asian Institute of Gastroenterology",
    sector: "Infrastructure",
    systemUsed: "Unitized Structural Glazing & ACP Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/ALEXANDRIA.jpg",
    description: "A premier mega-hospital complex requiring custom facade layouts to ensure maximum acoustic comfort and dustproof interior environments.",
    highlights: ["Dustproof perimeter sealing", "High-performance solar glass", "Heavy-duty aluminum support brackets"]
  },
  {
    slug: "honeywell-technology",
    name: "Honeywell Technology Center",
    location: "Hyderabad, India",
    client: "Honeywell",
    sector: "Commercial",
    systemUsed: "Unitized Glazing System",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/Honeywell.jpg",
    description: "An R&D center built with modern facade systems that integrate high structural strength and sound attenuation properties.",
    highlights: ["Honeywell security compatibility", "Sound transmission class STC 42 rating", "High thermal insulation value"]
  },
  {
    slug: "invecas-tech-hub",
    name: "Invecas Tech Hub",
    location: "Hyderabad, India",
    client: "Invecas Ltd",
    sector: "Commercial",
    systemUsed: "Semi-Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/in-1.jpg",
    description: "A tech corporate facility with a custom-engineered facade featuring highly reflective glass and shadow boxes.",
    highlights: ["Shadow box paneling", "Seismic movement joints", "Reflective solar controls"]
  },
  {
    slug: "preston-prime",
    name: "Preston Prime",
    location: "Hyderabad, India",
    client: "Preston Developers",
    sector: "Commercial",
    systemUsed: "Unitized Glazing & Metal Cladding",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/PRESTON-MALL.jpg",
    description: "A prominent high-street retail mall and multiplex facade integrating large span glazing panels and dynamic illuminated claddings.",
    highlights: ["Large span visual display glass", "Integrated LED facade framing", "Heavy-duty entry doors"]
  },
  {
    slug: "vishwa-tech-park",
    name: "Vishwa Tech Park",
    location: "Hyderabad, India",
    client: "Vishwa Group",
    sector: "Commercial",
    systemUsed: "Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2025/09/vtp1.jpg",
    description: "Corporate workspace block utilizing state-of-the-art unitized facade grids for maximum daylight harvesting and low thermal transfer coefficients.",
    highlights: ["Daylight harvesting optimization", "Offsite quality controlled assembly", "Thermal-efficient window frames"]
  },
  {
    slug: "gar-laxmi-infobhan-t2",
    name: "GAR Laxmi Infobhan Tower-2",
    location: "Hyderabad, India",
    client: "GAR Corp",
    sector: "Commercial",
    systemUsed: "Unitized Structural Glazing",
    imageUrl: "https://www.sunglazing.com/wp-content/uploads/2021/02/GAR.jpg",
    description: "An iconic corporate tower displaying fully unitized structural glazing panels with high wind-load tolerances and optimized glass thickness.",
    highlights: ["High-altitude wind deflection engineering", "Silicon weather seals", "Precision vertical anchor plates"]
  }
];
