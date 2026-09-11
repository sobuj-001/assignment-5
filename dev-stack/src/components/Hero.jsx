import heroImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Build Your Ideal <br className="hidden sm:inline" />
          <span className="inline-block whitespace-nowrap bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-normal">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-all cursor-pointer shadow-xs"
          >
            Explore Technologies
          </a>

          <button className="px-6 py-3 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:border-pink-500 hover:text-pink-500 transition-colors cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end items-center">
        <img
          src={heroImg}
          alt="Development Stack Graphic"
          className="w-full max-w-sm lg:max-w-md object-contain"
        />
      </div>

    </section>
  );
}

export default Hero;