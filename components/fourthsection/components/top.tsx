/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

const Top = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-32 px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-lg text-center md:text-left">
                <p className="text-sm text-blue-500 mb-4">
                    Leaders en solutions énergétiques renouvelables !
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Systèmes énergétiques pour les secteurs commercial, résidentiel et industriel !
                </h1>
            </div>
            <div className="max-w-lg text-center md:text-left">
                <p className="text-base md:text-lg mb-8">
                    Aujourd'hui, Sotrelec Afrique se positionne comme un fournisseur clé de solutions photovoltaïques en Afrique de l'Ouest. Avec notre expertise dans l'approvisionnement en matériaux et la gestion de la chaîne d'approvisionnement, nous garantissons un service complet et de haute qualité, adapté à chaque étape de vos projets énergétiques.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
                    Découvrir nos projets →
                </Button>
            </div>
        </div>
    );
};

export default Top;
