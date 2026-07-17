import Hero from "@/components/sections/Hero";
import VisualUniverse from "@/components/sections/VisualUniverse";
import MusicExperience from "@/components/sections/MusicExperience";
import Story from "@/components/sections/Story";
import ArtGallery from "@/components/sections/ArtGallery";
import Performances from "@/components/sections/Performances";
import Shop from "@/components/sections/Shop";
import Contact from "@/components/sections/Contact";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <>
      <SectionNav />
      <Hero />
      <VisualUniverse />
      <MusicExperience />
      <Story />
      <ArtGallery />
      <Performances />
      <Shop />
      <Contact />
    </>
  );
}
