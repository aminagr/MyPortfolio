

import Hero from '../../components/home/Hero';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Services from '../../components/services/Services';
import ProjectGlobal from '../../components/projects/ProjectsGlobal';

export default function Home() {
  return (
    <div>
      <Hero/>
    <Services/>
    <ProjectGlobal/>
    <Contact/>
    <About/>
    <Projects/>
    </div>
  );
}