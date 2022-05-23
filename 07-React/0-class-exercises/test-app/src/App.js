import React, { useState, useRef } from 'react';
import Profile from './components/Profile/profile';
import ProfileForm from './components/profileForm/profileForm';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/contact';
// import Input from './components/Input/input.js';

function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to="contact">Contact</Link>
    </nav>
      <Routes>
        <Route exact path="/" element={<ProfileForm />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
