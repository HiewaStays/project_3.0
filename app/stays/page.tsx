import { client } from '@/lib/sanityClient';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';

// We will add more structured data for amenities to match the new design
interface Stay extends SanityDocument {
  title: string;
  description: string;
  pricePerNight: number;
  mainImage: {
    asset: {
      url: string;
    };
  };
  amenities: string[]; // For the solid tags like "Private bathroom"
  features: string[]; // For the icon-based features like "Comfortable bedding"
  maxGuests: number;
}

// Update the query to fetch the new fields from Sanity
async function getStays() {
  const query = `*[_type == "stay"]{
    _id,
    title,
    "description": shortDescription, // Using a short description field from Sanity
    pricePerNight,
    mainImage {
      asset->{
        url
      }
    },
    amenities,
    features,
    maxGuests
  }`;
  const stays = await client.fetch<Stay[]>(query);
  return stays;
}

// A small helper component for the amenity icons to keep the code clean
const FeatureIcon = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-gray-600">
    <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    <span>{text}</span>
  </div>
);


export default async function StaysPage() {
  const stays = await getStays();

  return (
    <main className="min-h-screen bg-[#FDFBF8] font-serif p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">Havens of peace and simplicity</h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Each stay at Hiewa is a gentle retreat from the world's rush. Whether you seek solitude in our deluxe rooms, connection in shared spaces, or communion with the stars—your sanctuary awaits.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Room Cards */}
          <div className="lg:col-span-8 space-y-10">
            {stays.map((stay) => (
              <div key={stay._id} className="flex flex-col md:flex-row rounded-lg overflow-hidden transition-shadow hover:shadow-xl">
                {/* Image */}
                <div className="relative w-full md:w-5/12 h-64 md:h-auto">
                  <Image
                    src={stay.mainImage?.asset?.url || 'https://via.placeholder.com/400x300'}
                    alt={stay.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div className="w-full md:w-7/12 bg-white p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-3xl font-bold text-[#2C3E50]">{stay.title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">{stay.maxGuests} guests</span>
                  </div>
                  <p className="text-gray-600 mb-6">{stay.description}</p>
                  
                  {/* Icon Features */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                    {stay.features?.map(feature => (
                      <FeatureIcon key={feature} text={feature} />
                    ))}
                  ...
...
                  </div>
                  
                  {/* Solid Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {stay.amenities?.map(amenity => (
                      <span key={amenity} className="bg-gray-2
