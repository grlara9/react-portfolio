import React from 'react'
import amazon2 from '../images/amazon2.png'
import googlemern from '../images/google-mern.png'
import click from '../images/dbz2.png'
import weatherapp from '../images/weatherapp.png'
import burger from '../images/bur.png'
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
                    <a href="https://googlesearchappp.herokuapp.com/">
                        <button class="demo btn btn-lg btn-outline-secondary ">Demo</button>
                    </a>
                    <a href="https://github.com/grlara9/google-book-search-mern">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
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

            <div className="project">
            <div className="project__image">
                    <img src={burger} alt="project image" />
                    <h1>Eat Your Burger</h1>
                </div>
                <div className="project__specification">
                    <p>A burger logger with MySQL, Node, Express, Handlebars and using Sequelize.js. Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.</p>
                </div>
                <div className="project__links">
                    <a href="https://fast-woodland-65175.herokuapp.com/">
                        <button class="demo btn btn-lg btn-outline-secondary ">Demo</button>
                    </a>
                    <a href="https://github.com/grlara9/sequelizeBurger">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

            <div className="project">
            <div className="project__image">
                    <img src={weatherapp} alt="project image" />
                    <h1>React Weather App</h1>
                </div>
                <div className="project__specification">
                    <p>A Weather app built in React js using OpenWeathermap API. User can search by typing city. Default temperature is the users location.</p>
                </div>
                <div className="project__links">
                    <a href="https://grlara9.github.io/react-weather-app-hooks/">
                        <button class="demo btn btn-lg btn-outline-secondary ">Demo</button>
                    </a>
                    <a href="https://github.com/grlara9/react-weather-app-hooks">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>


            <div className="project">
            <div className="project__image">
                    <img src={amazon2} alt="project image" />
                    <h1>Amazon Clone App</h1>
                </div>
                <div className="project__specification">
                    <p>Amazon Clone is a project from cleverprogrammer where you can create a product, add the products to the cart, do a payment, and watch your order history.</p>
                </div>
                <div className="project__links">
                    <a href="https://clone-4aa3d.web.app/">
                        <button class="demo btn btn-lg btn-outline-secondary ">Demo</button>
                    </a>
                    <a href="https://github.com/grlara9/amazon_clone">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>
           
        </div>
    )
}
export default Portfolio