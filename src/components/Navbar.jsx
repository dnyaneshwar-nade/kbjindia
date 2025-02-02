import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navbar_items = [
    { name: 'Home', link: '#' },
    { name: 'About Us', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Sectors', link: '#sectors' },
    { name: 'Careers', link: '#careers' },
    { name: 'Contact Us', link: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300 shadow-xl' : 'bg-gradient-to-r from-white via-gray-100 to-gray-300 shadow-md'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              <img src="/assets/kbj_logo.png" alt="Logo" className="w-[12rem] h-auto" />
            </a>
          </div>
          
          <div className="hidden md:flex space-x-6">
  {navbar_items.map((item, index) =>
    item.name === "Contact Us" ? (
      // Special "Contact Us" Button
      <a
        key={index}
        href={item.link}
        className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#6d28d9] to-[#a855f7] 
        rounded-lg shadow-lg transition-all duration-300 transform 
        hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:from-[#5b21b6] hover:to-[#9333ea]"
      >
        {item.name}
      </a>
    ) : (
      // Normal Navbar Items
      <a
        key={index}
        href={item.link}
        className="relative text-[#1e3a8a] px-5 py-2 text-lg font-medium transition-all duration-300 
        hover:text-[#3b82f6] hover:-translate-y-1 hover:scale-105 group 
        hover:shadow-md hover:shadow-blue-500"
      >
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
    )
  )}
</div>





          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 p-2 rounded-md focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navbar_items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-blue-600 px-4 py-2 rounded-md transition duration-300 bg-transparent hover:bg-blue-600 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
