
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-1 py-4 grid grid-cols-3 items-center">

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white font-bold">
            DS
          </div>

          <h2 className="font-bold text-lg">
            <span className="text-gray-900">Dev</span>{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </div>

        <div className="hidden md:flex items-center justify-center gap-7 text-sm text-gray-600">
          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>

          <a href="#technologies" className="hover:text-pink-500 transition">
            Technologies
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Projects
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            About
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button className="text-sm text-gray-600 hover:text-pink-500 transition">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full text-sm text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;



