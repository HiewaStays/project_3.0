import { client } from '@/lib/sanityClient';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';

// We'll add a few more fields to match the new design
interface Stay extends SanityDocument {
  title: string;
  description: string;
  pricePerNight: number;
  mainImage: {
    asset: {
      url: string;
    };
  };
  amenities: string[]; // An array of text for the tags
  maxGuests: number; // A number for the guest count
}

// Update the query to fetch the new fields
async function getStays() {
  const query = `*[_type == "stay"]{
    _id,
    title,
    "description": shortDescription, // Assuming you have a 'shortDescription' field in Sanity
    pricePerNight,
    mainImage {
      asset->{
        url
      }
    },
    amenities,
    maxGuests
  }`;
  const stays = await client.fetch<Stay[]>(query);
  return stays;
}

export default async function StaysPage() {
  const stays = await getStays();

  return (
    <main className="min-h-screen bg-[#F7F6F3] font-serif p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-3">Havens of peace and simplicity</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each stay at Hiewa is a gentle retreat from the world's rush. Whether you seek solitude in our deluxe rooms, connection in shared spaces, or communion with the stars in our camping tents—your sanctuary awaits.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Room Cards */}
          <div className="lg:col-span-2 space-y-8">
            {stays.map((stay) => (
              <div key={stay._id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                  <Image
                    src={stay.mainImage?.asset?.url || 'https://via.placeholder.com/400x300'}
                    alt={stay.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-between md:w-2/3">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-3xl font-bold text-[#2C3E50]">{stay.title}</h2>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">{stay.maxGuests} guests</span>
                    </div>
                    <p className="text-gray-600 mb-4">{stay.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stay.amenities?.map(amenity => (
                        <span key={amenity} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md">{amenity}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-gray-800">₹{stay.pricePerNight}<span className="text-sm font-normal text-gray-600">/night</span></span>
                    <a href="#" className="bg-[#005A58] text-white font-bold px-6 py-2 rounded-md hover:bg-[#004A48] transition-colors">
                      Book This Stay
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Placeholder for Booking/Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Summary</h3>
              <p className="text-gray-600">Select a stay to see details here.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
