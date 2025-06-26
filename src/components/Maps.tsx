import React, { useState } from 'react';
import { FaExternalLinkAlt as ExternalLink } from 'react-icons/fa';

const Maps: React.FC = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    // THIS IS THE LINE YOU NEED TO UPDATE:
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3210481917818!2d74.88430249999999!3d31.6251967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d072ed4176b%3A0x5fbb0b4b7bc6b365!2sDistribox%20Wholesale%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1750928652053!5m2!1sen!2sin";
    return (
        <section id='location' className="bg-gray-900 text-white">
            <div className="container mx-auto px-4" style={{ position: 'relative' }}>
                {/* <div className="text-center mt-4">
                    <a
                        href={googleMapsEmbedUrl.replace('/embed', '')} // This replacement might not work for all Google Maps URLs. Test it.
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                        <ExternalLink size={20} style={{position: 'absolute', top: '75px', right: '35px', border: '3px solid #6a6a6a', borderRradius: '0.5rem', padding: '0.5rem', backgroundColor: '#ffffffa1'}} />
                    </a>
                </div> */}
                <h2 className="text-4xl font-bold text-center mb-8">Our Location</h2>
                <div className="relative w-full" style={{ paddingBottom: '40%' }}>
                    {!mapLoaded && (
                        <div
                            className="absolute inset-0 bg-gray-700 rounded-2xl animate-pulse flex items-center justify-center"
                            style={{ height: '500px', width: '100%' }}
                        >
                            <p className="text-gray-400 text-lg">Loading map...</p>
                        </div>
                    )}
                    <iframe
                        src={googleMapsEmbedUrl}
                        width="100%"
                        height="500px"
                        style={{
                            border: '0',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: mapLoaded ? 'block' : 'none',
                        }}
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                        onLoad={handleMapLoad}
                        title="Our Business Location on Google Maps"
                    >
                        {/* Fallback content removed as it's rarely needed */}
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Maps;