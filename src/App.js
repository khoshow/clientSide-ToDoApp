import React from 'react';
import './App.css';

import { BrowserRouter, Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import Update from './pages/Update';
import Types from './pages/Types';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/update/:slug' element={<Update />} />
        <Route path='/types' element={<Types />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;