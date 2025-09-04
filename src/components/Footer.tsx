import React from 'react';
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Webardot</h3>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire digital pour développer et fidéliser votre communauté en ligne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="space-y-2">
              {['Community Management', 'Création de contenu', 'Newsletter', 
                'Calendrier éditorial', 'Gestion des avis', 'Stratégie digitale'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>hello@webardot.fr</p>
              <p>06 12 34 56 78</p>
              <p>France - Intervention nationale</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Webardot. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Conçu avec <Heart className="text-accent mx-1" size={16} /> pour les entreprises locales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;