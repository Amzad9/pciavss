import { Hero } from "./components/Hero";
import { MaintenanceSection } from "./components/MaintenanceSection";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Services /> */}
      <MaintenanceSection />
      <Testimonials />
    </main>
  );
}
