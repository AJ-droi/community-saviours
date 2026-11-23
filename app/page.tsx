import About from "@/components/About";
import Callout from "@/components/Callout";
import Contact from "@/components/Contact";
import Delivery from "@/components/Delivery";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Model from "@/components/Model";
import Programmes from "@/components/Programmes";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import VisionMission from "@/components/VisionMission";
import { testimonials } from "@/content/site";
import { publicImage } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programmes />
      <VisionMission />
      <Model />
      <Support />
      <Impact />
      <Testimonials photos={testimonials.tabs.map((t) => publicImage(t.image))} />
      <Delivery />
      <Values />
      <Governance />
      <Callout />
      <Contact />
    </>
  );
}
