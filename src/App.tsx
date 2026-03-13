import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BatchDetails from "./components/BatchDetails";
import KeyConcepts from "./components/KeyConcepts";
import WhatYouLearn from "./components/WhatYouLearn";
import WhyJoin from "./components/WhyJoin";
import JoiningMethod from "./components/JoiningMethod";
import EnrollmentContact from "./components/EnrollmentContact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <HeroSection />
      <BatchDetails />
      <KeyConcepts />
      <WhatYouLearn />
      <WhyJoin />
      <JoiningMethod />
      <EnrollmentContact />
      <Footer />
    </div>
  );
}
