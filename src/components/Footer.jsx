// Footer Componenet.
import React, { useEffect } from "react";
import { RiSendPlaneLine } from "react-icons/ri"; // Icons
import logo from "../assets/logo.png"; // Logo
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa"; // Icons
import { BsTwitter } from "react-icons/bs"; // Icon
import { TbBrandGithubFilled } from "react-icons/tb"; // Icon
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

const Footer = () => {
  // AOS Animation
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div data-aos="fade-right" className="w-full sm:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center">
              <img src={logo} alt="TranspFlow logo" className="w-32 sm:w-36 h-auto transition-transform duration-300 hover:scale-105"/>
            </div>
            <p className="mt-4 text-sm text-gray-300 md:w-[250px] leading-relaxed">
              TranspFlow - Streamlining logistics and bringing transparency to the transportation ecosystem.
            </p>
          </div>
          {/* Links Section */}
          <div data-aos="fade-left" className="w-full sm:w-1/2 lg:w-1/5 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-lg text-yellow-400">TranspFlow</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Sign In
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Use Cases Section */}
          <div data-aos="flip-up" className="w-full sm:w-1/2 lg:w-1/5 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-lg text-yellow-400">Use Cases</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Add Product
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Product Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> News
                </a>
              </li>
            </ul>
          </div>
          {/* News and Update Section */}
          <div data-aos="flip-down" className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="mb-4 font-bold text-lg text-yellow-400">News and Updates</h3>
            <div className="flex mb-6 group">
              <input type="email" placeholder="Enter your Email"
              className="flex-1 px-3 py-3 border bg-gray-800/50 placeholder-gray-400 border-yellow-500 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"/>
              <button className="bg-yellow-500 hover:bg-yellow-400 px-4 py-3 rounded-r-lg text-black transition-colors duration-300 flex items-center justify-center">
                <RiSendPlaneLine className="text-lg" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-4">Subscribe to our newsletter for the latest updates</p>
            <div className="flex space-x-4">
              <a href="#"
              className="text-xl bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="GitHub">
                <TbBrandGithubFilled />
              </a>
              <a href="#"
              className="text-xl bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Twitter">
                <BsTwitter />
              </a>
              <a href="#"
                className="text-xl bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#"
              className="text-xl bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Instagram">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="mt-12 mb-6 border-t border-gray-700"></div>
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © 2025. All Rights Reserved.
            Copyright <span className="text-yellow-400 font-medium">TranspFlow</span>. Design By
            <span className="text-yellow-400 ml-1 hover:underline">Utkarsh Jha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;