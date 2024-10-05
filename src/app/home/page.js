

import Hero from '../../components/home/Hero';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Services from '../../components/services/Services';


export default function Home() {
  return (
    <div>
      <Hero/>
    <Services/>
    <Contact/>
    <About/>
    <Projects/>
    </div>
  );
}