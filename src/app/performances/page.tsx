import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Performances from "@/components/sections/Performances";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Performances | SIIBU",
  description: "Tours and events.",
};

export default function PerformancesPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.performances} />
      <Performances />
    </main>
  );
}
