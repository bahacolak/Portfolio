import React from 'react';
import "./Projects.css";
import {motion} from "framer-motion";


function Projects() {
  return (
    <motion.div className='projects' 
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    >
      <h1>Work in progress</h1>
    </motion.div>
  )
}

export default Projects