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
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-5000`}
      >
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
    </>
  );
}

export default App;
