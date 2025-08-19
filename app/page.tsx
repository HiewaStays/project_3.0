import React from 'react';

// The main component for the landing page.
// This component is the entry point for the Next.js App Router.
export default function App() {
  return (
    // The main container for the entire page.
    // Uses Tailwind CSS for styling:
    // - min-h-screen: Ensures the container takes at least the full viewport height.
    // - bg-gray-50: Sets a light gray background color.
    // - font-sans: Sets a clean, sans-serif font family.
    // - text-gray-800: Sets a dark gray text color for readability.
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-center justify-center p-4">
      
      {/* Container for the page content, centered and with a nice shadow */}
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 text-center">
        
        {/* Main headline based on the content strategy */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Hidden Paradise in Eastern Ghats
        </h1>
        
        {/* Sub-headline/tagline */}
        <p className="text-xl md:text-2xl font-light text-blue-700 mb-8">
          Where Mountains Meet Clouds
        </p>

        {/* Section for key USPs or a brief description */}
        <div className="mb-10 text-lg md:text-xl leading-relaxed text-gray-600">
          <p>
            Experience the tranquility of Hiewa Stays & Trails, an exclusive eco-tourism destination nestled in the breathtaking Vanjangi Hills. Discover authentic tribal village life, embark on stunning sunrise treks, and reconnect with nature.
          </p>
        </div>

        {/* Call to Action (CTA) button */}
        {/* Uses Tailwind CSS for a modern, rounded button with hover effects */}
        <a 
          href="#" 
          className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Book Your Stay Now
        </a>

        {/* Simple footer or a space for future WhatsApp integration */}
        <div className="mt-8 text-sm text-gray-400">
          <p>For more information, contact us via WhatsApp.</p>
        </div>
        
      </div>
    </div>
  );
}
