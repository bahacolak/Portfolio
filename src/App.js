import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <>   
      <Router>
         <Sidebar />
         <Routes>
           <Route path='/' index element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/skills' element={<Skills />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/contact' element={<Contact />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;