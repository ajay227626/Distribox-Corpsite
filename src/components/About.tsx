import React from 'react';
import { FaAward } from 'react-icons/fa';

const About: React.FC = () => {
  const highlights = [
    {
      icon: FaAward,
      title: 'Arjinder Singh',
      description: 'Managing Director'
    },
    {
      icon: FaAward,
      title: 'Agamdeep Singh',
      description: 'Managing Director'
    },
    {
      icon: FaAward,
      title: 'Sehajbir singh',
      description: 'Managing Director'
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-amber-600 font-semibold text-lg">About Distribox</div>
              <h2 className="text-4xl font-bold text-gray-900">
                Your Trusted Fashion 
                <span className="text-amber-600"> Wholesale Partner</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Distribox Wholesale Pvt. Ltd. (BABBU GARMENTS), established by S. Arjinder Singh, is a leading wholesale outlet specializing in the distribution and wholesale of high-quality readymade garments for men, women and children. With a strong presence in the garment industry, the company is dedicated to offering stylish, affordable, and durable clothing to retailers across the country.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to simplify the garment sourcing process for Retailers, Distribox Wholesale has built a reputation for providing reliable, top-notch products at competitive prices. Whether you’re looking to stock up on the latest trends or supply your retail store with everyday essentials, Distribox Wholesale has the right solution for you.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <item.icon className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1566508/pexels-photo-1566508.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Wholesale Warehouse"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Modern Warehouse Facility</h3>
                <p className="text-sm opacity-90">State-of-the-art storage and distribution center</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Quality Control"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fashion Display"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;