export type BlogPost = {
  slug: string;
  title: string;
  dateLabel: string;
  readTimeLabel?: string;
  category: string;
  excerpt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

// Content is adapted from the client’s existing site (pciavss.com) and rewritten for this UI.
export const blogPosts: BlogPost[] = [
  {
    slug: "mobile-surveillance-trailers",
    title: "Top 6 Mobile Surveillance Trailers for Enhanced Protection",
    dateLabel: "Jun 1",
    readTimeLabel: "16 min read",
    category: "Mobile Surveillance Trailers",
    excerpt:
      "A practical overview of mobile security trailer options and what to look for when protecting sites, events, and remote locations.",
    sections: [
      {
        heading: "Why Mobile Security Trailers",
        paragraphs: [
          "Mobile surveillance trailers are built for locations that change frequently or where permanent infrastructure is not available. They can be deployed quickly and repositioned as your coverage needs shift.",
          "They’re commonly used on construction sites, events, remote job locations, and large parking areas where visibility, deterrence, and real-time response matter.",
        ],
      },
      {
        heading: "What To Compare",
        paragraphs: [
          "Prioritize camera coverage (PTZ, thermal, low-light), power options (shore power vs. solar), connectivity (LTE/5G), and monitoring workflow (record-only vs. live intervention).",
          "Also review setup time, lighting/sirens, storage, and whether the provider offers a site survey and tailored configuration for your risk areas.",
        ],
      },
      {
        heading: "PCI AVSS Mobile Solutions",
        paragraphs: [
          "PCI AVSS offers integrated security options that combine cameras, alarms, access control, and mobile trailer deployments for temporary or remote coverage needs.",
          "For projects without reliable power, portable solar camera trailer configurations can help maintain coverage in off-grid locations.",
        ],
      },
    ],
  },
  {
    slug: "virtual-monitoring",
    title: "Virtual Remote Video Monitoring (How It Works + Pricing)",
    dateLabel: "Service",
    category: "Video Monitoring",
    excerpt:
      "A clear explanation of live remote video monitoring and common response actions, plus monthly pricing by camera count.",
    sections: [
      {
        heading: "How It Works",
        paragraphs: [
          "When a person is detected on an enrolled camera, an event is created. During an event, monitoring agents can review live video and follow your response preferences.",
          "Typical actions include sending an event link, using two‑way talk, and requesting emergency dispatch when appropriate.",
        ],
      },
      {
        heading: "What’s Included",
        paragraphs: [
          "Remote video monitoring can deliver live and alarm video quickly after activation and support automated or operator-controlled actions such as audio, lighting, gates, doors, and sirens.",
          "Encrypted video transmission and a site map view help improve operator awareness during events.",
        ],
      },
    ],
  },
  {
    slug: "ajax-security-system",
    title: "AJAX Wireless Alarm & Perimeter Protection (Overview)",
    dateLabel: "Service",
    category: "Intrusion Protection",
    excerpt:
      "A modern intrusion protection approach with wireless sensors, automation, and fast alerts—useful for perimeter and interior protection.",
    sections: [
      {
        heading: "What It Solves",
        paragraphs: [
          "Intrusion protection helps detect and deter unauthorized access before incidents escalate. Wireless sensors and perimeter devices expand protection beyond basic door contacts.",
          "Use cases include warehouses, retail locations, construction sites, and businesses with vulnerable exterior entry points.",
        ],
      },
      {
        heading: "How It Fits Your Security Stack",
        paragraphs: [
          "Alarm + perimeter protection works best when paired with cameras and monitoring so detections can be verified and acted on quickly.",
          "A site survey helps select the right coverage points and alert rules for your property layout and operating hours.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

