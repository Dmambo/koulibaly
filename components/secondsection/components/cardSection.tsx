/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletCards, HousePlug, Plane, Leaf,ChevronLeft,ChevronRight } from "lucide-react";


const CardSection = () => {
  const cards = [
    {
      title: "Optimisez Vos Coûts Énergétiques",
      icon: WalletCards,
      desc: "Réduisez vos factures d'énergie et augmentez la valeur de votre propriété en adoptant nos solutions solaires innovantes.",
    },
    {
      title: "Une Énergie Inépuisable Pour Votre Maison",
      icon: HousePlug,
      desc: "Profitez de l'abondance d'énergie solaire en installant nos panneaux solaires performants sur votre toit.",
    },
    {
      title: "Consultation & Planification Personnalisées",
      icon: Plane,
      desc: "Nous concevons des systèmes solaires industriels robustes et fiables pour répondre aux besoins énergétiques spécifiques de vos sites éloignés.",
    },
    {
      title: "Expertise Certifiée en Ingénierie",
      icon: Leaf,
      desc: "Nos ingénieurs certifiés conçoivent des solutions solaires complètes adaptées à vos exigences énergétiques uniques.",
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
              <h3 className="text-xl font-semibold text-black">
                {cards[currentIndex].title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {cards[currentIndex].desc}
            </p>
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
