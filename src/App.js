import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";


function App() {

  return (
    <>
      <Router>
         <Sidebar />
         <AnimatePresence>
         <Routes>
           <Route path='/' index element={<Home />} />
           <Route path='/about' element={<About />}/>
           <Route path='/skills' element={<Skills />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/contact' element={<Contact />} />
         </Routes>
         </AnimatePresence>
      </Router>
    </>
  );
}

export default App;