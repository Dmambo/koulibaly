import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            À propos de Sotrelec Afrique
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            Bienvenue chez <strong>Sotrelec Afrique</strong>, le fier représentant de <strong>Sotrelec</strong> en France, étendant notre expertise et nos solutions innovantes à travers l'Afrique de l'Ouest.
          </p>
          <div className="mt-8">
            <Image
              src="/supply.jpg" // Remplacez par le chemin de votre image
              alt="Siège de Sotrelec"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">Notre Mission</h3>
            <p className="text-lg mb-4">
              Chez Sotrelec Afrique, notre mission est d'exploiter la puissance des technologies de pointe et une expertise inégalée pour fournir des solutions électriques complètes adaptées aux besoins uniques des marchés ouest-africains.
            </p>
            <p className="text-lg">
              Nous nous engageons à favoriser une croissance durable à travers une infrastructure électrique fiable et efficace, contribuant au développement de la région.
            </p>
            {/* <div className="mt-8">
              <Image
                src="/wind.jpg" // Remplacez par le chemin de votre image
                alt="Notre Mission"
                width={1200}
                height={675}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div> */}
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">Nos Services</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>
                <strong>Installations Électriques :</strong> Services d'installation de premier ordre pour des projets résidentiels et commerciaux.
              </li>
              <li>
                <strong>Services de Maintenance :</strong> Assurer la longévité et l'efficacité de vos systèmes électriques.
              </li>
              <li>
                <strong>Solutions de Sécurité et de Sûreté :</strong> Systèmes de sécurité à la pointe de la technologie, y compris le contrôle d'accès et la vidéo-surveillance.
              </li>
              <li>
                <strong>Solutions Personnalisées :</strong> Solutions adaptées pour répondre aux exigences spécifiques des projets.
              </li>
            </ul>
            {/* <div className="mt-8">
              <Image
                src="/bottom.jpg" // Remplacez par le chemin de votre image
                alt="Nos Services"
                width={1200}
                height={675}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div> */}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Notre Engagement</h3>
          <p className="text-lg mb-4">
            Avec une présence dans tous les pays d'Afrique de l'Ouest, Sotrelec Afrique s'engage à offrir l'excellence dans chaque projet que nous entreprenons. Notre équipe est équipée des connaissances et des outils pour gérer des projets complexes, de la conception initiale et de la planification jusqu'à l'installation et la maintenance.
          </p>
          <p className="text-lg mb-4">
            Nous sommes fiers de notre capacité à offrir des solutions innovantes qui répondent non seulement aux attentes de nos clients, mais les dépassent.
          </p>
          {/* <div className="mt-8">
            <Image
              src="/aboutImg.jpg" // Remplacez par le chemin de votre image
              alt="Notre Engagement"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div> */}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">Pourquoi Choisir Sotrelec Afrique ?</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li><strong>Expertise :</strong> Soutenus par l'expérience étendue de Sotrelec France, nous apportons une expertise de classe mondiale au marché ouest-africain.</li>
            <li><strong>Assurance Qualité :</strong> Nous adhérons aux plus hauts standards de qualité dans tous nos services.</li>
            <li><strong>Orientation Client :</strong> Notre approche est centrée sur le client, avec un engagement à comprendre et à satisfaire les besoins de chaque client.</li>
          </ul>
          {/* <div className="mt-8">
            <Image
              src="/about.jpg" // Remplacez par le chemin de votre image
              alt="Pourquoi Nous Choisir"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
