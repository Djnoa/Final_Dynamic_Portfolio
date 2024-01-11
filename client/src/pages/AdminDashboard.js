import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const AdminDashboard = () => {
    const navigate = useNavigate(); 

    const navigateTo = (path) => {
        navigate(path); 
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <button onClick={() => navigateTo('/edit-skills')}>Edit Skills</button>
                <button onClick={() => navigateTo('/edit-portfolio')}>Edit Portfolio</button>
                
            </nav>
        </div>
    );
};

export default AdminDashboard;
