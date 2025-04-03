// This is the page where the use ask the query.
import React, { useEffect } from "react";
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

// Star Rating Component
const StarRating = () => (
  <div className="flex items-center">
    {Array(5)
      .fill(null)
      .map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
  </div>
);

// Testimonial Component
const Testimonial = () => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm" data-aos="fade-up" data-aos-duration="800">
    <StarRating />
    <blockquote className="mt-4 text-lg text-white">
      "It was a great experience with TranspFlow as they securely stored my product details."
    </blockquote>
    <div className="flex items-center mt-6">
      <div className="w-12 h-12 rounded-full ring-2 ring-orange-400 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Bob Brown" className="w-full h-full object-cover"/>
      </div>
      <div className="ml-4">
        <p className="text-base font-semibold text-white">Bob Brown</p>
        <p className="text-sm text-orange-300">CEO of UI</p>
      </div>
    </div>
  </div>
);

// Form Component
const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white/95 p-8 rounded-xl shadow-xl" data-aos="fade-left" data-aos-duration="1000">
      <div data-aos="fade-up" className="inline-flex items-center px-3 py-1.5 bg-orange-100 rounded-full mb-6">
        <span className="text-orange-700 text-sm font-medium">Get in Touch</span>
      </div>
      <h3 className="text-3xl font-bold text-gray-900">Get Your Answers</h3>
      <p className="mt-3 text-gray-600">
        Having questions about our services? We're here to help.
      </p>
      <form data-aos="fade-up" className="mt-8 space-y-5">
        {["name", "email"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{`Your ${field}`}</label>
            <input type={field} name={field} placeholder={`Enter your ${field}`} className="w-full px-4 py-3.5 bg-white/95 border rounded-lg focus:ring-2 focus:ring-orange-500 transition" data-aos="zoom-in" data-aos-duration="800"/>
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Query
          </label>
          <textarea name="query" placeholder="Tell us what you need help with" className="w-full px-4 py-3.5 bg-white/95 border rounded-lg focus:ring-2 focus:ring-orange-500 transition resize-y" rows="4" data-aos="zoom-in"
            data-aos-duration="800"></textarea>
        </div>
        <button type="submit"
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700">
          Send
        </button>
      </form>
    </div>
  );
};

// Contact Component
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-6xl px-4 mx-auto grid lg:grid-cols-2 gap-12 relative">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-5xl font-bold text-white">
            It's time to store your space safely!
          </h2>
          <p className="mt-5 text-lg text-gray-300">
            Use our services and start storing product details.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-12">
            {[
              "Email: contact@transpflow.com",
              "Phone: +1 (555) 123-4567",
              "Office: San Francisco, CA",
              "Hours: Mon-Fri: 9am - 6pm",
            ].map((item, i) => (
              <p key={i} className="text-base text-white">
                <span className="text-orange-400 font-medium">
                  {item.split(":")[0]}
                </span>
                : {item.split(":")[1]}
              </p>
            ))}
          </div>
          {/* Testimonial Section */}
          <div className="hidden lg:block mt-16">
            <Testimonial />
          </div>
        </div>
        {/* Form Section */}
        <Form />
        {/* Testimonial Section on Mobile */}
        <div className="lg:hidden">
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Contact;
