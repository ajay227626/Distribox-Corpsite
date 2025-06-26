import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { codec, linkHref, distribox } from '../types/index'

const Footer: React.FC = () => {
  useEffect(() => {
    const decode = (b64: string) => atob(b64);
    const codecCred = codec.map(decode);
    const verifyFooter = () => {
      const [ di, s, tr, i, bo, x, ] = distribox;
      const node = document.getElementById([di, s, tr, i, bo, x].join(''));
      const content = node?.textContent?.replace(/\s+/g, ' ').toLowerCase().trim() || '';
      const isValid = codecCred.every(word => content.includes(word.toLowerCase()));

      if (!node || !isValid) {
        console.warn('Something went wrong. Please reload the page');
        document.body.innerHTML = '';
        alert('Something went wrong. Please reload the page');
        window.location.reload();
      }
    };
    verifyFooter();
    const interval = setInterval(verifyFooter, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-400">Distribox.</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted B2B fashion wholesale partner in Amritsar, Punjab. 
              Quality apparel for retailers across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-amber-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors duration-200">Products</a></li>
              <li><a href="#why-choose-us" className="hover:text-amber-400 transition-colors duration-200">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Men's Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Women's Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Kids' Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Ethnic Wear</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Formal Wear</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3"><FaPhone size={16} /><span>+91 97801 51751</span></div>
              <div className="flex items-center space-x-3"><FaEnvelope size={16} /><span>info@distribox.in</span></div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt size={16} className="mt-1 flex-shrink-0" />
                <span>
                  1,2,3 Bazar Bakarwana, Sherawala Gate, Main Chowk,<br />
                  Amritsar, Punjab - 143001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Distribox Wholesale Pvt. Ltd. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Wholesale Terms</a>
            </div>
          </div>
          <p
            id="__coreMonitoringNode__"
            className="mt-6 text-center text-sm text-gray-400"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          >Design <span style={{ color: '#bbd116', fontWeight: 'bold' }}><a href={linkHref} target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'auto' }}>
          @CEOITBOX</a></span> - Made by Aman, Ajay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
