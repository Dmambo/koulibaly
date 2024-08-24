"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "../../separator";
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LowerNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 md:p-8 bg-white/60 backdrop-blur-lg">
        <div className="text-lg font-bold">Koulibaly</div>

        {/* Menu toggle button for mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center gap-8 relative">
          <Link href="/" className="transition-colors hover:text-green-500">Accueil</Link>

          {/* Dropdown for Entreprise */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 transition-colors hover:text-green-500"
            >
              Entreprise <ChevronDown />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/company/about" className="flex items-center gap-5 py-2 hover:text-green-500 border-b group transition-colors duration-300">
                <ArrowRight className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                À propos
              </Link>
              <Link href="/company/works" className="flex items-center gap-5 py-2 hover:text-green-500 border-b group transition-colors duration-300">
                <ArrowRight className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Comment ça marche
              </Link>
              <Link href="/company/team" className="flex items-center gap-5 py-2 hover:text-green-500 group transition-colors duration-300">
                <ArrowRight className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Équipe
              </Link>
            </div>
          </div>

          <Link href="/services" className="transition-colors hover:text-green-500">Services</Link>
          <Link href="/project" className="transition-colors hover:text-green-500">Projet</Link>
          <Link href="/blog" className="transition-colors hover:text-green-500">Blog</Link>
          <Link href="/contact" className="transition-colors hover:text-green-500">Contact</Link>
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
                <Link href="/" className="py-2 text-lg hover:text-green-500" onClick={closeMenu}>Accueil</Link>

                <div className="relative group">
                  <button
                    className="flex items-center gap-2 py-2 text-lg hover:text-green-500"
                  >
                    Entreprise <ChevronDown />
                  </button>
                  <div className="absolute left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-md text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/company/about" className="block px-4 py-2 hover:text-green-500" onClick={closeMenu}>
                      <ArrowRight className="text-green-500 inline-block mr-2" />
                      About
                    </Link>
                    <Link href="/company/how-it-works" className="block px-4 py-2 hover:text-green-500" onClick={closeMenu}>
                      <ArrowRight className="text-green-500 inline-block mr-2" />
                      How It Works
                    </Link>
                    <Link href="/company/team" className="block px-4 py-2 hover:text-green-500" onClick={closeMenu}>
                      <ArrowRight className="text-green-500 inline-block mr-2" />
                      Team
                    </Link>
                  </div>
                </div>

                <Link href="/services" className="py-2 text-lg hover:text-green-500" onClick={closeMenu}>Services</Link>
                <Link href="/project" className="py-2 text-lg hover:text-green-500" onClick={closeMenu}>Projet</Link>
                <Link href="/blog" className="py-2 text-lg hover:text-green-500" onClick={closeMenu}>Blog</Link>
                <Link href="/contact" className="py-2 text-lg hover:text-green-500" onClick={closeMenu}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>
        <div>
          <Button className="hidden md:flex items-center gap-2 bg-green-600">Demander un devis
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
