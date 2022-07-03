import React from 'react';
import { useNavigate } from "react-router";
import "./About.css";
import {motion} from "framer-motion";


function About() {

const navigate = useNavigate();

  return (
    <motion.div className='about' 
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    
    >
      <h1>My, Myself & I</h1>
      <div className="about-p">
      <p>
      I’m a Software Developer and Civil Engineer located in Turkey. I have a serious passion for creating intuitive, dynamic user experiences.
      </p>
      <br/>
      <p>
      Well-organised person, problem solver, independent employee with high attention to detail. Fan of NBA, outdoor activities, TV series, travelling and photography. 
      </p>
      <p onClick={() => navigate("/Contact")} className="p-link">Let's make something special.</p>
      </div>
      <br/><br/>
      {/* <a><img className="about-img" src="https://i.im.ge/2022/06/28/uFdGO9.png" alt="uFdGO9.png" border="0"/></a> */}
    </motion.div>
  )
}

export default About