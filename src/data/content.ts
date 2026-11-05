import { ServiceItem, ProjectItem, AssociatedVenture } from '../types';

export const BRAND_INFO = {
  name: 'D2K',
  handle: '@dahmie2k',
  email: 'd2kwurld@gmail.com',
  phone: '07062382645',
  instagramUrl: 'https://instagram.com/dahmie2k',
  tagline: 'VISION. STRATEGY. EXECUTION.',
  subtitle: 'Entrepreneur, consultant and multidisciplinary professional helping ideas move from vision to execution.',
  location: 'Global / Executive Advisory'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consulting',
    title: 'Business Consulting',
    category: 'Strategy & Advisory',
    shortDesc: 'Strategic guidance for scaling ventures, refining business models, and overcoming operational bottlenecks.',
    fullDesc: 'Partnering with founders and leadership teams to analyze market positioning, optimize business structures, and design actionable roadmaps for sustainable growth and profitability.',
    keyPoints: [
      'Business Model Optimization',
      'Strategic Growth & Expansion Planning',
      'Operational Efficiency Audits',
      'Executive Advisory & Decision Support'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Briefcase'
  },
  {
    id: 'logistics',
    title: 'Logistics & Operations',
    category: 'Supply Chain & Execution',
    shortDesc: 'Streamlining supply chains, transport networks, and operational workflows for maximum reliability.',
    fullDesc: 'Expert oversight of logistics operations, inventory management systems, and fulfillment networks. Ensuring seamless execution from dispatch to final delivery.',
    keyPoints: [
      'Supply Chain & Fleet Coordination',
      'Operational Workflow Design',
      'Vendor & Partner Negotiation',
      'Risk Mitigation & Quality Control'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Truck'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    category: 'Property & Investment',
    shortDesc: 'Navigating high-value property acquisitions, portfolio development, and strategic real-estate ventures.',
    fullDesc: 'Providing expert insight into commercial and residential real estate opportunities, property evaluation, and transaction management for discerning clients and investors.',
    keyPoints: [
      'Property Acquisition & Advisory',
      'Portfolio Asset Management',
      'Investment Due Diligence',
      'Development Project Consultation'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Building'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    category: 'Execution & Delivery',
    shortDesc: 'End-to-end project lifecycle management ensuring timely delivery, budget discipline, and elite execution.',
    fullDesc: 'Translating complex initiatives into structured, milestones-driven projects. Coordinating cross-functional teams and stakeholders to achieve impeccable outcomes.',
    keyPoints: [
      'End-to-End Project Execution',
      'Resource & Timeline Allocation',
      'Stakeholder & Team Leadership',
      'Quality & Milestone Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Target'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    category: 'Venture Building',
    shortDesc: 'Building, incubating, and scaling innovative business ventures with disciplined leadership and vision.',
    fullDesc: 'Driving new commercial ventures from concept validation to market launch. Applying rigorous business discipline, risk management, and strategic market positioning.',
    keyPoints: [
      'Venture Incubation & Launch',
      'Brand & Market Positioning',
      'Strategic Partnerships & Alliances',
      'Scalable Business Architecture'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    iconName: 'Zap'
  }
];

export const ASSOCIATED_VENTURES: AssociatedVenture[] = [
  {
    name: 'Fixed By Alandrea',
    handle: '@fixedbyalandrea',
    url: 'https://instagram.com/fixedbyalandrea',
    description: 'Associated professional brand specializing in curated lifestyle, restoration, and aesthetic precision.',
    badge: 'Aesthetic & Lifestyle',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'SoulShift Inc.',
    handle: '@soulshift.inc',
    url: 'https://instagram.com/soulshift.inc',
    description: 'Associated brand venture focused on transformational growth, mindful leadership, and high-performance culture.',
    badge: 'Mindset & Growth',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Multi-Hub Supply Chain Optimization',
    category: 'Logistics',
    description: 'Redesigned regional dispatch routing and warehouse inventory protocols, reducing turnaround time by 34%.',
    status: 'Completed Engagement',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000',
    year: '2025'
  },
  {
    id: 'proj-2',
    title: 'Commercial Real Estate Portfolio Advisory',
    category: 'Real Estate',
    description: 'Provided valuation and investment structuring advisory for prime commercial assets in high-growth districts.',
    status: 'Strategic Partnership',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'Enterprise Operational Restructuring',
    category: 'Consulting',
    description: 'Conducted comprehensive organizational audit and spearheaded leadership alignment to streamline project workflows.',
    status: 'Ongoing Advisory',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  },
  {
    id: 'proj-4',
    title: 'Strategic Venture Launch & PMO Setup',
    category: 'Project Management',
    description: 'Established the Project Management Office (PMO) and oversaw cross-functional launch milestones for an emerging enterprise.',
    status: 'Completed Engagement',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  }
];
