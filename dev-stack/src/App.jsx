import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCatalog from "./components/TechCatalog";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleToggleStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    } else {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleClearAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
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
  );
}

export default App;