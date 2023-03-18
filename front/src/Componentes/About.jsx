import React from 'react';
import style from './About.module.css'
import imagen from '../img/sobremi.png'
import pepito from '../img/pepito.png'


function About() {
  return (
    <div >
    
   <img src={imagen} alt=''  className={style.img}/>
   <a href="https://www.linkedin.com/in/tamara-zaslavsky-27a0331b0/">
    <img src={pepito} className={style.imagebutton}/>
  </a>
   </div>
  )
}

export default About