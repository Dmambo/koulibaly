import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterLeft = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Section de Contact */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl mb-3">+224613956391</h1>
        <p className="flex justify-center md:justify-start text-blue-500">
          Email: ibkhalidworld@gmail.com
        </p>
      </div>

      {/* Section de Localisation */}
      <div className="text-center md:text-left">
        <p>Kaloum, Conakry, Guinée</p>
        {/* Carte */}
        <div className="mt-6 md:mt-12 flex justify-center md:justify-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.442980476194!2d-13.70625868461736!3d9.516146293782598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOeKAnTEwJzUwLjciTiAxM8KwMTknMjMuMiJF!5e0!3m2!1sen!2sgn!4v1633671693839!5m2!1sen!2sgn"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Section des Réseaux Sociaux */}
      <div className="mt-8 md:mt-16 text-center md:text-left">
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-3xl text-gray-900 p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-3xl text-gray-900 p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl text-gray-900 p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-3xl text-gray-900 p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
