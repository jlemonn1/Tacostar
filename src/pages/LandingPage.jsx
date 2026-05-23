import React from 'react';
import Navbar from '../components/layout/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import MenuCompleto from '../sections/MenuCompleto/MenuCompleto';
import Horarios from '../sections/Horarios/Horarios';
import Footer from '../sections/Footer/Footer';
import FloatingOrderButton from '../components/ui/FloatingOrderButton/FloatingOrderButton';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuCompleto />
        <Horarios />
      </main>
      <Footer />
      <FloatingOrderButton />
    </>
  );
}

export default LandingPage;
