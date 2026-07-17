import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MusicExperience from "@/components/sections/MusicExperience";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Music | SIIBU",
  description: "Discography and interactive album player.",
};

export default function MusicPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.music} />
      <MusicExperience showHeading={false} />
    </main>
  );
}
