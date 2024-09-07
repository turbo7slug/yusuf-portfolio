import React from 'react';

const experiences = [
  {
    title: "ML Intern at IIITDM",
    company: "IIITDM Kancheepuram",
    location: "Chennai, India",
    date: "May 2024 - July 2024",
    description: "Worked under Prof. S. Raghavan on predicting and classifying server loads. Developed and implemented machine learning models to forecast resource requirements."
  },
  {
    title: "Web Dev Intern at its 12 GiftWorld",
    company: "its12 GiftWorld",
    location: "Remote",
    date: "August 2024 - Present",
    description: "Currently working at an e-commerce startup, focusing on web development. Involved in building and maintaining features for the online gifting platform using NextJS."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark text-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-300 z-0"></div> {/* Vertical line */}
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-16`}>
              {/* Card Container */}
              <div className={`relative ${index % 2 === 0 ? "ml-12" : "mr-12"} w-80 bg-cardBg rounded-lg p-6 shadow-soft hover:shadow-lg transition-transform duration-300 transform hover:scale-105`}>
                {/* Dot */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index === 0 ? "left-[calc(100%+1rem)]" : index % 2 === 0 ? "left-[-1.5rem]" : "right-[calc(100%+1rem)]"} w-4 h-4 bg-purple-500 rounded-full z-10 hidden sm:block`} />
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <h4 className="text-md font-medium text-gray-400 mb-2">{exp.company} | {exp.location}</h4>
                <p className="text-muted mb-4">{exp.date}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
