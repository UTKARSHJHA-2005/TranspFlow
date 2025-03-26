import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
                <div className="flex items-center">
                    <img src={logo} alt="Stockpile Logo" className="h-8 mr-2" />
                    <span className="text-xl font-bold text-gray-700">TranspFlow</span>
                </div>
                <ul className="hidden md:flex space-x-6 text-gray-600">
                    <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
                    <li className="relative">
                        <button
                            className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
                            onClick={toggleDropdown}>
                            Products
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
                        </button>
                        {/* Dropdown Menu */}
                        {isOpen && (
                            <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md border rounded-md py-2">
                                <Link to="/product"><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Add Product</li></Link>
                                <Link to="/list"><li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Product Details</li></Link>
                                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Track Your Product</li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">News</li>
                </ul>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Contact Us</button>
            </nav>
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Single platform for your <span className="text-blue-600">global supply chain.</span>
                    </h1>
                    <p className="text-gray-600 mt-4">
                        It is a long established fact that a reader will be distracted by the readable content of a looking at its layout.
                    </p>
                    <div className="mt-6 space-x-4">
                        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
                            Contact Us
                        </button>
                        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
                            Learn More →
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="https://media.istockphoto.com/id/83994439/photo/bow-view-of-loaded-cargo-ship-sailing-out-of-port.jpg?s=612x612&w=0&k=20&c=LIA7PaJ1UB3I2Ylkn-UXwjChyC4NB_u7pVookxzuEh4=" alt="Supply Chain Ship" className="w-full" />
                </div>
            </div>
        </div>
    );
}
