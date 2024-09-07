import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-dark text-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 z-0"></div>

      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-light mb-4 transition-transform duration-300 hover:scale-105">Hi, I'm Yusuf</h1>
        <p className="text-xl text-muted mb-8 transition-opacity duration-300 hover:opacity-70">Full Stack Developer creating modern web applications.</p>

        
        <a href="#contact" className="relative inline-block px-6 py-3 rounded-md group overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative text-white group-hover:text-light">Get In Touch</span>
        </a>

        {/* GIF */}
        <div className="mt-8 flex justify-center">
          <img
            src="https://media.giphy.com/media/26xBtnTEjWcGtceiY/giphy.gif"
            alt="Interactive Logo"
            className="w-48 h-48 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
