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
    title: "Video Monitoring",
    body: "Remote or live video feeds with smart alerts and playback features.",
    image: "/service/Video-Monitoring.jpg",
  },
  {
    title: "Mobile Security Trailers",
    body: "Deployable surveillance units for construction sites, events, and remote areas.",
    image:
      "/service/imgi_3_b586a8_40fb2b8a168344d8abdd26b4ce669570mv2-rcvlhvzs4u2uh2zuclnbwqwqsgldydpmc7pzlsxkz2.jpg",
  },
  {
    title: "Alarm System",
    body: "Smart alarms with wireless or hardwired options for 24/7 threat detection.",
    image: "/service/image-49.png",
  },
  {
    title: "Access Control",
    body: "Keyless entry with cloud-managed permissions and app-based control.",
    image: "/service/Access-Control.jpg",
  },
  {
    title: "Commercial Audio",
    body: "Audio solutions designed for business environments with clean wiring and setup.",
    image: "/service/image-50.png",
  },
];
