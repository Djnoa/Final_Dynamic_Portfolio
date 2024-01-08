import React, { useState, useEffect } from 'react';
 
const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:5000/portfolio')
            .then(response => response.json())
            .then(data => setPortfolio(data))
            .catch(error => console.error('Error fetching portfolio:', error));
    }, []);
 
    return (
        <div>
            {portfolio.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={item.image1} alt="Image 1" />
                    <img src={item.image2} alt="Image 2" />
                    <video width="320" height="240" controls>
                        <source src={item.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};
 
export default Portfolio;