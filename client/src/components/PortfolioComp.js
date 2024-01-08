import React, { useState, useEffect } from 'react';
import './PortfolioComp.css'

const PortfolioComp = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/portfolio')
            .then(response => response.json())
            .then(data => {
                setPortfolioItems(data);
            })
            .catch(error => console.error('Error fetching portfolio:', error));
    }, []);

    return (
        <div>
            {portfolioItems.map((item, index) => (
                <div key={index} className="container mb-5">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    
                    <div className="row mb-3 justify-content-center">
                        <div className="col-8 col-md-6">
                            <video className="port-video w-100" src={item.video_url} controls />
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-md-6">
                            <img className="port-image img-fluid" src={item.image1} alt={`${item.title} Image 1`} />
                        </div>
                        <div className="col-md-6">
                            <img className="port-image img-fluid" src={item.image2} alt={`${item.title} Image 2`} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    
};

export default PortfolioComp;
