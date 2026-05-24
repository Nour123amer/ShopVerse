import React from 'react';

export default function OrderSummary() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl mt-14 p-6 shadow-sm space-y-6 h-fit">
      <h2 className="text-lg font-bold text-[#1a1a1a]">Order Summary</h2>
      
      <div className="space-y-3 text-sm border-b border-gray-100 pb-6">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-medium text-[#1a1a1a]">$888.00</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Tax</span>
          <span className="font-medium text-[#1a1a1a]">$0.00</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-gray-600 block">Promo Code</label>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter code" 
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-400 bg-gray-50/50"
          />
          <button className="border border-gray-300 rounded-xl px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-between items-baseline pt-2">
        <span className="text-sm font-semibold text-[#1a1a1a]">Total</span>
        <span className="text-2xl font-bold text-[#1a1a1a]">$888.00</span>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-[#161f30] hover:bg-[#1e2a41] text-white text-sm font-medium py-3.5 rounded-xl shadow-sm transition-colors tracking-wide">
          Checkout Now
        </button>
        
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
          {/* Lock Icon */}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure Encrypted Checkout
        </div>
      </div>
    </div>
  );
}