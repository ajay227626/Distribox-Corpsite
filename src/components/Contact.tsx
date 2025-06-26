import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';
import SubmitForm from './Form';

const Contact: React.FC = () => {
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
                <a style={{outline: 'none'}} href='https://www.instagram.com/distribox.in/'>Follow Now</a>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <SubmitForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;