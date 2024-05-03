import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Panels from './components/Panels';
import Footer from './components/Footer';
import Demo from './components/Demo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <div>
        <Home title="Model Y" price1="$29,490*" price2="42990" backgroundImg="model-y.jpg" />
        <Home title="Model 3" price1="$299/mo*" price2="" backgroundImg="Homepage-Model-3-Desktop-LHD-v2.avif" />
        <Home title="Model X" price1="$63,990*" price2="77,990" backgroundImg="model-x.jpg" />
        <Home title="Model S" price1="$66,490*" price2="72,990" backgroundImg="Homepage-Model-S-Desktop-LHD-6.22.avif" />
        <Panels title="Solar Panels" desc="Schedule a Virtual Consultation" backgroundImg="Homepage-SolarPanels-01-Desktop.avif" />
        <Panels title="Solar Roof" desc="Produce Clean Energy From Your Roof" backgroundImg="Homepage-SolarRoof-Desktop-Global.avif" />
        <Panels title="PowerWall" backgroundImg="Homepage-Powerwall-01-Desktop.avif" />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
