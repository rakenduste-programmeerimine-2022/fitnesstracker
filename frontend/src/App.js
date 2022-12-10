import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Box from '@mui/material/Box';
import './styles/App.css';
import BodyTracking from './pages/BodyTracking';
import CalorieTracking from './pages/CalorieTracking';
import Comparison from './pages/Comparison';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StatsGraph from './pages/StatsGraph';

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodytrack" element={<BodyTracking />} />
      <Route path="/calorietrack" element={<CalorieTracking />} />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/statsgraph" element={<StatsGraph />} />
    </Routes>
  );
}

export default App;
