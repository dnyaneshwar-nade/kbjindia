// HomePageAbout.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-800 to-blue-500 text-white"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="w-full md:w-1/2 px-4">
            {/* <img
              className="rounded-3xl shadow-lg object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              src="https://placehold.co/800x600.png?text=Team+or+Office+Image"
              alt="Our team"
            /> */}
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-semibold leading-tight text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-200 mb-6">
              KBJ India Pvt Ltd is a leading HR solution provider company established in 2009. We have been leading operational transformation in the recruitment and staffing industry in Maharashtra.
            </p>
            <ul className="list-disc list-inside text-gray-200 mb-6">
            <li>Comprehensive HR Outsourcing</li>
                <li>Employee Benefits Administration</li>
                <li>Manpower Recruitment</li>
                <li>Expert Team of HR Professionals</li>
            </ul>
            <a
              href="/about"
              className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
