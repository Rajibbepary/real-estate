
import { CallToAction } from "@/sections/call-to-action";
import { Contact } from "@/sections/contact";
import { Gallery } from "@/sections/gallery";
import { HeroSection } from "@/sections/hero-sections";
import { Stats } from "@/sections/stats";
import { Testimonials } from "@/sections/testimonials";
import  WhyChooseUs  from "@/sections/why-choose-us";
import AddAddress from "../add-address/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Stats />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <AddAddress/>
    </main>
  );
}
