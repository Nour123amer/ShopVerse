import React from 'react';
import { useNavigate } from 'react-router';

const cartItems = [
  {
    id: 1,
    name: 'Archetype Series 01',
    variant: 'Matte White / 42mm',
    price: 349.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b'
  },
  {
    id: 2,
    name: 'Velocity Runner',
    variant: 'Crimson / Size 10',
    price: 120.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
  },
  {
    id: 3,
    name: 'Sonic S1 Over-Ear',
    variant: 'Midnight Black',
    price: 299.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  }
];

export default function CartList() {
    const navigate = useNavigate();
  return (
    <div className="w-full lg:col-span-2 space-y-4">
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Your Cart (3)</h1>
      
      <div className="bg-white border border-gray-100 rounded-2xl divide-y divide-gray-50 shadow-sm overflow-hidden">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-6 gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#1a1a1a]">{item.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.variant}</p>
              </div>
            </div>

            <div className="text-sm font-medium text-gray-500 w-24">
              ${item.price.toFixed(2)}
            </div>

            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-1">
              <button className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-200 rounded transition-colors">-</button>
              <span className="w-8 text-center text-xs font-medium text-gray-800">{item.quantity}</span>
              <button className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-200 rounded transition-colors">+</button>
            </div>

            <div className="flex items-center justify-end gap-6 w-32 ml-auto">
              <span className="font-semibold text-sm text-[#1a1a1a]">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
      onClick={()=>{navigate("/shop")}}
      className="flex items-center gap-2 text-xs font-medium cursor-pointer
       text-gray-500 hover:text-gray-800 transition-colors pt-4">
        <span>&larr;</span> Continue Shopping
      </button>
    </div>
  );
}