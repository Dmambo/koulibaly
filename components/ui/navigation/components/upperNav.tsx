import { Phone, Mail, Clock5 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const UpperNav = () => {
  return (
    <div className="hidden md:flex text-sm justify-between items-center bg-gray-700 text-gray-400 py-4 px-10">
      <div className="flex text-sm gap-10 items-center bg-gray-700 text-gray-400">
        <div className="flex gap-2">
          {" "}
          <span className="flex">
            <Phone className=" text-blue-600 w-5 h-5" /></span>
          Phone: <span className=" hover:text-green-400">+224621099952</span>
        </div>
        <div className="flex gap-2">
          {" "}
          <span className="flex">
            <Mail className=" text-blue-600 w-5 h-5" />
          </span>
          Email:{" "}
          <span className=" hover:text-green-400">coulibaly@sotrelecafrique.com</span>
        </div>
        <div className="flex gap-2">
          {" "}
          <span className="flex">
            <Clock5 className=" text-blue-600 w-5 h-5" />
          </span>
          Heures: Lun-Ven : 8h-19h
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl text-black p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl text-black p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-black p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl text-black p-1 rounded-3xl bg-blue-600 hover:text-white transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className=' text-white'>Actualités & Médias</div>
      </div>
    </div>
  );
};

export default UpperNav;
