import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import guillermo from '../images/guillermo.jpg'
import Header from './Header'
import Backdrop from './Backdrop'
import SideDrawer from './SideDrawer'
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
        <React.Fragment>
        {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
        <SideDrawer show={drawerOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <div className="drawer__image"> 
                <img src={guillermo} alt="my profile picture" />
            </div>
            <div className="drawer__title">
                <h2>Guillermo Lara</h2>
                <h4>San Diego, CA</h4>
            </div>
            
          <ul className="nav-links">
          <li>
                <NavLink exact to="/">ABOUT ME</NavLink>
            </li> 

            <li>
                <NavLink to="/contact">CONTACT</NavLink>
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
        </SideDrawer>

        <Header >
        <button className="navigation__menu-btn" onClick={openDrawerHandler}>
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
            <NavLink exact to="/">ABOUT ME</NavLink>
            </li>
        <li>
            <NavLink to="/contact">CONTACT</NavLink>
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
        </React.Fragment>
    )
}
export default Navigation;