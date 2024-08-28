"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletCards, HousePlug, Plane, Leaf } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSection = () => {
  const cards = [
    {
      title: "Économisez votre argent",
      icon: WalletCards,
      desc: "Économisez de l'argent sur les services publics ou augmentez la valeur de votre maison en installant des panneaux solaires comme une excellente option.",
    },
    {
      title: "Votre maison est une économie",
      icon: HousePlug,
      desc: "Chaque jour, le soleil nous fournit une abondance d'énergie gratuite en plaçant des panneaux solaires sur votre toit.",
    },
    {
      title: "Consultation & Planification",
      icon: Plane,
      desc: "Nos systèmes solaires industriels distants sont conçus pour alimenter de manière fiable les sites distants critiques de nos clients.",
    },
    {
      title: "Ingénieurs Certifiés",
      icon: Leaf,
      desc: "Nos ingénieurs commerciaux ont de l'expérience et peuvent concevoir tout système solaire complet.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const CurrentIcon = cards[currentIndex].icon;

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="py-10 px-5 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <card.icon
                    className="w-12 h-12 text-blue-500 mr-4 transition-transform transform group-hover:rotate-180 duration-500"
                  />
                  <h3 className="text-sm font-semibold text-black">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                <Button className="hover:bg-blue-500 mt-4">
                  En savoir plus →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative">
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
            <div className="flex items-center mb-4">
              <CurrentIcon
                className="w-8 h-8 text-blue-500 mr-4 transition-transform transform group-hover:rotate-180 duration-500"
              />
              <h3 className="text-xl font-semibold text-black">{cards[currentIndex].title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">{cards[currentIndex].desc}</p>
            <Button className="hover:bg-blue-500 mt-4">
              En savoir plus →
            </Button>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
