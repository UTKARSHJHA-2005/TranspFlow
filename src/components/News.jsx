// News Component of the HomePage.
import React from "react";
import { useState, useEffect } from "react";
import { X, ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"; // Icons
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

// News Data- title, description, image, date, readTime, category
const newsData = [
  {
    title: "Global Shipping Updates",
    description: "The shipping industry faces new challenges due to increased fuel prices and environmental regulations. Companies are adapting with innovative solutions to maintain efficiency while reducing their carbon footprint.",
    image: "https://harris-sliwoski.com/wp-content/uploads/Cargo-shipping-business-1024x682.jpg",
    date: "March 24, 2025",
    readTime: "5 min read",
    category: "Maritime"
  },
  {
    title: "Air Freight Demand Surges",
    description: "Air cargo services experience high demand amid global supply chain shifts. Major carriers report capacity constraints as businesses prioritize speed over cost for critical shipments.",
    image: "https://forto.com/wp-content/uploads/2024/12/basics-in-air-freight.png",
    date: "March 20, 2025",
    readTime: "4 min read",
    category: "Air"
  },
  {
    title: "Maritime Logistics Trends",
    description: "Technological innovations are transforming maritime logistics with autonomous vessels and AI-powered route optimization becoming mainstream. Industry leaders are investing heavily in digitalization.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRzVtJiPBlOcBXCbiaKB9-S6uBALdUDynmA&s",
    date: "March 18, 2025",
    readTime: "6 min read",
    category: "Maritime"
  },
  {
    title: "Rail Freight Developments",
    description: "Rail transport sees growth with sustainable logistics solutions as companies seek to reduce their carbon footprint. New high-speed freight corridors are opening across major routes.",
    image: "https://www.worldbank.org/content/dam/wbr/TAI/Seibu_Railway_30000.jpg",
    date: "March 15, 2025",
    readTime: "3 min read",
    category: "Rail"
  },
  {
    title: "Last-Mile Delivery Revolution",
    description: "Electric vehicles and drones are revolutionizing last-mile delivery operations, with major logistics providers reporting significant improvements in delivery times and customer satisfaction.",
    image: "https://www.manufacturingtodayindia.com/cloud/2024/09/29/nhXC8RIU-ev-market-1200x675.jpg",
    date: "March 12, 2025",
    readTime: "4 min read",
    category: "Urban"
  },
];

export default function News() {
  const [currentSlide, setCurrentSlide] = useState(0); // State for slides
  const [isAnimating, setIsAnimating] = useState(false); // Stae for slide animation
  
  // AOS Animations
  useEffect(()=>{
    AOS.init({duration: 1000,})
  })

  // Calculate visible slides based on screen width
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };
  
  const [visibleSlides, setVisibleSlides] = useState(3); // Stae for number of slide to be visible at a time
  
  // Update visible slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };
    // Set initial value
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Slide Controls for next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => 
      prev + visibleSlides >= newsData.length ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Slide Controls for previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => 
      prev === 0 
        ? Math.max(0, newsData.length - visibleSlides) 
        : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Latest Logistics Industry News
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the most recent developments, trends, and innovations shaping the global logistics landscape.
          </p>
        </div>
        {/* News Carousel with Controls */}
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10">
            <button onClick={prevSlide}
            className="bg-white shadow-lg rounded-full p-2 md:p-3 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Previous slide">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10">
            <button onClick={nextSlide}
            className="bg-white shadow-lg rounded-full p-2 md:p-3 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Next slide">
              <ChevronRight size={24} />
            </button>
          </div>
          {/* News Grid (Horizontal Scrolling) */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}>
              {newsData.map((news, index) => (
                <div data-aos="flip-up" key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {news.category}
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{news.date}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{news.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.description}</p>
                      
                      <div className="mt-auto">
                        <button className="flex items-center text-blue-600 font-medium group">
                          Read more 
                          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>  
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(newsData.length / visibleSlides))].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / visibleSlides) === index 
                    ? "w-8 bg-blue-600" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index * visibleSlides)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}           