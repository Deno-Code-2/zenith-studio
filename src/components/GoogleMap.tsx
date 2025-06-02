
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* Placeholder for Google Map - you would typically use Google Maps API here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e9e9bef%3A0xc889234d5c3b55d5!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635180000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Zenith Studio Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
