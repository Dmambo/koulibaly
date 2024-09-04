import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Renforcement du Réseau Électrique National',
    description:
      'Mise à niveau du réseau national avec des systèmes haute et basse tension modernes pour améliorer la fiabilité et l’efficacité.',
    image: '/3.jpeg',
  },
  {
    title: 'Installation d\'une Centrale Solaire',
    description:
      'Installation d\'une centrale solaire à grande échelle pour fournir de l\'énergie renouvelable aux zones isolées.',
    image: '/2.jpeg',
  },
  {
    title: 'Automatisation Industrielle pour la Fabrication',
    description:
      'Mise en œuvre de systèmes d\'automatisation dans une usine de fabrication, améliorant ainsi l\'efficacité de la production et la sécurité.',
    image: '/1.jpeg',
  },
  {
    title: 'Implémentation d\'un Bâtiment Intelligent',
    description:
      'Développement d\'un système de bâtiment intelligent pour un complexe de bureaux, incluant la gestion de l\'énergie et des systèmes de sécurité.',
    image: '/images/smart-building.jpg',
  },
  {
    title: 'Solution Temporaire d\'Énergie pour Événements',
    description:
      'Fourniture de solutions d\'énergie temporaire pour de grands événements, garantissant une alimentation électrique ininterrompue.',
    image: '/3.jpeg',
  },
  {
    title: 'Développement d\'une Station Hydroélectrique',
    description:
      'Construction d\'une station hydroélectrique pour exploiter l\'énergie de l\'eau, fournissant une source d\'énergie durable aux communautés rurales.',
    image: '/images/hydro-power.jpg',
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
