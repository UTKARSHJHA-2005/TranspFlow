// The page where user can view the news.
import { useState, useEffect } from "react";
import AOS from "aos"; // Animations
import { ChevronDown, Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom";// Link
import logo from '../assets/logo.png';// Logo
import Footer from "../components/Footer" // Footer Component
import "aos/dist/aos.css";

// News Data- id, title, description, image, link, category
const newsData = [
  {
    id: 1,
    title: "Global Shipping Faces New Challenges",
    description: "Supply chain disruptions continue to affect global trade as major ports report delays.",
    image: "https://wareiq-prelogin.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/11/23124036/ABB_Decoded_EP21_2000x1125_20220914_jp2-1124x632.jpeg",
    link: "#",
    category: "Shipping"
  },
  {
    id: 2,
    title: "Rail Freight Sees Major Investment",
    description: "Governments worldwide are investing in rail infrastructure to boost logistics efficiency.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFumznD-pdhxifDk6VBQx1kH4NYTupjULa6w&s",
    link: "#",
    category: "Rail"
  },
  {
    id: 3,
    title: "Electric Trucks: The Future of Logistics?",
    description: "Major logistics companies are adopting electric trucks for a greener supply chain.",
    image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCvCgxBbM1qg/v1/-1x-1.webp",
    link: "#",
    category: "Road"
  },
  {
    id: 4,
    title: "Air Cargo Industry Expands Rapidly",
    description: "The demand for air freight services has surged due to global e-commerce growth.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/28/full/1709144675-3616.jpg?im=FeatureCrop,size=(826,465)",
    link: "#",
    category: "Air"
  },
  {
    id: 5,
    title: "Automation in Warehousing Rises",
    description: "AI and robotics are transforming warehouse operations for efficiency and accuracy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuV_keYGjCSaDnVXCdY6dULigjL5o0aK24gA&s",
    link: "#",
    category: "Technology"
  }
];

export default function LogisticsNews() {
  const [loading, setLoading] = useState(true); // Loader State
  const [activeCategory, setActiveCategory] = useState("All"); // Active Category State
  const categories = ["All", ...new Set(newsData.map(item => item.category))]; // Category
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

  // Close dropdown when clicking outside with AOS Animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Filter News by Category
  const filteredNews = activeCategory === "All"
    ? newsData
    : newsData.filter(news => news.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen overflow-x-hidden">
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
          <button className="md:hidden text-gray-700 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg py-4 px-6 absolute w-full z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
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
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
               <span>Contact Us</span>
               <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-delay="200">
          {categories.map(category => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}>
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Featured Story */}
      <section className="container mx-auto px-4 mb-16">
        <div className="relative rounded-xl overflow-hidden shadow-2xl" data-aos="zoom-in">
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-425106,resizemode-75,msid-102297460/small-biz/trade/exports/insights/shipping-companies-are-on-a-spending-spree.jpg"
            alt="Featured News" className="w-full h-[300px] sm:h-[400px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6 sm:p-10">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block w-fit mb-4">
              Featured Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              The Future of Global Shipping in the Digital Age
            </h2>
            <p className="text-gray-200 max-w-2xl mb-4 text-sm sm:text-base">
              Discover how AI, blockchain, and IoT are transforming international logistics networks and reshaping the future of global trade and supply chains.
            </p>
            <a href="#"
              className="inline-flex items-center px-5 py-2.5 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition shadow-lg w-fit">
              Read Full Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* News Cards */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest {activeCategory !== "All" ? activeCategory : ""} News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredNews.map((news, index) => (
            <div key={news.id} data-aos="fade-up" data-aos-delay={index * 100}>
              {loading ? (
                <div className="w-full h-96 bg-gray-200 rounded-xl animate-pulse">
                  <div className="h-1/2 bg-gray-300 rounded-t-xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3 mt-6"></div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-full flex flex-col">
                  <div className="relative">
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover transition duration-300 hover:scale-105" />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {news.description}
                    </p>
                    <a href={news.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition group">
                      Read More
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
