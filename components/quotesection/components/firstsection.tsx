/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { CircleCheck, BadgeAlert } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Title and Subtitle */}
      <div className="text-center md:text-left">
        <p className="text-base mb-4 text-blue-500">
          Optimisez vos installations électriques avec nos solutions innovantes.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Exploitez le pouvoir 
          <br />
          des énergies renouvelables
          <br />
          avec Sotrelec Afrique !
        </h1>
      </div>

      {/* Description */}
      <div className="text-center md:text-left">
        <p className="text-sm">
          En tant que représentant exclusif de Sotrelec en Afrique de l'Ouest, nous apportons
          des solutions complètes en énergie solaire, électricité et automatisation. Notre expertise 
          couvre tout le cycle de l'énergie, de la fourniture d'équipements à la mise en service 
          d'installations de haute qualité, assurant une transition énergétique durable 
          pour nos clients et partenaires locaux.
        </p>
      </div>

      {/* List of Benefits */}
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Solutions Clé en Main",
            "Innovation et Fiabilité",
            "Service Après-Vente Réactif",
            "Conformité aux Normes Internationales",
            "Expertise Technique Certifiée",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheck
                size={18}
                className="text-green-500 bg-gray-800 rounded-full p-1"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <div className="text-center md:text-left">
        <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg border border-transparent hover:bg-blue-600 transition-colors duration-300">
          Demandez votre devis gratuit
        </Button>
      </div>
      
      {/* Bottom Side */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <BadgeAlert size={44} color="white" className="text-green-500" />
        <span>
          Recevez votre devis personnalisé sous 3 à 5 jours ouvrables en remplissant 
          notre formulaire en ligne. 
          <br/> Pour toute urgence, contactez-nous directement au : 
          <span className="underline hover:no-underline hover:text-green-500"> (224) 956391</span>
        </span>
      </div>
    </div>
  );
};

export default FirstSection;
