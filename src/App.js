import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <main className="app__content">
          <Routes>
            <Route exact="true" path="/" element={<Home/>}/>
            <Route exact="true" path="/about" element={<About/>}/>
            <Route exact="true" path="/contacts" element={<Contacts/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
