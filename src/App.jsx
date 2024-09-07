import Header from './components/Header';
import Hero from './components/Hero/Hero'
import Features from './components/Features';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import './styles/styles.css';


function App() {
  return (
    <div className="bg-dark text-light">
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Testimonials/>
      <Contact />
    </div>
  );
}

export default App;
