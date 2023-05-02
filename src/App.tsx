import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../src/conponents/Welcome'
import { Home } from './pages/home';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path='/chat' element={Home} /> 
    </Routes>
    </>
    
  );
}

export default App
