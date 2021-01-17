import React from 'react'

import './Aboutme.css'
import guillermo from '../images/guillermo.jpg'

const Aboutme =()=>{
    return(
       <div className="container">
           <div className="aboutme">
            <div className="aboutme__image"> 
                <img src={guillermo} alt="my profile picture" />
            </div>

            <div className="aboutme__info">
                <h1>Guillermo Lara</h1>
                <h2>Full Stack Developer/ React Developer</h2>
                <p>Hi, I'm Guillermo, I'm a full stack developer living in San Diego</p>
                <p>I like to learn from my mistakes. Constantly challenges my knowledge to become the more efficient on what I do.
                I specialized working on the backend programming. Enough about me, go checkout some of my work. </p>
            </div>
        </div>
        </div>
    );
}
export default Aboutme
