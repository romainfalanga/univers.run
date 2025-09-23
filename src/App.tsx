import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { RelativityCalculatorPage } from './pages/RelativityCalculatorPage';
import { BlackHoleConceptPage } from './pages/BlackHoleConceptPage';
import { UniverseAppPage } from './pages/UniverseAppPage';
import { GodCodesInBinaryPage } from './pages/GodCodesInBinaryPage';
import { QuantumLabPage } from './pages/QuantumLabPage';
import { ScaleLabPage } from './pages/ScaleLabPage';

function App() {
  return (
    <div className="relative">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<UniverseAppPage />} />
          <Route path="/universe" element={<UniverseAppPage />} />
          <Route path="/relativity" element={<RelativityCalculatorPage />} />
          <Route path="/black-hole-concept" element={<BlackHoleConceptPage />} />
          <Route path="/god-binary" element={<GodCodesInBinaryPage />} />
          <Route path="/quantum-lab" element={<QuantumLabPage />} />
          <Route path="/scale-lab" element={<ScaleLabPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;