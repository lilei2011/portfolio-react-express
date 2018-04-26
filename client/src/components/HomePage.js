import React from 'react';
import lei from '../images/lei.jpg';
const HomePage = () => (
  <div>
     <div className="pageHeader">
        <span className="headerText">Lei Li</span>
        <img className="portrait" src={lei} alt="Lei pic" />
        <span className="headerText">+ CSS + HTML + Javascript = </span>
        <div className="hero">Front end engineer</div>
    </div>
  </div>
);

export default HomePage;
