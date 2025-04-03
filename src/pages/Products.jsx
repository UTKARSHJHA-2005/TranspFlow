// This the page where user can add product to blockchain.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link
import { web3, contract } from "../utils/web3"; // Web3 and Contract
import AOS from "aos" // Animations
import "aos/dist/aos.css";
import { ChevronDown, Upload, Menu } from "lucide-react"; // Icons
import { uploadToPinata } from "../utils/pinata"; // Pinata for Image
import logo from "../assets/logo.png" // Logo
import { toast, ToastContainer } from "react-toastify"; // Notifications

const AddProduct = () => {
    // AOS Animations
    useEffect(() => {
        AOS.init({ duration: 1000, })
    }, [])

    // Form State
    const [form, setForm] = useState({
        name: "",
        planningDate: "",
        manufacturingDate: "",
        manufacturerName: "",
        billingImageUrl: "",
        transportationDate: "",
        transporterName: "",
        transportImageUrl: "",
        distributionDate: "",
    });

    const [isOpen, setIsOpen] = useState(false); // Dropdown State
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu State

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
    const handleFileUpload = async (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const url = await uploadToPinata(file);
            if (url) {
                setForm((prev) => ({ ...prev, [field]: url }));
                toast.success("Image uploaded successfully!");
            } else {
                toast.error("Image upload failed.");
            }
        }
    };

    // Add Product
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accounts = await web3.eth.requestAccounts();
            await contract.methods
                .addProduct(
                    form.name,
                    form.planningDate,
                    form.manufacturingDate,
                    form.manufacturerName,
                    form.billingImageUrl,
                    form.transportationDate,
                    form.transporterName,
                    form.transportImageUrl,
                    form.distributionDate
                )
                .send({ from: accounts[0] });
            toast.success("Product added successfully!");
            // Reset form after successful submission
            setForm({
                name: "",
                planningDate: "",
                manufacturingDate: "",
                manufacturerName: "",
                billingImageUrl: "",
                transportationDate: "",
                transporterName: "",
                transportImageUrl: "",
                distributionDate: "",
            });
        } catch (error) {
            toast.error("Failed to add product: " + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Responsive Navbar */}
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
                    <button className="md:hidden text-gray-700 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div data-aos="flip-up" className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 bg-blue-50 border-b">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Product</h3>
                        <p className="mt-1 text-sm text-gray-500">Enter product details to track in blockchain</p>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Product Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                    <div className="mt-1">
                                        <input type="text" id="name"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="Enter product name" value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                </div>
                                {/* Planning Date */}
                                <div>
                                    <label htmlFor="planningDate" className="block text-sm font-medium text-gray-700">Planning Date</label>
                                    <div className="mt-1">
                                        <input type="date" id="planningDate"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            value={form.planningDate}
                                            onChange={(e) => setForm({ ...form, planningDate: e.target.value })} required />
                                    </div>
                                </div>
                                {/* Manufacturing Date */}
                                <div>
                                    <label htmlFor="manufacturingDate" className="block text-sm font-medium text-gray-700">Manufacturing Date</label>
                                    <div className="mt-1">
                                        <input type="date" id="manufacturingDate"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            value={form.manufacturingDate}
                                            onChange={(e) => setForm({ ...form, manufacturingDate: e.target.value })} required />
                                    </div>
                                </div>
                                {/* Manufacturer Name */}
                                <div>
                                    <label htmlFor="manufacturerName" className="block text-sm font-medium text-gray-700">Manufacturer Name</label>
                                    <div className="mt-1">
                                        <input type="text" id="manufacturerName"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="Enter manufacturer name" value={form.manufacturerName}
                                            onChange={(e) => setForm({ ...form, manufacturerName: e.target.value })} required />
                                    </div>
                                </div>
                                {/* Billing Image */}
                                <div>
                                    <label htmlFor="billingImage" className="block text-sm font-medium text-gray-700">Billing Image</label>
                                    <div className="mt-1 flex items-center">
                                        <label className="relative cursor-pointer bg-white rounded-md p-2 border border-gray-300 shadow-sm w-full flex items-center justify-center hover:bg-gray-50">
                                            <Upload className="h-5 w-5 text-gray-400 mr-2" />
                                            <span className="text-sm text-gray-600">Upload Bill</span>
                                            <input id="billingImage" type="file" className="sr-only"
                                                onChange={(e) => handleFileUpload(e, "billingImageUrl")} required={!form.billingImageUrl} />
                                        </label>
                                    </div>
                                    {form.billingImageUrl && (
                                        <p className="mt-2 text-xs text-green-600 truncate">File uploaded successfully</p>
                                    )}
                                </div>
                                {/* Transportation Date */}
                                <div>
                                    <label htmlFor="transportationDate" className="block text-sm font-medium text-gray-700">Transportation Date</label>
                                    <div className="mt-1">
                                        <input type="date" id="transportationDate"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            value={form.transportationDate} onChange={(e) => setForm({ ...form, transportationDate: e.target.value })}
                                            required />
                                    </div>
                                </div>
                                {/* Transporter Name */}
                                <div>
                                    <label htmlFor="transporterName" className="block text-sm font-medium text-gray-700">Transporter Name</label>
                                    <div className="mt-1">
                                        <input type="text" id="transporterName"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            placeholder="Enter transporter name" value={form.transporterName}
                                            onChange={(e) => setForm({ ...form, transporterName: e.target.value })} required />
                                    </div>
                                </div>
                                {/* Transportation Bill */}
                                <div>
                                    <label htmlFor="transportImage" className="block text-sm font-medium text-gray-700">Transportation Bill</label>
                                    <div className="mt-1 flex items-center">
                                        <label className="relative cursor-pointer bg-white rounded-md p-2 border border-gray-300 shadow-sm w-full flex items-center justify-center hover:bg-gray-50">
                                            <Upload className="h-5 w-5 text-gray-400 mr-2" />
                                            <span className="text-sm text-gray-600">Upload Transport Bill</span>
                                            <input id="transportImage" type="file" className="sr-only"
                                                onChange={(e) => handleFileUpload(e, "transportImageUrl")} required={!form.transportImageUrl} />
                                        </label>
                                    </div>
                                    {form.transportImageUrl && (
                                        <p className="mt-2 text-xs text-green-600 truncate">File uploaded successfully</p>
                                    )}
                                </div>
                                {/* Distribution Date */}
                                <div>
                                    <label htmlFor="distributionDate" className="block text-sm font-medium text-gray-700">Distribution Date</label>
                                    <div className="mt-1">
                                        <input type="date" id="distributionDate"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                                            value={form.distributionDate} onChange={(e) => setForm({ ...form, distributionDate: e.target.value })}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex justify-end">
                                    <button type="button"
                                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                        className="bg-blue-500 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;