import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with Google Sheets or your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-amber-400 font-semibold text-lg">Get In Touch</div>
          <h2 className="text-4xl font-bold">
            Ready to Start Your 
            <span className="text-amber-400"> Wholesale Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us today for wholesale pricing, catalog requests, or any questions about our services. 
            Our team is here to help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                  <FaPhone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <p className="text-gray-300">+91 97801 51751</p>
                  <p className="text-gray-300">+91 98776 46007</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                  <FaEnvelope className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <p className="text-gray-300">info@distribox.in</p>
                  <p className="text-gray-300">orders@distribox.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Address</h4>
                  <p className="text-gray-300">
                    1,2,3 Bazar Bakarwana, Sherawala Gate, Main Chowk,<br />
                    Amritsar, Punjab - 143001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                  <FaClock className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                  <p className="text-gray-300">Tuesday - Sunday: 11:00 AM - 9:00 PM</p>
                  <p className="text-gray-300">Monday: Closed</p>
                </div>
              </div>
            </div>

            {/* Instagram Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaInstagram className="text-white" size={32} />
                <div>
                  <h4 className="font-bold text-lg">Follow Us on Instagram</h4>
                  <p className="text-purple-100">@distribox.in</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Stay updated with our latest collections, behind-the-scenes content, and fashion trends.
              </p>
              <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                Follow Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements, quantity needed, or any specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;