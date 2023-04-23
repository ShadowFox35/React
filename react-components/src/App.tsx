import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Main from './components/Main/Main';
import About from './components/Main/About/About';
import Error from './components/Main/Error/Error';
import Header from './components/Header/Header';
import Forms from 'components/Main/Forms/Forms';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
