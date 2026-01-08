
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <WhatWeDo />
        <HowItWorks />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default App;
