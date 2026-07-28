import type { Metadata } from "next";
import { AlarmSystemPage } from "../../components/alarm-system/AlarmSystemPage";

export const metadata: Metadata = {
  title: "Alarm System Services",
  description:
    "AVSS alarm system services for Southern California. Professional installation, monitoring, and rapid response for residential and commercial properties.",
  alternates: { canonical: "/services/alarm-system" },
};

export default function AlarmSystemRoute() {
  return <AlarmSystemPage />;
}
