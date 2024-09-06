"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSection = () => {
    const items = [
        {
            image: "p16.jpeg",
            title: "Finance, chaîne d'approvisionnement",
            slogan: "Étendre le programme de financement de la chaîne d'approvisionnement solaire",
            description: "Le grand avantage des panneaux solaires est qu'ils ne nécessitent pas beaucoup d'entretien. Cependant, il est toujours important de les faire vérifier régulièrement pour garantir la sécurité."
        },
        {
            image: "1.jpeg",
            title: "Énergie, énergie verte",
            slogan: "Exploiter la puissance de l'énergie éolienne",
            description: "À mesure que les éoliennes augmentent en taille et en hauteur pour capturer plus d'énergie, et à mesure que les parcs éoliens avec de nombreuses turbines s'étendent sur de plus grandes surfaces et de plus longues distances."
        },
        {
            image: "p13.jpeg",
            title: "ÉCO, Énergie Verte",
            slogan: "Des moyens plus intelligents de gérer l'infrastructure de recharge des VE",
            description: "Si vous possédez un véhicule électrique (VE), la question récurrente que vous recevrez est : est-il facile de recharger la batterie en déplacement ? Clairement, les gens veulent simplement savoir."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-6">
                            <p className="font-bold mb-2 text-blue-500">{item.title}</p>
                            {item.slogan && <h1 className="text-2xl font-semibold mb-4">{item.slogan}</h1>}
                            {item.description && <p className="text-gray-700 text-base">{item.description}</p>}
                        </div>
                        <div>
                            <Link href="/services">
                                <Button className="border border-black bg-white text-black flex justify-center items-center m-4">
                                    Explorer Plus →
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <div className="relative">
                    <div className="overflow-hidden flex">
                        <div 
                            className="flex transition-transform ease-out duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {items.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="min-w-full bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-48 object-cover" 
                                    />
                                    <div className="p-6">
                                        <p className="font-bold mb-2 text-blue-500">{item.title}</p>
                                        {item.slogan && <h1 className="text-2xl font-semibold mb-4">{item.slogan}</h1>}
                                        {item.description && <p className="text-gray-700 text-base">{item.description}</p>}
                                    </div>
                                    <div>
                                        <Link href="/services">
                                            <Button className="border border-black bg-white text-black flex justify-center items-center m-4">
                                                Explorer Plus →
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
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
