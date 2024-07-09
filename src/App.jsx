import { Details } from "./components/Details";
import { HeroSection } from "./components/HeroSection";
import { InviteSection } from "./components/InviteSection";
import { Location } from "./components/Location";
import { Organizer } from "./components/Organizer";
import { TimingSection } from "./components/TimingSection";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`app ${loading ? "loading" : "loaded"}`}>
      <HeroSection />
      <div className="w-[1200px] m-auto px-15">
        <InviteSection />
        <TimingSection />
      </div>
      <Organizer />
      <Location />
      <div className="w-[1200px] m-auto px-15 bg-gray-200/70"></div>
      <Details />
    </div>
  );
}

export default App;
