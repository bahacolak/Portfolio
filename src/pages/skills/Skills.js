import React from 'react';
import "./Skills.css";
import "./Skills.scss";
import * as MdIcons from "react-icons/md";
import {motion} from "framer-motion";


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 900);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		</div>
	)
}


function Skills() {

  return (
   
    <motion.div className='skills' 
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    
    >
      <div className="container">
      <h1>Skills & Experience</h1>
      <div className="skills-p">
      <p>I started my education life with civil engineering. 
        When I was studying, I became interested in programming and started learning on my own.
      </p>
      <p>
      Besides, I have been working in the family business for about 7 years. Its business area is production and export. 
      I, on the other hand, deal with the buying-selling and operation process.
      </p>
      <p>
      I can do small projects to improve myself using JS, CSS, HTML.
      As I progressed in front-end development, I also started to improve myself in the back-end field.
      </p>
      <p>
      In the field of backend development, I have knowledge about technologies such as java and spring boot.
      I continue to learn and improve. I can say that I am extremely enthusiastic about this. 
      </p>
      </div>
      </div>

      
      {/* fdfdfd */}
      <>
      <div className="skill-bar">    
       <p>Front-end</p>
		   <Progress done="60" className="front-end"/>
       <p>Back-end</p>
       <Progress done="35"/>
       <p>ReactJS</p>
       <Progress done="60"/>
       <p>Css, Sass, Tailwind Css</p>
       <Progress done="60"/>
       <p>Spring Boot</p>
       <Progress done="35"/>
       <p>Java</p>
       <Progress done="35"/>
       <p>MySQL</p>
       <Progress done="20"/>
	    </div>
      </>

      {/* fdfdfd */}


<section id="sec">
  <h2>Experience</h2>
  <ul>
    <li className="card_bg">
      <span className="fa fa-code"></span>
      <a href="https://ecodation.com/" target="blank">
      <img className="card__image__ecodation" src="https://i.imgur.com/5UBSL6I.jpg" alt=""></img>
      </a>
      <h3>Software Developing Intern</h3>
      <p><MdIcons.MdLocationPin className="location-icon"/>Istanbul / Turkey</p>
      <p>Skills: Cascading Style Sheets (CSS) · Spring Framework · MySQL · Spring Boot · Java · JavaScript · React.js</p>
      <p>Mar/2/2022 - Present</p>
    </li>
    <li className="card_bg">
      <span className="fa fa-music"></span>
      <a href="https://www.google.com/search?q=food+lion+ocean+city+md&ei=2-y9YvDfG5KGxc8P9YqbmAQ&oq=food+lion+ocean+&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzoHCAAQRxCwAzoHCAAQsAMQQzoSCC4QxwEQowIQyAMQsAMQQxgBOhIILhDHARDRAxDIAxCwAxBDGAE6CwguEIAEEMcBEK8BOgUIABCABDoGCAAQHhAWOgoILhDHARCvARATSgQIQRgASgQIRhgBUNoFWOMMYMQSaAFwAXgAgAGRAYgBjQeSAQMwLjeYAQCgAQHIARTAAQHaAQYIARABGAg&sclient=gws-wiz" target="blank">
        <img className="card__image__foodlion" src="https://i.imgur.com/z1pyHDL.png" alt=""></img>
      </a>
      <h3>Warehouse Manager</h3>
      <p><MdIcons.MdLocationPin className="location-icon"/>Ocean City, MD / United States</p>
      <p>Jun/15/2019 - 5 months</p>
      
    </li>
    <li className="card_bg">
      <span className="fa fa-users"></span>
      <a href="https://www.teknikyapi.com/" target="blank">
      <img className="card__image__teknikyapi" src="https://i.imgur.com/RoQIoME.jpeg" alt=""></img>
      </a>
      <h3>Civil Engineering Intern</h3>
      <p><MdIcons.MdLocationPin className="location-icon"/>Istanbul / Turkey</p>
      <p>Sep/12/2021 - 2 months</p>
      </li>


      <li className="card_bg">
      <span className="fa fa-users"></span>
      <a href="https://www.revgenius.com/" target="blank">
      <img className="card__image__revgenius" src="https://i.imgur.com/hVq0IP6.jpg " alt=""></img>
      </a>
      <h3>Member of RevGenius</h3>
      <p>RevGenius is a community where people contribute, learn and grow together in business, sales and marketing.</p>
      <p>May/16/2022 - Present</p>
      </li>

  </ul>
</section>

    </motion.div>
  )
}



export default Skills

//Ecodation
// 'https://i.imgur.com/5UBSL6I.jpg'
// //teknik yapı
// 'https://i.imgur.com/RoQIoME.jpeg'
//foodlion
//"https://i.imgur.com/z1pyHDL.png"
//https://i.imgur.com/hVq0IP6.jpg revgenius