import React from 'react';
import Hero from '../components/Hero';
import IntroAnimation from '../components/IntroAnimation';
import AboutSolvik from '../components/AboutSolvik';
import WhySolvik from '../components/WhySolvik';
import ModernDev from '../components/ModernDev';
import ROISection from '../components/ROISection';
import HowItWorks from '../components/HowItWorks';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <IntroAnimation />
            <AboutSolvik />
            <WhySolvik />
            <HowItWorks />
            <ModernDev />
            <ROISection />
            <TargetAudience />
            <Pricing />
        </>
    );
};

export default Home;
