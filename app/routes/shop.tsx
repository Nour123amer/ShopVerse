import { Heart, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";

const products = [
  {
    id: 1,
    title: "Series 01 Chronograph",
    subtitle: "Brushed Titanium / Obsidian",
    price: "$349",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    title: "Studio Headphones",
    subtitle: "Noise Cancelling / Slate",
    price: "$499",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    title: "Aero Runner X",
    subtitle: "Performance Knit / Scarlet",
    price: "$180",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "Artisan Desk Mat",
    subtitle: "Full Grain Leather / Charcoal",
    price: "$85",
    category: "Home Office",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 5,
    title: "Sculptural Table Lamp",
    subtitle: "Ceramic & Linen / Bone",
    price: "$220",
    category: "Home Office",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 6,
    title: "Retro Film Camera",
    subtitle: "35mm Classic / Silver",
    price: "$895",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 7,
    title: "Minimal Leather Wallet",
    subtitle: "Italian Leather / Black",
    price: "$120",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
  },
  {
    id: 8,
    title: "Modern Desk Chair",
    subtitle: "Oak Wood / Linen",
    price: "$640",
    category: "Home Office",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 9,
    title: "Wireless Speaker",
    subtitle: "Bluetooth 5.0 / Matte Black",
    price: "$275",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  },
  {
    id: 10,
    title: "Luxury Backpack",
    subtitle: "Waterproof Nylon / Graphite",
    price: "$310",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 11,
    title: "Premium Sneakers",
    subtitle: "Leather / White",
    price: "$260",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 12,
    title: "Classic Sunglasses",
    subtitle: "Polarized / Gold",
    price: "$190",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 13,
    title: "Mechanical Keyboard",
    subtitle: "RGB / Aluminum",
    price: "$145",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 14,
    title: "Travel Duffel Bag",
    subtitle: "Canvas / Brown",
    price: "$230",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    id: 15,
    title: "Ceramic Coffee Set",
    subtitle: "Handcrafted / Ivory",
    price: "$95",
    category: "Home Office",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 16,
    title: "Smart Fitness Watch",
    subtitle: "AMOLED / Titanium",
    price: "$399",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 17,
    title: "Noise Cancelling Earbuds",
    subtitle: "Wireless / Midnight",
    price: "$210",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 18,
    title: "Luxury Hoodie",
    subtitle: "Organic Cotton / Sand",
    price: "$170",
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
];

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfLastPage = indexOfLastProduct /6
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(0);

  const filterByApparel = products.filter(product => product.category === "Apparel");
  const filterByAccessories = products.filter(product => product.category === "Accessories");
  const filterByHomeOffice = products.filter(product => product.category === "Home Office");
  const filterByTech = products.filter(product => product.category === "Tech");

  if (selectedCategory === "Apparel") {
    currentProducts = filterByApparel.slice(indexOfFirstProduct, indexOfLastProduct);
  } else if (selectedCategory === "Accessories") {
    currentProducts = filterByAccessories.slice(indexOfFirstProduct, indexOfLastProduct);
  } else if (selectedCategory === "Home Office") {
    currentProducts = filterByHomeOffice.slice(indexOfFirstProduct, indexOfLastProduct);
  } else if (selectedCategory === "Tech") {
    currentProducts = filterByTech.slice(indexOfFirstProduct, indexOfLastProduct);
  }

  if (priceRange > 0) {
    currentProducts = currentProducts.filter(product => Number(product.price.replace("$", "")) < priceRange || Number(product.price.replace("$", "")) == priceRange);

  }



  return (
    <section className="bg-[#f5f5f5] px-4 md:px-8 py-10 min-h-screen">

      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10">

        <div>
          <h1 className="text-4xl font-bold text-[#1E1E1E]">
            Shop All
          </h1>

          <p className="text-gray-500 mt-2">
            Carefully curated essentials for the modern lifestyle.
          </p>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 ">
          <span className="text-sm text-gray-500">
            Sort by:
          </span>

          <div className="relative w-fit">
            <select className="appearance-none border bg-white border-gray-300 rounded-xl px-4 py-2 pr-10 outline-none">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">

        {/* Sidebar */}
        <aside className="space-y-10">

          {/* Category */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-5">
              Category
            </h3>


            <div className="space-y-4">


              {["Apparel", "Accessories", "Home Office", "Tech"].map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 text-sm cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-5 h-5 accent-blue-800"
                  />

                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-5">
              Price Range
            </h3>

            <input
              type="range"
              value={priceRange}
              min={0}
              max={1000}
              className="w-full"
              onChange={(e) => { setPriceRange(Number(e.target.value)) }}
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span>${priceRange.toFixed(2)} </span>
              <span>$1,000+</span>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-5">
              Rating
            </h3>

            <label className="flex items-center gap-3 text-sm">
              <input type="radio" name="rating" />
              ★★★★★ & Up
            </label>
          </div>
        </aside>

        {/* Products */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {currentProducts?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200"
              >

                {/* Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />

                  <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-lg text-[#1E1E1E]">
                        {product.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {product.subtitle}
                      </p>
                    </div>

                    <span className="font-semibold text-sm">
                      {product.price}
                    </span>
                  </div>

                  {/* Button */}
                  <button className="cursor-pointer w-full mt-5 bg-[#182232] text-white py-3 rounded-xl hover:opacity-90 transition">
                    Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-5 mt-14 text-gray-500">

            <button className="cursor-pointer" onClick={()=>{setCurrentPage(indexOfLastPage-1)}}>
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`cursor-pointer ${currentPage === page ? 'text-black font-semibold' : 'text-gray-500'
                  }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button className="cursor-pointer" onClick={()=>{setCurrentPage(indexOfLastPage+1)}}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}