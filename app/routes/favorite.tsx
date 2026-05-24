import React from 'react'
const favoriteItems = [
  {
    id: 1,
    name: 'ARC-01 Performance Sneaker',
    variant: 'Midnight / Slate',
    price: 240,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b'
  },
  {
    id: 2,
    name: 'Horizon Chronograph',
    variant: 'Brushed Steel / Onyx',
    price: 495,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
  },
  {
    id: 3,
    name: 'Sonic S1 Headphones',
    variant: 'Matte Charcoal',
    price: 350,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },
  {
    id: 4,
    name: 'Sculpted Leather Tote',
    variant: 'Obsidian Black',
    price: 680,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49'
  }
];
export default function Favorite() {

  return (
    <div className=" min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans antialiased text-[#1a1a1a]">
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight">Your Favorites</h1>
          <span className="bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
            12 items
          </span>
        </div>
        <button className="text-xs font-medium text-gray-400 hover:text-gray-600 underline transition-colors">
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {favoriteItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm flex flex-col justify-between group">
            
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-50 mb-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
              />
              
              <button className="absolute cursor-pointer top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full flex items-center justify-center shadow-sm transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-1 mb-4 px-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xs font-bold leading-tight">{item.name}</h3>
                <span className="text-xs font-bold">${item.price}</span>
              </div>
              <p className="text-[11px] text-gray-400">{item.variant}</p>
            </div>

            <button className="w-full cursor-pointer bg-[#202938] hover:bg-[#2b364a] text-white text-xs font-medium py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors mt-auto">
              {/* Bag Icon */}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Quick Add
            </button>

          </div>
        ))}
      </div>
    </div>
  
  )
}
