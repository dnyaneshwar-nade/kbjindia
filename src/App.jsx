import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans">

      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import anime from "animejs";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// // import LearnMore from "./components/LearnMore";
// // import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 600);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (!isSmallScreen) {
//       var canvasEl = document.querySelector(".fireworks");
//       var ctx = canvasEl.getContext("2d");
//       var numberOfParticles = 30;
//       var pointerX = 0;
//       var pointerY = 0;
//       var tap = "ontouchstart" in window ? "touchstart" : "mousedown";
//       var colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

//       function setCanvasSize() {
//         canvasEl.width = window.innerWidth;
//         canvasEl.height = window.innerHeight;
//       }

//       function updateCoords(e) {
//         pointerX = e.clientX || e.touches[0].clientX;
//         pointerY = e.clientY || e.touches[0].clientY;
//       }

//       function setParticleDirection(p) {
//         var angle = (anime.random(0, 360) * Math.PI) / 180;
//         var value = anime.random(50, 180);
//         var radius = [-1, 1][anime.random(0, 1)] * value;
//         return {
//           x: p.x + radius * Math.cos(angle),
//           y: p.y + radius * Math.sin(angle),
//         };
//       }

//       function createParticle(x, y) {
//         var p = {};
//         p.x = x;
//         p.y = y;
//         p.color = colors[anime.random(0, colors.length - 1)];
//         p.radius = anime.random(16, 32);
//         p.endPos = setParticleDirection(p);
//         p.draw = function () {
//           ctx.beginPath();
//           ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//           ctx.fillStyle = p.color;
//           ctx.fill();
//         };
//         return p;
//       }

//       function createCircle(x, y) {
//         var p = {};
//         p.x = x;
//         p.y = y;
//         p.color = "#FFF";
//         p.radius = 0.1;
//         p.alpha = 0.5;
//         p.lineWidth = 6;
//         p.draw = function () {
//           ctx.globalAlpha = p.alpha;
//           ctx.beginPath();
//           ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//           ctx.lineWidth = p.lineWidth;
//           ctx.strokeStyle = p.color;
//           ctx.stroke();
//           ctx.globalAlpha = 1;
//         };
//         return p;
//       }

//       function animateParticles(x, y) {
//         var circle = createCircle(x, y);
//         var particles = [];
//         for (var i = 0; i < numberOfParticles; i++) {
//           particles.push(createParticle(x, y));
//         }
//         anime
//           .timeline()
//           .add({
//             targets: particles,
//             x: (p) => p.endPos.x,
//             y: (p) => p.endPos.y,
//             radius: 0.1,
//             duration: anime.random(1200, 1800),
//             easing: "easeOutExpo",
//             update: renderParticle,
//           })
//           .add({
//             targets: circle,
//             radius: anime.random(80, 160),
//             lineWidth: 0,
//             alpha: {
//               value: 0,
//               easing: "linear",
//               duration: anime.random(600, 800),
//             },
//             duration: anime.random(1200, 1800),
//             easing: "easeOutExpo",
//             update: renderParticle,
//             offset: 0,
//           });
//       }

//       function renderParticle(anim) {
//         for (var i = 0; i < anim.animatables.length; i++) {
//           anim.animatables[i].target.draw();
//         }
//       }

//       document.addEventListener(
//         tap,
//         function (e) {
//           updateCoords(e);
//           animateParticles(pointerX, pointerY);
//         },
//         false
//       );

//       setCanvasSize();
//       window.addEventListener("resize", setCanvasSize, false);
//     } else {
//       document.querySelector(".fireworks").style.display = "none";
//     }
//   }, [isSmallScreen]);

//   return (
//     <div className="App">
//       <ScrollToTop />
//       <canvas className="fireworks fixed top-0 left-0 w-full h-full pointer-events-none"></canvas>
//       <Navbar />
//       <AnimatePresence>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/learn-more" element={<LearnMore />} />
//         </Routes>
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// }

// export default App;

