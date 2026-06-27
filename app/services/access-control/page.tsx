import type { Metadata } from "next";
import { AccessControlPage } from "../../components/access-control/AccessControlPage";

export const metadata: Metadata = {
  title: "Commercial Access Control Systems",
  description:
    "AVSS commercial access control systems for Southern California businesses. Keyless entry, audit trails, mobile access, professional installation, and ongoing support in Orange County.",
  alternates: { canonical: "/services/access-control" },
};

export default function SecurityCamerasRoute() {
  return <AccessControlPage />;
}
