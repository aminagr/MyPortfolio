
//src/app/[lang]/home/page.js
"use client"; 
import React from 'react';
import Hero from '../../../components/home/Hero';
import Contact from '../../../components/contact/Contact';
import Services from '../../../components/services/Services';
import About from '../../../components/about/About';
import ProjectGlobal from '../../../components/projects/ProjectsGlobal';
import Marquee from '../../../components/home/Marquee';
import CallToAction from '../../../components/home/CallToAction';
import Blog from '../../../components/blog/Blog';
export default function Home() {
    return (
        <div>
            <Hero /> 
            <Services/>
            <ProjectGlobal/>
            <CallToAction/>
            <Contact/>
            <About/>
            <Blog/>
        </div>
    );
}
