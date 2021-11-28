import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Solicitudes from './pages/Solicitudes'
import NSolicitudes from './pages/NSolicitudes'
import Aprobar from './pages/Aprobar';


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path='/solicitudes' element={<Solicitudes />} />
          <Route path='/nsolicitudes' element={<NSolicitudes />} />
          <Route path='/aprobar' element={<Aprobar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
