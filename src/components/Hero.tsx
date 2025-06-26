import React from 'react';
import { FaArrowRight as ArrowRight, FaStar as Star, FaTruck as Truck, FaStore as Store, FaIndustry as Industry } from 'react-icons/fa';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-400">
                <Star className="fill-current" size={20} />
                <span className="font-semibold">Premium B2B Fashion Wholesaler</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Distribox</span>
                <br />
                <span className="text-amber-400">Wholesale</span>
                <br />
                <span className="text-2xl lg:text-3xl font-medium text-blue-200">Fashion Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your trusted wholesale partner for Men’s wear, Kid’s wear and Women’s wear. Serving retailers across India.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-500 p-2 rounded-full">
                  <Industry className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold">3000+</div>
                  <div className="text-blue-200 text-sm">Manufacturers Partners</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-amber-500 p-2 rounded-full">
                  <Store className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Happy Retailers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-amber-500 p-2 rounded-full">
                  <Truck className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get Wholesale Prices
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Collection"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-2xl shadow-xl max-w-xs">
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">Premium fabrics, latest designs, competitive wholesale pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;