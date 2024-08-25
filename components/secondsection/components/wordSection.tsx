const WordSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
            {/* first section */}
            <div className="flex flex-col">
                <div>
                    <p className=" text-green-500 mb-8">
                        Énergie durable, fiable et abordable!
                    </p>
                </div>
                <div>
                    <h1 className=" text-3xl">
                        Apporter de la valeur à nos clients grâce à l'innovation continue des produits.
                    </h1>
                </div>
            </div>
            {/* second section */}
            <div className="flex flex-col ">
                <div className=" mb-10">
                    <p className=" ">
                        Tout en améliorant le rendement et la performance des produits solaires, notre expérience dans l'industrie PV nous permet d'offrir une expertise approfondie en matière d'approvisionnement en matériaux, de financement et de chaîne d'approvisionnement à chaque étape.
                    </p>
                </div>
                <div>
                    <p className=" ">
                        Silicone polycristallin brut pour la fabrication de PV. Offert en différentes qualités et formats, y compris des morceaux, des copeaux, de la poudre et des lingots.
                    </p>
                </div>
                {/* button */}
                <div className="flex gap-4">
                    <div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4">
                            Commencer
                        </button>
                    </div>
                    <div>
                        <button className=" text-white py-2 px-4 rounded-lg mt-4 border border-white">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordSection;
