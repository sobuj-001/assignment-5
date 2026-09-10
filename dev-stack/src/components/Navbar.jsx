function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

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

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600">Sign In</button>

          <button className="px-5 py-2 rounded-full text-sm text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-500">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
