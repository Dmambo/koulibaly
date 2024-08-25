import { Button } from '@/components/ui/button';
import { WalletCards, HousePlug, Plane, Leaf } from 'lucide-react';

const CardSection = () => {
    const cards = [
        {
            title: 'Économisez votre argent',
            icon: WalletCards,
            desc: "Économisez de l'argent sur les services publics ou augmentez la valeur de votre maison en installant des panneaux solaires comme une excellente option.",
        },
        {
            title: 'Votre maison est une économie',
            icon: HousePlug,
            desc: "Chaque jour, le soleil nous fournit une abondance d'énergie gratuite en plaçant des panneaux solaires sur votre toit.",
        },
        {
            title: 'Consultation & Planification',
            icon: Plane,
            desc: "Nos systèmes solaires industriels distants sont conçus pour alimenter de manière fiable les sites distants critiques de nos clients.",
        },
        {
            title: 'Ingénieurs Certifiés',
            icon: Leaf,
            desc: "Nos ingénieurs commerciaux ont de l'expérience et peuvent concevoir tout système solaire complet.",
        },
    ];

    return (
        <div className="py-10 px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center justify-between p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
                    >
                        <div className="flex flex-col items-center text-center">
                            {<card.icon className="w-12 h-12 text-green-500 mb-4" />}
                            <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
                            <p className="text-sm text-gray-600">{card.desc}</p>
                        </div>
                        <Button className="mt-4 relative group-hover:bg-green-500 group-hover:text-white">
                            →
                            <span className="hidden group-hover:inline-block ml-2">Explorer plus</span>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
