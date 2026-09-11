import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCatalog from "./components/TechCatalog";
import Footer from "./components/Footer";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);

    if (exists) {
      toast.info(`${tech.name} is already added to your stack!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to stack!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleRemoveItem = (tech) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    toast.warn(`${tech.name} removed from stack!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleClearAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("All technologies removed from stack!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-8">
          <Hero />

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
              <p className="text-xs font-semibold text-gray-400">Loading technologies...</p>
            </div>
          ) : (
            <TechCatalog
              selectedStack={selectedStack}
              onToggleStack={handleToggleStack}
              onRemoveItem={handleRemoveItem}
              onClearAll={handleClearAll}
            />
          )}
        </main>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;