import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Story from "@/components/sections/Story";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Story | SIIBU",
  description: "Biography and timeline.",
};

export default function StoryPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.story} />
      <Story showHeading={false} />
    </main>
  );
}
