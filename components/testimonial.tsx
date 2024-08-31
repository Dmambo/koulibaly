"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimony() {
  return (
    <div className="h-[30rem]  flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className=" text-blue-500 text-sm py-7">
            <p>Écoutez ce que les gens disent de nous</p>
        </div>
        <div>
            <h1 className=" text-xl md:text-3xl text-white mb-5">
                Écoutons nos clients <br/>et partenaires satisfaits.
            </h1>
        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      name: "Marie L.",
      quote: "L'installation des panneaux solaires a été fluide et efficace. Nos factures d'électricité ont considérablement diminué, et nous sommes ravis du service!",
      title: "Propriétaire",
    },
    {
      name: "Ahmed T.",
      quote: "L'installation des éoliennes de notre entreprise a été réalisée avec un grand professionnalisme. L'équipe a fourni un excellent support tout au long du processus.",
      title: "Chef d'entreprise",
    },
    {
      name: "Sophie K.",
      quote: "L'équipe de maintenance de la centrale hydroélectrique était incroyablement compétente. Ils ont veillé à ce que tout fonctionne parfaitement. Hautement recommandé!",
      title: "Responsable d'usine",
    },
    {
      name: "Jean M.",
      quote: "Service incroyable! L'expertise de l'équipe en énergie renouvelable est inégalée. Nous constatons des économies importantes et un impact environnemental positif.",
      title: "PDG, GreenTech Corp",
    },
    {
      name: "Laura R.",
      quote: "Le processus de consultation a été fluide. Ils ont fourni des conseils clairs et concrets qui nous ont aidés à prendre les meilleures décisions pour notre projet.",
      title: "Coordinatrice de projet",
    },
  ];
