import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import { ClassicalRelativityPage } from './pages/ClassicalRelativityPage';
import { RelativityCalculatorPage } from './pages/RelativityCalculatorPage';
import { GeneralRelativityPage } from './pages/GeneralRelativityPage';
import { CodeUniversePage } from './pages/CodeUniversePage';
import { ScaleRelativityPage } from './pages/ScaleRelativityPage';
import { CreationPage, PassagePage, WhyNoReturnPage, QuantumUniverseSizePage, InternalUniversesPage, HarmonyDescentPage, SingularityPage, EventHorizonPage, InvisibilityPage, BehindHorizonPage } from './pages/blackholes';
import { UniversalBudgetPage, ImmobileStatePage, ExtremSpeedPage, PivotTemporelPage, TapisRoulantRestrictedPage } from './pages/restricted';
import { UniversalEscalatorPage, EnvironmentsPage, RadiationEffectPage, MultiplierCoefficientPage } from './pages/general';
import { MuseumEntrancePage, FirstRoomPage } from './pages/experiments';
import { IllusionExpansionPage, HubbleLawPage, DarkEnergyPage } from './pages/expansion';
import { SuperpositionTissusPage, TapisRoulantFabricPage } from './pages/fabric';
import { TreadmillsHubPage } from './pages/scale';

const AppContent: React.FC = () => {

  return (
    <div className="relative">
      <SEO />
      <Navigation />

      <Routes>
        <Route path="/" element={<ScaleRelativityPage />} />
        <Route path="/code-univers" element={<CodeUniversePage />} />
        <Route path="/relativite-classique" element={<ClassicalRelativityPage />} />
        <Route path="/relativity" element={<RelativityCalculatorPage />} />
        <Route path="/relativite-generale" element={<GeneralRelativityPage />} />
        <Route path="/relativite-echelles" element={<ScaleRelativityPage />} />

        <Route path="/tissu-espace-temps-echelle/superposition" element={<SuperpositionTissusPage />} />
        <Route path="/tissu-espace-temps-echelle/tapis-roulant" element={<TapisRoulantFabricPage />} />

        <Route path="/relativite-restreinte-echelles/budget-universel" element={<UniversalBudgetPage />} />
        <Route path="/relativite-restreinte-echelles/pivot-temporel" element={<PivotTemporelPage />} />
        <Route path="/relativite-restreinte-echelles/tapis-roulant" element={<TapisRoulantRestrictedPage />} />
        <Route path="/relativite-restreinte-echelles/immobile" element={<ImmobileStatePage />} />
        <Route path="/relativite-restreinte-echelles/vitesse-extreme" element={<ExtremSpeedPage />} />

        <Route path="/relativite-generale-echelles/escalator-universel" element={<UniversalEscalatorPage />} />
        <Route path="/relativite-generale-echelles/environnements" element={<EnvironmentsPage />} />
        <Route path="/relativite-generale-echelles/effet-rayonnement" element={<RadiationEffectPage />} />
        <Route path="/relativite-generale-echelles/coefficient-multiplicateur" element={<MultiplierCoefficientPage />} />

        <Route path="/relativite-echelles-final" element={<TreadmillsHubPage />} />

        <Route path="/experiences-pensee-echelles/entree-musee" element={<MuseumEntrancePage />} />
        <Route path="/experiences-pensee-echelles/premiere-piece" element={<FirstRoomPage />} />

        <Route path="/expansion-interne/illusion-expansion" element={<IllusionExpansionPage />} />
        <Route path="/expansion-interne/loi-hubble" element={<HubbleLawPage />} />
        <Route path="/expansion-interne/energie-sombre" element={<DarkEnergyPage />} />

        <Route path="/trous-noirs-echelles/creation" element={<CreationPage />} />
        <Route path="/trous-noirs-echelles/passage" element={<PassagePage />} />
        <Route path="/trous-noirs-echelles/retour-impossible" element={<WhyNoReturnPage />} />
        <Route path="/trous-noirs-echelles/taille-univers" element={<QuantumUniverseSizePage />} />
        <Route path="/trous-noirs-echelles/univers-internes" element={<InternalUniversesPage />} />
        <Route path="/trous-noirs-echelles/harmonie" element={<HarmonyDescentPage />} />
        <Route path="/trous-noirs-echelles/singularite" element={<SingularityPage />} />
        <Route path="/trous-noirs-echelles/horizon" element={<EventHorizonPage />} />
        <Route path="/trous-noirs-echelles/invisibilite" element={<InvisibilityPage />} />
        <Route path="/trous-noirs-echelles/derriere-horizon" element={<BehindHorizonPage />} />
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
