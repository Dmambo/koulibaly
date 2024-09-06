import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Systèmes Haute et Basse Tension',
    description:
      "Nous concevons, installons et maintenons des postes électriques haute et basse tension, intégrant des stations préfabriquées en béton ou en métal, pour des infrastructures fiables et sécurisées.",
    icon: <span>🔌</span>,
  },
  {
    title: 'Solutions d\'Énergie Renouvelable',
    description:
      "Experts en énergies renouvelables, nous proposons des solutions clés en main pour l'installation et la maintenance de systèmes éoliens et solaires, garantissant une énergie propre et durable.",
    icon: <span>🌞</span>,
  },
  {
    title: 'Solutions Temporaires d\'Énergie',
    description:
      "Nous offrons des solutions énergétiques temporaires pour répondre aux besoins des chantiers, événements et situations d'urgence avec des équipements haute et basse tension en location.",
    icon: <span>⚡</span>,
  },
  {
    title: 'Maintenance et Réparations Électriques',
    description:
      "Nos services de maintenance préventive et corrective assurent la performance optimale de vos installations électriques, tout en garantissant la sécurité et la conformité réglementaire.",
    icon: <span>🔧</span>,
  },
  {
    title: 'Audits Énergétiques et Conseil',
    description:
      "Nous réalisons des audits énergétiques approfondis et fournissons des conseils stratégiques pour optimiser l'efficacité énergétique, réduire les coûts opérationnels et améliorer la durabilité.",
    icon: <span>📊</span>,
  },
  {
    title: 'Automatisation et Systèmes de Contrôle',
    description:
      "Nous installons et maintenons des systèmes d'automatisation et de contrôle industriel avancés, améliorant la productivité et garantissant la sécurité des opérations.",
    icon: <span>🤖</span>,
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
