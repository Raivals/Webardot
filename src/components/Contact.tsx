import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', business: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "romain54.bernardot@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "France",
      description: "Intervention nationale"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary/5">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div 
      ref={ref}
      className={`text-center mb-16 transition-all duration-1000 ${
        isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Parlons de votre projet
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Prêt à développer votre présence digitale ? Contactez-moi pour un échange 
        gratuit sur vos besoins et objectifs.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Contact Info */}
      <div className={`space-y-8 transition-all duration-1000 ${
        isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
      }`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Restons en contact
        </h3>
        
        {contactInfo.map((info, index) => (
          <div
            key={info.title}
            className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg 
                     hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                     ${isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
              <info.icon className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h4>
              <p className="text-primary font-semibold mb-1">{info.content}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className={`transition-all duration-1000 delay-300 ${
        isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
      }`}>
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Demande de devis
          </h3>

          <form 
            action="https://formspree.io/f/myzdbjol" 
            method="POST"
            className="space-y-6"
          >
            {/* Nom + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            {/* Entreprise */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entreprise / Activité
              </label>
              <input
                type="text"
                name="business"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Nom de votre entreprise"
              />
            </div>

            {/* Projet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Votre projet *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                         focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Décrivez votre projet et vos besoins en communication digitale..."
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg 
                       font-semibold transition-all duration-300 transform hover:scale-105
                       flex items-center justify-center space-x-2 group"
            >
              <Send className="transition-transform group-hover:translate-x-1" size={20} />
              <span>Envoyer ma demande</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;