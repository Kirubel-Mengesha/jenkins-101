import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor portrait" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-lg font-semibold">10+ Years Experience</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Dedicated to excellence in patient care since 2014
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Dr. Michael</h2>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg">
              With over a decade of experience in various medical settings, I am committed to providing 
              personalized, compassionate care to all my patients. I believe in treating the whole person, 
              not just symptoms, and developing ongoing relationships with my patients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 flex items-start">
                <BookOpen className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                  <p className="text-gray-600">MD from Harvard Medical School<br />Residency at Mayo Clinic</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-start">
                <Users className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Specialties</h3>
                  <p className="text-gray-600">Internal Medicine<br />Preventive Care<br />Chronic Disease Management</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 text-lg">
              My approach combines the latest evidence-based medical practices with a deep understanding
              of how lifestyle, environment, and personal circumstances affect health and well-being.
            </p>
            
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-md">
              Read Full Bio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;