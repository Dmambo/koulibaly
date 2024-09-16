/* eslint-disable react/no-unescaped-entities */
const WordSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
            {/* First Section */}
            <div className="flex flex-col">
                <div>
                    <p className="text-blue-500 mb-8">
                        Solutions énergétiques durables, fiables et accessibles.
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">
                        Créer de la valeur pour nos clients grâce à l'innovation continue.
                    </h1>
                </div>
            </div>
            {/* Second Section */}
            <div className="flex flex-col">
                <div className="mb-10">
                    <p>
                        Nous optimisons constamment la performance de nos solutions énergétiques. Forts de notre expérience dans l'industrie solaire et photovoltaïque, nous fournissons une expertise complète en gestion de projets, d'approvisionnement, et de financement.
                    </p>
                </div>
                <div>
                    <p>
                        Nos services incluent des systèmes photovoltaïques de haute qualité, adaptés à vos besoins spécifiques, garantissant des solutions durables et efficaces pour répondre à vos exigences énergétiques.
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">
                            Commencer
                        </button>
                    </div>
                    <div>
                        <button className="text-white py-2 px-4 rounded-lg mt-4 border border-white hover:bg-gray-800">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordSection;
