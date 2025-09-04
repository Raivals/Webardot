import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-hover"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <Zap className="text-accent mr-3" size={32} />
            <span className="text-accent font-semibold text-lg">Community Management</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Développez votre
            <span className="text-accent block">présence digitale</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            J'accompagne les petites entreprises et artisans dans leur transformation numérique. 
            De la création de contenu à la fidélisation client, boostez votre visibilité en ligne.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="group bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                       flex items-center space-x-2"
            >
              <span>Démarrer mon projet</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </button>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary 
                       px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Découvrir mes services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;