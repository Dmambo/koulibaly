import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'National Electrical Grid Enhancement',
    description:
      'Upgrading the national grid with modern high and low voltage systems to improve reliability and efficiency.',
    image: '/images/grid-enhancement.jpg',
  },
  {
    title: 'Solar Power Plant Installation',
    description:
      'Installation of a large-scale solar power plant to provide renewable energy to remote areas.',
    image: '/images/solar-plant.jpg',
  },
  {
    title: 'Industrial Automation for Manufacturing',
    description:
      'Implementation of automation systems in a manufacturing plant, improving production efficiency and safety.',
    image: '/images/automation.jpg',
  },
  {
    title: 'Smart Building Implementation',
    description:
      'Development of a smart building system for an office complex, including energy management and security systems.',
    image: '/images/smart-building.jpg',
  },
  {
    title: 'Temporary Power Solution for Events',
    description:
      'Provision of temporary power solutions for large events, ensuring uninterrupted power supply.',
    image: '/images/temp-power.jpg',
  },
  {
    title: 'Hydropower Station Development',
    description:
      'Construction of a hydropower station to harness water energy, providing a sustainable power source for rural communities.',
    image: '/images/hydro-power.jpg',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
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
