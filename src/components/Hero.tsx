import React from 'react';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-0 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-50 -z-10" />
      
      <div 
        className="absolute inset-0 opacity-10 -z-10" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fadeIn">
              Personalized Medical Care <br />
              <span className="text-primary-600">When and Where You Need It</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Dedicated to providing exceptional healthcare through traveling physician services, 
              hospital medicine, telemedicine, and comprehensive primary care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-md">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor providing care" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;