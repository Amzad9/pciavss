export type ServiceSection = {
  heading: string;
  paragraphs: string[];
};

export type ServiceCard = {
  title: string;
  body: string;
  image: string;
  sections: ServiceSection[];
};

/** Stable fragment for /services#… deep links and /services/[slug] paths. */
export function serviceSectionId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function servicePagePath(title: string): string {
  return `/services/${serviceSectionId(title)}`;
}

export function getServiceBySlug(slug: string): ServiceCard | undefined {
  return serviceCards.find((c) => serviceSectionId(c.title) === slug);
}

export const serviceCards: ServiceCard[] = [
  {
    title: "Security Cameras",
    body: "Crystal-clear HD video with remote access, motion alerts, and night vision.",
    image: "/service/security.png",
    sections: [
      {
        heading: "Designed for clarity day and night",
        paragraphs: [
          "Modern IP cameras deliver sharp detail where it matters—entries, parking areas, registers, and perimeter lines—so you can identify activity quickly when reviewing footage.",
          "We match lens types, mounting locations, and coverage angles to your property layout, then tune motion regions and alert sensitivity to reduce noise from trees, headlights, or public sidewalks.",
        ],
      },
      {
        heading: "Remote access and smart alerts",
        paragraphs: [
          "View live and recorded video from secure apps or a browser dashboard, with organized camera groups for staff who manage multiple sites.",
          "Optional notifications can flag motion, line crossing, or after-hours activity so your team can verify events without watching feeds all day.",
        ],
      },
      {
        heading: "Professional installation",
        paragraphs: [
          "Clean cable runs, weather-sealed outdoor mounts, and network-ready backhaul help your system stay dependable through heat, rain, and years of operation.",
          "After install we walk you through playback, user permissions, and basic maintenance so your investment stays useful long after we leave the site.",
        ],
      },
    ],
  },
  {
    title: "Video Monitoring",
    body: "Remote or live video feeds with smart alerts and playback features.",
    image: "/service/Video-Monitoring.jpg",
    sections: [
      {
        heading: "Live visibility when it counts",
        paragraphs: [
          "Video monitoring pairs cameras with workflows that make footage actionable—organized views, quick search, and consistent retention policies aligned with how you operate.",
          "Whether you need a single property layout or a standardized template replicated across branches, we help you build a structure that scales without becoming overwhelming.",
        ],
      },
      {
        heading: "Playback and verification",
        paragraphs: [
          "Fast scrubbing, timeline markers, and export options simplify incident review for management, HR, or law enforcement requests when documentation is required.",
          "We can integrate monitoring habits with alarms and access events so correlated timelines tell a clearer story than cameras alone.",
        ],
      },
      {
        heading: "Bandwidth and storage that fit",
        paragraphs: [
          "We plan recording quality, frame rates, and storage duration around your network capacity and compliance comfort level—not a one-size-fits-all default.",
          "Optional cloud tiers or local NVR setups can be mixed to balance cost, redundancy, and recovery time objectives for your business.",
        ],
      },
    ],
  },
  {
    title: "Mobile Security Trailers",
    body: "Deployable surveillance units for construction sites, events, and remote areas.",
    image:
      "/service/imgi_3_b586a8_40fb2b8a168344d8abdd26b4ce669570mv2-rcvlhvzs4u2uh2zuclnbwqwqsgldydpmc7pzlsxkz2.jpg",
    sections: [
      {
        heading: "Rapid coverage for temporary sites",
        paragraphs: [
          "Trailers bring elevated camera positions, power, and connectivity models suited to construction phases, laydown yards, festivals, and parking lots where fixed wiring is not practical.",
          "Deployment options can emphasize deterrence with visible mast lighting and signage, or a lower profile depending on site rules and neighborhood context.",
        ],
      },
      {
        heading: "Power and connectivity options",
        paragraphs: [
          "Solar-assisted setups, generator compatibility, and battery-backed components can be specified for locations where grid power is limited or staged over time.",
          "Cellular backhaul and failover planning help keep feeds reachable even when local IT infrastructure is still under construction.",
        ],
      },
      {
        heading: "Lease timelines and support",
        paragraphs: [
          "We align rental windows with project schedules and can coordinate moves between jobsites as your superintendent or PM shifts priorities.",
          "Training for site supers on basic checks—clean lenses, tamper awareness, and who to call—keeps the unit effective for the full rental period.",
        ],
      },
    ],
  },
  {
    title: "Alarm System",
    body: "Smart alarms with wireless or hardwired options for 24/7 threat detection.",
    image: "/service/image-49.png",
    sections: [
      {
        heading: "Detection tuned to your risks",
        paragraphs: [
          "Door and window contacts, motion detectors, glass-break sensors, and perimeter devices can be combined to match how people legitimately move through your space—reducing false alarms while keeping real threats visible.",
          "We document zones and arming modes so employees understand stay/away routines and after-hours expectations.",
        ],
      },
      {
        heading: "Wireless, hardwired, or hybrid",
        paragraphs: [
          "Retrofits often benefit from wireless zones where fishing walls is costly; new builds and remodels may prefer hardwired reliability for core perimeter points.",
          "Hybrid designs let you phase upgrades without throwing away equipment that still meets your needs.",
        ],
      },
      {
        heading: "Monitoring and mobile control",
        paragraphs: [
          "Professional monitoring routes signals to a central station for dispatch on burglary, panic, and environmental events where you subscribe to those services.",
          "Mobile apps arm/disarm with user-level permissions, push history, and optional geo reminders for small teams that forget closing routines.",
        ],
      },
    ],
  },
  {
    title: "Access Control",
    body: "Keyless entry with cloud-managed permissions and app-based control.",
    image: "/service/Access-Control.jpg",
    sections: [
      {
        heading: "Replace rekeying with policy",
        paragraphs: [
          "Cards, fobs, mobile credentials, and PIN readers reduce physical key sprawl while giving you an audit trail of who entered which door and when.",
          "Role-based access templates speed onboarding for departments that share similar door lists.",
        ],
      },
      {
        heading: "Cloud-managed permissions",
        paragraphs: [
          "Remote lockouts, holiday schedules, and visitor passes help HR and facilities teams respond quickly without driving to the site for every change.",
          "Integration-minded platforms can align with directory services where your IT standards require it.",
        ],
      },
      {
        heading: "Hardware that matches the opening",
        paragraphs: [
          "We select readers, strikes, and maglocks suited to fire-rated openings, high-traffic storefronts, and interior suite doors—then verify wiring paths with your door vendor when needed.",
          "Battery-backed egress and code-conscious installs keep life-safety expectations in view, not as an afterthought.",
        ],
      },
    ],
  },
  {
    title: "Commercial Audio",
    body: "Audio solutions designed for business environments with clean wiring and setup.",
    image: "/service/image-50.png",
    sections: [
      {
        heading: "Background and foreground audio",
        paragraphs: [
          "Paging, background music, and conference reinforcement each need different speaker density, delay alignment, and zoning—especially in open ceilings and mixed retail/office footprints.",
          "We map zones to how teams actually use the space so volume and source selection stay intuitive day to day.",
        ],
      },
      {
        heading: "Clean installs that age well",
        paragraphs: [
          "Labeling, service loops, and accessible racks make future changes less disruptive when tenants or layouts evolve.",
          "Amplifier headroom and speaker tap plans are sized for growth so you are not ripping ceiling tiles again in two years.",
        ],
      },
      {
        heading: "Integration with security workflows",
        paragraphs: [
          "Some deployments benefit from tying paging to monitored events or front-desk routines so announcements reach the right areas without manual patching.",
          "We coordinate with network teams when audio transports over IP or shares VLAN policies with other building systems.",
        ],
      },
    ],
  },
];
