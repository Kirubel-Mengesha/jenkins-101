import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-primary-100 p-3 rounded-full mr-4">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Ready to schedule an appointment or have questions? Reach out to us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
            
            <ContactInfo 
              icon={Phone} 
              title="Phone" 
              content="(555) 123-4567" 
            />
            
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              content="dr.morgan@healthcareservices.com" 
            />
            
            <ContactInfo 
              icon={MapPin} 
              title="Office Location" 
              content="123 Medical Plaza, Suite 400, San Francisco, CA 94123" 
            />
            
            <ContactInfo 
              icon={Clock} 
              title="Working Hours" 
              content="Monday-Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM" 
            />
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-primary-100 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary-100 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary-100 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C1.55 3.384.01 5.076.01 9.575v4.85c0 4.5 1.54 6.19 4.375 6.39 3.6.245 11.626.246 15.23 0 2.835-.2 4.375-1.89 4.375-6.39v-4.85c0-4.5-1.54-6.19-4.375-6.39zM9.75 15.464V8.536l6.625 3.464L9.75 15.464z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule an Appointment</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="traveling">Traveling Physician</option>
                  <option value="hospital">Hospital Medicine</option>
                  <option value="telemedicine">Telemedicine</option>
                  <option value="primary">Primary Care</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Please provide any additional details about your appointment request..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-md"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;