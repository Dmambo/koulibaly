"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "../../separator";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LowerNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown when menu is toggled
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false); // Close dropdown when menu is closed
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 md:p-8 bg-white/60 backdrop-blur-lg">
        <div className="text-lg font-bold">

          <Image
            src="/Klogo.jpg"
            alt="Logo"
            width={200}
            height={150}
            className="cursor-pointer"
            />
        </div>

        {/* Menu toggle button for mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="transition-colors hover:text-blue-500">
            Accueil
          </Link>
          <Link href="/company" className="transition-colors hover:text-blue-500">
            Entreprise
          </Link>

          <Link href="/services" className="transition-colors hover:text-blue-500">
            Services
          </Link>
          <Link href="/project" className="transition-colors hover:text-blue-500">
            Projet
          </Link>
         
          <Link href="/contact" className="transition-colors hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-16 left-0 w-full bg-white/50 backdrop-blur-lg shadow-lg transition-transform z-40"
            >
              <div className="flex flex-col items-center py-4">
                <Link
                  href="/"
                  className="py-2 text-lg hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>

                <div className="relative group">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 py-2 text-lg hover:text-blue-500"
                  >
                    Entreprise <ChevronDown />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-md text-sm text-gray-500"
                      >
                        <Link
                          href="/company/about"
                          className="block px-4 py-2 hover:text-blue-500"
                          onClick={closeMenu}
                        >
                          <ArrowRight className="text-blue-500 inline-block mr-2" />
                          À propos
                        </Link>
                        <Link
                          href="/company/how-it-works"
                          className="block px-4 py-2 hover:text-blue-500"
                          onClick={closeMenu}
                        >
                          <ArrowRight className="text-blue-500 inline-block mr-2" />
                          Comment ça marche
                        </Link>
                        {/* <Link
                          href="/company/team"
                          className="block px-4 py-2 hover:text-blue-500"
                          onClick={closeMenu}
                        >
                          <ArrowRight className="text-blue-500 inline-block mr-2" />
                          Équipe
                        </Link> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/services"
                  className="py-2 text-lg hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="/project"
                  className="py-2 text-lg hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Projet
                </Link>
          
                <Link
                  href="/contact"
                  className="py-2 text-lg hover:text-blue-500"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>
        <div>
          <Button className="hidden md:flex items-center gap-2 bg-blue-600">
            Demander un devis
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default LowerNav;
