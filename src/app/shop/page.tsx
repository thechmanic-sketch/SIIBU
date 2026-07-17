import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Shop from "@/components/sections/Shop";
import { PAGE_HEROES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shop | SIIBU",
  description: "Official merchandise.",
};

export default function ShopPage() {
  return (
    <main>
      <PageHero {...PAGE_HEROES.shop} />
      <Shop />
    </main>
  );
}
