import React from 'react';
import { features } from '../data/features';
import * as LucideIcons from 'react-icons/lu';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-amber-600 font-semibold text-lg">Why Choose Distribox</div>
          <h2 className="text-4xl font-bold text-gray-900">
            Your Success is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 50 years of industry experience, we understand what it takes to help your 
            retail business thrive in the competitive fashion market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = (LucideIcons as any)[feature.icon];
            
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="text-white\" size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Manufacturers Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">3000+</div>
              <div className="text-gray-600">Happy Retailers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            {/* <div className="space-y-6"> */}
              <div className="text-6xl text-blue-300">"</div>
              <blockquote className="text-xl lg:text-2xl italic leading-relaxed">
                We've been sourcing our garments from Distribox Wholesale Pvt Ltd for over 20 years now, and the quality, pricing, and service have consistently exceeded our expectations. Their wide variety and prompt delivery have helped us serve our customers better and grow our business.
              </blockquote>
              <div className="pt-4">
                <div className="font-bold text-lg">Bhupinder Singh</div>
                <div className="text-blue-200">Owner, Soni Garments</div>
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            {/* <div className="space-y-6"> */}
              <div className="text-6xl text-blue-300">"</div>
              <blockquote className="text-xl lg:text-2xl italic leading-relaxed mt-0">
                Distribox is not just a supplier—they’re a growth partner. Their transparent pricing, flexible ordering system, and commitment to quality have made them our go-to source for wholesale garments. We’ve scaled confidently thanks to their support.
              </blockquote>
              <div className="pt-4">
                <div className="font-bold text-lg">Deepak</div>
                <div className="text-blue-200">Owner, Brother Collection</div>
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            {/* <div className="space-y-6"> */}
              <div className="text-6xl text-blue-300">"</div>
              <blockquote className="text-xl lg:text-2xl italic leading-relaxed mt-0">
                What sets Distribox apart is their customer support and understanding of the wholesale market. Their team always ensures timely updates, stock availability, and seamless communication. Truly professional and dependable!
              </blockquote>
              <div className="pt-4">
                <div className="font-bold text-lg">Jaspreet Singh</div>
                <div className="text-blue-200">Owner, Singapore Fashion House</div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;