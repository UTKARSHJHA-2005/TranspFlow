// Feature Component of HomePage.
import React, { useEffect } from "react";
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

export default function Feature() {
  // AOS Animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-hidden">
      {/* Analytics Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section - On mobile it shows below the text */}
            <div data-aos="fade-right" className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative overflow-hidden">
                {/* Main image with shadow and border */}
                <img
                  src="https://meadhunt.com/wp-content/uploads/future-of-transpo-1200x675-1.jpg"
                  alt="Analytics Dashboard"
                  className="w-full max-w-full h-auto rounded-xl shadow-2xl border-2 border-blue-400/20 transform transition-transform duration-500 hover:scale-105 object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/20 rounded-lg hidden md:block" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/20 rounded-full hidden md:block" />
              </div>
            </div>
            {/* Text Section - On mobile it shows above the image */}
            <div data-aos="fade-left" className="w-full md:w-1/2 order-1 md:order-2">
              {/* Pill Badge */}
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
                <span className="text-blue-200 font-medium text-sm">Advanced Analytics</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Visibility, Analytics, Intelligence
              </h2>
              <p className="text-blue-100 mt-6 text-lg leading-relaxed">
                Get unprecedented visibility into your supply chain with our intelligent analytics platform. Make data-driven decisions and optimize your operations with real-time insights.
              </p>
              {/* Feature List */}
              <div className="mt-8 space-y-4">
                {["Real-time tracking", "Predictive analytics", "Custom reports"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="mt-10">
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-colors duration-300">
                  Explore Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
