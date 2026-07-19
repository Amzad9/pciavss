import type { Metadata } from "next";
import { MobileSecurityTrailersPage } from "../../components/mobile-security-trailers/MobileSecurityTrailersPage";

export const metadata: Metadata = {
  title: "Mobile Security Trailer Systems",
  description:
    "AVSS mobile security trailer systems for Southern California sites. Rapid deployment, solar or grid power options, cellular connectivity, and professional installation.",
  alternates: { canonical: "/services/mobile-security-trailers" },
};

export default function MobileSecurityTrailersRoute() {
  return <MobileSecurityTrailersPage />;
}
