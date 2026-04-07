export type ServiceCard = {
  title: string;
  body: string;
  image: string;
  href?: string;
};

/** Stable fragment for /services#… deep links (footer, etc.). */
export function serviceSectionId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const serviceCards: ServiceCard[] = [
  {
    title: "Security Cameras",
    body: "Crystal-clear HD video with remote access, motion alerts, and night vision.",
    image: "/service/Security-Cameras.jpg",
  },
  {
    title: "Visual Monitoring",
    body: "Real-time oversight across properties with verification and response workflows.",
    image: "/service/Visual-Monitoring.jpg",
  },
  {
    title: "Video Monitoring",
    body: "Remote or live video feeds with smart alerts and playback features.",
    href: "/packages",
    image: "/service/Video-Monitoring.jpg",
  },
  {
    title: "Mobile Security Trailer",
    body: "Deployable surveillance units for construction sites, events, and remote areas.",
    href: "#",
    image:
      "/service/imgi_3_b586a8_40fb2b8a168344d8abdd26b4ce669570mv2-rcvlhvzs4u2uh2zuclnbwqwqsgldydpmc7pzlsxkz2.jpg",
  },
  {
    title: "Alarm Systems",
    body: "Smart alarms with wireless or hardwired options for 24/7 threat detection.",
    image: "/service/image-49.png",
  },
  {
    title: "Intrusion Protection",
    body: "Perimeter and interior detection to deter threats before damage happens.",
    href: "#",
    image: "/service/Intrusion-Protection.jpg",
  },
  {
    title: "Access Control",
    body: "Keyless entry with cloud-managed permissions and app-based control.",
    image: "/service/Access-Control.jpg",
  },
  {
    title: "Smart Home Control",
    body: "Control your system from anywhere with automation and mobile access.",
    image: "/service/image-50.png",
  },
];
