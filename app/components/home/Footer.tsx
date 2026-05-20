export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-4 md:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold">LUXE</h2>

          <p className="text-gray-400 mt-5 leading-7">
            A space for refined essentials and contemporary
            silhouettes crafted for the modern wardrobe.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Customer Care</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Contact Support</li>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Legal</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Newsletter</h3>

          <div className="flex border border-gray-600 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent px-4 py-3 flex-1 outline-none"
            />

            <button className="px-4">→</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-14 pt-8 text-gray-400 text-sm">
        © 2024 LUXE Premium E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}