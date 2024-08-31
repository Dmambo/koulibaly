import { Button } from "@/components/ui/button";
import { CircleCheck, BadgeAlert } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Title and Subtitle */}
      <div className="text-center md:text-left">
        <p className="text-base  mb-4">
          Améliorer les performances de l'énergie solaire.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Découvrez l'indépendance
          <br />
          grâce à la puissance
          <br />
          des panneaux solaires !
        </h1>
      </div>

      {/* Description */}
      <div className="text-center md:text-left">
        <p className=" ">
          Nous offrons des produits, solutions et services tout au long de la chaîne
          <br />
          de valeur énergétique. Nous soutenons nos clients dans leur transition vers un 
          <br />
          avenir plus durable, quel que soit le stade de leur parcours pour 
          <br />
          énergiser la société avec des systèmes énergétiques abordables.
        </p>
      </div>

      {/* List of Benefits */}
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Efficace",
            "Rentable",
            "Fiable",
            "Écologique",
            "50% plus de rendement énergétique",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheck
                size={18}
                className="text-green-500 bg-gray-800 rounded-full p-1"
              />
              <span className=" ">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <div className="text-center md:text-left">
        <Button className="bg-white text-black px-6 py-3 rounded-lg border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
          En savoir plus
        </Button>
      </div>
      {/* Bottom Side */}
      <div className="flex items-center gap-2">
        <BadgeAlert size={44} color="white" className="text-green-500" />
        <span>
          Recevez un devis précis sous 3 à 5 jours en remplissant 
          <br/> ce formulaire.
          Ou appelez-nous : <span className="underline hover:no-underline hover:text-green-500">(224) 956391</span>
        </span>
      </div>
    </div>
  );
};

export default FirstSection;
