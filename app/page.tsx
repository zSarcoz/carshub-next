"use client";
import { About, Hero, CarCatalogue } from "@/components";
import { HomeProps } from "@/types";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <CarCatalogue/>
    </main>
  );
}
