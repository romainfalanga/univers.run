import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { RelativityCalculatorPage } from './pages/RelativityCalculatorPage';
import { BlackHoleConceptPage } from './pages/BlackHoleConceptPage';
import { CodeUniversePage } from './pages/CodeUniversePage';
import { GodCodesInBinaryPage } from './pages/GodCodesInBinaryPage';
import { QuantumLabPage } from './pages/QuantumLabPage';
import { ScaleLabPage } from './pages/ScaleLabPage';

// Composant pour gérer la navigation conditionnelle
const AppContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="relative">
      {/* Navigation conditionnelle - ne s'affiche pas sur la landing page */}
      {!isLandingPage && <Navigation />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code-univers" element={<CodeUniversePage />} />
        <Route path="/relativity" element={<RelativityCalculatorPage />} />
        <Route path="/black-hole-concept" element={<BlackHoleConceptPage />} />
        <Route path="/god-binary" element={<GodCodesInBinaryPage />} />
        <Route path="/quantum-lab" element={<QuantumLabPage />} />
        <Route path="/scale-lab" element={<ScaleLabPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;