import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ClassicalRelativityPage } from './pages/ClassicalRelativityPage';
import { RelativityCalculatorPage } from './pages/RelativityCalculatorPage';
import { GeneralRelativityPage } from './pages/GeneralRelativityPage';
import { BlackHoleConceptPage } from './pages/BlackHoleConceptPage';
import { CodeUniversePage } from './pages/CodeUniversePage';
import { QuantumLabPage } from './pages/QuantumLabPage';
import { ScaleLabPage } from './pages/ScaleLabPage';
import { ScaleRelativityPage } from './pages/ScaleRelativityPage';
import { SpaceTimeScaleFabricPage } from './pages/SpaceTimeScaleFabricPage';
import { RestrictedScaleRelativityPage } from './pages/RestrictedScaleRelativityPage';
import { GeneralScaleRelativityPage } from './pages/GeneralScaleRelativityPage';
import { ThoughtExperimentsScalePage } from './pages/ThoughtExperimentsScalePage';
import { BlackHolesScalePage } from './pages/BlackHolesScalePage';

// Composant pour gérer la navigation conditionnelle
const AppContent: React.FC = () => {

  return (
    <div className="relative">
      {/* Navigation toujours affichée */}
      <Navigation />
      
      <Routes>
        <Route path="/" element={<CodeUniversePage />} />
        <Route path="/code-univers" element={<CodeUniversePage />} />
        <Route path="/relativite-classique" element={<ClassicalRelativityPage />} />
        <Route path="/relativity" element={<RelativityCalculatorPage />} />
        <Route path="/relativite-generale" element={<GeneralRelativityPage />} />
        <Route path="/black-hole-concept" element={<BlackHoleConceptPage />} />
        <Route path="/quantum-lab" element={<QuantumLabPage />} />
        <Route path="/scale-lab" element={<ScaleLabPage />} />
        <Route path="/relativite-echelles" element={<ScaleRelativityPage />} />
        <Route path="/tissu-espace-temps-echelle" element={<SpaceTimeScaleFabricPage />} />
        <Route path="/relativite-restreinte-echelles" element={<RestrictedScaleRelativityPage />} />
        <Route path="/relativite-generale-echelles" element={<GeneralScaleRelativityPage />} />
        <Route path="/experiences-pensee-echelles" element={<ThoughtExperimentsScalePage />} />
        <Route path="/trous-noirs-echelles" element={<BlackHolesScalePage />} />
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