// This is the main component for the Stays page.
// It uses your design but with static data for now.

// --- Static Data (based on your HTML) ---
const rooms = [
  {
    id: 'Deluxe',
    title: 'Deluxe Room',
    description: 'Spacious with private bath. Max 3 Ppl.',
    icon: '✨',
  },
  {
    id: 'Amber',
    title: 'Amber Room',
    description: 'Cozy with garden view. Max 5 Ppl.',
    icon: '🌿',
  },
  {
    id: 'Bunker',
    title: 'Bunker Bed',
    description: 'Adventure-themed decor. Max 1 Ppl.',
    icon: '🪖',
  },
  {
    id: 'Tent',
    title: 'Tent Stay',
    description: 'Outdoor experience. Max 3 Ppl.',
    icon: '🏕️',
  }
];
// --- End of Static Data ---

export default function StaysPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Book Your Hiewa Stay</h2>
      
      {/* Date Picker Placeholder */}
      <div className="bg-blue-100/50 rounded-xl py-3 px-6 flex flex-col md:flex-row items-center justify-center gap-4 mb-8 shadow-md">
        <span className="text-lg font-bold text-blue-800">Check-in Date</span>
        <span className="text-lg font-bold text-gray-500 hidden md:inline">→</span>
        <span className="text-lg font-bold text-blue-800">Check-out Date</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side: Room selection */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Availability</h3>
          
          <div id="stayTypeContainer" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rooms.map(room => (
              <div key={room.id} className="bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg p-3 rounded-lg flex flex-col justify-between min-h-[160px]">
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">
                    {room.icon} {room.title}
                  </h4>
                  <p className="text-xs text-gray-700 mb-2">{room.description}</p>
                </div>
                <div className="mt-auto pt-2 flex flex-col gap-2">
                  <div className="flex items-end justify-start">
                    <span className="text-xl font-bold text-gray-900">--</span>
                    <span className="text-sm text-gray-700 ml-1">/ night</span>
                  </div>
                  <div className="text-xs text-gray-700 mt-1">Select dates to check</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
            Check Availability
          </button>
        </div>

        {/* Right side: Summary */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="text-xl font-semibold text-gray-700">Your Booking Details</div>
              <div className="text-gray-500 text-sm mt-1">Select dates above</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
