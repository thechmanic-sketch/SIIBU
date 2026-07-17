import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArtGallery from "@/components/sections/ArtGallery";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Art Gallery | SIIBU",
  description: "Paintings, photography, and design.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.gallery} />
      <ArtGallery showHeading={false} />
    </main>
  );
}
