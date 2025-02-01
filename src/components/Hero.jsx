import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          // https://placehold.co/1920x1080.png?text=Professional+Corporate+Image
          src="/asets/pexels-fotios-photos.jpg"
          alt="Corporate office"
        />
        {/* <div className="absolute inset-0 bg-red-100 opacity-75"></div> via-purple-200 to-pink-200  */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-cyan-900 to-cyan-900 opacity-150"></div>

      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block animate-fade-in">
            The <span className="text-white-400">Complete</span> HR Solution Provider
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-slide-in">
            Leading recruitment and<br />
            <span className="pl-[247px]">HR consulting business.</span>
          </span>
          </h1>
         
          <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg w-[1050px] md:mt-5 md:text-xl lg:mx-0">
          <span className="font-bold text-white">KBJ HR India Pvt ltd</span> is a leading Human Resource management company offering wide range of services.
           Equipped with a well-maintained database of resumes and possessing a team of high-end professionals, 
           we have carved a niche for ourselves in the field with our recruitment services.
           <br /><br />
            <span className="font-bold text-white">Efficient manpower</span> is the key to success for every organization. We stand for providing impeccable manpower services for our clients within the stipulated time frame.
          </p>
        </div>
        {/* Typer Component for Animated Service Titles */}
        <div className="flex items-center gap-4 mt-8 text-3xl md:text-4xl font-bold">
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            What We Do -
          </b>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-white to-orange-400 animate-fade-in">

            <Typewriter
              words={[
                "Payroll Outsourcing",
                "Temporary Labor",
                "HR & Payroll Outsourcing",
                "Payroll Management",
                "Manpower Supply",
                "Facility Management",
                "Contract Staffing",
                "Compliance Services",
                "Bulk Hiring",
                "Seasonal Hiring",
                "Festive Hiring",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="#38bdf8"
              cursorBlinking
              typeSpeed={60} // Slightly smoother typing
              deleteSpeed={40}
              delaySpeed={1200} // Longer delay for better readability
            />.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
