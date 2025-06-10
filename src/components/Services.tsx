import React from 'react';
import { Briefcase, Building2, Monitor, Heart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Traveling Physician',
    description: 'Bringing medical care directly to you. Home visits for those with mobility issues, busy professionals, and patients preferring the comfort of their home.',
    icon: Briefcase,
  },
  {
    id: 2,
    title: 'Hospital Medicine',
    description: 'Expert inpatient care when you need it most. Specialized treatment, monitoring, and coordination with other specialists during hospital stays.',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Telemedicine',
    description: 'Convenient virtual consultations from anywhere. Ideal for follow-ups, medication management, and addressing non-emergency health concerns.',
    icon: Monitor,
  },
  {
    id: 4,
    title: 'Primary Care',
    description: 'Comprehensive preventive care and wellness services. Regular check-ups, health screenings, chronic disease management, and personalized health plans.',
    icon: Heart,
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-4">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive healthcare tailored to your unique needs and circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;