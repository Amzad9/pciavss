import type { Metadata } from "next";
import { StructuredWiringPage } from "../../components/structured-wiring-and-prewire/StructuredWiringPage";

export const metadata: Metadata = {
  title: "Structured Wiring & Prewire Services | AVSS",
  description:
    "Professional commercial and residential low-voltage structured wiring, prewire, CAT6 cabling, patch panel installations, and data drops in Southern California.",
  alternates: { canonical: "/services/structured-wiring-and-prewire" },
};

export default function StructuredWiringRoute() {
  return <StructuredWiringPage />;
}
