// Need Component of the HomePage.
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react'; // Icons
import AOS from "aos" // Animations
import "aos/dist/aos.css"

export default function Need() {
    // AOS Animation
    useEffect(() => {
        AOS.init({ duration: 1000, });
    }, [])

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 text-white py-20 px-6">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-300"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-200"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-300"></div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                {/* Text Content */}
                <div data-aos="flip-left" className="md:w-1/2 lg:pr-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Everything <span className="relative inline-block">
                            <span className="relative z-10">you need</span>
                            <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-300 opacity-50 rounded-full"></span>
                        </span> in <br className="hidden md:block" /> one place
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-blue-100">
                        Our comprehensive platform provides end-to-end visibility and
                        control of your supply chain, allowing you to optimize processes
                        and drive sustainable growth.
                    </p>
                    {/* Features List */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {[
                            "Real-time data visualization",
                            "Ship to and from anywhere",
                            "100% Trusted & secure platform",
                            "REST API integration ready"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:bg-opacity-30 transition-all duration-300">
                                    <CheckCircle className="w-5 h-5 text-blue-100" />
                                </div>
                                <span className="text-blue-50 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2 mt-12 md:mt-0">
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-70"></div>
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-50"></div>
                        <div data-aos="flip-right" className="relative rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent pointer-events-none"></div>
                            <img
                            src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_difference-between-supply-chain-management-and-logistics-management.jpg"
                            alt="Supply Chain Management Dashboard" className="w-full object-cover"/>
                            {/* Stats overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <p className="text-xs text-blue-100">On-time Delivery</p>
                                    <p className="text-xl font-bold">98.8%</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                    <p className="text-xs text-blue-100">Cost Reduction</p>
                                    <p className="text-xl font-bold">32%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}