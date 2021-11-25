import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Solicitudes from './pages/Solicitudes'
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path='/solicitudes' element={<Solicitudes/>}  />

        </Routes>
      </Router>
    </>
  );
}

export default App;
