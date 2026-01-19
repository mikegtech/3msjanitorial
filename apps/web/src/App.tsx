import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileCTABar } from './components/layout/MobileCTABar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Reviews } from './pages/Reviews';
import { ServiceArea } from './pages/ServiceArea';
import { Services } from './pages/Services';
import { Terms } from './pages/Terms';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Box>
      <Footer />
      <MobileCTABar />
    </Box>
  );
}

export default App;
