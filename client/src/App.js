import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
// import AboutMe from './pages/AboutMe.js'
// import WebBlog from './pages/WebBlog.js'
import Knowledge from './pages/Knowledge.js'
import Portfolio from './pages/Portfolio.js'
import AdminDashboard from './pages/AdminDashboard.js';
import EditSkills from './pages/EditSkills.js'
import 'bootstrap/dist/css/bootstrap.min.css';

 
 
import './App.css';
 
const App = () => {
 
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about-me" element={<AboutMe />} />
          <Route path="/web-blog" element={<WebBlog />} /> */}
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/admin" element={<AdminDashboard />} /> 
          <Route path="/edit-skills" element={<EditSkills />} /> 

        </Routes>
    </Router>
  );
};
 
export default App;