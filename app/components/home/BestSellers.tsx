const bestSellers = [
  {
    id: 1,
    title: "Classic Suede Pumps",
    category: "Footwear",
    price: "$540",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  },
  {
    id: 2,
    title: "Cashmere Blend Overcoat",
    category: "Outerwear",
    price: "$1290",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 3,
    title: "Heavyweight Boxy Tee",
    category: "Essentials",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 4,
    title: "Hand-Burnished Leather Belt",
    category: "Accessories",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
  },
];

export default function BestSellers() {
  return (
    <section className="px-4 md:px-8 py-10 bg-[#f5f5f5]">
      <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4">
            <img
              src={item.image}
              alt=""
              className="w-full h-[220px] object-cover rounded-2xl"
            />

            <div className="mt-4">
              <p className="text-xs text-gray-400 uppercase">
                {item.category}
              </p>

              <h3 className="font-semibold mt-2">
                {item.title}
              </h3>

              <p className="mt-2 font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}