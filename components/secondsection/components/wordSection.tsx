/* eslint-disable react/no-unescaped-entities */
const WordSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
            {/* first section */}
            <div className="flex flex-col">
                <div>
                    <p className="text-blue-500 mb-8">
                        Solutions énergétiques durables, fiables et accessibles.
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl">
                        Créer de la valeur pour nos clients à travers l'innovation continue de nos produits.
                    </h1>
                </div>
            </div>
            {/* second section */}
            <div className="flex flex-col ">
                <div className="mb-10">
                    <p>
                        Nous optimisons continuellement la performance de nos produits solaires. Avec notre vaste expérience dans l'industrie photovoltaïque, nous offrons une expertise complète en matière de gestion de la chaîne d'approvisionnement, de financement et d'approvisionnement en matériaux à chaque étape du processus.
                    </p>
                </div>
                <div>
                    <p>
                        Nos solutions incluent des matériaux photovoltaïques de haute qualité tels que le silicium polycristallin brut, disponible sous forme de morceaux, copeaux, poudre, et lingots, adaptés à vos besoins spécifiques.
                    </p>
                </div>
                {/* button */}
                <div className="flex gap-4">
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
                            Commencer
                        </button>
                    </div>
                    <div>
                        <button className="text-white py-2 px-4 rounded-lg mt-4 border border-white">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordSection;
