

import Hero from '../../components/home/Hero';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Services from '../../components/services/Services';
import ProjectGlobal from '../../components/projects/ProjectsGlobal';
import Marquee from '../../components/home/Marquee';
import CallToAction from '../../components/home/CallToAction';
export default function Home() {
  return (
    <div>
      <Hero/>
    <Services/>

    <ProjectGlobal/>
    <CallToAction/>
    <Contact/>
    <About/>
    <Projects/>
    </div>
  );
}