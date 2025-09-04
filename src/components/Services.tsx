import React from 'react';
import { useInView } from '../hooks/useInView';
import { Users, Palette, Mail, Calendar, Star, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, isInView] = useInView();

  const services = [
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion complète de vos réseaux sociaux avec une stratégie personnalisée pour engager votre audience et développer votre communauté.",
      features: ["Animation quotidienne", "Réponse aux commentaires", "Stratégie de contenu", "Analyse des performances"]
    },
    {
      icon: Palette,
      title: "Création de Contenu",
      description: "Conception de visuels et vidéos impactants avec la suite Adobe pour valoriser votre image de marque sur tous vos canaux.",
      features: ["Visuels personnalisés", "Montage vidéo", "Identité visuelle", "Templates réutilisables"]
    },
    {
      icon: Mail,
      title: "Newsletter & Emailing",
      description: "Création et gestion de campagnes email pour maintenir le lien avec vos clients et prospects de manière régulière.",
      features: ["Design responsive", "Segmentation", "Automatisation", "Suivi des performances"]
    },
    {
      icon: Calendar,
      title: "Planification Éditoriale",
      description: "Élaboration de calendriers éditoriaux stratégiques pour une présence cohérente et planifiée sur vos plateformes.",
      features: ["Calendrier mensuel", "Tendances saisonnières", "Optimisation timing", "Coordination multi-canaux"]
    },
    {
      icon: Star,
      title: "Gestion des Avis",
      description: "Modération et optimisation de votre e-réputation pour transformer les retours clients en véritable atout commercial.",
      features: ["Veille réputation", "Réponses professionnelles", "Stratégie d'amélioration", "Collecte d'avis positifs"]
    },
    {
      icon: TrendingUp,
      title: "Développement Digital",
      description: "Accompagnement global dans votre transition numérique pour maximiser votre visibilité et fidéliser votre clientèle.",
      features: ["Audit digital", "Stratégie personnalisée", "Formation équipes", "Suivi des résultats"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un accompagnement complet pour développer votre présence digitale et 
            faire grandir votre communauté en ligne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 transform hover:-translate-y-2
                       border border-gray-100 hover:border-primary/20
                       ${isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;