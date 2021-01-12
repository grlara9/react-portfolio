import React from 'react'

import './Aboutme.css'
import guillermo from '../images/guillermo.jpg'

const Aboutme =()=>{
    return(
       
                <div className="place-item__content">
                    <div className="place-item__image"> 
                        <img src={guillermo} alt="my profile picture" />
                        <span>Full Stack Developer</span>
                    </div>
                    <div className="place-item__info">
                        <p>Hi, I'm Guillermo, I'm a full stack developer living in San Diego</p>
                        <p>
                        I like to learn from my mistakes. Constantly challenges my knowledge to become the more efficient on what I do.
                        I specialized working on the backend programming. Enough about me, go checkout some of my work. </p>
                    </div>
                </div>
           
    );
}
export default Aboutme
