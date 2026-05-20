export default function FeaturedCollections() {
  return (
    <section className="px-4 md:px-8 py-10 bg-[#f5f5f5]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Collections</h2>
          <p className="text-gray-500 mt-1">
            Handpicked selections for every occasion.
          </p>
        </div>

        <button className="text-sm font-medium">
          Explore All Collections →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Large Card */}
        <div className="lg:col-span-2 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
              alt=""
              className="w-full h-[250px] object-cover"
            />

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-2xl font-semibold">Accessories</h3>
              <p className="text-sm">Luxury Accessories</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt=""
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}