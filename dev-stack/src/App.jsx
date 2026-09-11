import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCatalog from "./components/TechCatalog";
import Footer from "./components/Footer"; // ১. Footer ইমপোর্ট করা হলো

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleToggleStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);

    if (exists) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
      toast.error(`${tech.name} removed from stack!`, {
        duration: 2000,
      });
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to stack!`, {
        duration: 2000,
      });
    }
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast("All technologies removed!", {
      icon: "🗑️",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-8">
          <Hero />
          <TechCatalog
            selectedStack={selectedStack}
            onToggleStack={handleToggleStack}
            onClearAll={handleClearAll}
          />
        </main>
      </div>

      <Footer />

      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;

