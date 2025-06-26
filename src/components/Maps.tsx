import React, { useState } from 'react';

const Maps: React.FC = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    return (
        <section id='location' className="bg-gray-900 text-white">
            <div className="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.5202718533783!2d74.88430249999999!3d31.6251967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d072ed4176b%3A0x5fbb0b4b7bc6b365!2sDistribox%20Wholesale%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1750927075487!5m2!1sen!2sin" // See note below about this URL
                    width="100%"
                    height="450"
                    style={{ border: '0', padding: '1.5rem', borderRadius: '2.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={handleMapLoad}
                >
                    <a href="https://maps.app.goo.gl/e1Zr8zQtWjrfZgo88?g_st=iw">My Business Location</a>
                </iframe>
            </div>
            {!mapLoaded && <p>Loading map...</p>}
        </section>
    );
};

export default Maps;