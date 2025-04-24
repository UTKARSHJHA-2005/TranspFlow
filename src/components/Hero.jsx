// Hero Component of the HomePage.
import React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom"; // Link
import AOS from "aos"; // Animations
import "aos/dist/aos.css";
import logo from '../assets/logo.png'; // Logo

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false); // Dropdown State
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu State

    // AOS Animation
    useEffect(()=>{
        AOS.init({duration: 1000,})
    },[])

    // Dropdown Menu
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    // Mobile Menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-white min-h-screen overflow-auto">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
                <div className="flex items-center">
                    <img src={logo} alt="TranspFlow Logo" className="h-8 sm:h-10 mr-3 transition-transform duration-300 hover:scale-105" />
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">TranspFlow</span>
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <Link to="/">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </Link>
                    <li className="relative" onClick={(e) => e.stopPropagation()}>
                        <button
                        className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium"
                        onClick={toggleDropdown}>
                            Products
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {/* Dropdown Menu */}
                        {isOpen && (
                            <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-md py-2 z-20 transform opacity-100 scale-100 transition-all duration-200 origin-top-left">
                                <Link to="/product">
                                    <li className="px-5 py-2 hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                        Add Product
                                    </li>
                                </Link>
                                <Link to="/list">
                                    <li className="px-5 py-2 hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Product Details
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </li>
                    <Link to="/news">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 relative group">
                            News
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </Link>
                </ul>
                <div className="flex items-center space-x-5">
                    <Link to="/contact">
                        <button className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:translate-y-0.5 transition duration-300 text-sm font-medium">
                            Contact Us
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    {/* Mobile Menu Button */}
                    <button
                    className="md:hidden text-gray-700 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200" 
                    onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div
            className={`md:hidden bg-white shadow-lg py-4 px-6 absolute w-full z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <ul className="space-y-4 text-gray-700">
                    <Link to="/">
                        <li className="hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100 transition-colors duration-200">
                            Home
                        </li>
                    </Link>
                    <li className="border-b border-gray-100">
                        <div className="flex items-center justify-between hover:text-blue-600 cursor-pointer py-2 transition-colors duration-200"
                        onClick={toggleDropdown}>
                            <span>Products</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </div>
                        <div
                        className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-2 mb-2" : "max-h-0 opacity-0"}`}>
                            <ul className="border-l-2 border-blue-500 space-y-3">
                                <Link to="/product">
                                    <li className="hover:text-blue-600 cursor-pointer py-1 pl-4 transition-colors duration-200">
                                        Add Product
                                    </li>
                                </Link>
                                <Link to="/list">
                                    <li className="hover:text-blue-600 cursor-pointer py-1 pl-4 transition-colors duration-200">
                                        Product Details
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </li>
                     <Link to="/news">
                        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 relative group">
                            News
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </li>
                    </Link>
                    <li className="py-2">
                        <Link to="/contact">
                          <button className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:translate-y-0.5 transition duration-300 text-sm font-medium">
                              Contact Us
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </Link>
                    </li>
                </ul>
            </div>
            {/* Hero Section */}
            <div className="container mx-auto overflow-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 sm:py-16 md:py-24 mt-2 md:mt-4">
                {/* Text Section */}
                <div data-aos="fade-up" className="md:w-1/2 text-center md:text-left md:pr-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Single platform for your
                        <div className="mt-1">
                            <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                                global supply chain.
                            </span>
                        </div>
                    </h1>
                    <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a looking at its layout.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
                        <Link to="/product">
                            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:translate-y-0.5 transition duration-300 text-base font-medium flex items-center justify-center">
                                Lets Go
                            </button>
                        </Link>
                        <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 text-base font-medium flex items-center justify-center group">
                            Learn More
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Stats - New addition */}
                    <div data-aos="flip-up" className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
                        <div className="text-center p-3 bg-white bg-opacity-70 rounded-lg shadow-sm">
                            <div className="text-blue-600 font-bold text-xl sm:text-2xl">15k+</div>
                            <div className="text-gray-600 text-xs sm:text-sm mt-1">Users</div>
                        </div>
                        <div className="text-center p-3 bg-white bg-opacity-70 rounded-lg shadow-sm">
                            <div className="text-blue-600 font-bold text-xl sm:text-2xl">150+</div>
                            <div className="text-gray-600 text-xs sm:text-sm mt-1">Countries</div>
                        </div>
                        <div className="text-center p-3 bg-white bg-opacity-70 rounded-lg shadow-sm">
                            <div className="text-blue-600 font-bold text-xl sm:text-2xl">85%</div>
                            <div className="text-gray-600 text-xs sm:text-sm mt-1">Efficiency</div>
                        </div>
                    </div>
                </div>
                {/* Image Section */}
                <div data-aos="flip-left" className="md:w-1/2 mt-12 md:mt-0 px-4 sm:px-0">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full z-0 hidden sm:block"></div>
                        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-green-100 rounded-full z-0 hidden sm:block"></div>
                        {/* Main image with overlay */}
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-blue-100">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-green-800/20 z-10"></div>
                            <img
                            src="https://media.istockphoto.com/id/83994439/photo/bow-view-of-loaded-cargo-ship-sailing-out-of-port.jpg?s=612x612&w=0&k=20&c=LIA7PaJ1UB3I2Ylkn-UXwjChyC4NB_u7pVookxzuEh4="
                            alt="Supply Chain Ship" className="w-full h-auto object-cover rounded-xl" loading="lazy"/>
                        </div>
                        {/* Floating badge - new addition */}
                        <div className="absolute -bottom-4 right-8 bg-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Live Tracking</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
