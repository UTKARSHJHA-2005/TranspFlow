// The page where the products are viewed and managed.
import React, { useEffect, useState } from "react";
import { web3, contract } from "../utils/web3"; // Web3 and Contract
import { Link } from "react-router-dom"; // Link
import AOS from "aos" // Animations
import "aos/dist/aos.css";
import { ChevronDown, Trash2, Eye, Calendar, User, Truck, Box, Menu,X } from "lucide-react"; // Icons
import { toast, ToastContainer } from "react-toastify"; // Notifications
import logo from "../assets/logo.png"; // Logo

const ViewProducts = () => {
    const [products, setProducts] = useState([]); // Product List
    const [isOpen, setIsOpen] = useState(false); // Dropdown State
    const [loading, setLoading] = useState(true); // Loading State
    const [expandedProduct, setExpandedProduct] = useState(null); // Expanded Product
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu State

    // AOS Animation
    useEffect(() => {
        AOS.init({ duration: 1000, })
    }, [])

    // Dropdown Menu
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    // Mobile Menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    // Toggle Product Details
    const toggleProductDetails = (id) => {
        if (expandedProduct === id) {
            setExpandedProduct(null);
        } else {
            setExpandedProduct(id);
        }
    };

    // Fetch Products from Blockchain
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productCount = await contract.methods.productCount().call();
                const items = [];
                for (let i = 1; i <= productCount; i++) {
                    const product = await contract.methods.products(i).call();
                    items.push(product);
                }
                setProducts(items);
            } catch (error) {
                toast.error("Failed to fetch products: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Delete Product from Blockchain
    const deleteProduct = async (id) => {
        try {
            const accounts = await web3.eth.requestAccounts();
            await contract.methods.deleteProduct(id).send({ from: accounts[0] });
            toast.success("Product deleted successfully!");
            setProducts(products.filter((p) => p.id !== id));
        } catch (error) {
            toast.error("Failed to delete product: " + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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
                        <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium"
                            onClick={toggleDropdown}>Products
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
                    <li className="hover:text-blue-600 cursor-pointer py-2 border-b border-gray-100 transition-colors duration-200">
                        News
                    </li>
                    <li className="py-2">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
                            <span>Login</span>
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div data-aos="flip-down" className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 bg-blue-50 border-b">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Product Listings</h3>
                        <p className="mt-1 text-sm text-gray-500">View and manage your blockchain-tracked products</p>
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        {loading ? (
                            <div className="flex justify-center items-center py-10">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-10">
                                <Box className="mx-auto h-12 w-12 text-gray-400" />
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No products</h3>
                                <p className="mt-1 text-sm text-gray-500">Get started by creating a new product.</p>
                                <div className="mt-6">
                                    <Link to="/product">
                                        <button type="button"
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <Box className="-ml-1 mr-2 h-5 w-5" />
                                            Add Product
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                                        <div className="px-4 py-5 sm:px-6 flex justify-between items-center cursor-pointer bg-gray-50"
                                            onClick={() => toggleProductDetails(product.id)}>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                                <p className="text-sm text-gray-500">ID: {product.id}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteProduct(product.id);
                                                }} className="text-red-500 hover:text-red-700 mr-4 p-1">
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                                <ChevronDown
                                                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${expandedProduct === product.id ? "rotate-180" : ""}`} />
                                            </div>
                                        </div>
                                        {expandedProduct === product.id && (
                                            <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
                                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                                                    {/* Product Details */}
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Planning Date</h4>
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.planningDate || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Manufacturing Date</h4>
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.manufacturingDate || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Manufacturer</h4>
                                                        <div className="flex items-center">
                                                            <User className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.manufacturerName || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Transportation Date</h4>
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.transportationDate || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Transporter</h4>
                                                        <div className="flex items-center">
                                                            <Truck className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.transporterName || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-medium text-gray-500">Distribution Date</h4>
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                                                            <p>{product.distributionDate || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Document Images */}
                                                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-3">Billing Document</h4>
                                                        {product.billingImageUrl ? (
                                                            <div className="relative border rounded-lg overflow-hidden">
                                                                <img src={product.billingImageUrl} alt="Billing Document"
                                                                    className="w-full object-cover h-48" />
                                                                <a href={product.billingImageUrl} target="_blank" rel="noopener noreferrer"
                                                                    className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600">
                                                                    <Eye className="h-4 w-4" />
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <div className="border rounded-lg p-4 text-center text-gray-500 bg-gray-50">
                                                                No document available
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500 mb-3">Transportation Document</h4>
                                                        {product.transportImageUrl ? (
                                                            <div className="relative border rounded-lg overflow-hidden">
                                                                <img src={product.transportImageUrl} alt="Transportation Document"
                                                                    className="w-full object-cover h-48" />
                                                                <a href={product.transportImageUrl} target="_blank" rel="noopener noreferrer"
                                                                    className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600">
                                                                    <Eye className="h-4 w-4" />
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <div className="border rounded-lg p-4 text-center text-gray-500 bg-gray-50">
                                                                No document available
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ViewProducts;
