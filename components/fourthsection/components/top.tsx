import { Button } from "@/components/ui/button";

const Top = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-32 px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-lg text-center md:text-left">
                <p className="text-sm text-blue-500 mb-4">
                    Pionniers de l'énergie solaire et renouvelable !
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Systèmes solaires commerciaux, résidentiels et industriels !
                </h1>
            </div>
            <div className="max-w-lg text-center md:text-left">
                <p className="text-base md:text-lg mb-8">
                    Aujourd'hui, notre entreprise est l'un des principaux fournisseurs de PV en Amérique du Nord et en Europe. Nos bureaux de vente et entrepôts comprennent une vaste expérience dans l'industrie du PV, nous permettant d'offrir une expertise approfondie en matière d'approvisionnement en matériaux et de gestion de la chaîne d'approvisionnement à chaque étape du processus de production et d'installation.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
                    Projets →
                </Button>
            </div>
        </div>
    );
};

export default Top;
