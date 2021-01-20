import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from './Header'
import './Navigation.css'

const Navigation =( ) => {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const openDrawerHandler= () =>{
        setDrawerOpen(true)
    }

    const closeDrawerHandler = ()=>{
        setDrawerOpen(false)
    }
    return (
        <Header >
        <button className="navigation__menu-btn">
          <span />
          <span />
          <span />
        </button> 

        <h1 className="navigation__title">
        <NavLink to="/">
            Guillermo Lara
            
        </NavLink>
            </h1>

        <nav className="navigation__header-nav">
        <ul className="nav-links">
        <li>
            <NavLink to="/contact">CONTACT</NavLink>
            </li>
        
        <li>
            <NavLink to="/">ABOUT ME</NavLink>
            </li>
        
        <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
           
            <li>
            <a href="https://www.linkedin.com/in/guillermo-lara-7a0147161/">
                <LinkedInIcon />
            </a>
            </li>

            <li>
            <a href="https://github.com/grlara9"><GitHubIcon /></a>
            </li>
      
    </ul>
        </nav>

        </Header>

    )
}
export default Navigation;