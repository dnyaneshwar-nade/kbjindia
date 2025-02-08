import React, { useEffect, useState } from "react";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Services from "./Home/Services";
import WhyChooseUs from "./Home/WhyChooseUs";
import Testimonials from "./Home/Testimonials";

function Home() {
  useEffect(() => {
    document.title = "Home - KBJ";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    
    </>
  );
}

export default Home;
