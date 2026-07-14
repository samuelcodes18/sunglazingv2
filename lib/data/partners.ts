export interface Collaborator {
  name: string;
  role: string;
  description: string;
  location: string;
}

export interface Leadership {
  name: string;
  title: string;
  credentials?: string;
  image: string;
  bio: string;
  keyProjects?: string[];
}

export const collaborators: Collaborator[] = [
  {
    name: "Reynaers, Belgium",
    role: "Aluminum System Technology Partner",
    description: "Collaboration for high-quality architectural aluminum systems (windows, doors, curtain walls). Allows maximum efficiency in cost-to-energy saving ratio. Supported by Mr. Badal Shah (Reynaers India Consultant) stationed in Pune, providing design audits and regular project visits.",
    location: "Belgium / Pune, India"
  },
  {
    name: "Saint-Gobain India",
    role: "Primary Glass Supplier",
    description: "India's largest glass manufacturer, supplying all high-performance and extra-clear glazing requirements. Collaborative engineering utilizing Saint-Gobain's 'Glass Pro' interactive simulator to predict architectural visual and thermal outputs.",
    location: "India"
  },
  {
    name: "IIT Chennai",
    role: "Structural Designs & Test Reports",
    description: "Third-party structural calculation verification, facade wind load tests, and engineering report certifications.",
    location: "Chennai, India"
  },
  {
    name: "Mr. Jerry Dowling & Mr. Arthur Millwood",
    role: "Glass Performance Consultants",
    description: "Australian glass consultants stationed in Dubai with over 40 years of global experience. Supporting glass performance certifications, acoustic calculations, and wind tunnel performance reviews.",
    location: "Dubai, UAE"
  },
  {
    name: "M/s Kinlong Architectural Glass Fittings",
    role: "Spider Glazing Fittings Partner",
    description: "Key supplier of premium 316-grade stainless steel point-fixed glass accessories and spider hardware.",
    location: "China"
  },
  {
    name: "Alucopanel, Alpolic, & Alcopla",
    role: "ACP & Cladding Materials Suppliers",
    description: "Suppliers of aluminum composite panel (ACP) cladding systems from Korea (Alucopanel), Japan (Alpolic), and Taiwan (Alcopla).",
    location: "Global"
  }
];

export const leadership: Leadership[] = [
  {
    name: "Mr. Madhusudhan",
    title: "Founder & Director",
    credentials: "Mechanical Engineer | 25+ Years Aluminium & Facade Industry Experience",
    image: "https://www.sunglazing.com/wp-content/uploads/2021/02/Madhu-Photo.png",
    bio: "Mr. Madhusudhan is a second-generation entrepreneur. He set up an Aluminium Extrusion manufacturing industry in 1996 with a capacity of 3000 tons of profiles per annum, catering to major multinational companies (Tata BP Solar, Siemens, Alsthom, etc.). In 2005, identifying the massive expansion in commercial structural glazing, he diversified the organization into turnkey facade envelopes (Sun Glazing) and has driven the company to become one of South India's most reputable facade contractors.",
    keyProjects: ["Novotel Hotel", "Hyderabad International Airport", "Deloitte Corporate Campus", "Ascendas IT Park"]
  },
  {
    name: "Mr. Vishnu",
    title: "Director of Operations & Project Management",
    credentials: "Chemical Engineer (BITS Pilani) | MBA (ISB Hyderabad)",
    image: "https://www.sunglazing.com/wp-content/uploads/2024/12/Vishnu-Photo.png",
    bio: "Mr. Vishnu joined Sun Glazing in 2022. He oversees global estimations, recruitment, end-to-end project management, and production operations. Leveraging his engineering background from BITS Pilani and business analytics skills from the Indian School of Business (ISB), he spearheaded the establishment of our new state-of-the-art Chandenvalle production facility, introduced modernized internal scheduling software, and expanded our pipeline of high-rise commercial clients.",
    keyProjects: ["Vasavi Sky City Block-2", "Chandenvalle Production Facility Expansion", "Mayuri/Vishwa Tech Park"]
  }
];

export const companyOverview = {
  founded: 2005,
  extrusionCapacity: "3000 Tons/Annum (Est. 1996)",
  offices: {
    corporate: {
      title: "Corporate Office",
      address: "601, Aditya West End, Plot No. 12, Uma Nagar Colony, Begumpet, Hyderabad – 500 016, Telangana, India.",
      phone: "+91-40-23400438",
      mobile: "+91-9849333011",
      email: "madhu@sunglazing.com, vishnu@sunglazing.com, sales@sunglazing.com, projects@sunglazing.com"
    },
    factory: {
      title: "Chandenvalle Manufacturing Facility",
      address: "Plot 143, Industrial Park, Chandenvalle, Hyderabad – 501503, Telangana, India.",
      phone: "+91-40-23400438",
      email: "projects@sunglazing.com"
    }
  },
  values: [
    {
      title: "Optimized Cost",
      description: "Continuously improving operational efficiency in facade construction using process optimization, supply-chain planning, and digital automation.",
      icon: "Coins"
    },
    {
      title: "Uncompromising Quality",
      description: "Delivering advanced engineering solutions that comply with global standards, on-schedule and with rigorous validation.",
      icon: "ShieldCheck"
    },
    {
      title: "Customer Delight",
      description: "Working in complete harmony with building owners, PMCs, architects, and facade consultants to fulfill exact employer specifications.",
      icon: "HeartHandshake"
    }
  ],
  vision: "To be a reliable partner for our clients in building world-class facade elevations, recognized as the most preferred total solution glazing brand—a symbol of quality and reliability.",
  mission: "To build outstanding facade elevations that transform city skylines, growing steadily and profitably by delivering high-quality products and efficient turnkey services within the shortest possible timelines."
};
