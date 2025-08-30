// This is the main component for the Contact Us page.
export default function ContactPage() {
  return (
    // Main container for the page content.
    <main className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact & Location
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          Get in touch or find your way to our paradise.
        </p>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Our Details</h2>
            <p>
              <strong>Email:</strong> bookings@hiewa.in
            </p>
            <p>
              <strong>Phone / WhatsApp:</strong> +91 99999 99999
            </p>
            <p>
              <strong>Address:</strong><br />
              Hiewa Stays & Trails,<br />
              Vanjangi Hills, Paderu,<br />
              Andhra Pradesh, India
            </p>
          </div>

          {/* Right Column: Placeholder for Map */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Find Us Here</h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Google Map will be here</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
