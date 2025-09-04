import React from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Users, TrendingUp, Heart } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: "Boulangerie Artisanale",
      category: "Alimentation",
      description: "Développement de la communauté Instagram et création de contenu visuel pour une boulangerie locale.",
      results: [
        { icon: Users, label: "Abonnés", value: "+250%" },
        { icon: TrendingUp, label: "Engagement", value: "+180%" },
        { icon: Heart, label: "Avis positifs", value: "4.9/5" }
      ],
      image: "https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["Instagram", "Contenu visuel", "Community management"]
    },
    {
      title: "Salon de Coiffure",
      category: "Beauté & Bien-être",
      description: "Stratégie digitale complète avec newsletter, réseaux sociaux et gestion de la e-réputation.",
      results: [
        { icon: Users, label: "Nouveaux clients", value: "+40%" },
        { icon: TrendingUp, label: "Visibilité", value: "+300%" },
        { icon: Heart, label: "Satisfaction", value: "98%" }
      ],
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["Newsletter", "Facebook", "Google Avis"]
    },
    {
      title: "Restaurant Familial",
      category: "Restauration",
      description: "Création de contenu gourmand et gestion des plateformes de livraison pour un restaurant familial.",
      results: [
        { icon: Users, label: "Portée", value: "+400%" },
        { icon: TrendingUp, label: "Commandes", value: "+65%" },
        { icon: Heart, label: "Fidélisation", value: "+85%" }
      ],
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=500",
      tags: ["TikTok", "Instagram Stories", "Livraison"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Je démarre mon activité de community management et mes premières réalisations 
            seront bientôt disponibles ici !
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mes réalisations arrivent bientôt !
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Je démarre mon activité de community management et j'ai hâte de partager 
              avec vous les premiers succès de mes futurs clients. Cette section se remplira 
              au fur et à mesure de mes collaborations.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg 
                         font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Être parmi les premiers clients
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;