import React from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
 
 
const KAPOW = () => {
 
    const handleHoverIn = (e) => {
        gsap.to(e.target, { scale: 1.5, duration: 0.2, ease: "power1.inOut" });
    };
 
    const handleHoverOut = (e) => {
        gsap.to(e.target, { scale: 1, duration: 0.2, ease: "power1.inOut" });
    };
 
 
    return (
        <div className="kapow">
            <Link to="/knowledge" className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>K</Link>
            <Link to="/about-me" className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>A</Link>
            <Link to="/portfolio" className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>P</Link>
            <Link to="/offerings" className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>O</Link>
            <Link to="/web-blog" className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>W</Link>
            <div className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>!</div>
            <div className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>!</div>
            <div className="kapow-letter" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>!</div>
        </div>
    );
}
 
export default KAPOW;