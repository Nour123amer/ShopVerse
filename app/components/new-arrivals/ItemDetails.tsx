import { Heart } from 'lucide-react'
import React from 'react'

export default function ItemDetails() {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* Images */}
                <div className="xl:col-span-2">

                    {/* Main Image */}
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
                            alt="watch"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Small Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa"
                                alt=""
                                className="w-full h-[320px] object-cover"
                            />
                        </div>

                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
                                alt=""
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Product Description
                        </h2>

                        <p className="text-gray-500 leading-8 mt-5 max-w-4xl">
                            The Aeris Chronograph represents the pinnacle of precision
                            engineering and understated luxury. Designed for the modern
                            professional, it features a Swiss-made movement housed in an
                            aerospace-grade titanium case. Its midnight dial offers
                            unparalleled legibility under any lighting condition.
                        </p>
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="bg-white rounded-3xl p-6 sticky top-6">

                        {/* Badge + Rating */}
                        <div className="flex items-center justify-between">
                            <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                                NEW COLLECTION
                            </span>

                            <span className="text-sm text-gray-500">
                                ⭐ 4.9 (124)
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold mt-6">
                            Aeris Chronograph
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Midnight Edition • Titanium 42mm
                        </p>

                        {/* Price */}
                        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                $1,250.00
                            </h2>

                            <span className="text-gray-400 line-through">
                                $1,490.00
                            </span>
                        </div>

                        {/* Strap Selection */}
                        <div className="mt-10">
                            <p className="font-medium mb-4">
                                Strap Selection
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <button className="border border-black px-5 py-3 rounded-xl">
                                    Leather
                                </button>

                                <button className="border border-gray-300 px-5 py-3 rounded-xl">
                                    Nylon
                                </button>

                                <button className="border border-gray-300 px-5 py-3 rounded-xl">
                                    Steel
                                </button>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex gap-4 mt-8">

                            <div className="flex items-center justify-between border border-gray-300 rounded-xl px-5 py-4 flex-1">
                                <button className="text-xl">−</button>

                                <span>1</span>

                                <button className="text-xl">+</button>
                            </div>

                            <button className="border border-gray-300 px-5 rounded-xl">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Add To Bag */}
                        <button className="w-full bg-[#0F172A] text-white py-4 rounded-xl mt-8 font-medium hover:opacity-90 transition">
                            ADD TO BAG
                        </button>

                        {/* Shipping */}
                        <p className="text-sm text-gray-400 mt-5 text-center">
                            🚚 Complimentary shipping on orders over $500
                        </p>
                    </div>

                    {/* Sustainability */}
                    <div className="bg-white rounded-3xl p-6 mt-6">
                        <h3 className="font-semibold text-lg">
                            Sustainability
                        </h3>

                        <p className="text-gray-500 leading-7 mt-4">
                            Crafted from 80% recycled Grade 5 titanium. Packaged
                            in biodegradable FSC-certified materials.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#fcfcfc] mt-8 text-[#1a1a1a] font-sans antialiased px-6 py-12  space-y-24">

                <section className="grid grid-cols-1  lg:grid-cols-3 gap-12 items-start border-b border-gray-100 pb-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold tracking-tight mb-8">Technical Specifications</h2>
                        <div className="divide-y divide-gray-100">
                            <div className="grid grid-cols-2 py-4 text-sm">
                                <span className="text-gray-500">Movement</span>
                                <span className="font-medium text-right lg:text-left">Swiss Quartz Chronograph</span>
                            </div>
                            <div className="grid grid-cols-2 py-4 text-sm">
                                <span className="text-gray-500">Case Material</span>
                                <span className="font-medium text-right lg:text-left">Grade 5 Titanium</span>
                            </div>
                            <div className="grid grid-cols-2 py-4 text-sm">
                                <span className="text-gray-500">Crystal</span>
                                <span className="font-medium text-right lg:text-left">Anti-reflective Sapphire</span>
                            </div>
                            <div className="grid grid-cols-2 py-4 text-sm">
                                <span className="text-gray-500">Water Resistance</span>
                                <span className="font-medium text-right lg:text-left">10 ATM (100m)</span>
                            </div>
                        </div>
                    </div>

                    {/* Warranty Card */}
                    <div className="bg-[#f5f5f5] p-8 rounded-2xl border border-gray-50 space-y-4">
                        <div className="w-8 h-8 rounded-full border border-dark flex items-center justify-center">
                            {/* SVG Custom Check Icon */}
                            <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold">5-Year Warranty</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Every Aeris timepiece is backed by our comprehensive global protection plan, ensuring a lifetime of precision.
                        </p>
                    </div>
                </section>

                {/* 2. Complete Your Look Section */}
                <section>
                    <div className="flex justify-between items-baseline mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight">Complete Your Look</h2>
                            <p className="text-sm text-gray-500 mt-1">Pair your timepiece with our curated accessories</p>
                        </div>
                        <a href="#" className="text-sm font-medium underline flex items-center gap-1 hover:text-gray-600 transition-colors">
                            View Collection <span>&rarr;</span>
                        </a>
                    </div>

                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                                <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b" alt="Travel Watch Case" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                            </div>
                            <h3 className="text-sm font-medium">Travel Watch Case</h3>
                            <p className="text-xs text-gray-500 mt-0.5">$145.00</p>
                        </div>

                        {/* Card 2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Precision Adjustment Kit" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                            </div>
                            <h3 className="text-sm font-medium">Precision Adjustment Kit</h3>
                            <p className="text-xs text-gray-500 mt-0.5">$85.00</p>
                        </div>

                        {/* Card 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                                <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49" alt="Interchangeable Strap Set" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                            </div>
                            <h3 className="text-sm font-medium">Interchangeable Strap Set</h3>
                            <p className="text-xs text-gray-500 mt-0.5">$295.00</p>
                        </div>

                        {/* Card 4 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 mb-4">
                                <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Orbital Watch Winder" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                            </div>
                            <h3 className="text-sm font-medium">Orbital Watch Winder</h3>
                            <p className="text-xs text-gray-500 mt-0.5">$450.00</p>
                        </div>
                    </div>
                </section>

                {/* 3. Customer Reviews Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
                    {/* Left Side: Rating Breakdown */}
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight mb-4">Customer Reviews</h2>
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-5xl font-bold tracking-tight">4.9</span>
                            <div>
                                <div className="flex text-xs text-gray-900 gap-0.5">★★★★★</div>
                                <p className="text-xs text-gray-500 mt-1">Based on 124 reviews</p>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-3 max-w-xs">
                            <div className="flex items-center gap-4 text-xs">
                                <span className="w-3 text-gray-500">5</span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-900 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="w-3 text-gray-500">4</span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-900 rounded-full" style={{ width: '6%' }}></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="w-3 text-gray-500">3</span>
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gray-300 rounded-full" style={{ width: '2%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Review Comments */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Review 1 */}
                        <div className="border-b border-gray-100 pb-8 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-semibold">James W.</h4>
                                    <div className="flex text-[10px] text-gray-900 mt-0.5">★★★★★</div>
                                </div>
                                <span className="text-xs text-gray-400">2 weeks ago</span>
                            </div>
                            <p className="text-sm text-gray-700 italic leading-relaxed">
                                "The level of detail on this dial is incredible. Photos don't do justice to how the midnight blue shifts in the light."
                            </p>
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                <span className="w-3 h-3 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">✓</span>
                                Verified Purchase
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="border-b border-gray-100 pb-8 space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-semibold">Sarah K.</h4>
                                    <div className="flex text-[10px] text-gray-900 mt-0.5">★★★★★</div>
                                </div>
                                <span className="text-xs text-gray-400">1 month ago</span>
                            </div>
                            <p className="text-sm text-gray-700 italic leading-relaxed">
                                "Extremely lightweight thanks to the titanium. I forget I'm even wearing it, yet it makes such a bold statement."
                            </p>
                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                <span className="w-3 h-3 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">✓</span>
                                Verified Purchase
                            </div>
                        </div>

                        {/* Load More Button */}
                        <button className="text-xs font-semibold underline tracking-wide uppercase hover:text-gray-600 transition-colors pt-2">
                            Load More Reviews
                        </button>
                    </div>
                </section>

            </div>
        </>
    )
}
