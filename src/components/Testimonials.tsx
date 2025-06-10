import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient for 3 years',
    content: 'Dr. Morgan\'s traveling physician service has been a lifesaver for my elderly mother. The personalized care and attention she receives at home has improved her quality of life tremendously.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Telemedicine patient',
    content: 'The telemedicine option has made managing my chronic condition so much easier. Dr. Morgan is just as thorough and attentive virtually as in person. I highly recommend this service.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Primary care patient',
    content: 'What sets Dr. Morgan apart is the time taken to really listen. I\'ve never felt rushed during appointments, and my health concerns are always addressed thoroughly with compassion.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <Quote className="absolute top-4 right-4 h-10 w-10 text-primary-100" />
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What My Patients Say</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Read about the experiences of patients who have benefited from our medical services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm">
            View More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;