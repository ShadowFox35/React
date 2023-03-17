import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/Main/About/About';
import Error from './components/Main/Error/Error';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      {/* меняется середина */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
