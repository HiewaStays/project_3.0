import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Hero Background - Image Overlay with Blue Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vanjangi-hills-hero.jpg" // Replace with your high-quality hero image
          alt="Hiewa Stays & Trails in Vanjangi Hills"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority={true}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      </div>

      {/* Hero Content - Centered and Visible */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Hidden Paradise in Eastern Ghats 
        </h1>
        <p className="mb-8 max-w-2xl text-lg font-medium md:text-xl">
          Where Mountains Meet Clouds 
        </p>
        
        {/* Call-to-Action Button */}
        <Link href="/booking" passHref>
          <button className="rounded-full bg-blue-500 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
            Book Your Stay
          </button>
        </Link>
      </div>

      {/* Floating Quick Booking Widget (Placeholder) */}
      <div className="absolute bottom-5 z-20 w-full p-4 md:w-auto">
        {/* This is a placeholder. We will build the actual component in a later sprint. */}
        <div className="mx-auto max-w-lg rounded-xl bg-white/20 p-4 text-center backdrop-blur-sm md:flex md:items-center md:justify-between md:gap-4">
          <span className="text-sm font-semibold text-white">Quick Booking Widget</span>
          <button className="mt-2 w-full rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white md:mt-0 md:w-auto">
            Check Availability
          </button>
        </div>
      </div>
    </main>
  );
}
