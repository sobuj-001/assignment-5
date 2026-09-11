import techData from "../data/technologies.json";

function TechCatalog({ selectedStack, onToggleStack, onClearAll }) {
  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case "popular":
        return "bg-sky-50 text-sky-500 border-sky-100";
      case "versatile":
      case "standard":
        return "bg-emerald-50 text-emerald-500 border-emerald-100";
      case "fast":
      case "ubiquitous":
        return "bg-amber-50 text-amber-500 border-amber-100";
      case "top sql":
      case "essential":
      case "robust":
      case "modern":
      case "containers":
        return "bg-blue-50 text-blue-500 border-blue-100";
      case "cache":
      case "full-stack":
      case "fullstack":
        return "bg-rose-50 text-rose-500 border-rose-100";
      default:
        return "bg-gray-50 text-gray-500 border-gray-100";
    }
  };

  return (
    <section id="technologies" className="py-8">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {techData.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);
            return (
              <div
                key={tech.id}
                className={`bg-white rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                  isAdded
                    ? "border-pink-300 shadow-xs"
                    : "border-gray-200 shadow-2xs hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                        tech.badge
                      )}`}
                    >
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {tech.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md font-medium text-[10px]">
                        {tech.category}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md font-medium text-[10px]">
                        {tech.experience}
                      </span>
                    </div>
                    {/* Yellow Star Rating */}
                    <span className="font-bold text-gray-700 flex items-center gap-1 text-[11px]">
                      <span className="text-amber-400 text-xs">★</span> {tech.rating}
                    </span>
                  </div>

                  <button
                    disabled={isAdded}
                    onClick={() => onToggleStack(tech)}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all ${
                      isAdded
                        ? "bg-pink-50 text-pink-600 border border-pink-200 opacity-80 cursor-not-allowed"
                        : "bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-3 lg:sticky lg:top-20">
          <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-200/80">
            <h3 className="font-bold text-gray-900 text-base">Your Stack</h3>
            <p className="text-gray-400 text-[11px] mb-4">
              {selectedStack.length} Technology Selected
            </p>

            {selectedStack.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-xl py-12 text-center bg-white">
                <p className="text-gray-400 text-xs font-medium">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2.5 max-h-105 overflow-y-auto pr-1">
                  {selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 object-contain"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-800 leading-none">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onToggleStack(item)}
                        className="text-gray-300 hover:text-red-500 text-sm font-light px-1 cursor-pointer transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onClearAll}
                  className="w-full mt-3 py-2 rounded-xl border border-red-200 text-red-500 font-medium text-xs hover:bg-red-50 transition-colors cursor-pointer"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechCatalog;