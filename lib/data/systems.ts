export interface FacadeSystem {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  specs?: Record<string, string>;
  suitability?: string[];
  engineeringDetail?: string;
}

export const facadeSystems: FacadeSystem[] = [
  {
    id: "unitized-curtain-walling",
    name: "Unitized Curtain Walling Systems",
    shortDescription: "Factory-assembled modular facade panels delivered directly to site for rapid installation.",
    description: "Unitized curtain walling shifts the installation process from the construction site to our quality-controlled factory. Glazed panels are fully assembled, sealed, and inspected offsite before delivery, ensuring unparalleled precision and reducing onsite labor overhead.",
    benefits: [
      "Rapid onsite erection without the need for extensive external scaffolding",
      "Factory-controlled environments ensure superior silicone seals and tolerances",
      "Accommodates high thermal and seismic movement design requirements",
      "Ideal for modern high-rise office towers and commercial landmarks"
    ],
    specs: {
      "Fabrication Mode": "100% Off-site Factory Pre-glazed",
      "Air Infiltration": "Tested up to 600 Pa (ASTM E283)",
      "Water Penetration": "Zero leakage at 1000 Pa (ASTM E331)",
      "Silicone Jointing": "Structural grade, cured under temperature-controlled settings",
      "Collaborator": "Reynaers, Belgium (CW50/CW60 System profiles)"
    },
    suitability: ["High-rise towers", "IT campuses", "Corporate Headquarters", "Prestige Commercial Projects"],
    engineeringDetail: "Panels are anchored using dynamic three-way adjustable steel brackets. Hook and pin arrangements are utilized to allow the facade to expand and contract due to temperature fluctuations and seismic forces independently of the building structural frame."
  },
  {
    id: "semi-unitized-curtain-wall",
    name: "Semi-Unitized Curtain Wall Systems",
    shortDescription: "A hybrid stick-unitized facade framing system offering high field versatility.",
    description: "Semi-unitized curtain walling features a main grid frame of aluminum transoms and mullions installed onsite. Glass sub-frames are glazed and sealed in our factory, then mounted onto the structural framing grid using custom engineering brackets and cleats.",
    benefits: [
      "Lower shipping bulk compared to fully unitized panels",
      "High field versatility, accommodating complex architectural curves",
      "Faster onsite mounting than traditional stick systems",
      "Clean visual grids with narrow sightlines"
    ],
    specs: {
      "Structural Support": "Anchored Mullion & Transom Frame grid",
      "Installation Type": "Factory-glazed sub-frames, onsite mechanical locking",
      "Thermal Insulation": "High-efficiency thermal break profiles available",
      "Seals": "EPDM gaskets with dry glazing techniques"
    },
    suitability: ["Mid-rise commercial centers", "Boutique offices", "Institutional facilities"],
    engineeringDetail: "Main frames are anchored directly to concrete slabs using heavy-duty cast-in channels. Glazed panels are held in place using custom mechanical toggle cleats, offering robust security and easy maintenance access."
  },
  {
    id: "stick-curtain-walling",
    name: "Stick Curtain Walling Systems",
    shortDescription: "Traditional onsite facade fabrication for low-to-mid rise structures.",
    description: "The traditional stick curtain walling system relies on vertical mullions and horizontal transoms fabricated and installed piece-by-piece onsite, followed by glass panels and pressure plates. This approach is highly flexible and cost-effective for lower-elevation facades.",
    benefits: [
      "Ideal for irregular geometries and customized structural openings",
      "Lower logistical prep time and standard transport requirements",
      "Economic solution for low-rise commercial elevations",
      "Highly adaptable during construction phases"
    ],
    specs: {
      "Onsite Assembly": "Vertical mullions, horizontal transoms, then glass panels",
      "Sightline Width": "Typically 50mm or 60mm structural width",
      "Glazing Thickness": "Accommodates 6mm single to 38mm double glazed units"
    },
    suitability: ["Retail showrooms", "Lobby storefronts", "Low-rise office blocks"],
    engineeringDetail: "Transoms are connected to mullions using shear blocks. The system is designed to transfer wind loads to floor slabs while allowing for vertical expansion at expansion joints."
  },
  {
    id: "tension-cable-facade",
    name: "Tension Cable Net Systems",
    shortDescription: "High-transparency point-fixed glass facade using tensile wire networks.",
    description: "Tension cable structures represent the pinnacle of high-transparency architectural envelopes. Steel cables are tensioned and anchored to structural columns or concrete slabs, supporting point-fixed glass panels via spider clamps. This completely eliminates solid metal frame obstructions.",
    benefits: [
      "Maximum natural light harvesting and clear exterior sightlines",
      "Minimalist engineering aesthetic resembling suspended crystal envelopes",
      "Extremely robust performance against wind deflection loads",
      "Highly durable 316-grade stainless steel assemblies"
    ],
    specs: {
      "Supporting Members": "High-tensile structural steel cable nets",
      "Anchor Points": "Top and bottom concrete slabs/beams",
      "Glass Fittings": "Point-fixed spider clamps (SS 316 Grade)",
      "Supplier Partner": "M/s Kinlong Architectural Glass Fittings, China"
    },
    suitability: ["Corporate lobby entrances", "Airport terminals", "Convention center atriums"],
    engineeringDetail: "High pre-tension loads are applied to vertical and horizontal cables. Cable movements are modeled under maximum design wind loads to ensure glass edge stresses remain well within limits."
  },
  {
    id: "bullet-proof-glazing",
    name: "Bullet-Proof & Security Glazing",
    shortDescription: "Specialized high-security glass systems engineered to resist impact and ballistics.",
    description: "Sun Glazing designs and installs specialized security enclosures capable of resisting impact, ballistic weapons, and forced entry, with exact classifications based on EN1063 standards for splintering and non-splintering glass.",
    benefits: [
      "Ballistic resistance against specific high-power weapons and ammo",
      "Engineered thickness to maintain clarity while ensuring protection",
      "Perfect for high-risk corporate, government, and VIP sectors"
    ],
    specs: {
      "Ballistic Class": "EN1063 BR6-S (Resists 7.62x51mm NATO caliber)",
      "Glass Thickness": "Nominal 50mm Planilux extra-clear laminate",
      "Assembly Weight": "117 kg/m²",
      "Light Transmission": "72% to 82% (EN 410)",
      "Thermal Transmittance": "U-Value = 4.5 W/m²K",
      "Solar Heat Gain (g-value)": "0.51 to 0.65",
      "Energy Reflection (pE)": "5% to 6%"
    },
    suitability: ["VIP Offices", "Government headquarters", "Financial institutions", "Safe rooms"],
    engineeringDetail: "Laminated glass layers are bonded using high-elasticity PVB/SentryGlas interlayers. The frame profiles are custom reinforced with internal steel plates to prevent ballistic penetration through the aluminum frames."
  },
  {
    id: "kinetic-facade",
    name: "Kinkinetic & Environmental Facades",
    shortDescription: "Interactive building envelopes reacting dynamically to external environment parameters.",
    description: "Kinetic facades represent the next step in sustainable architecture. These envelopes integrate dynamic, programmable panels that shift, open, or angle themselves in response to wind, rain, and solar angles, optimizing HVAC efficiency and shading coefficients.",
    benefits: [
      "Dynamic control of building daylighting levels and solar heat gains",
      "Stunning aesthetic presence with moving physical geometries",
      "Significant reduction in building cooling energy requirements",
      "Bio-metric and environmental sensor synchronization"
    ],
    specs: {
      "Actuation": "Motorized architectural louvers or folding panels",
      "Controls": "Integrated environmental sensor suite (Light, wind, rain)",
      "Materials": "Highly durable, lightweight aluminum alloys or composite membranes"
    },
    suitability: ["Flagship commercial headquarters", "Art museums", "Smart building projects"],
    engineeringDetail: "Dynamic elements are mounted on heavy-duty stainless steel bearing shafts. Actuator systems are linked to a central building automation system (BAS) which updates panel angles based on real-time solar tracking algorithms."
  },
  {
    id: "etfe-facades",
    name: "ETFE Facade Systems",
    shortDescription: "Ultra-lightweight fluoropolymer copolymer plastic film architectural cushions.",
    description: "Ethylene Tetrafluoroethylene (ETFE) cushions represent a lightweight alternative to traditional glass facades. These pneumatic cushions are inflated with low-pressure air, providing excellent insulation, extreme durability, and dramatic lighting opportunities.",
    benefits: [
      "Only 1% of the weight of double-glazed glass systems",
      "Pneumatically inflated structures with superior thermal properties",
      "Self-cleaning surface (non-stick dust repellent properties)",
      "Allows light transmission and custom color prints (fritting)"
    ],
    specs: {
      "Material": "Pneumatic ETFE Film Cushions",
      "Weight": "Under 3 kg/m²",
      "Service Life": "Up to 50 years"
    },
    suitability: ["Large-span skylights", "Stadium enclosures", "Shopping mall roofs"],
    engineeringDetail: "Pneumatic air tubes feed a constant, sensor-controlled low-pressure air supply to the cushions to maintain structural shape against wind and snow loads."
  },
  {
    id: "glass-canopy",
    name: "Structural Glass Canopies",
    shortDescription: "Architectural entrance canopies combining weatherproofing and natural light.",
    description: "Entrance canopies protect building visitors from rain and wind while ensuring lobby areas receive natural light. Designed with safety laminate layers, our glass canopies feature clean, minimal overhead structures.",
    benefits: [
      "Aesthetic entryway shelter preserving daylight lines",
      "Durable, corrosion-resistant framing and support steel",
      "Highly customizable glass treatments (tinted, clear, frosted)"
    ],
    specs: {
      "Glass Type": "Toughened Laminated Safety Glass",
      "Tension Rods": "Grade 316 Stainless Steel tie back systems",
      "Glazing Thickness": "12mm to 24mm laminated configurations"
    },
    suitability: ["Hotel main lobby entrances", "Office block entryways", "Retail mall portals"],
    engineeringDetail: "Laminated glass configurations are strictly calculated to resist overhead impact loads (snow, debris, storm). Stainless steel spider rods are anchored back to structural columns to transfer cantilever stresses."
  }
];
