import React from 'react'
import { NavLink } from 'react-router-dom';

import Header from './Header'
import './Navigation.css'

const Navigation =( ) => {
    return (
        <Header >
        <button className="navigation__menu-btn">
          <span />
          <span />
          <span />
        </button> 

        <h1 className="navigation__title">Guillermo Lara</h1>

        <nav className="navigation__header-nav">
        <ul className="nav-links">
        <li>
            <NavLink to="">CONTACT</NavLink>
            </li>
        
        <li>
            <NavLink to="/">ABOUT ME</NavLink>
            </li>
        
        <li>
            <NavLink to="">PORTFOLIO</NavLink>
            </li>
    
      
    </ul>
        </nav>

        </Header>

    )
}
export default Navigation;