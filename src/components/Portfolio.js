import React from 'react'
import googlemern from '../images/google-mern.png'
import click from '../images/click.png'
import './Portfolio.css'; 

const Portfolio =()=>{
    return(
        <div className="portfolio">
             
            <div className="project">
                <div className="project__image">
                    <img src={googlemern} alt="project image" />
                    <h1>Google Search Book App</h1>
                </div>
                
                <div className="project__specification">
                    <p>Mern React-based Google Books Search app that displays books on user searches. 
                        Users can save them to review or purchase later.</p>
                </div>
                <div className="project__links">
                    <button>hello</button>
                    <button>Push</button>
                </div>
            </div>

            <div className="project">
            <div className="project__image">
                    <img src={click} alt="project image" />
                    <h1>Dragon Ball Z Memory</h1>
                </div>
                <div className="project__specification">
                    <p>A memory challenge game built in React JS. Click on a Dragon ball Z character. But don't click on the same character twice or you lose..</p>
                </div>
                <div className="project__links">
                    <a href="https://ancient-caverns-87467.herokuapp.com/">
                        <button class="demo btn btn-lg btn-outline-secondary ">Demo</button>
                    </a>
                    <a href="https://github.com/grlara9/ClickyGame">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

           
           
        </div>
    )
}
export default Portfolio