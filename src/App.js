import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar';
import Example from './components/Example/Example';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/dashboard" element={<CardList />} />
      </Routes>
    </div>
  )
};

export default App;
