import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold cursor-pointer ${
                    scrollY > 50 ? 'text-primary' : 'text-white'
                  }`}
               onClick={() => scrollToSection('hero')}>
                <img src="/Logo_moderne_de_WEBARDOT-removebg-preview.png" alt="logo webardot" className={`w-[5rem] transition-all duration-300 
    ${scrollY > 50 ? 'invert-0' : 'invert brightness-0'}`}/>
            {/* Webardot */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Services', 'À propos', 'Réalisations', 'Contact'].map((item, index) => {
              const sectionIds = ['services', 'about', 'portfolio', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`hover:text-cyan-300 transition-colors duration-200 font-medium ${
                    scrollY > 50 ? 'text-gray-700 hover:text-primary' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-200 ${
              scrollY > 50 ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cyan-300'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-4 py-4 border-t ${
            scrollY > 50 ? 'border-gray-200' : 'border-white/20'
          }`}>
            {['Services', 'À propos', 'Réalisations', 'Contact'].map((item, index) => {
              const sectionIds = ['services', 'about', 'portfolio', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className={`block w-full text-left py-2 transition-colors duration-200 ${
                    scrollY > 50 ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cyan-300'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;