// This is the main component for the About Us page.
export default function AboutPage() {
  return (
    // Main container for the page content.
    <main className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Hiewa
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          Our Story of Connecting with Nature
        </p>

        {/* Main Content Section */}
        <div className="text-lg text-gray-700 space-y-6">
          <p>
            Nestled in the heart of the Eastern Ghats, Hiewa Stays & Trails was born from a passion for the untouched beauty of Vanjangi Hills. We wanted to create a space where travelers could escape the noise of the city and find a genuine connection with nature and local culture.
          </p>
          <p>
            Our mission is to provide an authentic eco-tourism experience that respects the environment and supports the local tribal communities. We believe in sustainable practices, from our building materials to the locally sourced food we serve.
          </p>
          <p>
            Whether you're here for a breathtaking sunrise trek, a corporate retreat, or simply a quiet weekend away, we invite you to experience the magic of Hiewa—where mountains meet clouds.
          </p>
        </div>

      </div>
    </main>
  );
}
