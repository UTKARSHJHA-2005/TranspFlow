// Why Component of the HomePage.
import React, { useEffect } from 'react';
import Aos from 'aos'; // Animations
import 'aos/dist/aos.css';

export default function Why() {
    // AOS Animations
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    // Features data- icon, title, color, description
    const features = [
        { 
            icon: "🚀", 
            title: "Faster Shipping", 
            color: "from-pink-500 to-red-500",
            description: "Deliver your products to customers in record time with our optimized logistics network spanning across the globe."
        },
        { 
            icon: "📊", 
            title: "Real-Time Analytics", 
            color: "from-purple-500 to-indigo-600",
            description: "Make data-driven decisions with comprehensive analytics and insights into your supply chain performance."
        },
        { 
            icon: "🎁", 
            title: "Custom Packaging", 
            color: "from-orange-400 to-amber-500",
            description: "Create memorable unboxing experiences with sustainable packaging solutions tailored to your brand identity."
        },
        { 
            icon: "📦", 
            title: "Automated Fulfillment", 
            color: "from-blue-500 to-cyan-500",
            description: "Streamline your order processing with AI-powered fulfillment systems that reduce errors and increase efficiency."
        },
        { 
            icon: "🛡️", 
            title: "Private Labeling", 
            color: "from-green-500 to-emerald-500",
            description: "Build brand recognition with customized private labeling services that highlight your unique value proposition."
        },
        { 
            icon: "💖", 
            title: "World Class Support", 
            color: "from-pink-400 to-rose-400",
            description: "Access 24/7 dedicated customer support from logistics experts who understand your business needs."
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gray-50">
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Advantages</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose <span className="relative inline-block">
                            <span className="relative z-10">TranspFlow</span>
                            <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-75 rounded-full"></span>
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        We provide the most advanced blockchain-based tracking and detailed analytics system 
                        to optimize your supply chain operations.
                    </p>
                </div>
                {/* Features Grid */}
                <div data-aos="flip-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {features.map((feature, index) => (
                        <div key={index} 
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                            <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="ml-4 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="mt-6 flex justify-end">
                                    <button className="text-blue-600 font-medium flex items-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}