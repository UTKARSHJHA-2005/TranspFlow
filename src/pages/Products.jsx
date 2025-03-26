import React, { useState, useEffect } from "react";
import Web3 from "web3";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import supply from "../utils/supply.json";

const CONTRACT_ADDRESS = "0x493B27c055B4e3389B1409232CDA0B29B053bDa5";

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    const [account, setAccount] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        planningDate: "",
        manufacturingDate: "",
        manufacturerName: "",
        manufacturingBill: "",
        transportationDate: "",
        transporterName: "",
        transportationBill: "",
        distributionDate: "",
    });

    useEffect(() => {
        loadBlockchain();
    }, []);

    const loadBlockchain = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        } else {
            alert("MetaMask is required!");
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loadBlockchain();

        if (!formData.name || !formData.planningDate || !formData.manufacturingDate || !formData.transportationDate || !formData.distributionDate || !formData.manufacturerName || !formData.transporterName) {
            alert("Please fill all required fields.");
            return;
        }

        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(supply, CONTRACT_ADDRESS);

        try {
            await contract.methods.addProduct(
                formData.name,
                formData.planningDate,
                formData.manufacturingDate,
                formData.manufacturerName,
                "No Bill", // Placeholder for billingImageHash
                formData.transportationDate,
                formData.transporterName,
                "No Bill", // Placeholder for transportImageHash
                formData.distributionDate
            ).send({ from: account });

            alert("Product Added!");
        } catch (error) {
            console.error("Error adding product:", error);
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
            <h2 className="text-xl font-bold mb-4">Add Product</h2>
            <p>Connected Account: {account}</p>

            <form onSubmit={handleSubmit} className="grid gap-4 p-4 border rounded shadow">
                <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
                <input type="date" name="planningDate" onChange={handleChange} required />
                <input type="date" name="manufacturingDate" onChange={handleChange} required />
                <input type="text" name="manufacturerName" placeholder="Manufacturer Name" onChange={handleChange} required />
                <input type="file" name="manufacturingBill" onChange={handleChange} />
                <input type="date" name="transportationDate" onChange={handleChange} required />
                <input type="text" name="transporterName" placeholder="Transporter Name" onChange={handleChange} required />
                <input type="file" name="transportationBill" onChange={handleChange} />
                <input type="date" name="distributionDate" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
            </form>
        </div>
    );
};

export default Products;
