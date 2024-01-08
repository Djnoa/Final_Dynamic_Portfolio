import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
   

    return (
        <div className="navi-bar">
            <Link to="/knowledge" className="navi-link" >Knowledge</Link>
            <Link to="/about-me" className="navi-link" >About Me</Link>
            <Link to="/portfolio" className="navi-link" >Portfolio</Link>
            <Link to="/offerings" className="navi-link" >Offerings</Link>
            <Link to="/web-blog" className="navi-link" >Web Blog</Link>
        </div>
    );
}

export default NavBar;