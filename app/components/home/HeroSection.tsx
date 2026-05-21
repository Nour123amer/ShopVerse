export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] px-4 md:px-8 py-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-white h-[calc(100vh-100px)]">
        
        {/* Left Content */}
        <div className="p-8 md:p-14 lg:pt-26 flex flex-col ">
          <span className="bg-gray-200 text-xs px-3 py-1 rounded-full w-fit mb-6">
            AUTUMN COLLECTION 2024
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Elevated Essentials
            <br />
            for the Modern
            <br />
            Wardrobe.
          </h1>

          <p className="text-gray-500 mt-6 max-w-md leading-7">
            Discover a curated selection of premium apparel crafted with
            uncompromising quality and timeless minimalist design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-[#111827] text-white px-6 py-3 rounded-xl">
              Shop Now
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl">
              View Lookbook
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="fashion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}