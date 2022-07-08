import React from 'react';
import { useNavigate } from "react-router";
import "./Home.css";
import {motion} from "framer-motion";
import "./Home.scss";
import * as AiIcons from "react-icons/ai";
// import TypeWriterEffect from 'react-typewriter-effect';


function Home() {
  
  const navigate = useNavigate();

  return (
    <motion.div className="home" initial={{ y: 200 }} animate={{ y: 0 }}>
      {/* <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={550}
            cursorColor="black"
            text="This is a single text"
            typeSpeed={100}
            
          /> */}
      <div className="container">
        <h1>Hey, I'm Bahadır Çolak </h1>
        <p>Software Developer / Civil Engineer</p>
        <button onClick={() => navigate("/Contact")}>
          <span>Contact me!</span>
        </button>
      </div>

      <div className="outer-div">
        <div className="inner-div">
          <div className="front">
            <div className="front__bkg-photo"></div>
            <div className="front__face-photo"></div>
            <div className="front__text">
              <h3 className="front__text-header">Bahadır Çolak</h3>
              <p className="front__text-para">
                <i className="fas fa-map-marker-alt front-icons"></i>Istanbul
              </p>
              <p className="mail-text">
                bahadircolak.dev@gmail.com
              </p>

              <span className="front__text-hover">Hover to Find Me</span>
            </div>
          </div>
          <div className="back">
            <div className="social-media-wrapper">
              <a href="https://www.instagram.com/baahadircolak/" className="social-icon" target="blank">
                <i className="fab fa-github-square" aria-hidden="true"><AiIcons.AiOutlineInstagram /></i>
              </a>
              <a href="https://github.com/bahacolak" className="social-icon" target="blank">
                <i className="fab fa-linkedin-square" aria-hidden="true"><AiIcons.AiOutlineGithub /></i>
              </a>
              <a href="https://www.linkedin.com/in/bahadircolak3458/" className="social-icon" target="blank">
                <i className="fab fa-instagram" aria-hidden="true"><AiIcons.AiFillLinkedin /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home