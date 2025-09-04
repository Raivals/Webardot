import React from 'react';
import { useInView } from '../hooks/useInView';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      name: "Marie Dubois",
      business: "Boulangerie Le Petit Fournil",
      content: "Grâce à l'accompagnement de Webardot, notre présence sur Instagram a explosé ! Nos ventes ont augmenté de 40% en 6 mois.",
      rating: 5,
      image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Thomas Martin",
      business: "Garage Martin & Fils",
      content: "Excellent travail sur notre stratégie digitale. Les avis clients sont maintenant notre meilleur atout commercial !",
      rating: 5,
      image: "https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sophie Leroy",
      business: "Institut Beauté Zen",
      content: "La newsletter créée par Webardot nous a permis de fidéliser nos clientes. Un vrai plus pour notre activité !",
      rating: 5,
      image: "https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de mes clients est ma priorité. Découvrez leurs retours 
            sur notre collaboration et les résultats obtenus ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-500 transform hover:-translate-y-1
                       ${isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 text-primary/20" size={32} />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-current" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à rejoindre mes clients satisfaits ?
            </h3>
            <p className="text-blue-100 mb-6">
              Parlons de votre projet et voyons comment développer ensemble votre présence digitale.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;