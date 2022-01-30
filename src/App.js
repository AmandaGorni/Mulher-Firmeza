import React from 'react';

import Navbar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Download from './components/Download';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Services />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </>
  );
}
