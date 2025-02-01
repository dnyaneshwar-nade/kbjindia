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
    // { name: 'Gallery', link: '#gallery' },
    { name: 'Careers', link: '#careers' },
    { name: 'Contact Us', link: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-orange-100 via-purple-500 to-blue-400 shadow-md' : 'bg-gradient-to-r from-white via-purple-500 to-blue-400 shadow-md'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              <img src="/assets/kbj_logo.png" alt="Logo" className="w-32 h-auto" />
            </a>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navbar_items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white px-4 py-2 rounded-lg transition duration-300 bg-transparent hover:bg-blue-900 hover:text-white border border-transparent hover:border-purple-600"
              >
                {item.name}
              </a>
            ))}
            {/* <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300">Get in Touch</a> */}
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-blue-600 p-2 rounded-md focus:outline-none">
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
                className="block text-purple-600 px-4 py-2 rounded-md transition duration-300 bg-transparent hover:bg-purple-500 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            {/* <a href="#" className="block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">Get in Touch</a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
