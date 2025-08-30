// Helper component for the info icons on the right column
const InfoItem = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
  <div className="flex items-start">
    <span className="text-2xl mr-4 text-green-700">{icon}</span>
    <div>
      <h4 className="font-bold text-gray-700">{title}</h4>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

// Helper component for the "What to expect" list items
const ExpectItem = ({ text }: { text: string }) => (
    <div className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <p className="text-gray-600">{text}</p>
    </div>
);


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF8] font-serif p-4 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">We can’t wait to welcome you</h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Every great mountain journey begins with a simple conversation. Reach out, and let us help you find the perfect way to slow down, breathe deep, and discover what the hills have been waiting to show you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-2 flex items-center">
              <span className="text-3xl mr-3">💬</span> Drop us a message
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're planning a stay, curious about our trails, or simply want to share what's on your heart—we're here to listen.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="Your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone (Optional)</label>
                <input type="tel" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="+91 98765 43210" />
              </div>
               <div>
                  <label htmlFor="dates" className="block text-sm font-semibold text-gray-700 mb-1">Preferred dates (if applicable)</label>
                  <input type="text" id="dates" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="e.g., January 15-18, 2024" />
                </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Your message</label>
                <textarea id="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" placeholder="Tell us what's on your heart, what you're seeking, or any questions you have..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#005A58] text-white font-bold py-3 px-6 rounded-md hover:bg-[#004A48] transition-colors">
                  Send Your Message
                </button>
                <p className="text-xs text-center text-gray-500 mt-3">We typically respond within 24 hours, though mountain time moves a little slower than city time.</p>
              </div>
            </form>
          </div>

          {/* Right Column: Info Boxes */}
          <div className="space-y-8">
            <div className="bg-[#FFF9F0] rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <span className="text-3xl mr-3">⛰️</span> Find us in the hills
              </h3>
              <div className="space-y-4">
                <InfoItem icon="📍" title="Location">
                  <p>Nestled in the serene Vanjangi Hills<br/>Andhra Pradesh, India</p>
                  <p className="text-sm text-gray-500">(Exact coordinates shared upon booking)</p>
                </InfoItem>
                <InfoItem icon="📞" title="Call us">
                  <p>+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Best time to reach us: 8 AM - 8 PM</p>
                </InfoItem>
                <InfoItem icon="✉️" title="Email us">
                  <p>hello@hiewa.com</p>
                  <p className="text-sm text-gray-500">For all inquiries and bookings</p>
                </InfoItem>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-lg overflow-hidden shadow-sm">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.58914614131!2d82.68653281539296!3d18.25791167909398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a4c498a444a77%3A0x867b583437e530a!2sVanjangi%20Hills!5e0!3m2!1sen!2sin!4v1661864156545!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="bg-[#F0FFF4] rounded-lg p-6">
               <h3 className="text-xl font-bold text-[#2C3E50] mb-4">What to expect</h3>
               <div className="space-y-2">
                 <ExpectItem text="Warm welcome with local tea and stories" />
                 <ExpectItem text="Personalized recommendations for your stay" />
                 <ExpectItem text="Help with trail planning and timing" />
                 <ExpectItem text="Connection with our mountain community" />
                 <ExpectItem text="Respect for your need for solitude or socializing" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
