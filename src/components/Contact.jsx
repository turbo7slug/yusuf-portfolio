import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-20 bg-cardBg text-center">
    <h2 className="text-3xl font-bold text-light mb-8 transition-transform duration-300 hover:scale-105">Contact Me</h2>
    <p className="text-lg text-muted mb-6 transition-opacity duration-300 hover:opacity-80">
      Feel free to reach out for collaborations or just to say hello!
    </p>

    <a href="mailto:mohdyusufhesam@gmail.com" className="relative inline-block px-6 py-3 rounded-md group overflow-hidden mt-4">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      <span className="relative text-white group-hover:text-light">Email Me</span>
    </a>

   
    <div className="mt-8 flex justify-center space-x-6">
      <a
        href="https://linkedin.com/in/mohd-yusuf-hesam-500a2b233"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block group text-light transition"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        <FaLinkedin size={30} className="relative group-hover:text-white" />
      </a>
      <a
        href="https://twitter.com/yourtwitterhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block group text-light transition"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        <FaTwitter size={30} className="relative group-hover:text-white" />
      </a>
      <a
        href="https://github.com/turbo7slug"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block group text-light transition"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
        <FaGithub size={30} className="relative group-hover:text-white" />
      </a>
    </div>
  </section>
);

export default Contact;
