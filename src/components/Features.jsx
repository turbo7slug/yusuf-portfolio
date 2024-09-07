import { FaCode, FaServer, FaPaintBrush } from 'react-icons/fa'; // Example icons

const features = [
  { title: 'Web Development', description: 'Building responsive and performant web applications.', icon: <FaCode size={50} /> },
  { title: 'Backend Services', description: 'Robust backend systems with Node.js and MongoDB.', icon: <FaServer size={50} /> },
  { title: 'UI/UX Design', description: 'Designing intuitive user experiences with modern UI frameworks.', icon: <FaPaintBrush size={50} /> }
];

const Features = () => (
  <section id="features" className="py-20 bg-dark text-center">
    <h2 className="text-3xl font-bold text-light mb-12 transition-transform duration-300 hover:scale-105">What I Do</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-cardBg rounded-md shadow-soft hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          <div className="mb-4 text-accent flex justify-center">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-light mb-4">{feature.title}</h3>
          <p className="text-muted">{feature.description}</p>
          <a href="#contact" className="relative inline-block px-6 py-3 rounded-md group overflow-hidden mt-4">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative text-white group-hover:text-light">Learn More</span>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
