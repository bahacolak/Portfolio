import React from 'react';
import { useNavigate } from "react-router";
import "./Home.css";
import {motion} from "framer-motion";


function Home() {
  
  const navigate = useNavigate();

  return (
     <motion.div className='home' 
     
     initial={{ y: 100 }}
    animate={{ y: 0 }}
    
    >
    
      <div className='container'>            
        <h1>Hey, I'm Bahadır Çolak </h1>
        <p>Software Developer / Civil Engineer</p>
        <button onClick={() => navigate("/Contact")} className='btn'>Contact me!</button>  
      </div>     
     </motion.div>
  )
}

export default Home