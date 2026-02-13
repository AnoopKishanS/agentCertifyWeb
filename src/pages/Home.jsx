import React from 'react';
import Hero from '../components/Hero';
import AboutSolvik from '../components/AboutSolvik';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <AboutSolvik />
            <Features />
            <HowItWorks />
            <UseCases />
            <TargetAudience />
            <Pricing />
        </>
    );
};

export default Home;
