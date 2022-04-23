import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//pages
import Sidebar from "./components/Sidebar"; 
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import MySkills from './components/pages/MySkills';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='About' element={<About />}/>
        <Route path="MySkills" element={<MySkills />}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
