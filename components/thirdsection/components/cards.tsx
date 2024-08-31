"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Wind, Droplet, CircleCheckBig, ChevronLeft, ChevronRight } from "lucide-react";

const Cards = () => {
    const items = [
        {
            icon: Sun,
            title: "Services de panneaux solaires",
            desc: "L'avantage des panneaux solaires est qu'ils peuvent être installés sur n'importe quel toit. Nous proposons une large gamme de panneaux solaires à la vente et à l'installation.",
            list: [
                "Nettoyage de l'onduleur",
                "Effectuer des tests d'ombrage",
                "Garantie de réparation de 90 jours"
            ],
        },
        {
            icon: Wind,
            title: "Services d'éoliennes",
            desc: "Les éoliennes sont un excellent moyen de produire de l'électricité. Nous proposons une large gamme d'éoliennes à la vente et à l'installation.",
            list: [
                "La proactivité est meilleure",
                "Réduction des coûts pour vous",
                "Garantie de maintenance"
            ],
        },
        {
            icon: Droplet,
            title: "Services de centrales hydroélectriques",
            desc: "Les systèmes hydroélectriques sont des actifs intensifs en capital qui peuvent générer des revenus importants pendant des décennies, à condition qu'ils soient exploités et entretenus selon des normes élevées.",
            list: [
                "Optimisation des actifs",
                "Exploitation & maintenance",
                "Numérisation & automatisation"
            ],
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const CurrentIcon = items[currentIndex].icon; // Extract the icon component

    return (
        <div className="relative">
            {/* Carousel Wrapper */}
            <div className="hidden md:block">
                {/* Grid Layout for larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl group"
                        >
                            <div className="flex items-center mb-4">
                                <item.icon 
                                    className="w-8 h-8 text-blue-500 mr-4 transition-transform transform group-hover:rotate-180 duration-500" 
                                />
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                            <ul className="list-none space-y-2">
                                {item.list.map((listItem, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <CircleCheckBig className="bg-green-500 w-4 h-4 rounded-3xl mr-2 text-gray-500"/>
                                        <span>{listItem}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex items-center justify-center mt-10 '>
                                <Button className='hover:bg-green-500'>
                                    En savoir plus →
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel for smaller screens */}
            <div className="md:hidden">
                <div className="relative">
                    <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl group">
                        <div className="flex items-center mb-4">
                            <CurrentIcon 
                                className="w-8 h-8 text-blue-500 mr-4 transition-transform transform group-hover:rotate-180 duration-500" 
                            />
                            <h3 className="text-xl font-semibold">{items[currentIndex].title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{items[currentIndex].desc}</p>
                        <ul className="list-none space-y-2">
                            {items[currentIndex].list.map((listItem, idx) => (
                                <li key={idx} className="flex items-center">
                                    <CircleCheckBig className="bg-green-500 w-4 h-4 rounded-3xl mr-2 text-gray-500"/>
                                    <span>{listItem}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='flex items-center justify-center mt-10'>
                            <Button className='hover:bg-green-500'>
                                En savoir plus →
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                        <button 
                            onClick={handlePrev} 
                            className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700"/>
                        </button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                        <button 
                            onClick={handleNext} 
                            className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
