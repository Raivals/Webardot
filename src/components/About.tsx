import React from 'react';
import { useInView } from '../hooks/useInView';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, isInView] = useInView();

  const values = [
    {
      icon: Target,
      title: "Stratégie Ciblée",
      description: "Chaque action est pensée pour atteindre vos objectifs spécifiques"
    },
    {
      icon: Heart,
      title: "Passion du Digital",
      description: "Une expertise née d'une véritable passion pour l'univers numérique"
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Veille constante des dernières tendances et outils digitaux"
    }
   
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-off-white to-primary/5">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  À Propos de
                  <span className="text-primary block">Webardot</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Spécialisé dans l'accompagnement digital des petites entreprises et artisans, 
                  je mets mon expertise au service de votre croissance en ligne.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mon objectif : faire progresser votre communauté digitale pour transformer 
                  votre présence en ligne en véritable levier de croissance et de fidélisation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-primary/10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ma Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Démocratiser l'accès au digital pour les TPE/PME en proposant des solutions 
                  sur mesure, accessibles et efficaces. Chaque entreprise mérite une présence 
                  digitale de qualité, quel que soit son secteur d'activité.
                </p>
              </div>
            </div>

            {/* Right side - Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg 
                           hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                           ${isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;