import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { RelativityCalculatorPage } from './pages/RelativityCalculatorPage';
import { BlackHoleConceptPage } from './pages/BlackHoleConceptPage';
import { CodeUniversePage } from './pages/CodeUniversePage';
import { QuantumLabPage } from './pages/QuantumLabPage';
import { ScaleLabPage } from './pages/ScaleLabPage';

// Composant pour gérer la navigation conditionnelle
const AppContent: React.FC = () => {

  return (
    <div className="relative">
      {/* Navigation toujours affichée */}
      <Navigation />
      
      <Routes>
        <Route path="/" element={<CodeUniversePage />} />
        <Route path="/code-univers" element={<CodeUniversePage />} />
        <Route path="/relativity" element={<RelativityCalculatorPage />} />
        <Route path="/black-hole-concept" element={<BlackHoleConceptPage />} />
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