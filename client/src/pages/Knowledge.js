import React from 'react';
import NavBar from '../components/NavBar';
import SkillsGraph from '../components/SkillsGraph';
import './Knowledge.css'
 
 
const Knowledge = () => {
    return (
        <div className = 'knowledge-page'>
            <NavBar />
            <div className = 'knowledge-content'>
            <h1 style={{color: 'black'}}>My Knowledge</h1>
            <SkillsGraph />
            </div>
        </div>
    );
};
 
export default Knowledge;
 