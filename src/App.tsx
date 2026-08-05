import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CateringService from './pages/CateringService';
import FindUs from './pages/FindUs';
import AboutUs from './pages/AboutUs';
import { WhatsAppFloatingButton } from './components/Shared';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catering" element={<CateringService />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <WhatsAppFloatingButton />
    </Router>
  );
}

export default App;