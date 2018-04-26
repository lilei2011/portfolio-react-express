import React from 'react';
import { Link } from 'react-router-dom';
import WashingtonStateHealthPlan from '../images/cards/WashingtonHealthPlanFinder.png';

const ProjectsPage = () => (
  <div>
  <div className="section" id="projects">
  <h2 className="heading">Projects</h2>
  <div id="projects-wrapper">
    <div className="card">
      <a href="https://wauat.ghixqa.com/hix/dst/index/?householdId=189727d5-a69e-4f4e-990d-dc6cb24ee3cf&lang=en&appflow=pre&redirectDomain=https%3A%2F%2Fwww.google.com%20-%20pres-search-field" target="_blank">
        <img src={WashingtonStateHealthPlan} />
      </a> 
      
      <div className="description">
        <p>single page application for Washington Health Plan Finder</p>
        <span className="item">Angular 4</span>
        <span className="item">Bootstrap 4</span>
      </div>
    </div>
    <div className="card">
    </div>
    <div className="card">
    </div>
    <div className="card">
    </div>
  </div>
</div>
  </div>
);

export default ProjectsPage;
