import { createFileRoute } from "@tanstack/react-router";
import { Buy } from "@/components/home/buy";
import { Gallery } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Origin } from "@/components/home/origin";
import { Recipe } from "@/components/home/recipe";
import { StickyBuy } from "@/components/home/sticky-buy";
import { Studio } from "@/components/home/studio";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="paper-grain min-h-dvh pb-24 md:pb-0">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Origin />
        <Gallery />
        <Studio />
        <Recipe />
        <Buy />
      </main>
      <SiteFooter />
      <StickyBuy />
    </div>
  );
}
