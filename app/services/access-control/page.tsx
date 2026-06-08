import type { Metadata } from "next";
import { AccessControlPage } from "../../components/access-control/AccessControlPage";

export const metadata: Metadata = {
  title: "Commercial Security Camera Systems",
  description:
    "AVSS commercial camera systems for Southern California businesses. 4K video, remote access, professional installation, and ongoing support in Orange County.",
  alternates: { canonical: "/services/security-cameras" },
};

export default function SecurityCamerasRoute() {
  return <AccessControlPage />;
}
