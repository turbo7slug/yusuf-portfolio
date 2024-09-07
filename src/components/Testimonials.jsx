import { FaStar } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'Yusuf delivered an outstanding project on time with excellent quality.', rating: 5 },
  { name: 'Jane Smith', feedback: 'Professional, responsive, and skilled. Highly recommend working with Yusuf!', rating: 4 },
  { name: 'Samuel Lee', feedback: 'A great developer to work with, always focused on delivering the best results.', rating: 5 }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-dark text-center">
      <h2 className="text-3xl font-bold text-light mb-12 transition-transform duration-300 hover:scale-105">Testimonials</h2>
      <div className="max-w-3xl mx-auto p-6 bg-cardBg rounded-md shadow-soft transition-transform duration-300 transform hover:scale-105">
        <p className="text-lg font-semibold text-light mb-4">&quot;{testimonials[currentTestimonial].feedback}&quot;</p>
        <p className="text-muted mb-4">- {testimonials[currentTestimonial].name}</p>
        <div className="flex justify-center">
          {[...Array(testimonials[currentTestimonial].rating)].map((_, idx) => (
            <FaStar key={idx} className="text-yellow-400" />
          ))}
        </div>
        {/* <a href="#contact" className="relative inline-block px-6 py-3 rounded-md group overflow-hidden mt-4">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative text-white group-hover:text-light">Contact Me</span>
        </a> */}
      </div>
    </section>
  );
};

export default Testimonials;
