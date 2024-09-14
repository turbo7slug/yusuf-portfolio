import React, { useState, useEffect } from 'react';

const projects = [
  { title: 'Real Estate App', description: 'A real estate management app built with MERN stack.', image: '/real_estate.png', link: 'https://mesa-verde-real-estate.vercel.app/' },
  { title: 'Prompt Hub', description: 'A Next JS platform to share your AI prompts', image: '/prompt_hub.png', link: 'https://prompt-hub-rust.vercel.app/' },
  { title: 'YT-Playlist duration calculator', description: 'Get insights into youtube playlist durations', image: '/yt_playlist.png', link: 'https://yt-playlist-length-eta.vercel.app/' },
  { title: '2048 Puzzle Game', description: 'A clone of the 2048 puzzle game.', image: '/2048.png', link: 'https://turbo7slug.github.io/2048-puzzleGame/' },
  { title: 'E-Commerce Website', description: 'An online store built with Django.', image: 'https://via.placeholder.com/600x400', link: 'https://github.com/user/ecommerce-store' },
  { title: 'Life Tracker', description: 'Visualize your lifespan ', image: '/life.png', link: 'https://life-tracker-eight.vercel.app/' },
  { title: 'Chat Application', description: 'A real-time chat app using Socket.io.', image: 'https://via.placeholder.com/600x400', link: 'https://github.com/user/chat-application' },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsToShow, setProjectsToShow] = useState(window.innerWidth < 768 ? 1 : 3);

  const totalProjects = projects.length;

  useEffect(() => {
    const handleResize = () => {
      setProjectsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= totalProjects - projectsToShow + 1) {
      setCurrentIndex(0);
    }
  }, [projectsToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalProjects - projectsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalProjects - projectsToShow + 1)) % (totalProjects - projectsToShow + 1));
  };

  return (
    <section id="projects" className="py-20 bg-dark text-center">
      <h2 className="text-3xl font-bold text-light mb-12 transition-transform duration-300 hover:scale-105">Projects</h2>
      <div className="relative max-w-6xl mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / projectsToShow)}%)` }}>
            {projects.concat(projects.slice(0, projectsToShow)).map((project, index) => (
              <div key={index} className={`flex-none ${window.innerWidth < 768 ? 'w-full' : 'w-1/3'} px-4`}>
                <div className="p-6 bg-cardBg rounded-md shadow-soft hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full object-cover h-48 transition-transform duration-300 transform hover:scale-110" />
                  <h3 className="text-xl font-semibold text-light mb-2">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative inline-block px-6 py-3 rounded-md group overflow-hidden mt-4">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative text-white group-hover:text-light">View Project</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-light text-dark rounded-full p-2 hover:bg-accent transition-transform duration-300">
          &lt;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-light text-dark rounded-full p-2 hover:bg-accent transition-transform duration-300">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
