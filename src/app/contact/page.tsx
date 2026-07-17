import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | SIIBU",
  description: "Booking, press, and general contact.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.contact} />
      <Contact showHeading={false} />
    </main>
  );
}
