import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Merino Wool Cardigan",
    category: "KNITWEAR",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
  },
  {
    id: 2,
    title: "Silk-Blend Tailored Pants",
    category: "TROUSERS",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 3,
    title: "Organic Cotton Oxford",
    category: "SHIRTS",
    price: "$195",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    id: 4,
    title: "Nappa Leather Hobo Bag",
    category: "BAGS",
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
];

export default function RecommendedProducts() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <section className="px-4 md:px-8 py-10 bg-[#f5f5f5]">
      <h2 className="text-2xl font-bold mb-8">
        Recommended for You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt=""
                className="w-full h-65 object-cover"
              />

              <button 
              onClick={()=>{setIsFavorite(!isFavorite)}}
              className={`absolute w-8 h-8 top-4 flex items-center justify-center
               right-4 bg-white p-2 rounded-full cursor-pointer
               ${isFavorite  ? 'text-red-500' : 'text-gray-500'  } `}>
                ♡
              </button>
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-400 uppercase">
                {product.category}
              </p>

              <div className="flex justify-between items-center mt-2">
                <h3 className="font-medium text-sm md:text-base">
                  {product.title}
                </h3>

                <span className="font-semibold text-sm">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}