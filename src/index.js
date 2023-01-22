import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './index.css';
import StartPage from './StartPage';
import Login from "./Login";
import Help from "./Help";
import Home from "./Map";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maps" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
