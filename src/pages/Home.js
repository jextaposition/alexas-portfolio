import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactBanner />
    </div>
  );
};

export default Home;
