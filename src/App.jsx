import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PedidoPage from './pages/PedidoPage';
import VisorPage from './pages/VisorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pedido" element={<PedidoPage />} />
      <Route path="/visor" element={<VisorPage />} />
    </Routes>
  );
}

export default App;
