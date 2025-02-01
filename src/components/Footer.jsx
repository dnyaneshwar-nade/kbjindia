import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
              <h3 className="text-2xl font-bold mb-4"> <a href="#" className="text-2xl font-bold text-white">
                <img src="/assets/kbj_logo.png" alt="Logo" className="w-32 h-auto" />
              </a>
            </h3>
            <p className="text-gray-400">Empowering businesses with innovative solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navbar_items.map((item, index) => (
                <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white transition duration-300">
                      {item.name}
                    </a>
                </li>
                ))}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <p className="text-gray-400 mb-2">123 Business Street, Suite 100</p>
            <p className="text-gray-400 mb-2">New York, NY 10001</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">Copyright &copy; 2025 KBJ HR India Pvt Ltd. All rights reserved.</p>
          {/* <p className="text-gray-400 mt-2">Designed by WebSparks AI</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
