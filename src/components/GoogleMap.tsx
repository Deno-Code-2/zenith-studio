
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* Bangalore, India Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973339841!2d77.35073556640625!3d12.953945614117455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1635180000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Zenith Studio Location - Bangalore, India"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
