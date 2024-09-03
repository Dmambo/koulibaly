import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'High and Low Voltage Systems',
    description:
      'Design, installation, and maintenance of electrical substations. Integration of prefabricated stations in concrete or metal.',
    icon: <span>🔌</span>,
  },
  {
    title: 'Renewable Energy Solutions',
    description:
      'Expertise in wind and solar power systems. Installation and maintenance of wind turbines and photovoltaic panels.',
    icon: <span>🌞</span>,
  },
  {
    title: 'Temporary Power Solutions',
    description:
      'Rental of high and low voltage substations for construction sites, events, and emergencies.',
    icon: <span>⚡</span>,
  },
  {
    title: 'Electrical Maintenance and Repairs',
    description:
      'Preventive and corrective maintenance services for electrical equipment to ensure system efficiency and safety.',
    icon: <span>🔧</span>,
  },
  {
    title: 'Energy Audits and Consulting',
    description:
      'Comprehensive energy audits and expert consultation to optimize energy usage, reduce costs, and improve efficiency.',
    icon: <span>📊</span>,
  },
  {
    title: 'Automation and Control Systems',
    description:
      'Installation and maintenance of automated systems for industrial applications, improving productivity and safety.',
    icon: <span>🤖</span>,
  },
//   {
//     title: 'Smart Building Solutions',
//     description:
//       'Innovative solutions for smart buildings, including energy management, automation, and enhanced security systems.',
//     icon: <span>🏢</span>,
//   },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
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
