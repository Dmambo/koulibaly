/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const FooterRight = () => {
    return (
        <div>
            <div className="flex justify-between items-start space-x-8 mb-10">
                {/* Company */}
                <div className="text-white">
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Entreprise</h4>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm hover:text-blue-400 cursor-pointer">À propos de nous</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Équipe</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Comment ça marche</p>
                    </div>
                </div>

                {/* Services */}
                <div className="text-white">
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Services</h4>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Panneaux solaires</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Éoliennes</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Usines hydroélectriques</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Ressources fossiles</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Matériaux de batterie</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Contrôleurs de charge</p>
                    </div>
                </div>

                {/* Support */}
                <div className="text-white">
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Support</h4>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Nous contacter</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">FAQs</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Conditions d'utilisation</p>
                        <p className="text-sm hover:text-blue-400 cursor-pointer">Politique de confidentialité</p>
                    </div>
                </div>
                {/* Copyright */}
            </div>
            <div className="mt-28">
                <p className="text-white text-sm hover:text-blue-500">© 2024 Koulibaly, Tous droits réservés</p>
            </div>
        </div>
    );
}

export default FooterRight;
