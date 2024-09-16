/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

const Top = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-32 px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-lg text-center md:text-left">
                <p className="text-sm text-green-600 mb-4">
                    Pionniers des solutions énergétiques durables en Afrique de l'Ouest !
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Solutions énergétiques pour les secteurs public, résidentiel et industriel.
                </h1>
            </div>
            <div className="max-w-lg text-center md:text-left">
                <p className="text-base md:text-lg mb-8">
                    Depuis 2014, Setrelec Afrique se distingue comme un partenaire stratégique dans l'installation, la gestion et la maintenance des infrastructures électriques en Guinée et en Afrique de l'Ouest. Grâce à notre expertise en énergies renouvelables, nous offrons des solutions photovoltaïques et des services adaptés aux besoins de nos clients pour des projets durables et performants.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4">
                    Découvrez nos réalisations →
                </Button>
            </div>
        </div>
    );
};

export default Top;
