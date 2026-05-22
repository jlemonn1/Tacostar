import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import TopGratens from './sections/TopGratens/TopGratens';
import MenuBuilder from './sections/MenuBuilder/MenuBuilder';
import MenuCompleto from './sections/MenuCompleto/MenuCompleto';
import Horarios from './sections/Horarios/Horarios';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* {/<TopGratens />/ */}
        {/*<MenuBuilder /> */}
        <MenuCompleto />
        <Horarios />
      </main>
      <Footer />
    </>
  );
}

export default App;
