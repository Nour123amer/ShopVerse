import { Heart, Search, ShoppingBag, User, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false; // Placeholder for authentication state
  const navigte = useNavigate();
  const [accessToken, setAccessToken]= useState<string|null>();

  useEffect(()=>{
   const token = localStorage.getItem("token");
   setAccessToken(token)

  },[])

  return (
    <header className="bg-[#f5f5f5] px-4 md:px-8 py-5 border-b border-white">
      <nav className="flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/">ShopVerse</Link> 
        </h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-gray-600">
          <li className="font-medium text-black border-b border-black pb-1">
            <Link to="/shop">Shop</Link>
            
          </li>

          <li className="hover:text-black cursor-pointer transition">
           <Link to="/new-arrivals">New Arrivals</Link> 
          </li>

          <li className="hover:text-black cursor-pointer transition">
            <Link to="/collections">Collections</Link> 
          </li>

          <li className="hover:text-black cursor-pointer transition">
            Rewards
          </li>
        </ul>

        {/* Search + Icons */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Search */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full w-65">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search luxury goods..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Icons */}

          {accessToken ? (
            <>
             <button className="hover:scale-110 transition">
            <Heart size={20} />
          </button>

          <button className="hover:scale-110 transition">
            <ShoppingBag size={20} />
          </button>

          <button className="hover:scale-110 transition">
            <User size={20} />
          </button>

            </>
          ):(
            <button className="px-4 py-2 bg-black font-semibold text-white rounded-full text-sm
             hover:bg-gray-800 transition cursor-pointer"
             onClick={()=>(navigte("/sign-in"))}
             >
              Sign In
            </button>
          )}

         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu className="cursor-pointer" size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 bg-white rounded-2xl p-6 shadow-lg">
          
          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl mb-6">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-5 text-gray-700">
            <li className="font-medium"> <Link to="/shop">Shop</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
          </ul>

          {/* Mobile Icons */}
          {isLoggedIn ?(
            <div className="flex items-center gap-5 mt-8">
            <Heart size={20} />
            <ShoppingBag size={20} />
            <User size={20} />
          </div>
          ):(
            <button className="w-full mt-8 px-4 py-2 bg-black font-semibold text-white rounded-full text-sm
             hover:bg-gray-800 transition cursor-pointer"
             onClick={()=>(navigte("/sign-in"))}
             >
              Sign In
            </button>
          )}
          
        </div>
      )}
    </header>
  );
}