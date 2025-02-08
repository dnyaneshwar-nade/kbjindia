import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/asets/pexels-fotios-photos.jpg"
          alt="Corporate office"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-cyan-900 to-cyan-900 opacity-150"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="block animate-fade-in">The <span className="text-white-400">Complete</span> HR Solution Provider</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-slide-in">
              Leading recruitment and<br className="hidden md:inline" />
              <span className="pl-4 md:pl-[247px]">HR consulting business.</span>
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200 sm:mt-5 md:mt-5 lg:mx-0">
            <span className="font-bold text-white">KBJ HR India Pvt ltd</span> is a leading Human Resource management company offering a wide range of services. Equipped with a well-maintained database of resumes and possessing a team of high-end professionals, we have carved a niche for ourselves in the field with our recruitment services.
            <br /><br />
            <span className="font-bold text-white">Efficient manpower</span> is the key to success for every organization. We stand for providing impeccable manpower services for our clients within the stipulated time frame.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start gap-4 mt-8 text-2xl md:text-3xl font-bold">
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">What We Do -</b>
          <div className="flex flex-col items-center lg:items-start">
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
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
