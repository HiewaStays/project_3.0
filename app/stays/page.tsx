import { client } from '@/lib/sanityClient';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image'; // <-- 1. IMPORT THE IMAGE COMPONENT

interface Stay extends SanityDocument {
  title: string;
  description: string;
  pricePerNight: number;
  mainImage: {
    asset: {
      url: string;
    };
  };
}

async function getStays() {
  const query = `*[_type == "stay"]{
    _id,
    title,
    "description": description,
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

export default async function StaysPage() {
  const stays = await getStays();

  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Stays</h1>
          <p className="text-xl text-gray-600">
            Comfortable and unique accommodations for every traveler.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div key={stay._id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">

              {/* 2. USE THE <Image /> COMPONENT INSTEAD OF <img> */}
              <div className="relative w-full h-56">
                <Image 
                  src={stay.mainImage?.asset?.url || 'https://via.placeholder.com/400x250'} 
                  alt={stay.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>

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
