import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Électrification Rurale',
    description:
      'Installation de systèmes solaires autonomes dans des villages éloignés, apportant de l\'énergie renouvelable pour l\'éclairage et les services essentiels.',
    image: '/p1.jpeg',
  },
  {
    title: 'Modernisation des Infrastructures Électriques Urbaines',
    description:
      'Rénovation des infrastructures électriques urbaines vieillissantes pour améliorer la distribution de l\'électricité dans les grandes villes.',
    image: '/p2.jpeg',
  },
  {
    title: 'Installation de Bornes de Recharge pour Véhicules Électriques',
    description:
      'Déploiement de bornes de recharge rapide pour véhicules électriques dans les stations-service et les espaces publics.',
    image: '/p3.jpeg',
  },
  {
    title: 'Centrale Éolienne Offshore',
    description:
      'Construction et maintenance d\'une centrale éolienne en mer pour générer de l\'électricité propre à grande échelle.',
    image: '/p4.jpeg',
  },
  {
    title: 'Micro-Réseaux pour Communautés Isolées',
    description:
      'Mise en place de micro-réseaux autonomes dans les régions isolées pour une alimentation en énergie stable et durable.',
    image: '/p5.jpeg',
  },
  {
    title: 'Optimisation des Systèmes d\'Éclairage Public',
    description:
      'Remplacement des systèmes d\'éclairage public par des technologies LED pour améliorer l\'efficacité énergétique et réduire les coûts.',
    image: '/p6.jpeg',
  },
  {
    title: 'Installation de Batteries de Stockage Énergétique',
    description:
      'Mise en place de solutions de stockage d\'énergie pour équilibrer l\'offre et la demande dans les réseaux électriques locaux.',
    image: '/p7.jpeg',
  },
  {
    title: 'Centrale Biomasse pour Énergie Durable',
    description:
      'Construction d\'une centrale biomasse pour convertir les déchets organiques en énergie durable pour les communautés locales.',
    image: '/p8.jpeg',
  },
  {
    title: 'Automatisation des Bâtiments Industriels',
    description:
      'Installation de systèmes d\'automatisation pour améliorer l\'efficacité énergétique et la gestion des opérations dans les bâtiments industriels.',
    image: '/p9.jpeg',
  },
  {
    title: 'Déploiement de Smart Grids',
    description:
      'Développement de smart grids pour une gestion plus efficace et flexible de la distribution d\'énergie au niveau national.',
    image: '/p10.jpeg',
  },
  {
    title: 'Système de Gestion d\'Énergie pour Centres de Données',
    description:
      'Installation de solutions de gestion énergétique pour optimiser la consommation d\'électricité des centres de données.',
    image: '/p11.jpeg',
  },
  {
    title: 'Rénovation de Réseaux Électriques Hospitaliers',
    description:
      'Modernisation des systèmes électriques dans les hôpitaux pour garantir une alimentation fiable et la sécurité des équipements critiques.',
    image: '/p12.jpeg',
  },
  {
    title: 'Centrale Solaire Flottante',
    description:
      'Installation de panneaux solaires flottants sur des plans d\'eau pour maximiser l\'utilisation de l\'espace disponible tout en produisant de l\'énergie propre.',
    image: '/p13.jpeg',
  },
  {
    title: 'Énergie Géothermique pour Chauffage Urbain',
    description:
      'Utilisation de l\'énergie géothermique pour chauffer les bâtiments dans les zones urbaines, réduisant ainsi la dépendance aux combustibles fossiles.',
    image: '/p14.jpeg',
  },
  {
    title: 'Installation de Réseaux Électriques pour Mines',
    description:
      'Développement de réseaux électriques robustes pour alimenter les installations minières, même dans les régions éloignées.',
    image: '/p15.jpeg',
  },
  {
    title: 'Renforcement des Systèmes de Sécurité Énergétique',
    description:
      'Mise en place de solutions avancées pour protéger les infrastructures énergétiques critiques contre les cyberattaques et les interruptions de service.',
    image: '/p16.jpeg',
  },
  {
    title: 'Déploiement de Technologie Smart Home',
    description:
      'Installation de systèmes de gestion intelligente pour les foyers, permettant de contrôler la consommation d\'énergie à distance.',
    image: '/p17.jpeg',
  },
  {
    title: 'Électrification des Installations Agricoles',
    description:
      'Fourniture de systèmes électriques et solaires pour améliorer l\'efficacité des opérations agricoles et réduire les coûts énergétiques.',
    image: '/p18.jpeg',
  },
  {
    title: 'Alimentation en Énergie pour Centres Logistiques',
    description:
      'Installation de solutions énergétiques fiables pour assurer une alimentation continue dans les centres logistiques et les entrepôts.',
    image: '/p19.jpeg',
  },
  {
    title: 'Électrification des Ports Maritimes',
    description:
      'Modernisation des réseaux électriques des ports maritimes pour faciliter l\'électrification des navires à quai et réduire les émissions.',
    image: '/p20.jpeg',
  },
  {
    title: 'National Electrical Grid Enhancement',
    description:
      'Amélioration du réseau électrique national avec des systèmes haute et basse tension modernes pour améliorer la fiabilité et l\'efficacité.',
    image: '/p21.jpeg',
  },
  {
    title: 'Installation d\'une Centrale Solaire',
    description:
      'Installation d\'une centrale solaire à grande échelle pour fournir de l\'énergie renouvelable aux zones éloignées.',
    image: '/p22.jpeg',
  },
  {
    title: 'Automatisation Industrielle pour la Production',
    description:
      'Mise en œuvre de systèmes d\'automatisation dans une usine de fabrication, améliorant l\'efficacité de la production et la sécurité.',
    image: '/p23.jpeg',
  },
  {
    title: 'Mise en œuvre d\'un Bâtiment Intelligent',
    description:
      'Développement d\'un système de bâtiment intelligent pour un complexe de bureaux, incluant la gestion de l\'énergie et les systèmes de sécurité.',
    image: '/p24.jpeg',
  },
  {
    title: 'Solution d\'Énergie Temporaire pour Événements',
    description:
      'Fourniture de solutions d\'énergie temporaire pour des événements de grande envergure, garantissant une alimentation électrique ininterrompue.',
    image: '/p25.jpeg',
  },
  {
    title: 'Développement d\'une Station Hydroélectrique',
    description:
      'Construction d\'une station hydroélectrique pour exploiter l\'énergie hydraulique, fournissant une source d\'énergie durable aux communautés rurales.',
    image: '/p26.jpeg',
  },
];


const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Projets</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
