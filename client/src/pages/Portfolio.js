import React from 'react';
import NavBar from '../components/NavBar';
import PortfolioComp from '../components/PortfolioComp';
import './Portfolio.css'
 
 
const Portfolio = () => {
    return (
        <div className = 'portfolio-page'>
            <NavBar />
            <div className = 'portfolio-content'>
            <h1 style={{color: 'black'}}>Portfolio</h1>
            <PortfolioComp/>
            </div>
        </div>
    );
};
 
export default Portfolio