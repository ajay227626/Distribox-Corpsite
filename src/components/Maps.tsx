import React, { useState } from 'react';

const Maps: React.FC = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    // THIS IS THE LINE YOU NEED TO UPDATE:
    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3210481917818!2d74.88430249999999!3d31.6251967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d072ed4176b%3A0x5fbb0b4b7bc6b365!2sDistribox%20Wholesale%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1750928652053!5m2!1sen!2sin";
    const fixedMapHeight = '500px'; // Define your fixed height here
    return (
        <section id='location' className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Our Location</h2>
                {/* Container for the map/skeleton with fixed height */}
                <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{ height: fixedMapHeight }} // Set the fixed height here
                >
                    {!mapLoaded && (
                        <div
                            className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center"
                        >
                            <p className="text-gray-400 text-lg">Loading map...</p>
                        </div>
                    )}
                    <iframe
                        src={googleMapsEmbedUrl}
                        width="100%"
                        height="100%" // Occupy 100% of the parent's fixed height
                        style={{
                            border: '0',
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
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Maps;