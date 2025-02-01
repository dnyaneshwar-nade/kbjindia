import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  const [tiltYes, setTiltYes] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setTiltYes(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0, transition: { duration: 0.75, ease: "easeOut" } }}
      animate={{ opacity: 1, transition: { duration: 0.75, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeOut" } }}
    >
      {/* Add your components here */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}

export default Home;
