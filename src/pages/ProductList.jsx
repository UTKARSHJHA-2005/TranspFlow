import React, { useState, useEffect } from "react";
import Web3 from "web3";
import supply from "../utils/supply.json"; // Ensure ABI is updated

const CONTRACT_ADDRESS = "0x493B27c055B4e3389B1409232CDA0B29B053bDa5";

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask!");

            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(supply, CONTRACT_ADDRESS);

            const productCount = await contract.methods.productCount().call();
            let productList = [];

            for (let i = 1; i <= productCount; i++) {
                const product = await contract.methods.getProduct(i).call();

                // Ensure product structure is correctly parsed
                productList.push({
                    name: product.name,
                    planningDate: product.details.planningDate,
                    manufacturingDate: product.details.manufacturingDate,
                    manufacturerName: product.details.manufacturedBySelf
                        ? "Self"
                        : product.details.manufacturerName,
                    transportationDate: product.details.transportationDate,
                    transporterName: product.details.transportedBySelf
                        ? "Self"
                        : product.details.transporterName,
                    distributionDate: product.details.distributionDate,
                });
            }

            setProducts(productList);
        } catch (error) {
            console.error("❌ Error loading products:", error);
        }
    };

    return (
        <div>
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
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
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
            <h2 className="text-xl font-bold mb-4">View Products</h2>
            <table className="w-full border mt-2">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Planning Date</th>
                        <th>Manufacturing Date</th>
                        <th>Manufacturer</th>
                        <th>Transportation Date</th>
                        <th>Transporter</th>
                        <th>Distribution Date</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index) => (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>{p.planningDate}</td>
                            <td>{p.manufacturingDate}</td>
                            <td>{p.manufacturerName}</td>
                            <td>{p.transportationDate}</td>
                            <td>{p.transporterName}</td>
                            <td>{p.distributionDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
