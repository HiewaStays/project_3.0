// Import the Sanity client we created earlier
import { client } from '@/lib/sanityClient';
import { SanityDocument } from 'next-sanity';

// Define a type for our 'stay' documents to ensure data consistency
interface Stay extends SanityDocument {
  title: string;
  description: string; // We'll add description from the CMS
  pricePerNight: number;
  mainImage: { // And the main image
    asset: {
      url: string;
    };
  };
}

// This async function now fetches LIVE data from Sanity
async function getStays() {
  // This is a GROQ query, the language Sanity uses to get data.
  // We're asking for all documents of the type "stay".
  const query = `*[_type == "stay"]{
    _id,
    title,
    "description": description, // Fetching the description field
    pricePerNight,
    mainImage {
      asset->{
        url
      }
    }
  }`;
  
  const stays = await client.fetch<Stay[]>(query);
  return stays;
}

// The main page component is now async to await the data
export default async function StaysPage() {
  // Call the function to get the live data from Sanity
  const stays = await getStays();

  return (
    // Main container for the page content
    <main className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Stays
          </h1>
          <p className="text-xl text-gray-600">
            Comfortable and unique accommodations for every traveler.
          </p>
        </div>

        {/* Grid container for the room cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* We now loop through the REAL `stays` data from Sanity */}
          {stays.map((stay) => (
            <div key={stay._id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              
              {/* Room Image - Now uses the URL from the CMS */}
              <img src={stay.mainImage?.asset?.url || 'https://via.placeholder.com/400x250'} alt={stay.title} className="w-full h-56 object-cover" />
              
              {/* Room Details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{stay.title}</h2>
                <p className="text-gray-600 mb-4">{stay.description}</p>
                <p className="text-xl font-bold text-blue-600">
                  ₹{stay.pricePerNight} / night
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
