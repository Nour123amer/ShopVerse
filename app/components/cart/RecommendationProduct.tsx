
const recommendations = [
  { id: 1, name: 'Folio Leather Sleeve', price: 85.00, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b' },
  { id: 2, name: 'Horizon Aviators', price: 195.00, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' },
  { id: 3, name: 'Kira Ceramic Lamp', price: 220.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: 4, name: 'Nexus Pro Controller', price: 149.00, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49' },
];

export default function RecommendedProducts() {
  return (
    <div className="pt-12 border-t border-gray-100 py-6">
      <div className="flex items-center gap-2 mb-8">
        {/* Sparkles Icon */}
        <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        <h2 className="text-lg font-bold text-[#1a1a1a]">Recommended for You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((prod) => (
          <div key={prod.id} className="group cursor-pointer bg-white p-3 rounded-2xl">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 mb-4 shadow-sm">
              <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
              
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-white hover:bg-gray-50 text-gray-800 rounded-full flex items-center justify-center shadow-md border border-gray-100 transition-colors">
                {/* Shopping Cart Icon */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-xs font-bold text-[#1a1a1a] tracking-tight">{prod.name}</h3>
            <p className="text-[11px] text-gray-400 mt-1">${prod.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}